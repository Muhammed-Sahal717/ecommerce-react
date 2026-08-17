import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

function CategoryCard({ category, image, onClick }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        mx: "auto",
        borderRadius: 3,
        boxShadow: 2,
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardActionArea onClick={() => onClick(category)}>
        <CardMedia
          component="img"
          height="160"
          image={image}
          alt={category}
          sx={{ objectFit: "cover" }}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            {category}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CategoryCard;
