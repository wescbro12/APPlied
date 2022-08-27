
import * as usersAPI from './users-api';

// Signing up
export async function signUp(userData) {
    const token = await usersAPI.signUp(userData);
    localStorage.setItem('token', token)
    return getUser();
}

//Logging In
export async function login(credentials) {
    const token = await usersAPI.login(credentials);
    localStorage.setItem('token', token);
    return getUser();
}

//Getting token
export function getToken() {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const payload = JSON.parse(atob(token.split('.')[1]))
    if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('token');
        return null;
    }
    return token;
}

//getUser
export function getUser() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

//Logging out
export function logOut() {
    localStorage.removeItem('token')
}