"use client"
import { Formik, Form, Field } from "formik"

export default function ReadingForm({ gardenId }: { gardenId: string }) {
  return (
    <Formik
      initialValues={{
        value: "",
        timestamp: "",
      }}
      onSubmit={(values) => {
        console.log(gardenId)
        fetch("/api/reading", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...values,
            gardenId,
          }),
        })
      }}
    >
      <Form>
        <Field
          className="input"
          type="number"
          name="value"
          placeholder="Enter reading"
        />
        <Field
          className="input"
          type="date"
          name="timestamp"
          placeholder="Enter date"
        />
        <button className="btn-secondary-outline btn" type="submit">
          Save
        </button>
      </Form>
    </Formik>
  )
}
