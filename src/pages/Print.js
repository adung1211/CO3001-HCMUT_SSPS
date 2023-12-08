import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuBar from "../components/MenuBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { usePrintContext } from "../components/PrintContext";

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

export default function Print() {
  const fileInputRef = useRef(null);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const { printingInfo, updatePrintingInfo } = usePrintContext();
  const navigate = useNavigate();
  const handleFileSelect = (file) => {
    console.log("Selected File Name:", file.name);
    updatePrintingInfo({ fileName: file.name });
    setShowContinueButton(true);
  };

  const handleFileDragEnter = (event) => {
    event.preventDefault();
    event.currentTarget.style.border = "1px dashed #1B3764";
  };

  const handleFileDragOver = (event) => {
    event.preventDefault();
    event.currentTarget.style.border = "1px dashed #1B3764";
  };

  const handleFileDragLeave = (event) => {
    event.preventDefault();
    event.currentTarget.style.border = "2px dashed #1B3764";
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    const droppedFile = droppedFiles[0];
    if (droppedFile) {
      handleFileSelect(droppedFile);
    }
    event.currentTarget.style.border = "2px dashed #1B3764";
  };

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      handleFileSelect(selectedFile);
    }
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  };
  const handleContinue = () => {
    navigate("/properties");
  };
  return (
    <div>
      <MenuBar />
      <Box
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        alignItems="center"
      >
        {" "}
        <Typography
          sx={{
            color: "#1B3764",
            fontSize: 38,
            paddingTop: 10,
          }}
        >
          Tải tài liệu lên để in
        </Typography>
        <Box
          marginTop={5}
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems="center"
          sx={{
            width: 1200,
            height: 270,
            borderRadius: 10,
            bgcolor: "#E5E7EB",
          }}
        >
          <Box
            display="flex"
            flexDirection={"column"}
            justifyContent="center"
            alignItems="center"
            sx={{
              width: 1170,
              height: 240,
              borderRadius: 10,
              border: "2px dashed #1b3764",
            }}
            onDragEnter={handleFileDragEnter}
            onDragLeave={handleFileDragLeave}
            onDragOver={handleFileDragOver}
            onDrop={handleFileDrop}
          >
            <UploadFileIcon sx={{ fontSize: 50, marginTop: -5 }} />
            {printingInfo.fileName && (
              <Typography>Selected File: {printingInfo.fileName}</Typography>
            )}
            <Button
              variant="contained"
              component="label"
              onClick={openFileInput}
              startIcon={<CloudUploadIcon />}
              sx={{ width: 190, marginTop: 2, fontSize: 18 }}
            >
              Chọn tệp
            </Button>
            {showContinueButton && (
              <Button
                variant="contained"
                component="label"
                onClick={handleContinue}
                startIcon={<ArrowRightOutlinedIcon />}
                sx={{ width: 190, marginTop: 1, fontSize: 18 }}
              >
                Tiếp tục
              </Button>
            )}
            <VisuallyHiddenInput
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileInputChange}
            />
            <Typography sx={{ marginTop: 2, marginBottom: -5 }}>
              Hoặc kéo thả ở đây
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
