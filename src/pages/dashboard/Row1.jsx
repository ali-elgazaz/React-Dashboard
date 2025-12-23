import { Stack, useTheme } from "@mui/material";
import Card from "./Card";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1 } from "./data";
import { data2 } from "./data";
import { data3 } from "./data";
import { data4 } from "./data";

const Row1 = () => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      gap={"12px"}
      my={2}
      flexWrap={"wrap"}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      <Card
        icon={
          <EmailIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        Title={12.361}
        subtitle={"Email Sent"}
        increase={"+14%"}
        data={data1}
        scheme={"nivo"}
      />
      <Card
        icon={
          <PointOfSaleIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        Title={431.225}
        subtitle={"Sales Obtained"}
        increase={"+21%"}
        data={data2}
        scheme={"category10"}
      />
      <Card
        icon={
          <PersonAddAlt1Icon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        Title={32.441}
        subtitle={"Now Clients"}
        increase={"+5%"}
        data={data3}
        scheme={"accent"}
      />
      <Card
        icon={
          <TrafficIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        Title={"1.325.134"}
        subtitle={"Traffic Received"}
        increase={"+43%"}
        data={data4}
        scheme={"dark2"}
      />
    </Stack>
  );
};

export default Row1;
