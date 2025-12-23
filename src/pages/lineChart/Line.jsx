import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "japan",
    data: [
      {
        x: "plane",
        y: 77,
      },
      {
        x: "helicopter",
        y: 225,
      },
      {
        x: "boat",
        y: 108,
      },
      {
        x: "train",
        y: 9,
      },
      {
        x: "subway",
        y: 8,
      },
      {
        x: "bus",
        y: 151,
      },
      {
        x: "car",
        y: 193,
      },
      {
        x: "moto",
        y: 53,
      },
      {
        x: "bicycle",
        y: 146,
      },
      {
        x: "horse",
        y: 159,
      },
      {
        x: "skateboard",
        y: 226,
      },
      {
        x: "others",
        y: 274,
      },
    ],
  },
  {
    id: "france",
    data: [
      {
        x: "plane",
        y: 229,
      },
      {
        x: "helicopter",
        y: 241,
      },
      {
        x: "boat",
        y: 293,
      },
      {
        x: "train",
        y: 225,
      },
      {
        x: "subway",
        y: 133,
      },
      {
        x: "bus",
        y: 144,
      },
      {
        x: "car",
        y: 256,
      },
      {
        x: "moto",
        y: 204,
      },
      {
        x: "bicycle",
        y: 4,
      },
      {
        x: "horse",
        y: 256,
      },
      {
        x: "skateboard",
        y: 141,
      },
      {
        x: "others",
        y: 16,
      },
    ],
  },
  {
    id: "us",
    data: [
      {
        x: "plane",
        y: 246,
      },
      {
        x: "helicopter",
        y: 79,
      },
      {
        x: "boat",
        y: 252,
      },
      {
        x: "train",
        y: 199,
      },
      {
        x: "subway",
        y: 87,
      },
      {
        x: "bus",
        y: 108,
      },
      {
        x: "car",
        y: 238,
      },
      {
        x: "moto",
        y: 284,
      },
      {
        x: "bicycle",
        y: 239,
      },
      {
        x: "horse",
        y: 238,
      },
      {
        x: "skateboard",
        y: 49,
      },
      {
        x: "others",
        y: 40,
      },
    ],
  },
  {
    id: "germany",
    data: [
      {
        x: "plane",
        y: 190,
      },
      {
        x: "helicopter",
        y: 192,
      },
      {
        x: "boat",
        y: 123,
      },
      {
        x: "train",
        y: 260,
      },
      {
        x: "subway",
        y: 229,
      },
      {
        x: "bus",
        y: 243,
      },
      {
        x: "car",
        y: 239,
      },
      {
        x: "moto",
        y: 247,
      },
      {
        x: "bicycle",
        y: 295,
      },
      {
        x: "horse",
        y: 137,
      },
      {
        x: "skateboard",
        y: 134,
      },
      {
        x: "others",
        y: 291,
      },
    ],
  },
  {
    id: "norway",
    data: [
      {
        x: "plane",
        y: 266,
      },
      {
        x: "helicopter",
        y: 252,
      },
      {
        x: "boat",
        y: 86,
      },
      {
        x: "train",
        y: 274,
      },
      {
        x: "subway",
        y: 252,
      },
      {
        x: "bus",
        y: 257,
      },
      {
        x: "car",
        y: 44,
      },
      {
        x: "moto",
        y: 13,
      },
      {
        x: "bicycle",
        y: 201,
      },
      {
        x: "horse",
        y: 13,
      },
      {
        x: "skateboard",
        y: 24,
      },
      {
        x: "others",
        y: 106,
      },
    ],
  },
];

const Line = ({ isDashboard = false }) => {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDashboard ? "280px" : "75vh" }}>
      <ResponsiveLine
        theme={{
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "#ffffff",
          },
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "#ffffff",
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "#ffffff",
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "#ffffff",
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "#ffffff",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "#ffffff",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            // wrapper: {},
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        axisBottom={{
          legend: isDashboard ? null : "transportation",
          legendOffset: 36,
        }}
        axisLeft={{ legend: isDashboard ? null : "count", legendOffset: -45 }}
        colors={{ scheme: "paired" }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "seriesColor" }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 100,
            itemWidth: 80,
            itemHeight: 22,
            symbolShape: "circle",
          },
        ]}
      />
    </Box>
  );
};

export default Line;
