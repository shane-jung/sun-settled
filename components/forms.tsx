import { Field } from "formik"
import { twMerge } from "tailwind-merge"
import React from "react"

export function Select({
  className,
  options,
  onChange,
  name,
}: {
  options: { value: string; label: string }[]
  onChange: any
  name: string
  className?: string
}) {
  return (
    <select
      className={twMerge(
        "mb-4 block h-12 w-80 rounded border border-gray-200 p-1",
        className
      )}
      name={name}
      id={name}
      onChange={onChange}
      defaultValue={"default"}
      required
    >
      <option value="default" disabled>
        Select Option
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export function FormGrid({ children }: { children: any }) {
  return (
    <div className="grid w-[80%] grid-cols-2 gap-x-32 gap-y-10 border border-slate-200 p-8 px-12 shadow-md">
      {children}
    </div>
  )
}

export function TextField({
  required = false,
  type = "text",
  name,
  className,
  placeholder = "",
}: {
  type?: string
  required?: boolean
  name: string
  className?: string
  placeholder?: string
}) {
  return (
    <Field
      className={twMerge("mb-4 block rounded border p-2", className)}
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
    />
  )
}

export default function Label({
  htmlFor,
  children,
  className,
}: {
  htmlFor: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <label
      className={twMerge("mb-1 block text-sm", className)}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  )
}
