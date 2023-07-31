"use client"
import GardenSelect from "@/components/GardenSelect"
import { Garden } from "@/types"
import { Formik, Form, Field } from "formik"

export default function SubscriberForm({ gardens }: { gardens: Garden[] }) {
  const planOptions = [
    {
      label: "Pay as you go",
      value: "PAYG",
    },
    {
      label: "Prepaid",
      value: "PREPAID",
    },
  ]
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        gardenId: "",
        allocation: "",
        paymentPlan: "",
      }}
      onSubmit={async (values) => {
        console.log(values)
        const res = await fetch("/api/subscribers", {
          method: "POST",
          body: JSON.stringify(values),
        })
        console.log(res)
      }}
    >
      {(props) => (
        <Form>
          <h1 className="text-2xl">New Subscriber</h1>
          <label htmlFor="name" className="label">
            Subscriber Name
          </label>
          <Field
            id="name"
            name="name"
            type="text"
            required
            className="input input-bordered"
          />

          <label htmlFor="capacityDc" className="label">
            Email
          </label>
          <Field
            id="email"
            name="email"
            type="email"
            required
            className="input input-bordered"
          />

          <div>
            <h2 className="text-xl">Allocation</h2>
            <div className="flex flex-row gap-3">
              <GardenSelect
                gardens={gardens.map((garden) => ({
                  value: garden.id,
                  label: garden.name,
                }))}
                handleChange={props.handleChange}
              />
              <label className="input-group">
                <Field
                  id={`allocation`}
                  name={`allocation`}
                  className="input input-bordered w-32"
                  type="text"
                  required
                />
                <span>kW DC</span>
              </label>
              <select
                className="select select-bordered"
                name="paymentPlan"
                onChange={props.handleChange}
                defaultValue={"default"}
                required
              >
                <option value="default" disabled>
                  Select a Plan
                </option>
                {planOptions.map((option, index) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button className="btn btn-secondary" type="submit">
            Save
          </button>
        </Form>
      )}
    </Formik>
  )
}
