"use client"
import { Form, Formik } from "formik"
import Field from "@/components/Field"
import { Heading, SubHeading } from "@/components/typography"
import Label, { FormGrid, Select, TextField } from "@/components/forms"
import { Button } from "@/components/buttons"

export default function SubscriptionPlanForm() {
  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        rate: "",
        rateIncrease: "",
        billingFrequency: "",
        isShareDependent: false,
        isProductionDependent: false,
      }}
      onSubmit={(values) => {
        console.log(values)
        fetch("/api/billing/plans", {
          method: "POST",
          body: JSON.stringify(values),
        })
      }}
    >
      {(props) => (
        <Form>
          <Heading> New Subscription Plan</Heading>
          <p className="mb-4 w-[80%]">
            A subscription plan is a set of rules that dictates how your
            subscribers are billed. Each plan describes how often subscribers
            are billed, and how their bill is calculated. Fill in the details
            below, and we'll handle the rest.
          </p>

          <>
            <Label htmlFor="name">Plan Name</Label>
            <TextField type="text" name="name" placeholder="Name" />
            <Label htmlFor="description">
              Plan Description (to help you remember!)
            </Label>
            <TextField
              type="text"
              name="description"
              placeholder="Description"
            />
            <Label htmlFor="billingFrequency">
              How often will your subscribers be billed?
            </Label>
            <Select
              name="billingFrequency"
              onChange={props.handleChange}
              options={[
                { label: "Monthly", value: "monthly" },
                { label: "Annually", value: "annually" },
              ]}
            />
            <Label htmlFor="isShareDependent">
              Are subscribers billed proportional to the number of shares they
              own?
            </Label>
            <Select
              name="isShareDependent"
              onChange={props.handleChange}
              className="mb-2"
              options={[
                {
                  label:
                    "Yes, subscribers under this plan will be billed proportional to how many shares they have.",
                  value: "true",
                },
                {
                  label: "No, each subscriber gets billed the same.",
                  value: "false",
                },
              ]}
            />{" "}
            <p className="mb-4 text-xs italic">
              Generally, the answer is yes. In rare cases, you might bill each
              subscriber the same amount, regardless of the number of shares
              they have.
            </p>
            <Label htmlFor="isProductionDependent">
              Are subscribers billed proportional to the production of the
              garden?
            </Label>
            <Select
              name="isProductionDependent"
              onChange={props.handleChange}
              className="mb-2"
              options={[
                {
                  label:
                    "Yes, subscribers under this plan are billed proportional to the production of their respective garden.",
                  value: "true",
                },
                {
                  label: "No, billing is not dependent on production.",
                  value: "false",
                },
              ]}
            />
            <p className="mb-4 text-xs italic">
              This one depends on your model. If you answer yes, your
              subscribers will be billed based on the value of the latest
              production data. Don't worry, we'll remind you to keep your
              production data up to date, and we'll never send a bill without
              your approval.
            </p>
            <Label htmlFor="rate">Rate</Label>
            <TextField type="text" name="rate" placeholder="Rate ($)" />
            <Label htmlFor="rateIncrease">Annual Rate Increase</Label>
            <TextField
              type="text"
              name="rateIncrease"
              placeholder="Annual rate Increase (%)"
            />
          </>

          <Button className="mx-auto mb-6 mt-12 block" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}
