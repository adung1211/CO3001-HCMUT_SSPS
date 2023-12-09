import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField , Box, Grid, InputLabel, MenuItem, FormControl, Select, Typography} from "@mui/material";

const AddPrinterDialog = ({ isOpen, handleClose, handleAddPrinter }) => {
  const [newPrinter, setNewPrinter] = useState({
    id: "",
    brand: "",
    location: "",
    status: "Offline",
  });

  const handleInputChange = (field, value) => {
    setNewPrinter({ ...newPrinter, [field]: value });
  };

  const handleAddClick = () => {
    handleAddPrinter(newPrinter);
    setNewPrinter({
      id: "",
      brand: "",
      location: "",
      status: "Offline",
    });
    handleClose();
  };

  const [location, setlocation] = React.useState('');

  const handleChange = (event) => {
    setlocation(event.target.value);
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} >
      <DialogTitle sx={{ textAlign: 'center' , paddingTop: "60px", fontSize: "20px", fontWeight: "600", color: "#1B3764"}} >THÊM MÁY IN</DialogTitle>
      <DialogContent sx={{ padding: "10px 35px" }}>
        <Box sx={{ padding: "15px" }}>
          <Box>
            <Typography sx={{color: "#666", fontSize: "16px", fontWeight: "600"}}>Tên máy in</Typography>
            <TextField
              sx={{marginBottom: "15px"}}
              id="outlined-helperText"
              fullWidth
              placeholder="Type here"
              size="small"
              InputProps={{
                sx: {
                  fontSize: '14px', // Set your desired font size
                  // You can add more styling properties here as needed
                },}}
            />
          </Box>
          
          <Box>
            <Typography sx={{color: "#666",  fontSize: "16px", fontWeight: "600"}}>Tên máy in</Typography>
            <TextField
              sx={{marginBottom: "15px"}}
              id="outlined-helperText"
              fullWidth
              placeholder="Type here"
              size="small"
              InputProps={{
                sx: {
                  fontSize: '14px', // Set your desired font size
                  // You can add more styling properties here as needed
                },}}
            />
          </Box>

          <Box>
            <Typography sx={{color: "#666",  fontSize: "16px", fontWeight: "600"}}>Tên máy in</Typography>
            <TextField
              sx={{marginBottom: "20px"}}
              id="outlined-helperText"
              fullWidth
               
              placeholder="Type here"
              size="small"
              InputProps={{
                sx: {
                  fontSize: '14px', // Set your desired font size
                  // You can add more styling properties here as needed
                },}}
            />
          </Box>
          
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Box>
              <Typography sx={{color: "#666",  fontSize: "16px", fontWeight: "600"}}>Cơ sở</Typography>
                <FormControl fullWidth>
                  <Select
                    id="demo-simple-select"
                    value={location}
                    onChange={handleChange}
                    size="small"
              MenuItem={{
                sx: {
                  fontSize: '14px', // Set your desired font size
                  // You can add more styling properties here as needed
                },}}
                  >
                    <MenuItem value={10}>Cơ sở Lý Thường Kiệt</MenuItem>
                    <MenuItem value={20}>Cơ sở Dĩ An</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={3}>
            <Box>
            <Typography sx={{color: "#666",  fontSize: "16px", fontWeight: "600"}}>Tên máy in</Typography>
            <TextField
              sx={{marginBottom: "15px"}}
              id="outlined-helperText"
              fullWidth
               
              placeholder="Type here"
              size="small"
              InputProps={{
                sx: {
                  fontSize: '14px', // Set your desired font size
                  // You can add more styling properties here as needed
                },}}
            />
          </Box>
            </Grid>

            <Grid item xs={3}>
            <Box>
            <Typography sx={{color: "#666",  fontSize: "16px", fontWeight: "600"}}>Tên máy in</Typography>
            <TextField
              sx={{marginBottom: "15px"}}
              id="outlined-helperText"
              fullWidth
               
              placeholder="Type here"
              size="small"
              InputProps={{
                sx: {
                  fontSize: '14px', // Set your desired font size
                  // You can add more styling properties here as needed
                },}}
            />
          </Box>
            </Grid>
        </Grid>
        </Box>
        
      </DialogContent>
      <DialogActions sx={{padding: " 20px 50px 65px 50px"}}>
        <Button onClick={handleClose} color="primary" variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleAddClick} color="primary" variant="contained">
          Thêm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddPrinterDialog;
