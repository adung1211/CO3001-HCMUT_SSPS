import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../components/UserContext";
import { useContext } from "react";

export default function Login() {
  const navigate = useNavigate();
  const { logAsStudent, logAsSPSO } = useContext(UserContext);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="98vh"
      sx={{
        bgcolor: "#DBE0E8",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        flexDirection={"column"}
        sx={{
          width: 650,
          height: 650,
          borderRadius: 10,
          bgcolor: "#ffff",
        }}
      >
        <img
          alt="ko bit"
          src="https://i.imgur.com/GTk18ce.png"
          style={{ height: "150px", paddingTop: "20px" }}
        />
        <img
          alt="ko bit"
          src="https://i.imgur.com/QVHXxp4.png"
          style={{ width: "60vh", paddingTop: "40px" }}
        />
        <Typography
          sx={{
            color: "#1B3764",
            fontSize: 38,
            paddingTop: 3,
            fontWeight: "bold",
          }}
        >
          Đăng nhập
        </Typography>

        <Button
          sx={{
            mt: 5,
            bgcolor: "#FFD978",
            borderRadius: 10,
            color: "primary",
            fontSize: "18px",
            textTransform: "none",
          }}
          onClick={() => {
            logAsStudent();
            navigate("/home");
          }}
        >
          Đăng nhập dành cho sinh viên
        </Button>
        <Button
          sx={{
            mt: 5,
            bgcolor: "#FFD978",
            borderRadius: 10,
            color: "primary",
            fontSize: "18px",
            textTransform: "none",
          }}
          onClick={() => {
            logAsSPSO();
            navigate("/home");
          }}
        >
          Đăng nhập dành cho giáo viên
        </Button>
      </Box>
    </Box>
  );
}
