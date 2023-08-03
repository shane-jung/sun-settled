"use client"
import { Button } from "@/components/buttons"
import { FormGrid, Select } from "@/components/forms"
import { Link } from "@/components/links"
import { Heading } from "@/components/typography"
import { Garden, SubscriptionPlan } from "@/types"
import { Formik, Form, Field } from "formik"
import React from "react"

export default function BillingJobForm({
  gardens,
  plans,
}: {
  gardens: Garden[]
  plans: SubscriptionPlan[]
}) {
  return (
    <Formik
      initialValues={{
        scheduled_date: "",
        scheduled_time: "09:00",
        garden_id: "",
        subscription_plan_id: "",
        cycles: 1,
      }}
      onSubmit={(values) => {
        fetch("/api/billing/jobs", {
          method: "POST",
          body: JSON.stringify(values),
        })
      }}
    >
      {(props) => (
        <Form>
          <Heading>New Billing Job</Heading>
          {/* <p className="mb-4 w-[75%]">
            A billing job generates invoices for your community solar gardens on
            a scheduled date. You can create a one-time billing job or a
            recurring billing job.
          </p>
          <p className="mb-4 w-[75%]">
            To configure a billing job, you will need to specify which garden to
            bill, and which subscription plan to use. For example, if you offer
            two main subscription plans for your gardens, and you have 3
            different gardens, you will need to configure 6 separate billing
            jobs.
          </p> */}
          <FormGrid>
            <label htmlFor="scheduled_date">
              <p className="pb-2">Date</p>
              <p className="text-sm italic">
                First billing date for this job. Subsequent billing dates will
                be occur on the same day of the month.
              </p>
            </label>
            <Field type="date" name="scheduled_date" />

            <label htmlFor="scheduled_time">Time</label>
            <Field type="time" name="scheduled_time" />

            <label htmlFor="cycles">Cycles</label>
            <Field type="number" name="cycles" />

            <label>Garden</label>
            <Select
              name="garden_id"
              onChange={props.handleChange}
              options={gardens.map((garden) => ({
                value: garden.id,
                label: garden.name,
              }))}
            />
            <div>
              <label className="pb-2">Subscription Plan</label>
              <p className="text-sm italic">
                Configure more subscription plans{" "}
                <Link
                  className="text-bold not-italic text-indigo-800 transition hover:text-indigo-700"
                  href="/billing/plans"
                >
                  here
                </Link>
                .
              </p>
            </div>
            <Select
              name="subscription_plan_id"
              onChange={props.handleChange}
              options={plans.map((plan) => ({
                value: plan.id,
                label: plan.name,
              }))}
            />
          </FormGrid>
          <Button type="submit">Create Billing Job</Button>
        </Form>
      )}
    </Formik>
  )
}
