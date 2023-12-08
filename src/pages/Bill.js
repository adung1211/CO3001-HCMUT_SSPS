import React from "react";
import { useNavigate } from "react-router-dom";
import MenuBar from "../components/MenuBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { usePrintContext } from "../components/PrintContext";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Bill() {
  const { printingInfo } = usePrintContext();
  const currentDate = new Date();

  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const navigate = useNavigate();
  const gridItemStyle = {
    borderBottom: "1px solid #000000",
    padding: "2px",
  };

  return (
    <div>
      <MenuBar />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            marginTop: 5,
          }}
        >
          <CheckCircleIcon sx={{ color: "#2cc31e", fontSize: 60 }} />
          <Typography
            sx={{
              color: "#2cc31e",
              fontFamily: "Be Vietnam Pro-Regular, Helvetica",
              fontSize: "48px",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            In thành công
          </Typography>
          <Typography
            sx={{
              color: "#1b3764",
              fontFamily: "Be Vietnam Pro-Regular, Helvetica",
              fontSize: "16px",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Cảm ơn bạn đã sử dụng dịch vụ, bạn có thể xem lại thông tin in ở
            dưới đây
          </Typography>
          <img
            alt="linh tinh"
            src="https://i.imgur.com/oBIHZkc.png"
            style={{ height: 2, width: 400, marginTop: 5 }}
          />
          <Typography
            sx={{
              color: "#1b3764",
              fontFamily: "Be Vietnam Pro-Regular, Helvetica",
              fontSize: "24px",
              marginBottom: "5px",
              marginTop: 3,
            }}
          >
            Mã In: {Math.floor(100000 + Math.random() * 900000)}
          </Typography>
          <Grid container spacing={2} sx={{ width: 600, marginTop: 2 }}>
            <Grid item xs={6} style={gridItemStyle}>
              <Typography variant="h6" sx={{ color: "#1b3764" }}>
                Tên tệp in:
              </Typography>
            </Grid>
            <Grid item xs={6} style={gridItemStyle}>
              <Typography
                variant="h6"
                textAlign="right"
                sx={{ color: "#1b3764" }}
              >
                {printingInfo.fileName}
              </Typography>
            </Grid>

            <Grid item xs={6} style={gridItemStyle}>
              <Typography variant="h6" sx={{ color: "#1b3764" }}>
                Kiểu in:
              </Typography>
            </Grid>
            <Grid item xs={6} style={gridItemStyle}>
              <Typography
                variant="h6"
                textAlign="right"
                sx={{ color: "#1b3764" }}
              >{`${printingInfo.orientation} ${
                printingInfo.doubleSided ? "2 mặt" : "1 mặt"
              }`}</Typography>
            </Grid>

            <Grid item xs={6} style={gridItemStyle}>
              <Typography variant="h6" sx={{ color: "#1b3764" }}>
                Ngày in:
              </Typography>
            </Grid>
            <Grid item xs={6} style={gridItemStyle}>
              <Typography
                variant="h6"
                textAlign="right"
                sx={{ color: "#1b3764" }}
              >
                {day}/{month}/{year}
              </Typography>
            </Grid>
            <Grid item xs={6} style={gridItemStyle}>
              <Typography variant="h6" sx={{ color: "#1b3764" }}>
                Loại giấy:
              </Typography>
            </Grid>
            <Grid item xs={6} style={gridItemStyle}>
              <Typography
                variant="h6"
                textAlign="right"
                sx={{ color: "#1b3764" }}
              >
                {printingInfo.paperSize}
              </Typography>
            </Grid>
            <Grid item xs={6} style={gridItemStyle}>
              <Typography variant="h6" sx={{ color: "#1b3764" }}>
                Nơi in:
              </Typography>
            </Grid>
            <Grid item xs={6} style={gridItemStyle}>
              <Typography
                variant="h6"
                textAlign="right"
                sx={{ color: "#1b3764" }}
              >
                {printingInfo.printerLocation}
              </Typography>
            </Grid>
            <Grid item xs={6} style={gridItemStyle}>
              <Typography variant="h6" sx={{ color: "#1b3764" }}>
                ID Máy in:
              </Typography>
            </Grid>
            <Grid item xs={6} style={gridItemStyle}>
              <Typography
                variant="h6"
                textAlign="right"
                sx={{ color: "#1b3764" }}
              >
                {printingInfo.printerId}
              </Typography>
            </Grid>
            <Grid item xs={6} style={gridItemStyle}>
              <Typography variant="h6" sx={{ color: "#1b3764" }}>
                Tên máy in:
              </Typography>
            </Grid>
            <Grid item xs={6} style={gridItemStyle}>
              <Typography
                variant="h6"
                textAlign="right"
                sx={{ color: "#1b3764" }}
              >
                {printingInfo.printerName}
              </Typography>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            className="continue-button"
            color="info"
            onClick={() => navigate("/Home")}
            sx={{ width: "150px", height: "50px", marginTop: 3 }}
          >
            Về trang chủ
          </Button>
        </Box>
      </Box>
    </div>
  );
}
