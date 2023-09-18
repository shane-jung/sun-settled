"use client"

import { NumberInput, TextInput } from "@/components/Forms/Inputs"
import { Form, Formik } from "formik"
import { redirect, useRouter } from "next/navigation"
import * as Yup from "yup"

const validationSchema = Yup.object({
  name: Yup.string()
    .min(8, "Please enter a name between 8 and 100 characters")
    .max(100, "Please enter a name between 8 and 100 characters")
    .required("Field is required"),
  capacityDc: Yup.number()
    .min(1, "Capacity must be positive")
    .max(10000000, "Please enter a valid capacity")
    .required("Field is required"),
})

export default function GardenForm() {
  const router = useRouter()
  return (
    <div className="container">
      <Formik
        validateOnChange
        validationSchema={validationSchema}
        initialValues={{
          name: "",
          capacityDc: "",
        }}
        onSubmit={async (values) => {
          const res = await fetch("/api/gardens", {
            method: "POST",
            body: JSON.stringify(values),
          })

          if (res.ok) {
            console.log(res.body)
            router.push("/gardens")
          }
        }}
      >
        <Form className="max-w-4xl mx-auto bg-white rounded shadow-lg py-8 px-8 space-y-8 border-gray-900/10 border-b-2">
          <div>
            <h2 className="font-semibold text-xl mb-2">Create New Garden</h2>
            <p className="mt-0 text-gray-600">
              Use this form to create a new garden. You'll have the opportunity
              to add subscribers, and production data history later, if you have
              that information already.
            </p>
          </div>

          <TextInput name="name" type="text" />
          <NumberInput
            label="Garden Capacity"
            name="capacityDc"
            type="number"
          />

          <button className="btn btn-primary" type="submit">
            Save
          </button>
        </Form>
      </Formik>
    </div>
  )
}
