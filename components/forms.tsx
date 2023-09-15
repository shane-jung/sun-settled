import { ErrorMessage, Field } from "formik"
import React from "react"

interface FormElementProps {
  label?: string
  className?: string
  type: string
  name: string
  required?: boolean
  helper?: string
  step?: string
  min?: number
  errors?: string
  touched?: boolean
  children?: React.ReactNode
  datepicker?: boolean
}

interface classMap {
  [key: string]: string
}

const classes: classMap = {
  // dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
  select:
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
  text: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",
  email:
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",
  number:
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",
  textarea:
    "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500",
  date: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5",
}

function Label({ value, name }: { value?: string; name: string }) {
  if (!value) return null
  return (
    <label
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      htmlFor={name}
    >
      {value}
    </label>
  )
}

function Helper({ value }: { value?: string }) {
  if (!value) return null
  return (
    <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{value}</p>
  )
}

function FormElement({ name, label, children, helper }: FormElementProps) {
  return (
    <div className="relative w-full mb-8">
      <Label value={label} name={name} />

      {children}
      <ErrorMessage
        name={name}
        component="p"
        className="text-red-400 text-xs translate-y-1 absolute"
      />
      <Helper value={helper} />
    </div>
  )
}

export function Input(props: FormElementProps) {
  const { name, type, className } = props
  const styles = `${classes[type]} ${className}`
  return (
    <FormElement {...props}>
      {{
        select: (
          <Field component="select" id={name} className={styles} {...props}>
            <option value="default" disabled>
              Select Option
            </option>
            {props.children}
          </Field>
        ),
        date: <Field id={name} className={styles} {...props} />,
        textarea: (
          <Field component="textarea" id={name} className={styles} {...props} />
        ),
      }[type!] || <Field id={name} className={styles} {...props} />}
    </FormElement>
  )
}

// export function InputWithAddon({
//   AddOn,
//   ...props
// }: {
//   props: FormElementProps
//   AddOn: React.ReactNode
// }) {
//   return (
//     <div className="flex">
//       <AddOn />
//       <Input {...props} />
//     </div>
//   )
// }
