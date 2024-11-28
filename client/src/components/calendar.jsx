import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import '../stylingSheets/calendar.css'

//the function Calendar makes a fetch request to the database and displays the fetched data in the form of a timetable
export default function Calendar(){
    let[events, setEvents] = useState([]);
    
    useEffect(() => {
      getEvents(); 
    }, []); 
  

    async function getEvents() {
      
      try{
        
        let response = await fetch(`/api/event`);
        if(response.ok){
          let data = await response.json();
          setEvents(data)
        }
        else{
          console.log(`Server Error: ${response.status} ${response.statusText}`);
        }
      }
      catch(e){
        console.log("Network Error", e);
      }
    }

      return (
        <div className = 'Calendar'> 
            <table>
              <thead> 
                <tr> 
                  <th className='th-date'> Date </th>
                  <th className='th-time'> Time </th>
                  <th className='th-sport'> Sport </th>
                  <th className='th-venue'> Venue </th>
                  <th className='th-teamA'> Team </th>
                  <th className='th-vs'> VS </th>
                  <th className='th-teamB'> Team </th>
                </tr>
              </thead>
              <tbody> 
                {
                  events.map((event) =>(
                    <tr key={event.id}>
                       <td> {event.date} </td>
                       <td> {event.time} </td>
                       <td> {event._sportname} </td>
                       <td> {event._venuename} </td>
                       <td> {event._teamname_A} </td>
                       <td> vs. </td>
                       <td> {event._teamname_B} </td>
                    </tr>
                ))
              }
              </tbody>
            </table>
        </div>
    )
}