import { Field } from "formik"
import React from "react"

export function FormControl({ children }: { children: React.ReactNode }) {
  let label
  let input
  let select
  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return
    if (child.type === FormControl.Label) label = child
    else if (child.type === FormControl.Input) input = child
    else if (child.type === FormControl.Select) select = child
    else if (child.type === FormControl.Textarea) input = child
  })

  return (
    <div className="form-control">
      {label}
      {input}
      {select}
    </div>
  )
}

FormControl.Label = function FormControlLabel({
  children,
  htmlFor,
}: {
  children: React.ReactNode
  htmlFor: string
}) {
  return (
    <label className="label label-text font-medium" htmlFor={htmlFor}>
      {children}
    </label>
  )
}

FormControl.Select = function FormControlSelect({
  name,
  onChange,
  children,
}: {
  name: string
  onChange: (val: string, name: string) => void
  children?: React.ReactNode
}) {
  return (
    <Field
      id={name}
      name={name}
      component={"select"}
      className="select select-bordered"
      onChange={onChange}
    >
      <option value="" disabled>
        Select an option
      </option>
      {children}
    </Field>
  )
}

FormControl.Textarea = function FormControlSelect({
  name,
}: {
  name: string
  children?: React.ReactNode
}) {
  return (
    <Field
      id={name}
      name={name}
      component={"textarea"}
      className="textarea textarea-bordered"
    />
  )
}
FormControl.Input = function FormControlInput({
  type,
  name,
  children,
  ...rest
}: {
  name: string
  type: string
  children?: React.ReactNode
}) {
  return (
    <Field
      id={name}
      name={name}
      component={"input"}
      type={type}
      className="input input-bordered"
      {...rest}
    />
  )
}
