import {
  GetScheduleCommand,
  ListSchedulesCommand,
  SchedulerClient,
} from "@aws-sdk/client-scheduler"

const getSchedule = async ({
  gardenId,
  subscriptionPlanId,
}: {
  gardenId: string
  subscriptionPlanId: string
}) => {
  const input = {
    Name: `${gardenId}-${subscriptionPlanId}`,
    GroupName: "SunSettled",
  }
  const command = new GetScheduleCommand(input)
  const response = await schedulerClient.send(command)
  return response
}

const getAllSchedules = async ({ state = "ENABLED" }: { state?: string }) => {
  const input = {
    // ListSchedulesInput
    GroupName: "SunSettled",
    // NamePrefix: "STRING_VALUE",
    State: state,
    // NextToken: "STRING_VALUE",
    // MaxResults: Number("int"),
  }
  const command = new ListSchedulesCommand(input)
  const response = await schedulerClient.send(command)
  return response.Schedules
}

const config = {
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
}
export const schedulerClient = new SchedulerClient(config)

export { getSchedule, getAllSchedules }
