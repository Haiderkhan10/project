import React, { useEffect, useState } from "react"
import Calendar from '@toast-ui/react-calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';

export default function CalenderPackage(props) { 
   console.log("s")
  const [events, setEvents] = useState([]);  
  const initialEvents = []
  const convertedDay = Object.keys(props.data) 
  let id = 1; 
  useEffect(() => { 
    for (let i = 0; i < convertedDay.length; i++) {
      const convertedHour = Object.keys(props.data[convertedDay[i]]) 
      for (let o = 0; o < convertedHour.length; o++) {
        const title = props.data[convertedDay[i]][convertedHour[o]]
        const start =  `${convertedDay[i]}T${[convertedHour[o]]}:00:00`
       const end =  `${convertedDay[i]}T${convertedHour[o]}:30:00`
        const object = {
          id: `${id}`,
          calendarId: 'cal1',
          title: title,
          category: 'time',
          start: start,
          end: end ,
        } 
        // console.log(object)
        initialEvents.push(object)
      id = id + 1
      }

    }
    // console.log(initialEvents)
    setEvents(initialEvents) 
  }, [props.data]) 
  const calendars = [{ id: 'cal1', name: 'Personal' }];  

  return (
    <div>
      <Calendar
        height="900px"
        view="week"
        month={{
          dayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          visibleWeeksCount: 3,
        }}
        calendars={calendars}
        events={events}
      />
    </div>
  );
}