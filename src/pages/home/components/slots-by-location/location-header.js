import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";


const StyledLocationHeader = styled(Box)`
  background-color: ${(props) => props.theme.palette.purpleLight.main};
`;
const LocationHeader = ({ title }) => {
  return <StyledLocationHeader pl={2}>
    <Typography
      variant="caption"
      color="white"
      fontWeight="bold">
      {title}
    </Typography>
  </StyledLocationHeader>;
};

export default LocationHeader;
