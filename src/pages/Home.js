import * as React from "react";
import MenuBar from "../components/MenuBar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function ResponsiveAppBar() {
  return (
    <div>
      <MenuBar />
      <Grid container p={4} spacing={5}>
        <Grid item xs={7}>
          <Typography
            paragraph={true}
            align="justify"
            sx={{
              fontFamily: " Akaya Telivigala",
              color: "#1B3764",
              fontSize: 54,
              paddingLeft: 20,
            }}
          >
            HCMUT <br /> SMART PRINTING
          </Typography>
          <img
            alt="linh tinh"
            src="https://i.imgur.com/oBIHZkc.png"
            style={{
              marginLeft: "200px",
            }}
          />
          <Typography
            paragraph={true}
            align="justify"
            sx={{
              fontFamily: " Be Vietnam Pro",
              color: "#969AA0",
              fontSize: 34,
              paddingLeft: 20,
              paddingTop: 3,
            }}
          >
            Hệ thống in thông minh đặt <br /> tại khuôn viên trường Đại học Bách{" "}
            <br />
            khoa - ĐHQG-HCM.
          </Typography>
          <Typography
            paragraph={true}
            align="justify"
            sx={{
              fontFamily: " Be Vietnam Pro",
              color: "#969AA0",
              fontSize: 24,
              paddingLeft: 20,
            }}
          >
            Mô hình hệ thống in thông minh cung cấp dịch vụ in ấn <br /> phục vụ
            cho sinh viên, cán bộ, giảng viên tại trường.
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <img
            alt="Khung"
            src="https://i.imgur.com/UTt5OAH.png"
            style={{
              width: "500px",
              height: "600px",
              position: "absolute",
              marginTop: "20px",
            }}
          />
          <img
            alt="Anh truong"
            src="https://i.imgur.com/Ma9RIGO.png"
            style={{
              width: "500px",
              height: "600px",
              position: "absolute",
              paddingLeft: "20px",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
export default ResponsiveAppBar;


