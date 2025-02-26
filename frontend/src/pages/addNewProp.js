import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

// import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
// import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import { unstable_composeClasses } from "@mui/material";

// const useStyles = makeStyles({
//   field: {
//     marginTop: 20,
//     marginBottom: 20,
//     display: "block",
//   },
// });

const AddNewProp = () => {
  // const classes = useStyles();
  const [newProp, setNewProp] = useState({
    state: "",
    city: "",
    street: "",
    apartmentNum: "",
    size: "",
    rent: "",
    occupied: "",
    tenantName: "",
    occupiedDate: Date,
    numOccupants: "",
    pets: "",
    latePayment: "",
    tenantRequests: "",
    tenantNotes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/citrus", newProp).then(() => {
      window.location.reload(false);
    });
  };

  return (
    <Container size="sm">
      <Typography variant="h3" color="textPrimary" component="h3" gutterBottom>
        Add a New Property
      </Typography>
      <h5>* = Required Field</h5>
      <Box>
        <TextField
          onChange={(e) => {
            setNewProp({ ...newProp, state: e.target.value });
          }}
          label="State"
          variant="outlined"
          color="primary"
          margin="dense"
          fullWidth
          required
        />
        <TextField
          onChange={(e) => {
            setNewProp({ ...newProp, city: e.target.value });
          }}
          label="City"
          variant="outlined"
          color="primary"
          margin="dense"
          fullWidth
          required
        />
        <TextField
          onChange={(e) => {
            setNewProp({ ...newProp, street: e.target.value });
          }}
          label="Street Address"
          variant="outlined"
          color="primary"
          margin="dense"
          fullWidth
          required
        />
        <TextField
          onChange={(e) => {
            setNewProp({ ...newProp, apartmentNum: e.target.value });
          }}
          label="Apartment #"
          variant="outlined"
          color="primary"
          margin="dense"
          fullWidth
        />
        <TextField
          onChange={(e) => {
            setNewProp({ ...newProp, size: e.target.value });
          }}
          label="Property Size (sq ft)"
          variant="outlined"
          color="primary"
          margin="dense"
          fullWidth
          required
        />
        <TextField
          onChange={(e) => {
            setNewProp({ ...newProp, rent: e.target.value });
          }}
          label="Rent Amount ($)"
          variant="outlined"
          color="primary"
          margin="dense"
          fullWidth
          required
        />
        <FormControl sx={{ minWidth: "100%" }}>
          <InputLabel id="demo-simple-select-label">Occupied *</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={newProp.occupied}
            label="Occupied"
            onChange={(e) => {
              setNewProp({ ...newProp, occupied: e.target.value });
              console.log(e.target.value);
            }}
          >
            <MenuItem value={""}>=</MenuItem>
            <MenuItem value={true}>Yes</MenuItem>
            <MenuItem value={false}>No</MenuItem>
          </Select>
        </FormControl>
        <TextField
          onChange={(e) => {
            setNewProp({ ...newProp, tenantName: e.target.value });
          }}
          label="Tenant Name"
          variant="outlined"
          color="primary"
          margin="dense"
          fullWidth
        />
        <TextField
          onChange={(e) => {
            setNewProp({ ...newProp, occupiedDate: e.target.value });
          }}
          label="Occupied Since"
          variant="outlined"
          color="primary"
          margin="dense"
          fullWidth
        />

        <TextField
          onChange={(e) => {
            setNewProp({ ...newProp, numOccupants: e.target.value });
          }}
          label="Number of Occupants"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          variant="outlined"
          color="primary"
          margin="dense"
          fullWidth
        />

        <FormControl sx={{ minWidth: "100%" }}>
          <InputLabel id="demo-simple-select-label">Pets</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={newProp.pets}
            label="Pets"
            onChange={(e) => {
              setNewProp({ ...newProp, pets: e.target.value });
            }}
          >
            <MenuItem value={""}>=</MenuItem>
            <MenuItem value={"true"}>Yes</MenuItem>
            <MenuItem value={"false"}>No</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: "100%" }}>
          <InputLabel id="demo-simple-select-label">Late Payment</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={newProp.latePayment}
            label="Late Payment"
            onChange={(e) => {
              setNewProp({ ...newProp, latePayment: e.target.value });
            }}
          >
            <MenuItem value={""}>=</MenuItem>
            <MenuItem value={"true"}>Yes</MenuItem>
            <MenuItem value={"false"}>No</MenuItem>
          </Select>
        </FormControl>

        <TextField
          onChange={(e) => {
            setNewProp({ ...newProp, tenantRequests: e.target.value });
          }}
          label="Tenant Requests"
          variant="outlined"
          color="primary"
          margin="dense"
          fullWidth
        />
        <TextField
          onChange={(e) => {
            setNewProp({ ...newProp, tenantNotes: e.target.value });
          }}
          label="Tenant Notes"
          variant="outlined"
          color="primary"
          margin="dense"
          fullWidth
        />

        <Button id="NewPropButton" onClick={handleSubmit} color="primary" margin="normal" variant="contained" textalign="center" endIcon={<KeyboardArrowRightIcon />}>
          Submit New Property
        </Button>
      </Box>
    </Container>
  );
};

export default AddNewProp;
