import {
  loginUserWithEmailAndPassword,
  logoutFirebase,
  registerUserWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import { checkingCredentials, login, logout } from "./authSlice";

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const results = await signInWithGoogle();
    console.log(results);
    if (!results.ok) {
      return dispatch(logout(results.errorMessage));
    }
    return dispatch(login(results));
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, errorMessage } =
      await registerUserWithEmailAndPassword({ email, password, displayName });
    if (!ok) {
      return dispatch(logout(errorMessage));
    }
    dispatch(login({ email, displayName, uid, photoURL }));
  };
};

export const startLoginWithEmailAndPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const { ok, uid, photoURL, errorMessage, displayName } =
      await loginUserWithEmailAndPassword({ email, password });

    if (!ok) {
      return dispatch(logout(errorMessage));
    }
    dispatch(login({ email, displayName, uid, photoURL }));
  };
};

export const startLogout = () => {  
  return async(dispatch) =>{
    await logoutFirebase();
    dispatch(logout());
  }
}
