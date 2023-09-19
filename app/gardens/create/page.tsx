"use client"

import { FormControl } from "@/components/Forms/Inputs"
import { createGarden } from "@/lib/gardens"
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
            router.push("/gardens")
          }
        }}
      >
        <Form>
          <div className="max-w-4xl mx-auto rounded shadow-lg p-8 ">
            <div>
              <h2 className="font-semibold text-xl mb-2">Create New Garden</h2>
              <p className="mt-0 text-gray-600">
                Use this form to create a new garden. You'll have the
                opportunity to add subscribers, and production data history
                later, if you have that information already.
              </p>
            </div>

            <FormControl>
              <FormControl.Label htmlFor="name">Garden Name</FormControl.Label>
              <FormControl.Input name="name" type="text" />
            </FormControl>

            <FormControl>
              <FormControl.Label htmlFor="capacityDc">
                Capacity (kW DC)
              </FormControl.Label>
              <FormControl.Input name="capacityDc" type="number" />
            </FormControl>
          </div>

          <button className="btn btn-primary" type="submit">
            Create Garden
          </button>
        </Form>
      </Formik>
    </div>
  )
}
