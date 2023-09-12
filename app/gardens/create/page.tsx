"use client"

import { Formik, Form } from "formik"
import Field from "@/components/Field"
import Label, { TextField } from "@/components/forms"
import { Button } from "@/components/buttons"

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
          <Label htmlFor="name">Garden Name</Label>
          <TextField name="name" required />

          <Label htmlFor="capacityDc">Capacity DC</Label>
          <TextField name="capacityDc" required />

          <Button type="submit">Save</Button>
        </Form>
      </Formik>
    </div>
  )
}
