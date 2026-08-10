import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Redux state selectors
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  // Calculate cart total quantity and wishlist count
  const totalCartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  const wishlistCount = wishlistItems.length;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: "bold" }}>
        FoodApp
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={item.path}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop Brand */}
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold",
            }}
          >
            FoodApp
          </Typography>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: "none", sm: "block" }, mr: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={RouterLink}
                to={item.path}
                sx={{ color: "#fff" }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Spacer for Mobile layout where Brand is hidden */}
          <Box sx={{ flexGrow: { xs: 1, sm: 0 } }} />

          {/* Icons (always visible) */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              component={RouterLink}
              to="/wishlist"
              color="inherit"
              aria-label="wishlist"
            >
              <Badge badgeContent={wishlistCount} color="secondary">
                <FavoriteIcon />
              </Badge>
            </IconButton>

            <IconButton
              component={RouterLink}
              to="/cart"
              color="inherit"
              aria-label="cart"
            >
              <Badge badgeContent={totalCartQuantity} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}

export default Navbar;
