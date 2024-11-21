import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Link as LinkRouter, Navigate, useNavigate } from "react-router-dom";
import { initPath } from "../../../config";
import React, {  useMemo, useState } from "react";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El Email debe contener un @"],
  password: [
    (value) => value.length > 5,
    "La contraseña debe tener al menos 6 caracteres.",
  ],
  displayName: [(value) => value.length > 0, "El nombre es requerido."],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmitted, setformSubmitted] = useState(false);
  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );

  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    formIsValid,
    emailValid,
    passwordValid,
    displayNameValid,
  } = useForm(formData, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();
    setformSubmitted(true);
    if (!formIsValid) {
      return;
    }
    dispatch(startCreatingUserWithEmailPassword(formState));
  };
  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ mt: 1 }}>
            <TextField
              label="Nombre completo"
              variant="outlined"
              type="text"
              placeholder="Tu nombre completo"
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 1 }}>
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              placeholder="Correo@gmail.com"
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 1 }}>
            <TextField
              label="Contraseña"
              variant="outlined"
              type="password"
              placeholder="Contraseña"
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6} display={!!errorMessage ? "" : "none"}>
            <Alert severity="error">{errorMessage}</Alert>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            display={status === "authenticated" ? "" : "none"}
          >
            <Alert severity="success">Usuario creado con éxito.</Alert>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              disabled={isCheckingAuthentication}
            >
              Crear cuenta
            </Button>
          </Grid>
        </Grid>
        <Grid container direction={"row"} justifyContent={"end"} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <Typography variant="body2">
              ¿Ya tienes cuenta?{" "}
              <Link
                component={LinkRouter}
                color="inherit"
                to={`${initPath}/auth/login`}
              >
                Ingresar
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
