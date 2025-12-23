import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        sx={{ color: theme.palette.info.light, fontWeight: "bold" }}
        variant="h5"
      >
        {title}
      </Typography>
      <p>{subtitle}</p>
    </Box>
  );
};

export default Header;
