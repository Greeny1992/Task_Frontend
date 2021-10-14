import { ChartType } from "./components/Chart";

export function getInitPoint(name: string): ChartType {
    return {
        point: name,
        bikeValue: 0,
        busValue: 0,
        carValue: 0,
        trainValue: 0
    }
} 