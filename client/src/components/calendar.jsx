import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';


export default function Calendar(){
    let[events, setEvents] = useState([]);
    
    useEffect(() => {
      getEvents(); 
    }, []); 
  

    async function getEvents() {
      
      try{
        console.log("calendar events")
        let response = await fetch(`/api/event`);
        if(response.ok){
          let data = await response.json();
          setEvents(data)
          // console.log(data)
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
                {
                events.map((event) =>(
                    <tr key={event.id}>
                       {event._sportname} ({event.id}) {event._venuename} {event._teamname_A} {event._teamname_B}
                    </tr>
                ))
                }
            </table>
        </div>
    )
}