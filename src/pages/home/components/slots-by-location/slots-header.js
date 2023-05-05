import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import AddIcon from "@mui/icons-material/Add";

const StyledSlotsHeader = styled(Box)`
  background-color: ${(props) => props.theme.palette.green.main};
`;
const SlotsHeader = ({ title }) => {
  return <StyledSlotsHeader
    display="flex"
    flexDirection="row"
    alignItems="center"
    justifyContent='space-between'
    pl={2}
  >
    <Typography
      variant="caption"
      color="white"
      fontWeight="bold">
      {title}
    </Typography>
    <AddIcon color="white" sx={{ color: "white" }} />
  </StyledSlotsHeader>;
};

export default SlotsHeader;
