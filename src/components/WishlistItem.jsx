import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Card,
  Stack,
  Rating,
} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { removeFromWishlist } from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";

function WishlistItem({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        mb: 2,
        p: 2,
        boxShadow: 1,
      }}
    >
      <Box
        component="img"
        src={product.image}
        alt={product.name}
        sx={{
          width: { xs: "100%", sm: 150 },
          height: 150,
          objectFit: "contain",
          mb: { xs: 2, sm: 0 },
          mr: { sm: 3 },
        }}
      />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {product.category}
        </Typography>

        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <Rating
            value={product.rating}
            precision={0.1}
            readOnly
            size="small"
          />
          <Typography variant="body2" color="text.secondary">
            ({product.rating})
          </Typography>
        </Stack>

        <Typography
          variant="h6"
          color="primary.main"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          ₹{product.price}
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          sx={{ mt: "auto", flexWrap: "wrap", gap: 1 }}
        >
          <Button
            variant="contained"
            size="small"
            startIcon={<ShoppingCartIcon />}
            onClick={() => dispatch(addToCart(product))}
            disableElevation
          >
            Add to Cart
          </Button>
          <Button
            variant="outlined"
            size="small"
            startIcon={<VisibilityIcon />}
            onClick={() => navigate(`/products/${product.id}`)}
          >
            View Details
          </Button>
        </Stack>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          mt: { xs: 2, sm: 0 },
        }}
      >
        <IconButton
          color="error"
          onClick={() => dispatch(removeFromWishlist(product.id))}
        >
          <DeleteOutlinedIcon />
        </IconButton>
      </Box>
    </Card>
  );
}

export default WishlistItem;
