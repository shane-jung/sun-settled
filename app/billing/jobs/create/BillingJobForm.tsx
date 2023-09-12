"use client"
import { Button } from "@/components/buttons"
import Label, { FormGrid, Select, TextField } from "@/components/forms"
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
        end_date: "",
        name: "",
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
          <Label htmlFor="name">Name</Label>
          <TextField
            type="text"
            name="name"
            placeholder="e.g. Billing Job #1"
          />

          <Label htmlFor="scheduled_date">Start Date</Label>

          <TextField type="date" name="scheduled_date" className="mb-2" />

          <p className="mb-4 text-xs italic">
            First billing date for this job. Subsequent billing dates will be
            occur on the same day of the month.
          </p>

          <Label htmlFor="scheduled_time">Time</Label>
          <TextField type="time" name="scheduled_time" />

          <Label htmlFor="end_date">End Date</Label>
          <TextField type="date" name="end_date" />

          <Label htmlFor="gardenId">Garden</Label>
          <Select
            name="garden_id"
            onChange={props.handleChange}
            options={gardens.map((garden) => ({
              value: garden.id,
              label: garden.name,
            }))}
          />

          <Label htmlFor="subscriptionPlanId">Subscription Plan</Label>

          <Select
            name="subscription_plan_id"
            className="mb-2"
            onChange={props.handleChange}
            options={plans.map((plan) => ({
              value: plan.id,
              label: plan.name,
            }))}
          />
          <p className="mb-4 text-xs italic">
            Configure more subscription plans{" "}
            <Link
              className="text-bold not-italic text-indigo-800 transition hover:text-indigo-700"
              href="/billing/plans"
            >
              here
            </Link>
            .
          </p>

          <Button type="submit">Create Billing Job</Button>
        </Form>
      )}
    </Formik>
  )
}
