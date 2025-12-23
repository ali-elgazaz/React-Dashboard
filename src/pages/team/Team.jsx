import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../../components/Header";

const Team = () => {
  const rows = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "Alice Johnson@gmail.com",
      age: 28,
      phone: "(123) 456-7890",
      access: "Admin",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "Bob Smith@gmail.com",
      age: 34,
      phone: "(987) 654-3210",
      access: "Admin",
    },
    {
      id: 3,
      name: "Charlie Brown",
      email: "Charlie Brown@gmail.com",
      age: 25,
      phone: "(555) 123-4567",
      access: "Admin",
    },
    {
      id: 4,
      name: "Diana Prince",
      email: "Diana Prince@gmail.com",
      age: 30,
      phone: "(444) 987-6543",
      access: "Manager",
    },
    {
      id: 5,
      name: "Ethan Hunt",
      email: "Ethan Hunt@gmail.com",
      age: 38,
      phone: "(333) 222-1111",
      access: "Manager",
    },
    {
      id: 6,
      name: "Fiona Gallagher",
      email: "Fiona Gallagher@gmail.com",
      age: 36,
      phone: "(222) 333-4444",
      access: "Manager",
    },
    {
      id: 7,
      name: "George Martin",
      email: "George Martin@gmail.com",
      age: 32,
      phone: "(111) 555-6666",
      access: "user",
    },
    {
      id: 8,
      name: "Hannah Baker",
      email: "Hannah Baker@gmail.com",
      age: 22,
      phone: "(777) 888-9999",
      access: "user",
    },
    {
      id: 9,
      name: "Ian Somerhalder",
      email: "Ian Somerhalder@gmail.com",
      age: 35,
      phone: "(666) 777-8888",
      access: "user",
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      align: "center",
      headerAlign: "center",

      width: 120,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
              color: "white",
              p: "5px",
              borderRadius: "4px",
              width: "99px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlined fontSize="small" />
            )}
            {access === "Manager" && <SecurityOutlined fontSize="small" />}
            {access === "user" && <LockOpenOutlined fontSize="small" />}
            <Typography fontSize={"13px"}>{access}</Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <>
      <Header title="TEAM" subtitle="Managing the Team Members" />

      <Box height={500} width="100%">
        <DataGrid
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </>
  );
};

export default Team;
