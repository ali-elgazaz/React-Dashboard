import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../../pages/pieChart/Pie";
import Bar from "../../pages/barChart/Bar";
import Geog from "../../pages/geography/Geog";

const Row3 = () => {
  const Theme = useTheme();
  return (
    <Stack direction="row" flexWrap={"wrap"} gap={2} my={3}>
      <Paper sx={{ width: "30%", minWidth: "400px", flexGrow: 1 }}>
        <Typography
          variant="h6"
          fontWeight={600}
          color={Theme.palette.secondary.main}
          align="center"
          sx={{ padding: "10px 30px 0px 30px" }}
        >
          Campaign
        </Typography>

        <Pie isDashboard />

        <Typography variant="h6" fontWeight={600} align="center">
          $48,352 revenue generated
        </Typography>
        <Typography variant="h6" fontWeight={600} align="center" sx={{ mb: 2 }}>
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>

      <Paper sx={{ width: "33%", minWidth: "400px", flexGrow: 1 }}>
        <Typography
          variant="h6"
          fontWeight={600}
          color={Theme.palette.secondary.main}
          align="center"
          sx={{ padding: "10px 30px 0px 30px" }}
        >
          Sales Quantity
          <Bar isDashboard />
        </Typography>
      </Paper>

      <Paper sx={{ width: "33%", minWidth: "400px", flexGrow: 1 }}>
        <Typography
          variant="h6"
          fontWeight={600}
          color={Theme.palette.secondary.main}
          align="center"
          sx={{ padding: "10px 30px 0px 30px" }}
        >
          Geography Based Traffic
          <Geog isDashboard />
        </Typography>
      </Paper>
    </Stack>
  );
};

export default Row3;
