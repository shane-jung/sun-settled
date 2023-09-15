"use client"

import { Input } from "@/components/forms"
import { Garden, SubscriptionPlan } from "@/types"
import { Form, Formik } from "formik"
import { useRouter } from "next/navigation"
import * as Yup from "yup"

const validationSchema = Yup.object({
  name: Yup.string()
    .min(8, "Please enter a name between 8 and 100 characters")
    .max(100, "Please enter a name between 8 and 100 characters")
    .required("Field is required"),
  email: Yup.string().email("Please enter a valid email address"),
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
  console.log(gardens, subscriptionPlans)
  const router = useRouter()

  return (
    <Formik
      validateOnChange
      validationSchema={validationSchema}
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

        if (res.ok) router.push("/subscribers")
      }}
    >
      {(props) => (
        <Form>
          <div className="max-w-4xl mx-auto bg-white rounded shadow-lg py-8 px-8 space-y-12 border-gray-900/10 border-b-2">
            <div className="font-semibold text-xl mb-2">
              <h2 className="mb-4 text-2xl">New Subscriber</h2>
            </div>

            <Input type="text" name="name" label="Subscriber Name" />

            <Input type="email" name="email" label="Email" />

            <Input type="select" name={"gardenId"} label="Garden Ownership">
              {gardens.map((garden: Garden) => (
                <option key={garden.id} value={garden.id}>
                  {garden.name}
                </option>
              ))}
            </Input>

            <Input type="number" name="allocation" label="Allocation (kW)" />

            <Input label="Payment Plan" name="subscriptionPlanId" type="select">
              {subscriptionPlans.map((plan: SubscriptionPlan) => (
                <option key={plan.id} value={plan.id}>
                  {plan.name}
                </option>
              ))}
            </Input>
          </div>
          <button className="btn" type="submit">
            Save
          </button>
        </Form>
      )}
    </Formik>
  )
}
