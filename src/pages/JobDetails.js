
import * as jobsApi from "../utilities/job-api";
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';



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
        <h1>This is the Job details page</h1>
        <h1>{job.jobTitle}</h1>
    </>);
}


