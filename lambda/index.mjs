import pkg from "pg"
import stripeModule from "stripe"

const process = {
  env: {
    DATABASE_URL:
      "postgresql://postgres:E8fUKUVPCwK9Zu2J@db.ctbgyekxrjyffsjtuicn.supabase.co:5432/postgres",
    STRIPE_SECRET_KEY:
      "sk_test_51NbmFXKfK0uztC1o5yznLu7TMn86DI3Zj1d8XhpuIQjaD2ffk5C1bes26WI8z33ah3HJN08WzQ8nkOCKZkPJIAlK00g8jMPKGI",
  },
}
const stripe = stripeModule(process.env.STRIPE_SECRET_KEY)

const { Pool } = pkg

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

// comment out the following lines before commit
const event = {
  gardenId: "clkqw24i10000wcd4oansnm3m",
  subscriptionPlanId: "clkshsoz6000cwcck93mhsfba",
}

// export const handler = async (event) => {

const { gardenId, subscriptionPlanId } = event

const subscribers = (
  await pool.query(
    'SELECT * FROM "Subscriber" where "gardenId" = $1 AND "subscriptionPlanId" = $2',
    [gardenId, subscriptionPlanId]
  )
).rows

console.log(subscribers)

const subscriptionPlan = (
  await pool.query(`SELECT * FROM "SubscriptionPlan" where id = $1`, [
    subscriptionPlanId,
  ])
).rows[0]

console.log(subscriptionPlan)

if (subscriptionPlan.isProductionDependent)
  var reading = // get the last reading
    (
      await pool.query(
        `SELECT * FROM "Reading" where "gardenId" = $1 ORDER BY timestamp DESC LIMIT 1`,
        [gardenId]
      )
    ).rows[0].value

console.log(reading)

subscribers.forEach(async (subscriber) => {
  const amount = Math.round(
    (reading ? reading : 1) *
      subscriptionPlan.rate *
      (subscriptionPlan.isShareDependent ? subscriber.allocation : 1)
  )

  console.log(amount)
})
// const invoice = await stripe.invoices.create({
//   customer: "cus_OOZcAeK6YP80zg",
// })

// const invoiceItem = await stripe.invoiceItems.create({
//   customer: "cus_OOZcAeK6YP80zg",
//   amount: Math.round(reading * 0.09),
//   invoice: invoice.id,
// })
// console.log(invoice, invoiceItem)

// const selectResult2 =
//   await sql`SELECT * FROM Subscriber WHERE gardenId = ${gardenId} AND subscriptionPlanId = ${subscriptionPlanId}`
// console.log(selectResult2)

// return response
// }
