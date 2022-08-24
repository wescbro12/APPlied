
import { useState, useEffect } from 'react';


export default function Details() {
    const [job, setJob] = useState({
        jobTitle: '',
        contact: '',
        response: '',
        assesment: '',
        techInt: '',
        behInt: '',
        offer: '',
        salary: '',
        dateApplied: '',
        notes: ''

    })
    
    const [error, setError] = useState('')
    
    {/*const getOneJob = */ }

    return (<>
        <h1>{job.jobTitle}</h1>
    </>);
}


