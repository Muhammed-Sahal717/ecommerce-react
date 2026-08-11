import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const priceOptions = [
  { value: 'all', label: 'All Prices' },
  { value: 'under500', label: 'Under ₹500' },
  { value: '500to999', label: '₹500 - ₹999' },
  { value: '1000to1499', label: '₹1,000 - ₹1,499' },
  { value: '1500plus', label: '₹1,500+' },
];

function PriceFilter({ value, onChange }) {
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel id="price-filter-label">Price</InputLabel>
      <Select
        labelId="price-filter-label"
        id="price-filter"
        value={value}
        onChange={onChange}
        label="Price"
      >
        {priceOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default PriceFilter;
