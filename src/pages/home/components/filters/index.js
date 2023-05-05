import { useMemo } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import { lighten } from "@mui/material";
import { format } from "date-fns";
import { LOCATIONS_CONFIG, SUB_DEPARTMENTS_CONFIG } from "../../constants";
import FilterSelect from "../filter-select";

const DateFilter = ({ month }) => {
  return (
    <Box>
      <Typography fontWeight="bold">Month</Typography>
      <Typography>{month}</Typography>
    </Box>
  );
};

const YearFilter = ({ year }) => {
  return (
    <Box>
      <Typography fontWeight="bold">Month</Typography>
      <Typography>{year}</Typography>
    </Box>
  );
};

const LocationsFilter = ({ activeLocation, onChange }) => {
  return (
    <Box>
      <FilterSelect
        title="Locations"
        value={activeLocation}
        onChange={(event) => {
          onChange("activeLocation", event.target.value);
        }}
        dataList={LOCATIONS_CONFIG}
      />
    </Box>
  );
};

const DepartmentsFilter = () => {
  return (
    <Box>
      <Typography fontWeight="bold">Departments</Typography>
      <Typography>All</Typography>
    </Box>
  );
};

const SubDepartmentsFilter = ({ activeSubDepartment, onChange }) => {
  return (
    <Box>
      <FilterSelect
        title="Position"
        value={activeSubDepartment}
        onChange={(event) => {
          onChange("activeSubDepartment", event.target.value);
        }}
        dataList={SUB_DEPARTMENTS_CONFIG}
      />
    </Box>
  );
};

const StyledFilters = styled(Grid)`
  color: white;
  background-color: ${(props) =>
    lighten(props.theme.palette.secondary.main, 0.2)};
`;
const Filters = ({
  activeDate,
  activeLocation,
  activeSubDepartment,
  onChange,
}) => {
  const { month, year } = useMemo(() => {
    const month = format(activeDate, "MMMM");
    const year = format(activeDate, "yyyy");
    return { month, year };
  }, [activeDate]);

  return (
    <StyledFilters p={4}>
      <Grid container spacing={3}>
        <Grid item xs>
          <DateFilter month={month} />
        </Grid>
        <Grid item xs>
          <YearFilter year={year} />
        </Grid>
        <Grid item xs>
          <LocationsFilter
            activeLocation={activeLocation}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs>
          <DepartmentsFilter />
        </Grid>
        <Grid item xs>
          <SubDepartmentsFilter
            activeSubDepartment={activeSubDepartment}
            onChange={onChange}
          />
        </Grid>
      </Grid>
    </StyledFilters>
  );
};

export default Filters;
