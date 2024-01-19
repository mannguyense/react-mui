import {
  Button,
  Container,
  CssBaseline,
  FormControl,
  FormLabel,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { FormGroup } from "@mui/material";
import { useAuth } from "../../../hooks";

export default function Login() {
  const { actions } = useAuth();

  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
        actions.setUser(values);
    },
  });

  return (
    <>
      <CssBaseline />
      <Container>
        <h1>Login</h1>
        <form onSubmit={form.handleSubmit}>
          <FormGroup>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <TextField
                name="email"
                value={form.values.email}
                onChange={form.handleChange}
              />
            </FormControl>
            <br />
            <FormLabel>Password</FormLabel>
            <FormControl>
              <TextField
                name="password"
                type="password"
                value={form.values.password}
                onChange={form.handleChange}
              />
            </FormControl>
            <Button
              type="submit"
              sx={{ mt: 4 }}
              color="primary"
              variant="contained"
            >
              Login
            </Button>
          </FormGroup>
        </form>
      </Container>
    </>
  );
}
