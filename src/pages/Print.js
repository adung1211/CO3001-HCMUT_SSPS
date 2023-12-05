import React from "react";
import MenuBar from "../components/MenuBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

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
            width: 1000,
            height: 200,
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
              width: 900,
              height: 150,
              borderStyle: "dashed",
              borderRadius: 10,
              bgcolor: "#E5E7EB",
            }}
          >
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Tải tài liệu lên
              <VisuallyHiddenInput type="file" />
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
