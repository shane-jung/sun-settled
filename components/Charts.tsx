"use client"

import { Garden, GardenWithReadings, Reading } from "@/types"
import {
  AreaChart,
  BarChart,
  Card,
  Subtitle,
  Title,
  DonutChart as TremorDonutChart,
} from "@tremor/react"

const dataFormatter = (number: number) => {
  return Intl.NumberFormat("us").format(number).toString() + " kWh"
}

const GardenProduction = ({
  readings,
  categories,
}: {
  readings: any
  categories: string[]
}) => {
  return (
    <AreaChart
      className="mt-6"
      data={readings}
      index="date"
      categories={categories}
      valueFormatter={dataFormatter}
      noDataText="No data available. Report a reading to get started."
    />
  )
}

const StackedGardenProductions = ({
  gardens,
}: {
  gardens: GardenWithReadings[]
}) => {
  let readings = gardens.map((garden) => {
    let readings = garden.readings.map((reading) => ({
      date: reading.endDate.toLocaleString("default", { month: "short" }),
      [garden.name]: reading.value,
    }))
    return readings
  })

  return (
    <Card>
      <Title>Garden Production</Title>
      <Subtitle>
        The IUCN Red List has assessed only a small share of the total known
        species in the world.
      </Subtitle>
      {/* <BarChart
        stack
        className="mt-6"
        data={readings}
        index="date"
        categories={["Production (kWh)"]}
        yAxisWidth={72}
        valueFormatter={dataFormatter}
      /> */}
    </Card>
  )
}

const DonutChart = ({ data, unit }: { data: any; unit: string }) => {
  return (
    <TremorDonutChart
      data={data}
      valueFormatter={(value: number) => value.toString() + " " + unit}
      category="value"
      index="name"
    ></TremorDonutChart>
  )
}

export { GardenProduction, StackedGardenProductions, DonutChart }
