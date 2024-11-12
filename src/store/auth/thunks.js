import { signInWithGoogle } from "../../firebase";
import { checkingCredentials, login, logout } from "./authSlice"


export const checkingAuthentication = (email,password) =>{

    return async(dispatch)=>{
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () =>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());
        const results = await signInWithGoogle();
        console.log(results);
        if(!results.ok){
            return dispatch(logout(results.errorMessage));
        }
        return dispatch(login(results));
    }
}