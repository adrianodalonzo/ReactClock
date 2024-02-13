import { useEffect, useState } from "react";
import H1 from "./H1";

const Clock = () => {
    
    const [time, setTime] = useState(null)
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

    const formatNumber = (x) => {
        return x < 10 ? `0${x}` : x
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date()

            const hour = formatNumber(date.getHours())
            const minutes = formatNumber(date.getMinutes())
            const seconds = formatNumber(date.getSeconds())

            setTime(`${hour} : ${minutes} : ${seconds}`)
        }, 1000)

        return () => clearInterval(interval)
    })

    return ( 
        <>
            {time ? <H1 value={time} id="clock"/> : <H1 value="Loading Clock for Region..."/>}
            <h3><strong id="time-zone-label">Time Zone</strong> {time ? timezone : "Fetching..."}</h3>
        </>
    );
}
 
export default Clock;