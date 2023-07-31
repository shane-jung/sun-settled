"use client";
import {
  LineChart,
  YAxis,
  XAxis,
  CartesianGrid,
  Line,
  Legend,
  Tooltip,
} from "recharts";
import { GardenWithRelations } from '@/types'

export default function GardenProduction({ garden }: {garden: GardenWithRelations}) {
  const error = console.error;
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };

  const data = garden.readings.map((reading: any) => ({
    name: reading.timestamp.toLocaleString("default", { month: "long" }),
    value: reading.value,
  }));
  return (
    <div>
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 2000]} />
        <Legend />
        <Tooltip />
      </LineChart>
    </div>
  );
}
