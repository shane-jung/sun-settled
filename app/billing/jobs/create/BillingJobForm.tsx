"use client"

import { Input } from "@/components/forms"
import { Garden, SubscriptionPlan } from "@/types"
import { Form, Formik } from "formik"
import Link from "next/link"
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
        scheduled_time: "09:00",
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
          <div className="max-w-4xl mx-auto bg-white rounded shadow-lg py-8 px-8 space-y-12 border-gray-900/10 border-b-2">
            <div>
              <h2 className="font-semibold text-xl mb-2">New Billing Job</h2>
            </div>
            <Input type="text" name="name" label="Billing Job Name" />

            <Input
              type="date"
              name="scheduled_date"
              label="Start Date"
              helper="First billing date for this job. Subsequent billing dates will be
            occur on the same day of the month."
            />

            <Input type="date" name="end_date" label="End Date" />

            <Input type="time" name="scheduled_time" label="Billing Time" />

            <Input type="select" label="Garden" name="garden_id">
              {gardens.map((garden) => (
                <option value={garden.id}>{garden.name}</option>
              ))}
            </Input>

            <Input
              type="select"
              name="subscription_plan_id"
              label="Subscription Plan"
            >
              {plans.map((plan) => (
                <option value={plan.id}>{plan.name}</option>
              ))}
            </Input>

            {/* <p className="mb-4 text-xs italic">
              Configure more subscription plans{" "}
              <Link className="link" href="/billing/plans">
                here
              </Link>
              .
            </p> */}
          </div>
          <button className="btn" type="submit">
            Create Billing Job
          </button>
        </Form>
      )}
    </Formik>
  )
}
