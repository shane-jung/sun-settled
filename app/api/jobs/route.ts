import { prisma } from "@/lib/prisma"
import {
  CreateScheduleCommand,
  SchedulerClient,
} from "@aws-sdk/client-scheduler"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id")
  let billingJobs
  if (id)
    billingJobs = await prisma.billingJob.findUnique({
      where: {
        id: id,
      },
    })
  else billingJobs = await prisma.billingJob.findMany()

  return NextResponse.json(billingJobs)
}

export async function POST(request: NextRequest) {
  const data = await request.json()

  const config = {
    region: "us-east-2",
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  }

  const client = new SchedulerClient(config)
  const input = {
    // CreateScheduleInput
    Name: "newSchedule", // required
    ScheduleExpression: "cron(0 9 1 * ? *)", // required
    StartDate: new Date(data.scheduled_date),
    // EndDate: new Date("TIMESTAMP"),
    // Description: "STRING_VALUE",
    // ScheduleExpressionTimezone: "STRING_VALUE",
    // State: "STRING_VALUE",
    // KmsKeyArn: "STRING_VALUE",
    Target: {
      // Target
      Arn: "arn:aws:lambda:us-east-2:407768964271:function:myHelloWorld", // required
      RoleArn:
        "arn:aws:iam::407768964271:role/service-role/myHelloWorld-role-rqd4r0je", // required
      //   DeadLetterConfig: {
      //     // DeadLetterConfig
      //     Arn: "STRING_VALUE",
      //   },
      //   RetryPolicy: {
      //     // RetryPolicy
      //     MaximumEventAgeInSeconds: Number("int"),
      //     MaximumRetryAttempts: Number("int"),
      //   },
      //   Input: "STRING_VALUE",
      //   EcsParameters: {
      //     // EcsParameters
      //     TaskDefinitionArn: "STRING_VALUE", // required
      //     TaskCount: Number("int"),
      //     LaunchType: "STRING_VALUE",
      //     NetworkConfiguration: {
      //       // NetworkConfiguration
      //       awsvpcConfiguration: {
      //         // AwsVpcConfiguration
      //         Subnets: [
      //           // Subnets // required
      //           "STRING_VALUE",
      //         ],
      //         SecurityGroups: [
      //           // SecurityGroups
      //           "STRING_VALUE",
      //         ],
      //         AssignPublicIp: "STRING_VALUE",
      //       },
      //     },
      //     PlatformVersion: "STRING_VALUE",
      //     Group: "STRING_VALUE",
      //     CapacityProviderStrategy: [
      //       // CapacityProviderStrategy
      //       {
      //         // CapacityProviderStrategyItem
      //         capacityProvider: "STRING_VALUE", // required
      //         weight: Number("int"),
      //         base: Number("int"),
      //       },
      //     ],
      //     EnableECSManagedTags: true || false,
      //     EnableExecuteCommand: true || false,
      //     PlacementConstraints: [
      //       // PlacementConstraints
      //       {
      //         // PlacementConstraint
      //         type: "STRING_VALUE",
      //         expression: "STRING_VALUE",
      //       },
      //     ],
      //     PlacementStrategy: [
      //       // PlacementStrategies
      //       {
      //         // PlacementStrategy
      //         type: "STRING_VALUE",
      //         field: "STRING_VALUE",
      //       },
      //     ],
      //     PropagateTags: "STRING_VALUE",
      //     ReferenceId: "STRING_VALUE",
      //     Tags: [
      //       // Tags
      //       {
      //         // TagMap
      //         "<keys>": "STRING_VALUE",
      //       },
      //     ],
      //   },
      //   EventBridgeParameters: {
      //     // EventBridgeParameters
      //     DetailType: "STRING_VALUE", // required
      //     Source: "STRING_VALUE", // required
      //   },
      //   KinesisParameters: {
      //     // KinesisParameters
      //     PartitionKey: "STRING_VALUE", // required
      //   },
      //   SageMakerPipelineParameters: {
      //     // SageMakerPipelineParameters
      //     PipelineParameterList: [
      //       // SageMakerPipelineParameterList
      //       {
      //         // SageMakerPipelineParameter
      //         Name: "STRING_VALUE", // required
      //         Value: "STRING_VALUE", // required
      //       },
      //     ],
      //   },
      //   SqsParameters: {
      //     // SqsParameters
      //     MessageGroupId: "STRING_VALUE",
      //   },
    },
    FlexibleTimeWindow: {
      // FlexibleTimeWindow
      Mode: "FLEXIBLE", // required
      MaximumWindowInMinutes: Number(10),
    },
    //   ClientToken: "STRING_VALUE",
    //   ActionAfterCompletion: "STRING_VALUE",
  }
  const command = new CreateScheduleCommand(input)
  const response = await client.send(command)

  return NextResponse.json(response)
}
