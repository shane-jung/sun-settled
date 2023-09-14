"use client"

import Label, { Select, TextField } from "@/components/forms"
import { getSubscriptionPlans } from "@/lib/fetchData"
import { Garden } from "@/types"
import { Field, Form, Formik } from "formik"

export default async function SubscriberForm({
  gardens,
}: {
  gardens: Garden[]
}) {
  const planOptions = (await getSubscriptionPlans()).map((plan: any) => ({
    label: plan.name,
    value: plan.id,
  }))
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        gardenId: "",
        allocation: "",
        subscriptionPlanId: "",
      }}
      onSubmit={async (values) => {
        console.log(values)
        const res = await fetch("/api/subscribers", {
          method: "POST",
          body: JSON.stringify(values),
        })
      }}
    >
      {(props) => (
        <Form>
          <h1 className="mb-4 text-2xl">New Subscriber</h1>

          <Label htmlFor="name">Subscriber Name</Label>
          <TextField required name="name" />

          <Label htmlFor="capacityDc">Subscriber Email</Label>
          <TextField name="email" type="email" />

          <Label htmlFor="gardenId">Garden Ownership</Label>
          <Select
            options={gardens.map((garden) => ({
              value: garden.id,
              label: garden.name,
            }))}
            onChange={props.handleChange}
            name={"gardenId"}
          />

          <Label htmlFor="allocation">Allocation (kW)</Label>
          <TextField name="allocation" required />

          <Label htmlFor={"subscriptionPlanId"}>Payment Plan</Label>

          <Select
            name="subscriptionPlanId"
            onChange={props.handleChange}
            options={planOptions}
          />

          <button className="btn" type="submit">
            Save
          </button>
        </Form>
      )}
    </Formik>
  )
}
