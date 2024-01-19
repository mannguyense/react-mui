import CssBaseline from "@mui/material/CssBaseline";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <CssBaseline />
      <nav>
        <ul>
          <Link to={'/'}>
            <li>
                Home
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
