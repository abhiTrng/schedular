import * as React from "react";
import { useMemo } from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import AppBar from "@mui/material/AppBar";
import MuiToolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EmailIcon from "@mui/icons-material/Email";
import { Button, IconButton } from "@mui/material";

const Toolbar = styled(MuiToolbar)`
  border-bottom: 4px solid rgba(0, 0, 0, 0.2);
`;

const ToolbarBody = styled(Box)`
  max-width: 1158px;
  flex-grow: 1;
  margin-left: auto;
  margin-right: auto;
`;

const ResponsiveAppBar = () => {
  const iconStyle = useMemo(() => {
    return { fontSize: 28, color: "white", opacity: 0.5 };
  }, []);
  return (
    <AppBar component="nav" elevation={0}>
      <Toolbar>
        <ToolbarBody px={16}>
          <Box display="flex" alignItems="center" columnGap={20}>
            <Box display="flex" alignItems="center">
              <AccessAlarmIcon fontSize="large" />
              <Typography variant="h6" noWrap ml={2}>
                SBV
              </Typography>
            </Box>
            <IconButton>
              <SignalCellularAltIcon sx={iconStyle} />
            </IconButton>
            <IconButton>
              <CalendarMonthIcon sx={iconStyle} />
            </IconButton>
            <IconButton>
              <EmailIcon sx={iconStyle} />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <Button variant="contained">
              <Typography variant="h6" color="white">
                Log out
              </Typography>
            </Button>
          </Box>
        </ToolbarBody>
      </Toolbar>
    </AppBar>
  );
};

export default ResponsiveAppBar;
