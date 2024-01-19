import {
  Container,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  DialogActions,
  Button,
  FormGroup,
  FormLabel,
  FormControl,
  TextField,
} from "@mui/material";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useProduct } from "../../hooks";
import { useFormik } from "formik";

export default function Home() {
  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);
  const [isOpenAddDialog, setIsOpenAddDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { product, actions } = useProduct();
  const navigate = useNavigate();

  const navigateToDetails = (id) => {
    navigate(`product/${id}`);
  };

  const deleteProduct = () => {
    // TODO: Calling api to delete product
    setIsOpenDeleteDialog(false);
    actions.removeProduct(selectedProduct.id);
  };

  const addForm = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: 0,
    },
    onSubmit: (values) => {
      actions.addProduct(values);
    },
  });

  return (
    <Container>
      <h1>Home</h1>
      <Button
        color="primary"
        variant="contained"
        sx={{
          mb: 4,
        }}
        onClick={() => setIsOpenAddDialog(true)}
      >
        Add product
      </Button>
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
                  <TableCell align="right">{item.name}</TableCell>
                  <TableCell align="right">{item.description}</TableCell>
                  <TableCell align="right">{item.price}$</TableCell>
                  <TableCell
                    align="right"
                    onClick={() => navigateToDetails(item.id)}
                  >
                    View
                  </TableCell>
                  <TableCell
                    align="right"
                    onClick={() => {
                      setSelectedProduct(item);
                      setIsOpenDeleteDialog(true);
                    }}
                  >
                    <Typography
                      sx={{
                        color: "red",
                      }}
                    >
                      Delete
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Dialog
        open={isOpenDeleteDialog}
        onClose={() => setIsOpenDeleteDialog(false)}
      >
        <DialogTitle>
          <Typography
            sx={{
              color: "red",
              fontSize: 20,
            }}
          >
            Delete
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete {selectedProduct?.name} product?
            this action is irreversible.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsOpenDeleteDialog(false)}>Cancel</Button>
          <Button onClick={() => deleteProduct()} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={isOpenAddDialog} onClose={() => setIsOpenAddDialog(false)}>
        <DialogTitle>
          <Typography
            sx={{
              fontSize: 20,
            }}
          >
            Add
          </Typography>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={addForm.handleSubmit}>
            <FormGroup>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <TextField
                  type="text"
                  value={addForm.values.name}
                  onChange={addForm.handleChange}
                ></TextField>
              </FormControl>
              <br />
              <FormLabel>Description</FormLabel>
              <FormControl>
                <TextField
                  type="text"
                  value={addForm.values.description}
                  onChange={addForm.handleChange}
                ></TextField>
              </FormControl>
              <br />
              <FormLabel>Price</FormLabel>
              <FormControl>
                <TextField
                  type="number"
                  value={addForm.values.price}
                  onChange={addForm.handleChange}
                ></TextField>
              </FormControl>
            </FormGroup>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsOpenAddDialog(false)}>Cancel</Button>
          <Button autoFocus>Confirm</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
