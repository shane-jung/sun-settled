import { createBillingJob, getAllBillingJobs, getBillingJob } from "@/lib/jobs"
import { prisma } from "@/lib/prisma"
import { schedulerClient } from "@/lib/schedules"
import { CreateScheduleCommand } from "@aws-sdk/client-scheduler"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const data = await request.json()
  const date = new Date(data.startDate)
  const subscriptionPlan = await prisma.subscriptionPlan.findUnique({
    where: {
      id: data.subscriptionPlanId,
    },
  })
  if (!subscriptionPlan)
    return NextResponse.json({ error: "Subscription plan not found" })

  const cron = `0 9 ${date.getDate()} ${
    subscriptionPlan.billingFrequency == "monthly" ? "*" : date.getMonth() + 1
  } ? *`

  const input = {
    Name: `${data.subscriptionPlanId}-${data.gardenId}`,
    GroupName: "SunSettled",
    ScheduleExpression: `cron(${cron})`,
    StartDate: new Date(data.startDate),
    EndDate: new Date(data.endDate),
    Target: {
      Arn: "arn:aws:lambda:us-east-2:407768964271:function:myHelloWorld",
      RoleArn:
        "arn:aws:iam::407768964271:role/service-role/myHelloWorld-role-rqd4r0je",
      Input: JSON.stringify({
        subscriptionPlanId: data.subscriptionPlanId,
        gardenId: data.gardenId,
      }),
    },
    FlexibleTimeWindow: {
      Mode: "FLEXIBLE",
      MaximumWindowInMinutes: Number(10),
    },
  }
  const command = new CreateScheduleCommand(input)
  const response = await schedulerClient.send(command)
  console.log(response)
  if (!response.ScheduleArn)
    return NextResponse.json({ error: "Error creating schedule" })

  const billingJob = await createBillingJob({
    data: {
      ...data,
      scheduleArn: response.ScheduleArn,
    },
  })
  return NextResponse.json(billingJob)
}
