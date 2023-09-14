"use client"

import { Reading } from "@/types"
import { Field, Form, Formik } from "formik"
import { revalidatePath } from "next/cache"

export default function ReadingForm({
  gardenId,
  readings,
}: {
  gardenId: string
  readings: Reading[]
}) {
  return (
    <Formik
      initialValues={{
        value: "",
        startDate: "",
        endDate: "",
      }}
      onSubmit={async (values, { resetForm }) => {
        const res = await fetch("/api/reading", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...values,
            inputDate: new Date().toISOString(),
            gardenId,
          }),
        })

        if (res.ok) {
          revalidatePath(`/gardens/${gardenId}`)
          resetForm()
        } else {
          console.log(await res.json())
        }
      }}
    >
      <Form>
        <table>
          <thead>
            <tr>
              <th>Reading (kWh)</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {readings.map((reading, index) => (
              <tr key={index}>
                <td>{new Number(reading.value).toLocaleString("en-US")}</td>
                <td>
                  {new Date(reading.startDate).toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                    day: "numeric",
                  })}
                </td>
                <td>
                  {new Date(reading.endDate).toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                    day: "numeric",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>
                <Field
                  className="w-full pb-1 border-b-2 outline-none"
                  type="number"
                  name="value"
                  placeholder="Enter reading"
                />
              </td>
              <td>
                <Field
                  className="input"
                  type="date"
                  name="startDate"
                  placeholder="Enter date"
                />
              </td>
              <td>
                <Field
                  className="input"
                  type="date"
                  name="endDate"
                  placeholder="Enter date"
                />
              </td>
              <td>
                <button className="btn-secondary-outline btn" type="submit">
                  Save
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </Form>
    </Formik>
  )
}
