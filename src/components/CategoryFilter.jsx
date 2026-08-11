import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const categories = ["All", "Burgers", "Pizza", "Pasta", "Sushi", "Tacos"];

function CategoryFilter({ value, onChange }) {
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel id="category-filter-label">Category</InputLabel>
      <Select
        labelId="category-filter-label"
        id="category-filter"
        value={value}
        onChange={onChange}
        label="Category"
      >
        {categories.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CategoryFilter;
