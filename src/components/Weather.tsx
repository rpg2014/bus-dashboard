import useSWR from 'swr';
import logo from '../../public/logo.svg';
import { apiKey } from './apiKey';
import { WeatherResponse } from '../types/WeatherResponse';
import { fetcher } from '../hooks/fetcher';
import styles from './Weather.module.scss'
// import Image from 'next/image'

export const Weather = () => {
    const zipCode = "98103"
    const {data, error } = useSWR<WeatherResponse>(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=imperial`, fetcher, { refreshInterval: 1800000, refreshWhenHidden: false, revalidateOnFocus: false })

    if(error) {
        return <div>Error {JSON.stringify(error)}</div>
    }

    if(!data) {
        return <div>Loading...</div>
    }
    if (data.weather == null || data.weather == undefined) {
        <div className={styles['text']}>No Weather was returned</div>
    }

    return (
        <div className={styles['section']}>
        <img className={styles['image']} src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}  alt="logo" width='100px' height='100px' />
        <div className={styles['text']}>
            <p>{data.weather? `${data.weather[0].main} - ${data.weather[0].description}`: null}</p>
            <p>Feels like {data.main.temp.toFixed(0)}°</p>
            <p>Sunset is at {new Date(data.sys.sunset*1000 ).toLocaleTimeString()}</p>
        </div>
      </div>
    )
}