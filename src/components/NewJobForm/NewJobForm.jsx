import React from "react";
import { useState, useRef } from "react";
import { createJob } from "../../utilities/job-api";
// import { useNavigate } from "react-router-dom";
import styles from "./NewJobForm.module.css"

export default function NewJobForm() {
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
  // const Navigate = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      /*await fetch("http://localhost:3001/api/jobs/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
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
        }),
      });*/
      
        await createJob({
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
      }); 
      
    } catch (error) {
      console.log(error);
      // } finally {
      //   Navigate("/jobs");
    }
  };
  return (
    <>
      <form className={styles.fsc} onSubmit={handleSubmit}>
        <div className={styles.newformcon}>
          <h2>Complete this form to start tracking your application</h2>
          <div className={styles.inputgroup}>
          {/* <p>Company Name:</p> */}
       
          <input name='company' type='text' ref={company} placeholder="Company Name" />
          </div>
          <div className={styles.inputgroup}>
          {/* <p>Job Title:</p> */}
        
          <input name='jobTitle' type='text' ref={jobTitle} placeholder="Job Title" />
          </div>  
          <div className={styles.inputgroup}>
          {/* <p>Salary:</p> */}
            <input name='salary' type='number' ref={salary} placeholder="Salary" />
          </div>  
          <div className={styles.inputgroup}>
          <p>Contact Person/Recruiter:</p>
            <input name='contact' type='text' ref={contact} />
          </div> 
          <div className={styles.inputgroupres}>
          <p>Date Applied:</p>
          <input name='dateApplied' type='date' ref={dateApplied} />
          <p>Response?</p>
          <p>Y?</p>
          <input name='response' type='checkbox' ref={response} />
          <p>N?</p>
           <input name='response' type='checkbox' ref={response} />
         </div> 
          <div className={styles.inputgroupques}>
            <p>Assesment Question:</p>
             <input name='assesment' type='text' ref={assesment} />
            <p>Technical Interview Questions:</p>
              <input name='techInt' type='text' ref={techInt} />
             <p>Behavioral Interview Questions:</p>
              <input name='behInt' type='text' ref={behInt} />
           </div> 
          <div className={styles.inputgroupres}>
            <p>Offer?</p>
            <p>Accepted</p>
              <input name='offer' type='checkbox' ref={offer} />
            <p>Rejected</p>
              <input name='offer' type='checkbox' ref={offer} />
             <p>Notes:</p>
                <input name='notes' type='text' ref={notes} />
          </div>
           <button type='submit' className={styles.uploadbtn}>Upload New Application</button>                 
        </div> 
      </form>
      <a href='/jobs'>
        <h3>Return to Application Dashboard</h3>
      </a>
    </>
  );
}
