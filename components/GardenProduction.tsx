"use client"
import {
  YAxis,
  XAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts"
import { GardenWithRelations } from "@/types"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]
const monthObjects = months.map((month) => ({ name: month, value: null }))

export default function GardenProduction({
  garden,
}: {
  garden: GardenWithRelations
}) {
  const error = console.error
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return
    error(...args)
  }

  const [year, setYear] = useState(new Date().getFullYear())

  const data = garden.readings.map((reading: any) => ({
    name: new Date(reading.timestamp).toLocaleString("en", {
      month: "short",
    }),
    value: reading.value,
  }))

  const data2 = monthObjects.map((reading: any) => {
    const month = reading.name
    const monthObject = data.find((monthObject) => {
      return monthObject.name === month
    })
    if (!monthObject) return reading
    return monthObject
  })

  return (
    <div className="py-8">
      <div className="mx-auto text-center">
        <button className="inline-block">
          <ChevronLeft className="text-4xl" />{" "}
        </button>
        <span className="text-center text-4xl font-medium">{year}</span>
        <button className="inline-block">
          {" "}
          <ChevronRight />
        </button>
      </div>

      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={data2}>
          <CartesianGrid strokeDasharray={"4 2 1 2"} />
          <Tooltip />

          <Bar
            dataKey="value"
            name="Garden Production (kWh)"
            unit={" kWh"}
            fill="#099030CC"
            stroke="#000000"
            strokeWidth={2}
          />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 20000]} />
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
