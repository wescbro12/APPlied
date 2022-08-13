import React from "react";

export default function NewJobForm() {
  return (
    <>
      <h2>Complete this form to start tracking your application</h2>
      <p>Company Name:</p>
      <br />
      <input name='company' type='text' />
      <p>Job Title:</p>
      <br />
      <input name='jobTitle' type='text' />
      <p>Salary:</p> <input name='salary' type='number' />
      <p>Contact Person/Recruiter:</p>
      <input name='contact' type='text' />
      <p>Date Applied:</p>
      <input name='dateApplied' type='date' />
      <p>Response?</p>
      <p>Y?</p>
      <input name='response' type='checkbox' />
      <p>N?</p>
      <input name='response' type='checkbox' />
      <p>Assesment Question:</p>
      <input name='assesment' type='text' />
      <p>Technical Interview Questions:</p>
      <input name='techInt' type='text' />
      <p>Behavioral Interview Questions:</p>
      <input name='behInt' type='text' />
      <p>Offer?</p>
      <p>Accepted</p>
      <input name='offer' type='checkbox' />
      <p>Rejected</p>
      <input name='offer' type='checkbox' />
      <p>Notes:</p>
      <input name='notes' type='text' />
    </>
  );
}
