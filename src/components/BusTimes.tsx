import React, { useEffect, useState } from "react"
import useSWR, { } from "swr"
import { fetcher } from '../hooks/fetcher'
import { ArivalsAndDepartures, ArrivalsAndDeparturesEntity } from "../types/ArivalsAndDepartures"
import styles from './BusTimes.module.scss'

interface UpcomingBus {
    route?: string,
    stopName?: string,
    eta: Date,
    minutesAway?: number;
    predicted: boolean;
    originalData?: ArrivalsAndDeparturesEntity
}

export const BusTimes = () => {
    const stopList = ["1_19360", "1_18120"]                                                                                                                                    //60000

    return (
        <div className="bus-section">
            <h2 className={styles['bus-header'] + ' bus-font'}>Upcoming buses</h2>
            <div className={styles["bus-list-wrapper"]} >
                {stopList.map((stopId) => <BusList key={stopId} stopId={stopId} />)}
            </div>
        </div>

    )
}


const BusList = ({ stopId }: { stopId: string }) => {
    const { data: stop, error } = useSWR<ArivalsAndDepartures>(`http://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/${stopId}.json?key=TEST`, fetcher, { refreshInterval: 300000, refreshWhenHidden: false, revalidateOnFocus: false })
    if (error) {
        return <div>Error: {JSON.stringify(error)}</div>
    }
    if (!stop) {
        return <div className='bus-font'>&quot;Loading...&quot;</div>
    }
    
    return (
        <div className={styles["bus-list"]}>
            <h4 className={styles["bus-stop-title"]}>{stop.data.references.stops?.find((value) => value.id === stopId)?.name || "Loading..."}</h4>
            {stop.data.entry?.arrivalsAndDepartures?.map((arrival: ArrivalsAndDeparturesEntity, index) => {
                const stopName = stop.data.references.stops?.find((value) => value.id === stopId)?.name || "Loading..."
                return <UpcomingBusComponent key={arrival.tripId} arrival={arrival} index={index} stopName={stopName} />
            })}
        </div>

    )
}

type UpcomingBusComponentProps = { arrival: ArrivalsAndDeparturesEntity, index: number, stopName: string, routeNumberToShow?: number }

const UpcomingBusComponent = ({ arrival, index, stopName, routeNumberToShow }: UpcomingBusComponentProps) => {
    let minutesAway = (new Date(arrival.scheduledArrivalTime).getTime() - Date.now()) / 60000
    if (arrival.predicted) {
        minutesAway = (new Date(arrival.predictedArrivalTime).getTime() - Date.now()) / 60000
    }
    if (minutesAway < 0) {
        return null;
    }
    const bus: UpcomingBus =
    {
        stopName,
        route: arrival.routeShortName,
        eta: new Date(arrival.predictedArrivalTime),
        minutesAway,
        predicted: arrival.predicted,
        originalData: arrival,
    }
    if (routeNumberToShow && arrival.routeShortName !== routeNumberToShow?.toString()) {
        return null;
    }
    return (
        <div key={index} className='bus-font'>{`${bus.route} in ${bus.minutesAway?.toFixed(0)} mins`}</div>
    )
}