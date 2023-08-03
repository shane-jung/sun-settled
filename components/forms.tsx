export function Select({
  options,
  onChange,
  name,
}: {
  options: { value: string; label: string }[]
  onChange: any
  name: string
}) {
  return (
    <select
      className="h-12 w-80 rounded border border-gray-400 p-1"
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
