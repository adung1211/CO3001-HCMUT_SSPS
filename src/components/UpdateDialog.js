import React from "react";
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
  Typography,
} from "@mui/material";
import {
  usePrinterListContext,
  PrinterListProvider,
} from "../components/PrinterListContext";

const UpdateDialog = ({ printer, isOpen, handleClose }) => {
  const { printers, editPrinter } = usePrinterListContext();
  const [location, setlocation] = React.useState("");
  const [updatedPrinter, setUpdatedPrinter] = React.useState({
    name: printer.name,
    brand: printer.brand,
    type: printer.type,
    location: printer.location,
    building: printer.building,
    room: printer.room,
  });

  const handleUpdateChange = (field, value) => {
    setUpdatedPrinter((prevPrinter) => ({ ...prevPrinter, [field]: value }));
  };

  const handleUpdateClick = () => {
    // Kiểm tra thông tin hợp lệ và gọi hàm xử lý cập nhật từ component cha
    if (
      updatedPrinter.name &&
      updatedPrinter.location &&
      updatedPrinter.building &&
      updatedPrinter.room
    ) {
      const updatedPrinterInfo = { ...printer, ...updatedPrinter };
      editPrinter(updatedPrinterInfo);
      handleClose();
    } else {
      alert("Vui lòng điền đầy đủ thông tin trước khi cập nhật.");
    }
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle
        sx={{
          textAlign: "center",
          paddingTop: "60px",
          fontSize: "20px",
          fontWeight: "600",
          color: "#1B3764",
        }}
      >
        CẬP NHẬT THÔNG TIN
      </DialogTitle>
      <DialogContent sx={{ padding: "10px 35px" }}>
        <Box sx={{ padding: "15px" }}>
          <Typography>ID: {printer.id}</Typography>
          <Box>
            <Typography
              sx={{ color: "#666", fontSize: "16px", fontWeight: "600" }}
            >
              Tên máy in
            </Typography>
            <TextField
              sx={{ marginBottom: "15px" }}
              id="outlined-helperText"
              fullWidth
              defaultValue={printer.brand}
              placeholder="Type here"
              size="small"
              onChange={(e) => handleUpdateChange("name", e.target.value)}
              InputProps={{
                sx: {
                  fontSize: "14px", // Set your desired font size
                  // You can add more styling properties here as needed
                },
              }}
            />
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Box>
                <Typography
                  sx={{ color: "#666", fontSize: "16px", fontWeight: "600" }}
                >
                  Cơ sở
                </Typography>
                <FormControl fullWidth>
                  <Select
                    id="demo-simple-select"
                    value={updatedPrinter.location}
                    size="small"
                    onChange={(e) =>
                      handleUpdateChange("location", e.target.value)
                    }
                    defaultValue={1}
                    MenuItem={{
                      sx: {
                        fontSize: "14px", // Set your desired font size
                        // You can add more styling properties here as needed
                      },
                    }}
                  >
                    <MenuItem value={"Lý Thường Kiệt"}>
                      Cơ sở Lý Thường Kiệt
                    </MenuItem>
                    <MenuItem value={"Dĩ An"}>Cơ sở Dĩ An</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <Typography
                  sx={{ color: "#666", fontSize: "16px", fontWeight: "600" }}
                >
                  Tòa
                </Typography>
                <TextField
                  sx={{ marginBottom: "15px" }}
                  id="outlined-helperText"
                  fullWidth
                  defaultValue={printer.building}
                  placeholder="Type here"
                  size="small"
                  onChange={(e) =>
                    handleUpdateChange("building", e.target.value)
                  }
                  InputProps={{
                    sx: {
                      fontSize: "14px", // Set your desired font size
                      // You can add more styling properties here as needed
                    },
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={3}>
              <Box>
                <Typography
                  sx={{ color: "#666", fontSize: "16px", fontWeight: "600" }}
                >
                  Phòng
                </Typography>
                <TextField
                  sx={{ marginBottom: "15px" }}
                  id="outlined-helperText"
                  fullWidth
                  defaultValue={printer.room}
                  placeholder="Type here"
                  size="small"
                  onChange={(e) => handleUpdateChange("room", e.target.value)}
                  InputProps={{
                    sx: {
                      fontSize: "14px", // Set your desired font size
                      // You can add more styling properties here as needed
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
        <Button onClick={handleUpdateClick} color="primary" variant="contained">
          Cập nhật
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateDialog;
