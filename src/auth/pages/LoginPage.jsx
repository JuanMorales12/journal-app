import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";
import { initPath } from "../../../config";
import React, { useMemo } from "react";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import {
  checkingAuthentication,
  startGoogleSignIn,
} from "../../store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";

export const LoginPage = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { email, password, onInputChange, formState } = useForm({
    email: "juan@test.com",
    password: "123456",
  });

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(checkingAuthentication(email, password));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ mt: 1 }}>
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              placeholder="Correo@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 1 }}>
            <TextField
              label="Contraseña"
              variant="outlined"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              disabled={isAuthenticating}
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              fullWidth
              onClick={onGoogleSignIn}
              disabled={isAuthenticating}
            >
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid container direction={"row"} justifyContent={"end"} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <Typography variant="body2">
              ¿No tienes cuenta?{" "}
              <Link
                component={LinkRouter}
                color="inherit"
                to={`${initPath}/auth/register`}
              >
                Crear una cuenta
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
