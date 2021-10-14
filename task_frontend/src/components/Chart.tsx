import React from "react"
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts"

export type ChartType = {
    point: string,
    carValue: number,
    bikeValue: number,
    trainValue: number,
    busValue: number
}

export interface ChartProps {
    data: ChartType[]
}
const Chart = (chartProps: ChartProps) => {
    
    return <BarChart width={730} height={250} data={chartProps.data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="point" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="carValue" fill="#8884d8" />
    <Bar dataKey="bikeValue" fill="#82ca9d" />
    <Bar dataKey="trainValue" fill="#32a852" />
    <Bar dataKey="busValue" fill="#a8a632" />
  </BarChart>
}

export default Chart