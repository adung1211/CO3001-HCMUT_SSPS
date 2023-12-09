import React from "react";
import MenuBar from "../components/MenuBar";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Buy() {
  const navigate = useNavigate();
  
  const onGroupContainer1Click = useCallback(() => {
    navigate("/inputnum");
  }, [navigate]);

  return (
    <div>
      <MenuBar/>
      <Box
        display="flex"
        flexDirection={"column"}
        justifyContent="flex-start"
        alignItems="stretch"
        minHeight="98vh"
        sx={{
          bgcolor: "#F4F8FF",
          padding: 5
        }}
      >
        <Box
        display="flex"
        flexDirection={"column"}
        justifyContent="flex-start"
        alignItems="stretch"
        sx={{
          marginLeft: 10, // Đặt lề trái cho box con
          marginRight: 10, // Đặt lề phải cho box con
          bgcolor: "#F4F8FF"
        }}
        >
          <Button
            onClick = {onGroupContainer1Click}
            sx={{
              mt: 10,
              bgcolor: "#FFFFFF",
              borderRadius: 5,
              color: "#1488DB",
              border: '1px solid #1488DB',
              fontSize: "36px",
              textTransform: "none",
              fontWeight: "bold"
            }}
          >
            Mua thêm giấy in
          </Button>
          <Button
            sx={{
              mt: 10,
              bgcolor: "#FFFFFF",
              borderRadius: 5,
              color: "#1488DB",
              border: '1px solid #1488DB',
              fontSize: "36px",
              textTransform: "none",
              fontWeight: "bold"
            }}
          >
            Số trang giấy hiện tại
          </Button>
          <Button
            sx={{
              mt: 10,
              bgcolor: "#FFFFFF",
              borderRadius: 5,
              color: "#1488DB",
              border: '1px solid #1488DB',
              fontSize: "36px",
              textTransform: "none",
              fontWeight: "bold"
            }}
          >
            Lịch sử giao dịch
          </Button>
        </Box>
      </Box>
    </div>
  )

}
