import useSWR from "swr"
import { fetcher } from "../hooks/fetcher"
import { QOTDResponse } from "../types/QOTDResponse"
import style from './QoTD.module.scss'

export const QoTD = () => {
    const {data, error} = useSWR<QOTDResponse>('https://quotes.rest/qod?language=en', fetcher, { refreshInterval: 1800000, refreshWhenHidden: false, revalidateOnFocus: false })
    if(error) {
        return <div>Error {JSON.stringify(error)}</div>
    }

    if(!data) {
        return <div className={style['text']}>Loading...</div>
    }
    return (
        <div className={style['wrapper']}>
            
          <div className={style['text']}>{data.contents.quotes ? `${data.contents.quotes[0].quote} - ${data.contents.quotes[0].author}`: null}</div>
        </div>
    )
}