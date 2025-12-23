import React from "react";
import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manger",
    label: "Manger",
  },
  {
    value: "User",
    label: "User",
  },
];

const rglEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const rglPhoneNumber = /^(010|011|012|015)[0-9]{8}$/;

const Form = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    handleClick();
  };
  return (
    <>
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        noValidate
        autoComplete="off"
      >
        <Stack direction="row" spacing={3}>
          <TextField
            error={Boolean(errors.firstName)}
            helperText={Boolean(errors.firstName) ? "This is required" : ""}
            {...register("firstName", { required: true, maxLength: 15 })}
            sx={{ flex: 1 }}
            label="[First Name]"
            variant="filled"
          />
          <TextField
            error={Boolean(errors.lastName)}
            helperText={Boolean(errors.lastName) ? "This is required" : ""}
            {...register("lastName", { required: true, maxLength: 15 })}
            sx={{ flex: 1 }}
            label="[Last Name]"
            variant="filled"
          />
        </Stack>

        <TextField
          error={Boolean(errors.email)}
          helperText={
            Boolean(errors.email) ? "Please Enter a valid email address" : ""
          }
          {...register("email", { required: true, pattern: rglEmail })}
          label="[Email]"
          variant="filled"
        />
        <TextField
          error={Boolean(errors.phoneNumber)}
          helperText={
            Boolean(errors.phoneNumber)
              ? "Please Enter a valid phoneNumber"
              : ""
          }
          {...register("phoneNumber", {
            required: true,
            pattern: rglPhoneNumber,
          })}
          label="[Contact Number]"
          variant="filled"
        />
        <TextField label="[Address 1]" variant="filled" />
        <TextField label="[Address 2]" variant="filled" />

        <TextField
          id="outlined-select-currency"
          select
          label="Role"
          defaultValue="User"
          variant="filled"
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Box sx={{ textAlign: "right", textTransform: "capitalize" }}>
          <Button variant="contained" type="submit" onClick={handleClick}>
            Create New User
          </Button>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "left" }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
              Account created successfully
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </>
  );
};

export default Form;
