import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Typography
} from "@mui/material";

const AddPrinterDialog = ({ isOpen, handleClose, handleAddPrinter }) => {
  const [newPrinter, setNewPrinter] = useState({
    name: "",
    brand: "",
    location: "",
    building: "",
    room: "",
    status: "Offline",
  });

  const [selectedLocation, setSelectedLocation] = useState('');

  const handleInputChange = (field, value) => {
    setNewPrinter({ ...newPrinter, [field]: value });
  };

  const handleAddClick = () => {
    if (
      newPrinter.name &&
      newPrinter.brand &&
      selectedLocation &&
      newPrinter.building &&
      newPrinter.room
    ) {
      const printerToAdd = {
        ...newPrinter,
        id: generatePrinterId(),
        location: selectedLocation,
      };

      // Thêm máy in mới vào danh sách trong context và cập nhật localStorage
      handleAddPrinter(printerToAdd);

      // Reset các trường và đóng dialog
      setNewPrinter({
        name: "",
        brand: "",
        building: "",
        room: "",
        status: "Offline",
      });
      setSelectedLocation('');
      handleClose();
    } else {
      alert("Vui lòng điền đầy đủ thông tin trước khi thêm máy in.");
    }
  };

  const handleChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  // Hàm sinh id cho máy in mới
  const generatePrinterId = () => {
    // Lấy danh sách máy in từ localStorage
    const printers = JSON.parse(localStorage.getItem("printers")) || [];
    
    // Nếu danh sách máy in không rỗng, lấy id của máy in cuối cùng và tăng giá trị lên 1
    const newId = printers.length > 0 ? printers[printers.length - 1].id + 1 : 1;
    
    return newId;
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} >
      <DialogTitle sx={{ textAlign: 'center', paddingTop: "60px", fontSize: "20px", fontWeight: "600", color: "#1B3764" }}>THÊM MÁY IN</DialogTitle>
      <DialogContent sx={{ padding: "10px 35px" }}>
        <Box sx={{ padding: "15px" }}>
          <Box>
            <Typography sx={{ color: "#666", fontSize: "16px", fontWeight: "600" }}>Tên máy in</Typography>
            <TextField
              sx={{ marginBottom: "15px" }}
              id="outlined-helperText"
              fullWidth
              placeholder="Type here"
              size="small"
              value={newPrinter.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              InputProps={{
                sx: {
                  fontSize: '14px',
                },
              }}
            />
          </Box>
          <Box>
            <Typography sx={{ color: "#666", fontSize: "16px", fontWeight: "600" }}>Mẫu máy in</Typography>
            <TextField
              sx={{ marginBottom: "15px" }}
              id="outlined-helperText"
              fullWidth
              placeholder="Type here"
              size="small"
              value={newPrinter.brand}
              onChange={(e) => handleInputChange("brand", e.target.value)}
              InputProps={{
                sx: {
                  fontSize: '14px',
                },
              }}
            />
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Box>
                <Typography sx={{ color: "#666", fontSize: "16px", fontWeight: "600" }}>Cơ sở</Typography>
                <FormControl fullWidth>
                  <Select
                    id="demo-simple-select"
                    value={selectedLocation}
                    onChange={handleChange}
                    size="small"
                    sx={{
                      fontSize: '14px',
                    }}
                  >
                    <MenuItem value={1}>Cơ sở Lý Thường Kiệt</MenuItem>
                    <MenuItem value={2}>Cơ sở Dĩ An</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <Typography sx={{ color: "#666", fontSize: "16px", fontWeight: "600" }}>Tòa</Typography>
                <TextField
                  sx={{ marginBottom: "15px" }}
                  id="outlined-helperText"
                  fullWidth
                  placeholder="Type here"
                  size="small"
                  value={newPrinter.building}
                  onChange={(e) => handleInputChange("building", e.target.value)}
                  InputProps={{
                    sx: {
                      fontSize: '14px',
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <Typography sx={{ color: "#666", fontSize: "16px", fontWeight: "600" }}>Phòng</Typography>
                <TextField
                  sx={{ marginBottom: "15px" }}
                  id="outlined-helperText"
                  fullWidth
                  placeholder="Type here"
                  size="small"
                  value={newPrinter.room}
                  onChange={(e) => handleInputChange("room", e.target.value)}
                  InputProps={{
                    sx: {
                      fontSize: '14px',
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions sx={{ padding: " 20px 50px 65px 50px" }}>
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
