import { Component } from "react";
import { signUp } from "../../utilities/users-api";
import styles from "./SignupPage.module.css"


export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    } 
    
    
    handleChange = (evt) => {
        this.setState({...this.state, [evt.target.name]: evt.target.value, error:''})
    }

    handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const formData = { ...this.state };
            delete formData.error;
            delete formData.confirm;
            const user = await signUp(formData);
            this.props.setUser(user)
        } catch (error) {
            this.setState({ error: 'Sign Up Failed' })
            console.log({error: error.message})
        } finally {
            this.setState({
                name: '',
                email: '',
                password: '',
                confirm: ''
                
            })
            
        }
    }
    render() { 
        
        const disable =this.state.password !== this.state.confirm
        return (
            <div className={styles.fsc}>
                <div className={styles.signupcon}>
                    <div>
                        <h1 className={styles.signuptitle}>SignUp</h1>
                        <form className={styles.form} autoComplete="off" onSubmit={this.handleSubmit}>
                            <div className={styles.inputgroup}>
                                 <label>Name</label>
                                <input type='text' name='name' value={this.state.name} onChange={this.handleChange} required />
                            </div>
                            <div className={styles.inputgroup}>
                                <label>Email</label>
                                <input type='email' name='email' value={this.state.email} onChange={this.handleChange} required />
                            </div> 
                            <div className={styles.inputgroup}>
                                <label>Password</label>
                                <input type='password' name='password' value={this.state.password} onChange={this.handleChange} required />
                            </div> 
                            <div className={styles.inputgroup}>
                                <label>Confirm Password</label>
                                <input type='password' name='confirm' value={this.state.confirm} onChange={this.handleChange} required />
                            </div> 
                        <button type='submit' className={styles.signupbtn} disabled={disable}>SIGN UP</button>
                        </form>
                    </div>
                    <span className={styles.msg}>&nbsp;{this.state.error &&  <h2>{this.state.error}</h2>}</span>
                </div>  
            </div>
        );
    }
}
 
