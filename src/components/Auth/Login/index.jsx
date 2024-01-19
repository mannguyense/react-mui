import {
  Button,
  Container,
  FormControl,
  FormGroup,
  FormLabel,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { useAuth } from "../../../hooks";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { actions } = useAuth();
  const navigate = useNavigate();

  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      // TODO: Call api to verify username and password
      const { email, password } = values;

      if (email === "admin@mail.com" && password === "admin") {
        actions.setUser(values);

        navigate('/');
      } else {
        alert("Invalid username or password");
      }
    },
  });

  return (
    <>
      <Container>
        <h1>Login</h1>
        <form onSubmit={form.handleSubmit}>
          <FormGroup>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <TextField
                type="email"
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
