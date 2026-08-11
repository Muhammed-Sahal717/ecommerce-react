import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  IconButton,
  Rating,
  Stack,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { addToCart } from "../redux/slices/cartSlice";
import { toggleWishlist } from "../redux/slices/wishlistSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Check if this specific product is in the wishlist
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleToggleWishlist = () => {
    dispatch(toggleWishlist(product));
  };

  const handleViewDetails = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
      }}
    >
      {/* Wishlist Button (Floating Top Right) */}
      <IconButton
        onClick={handleToggleWishlist}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          bgcolor: "background.paper",
          boxShadow: 1,
          "&:hover": { bgcolor: "grey.100" },
          zIndex: 1,
        }}
        size="small"
        color="secondary"
        aria-label="toggle wishlist"
      >
        {isInWishlist ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>

      {/* Image */}
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: "contain", p: 2 }} // Using contain keeps product images from getting cropped awkwardly
      />

      {/* Content Area */}
      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Typography
          variant="overline"
          color="text.secondary"
          sx={{ lineHeight: 1 }}
        >
          {product.category}
        </Typography>

        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          sx={{ fontWeight: "bold", lineHeight: 1.2, mt: 1 }}
        >
          {product.name}
        </Typography>

        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
          <Rating
            value={product.rating}
            precision={0.1}
            readOnly
            size="small"
          />
          <Typography variant="body2" color="text.secondary">
            {product.rating}
          </Typography>
        </Stack>

        <Typography
          variant="h6"
          color="primary.main"
          sx={{ fontWeight: "bold", mt: "auto", mb: 2 }}
        >
          ₹{product.price}
        </Typography>

        {/* Action Buttons */}
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" fullWidth onClick={handleViewDetails}>
            View Details
          </Button>
          <Button
            variant="contained"
            fullWidth
            onClick={handleAddToCart}
            disableElevation
          >
            Add to Cart
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
