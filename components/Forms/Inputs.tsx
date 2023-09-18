import { Select as TremorSelectInput } from "@tremor/react"
import { Datepicker } from "flowbite-react"
import { Field } from "formik"

import ErrorMessage from "./ErrorMessage"
import { Label } from "./Label"
import WarningIcon from "./WarningIcon"
import Wrapper from "./Wrapper"

interface InputProps {
  error?: string
  touched?: boolean
  name: string
  label: string
  children: React.ReactNode
}
function Input({ error, touched, name, label, children }: InputProps) {
  return (
    <div className="mt-4">
      <Label htmlFor={name}>{label}</Label>
      <Wrapper error={Boolean(error != undefined && touched)}>
        {children}
        {error && touched && <WarningIcon />}
      </Wrapper>

      <ErrorMessage show={Boolean(error != undefined && touched)}>
        {error}
      </ErrorMessage>
    </div>
  )
}

export function TextInput({ type = "text", name, error, touched, label }: any) {
  return (
    <Input error={error} touched={touched} name={name} label={label}>
      <Field
        name={name}
        id={name}
        type={type}
        className="bg-transparent text-sm block w-full p-2.5 border-0 rounded-lg outline-0 focus:ring-0 ring-0"
      />
    </Input>
  )
}

export function NumberInput({ name, error, touched, label, ...rest }: any) {
  return (
    <Input error={error} touched={touched} name={name} label={label}>
      <Field
        name={name}
        id={name}
        type="number"
        className="bg-transparent text-sm block w-full p-2.5 border-0 rounded-lg outline-0 focus:ring-0 ring-0"
        {...rest}
      />
    </Input>
  )
}

export function Select(props: any) {
  const { error, touched, name, label, children } = props
  return (
    <Input error={error} touched={touched} name={name} label={label}>
      <Field
        name={name}
        id={name}
        as={"select"}
        className="bg-transparent text-sm block w-full p-2.5 border-0 rounded-lg outline-0 focus:ring-0 ring-0"
      >
        <option value="" disabled>
          Select...
        </option>
        {children.map((child: any) => (
          <option key={child.key} value={child.key} className="p-8">
            {child.props.children}
          </option>
        ))}
      </Field>
    </Input>
  )
}

export function DateInput({ name, error, touched, label, type, ...rest }: any) {
  return <Field component={Datepicker} name={name} />
}

export function DateRangeInput({
  name,
  error,
  touched,
  label,
  type,
  ...rest
}: any) {
  return <Field component={Datepicker} name={name} />
}

export function TimeInput({
  name,
  error,

  touched,
  label,
  type,
  ...rest
}: any) {
  return <Field component={"input"} type="time" name={name} />
}
