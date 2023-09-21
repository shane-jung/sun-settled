"use client"

import { FormControl } from "@/components/Forms/Inputs"
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
  startDate: Yup.date().required("Required"),
  endDate: Yup.date().required("Required"),
  gardenId: Yup.string().required("Required"),
  subscriptionPlanId: Yup.string().required("Required"),
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
        startDate: "",

        gardenId: "",
        subscriptionPlanId: "",
        endDate: "",
        name: "",
      }}
      onSubmit={async (values) => {
        const res = await fetch("/api/jobs", {
          method: "POST",
          body: JSON.stringify(values),
        })

        if (res.ok) {
          router.push("/billing/jobs")
        }
      }}
    >
      {({ errors, touched, handleChange }) => (
        <Form>
          <div className="max-w-4xl mx-auto bg-base-100 shadow-base-300 rounded shadow-lg py-8 px-8 space-y-4 border-gray-900/10 border-b-2">
            <div>
              <h2 className="font-semibold text-xl mb-2">New Billing Job</h2>
            </div>
            <FormControl>
              <FormControl.Label htmlFor="name">Name</FormControl.Label>
              <FormControl.Input name="name" type="text" />
            </FormControl>

            <FormControl>
              <FormControl.Label htmlFor="startDate">
                Start Date
              </FormControl.Label>
              <FormControl.Input type="date" name="startDate" />
            </FormControl>

            <FormControl>
              <FormControl.Label htmlFor="endDate">End Date</FormControl.Label>
              <FormControl.Input type="date" name="endDate" />
            </FormControl>

            <FormControl>
              <FormControl.Label htmlFor="gardenId">Garden</FormControl.Label>
              <FormControl.Select name="gardenId" onChange={handleChange}>
                {gardens.map((garden) => (
                  <option key={garden.id} value={garden.id}>
                    {garden.name}
                  </option>
                ))}
              </FormControl.Select>
            </FormControl>

            <FormControl>
              <FormControl.Label htmlFor="subscriptionPlanId">
                Subscription Plan
              </FormControl.Label>
              <FormControl.Select
                name="subscriptionPlanId"
                onChange={handleChange}
              >
                {plans.map((plan) => (
                  <option key={plan.id} value={plan.id}>
                    {plan.name}
                  </option>
                ))}
              </FormControl.Select>
            </FormControl>
          </div>
          <button className="btn btn-primary mx-auto mt-4 block" type="submit">
            Create Billing Job
          </button>
        </Form>
      )}
    </Formik>
  )
}
