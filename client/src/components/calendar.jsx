import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';


export default function Calendar(){
    // let [events, setEvents] = useState([]);

    // useEffect(() => {
    //     getEvents();
    // }, []); 
        
    //     //the getEvents function fetches the event from the database
    //     async function getEvents(){
    //         fetch("/api/event")
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setEvents(data);
    //         })
    //         .catch(e => {
    //             console.log("Network Error", e);
    //         });
    //     };
    

        let[events, setEvents] = useState([]);
        // let eventID = useParams().id
        
        useEffect(() => {
          getEvents(); 
        }, []); //[] is for calling the cb just once after the first render
      
    
        async function getEvents() {
          
          try{
            console.log("calendar events")
          
            // console.log(eventID)
            let response = await fetch(`/api/event`);
            if(response.ok){
              let data = await response.json();
              setEvents(data)
              console.log(data)
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
            <p> Voihan vittu nyt</p>
            <ul>
                {
                events.map (s =>(
                    <li key={s.id}>
                        <Link to={`/events/${s.id}`}> {s.name} ({s.id}) </Link>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}