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
  subscriptionPlanId: "clmtoig1x0004wcjglvp0knsh",
  gardenId: "clmquth9w0000k70fva0zdijo",
}

// export const handler = async (event) => {

const { gardenId, subscriptionPlanId } = event

const subscribers = (
  await pool.query(
    'SELECT * FROM "Subscriber" where garden_id = $1 AND subscription_plan_id = $2',
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

if (subscriptionPlan.is_production_dependent)
  var reading = // get the last reading
    (
      await pool.query(
        `SELECT * FROM "Reading" where garden_id = $1 ORDER BY end_date DESC LIMIT 1`,
        [gardenId]
      )
    ).rows[0].value

console.log(reading)

subscribers.forEach(async (subscriber) => {
  const amount = Math.round(
    (reading ? reading : 1) *
      subscriptionPlan.rate *
      (subscriptionPlan.is_share_dependent ? subscriber.allocation : 1)
  )

  console.log(amount)

  const invoice = await stripe.invoices.create({
    customer: subscriber.stripe_customer_id,
  })

  const invoiceItem = await stripe.invoiceItems.create({
    customer: subscriber.stripe_customer_id,
    amount,
    invoice: invoice.id,
  })
  console.log(invoice, invoiceItem)
})
// return response
// }
