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

export default function Properties() {
  const [value, setValue] = React.useState("In ngang");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const location = useLocation();
  const selectedFileName = location.state?.selectedFileName;
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate("/");
  };
  const handleCancel = () => {
    navigate("/Print");
  };
  return (
    <div>
      <MenuBar />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#f3f3f3",
            border: "1px solid #666161",
            borderRadius: "10px",
            height: 850,
            width: 800,
          }}
        >
          <img
            className="document"
            alt="Document"
            src="https://i.imgur.com/Gjst5w3.png"
            style={{ width: "100px", height: "100px" }}
          />
          <Typography
            sx={{
              color: "#000000",
              fontFamily: "Be Vietnam Pro-Regular, Helvetica",
              fontSize: "16px",
              fontWeight: "400",
              marginBottom: "5px",
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
            height: 850,
            width: 363,
            marginLeft: 2,
            borderRadius: "10px",
            bgcolor: "#BFD6E8",
            border: "1px solid #666161",
          }}
        >
          <Typography
            sx={{
              color: "#000000",
              fontFamily: "Inter-Regular, Helvetica",
              fontSize: 26,
              fontWeight: 460,
              letterSpacing: 0,
              lineHeight: "normal",
              width: "fit-content",
            }}
          >
            {selectedFileName}
          </Typography>
          <Box sx={{ minWidth: 200, marginTop: 4 }}>
            <FormControl fullWidth>
              <Typography style={{ color: "#000000" }}>Cỡ giấy</Typography>
              <NativeSelect defaultValue={20}>
                <option value={10}>A3</option>
                <option value={20}>A4</option>
                <option value={30}>A5</option>
              </NativeSelect>
            </FormControl>
          </Box>
          <Box>
            <FormControlLabel
              control={<Checkbox id="doubleSidedPrinting" />}
              label={
                <Typography style={{ color: "#000000" }}>In 2 mặt</Typography>
              }
              sx={{ width: "200px", marginTop: 3 }}
            />
          </Box>
          <TextField
            label="Trang in"
            helperText="VD: tất cả, chẵn, 1-14"
            sx={{ width: "200px", marginTop: 3 }}
          />
          <TextField
            label={
              <Typography style={{ color: "#000000" }}>Số bản sao</Typography>
            }
            type="number"
            inputProps={{ min: 1 }}
            defaultValue="1"
            sx={{ width: "200px", marginTop: 3 }}
          />
          <TextField
            label={
              <Typography style={{ color: "#000000" }}>
                Số trang trên mặt
              </Typography>
            }
            type="number"
            inputProps={{ min: 1, max: 8 }}
            defaultValue="1"
            sx={{ width: "200px", marginTop: 3 }}
          />
          <FormControl sx={{ width: "200px", marginTop: 3 }}>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Kiểu in
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="In ngang"
                control={<Radio />}
                label="In ngang"
              />
              <FormControlLabel
                value="In dọc"
                control={<Radio />}
                label="In dọc"
              />
            </RadioGroup>
          </FormControl>

          <Button
            variant="contained"
            className="continue-button"
            onClick={handleContinue}
            color="info"
            sx={{ width: "150px", height: "50px", marginTop: 3 }}
          >
            Xác nhận
          </Button>
          <Button
            variant="contained"
            className="cancel-button"
            onClick={handleCancel}
            color="error"
            sx={{ width: "150px", height: "50px", marginTop: 2 }}
          >
            Hủy
          </Button>
        </Box>
      </Box>
    </div>
  );
}
