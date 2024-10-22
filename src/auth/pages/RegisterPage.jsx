import { Google } from "@mui/icons-material";
import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";
import { initPath } from "../../../config";
import React from "react";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">
      <form>
        <Grid2 container spacing={2}>
        <Grid2 item xs={12} sx={{ mt: 1 }}>
            <TextField
              label="Nombre completo"
              variant="outlined"
              type="text"
              placeholder="Tu nombre completo"
              fullWidth
            />
          </Grid2>
          <Grid2 item xs={12} sx={{ mt: 1 }}>
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              placeholder="Correo@gmail.com"
              fullWidth
            />
          </Grid2>
          <Grid2 item xs={12} sx={{ mt: 1 }}>
            <TextField
              label="Contraseña"
              variant="outlined"
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid2>
        </Grid2>
        <Grid2 container spacing={2} sx={{ mt: 2 }}>
          <Grid2 item xs={12} sm={6}>
            <Button variant="contained" fullWidth>
              Crear cuenta
            </Button>
          </Grid2>
        </Grid2>
        <Grid2
          container
          direction={"row"}
          justifyContent={"end"}
          sx={{ mt: 1 }}
        >
          <Grid2 item xs={12}>
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
          </Grid2>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
