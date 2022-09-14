import SignUpForm from "../../components/SignUpPage/SignUpForm";
import { useState } from "react";



export default function SignUpPage({ setUser }) {
    return (
        <div>

            {<SignUpForm setUser={setUser} />}

        </div>
    )
}