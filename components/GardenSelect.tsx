export default function GardenSelect({
  handleChange,
  gardens,
}: {
  gardens: { value: string; label: string }[]
  handleChange: any
}) {
  return (
    <select
      className="select select-bordered w-60"
      name="gardenId"
      id="gardenId"
      onChange={handleChange}
      defaultValue={"default"}
      required
    >
      <option value="default" disabled>
        Select A Garden
      </option>
      {gardens.map((garden) => (
        <option key={garden.value} value={garden.value}>
          {garden.label}
        </option>
      ))}
    </select>
  )
}
