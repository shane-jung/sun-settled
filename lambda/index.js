import postgres from "postgres"

export const handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  }

  const sql = postgres(process.ENV.DATABASE_URL)
  console.log(sql)
  const selectResult1 = await sql`SELECT * FROM Reading`
  console.log(selectResult1)

  const { gardenId, subscriptionPlanId } = event

  const selectResult2 =
    await sql`SELECT * FROM Subscriber WHERE gardenId = ${gardenId} AND subscriptionPlanId = ${subscriptionPlanId}`
  console.log(selectResult2)

  return response
}
