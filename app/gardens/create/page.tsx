"use client"

import { Formik, Form } from "formik"
import Field from "@/components/Field"

export default function GardenForm() {
  return (
    <div className="container">
      <Formik
        initialValues={{
          name: "",
          capacityDc: "",
        }}
        onSubmit={async (values) => {
          const res = await fetch("/api/gardens", {
            method: "POST",
            body: JSON.stringify(values),
          })
          console.log(res)
        }}
      >
        <Form>
          <h1 className="text-2xl">New Garden</h1>
          <label htmlFor="name" className="label">
            Garden Name
          </label>
          <Field name="name" type="text" required />

          <label htmlFor="capacityDc" className="label">
            Capacity DC
          </label>
          <Field name="capacityDc" type="text" required />

          <button
            className="btn btn-secondary"
            type="submit"
            onClick={() => {
              console.log("click")
            }}
          >
            Save
          </button>
        </Form>
      </Formik>
    </div>
  )
}
