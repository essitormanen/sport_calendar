import React, {useState} from 'react';


//the following piece of code is a function called AddEvent. It is a form for adding a new event to the database
export default function AddEvent(){
    let EMPTY_FORM = {
        date: '',
        time: '',
        _sportname: '',
        _venuename: '',
        _teamname_A: '',
        _teamname_B: '',
    };

    const [formData, setFormData] = useState(EMPTY_FORM)

    function handleSubmit(event){
        event.preventDefault();
        
        fetch("/api/event", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })

        setFormData(EMPTY_FORM)
        
        
        alert("Form submitted! Refer to the console to see if it was succesful + Reload page to see the changes")
            
        
}   

    function handleChange(event){
        let {name, value} = event.target;
        setFormData(formData => ({...formData, [name]: value}));
}

    return(
        <>
        <div className='AddEvent'> 
            <form className='AddEvent' onSubmit={handleSubmit}> 
                <label> Add a new event </label>

                <div>
                    <label className='dateInput'> Date:  
                        <input htmlFor='date'  
                            id='date' 
                            type='date'
                            name='date'
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                
                <div>
                    <label className='timeInput'> Time:  
                        <input htmlFor='time'  
                            id='time' 
                            type='time'
                            name='time'
                            value={formData.time}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                
                <div>
                    <label className='sportInput'> Sport:  
                        <input htmlFor='sport'  
                            id='sport' 
                            type='text'
                            name='_sportname'
                            value={formData._sportname}
                            onChange={handleChange}
                            required minLength='1'
                            maxLength='50'
                            size='15'
                        />            
                    </label>
                </div>
                
                <div>
                    <label className='venueInput'> Venue:  
                        <input htmlFor='venue'  
                            id='venue' 
                            type='text'
                            name='_venuename'
                            value={formData._venuename}
                            onChange={handleChange}
                            required minLength='1'
                            maxLength='50'
                            size='15'
                        />
                    </label>
                </div>
                
                <div>
                    <label className='teamAInput'> Team (A):  
                        <input htmlFor='teamA'  
                            id='teamA' 
                            type='text'
                            name='_teamname_A'
                            value={formData._teamname_A}
                            onChange={handleChange}
                            required minLength='1'
                            maxLength='20'
                            size='15'
                        />
                    </label>
                </div>

                <div>
                    <label className='teamBInput'> Team (B):  
                        <input htmlFor='teamB'  
                            id='teamB' 
                            type='text'
                            name='_teamname_B'
                            value={formData._teamname_B}
                            onChange={handleChange}
                            required minLength='1'
                            maxLength='20'
                            size='15'
                        />
                    </label>
                </div>
                <button onClick={handleSubmit}> Submit </button>
            </form>
        </div>
        </>
)}