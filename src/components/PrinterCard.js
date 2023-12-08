// PrinterCard.js
import React from "react";
import {Box } from "@mui/material";
import { Card, CardContent, Button, Typography, Grid, CardActionArea } from "@mui/material";
import { CheckCircle, HighlightOff } from "@mui/icons-material";

const PrinterCard = ({ printer, onSelect, onRemove, isRemoveButtonPressed }) => {
    
  return (
    <Card onClick={() => onSelect(printer)} sx={{ width: "100%", position: "relative" }}>
      <CardActionArea>
        <Grid container>
          <Grid item md={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-photocopier-machine-1125087.png"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <CardContent>
              <Typography variant="h6">{printer.brand}</Typography>
              <Typography color="text.secondary">ID: {printer.id}</Typography>
              <Typography color="text.secondary">Location: {printer.location}</Typography>
              <Typography color="text.secondary">Status: {printer.status}</Typography>
            </CardContent>
            {isRemoveButtonPressed ? (
              <Button color="error" variant="contained" onClick={() => onRemove(printer)}>
                Remove
              </Button>
            ) : (
              <Button color="warning" variant="contained" onClick={() => onSelect(printer)}>
                Select
              </Button>
            )}
          </Grid>
        </Grid>
        <Button
          startIcon={printer.status === "Online" ? <CheckCircle /> : <HighlightOff />}
          color={printer.status === "Online" ? "success" : "error"}
        />
      </CardActionArea>
    </Card>
  );
};

export default PrinterCard;
