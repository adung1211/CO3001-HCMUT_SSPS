import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MenuBar from "../components/MenuBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function Bill() {
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const [value, setValue] = React.useState("In dọc");

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const location = useLocation();
    const selectedFileName = location.state?.selectedFileName;
    const navigate = useNavigate();
    const handleContinue = () => {
        navigate("/chooseprinter");
    };
    const handleCancel = () => {
        navigate("/Print");
    };
    const billData = {
        Id: '123456',
        fileName: 'FileName.pdf',
        totalPages: 10,
        printType: 'In hai mặt',
        printDate: '22/10/2023',
      };

    const gridItemStyle = {
    borderBottom: '1px solid #000000', // Màu và định dạng của viền dưới
    padding: '2px',
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
                height: 650,
                width: 700,
                marginTop: 10,
                borderRadius: "10px",
                bgcolor: "#BFD6E8",
                border: "1px solid #666161",
              }}
            >
                <img
                    className="ok"
                    src="https://i.imgur.com/p6aP4zD.png"
                    style={{ width: "100px", height: "100px" }}
                />
                <Typography
                sx={{
                color: "#2cc31e",
                fontFamily: "Be Vietnam Pro-Regular, Helvetica",
                fontSize: "48px",
                fontWeight: "700",
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
                fontWeight: "700",
                marginBottom: "5px",
                }}
                >
                Cảm ơn bạn đã sử dụng dịch vụ, bạn có thể xem lại thông tin in ở dưới đây
                </Typography>
                <img
                    alt="linh tinh"
                    src="https://i.imgur.com/oBIHZkc.png"
                    style= {{ height:2, width :400, marginTop :5}}
                />
                <Typography
                sx={{
                color: "#1b3764",
                fontFamily: "Be Vietnam Pro-Regular, Helvetica",
                fontSize: "24px",
                fontWeight: "700",
                marginBottom: "5px",
                marginTop :3
                }}
                >
                Mã In: {billData.Id}
                </Typography>
                <Grid container spacing={2} sx={{width:500, marginTop:2}}>
                <Grid item xs={6} style={gridItemStyle}>
                    <Typography variant="h6">Tên tệp in:</Typography>
                </Grid>
                <Grid item xs={6} style={gridItemStyle}>
                    <Typography variant="h6" textAlign="right">{billData.fileName}</Typography>
                </Grid>

                <Grid item xs={6} style={gridItemStyle}>
                    <Typography variant="h6">Số trang in:</Typography>
                </Grid>
                <Grid item xs={6} style={gridItemStyle}>
                    <Typography variant="h6" textAlign="right">{billData.totalPages}</Typography>
                </Grid>

                <Grid item xs={6} style={gridItemStyle}>
                    <Typography variant="h6">Kiểu in:</Typography>
                </Grid>
                <Grid item xs={6} style={gridItemStyle}>
                    <Typography variant="h6" textAlign="right">{billData.printType}</Typography>
                </Grid>

                <Grid item xs={6} style={gridItemStyle}>
                    <Typography variant="h6">Ngày in:</Typography>
                </Grid>
                <Grid item xs={6} style={gridItemStyle}>
                    <Typography variant="h6" textAlign="right">{day}/{month}/{year}</Typography>
                </Grid>
                </Grid>
                <Button
                    variant="contained"
                    className="continue-button"
                    color="info"
                    onClick={() =>navigate("/Home")}
                    sx={{ width: "150px", height: "50px", marginTop: 3 }}
                >
                    Về trang chủ
                </Button>
            </Box>
          </Box>
        </div>
      );
}
