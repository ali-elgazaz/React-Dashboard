import { Box, Paper, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Line from "../../pages/lineChart/Line";
import { transactions } from "./data";

const Row2 = () => {
  const Theme = useTheme();
  return (
    <Stack direction={{ xs: "column", md: "row" }} gap={2} mt={3}>
      <Paper
        sx={{
          maxWidth: 900,
          minWidth: 400,
          height: 350,
          width: "100%",
          flexGrow: 1,
        }}
      >
        <Box>
          <Typography
            variant="h6"
            color={Theme.palette.secondary.main}
            fontWeight={"bold"}
            px={1.2}
            pt={1.2}
          >
            Revenue Generated
          </Typography>

          <Typography variant="body1" fontWeight={"bold"} pl={1.2}>
            $59,342.32
          </Typography>
        </Box>

        <Line isDashboard />
      </Paper>

      <Box
        sx={{
          maxHeight: 350,
          overflow: "auto",
          width: { xs: "100%", md: 350 },
          flexGrow: 1,
        }}
      >
        <Paper>
          <Typography
            variant="h6"
            color={Theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
          >
            Recent Transactions
          </Typography>
        </Paper>

        {transactions.map((item) => {
          return (
            <Paper
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                my: 1,
              }}
            >
              <Box p={1.2}>
                <Typography variant="body1" fontWeight={600}>
                  {item.txId}
                </Typography>
                <Typography variant="body1" fontWeight={600}>
                  {item.user}
                </Typography>
              </Box>

              <Box p={1.2}>
                <Typography variant="body1" fontWeight={600}>
                  {item.date}
                </Typography>
              </Box>

              <Box p={1.2}>
                <Typography
                  variant="body1"
                  fontWeight={600}
                  sx={{
                    backgroundColor: "red",
                    padding: "0 5px",
                    borderRadius: "5px",
                  }}
                >
                  ${item.cost}
                </Typography>
              </Box>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
};

export default Row2;
