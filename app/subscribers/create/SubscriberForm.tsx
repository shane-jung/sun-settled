"use client"

import { NumberInput, Select, TextInput } from "@/components/Forms/Inputs"
import { Garden, SubscriptionPlan } from "@/types"
import { SelectItem, Select as TremorSelect } from "@tremor/react"
import { Form, Formik } from "formik"
import { useRouter } from "next/navigation"
import React from "react"
import * as Yup from "yup"

const validationSchema = Yup.object({
  name: Yup.string()
    .min(8, "Please enter a name between 8 and 100 characters")
    .max(100, "Please enter a name between 8 and 100 characters")
    .required("Field is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Field is required"),
  gardenId: Yup.string().required("Required"),
  allocation: Yup.number()
    .min(0, "Allocation must be positive")
    .max(1000, "Please enter a valid allocation")
    .required("Field is required"),
  subscriptionPlanId: Yup.string().required("Required"),
})

export default function SubscriberForm({
  gardens,
  subscriptionPlans,
}: {
  gardens: Garden[]
  subscriptionPlans: SubscriptionPlan[]
}) {
  const router = useRouter()

  return (
    <Formik
      validateOnChange
      validateOnBlur
      validationSchema={validationSchema}
      initialValues={{
        name: "",
        email: "",
        gardenId: "",
        allocation: "",
        subscriptionPlanId: "",
      }}
      onSubmit={async (values) => {
        const res = await fetch("/api/subscribers", {
          method: "POST",
          body: JSON.stringify(values),
        })

        if (res.ok) router.push("/subscribers")
      }}
    >
      {({ errors, touched, values, handleChange }) => (
        <Form>
          <div className="max-w-4xl mx-auto bg-white rounded shadow-lg py-8 px-8 border-gray-900/10 border-b-2">
            <div className="font-semibold text-xl mb-2">
              <h2 className="mb-4 text-2xl">New Subscriber</h2>
            </div>

            <TextInput
              name="name"
              error={errors.name}
              touched={touched.name}
              label="Subscriber Name"
            />

            <TextInput
              type="email"
              name="email"
              error={errors.email}
              touched={touched.email}
              label="Email"
            />

            <Select
              name="gardenId"
              label="Garden Ownership"
              error={errors.gardenId}
              touched={touched.gardenId}
            >
              {gardens.map((garden: Garden) => (
                <option key={garden.id} value={garden.id}>
                  {garden.name}
                </option>
              ))}
            </Select>

            <NumberInput
              name="allocation"
              label="Allocation (kW)"
              min={0}
              step={0.1}
              error={errors.allocation}
              touched={touched.allocation}
            />

            <Select
              label="Payment Plan"
              name="subscriptionPlanId"
              error={errors.subscriptionPlanId}
              touched={touched.subscriptionPlanId}
            >
              {subscriptionPlans.map((plan: SubscriptionPlan) => (
                <option key={plan.id} value={plan.id}>
                  {plan.name}
                </option>
              ))}
            </Select>
          </div>
          <button className="btn btn-primary  " type="submit">
            Save
          </button>
        </Form>
      )}
    </Formik>
  )
}
