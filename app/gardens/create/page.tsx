"use client"

import { Formik, Form, Field } from "formik"

export default function GardenForm() {
  return (
    <div className="container">
      <Formik
        initialValues={{
          name: "",
          capacityDc: "",
        }}
        onSubmit={async (values) => {
          console.log(values)
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
          <Field
            id="name"
            name="name"
            type="text"
            required
            className="input input-bordered"
          />

          <label htmlFor="capacityDc" className="label">
            Capacity DC
          </label>
          <Field
            id="capacityDc"
            name="capacityDc"
            type="text"
            required
            className="input input-bordered"
          />

          <button className="btn btn-secondary" type="submit">
            Save
          </button>
        </Form>
      </Formik>
    </div>
  )
}
