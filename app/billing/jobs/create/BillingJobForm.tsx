"use client"
import GardenSelect from "@/components/GardenSelect"
import { Garden } from "@/types"
import { Formik, Form, Field } from "formik"
import React from "react"

export default function BillingJobForm({ gardens }: { gardens: Garden[] }) {
  return (
    <Formik
      initialValues={{
        scheduled_date: "",
        scheduled_time: "09:00",
      }}
      onSubmit={(values) => console.log(values)}
    >
      {(props) => (
        <Form>
          <h1>New Billing Job</h1>
          <label htmlFor="scheduled_date" className="inline-block w-20">
            Date
          </label>

          <Field type="date" name="scheduled_date" />
          <label htmlFor="scheduled_time">Time</label>
          <Field type="time" name="scheduled_time" />

          <GardenSelect
            handleChange={props.handleChange}
            gardens={gardens.map((garden) => ({
              value: garden.id,
              label: garden.name,
            }))}
          />
        </Form>
      )}
    </Formik>
  )
}
