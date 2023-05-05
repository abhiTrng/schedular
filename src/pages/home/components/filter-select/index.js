import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

const FilterSelect = ({ title, value, dataList, onChange }) => {
  return <>
    <Typography fontWeight="bold">{title}</Typography>
    <TextField
      select
      fullWidth
      value={value}
      size="small"
      SelectProps={{ IconComponent: () => null }}
      style={{ color: "white" }}
      variant="standard"
      InputProps={{
        sx: {
          color: "white !important"
        }
      }}
      onChange={onChange}>
      {dataList.map(item => {
        const { id, value, label } = item || {};
        return <MenuItem key={id} value={value}>{label}</MenuItem>;
      })}
    </TextField>
  </>;

};

export default FilterSelect;
