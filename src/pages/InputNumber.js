import React, { useState } from "react";
import MenuBar from "../components/MenuBar";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function InputNumber() {
    const [numberValue, setNumberValue] = React.useState('');
    const [price, setPrice] = useState(0);
    const multiplier = 2000;

    const calc = () => {
        setPrice(numberValue * multiplier);
    };

    const handleNumberChange = (event) => {
        const inputValue = event.target.value;
  
        // Chỉ cho phép giữ lại các ký tự số
        const numericValue = inputValue.replace(/[^0-9]/g, '');
        setNumberValue(numericValue);
    };

    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        // Xử lý giá trị số ở đây
        event.preventDefault();
        console.log('Submitted number:', numberValue);
        calc();
    };

    const confirmClick = useCallback(() => {
        navigate("/method");
    }, [navigate]);

  return (
    <div>
        <MenuBar/>
        <Box
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        alignItems="center"
        minHeight="98vh"
        sx={{
          bgcolor: "#F4F8FF",
        }}
        >
            <Box
                display="flex"
                flexDirection={"column"}
                justifyContent="flex-start"
                alignItems="center"
                sx={{
                bgcolor: "#FFFFFF",
                borderRadius: 10,
                border: '1px solid #1488DB',
                width: 650,
                height: 600
                }}
            >
                <Typography
                sx={{
                    color: "#1B3764",
                    fontSize: 36,
                    paddingTop: 5,
                    fontWeight: "bold",
                }}
                >
                Nhập số lượng giấy
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box
                    display="flex"
                    flexDirection={"column"}
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                    mt: 5,
                    bgcolor: "#FFFFFF",
                    }}
                    >
                        <TextField
                        label=""
                        variant="outlined"
                        type="text" // Sử dụng type="text" để hiển thị keyboard số trên điện thoại
                        value={numberValue}
                        onChange={handleNumberChange}
                        sx={{
                        width: 400,
                        '& input': {
                            fontSize: '24px', // Đặt kích thước chữ số trong input
                            padding: '20px', // Đặt lề và độ dày của input
                            textAlign: 'center'
                        },
                        }}  
                        />
                        <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        sx={{
                        mt: 5,
                        fontSize: 16
                        }}
                        >
                        Xác nhận
                        </Button>
                    </Box>
                </form>
                <Box
                display="flex"
                flexDirection={"row"}
                justifyContent="space-between"
                alignItems="center"
                sx={{
                width: 400,
                bgcolor: "#FFFFFF",
                }}
                >
                    <Box
                    display="flex"
                    flexDirection={"column"}
                    justifyContent="center"
                    alignItems="flex-start"
                    sx={{
                    bgcolor: "#FFFFFF",
                    }}
                    >
                    <Typography
                    sx={{
                        color: "#1B3764",
                        fontSize: 28,
                        paddingTop: 5,
                        fontWeight: "bold",
                    }}
                    >
                    Đơn giá:
                    </Typography>
                    <Typography
                    sx={{
                        color: "#1B3764",
                        fontSize: 28,
                        paddingTop: 2,
                        fontWeight: "bold",
                    }}
                    >
                    Tổng:
                    </Typography>
                    </Box>
                    <Box
                    display="flex"
                    flexDirection={"column"}
                    justifyContent="center"
                    alignItems="flex-end"
                    sx={{
                    bgcolor: "#FFFFFF",
                    }}
                    >
                    <Typography
                    sx={{
                        color: "#1B3764",
                        fontSize: 28,
                        paddingTop: 5,
                        fontWeight: "bold",
                    }}
                    >
                    {multiplier}đ
                    </Typography>
                    <Typography
                    sx={{
                        color: "#1B3764",
                        fontSize: 28,
                        paddingTop: 2,
                        fontWeight: "bold",
                    }}
                    >
                    {price}đ
                    </Typography>
                    </Box>
                </Box>
                <Button
                variant="contained"
                color="primary"
                onClick={confirmClick}
                disabled={price===0}
                sx={{
                mt: 5,
                fontSize: 16
                }}
                >
                Tiếp tục
                </Button>
            </Box>
        </Box>
    </div>
    );
}