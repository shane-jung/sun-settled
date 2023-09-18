"use client"

import {
  DateInput,
  Select,
  TextInput,
  TimeInput,
} from "@/components/Forms/Inputs"
import { Label } from "@/components/Forms/Label"
import { Garden, SubscriptionPlan } from "@/types"
import { Form, Formik } from "formik"
import { useRouter } from "next/navigation"
import React from "react"
import * as Yup from "yup"

const validationSchema = Yup.object({
  name: Yup.string()
    .min(8, "Please enter a name between 8 and 100 characters")

    .max(100, "Please enter a name between 8 and 100 characters")
    .required("Field is required"),
  scheduled_date: Yup.date().required("Required"),
  scheduled_time: Yup.string().required("Required"),
  end_date: Yup.date().required("Required"),
  garden_id: Yup.string().required("Required"),
  subscription_plan_id: Yup.string().required("Required"),
})

export default function BillingJobForm({
  gardens,
  plans,
}: {
  gardens: Garden[]
  plans: SubscriptionPlan[]
}) {
  const router = useRouter()
  return (
    <Formik
      validateOnChange
      validationSchema={validationSchema}
      initialValues={{
        scheduled_date: "",
        scheduled_time: "",
        garden_id: "",
        subscription_plan_id: "",
        end_date: "",
        name: "",
      }}
      onSubmit={async (values, { resetForm }) => {
        const res = await fetch("/api/jobs", {
          method: "POST",
          body: JSON.stringify(values),
        })

        if (res.ok) {
          router.push("/billing/jobs")
        }
      }}
    >
      {(props) => (
        <Form>
          <div className="max-w-4xl mx-auto bg-white rounded shadow-lg py-8 px-8 space-y-4 border-gray-900/10 border-b-2">
            <div>
              <h2 className="font-semibold text-xl mb-2">New Billing Job</h2>
            </div>
            <TextInput type="text" name="name" label="Billing Job Name" />

            <Label htmlFor="scheduled_date">Billing Date</Label>
            <DateInput name="scheduled_date" />

            <Label htmlFor="end_date">End Date</Label>
            <DateInput name="end_date" />

            <Label htmlFor="scheduled_time">Billing Time</Label>
            <TimeInput type="time" name="scheduled_time" label="Billing Time" />

            <Label htmlFor="garden_id">Garden</Label>
            <Select type="select" name="garden_id">
              {gardens.map((garden) => (
                <option value={garden.id}>{garden.name}</option>
              ))}
            </Select>

            <Label htmlFor="subscription_plan_id">Subscription Plan</Label>
            <Select type="select" name="subscription_plan_id">
              {plans.map((plan) => (
                <option value={plan.id}>{plan.name}</option>
              ))}
            </Select>
          </div>
          <button className="btn btn-primary" type="submit">
            Create Billing Job
          </button>
        </Form>
      )}
    </Formik>
  )
}
