import React from "react";
import MenuBar from "../components/MenuBar";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  Grid,
} from "@mui/material";
import { Search, FilterList, Add, Remove, CheckCircle, HighlightOff } from "@mui/icons-material";

const printers = [
  { id: 1, brand: "Printer A", location: "Room 101", status: "Online" },
  { id: 2, brand: "Printer B", location: "Room 102", status: "Offline" },
  { id: 3, brand: "Printer C", location: "Room 103", status: "Online" },
  { id: 1, brand: "Printer A", location: "Room 101", status: "Online" },
  { id: 2, brand: "Printer B", location: "Room 102", status: "Offline" },
  { id: 3, brand: "Printer C", location: "Room 103", status: "Online" },
  { id: 1, brand: "Printer A", location: "Room 101", status: "Online" },
  { id: 2, brand: "Printer B", location: "Room 102", status: "Offline" },
  { id: 3, brand: "Printer C", location: "Room 103", status: "Online" },
  // ...Thêm thông tin của các máy in khác
];

const sharedButtonStyle = {
  backgroundColor: 'your-custom-color',
  boxShadow: 1,
  borderRadius: "5px",
  paddingTop: "2px",
  paddingBottom: "2px",
  marginRight: "10px",
  fontSize: "12px"
  // Thêm các thuộc tính khác theo nhu cầu của bạn
};

const statusButtonStyle = {
  width: "20px",
  padding: "0px",// Định dạng nút thành hình tròn// Loại bỏ padding để nút trở thành hình tròn chính xác
  position: "absolute", // Đặt vị trí tuyệt đối
  top: "10px", // Đặt vị trí ở góc trên
  right: "5px", // Đặt vị trí ở góc phải
  fontSize: "12px"
  // Thêm các thuộc tính khác theo nhu cầu của bạn
};

export default function Printers() {
  return (
    <div>
      <MenuBar />
      <Box sx={{ padding: 5 }}>
        <Typography
          sx={{
            color: "#1B3764",
            fontSize: "24px",
            fontWeight: "400"
          }}
        >Quản lý máy in</Typography>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Box>
            <Button startIcon={<FilterList />} variant="contained" sx={{ ...sharedButtonStyle, backgroundColor: '#FFFFFF', color: 'black' }}>
              Filter
            </Button>

            <Button startIcon={<Add />} variant="contained" color="success" sx={sharedButtonStyle}>
              Add
            </Button>

            <Button startIcon={<Remove />} variant="contained" color="error" sx={sharedButtonStyle}>
              Remove
            </Button>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Search />
            <TextField startIcon={<Search />} id="outlined-basic" label="Search" variant="outlined" size="small" sx={{ marginLeft: 'auto' }} />
          </Box>

        </Box>

        <Box
          sx={{
            maxHeight: "450px",
            overflowY: "auto",
            marginTop: "15px",
            border: "1px solid rgba(0, 0, 0, 0.25)",
            borderRadius: "10px",
            padding: "20px"
          }}
        >
          <Grid container spacing={2}>
            {printers.map((printer) => (
              <Grid item key={printer.id} xs={12} md={4} lg={3} sm={6}  >
                <Card sx={{ width: "100%", position: "relative" }}>
                  <Grid container>
                    <Grid item md={4}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                        }}
                      >
                        <img
                          src="https://cdn.iconscout.com/icon/free/png-256/free-photocopier-machine-1125087.png"
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={8}>
                      <CardContent>
                        <Typography variant="h6">{printer.brand}</Typography>
                        <Typography color="text.secondary">ID: {printer.id}</Typography>
                        <Typography color="text.secondary">
                          Location: {printer.location}
                        </Typography>
                        <Typography color="text.secondary">Status: {printer.status}</Typography>
                      </CardContent>
                    </Grid>
                  </Grid>
                  <Button
                    startIcon={printer.status === "Online" ? <CheckCircle /> : <HighlightOff />}
                    color={printer.status === "Online" ? "success" : "error"}
                    sx={statusButtonStyle}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
