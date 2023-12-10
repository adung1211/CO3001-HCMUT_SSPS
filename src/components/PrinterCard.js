import React, { useState } from "react";
import { Box } from "@mui/material";
import { Card, CardContent, Button, Typography, Grid, CardActionArea } from "@mui/material";
import RemoveDialog from "../components/RemoveDialog";
import Detailprinter from '../components/Detailprinter';

import { CircleSharp } from "@mui/icons-material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const statusButtonStyle = {
  width: "20px",
  padding: "0px",
  position: "absolute",
  top: "5px",
  right: "20px",
  fontSize: "12px"
};

const PrinterCard = ({ printer, onSelect, onRemove }) => {
  const [removeDialogOpen, setRemoveDialogOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleRemove = () => {
    setRemoveDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleSelectPrinter = () => {
    setIsDialogOpen(true);
  };

  return (
    <Box sx={{ 
      position: "relative", 
      padding: "15px",
      backgroundColor: "#FFF", // Màu nền
      boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      borderRadius: "10px"
      }}>
      <Card onClick={() => onSelect(printer)}>
        <CardActionArea onSelect={handleSelectPrinter}>
          <Grid container>
            <Grid item md={5} sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}>
              <Box>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-photocopier-machine-1125087.png"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={7}>
              <CardContent>
                <Typography variant="h6">{printer.name}</Typography>
                <Typography color="text.secondary">ID: {printer.id}</Typography>
                <Typography color="text.secondary">Cơ sở: {printer.location}</Typography>
                <Typography color="text.secondary">Tòa: {printer.building}</Typography>
                <Typography color="text.secondary">Phòng: {printer.room}</Typography>
              </CardContent>
            </Grid>
          </Grid>
          <Box sx={statusButtonStyle}>
            <Button
              startIcon={<CircleSharp />}
              color={printer.status === "Online" ? "success" : "error"}
            />
          </Box>
        </CardActionArea>
      </Card>
      <Grid container justifyContent="flex-end">
        <Button onClick={handleRemove} color="error" variant="contained"
          sx={{
            borderRadius: "5px",
            paddingTop: "2px",
            paddingBottom: "2px",
            marginTop: "10px",
            fontSize: "12px"
          }}
        >
          Remove
        </Button>
      </Grid>
      <RemoveDialog
        isOpen={removeDialogOpen}
        handleClose={() => setRemoveDialogOpen(false)}
        handleRemove={() => {
          setRemoveDialogOpen(false);
          onRemove(printer);
        }}
      />
      <Detailprinter
        printer={printer}
        isOpen={isDialogOpen}
        handleClose={handleCloseDialog}
      />
    </Box>
  );
};

export default PrinterCard;
