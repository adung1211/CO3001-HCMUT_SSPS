import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField , Box, Grid, InputLabel, MenuItem, FormControl, Select, Typography} from "@mui/material";

const UpdateDialog = ({ printer, isOpen, handleClose }) => {
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
              defaultValue={printer.brand}
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
            <Typography sx={{color: "#666",  fontSize: "16px", fontWeight: "600"}}>Hãng</Typography>
            <TextField
              sx={{marginBottom: "15px"}}
              id="outlined-helperText"
              fullWidth
              defaultValue={printer.brand}
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
            <Typography sx={{color: "#666",  fontSize: "16px", fontWeight: "600"}}>Mẫu máy in</Typography>
            <TextField
              sx={{marginBottom: "20px"}}
              id="outlined-helperText"
              fullWidth
              defaultValue={printer.type}
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
                    
                    defaultValue={1}
              MenuItem={{
                sx: {
                  fontSize: '14px', // Set your desired font size
                  // You can add more styling properties here as needed
                },}}
                  >
                    <MenuItem value={1}>Cơ sở Lý Thường Kiệt</MenuItem>
                    <MenuItem value={2}>Cơ sở Dĩ An</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={3}>
            <Box>
            <Typography sx={{color: "#666",  fontSize: "16px", fontWeight: "600"}}>Tòa</Typography>
            <TextField
              sx={{marginBottom: "15px"}}
              id="outlined-helperText"
              fullWidth
              defaultValue={printer.building}
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
            <Typography sx={{color: "#666",  fontSize: "16px", fontWeight: "600"}}>Phòng</Typography>
            <TextField
              sx={{marginBottom: "15px"}}
              id="outlined-helperText"
              fullWidth
              defaultValue={printer.room}
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
        <Button onClick={handleClose} color="primary" variant="contained">
          Thêm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateDialog;
