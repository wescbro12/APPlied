import { useState } from "react";
import * as userService from '../../utilities/users-service';
import styles from "./LoginPage.module.css"

export default function LoginForm({setUser}) {
    const [credentials, setCredentials] = useState({
        email: '',
        password:''
    });

    const [error, setError] = useState();

    const handleChange = (evt) => {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError('');
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            const user = await userService.login(credentials);
            setUser(user)
        } catch (error) {
            setError(error.message)
        } finally {
            setCredentials({
                email: '',
                password: ''
            })
        }
    }

    return (
        <div className={styles.fsc}>
            <div className={styles.logincon}>
                <h1 className={styles.logintitle}>Log In Here</h1>
                <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
                    <div className={styles.inputgroup}>
                        <label>Email</label>
                        <input type='email' name='email' value={credentials.email} onChange={handleChange} required />
                    </div>
                    <div className={styles.inputgroup}>
                    <label>Password</label>
                        <input type='password' name='password' value={credentials.password} onChange={handleChange} required />
                    </div>    
                    <button className={styles.loginbtn} type='submit'>Log In</button>
                </form>
            </div>
            <h1>&nbsp;{error}</h1>
        </div>
    )
}