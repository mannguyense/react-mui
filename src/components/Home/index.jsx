import {
  Container,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

import { useProduct } from "../../hooks";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { product } = useProduct();
  const navigate = useNavigate();

  const navigateToDetails = (id) => {
    console.log(id);
    navigate(`product/${id}`)
  };

  return (
    <Container>
      <h1>Home</h1>
      {product && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {product.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.id}
                  </TableCell>
                  <TableCell align="right">
                    {item.name}
                  </TableCell>
                  <TableCell align="right">{item.description}</TableCell>
                  <TableCell align="right">{item.price}$</TableCell>
                  <TableCell align="right" onClick={() => navigateToDetails(item.id)}>View</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
}
