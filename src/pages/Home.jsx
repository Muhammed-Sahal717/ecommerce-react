import { useNavigate } from 'react-router-dom';
import { Container, Grid, Typography, Box, Button, Stack } from '@mui/material';
import heroImage from '../assets/hero.png';

function Home() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: 'background.default', pt: { xs: 6, md: 10 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          
          {/* Left Side: Text Content */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Stack spacing={3} alignItems={{ xs: 'center', md: 'flex-start' }}>
              <Typography 
                variant="overline" 
                color="primary" 
                sx={{ fontWeight: 'bold', letterSpacing: 2 }}
              >
                FRESH FOOD, DELIVERED
              </Typography>
              
              <Typography 
                variant="h3" 
                component="h1" 
                sx={{ fontWeight: 800, lineHeight: 1.2, color: 'text.primary' }}
              >
                Delicious Food, Delivered Fresh
              </Typography>
              
              <Typography 
                variant="h6" 
                color="text.secondary" 
                sx={{ fontWeight: 400, maxWidth: { xs: '100%', md: '90%' } }}
              >
                Explore a variety of delicious burgers, pizzas, pasta, sushi, and tacos — all in one place.
              </Typography>
              
              <Button 
                variant="contained" 
                size="large" 
                disableElevation
                onClick={() => navigate('/products')}
                sx={{ py: 1.5, px: 4, mt: 2, fontSize: '1.1rem', borderRadius: 2 }}
              >
                Explore Menu
              </Button>
            </Stack>
          </Grid>
          
          {/* Right Side: Hero Image */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              component="img"
              src={heroImage}
              alt="Delicious food platter"
              sx={{
                width: '100%',
                maxWidth: 600,
                height: 'auto',
                objectFit: 'contain',
                // Keep the image from overflowing
              }}
            />
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
