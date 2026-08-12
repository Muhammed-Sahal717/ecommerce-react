import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Typography, Box, Button, Grid } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";

import { clearWishlist } from "../redux/slices/wishlistSlice";
import WishlistItem from "../components/WishlistItem";

function Wishlist() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  if (!wishlistItems || wishlistItems.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 10, textAlign: "center" }}>
        <FavoriteBorderIcon
          sx={{ fontSize: 100, color: "text.disabled", mb: 2 }}
        />
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Your wishlist is empty
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Keep track of your favorite meals by clicking the heart icon on any
          product.
        </Typography>
        <Button
          variant="contained"
          size="large"
          disableElevation
          onClick={() => navigate("/products")}
        >
          Continue Shopping
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Box>
          <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
            My Wishlist
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {wishlistItems.length}{" "}
            {wishlistItems.length === 1 ? "item" : "items"} saved
          </Typography>
        </Box>
        <Button
          color="error"
          startIcon={<DeleteSweepIcon />}
          onClick={() => dispatch(clearWishlist())}
        >
          Clear Wishlist
        </Button>
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
          {wishlistItems.map((product) => (
            <WishlistItem key={product.id} product={product} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Wishlist;
