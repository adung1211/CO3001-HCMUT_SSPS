import React, { useRef, useState } from 'react';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MenuBar from "../components/MenuBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from "@mui/material/Button";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});


export default function Properties() {
    const location = useLocation();
    const selectedFileName = location.state?.selectedFileName;
    const navigate = useNavigate();
    function changeContent(newContent) {
        console.log(newContent);
        document.getElementById('selectedSize').innerText = newContent;
    }
    const handleContinue = () => {
        navigate("/");
      };
    const handleCancel = () => {
    navigate("/Print");
    };
    return (
    <div>
        <MenuBar/>
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#f3f3f3',
            border: '1px solid #666161',
            borderRadius: '11px',
            padding: '10px',
            marginLeft: 3,
            height: 857,
            width: 1181,
        }}
        >
            <img
            className="document"
            alt="Document"
            src="https://i.imgur.com/Gjst5w3.png"
            style={{ width: '100px', height: '100px' }}
            />
            <Typography
                sx={{
                    color: '#000000',
                    fontFamily: 'Be Vietnam Pro-Regular, Helvetica',
                    fontSize: '16px',
                    fontWeight: '400',
                    marginBottom: '5px',
                }}
            >
                {selectedFileName}
            </Typography>
      
        </Box>
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{
            height: 880,
            width: 583,
            borderStyle: 'solid',
            position: 'absolute',
            top: 70,
            left: 1260,
            bgcolor: '#BCBCBC',
            }}
        >
            <Typography 
                sx={{
                    color: '#000000',
                    fontFamily: 'Inter-Regular, Helvetica',
                    fontSize: 26,
                    fontWeight: 460,
                    top: '10%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    letterSpacing: 0,
                    lineHeight: 'normal',
                    width: 'fit-content',
                    position: 'absolute',
                  }}> 
                {selectedFileName} 
            </Typography>
            <Box sx={{ minWidth: 200 }}>
                <FormControl fullWidth>
                <Typography style={{ color: '#000000' }}>Cỡ giấy</Typography>
                    <NativeSelect
                    defaultValue={20}
                    >
                    <option value={10}>A3</option>
                    <option value={20}>A4</option>
                    <option value={30}>A5</option>
                    </NativeSelect>
                </FormControl>
            </Box>
            <Box>
            <FormControlLabel
                control={<Checkbox id="doubleSidedPrinting" />}
                label={<Typography style={{ color: '#000000' }}>In 2 mặt</Typography>}
                sx={{ width: '200px', marginTop: 5}}
            />
        </Box>
            <TextField
                label={<Typography style={{ color: '#000000' }}>Số bản sao</Typography>}
                type="number"
                inputProps={{ min: 1}}
                defaultValue="1"
                sx={{ width: '200px', marginTop: 5}}
            />
            <TextField
                label={<Typography style={{ color: '#000000' }}>Số trang trên mặt</Typography>}
                type="number"
                inputProps={{ min: 1, max: 8 }}
                defaultValue="1"
                sx={{ width: '200px', marginTop: 5}}
            />
            <Button
            variant="contained"
            className="continue-button"
            onClick={handleContinue}
            color="info" 
            sx={{width: '150px', height: '50px', marginTop: 5}}
            >
            Xác nhận
            </Button>
            <Button
            variant="contained"
            className="cancel-button"
            onClick={handleCancel}
            color="error"
            sx={{ width: '150px', height: '50px', marginTop: 2}}
            >
            Hủy
            </Button>
        </Box>
    </div>
  );
}
