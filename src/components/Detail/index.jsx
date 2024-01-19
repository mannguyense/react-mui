import { Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks";

export default function Detail() {
  const { id } = useParams();
  const { product } = useProduct();
  const item = product.find((it) => it.id === Number(id));

  return (
    <Container>
      <h1>Details</h1>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <img
            src="https://picsum.photos/200/300"
            alt="Product image"
            width={"100%"}
            height={500}
          />
        </Grid>
        <Grid item xs={4}>
          <h2>{item.name}</h2>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ fontSize: 24, fontWeight: "bold", color: "#0e70d1" }}
          >
            {item.price}$
          </Typography>
          <p>{item.description}</p>
        </Grid>
      </Grid>
    </Container>
  );
}
