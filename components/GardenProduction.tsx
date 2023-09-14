"use client"

import { GardenWithRelations } from "@/types"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

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
    name: new Date(reading.startDate).toLocaleString("en", {
      month: "short",
    }),
    value: reading.value as number,
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
    <div className="h-full py-4">
      {/* <div className="mx-auto text-center">
        <button className="inline-block">
          <ChevronLeft className="text-4xl" />{" "}
        </button>
        <span className="text-center text-4xl font-medium">{year}</span>
        <button className="inline-block">
          {" "}
          <ChevronRight />
        </button>
      </div> */}

      <ResponsiveContainer maxHeight={300}>
        <BarChart data={data2}>
          <CartesianGrid strokeDasharray={"4 2 1 2"} />
          <Tooltip />

          <Bar
            dataKey="value"
            name="Garden Production (kWh)"
            unit={" kWh"}
            fill="#5478d8"
            stroke="#000000"
            strokeWidth={1}
          />
          <XAxis dataKey="name" />
          <YAxis
            domain={[
              0,
              1200 *
                Math.round(
                  Math.max(...data2.map((reading: any) => reading.value)) / 1000
                ),
            ]}
          />

          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
