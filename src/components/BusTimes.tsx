import { useEffect, useState } from "react"
import useSWR, {  } from "swr"
import {fetcher} from '../hooks/fetcher'
import { ArivalsAndDepartures, ArrivalsAndDeparturesEntity } from "../types/ArivalsAndDepartures"

interface UpcomingBus {
  route?: string,
  stopName?: string,
  eta: Date,
  minutesAway?: number;
  predicted: boolean;
  originalData?: ArrivalsAndDeparturesEntity
}

export const BusTimes = () => {
  const [upcomingBuses, setUpcomingBuses ]= useState<UpcomingBus[]| undefined>([]);
  const [stopId, setStopId ] = useState("1_19360");
  const {data, error } = useSWR<ArivalsAndDepartures>('http://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/1_19360.json?key=TEST', fetcher, {refreshInterval: 300000, refreshWhenHidden: false, revalidateOnFocus: false} )



  useEffect(() => {
    if(data) {
      const upcomingBuses: UpcomingBus[] | undefined = data.data.entry?.arrivalsAndDepartures?.map((arrival: ArrivalsAndDeparturesEntity) => {
        let minutesAway =(new Date(arrival.scheduledArrivalTime).getTime() - Date.now()) /60000 
        if(arrival.predicted) {
          minutesAway = (new Date(arrival.predictedArrivalTime).getTime() - Date.now()) /60000 
        }
        const bus: UpcomingBus = 
          {
            stopName: data.data.references.stops?.find((value) => value.id === stopId)?.name,
            route: arrival.routeShortName, 
            eta: new Date(arrival.predictedArrivalTime),
            minutesAway,
            predicted: arrival.predicted,
            originalData: arrival,
          }
        
        return bus

      })
      setUpcomingBuses(upcomingBuses)
    }
  },[data, stopId])

  useEffect(() => {
    console.log(upcomingBuses)
  },[upcomingBuses])

    return (
      
        <div className="bus-section">
        <h2 className='bus-font'>Upcoming buses</h2>
        <div className='bus-list'>
          {upcomingBuses?.map((bus: UpcomingBus, index)=> {
            return <div key={index} className='bus-font'>{`${bus.route} in ${bus.minutesAway?.toFixed(0)} mins ${bus.predicted? " estimated": ""}`}</div>
          })}
        </div>
      </div>
      
    )
}