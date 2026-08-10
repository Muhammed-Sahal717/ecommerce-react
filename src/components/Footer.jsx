import {
  Box,
  Grid,
  Typography,
  Link as MuiLink,
  Divider,
  Stack,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.paper",
        color: "text.secondary",
        borderTop: 1,
        borderColor: "divider",
        mt: "auto",
        width: "100%",
        pt: { xs: 6, md: 7 },
        pb: 4,
        px: { xs: 3, sm: 6, md: 8, lg: 10 },
      }}
    >
      <Grid
        container
        columnSpacing={{ xs: 3, md: 5, lg: 6 }}
        rowSpacing={{ xs: 4, md: 0 }}
      >
        {/* Brand - 4 columns */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Stack spacing={2}>
            <Typography
              variant="h5"
              color="text.primary"
              sx={{
                fontWeight: 700,
                letterSpacing: "-0.5px",
              }}
            >
              FoodApp
            </Typography>

            <Typography
              variant="body2"
              sx={{
                lineHeight: 1.6,
                maxWidth: 400,
              }}
            >
              The best place to find delicious food, from juicy burgers to fresh
              sushi. Order now and satisfy your cravings delivered straight to
              your door.
            </Typography>

            {/* Social Links */}
            <Stack direction="row" spacing={1}>
              <IconButton size="small" color="inherit">
                <FacebookIcon fontSize="small" />
              </IconButton>

              <IconButton size="small" color="inherit">
                <TwitterIcon fontSize="small" />
              </IconButton>

              <IconButton size="small" color="inherit">
                <InstagramIcon fontSize="small" />
              </IconButton>

              <IconButton size="small" color="inherit">
                <YouTubeIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>
        </Grid>

        {/* Quick Links - 2 columns */}
        <Grid size={{ xs: 6, sm: 3, md: 2 }}>
          <Typography
            variant="subtitle1"
            color="text.primary"
            sx={{
              fontWeight: 600,
              mb: 2,
            }}
          >
            Quick Links
          </Typography>

          <Stack spacing={1.5}>
            {[
              { label: "Home", path: "/" },
              { label: "Products", path: "/products" },
              { label: "Wishlist", path: "/wishlist" },
              { label: "Cart", path: "/cart" },
            ].map((link) => (
              <MuiLink
                key={link.label}
                component={RouterLink}
                to={link.path}
                color="text.secondary"
                underline="hover"
                sx={{
                  fontSize: "0.875rem",
                  width: "fit-content",
                  transition: "color 0.2s",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                {link.label}
              </MuiLink>
            ))}
          </Stack>
        </Grid>

        {/* Categories - 2 columns */}
        <Grid size={{ xs: 6, sm: 3, md: 2 }}>
          <Typography
            variant="subtitle1"
            color="text.primary"
            sx={{
              fontWeight: 600,
              mb: 2,
            }}
          >
            Categories
          </Typography>

          <Stack spacing={1.5}>
            {["Burgers", "Pizza", "Pasta", "Sushi", "Tacos"].map((category) => (
              <MuiLink
                key={category}
                component={RouterLink}
                to="/products"
                color="text.secondary"
                underline="hover"
                sx={{
                  fontSize: "0.875rem",
                  width: "fit-content",
                  transition: "color 0.2s",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                {category}
              </MuiLink>
            ))}
          </Stack>
        </Grid>

        {/* Newsletter - 4 columns */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Stack spacing={2}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              sx={{
                fontWeight: 600,
              }}
            >
              Stay Updated
            </Typography>

            <Typography
              variant="body2"
              sx={{
                lineHeight: 1.6,
                maxWidth: 500,
              }}
            >
              Subscribe to our newsletter for exclusive offers and discounts.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
              <TextField
                placeholder="Your email address"
                size="small"
                variant="outlined"
                fullWidth
                sx={{
                  bgcolor: "background.default",
                  borderRadius: 1,

                  "& .MuiOutlinedInput-root": {
                    fontSize: "0.875rem",
                    minHeight: 40,
                  },
                }}
              />

              <Button
                variant="contained"
                disableElevation
                sx={{
                  px: 3,
                  minHeight: 40,
                  flexShrink: 0,
                }}
              >
                Join
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      {/* Bottom Section */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        spacing={2}
      >
        <Typography variant="body2" color="text.secondary">
          © {currentYear} FoodApp. All rights reserved.
        </Typography>

        <Stack direction="row" spacing={3} flexWrap="wrap">
          <MuiLink
            component={RouterLink}
            to="/privacy"
            color="text.secondary"
            underline="hover"
            variant="body2"
          >
            Privacy Policy
          </MuiLink>

          <MuiLink
            component={RouterLink}
            to="/terms"
            color="text.secondary"
            underline="hover"
            variant="body2"
          >
            Terms of Service
          </MuiLink>

          <MuiLink
            component={RouterLink}
            to="/cookies"
            color="text.secondary"
            underline="hover"
            variant="body2"
          >
            Cookie Settings
          </MuiLink>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Footer;
