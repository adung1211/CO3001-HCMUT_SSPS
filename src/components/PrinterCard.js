// PrinterCard.js
import React from "react";
import {Box } from "@mui/material";
import { Card, CardContent, Button, Typography, Grid, CardActionArea } from "@mui/material";


import { CheckCircle, HighlightOff } from "@mui/icons-material";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
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
  

const PrinterCard = ({ printer, onSelect, onRemove, isRemoveButtonPressed }) => {
    
  return (
    <Card onClick={() => onSelect(printer)} sx={{ width: "100%", position: "relative" }}>
      <CardActionArea>
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
              <Typography color="text.secondary">Location: {printer.location}</Typography>
              <Typography color="text.secondary">Status: {printer.status}</Typography>
            </CardContent>
            {isRemoveButtonPressed ? (
              <Button color="error" variant="contained" onClick={() => onRemove(printer)}>
                Remove
              </Button>
            ) : (
              <Button color="warning" variant="contained" onClick={() => onSelect(printer)}>
                Select
              </Button>
            )}
          </Grid>
        </Grid>
        <Button
          startIcon={printer.status === "Online" ? <CheckCircle /> : <HighlightOff />}
          color={printer.status === "Online" ? "success" : "error"}
          sx={statusButtonStyle}
        />
      </CardActionArea>
    </Card>
  );
};

export default PrinterCard;
