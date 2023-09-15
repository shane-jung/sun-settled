"use client"

import DeleteButton from "@/components/DeleteButton"
import { Input } from "@/components/forms"
import { deleteReading } from "@/lib/fetchData"
import { Reading } from "@/types"
import { Form, Formik } from "formik"
import { Edit, Trash } from "lucide-react"
import { revalidateTag } from "next/cache"
import * as Yup from "yup"

const validationSchema = Yup.object({
  value: Yup.number()
    .min(0, "Value must be greater than 0.")
    .required("Required"),
  startDate: Yup.date().required("Required"),
  endDate: Yup.date().required("Required"),
})

export default function ReadingForm({
  gardenId,
  readings,
}: {
  gardenId: string
  readings: Reading[]
}) {
  return (
    <Formik
      validateOnChange
      validationSchema={validationSchema}
      initialValues={{
        value: "",
        startDate: "",
        endDate: "",
      }}
      onSubmit={async (values, { resetForm }) => {
        console.log(values)
        const res = await fetch("/api/reading", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...values,
            inputDate: new Date().toISOString(),
            gardenId,
          }),
        })
        console.log(res)
        if (res.ok) {
          resetForm()
          revalidateTag(gardenId)

          console.log(resetForm)
        }
      }}
    >
      {({ values, errors, touched, dirty }) => (
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
                  <td>
                    <div className="flex gap-x-2">
                      {/* <button
                        className="btn-secondary-outline text-xs p-2.5 py-1.5"
                        type="submit"
                      >
                        <Edit className="h-4 w-4" />
                      </button> */}
                      <DeleteButton route={`reading`} resourceId={reading.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <Input type="number" name="value" />
                </td>
                <td>
                  <Input type="date" name="startDate" />
                </td>
                <td>
                  <Input type="date" name="endDate" />
                </td>
                <td>
                  <button className="btn" type="submit">
                    Save
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </Form>
      )}
    </Formik>
  )
}
