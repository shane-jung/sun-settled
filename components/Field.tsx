import { Field as FormikField } from "formik"
export default function Field({
  type,
  name,
  placeholder,
  required = false,
}: {
  type: string
  name: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <FormikField
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-80 rounded border p-2"
      required={required}
    />
  )
}
