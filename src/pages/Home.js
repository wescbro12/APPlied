import { Link } from "react-router-dom";



export default function Home({ setUser }) {

    return (

        <main>
            <h1>Welcome to APPlied!</h1>
            <p>An online job application tracker!</p>
            <Link to="/jobs/signup">Sign Up</Link>
        </main>);
}

