import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ value, onChange }) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search for food..."
      value={value}
      onChange={onChange}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }
      }}
    />
  );
}

export default SearchBar;
