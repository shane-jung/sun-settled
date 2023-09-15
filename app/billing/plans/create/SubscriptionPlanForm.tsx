"use client"

import { Input } from "@/components/forms"
import { Form, Formik } from "formik"
import { redirect } from "next/navigation"
import * as Yup from "yup"

const SubscriptionPlanSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Please create a name that is at least 5 characters.")
    .max(50, "Too Long!")
    .required("Required"),
  description: Yup.string().max(
    1000,
    "Please limit your description to 1,000 characters."
  ),
  rate: Yup.number()
    .min(0, "Enter a valid rate between $0 and $10,000")
    .max(10000, "Enter a valid rate between $0 and $10,000")
    .positive("Rate cannot be negative."),
  rateIncrease: Yup.number()
    .min(0, "Rate increase cannot be negative.")
    .max(100, "Rate increase cannot exceed 100% annually."),
  billingFrequency: Yup.string().required("Required"),
  isShareDependent: Yup.boolean().required("Required"),
  isProductionDependent: Yup.boolean().required("Required"),
})

export default function SubscriptionPlanForm() {
  return (
    <Formik
      validateOnChange={true}
      initialValues={{
        name: "",
        description: "",
        rate: "",
        rateIncrease: "",
        billingFrequency: "",
        isShareDependent: false,
        isProductionDependent: false,
      }}
      validationSchema={SubscriptionPlanSchema}
      onSubmit={async (values) => {
        const res = await fetch("/api/plans", {
          method: "POST",
          body: JSON.stringify(values),
        })

        if (res.ok) {
          redirect("/billing/plans")
        } else {
          alert("Something went wrong.")
        }
      }}
    >
      {({ handleChange, errors, touched, dirty }) => (
        <Form className="">
          <div className="max-w-4xl mx-auto bg-white rounded shadow-lg py-8 px-8 space-y-12 border-gray-900/10 border-b-2">
            <div>
              <h2 className="font-semibold text-xl mb-2">
                New Subscription Plan
              </h2>
              <p className="text-gray-600">
                A subscription plan is a set of rules that dictates how your
                subscribers are billed. Each plan describes how often
                subscribers are billed, and how their bill is calculated. Fill
                in the details below, and we'll handle the rest.
              </p>
            </div>

            <div className="">
              <Input label="Plan Name" type="text" name="name" />

              <Input type="textarea" name="description" label="Description" />

              <Input
                type="select"
                label="How often should your subscribers be billed?"
                name="billingFrequency"
              >
                <option value="monthly">Monthly</option>
                <option value="annually">Annually</option>
              </Input>

              <Input
                type="select"
                label="Are subscribers billed proportional to the number of shares they have?"
                name="isShareDependent"
                helper="Generally, the answer is yes. In rare cases, you might bill
                    each subscriber the same amount, regardless of the number of
                    shares they have."
              >
                <option value="true">
                  Yes, subscribers under this plan will be billed proportional
                  to how many shares they have.
                </option>
                <option value="false">
                  No, each subscriber gets billed the same.
                </option>
              </Input>

              <Input
                type="select"
                name="isProductionDependent"
                label="Are subscribers billed proportional to the production of the garden?"
                helper="This one depends on your model. If you answer yes, your
                  subscribers will be billed based on the value of the latest
                  production data. Don't worry, we'll remind you to keep your
                  production data up to date, and we'll never send a bill
                  without your approval."
              >
                <option value="true">
                  Yes, subscribers under this plan are billed proportional to
                  the production of their respective garden.
                </option>
                <option value="false">
                  No, billing is not dependent on production.
                </option>
              </Input>

              <Input label="Rate" name="rate" type="number" step="1" min={0} />

              <Input
                label="Annual Rate Increase"
                type="number"
                name="annualRateIncrease"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button className="btn my-8" type="submit">
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
