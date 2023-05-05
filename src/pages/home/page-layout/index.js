import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import ResponsiveAppBar from "./responsive-app-bar";

const PageLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", minHeight: "100%" }}>
      <CssBaseline />
      <ResponsiveAppBar />
      <Box component="main" bgcolor="primary.main" sx={{ width: "100%" }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
export default PageLayout;
