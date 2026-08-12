import { useDispatch } from "react-redux";
import { Box, Typography, IconButton, Card, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/slices/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

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
        src={item.image}
        alt={item.name}
        sx={{
          width: { xs: "100%", sm: 120 },
          height: 120,
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
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {item.category}
        </Typography>
        <Typography
          variant="body1"
          color="primary.main"
          sx={{ fontWeight: "bold" }}
        >
          ₹{item.price}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: { xs: 2, sm: 0 },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ bgcolor: "action.hover", borderRadius: 1, p: 0.5 }}
        >
          <IconButton
            size="small"
            onClick={() => dispatch(decreaseQuantity(item.id))}
          >
            <RemoveIcon fontSize="small" />
          </IconButton>
          <Typography sx={{ px: 1, fontWeight: "medium" }}>
            {item.quantity}
          </Typography>
          <IconButton
            size="small"
            onClick={() => dispatch(increaseQuantity(item.id))}
          >
            <AddIcon fontSize="small" />
          </IconButton>
        </Stack>

        <Box sx={{ textAlign: "right", minWidth: 100, ml: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            ₹{item.price * item.quantity}
          </Typography>
        </Box>

        <IconButton
          color="error"
          onClick={() => dispatch(removeFromCart(item.id))}
          sx={{ ml: 2 }}
        >
          <DeleteOutlinedIcon />
        </IconButton>
      </Box>
    </Card>
  );
}

export default CartItem;
