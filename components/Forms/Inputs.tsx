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
  children,
}: {
  name: string
  children?: React.ReactNode
}) {
  return (
    <Field name={name} component={"select"} className="select select-primary">
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
      name={name}
      component={"texarea"}
      className="textarea textarea-primary"
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
      name={name}
      component={"input"}
      type={type}
      className="input input-primary"
      {...rest}
    />
  )
}
