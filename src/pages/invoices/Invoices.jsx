import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import Header from "../../components/Header";

const Invoices = () => {
  const rows = [
    {
      id: 1,
      registerId: "C001",
      name: "John Doe",
      age: 30,
      phone: "(123) 456-7890",
      email: "jonedoe@gmail.com",
      address: "123 Main St",
      city: "New York",
      zipCode: "10001",
    },
    {
      id: 2,
      registerId: "C002",
      name: "Jane Smith",
      age: 25,
      phone: "(987) 654-3210",
      email: "janesmith@gmail.com",
      address: "456 Elm St",
      city: "Los Angeles",
      zipCode: "90001",
    },
    {
      id: 3,
      registerId: "C003",
      name: "Michael Johnson",
      age: 35,
      phone: "(555) 123-4567",
      email: "michealjohnson@gmail.com",
      address: "789 Oak St",
      city: "Chicago",
      zipCode: "60601",
    },
    {
      id: 4,
      registerId: "C004",
      name: "Emily Davis",
      age: 28,
      phone: "(444) 987-6543",
      email: "emilydavis@gmail.com",
      address: "321 Pine St",
      city: "Houston",
      zipCode: "77001",
    },
    {
      id: 5,
      registerId: "C005",
      name: "David Wilson",
      age: 40,
      phone: "(333) 222-1111",
      email: "davidwilson@gmail.com",
      address: "654 Cedar St",
      city: "Phoenix",
      zipCode: "85001",
    },
    {
      id: 6,
      registerId: "C006",
      name: "Sophia Martinez",
      age: 32,
      phone: "(222) 333-4444",
      email: "sophiamartinez@gmail.com",
      address: "987 Birch St",
      city: "Philadelphia",
      zipCode: "19019",
    },
    {
      id: 7,
      registerId: "C007",
      name: "James Anderson",
      age: 29,
      phone: "(111) 555-6666",
      email: "jamesanderson@gmail.com",
      address: "159 Spruce St",
      city: "San Antonio",
      zipCode: "78201",
    },
    {
      id: 8,
      registerId: "C008",
      name: "Olivia Taylor",
      age: 27,
      phone: "(666) 777-8888",
      email: "oliviataylor@gmail.com",
      address: "753 Willow St",
      city: "San Diego",
      zipCode: "92101",
    },
    {
      id: 9,
      registerId: "C009",
      name: "Daniel Thomas",
      age: 38,
      phone: "(777) 888-9999",
      email: "danielthomas@gmail.com",
      address: "852 Maple St",
      city: "Dallas",
      zipCode: "75201",
    },
    {
      id: 10,
      registerId: "C010",
      name: "Ava Jackson",
      age: 26,
      phone: "(888) 999-0000",
      email: "avajackson@gmail.com",
      address: "951 Chestnut St",
      city: "San Jose",
      zipCode: "95101",
    },
  ];
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "registerId",
      headerName: "RegisterId",
      width: 100,
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
      field: "age",
      headerName: "Age",
      width: 50,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "phone",
      headerName: "Phone",
      width: 200,
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

    {
      field: "address",
      headerName: "Address",
      width: 150,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "city",
      headerName: "City",
      width: 100,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "zipCode",
      headerName: "ZipCode",
      width: 100,
      align: "center",
      headerAlign: "center",
    },
  ];
  return (
    <>
      <Header title="Invoices" subtitle="List of invoices Balances" />

      <Box height={470} width="100%">
        <DataGrid
          checkboxSelection
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </>
  );
};

export default Invoices;
