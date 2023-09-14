"use client"

import Label, { TextField } from "@/components/forms"
import { Form, Formik } from "formik"
import { revalidatePath } from "next/cache"

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

          if (res.ok) {
            window.location.href = `/gardens/${(await res.json()).id}`
          }

          revalidatePath("/api/gardens")
        }}
      >
        <Form>
          <h1 className="mb-4 text-2xl">Create New Garden</h1>
          <Label htmlFor="name">Garden Name</Label>
          <TextField name="name" required />

          <Label htmlFor="capacityDc">Capacity DC</Label>
          <TextField name="capacityDc" required />

          <button className="btn" type="submit">
            Save
          </button>
        </Form>
      </Formik>
    </div>
  )
}
