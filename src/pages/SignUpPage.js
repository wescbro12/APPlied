import SignUpForm from "../components/SignUpForm";
import { useState } from "react";


export default function SignUpPage({ setUser }) {
    return (
        <div>
            <h1>Sign Up</h1>
            {<SignUpForm setUser={setUser} />}

        </div>
    )
}