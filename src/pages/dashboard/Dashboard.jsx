import { Box, Button } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { DownloadOutlined } from "@mui/icons-material";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <div>
      <Header title="Dashboard" subtitle="Welcome to your dashboard" />
      <Box sx={{ textAlign: "right" }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ padding: "6px 8px", textTransform: "capitalize" }}
        >
          <DownloadOutlined />
          Download Reports
        </Button>
      </Box>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
};

export default Dashboard;
