import { Box, Grid, Slider } from "@mui/material"
import React, { useEffect, useState } from "react"
import { ChartType } from "./Chart"

interface RegulatorProps {
    data: ChartType
    setData: (data: ChartType) => void
}
const Regulator = (regulatorprops: RegulatorProps): JSX.Element => {
    const {data, setData} = regulatorprops
    const [carCount, setCarCount] = useState<number>(0)
    const [bikeCount, setBikeCount] = useState<number>(0)
    const [busCount, setBusCount] = useState<number>(0)
    const [trainCount, setTrainCount] = useState<number>(0)
    useEffect(() => {
        setData({
            ...data,
            carValue: carCount,
            bikeValue: bikeCount,
            busValue: busCount,
            trainValue: trainCount
        })
    },[carCount, bikeCount, busCount, trainCount])
    

    const handleCarChange = (event: any, newVal: any) => {
        setCarCount(newVal)
    }

    const handleBikeChange = (event: any, newVal: any) => {
        setBikeCount(newVal)
    }

    const handleTrainChange = (event: any, newVal: any) => {
        setTrainCount(newVal)
    }

    const handleBusChange = (event: any, newVal: any) => {
        setBusCount(newVal)
    }

    return <Box>
        {data.point}
        <Grid container spacing={2}>
            <Grid item xs={6}>
                Car
                <Slider value={carCount} onChange={handleCarChange} valueLabelDisplay="auto"/>
            </Grid>
            <Grid item xs={6}>
                Bike
                <Slider value={bikeCount} onChange={handleBikeChange} valueLabelDisplay="auto"/>
            </Grid>
            <Grid item xs={6}>
                Train
                <Slider value={busCount} onChange={handleBusChange} valueLabelDisplay="auto"/>
                </Grid>
            <Grid item xs={6}>
                Bus
                <Slider value={trainCount} onChange={handleTrainChange} valueLabelDisplay="auto"/>
            </Grid>
        </Grid>
        </Box>
}

export default Regulator