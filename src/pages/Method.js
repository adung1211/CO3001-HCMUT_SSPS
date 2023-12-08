import React from 'react';
import MenuBar from '../components/MenuBar';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function Method() {
  const navigate = useNavigate();
  
  const onClick = useCallback(() => {
    navigate("/paperbill");
  }, [navigate]);

  return (
  <div>
    <MenuBar/>
    <Box
      display="flex"
      flexDirection={"column"}
      minHeight="98vh"
      sx={{
        bgcolor: "#F4F8FF",
        padding: 5
      }}
    >
      <Typography
      sx={{
        color: "#1B3764",
        fontSize: 36,
        fontWeight: "bold",
      }}
      >
        Chọn phương thức thanh toán:
      </Typography>
      <Button
      onClick={onClick}
      sx={{
        mt: 5,
        padding: 2,
        bgcolor: "#A50164",
        borderRadius: 10,
        transition: 'background-color 0.3s ease',
        '&:hover': {
            backgroundColor: '#7a014a',
        },
      }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
                <Box
                display="flex"
                flexDirection={"row"}
                alignItems="center"
                >
                <img
                style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                }}
                src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-MoMo-Square.png"
                />
                <Typography
                sx={{
                    color: "#FFFFFF",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginLeft: 8
                }}
                >
                    Ví Momo
                </Typography>
                </Box>
            </Grid>
            <Grid item>
            <ArrowForwardIosIcon sx={{ color: '#ffffff', marginRight: 3 }} />
            </Grid>
        </Grid>
      </Button>

      <Button
      onClick={onClick}
      sx={{
        mt: 5,
        padding: 2,
        bgcolor: "#118ACB",
        borderRadius: 10,
        transition: 'background-color 0.3s ease',
        '&:hover': {
            backgroundColor: '#1866E1',
        },
      }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
                <Box
                display="flex"
                flexDirection={"row"}
                alignItems="center"
                >
                <img
                style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                }}
                src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-ZaloPay-Square.png"
                />
                <Typography
                sx={{
                    color: "#FFFFFF",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginLeft: 8
                }}
                >
                    Ví ZaloPay
                </Typography>
                </Box>
            </Grid>
            <Grid item>
            <ArrowForwardIosIcon sx={{ color: '#ffffff', marginRight: 3 }} />
            </Grid>
        </Grid>
      </Button>
      <Button
      onClick={onClick}
      sx={{
        mt: 5,
        padding: 2,
        bgcolor: "#1B3764",
        borderRadius: 10,
        transition: 'background-color 0.3s ease',
        '&:hover': {
            backgroundColor: '#132747',
        },
      }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
                <Box
                display="flex"
                flexDirection={"row"}
                alignItems="center"
                >
                <img
                style={{
                    width: "120px",
                    height: "80px",
                    margin: "10px",
                    objectFit: "cover",
                }}
                src="https://mybk.hcmut.edu.vn/my/images/upload/app_bkpay.png"
                />
                <Typography
                sx={{
                    color: "#FFFFFF",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginLeft: 3
                }}
                >
                    BkPay
                </Typography>
                </Box>
            </Grid>
            <Grid item>
            <ArrowForwardIosIcon sx={{ color: '#ffffff', marginRight: 3 }} />
            </Grid>
        </Grid>
      </Button>
    </Box>
  </div>
  )
}