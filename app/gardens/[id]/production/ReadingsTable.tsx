"use client"

import DeleteButton from "@/components/DeleteButton"
import { FormControl } from "@/components/Forms/Inputs"
import { Reading } from "@/types"
import { Form, Formik } from "formik"
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
        if (res.ok) {
          resetForm()
        }
      }}
    >
      {() => (
        <Form>
          <table className="table">
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
                  <FormControl.Input
                    name="value"
                    type="number"
                  ></FormControl.Input>
                </td>
                <td>
                  <FormControl.Input
                    name="startDate"
                    type="date"
                  ></FormControl.Input>
                </td>
                <td>
                  <FormControl.Input
                    name="endDate"
                    type="date"
                  ></FormControl.Input>
                </td>
                <td>
                  <button className="btn btn-primary" type="submit">
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
