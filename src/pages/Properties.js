import React from "react";
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
import { usePrintContext } from "../components/PrintContext";

export default function Properties() {
  const { printingInfo, updatePrintingInfo } = usePrintContext();

  const handleChange = (event) => {
    const orientationValue = event.target.value;
    updatePrintingInfo({ orientation: orientationValue });
  };
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate("/chooseprinter");
  };
  const handleCancel = () => {
    navigate("/Print");
  };
  const handlePaperSizeChange = (event) => {
    updatePrintingInfo({ paperSize: event.target.value });
  };

  const handleDoubleSidedPrintingChange = (event) => {
    updatePrintingInfo({ doubleSided: event.target.checked });
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
            {printingInfo.fileName}
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
            {printingInfo.fileName}
          </Typography>
          <Box sx={{ minWidth: 200, marginTop: 4 }}>
            <FormControl fullWidth>
              <Typography style={{ color: "#000000" }}>Cỡ giấy</Typography>
              <NativeSelect
                defaultValue={"A4"}
                onChange={handlePaperSizeChange}
                value={printingInfo.paperSize || "A4"}
              >
                <option value={"A3"}>A3</option>
                <option value={"A4"}>A4</option>
                <option value={"A5"}>A5</option>
              </NativeSelect>
            </FormControl>
          </Box>
          <Box>
          <FormControlLabel
            control={<Checkbox id="doubleSidedPrinting" />}
            label={<Typography style={{ color: "#000000" }}>In 2 mặt</Typography>}
            checked={printingInfo.doubleSided}
            onChange={handleDoubleSidedPrintingChange}
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
              value={printingInfo.orientation}
              onChange={handleChange}
            >
              <FormControlLabel
                value="In dọc"
                control={<Radio />}
                label="In dọc"
              />
              <FormControlLabel
                value="In ngang"
                control={<Radio />}
                label="In ngang"
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
