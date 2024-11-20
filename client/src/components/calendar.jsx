import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';


export default function calendar(){
    let [events, setEvents] = useState([]);

    useEffect(() => {
        getEvents();
    }, []); 
    
    //the getEvents function fetches the event from the database
    const getEvents = () => {
        fetch("/api/event")
        .then(response => response.json())
        .then(data => {
            setEvents(data);
        })
        .catch(error => {
            console.log(error);
        });
    };
    
    return (
        <div className = 'Calendar'>
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