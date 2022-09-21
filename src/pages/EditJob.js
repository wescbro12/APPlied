import React from "react";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import * as jobsApi from '../utilities/job-api';



export default function Update(props) {
    const company = useRef(null);
    const jobTitle = useRef(null);
    const contact = useRef(null);
    const response = useRef(null);
    const assesment = useRef(null);
    const techInt = useRef(null);
    const behInt = useRef(null);
    const offer = useRef(null);
    const salary = useRef(null);
    const dateApplied = useRef(null);
    const notes = useRef(null);
    let params = useParams()

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

    const updateJob = async (id) => {
        try {
            const response = await jobsApi.getOneJob(id)
            setJob(response)
        } catch (error) {
            setError('Bad Request')
        }
    }

    useEffect(() => {
        updateJob(params.id)
    }, [])

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            await jobsApi.updateJob({
                company: company.current.value,
                jobTitle: jobTitle.current.value,
                contact: contact.current.value,
                response: response.current.value,
                assesment: assesment.current.value,
                techInt: techInt.current.value,
                behInt: behInt.current.value,
                offer: offer.current.value,
                salary: salary.current.value,
                dateApplied: dateApplied.current.value,
                notes: notes.current.value,
            })
        } catch (error) {
            console.log(error)
        }
    }


    return (

        <>
            <h1>Edit Job Details</h1>
            <form onSubmit={handleSubmit}>
                <p>Job Title:</p>
                <br />
                <input name='jobTitle' type='text' defaultValue={job.jobTitle} ref={jobTitle} />
                <p>Salary:</p> <input name='salary' type='number' defaultValue={job.salary} ref={salary} />
                <p>Contact Person/Recruiter:</p>
                <input name='contact' type='text' defaultValue={job.contact} ref={contact} />
                <p>Date Applied:</p>
                <input name='dateApplied' type='date' defaultValue={job.dateApplied} ref={dateApplied} />
                <p>Response?</p>
                <p>Y?</p>
                <input name='response' type='checkbox' defaultValue={job.response} ref={response} />
                <p>N?</p>
                <input name='response' type='checkbox' defaultValue={job.response} ref={response} />
                <p>Assesment Question:</p>
                <input name='assesment' type='text' defaultValue={job.assesment} ref={assesment} />
                <p>Technical Interview Questions:</p>
                <input name='techInt' type='text' defaultValue={job.techInt} ref={techInt} />
                <p>Behavioral Interview Questions:</p>
                <input name='behInt' type='text' defaultValue={job.behInt} ref={behInt} />
                <p>Offer?</p>
                <p>Accepted</p>
                <input name='offer' type='checkbox' defaultValue={job.offer} ref={offer} />
                <p>Rejected</p>
                <input name='offer' type='checkbox' defaultValue={job.offer} ref={offer} />
                <p>Notes:</p>
                <input name='notes' type='text' defaultValue={job.notes} ref={notes} />
                <br />
                <br />
                <input type="submit" value="Update Job Info" />
            </form>
        </>
    )
}