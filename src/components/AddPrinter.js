import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box, Grid, InputLabel, MenuItem, FormControl, Select, Typography } from "@mui/material";

const AddPrinterDialog = ({ isOpen, handleClose, handleAddPrinter }) => {
  const [newPrinter, setNewPrinter] = useState({
    id: "",
    name: "",
    brand: "",
    type: "",
    location: "",
    building: "",
    room: "",
    status: "Offline",
  });

  const [selectedLocation, setSelectedLocation] = React.useState('');

  const handleInputChange = (field, value) => {
    setNewPrinter({ ...newPrinter, [field]: value });
  };

  const handleAddClick = () => {
    // Kiểm tra xem có giá trị nào bị bỏ trống không trước khi thêm
    if (
      newPrinter.id &&
      newPrinter.name &&
      newPrinter.brand &&
      newPrinter.type &&
      selectedLocation &&  // Sử dụng giá trị từ trạng thái mới này
      newPrinter.building &&
      newPrinter.room
    ) {
      // Tạo đối tượng mới với giá trị location từ selectedLocation
      const printerToAdd = {
        ...newPrinter,
        location: selectedLocation,
      };
      handleAddPrinter(printerToAdd);
      setNewPrinter({
        id: "",
        name: "",
        brand: "",
        type: "",
        building: "",
        room: "",
        status: "Offline",
      });
      setSelectedLocation(''); 
      handleClose();
    } else {
      // Xử lý thông báo lỗi hoặc hành động khác khi thông tin không đủ
      // Ví dụ:
      alert("Vui lòng điền đầy đủ thông tin trước khi thêm máy in.");
    }
  };

  const handleChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} >
      <DialogTitle sx={{ textAlign: 'center', paddingTop: "60px", fontSize: "20px", fontWeight: "600", color: "#1B3764" }}>THÊM MÁY IN</DialogTitle>
      <DialogContent sx={{ padding: "10px 35px" }}>
        <Box sx={{ padding: "15px" }}>
          <Box>
            <Typography sx={{ color: "#666", fontSize: "16px", fontWeight: "600" }}>ID</Typography>
            <TextField
              sx={{ marginBottom: "15px" }}
              id="outlined-helperText"
              fullWidth
              placeholder="Type here"
              size="small"
              value={newPrinter.id}
              onChange={(e) => handleInputChange("id", e.target.value)}
              InputProps={{
                sx: {
                  fontSize: '14px',
                },
              }}
            />
          </Box>
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
            <Typography sx={{ color: "#666", fontSize: "16px", fontWeight: "600" }}>Hãng</Typography>
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
          <Box>
            <Typography sx={{ color: "#666", fontSize: "16px", fontWeight: "600" }}>Mẫu máy in</Typography>
            <TextField
              sx={{ marginBottom: "20px" }}
              id="outlined-helperText"
              fullWidth
              placeholder="Type here"
              size="small"
              value={newPrinter.type}
              onChange={(e) => handleInputChange("type", e.target.value)}
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
                    <MenuItem value={10}>Cơ sở Lý Thường Kiệt</MenuItem>
                    <MenuItem value={20}>Cơ sở Dĩ An</MenuItem>
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
