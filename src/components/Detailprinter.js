// PrinterDialog.js
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Grid,
  Box
} from "@mui/material";
import UpdateDialog from "../components/UpdateDialog";
import DisableDialog from "../components/DisableDialog";
import EnableDialog from "../components/EnableDialog";

const sharedButtonStyle = {
  backgroundColor: 'your-custom-color',
  boxShadow: 1,
  borderRadius: "5px",
  paddingTop: "2px",
  paddingBottom: "2px",
  marginRight: "10px",
  fontSize: "12px"
  // Thêm các thuộc tính khác theo nhu cầu của bạn
};

const Detailprinter = ({ printer, isOpen, handleClose }) => {
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [disableDialogOpen, setDisableDialogOpen] = useState(false);
  const [enableDialogOpen, setEnableDialogOpen] = useState(false);
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle sx={{ textAlign: 'center' }}>THÔNG TIN MÁY IN</DialogTitle>
      <DialogContent>
        {printer && (
          <>
            <Grid container xs={{padding: "20px"}}>
              <Grid item md={6}>
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

              <Grid item md={6}>
                  <Typography variant="h6">{printer.brand}</Typography>
                  <Typography color="text.secondary">ID: {printer.id}</Typography>
                  <Typography color="text.secondary">
                    Location: {printer.location}
                  </Typography>
                  <Typography color="text.secondary">Status: {printer.status}</Typography>
              </Grid>
            </Grid>
          </>
        )}
      </DialogContent>
      <DialogActions sx={{ display: 'flex', justifyContent: 'space-between', padding: "10px" }}>
            <Button onClick={() => setUpdateDialogOpen(true)} color="primary" variant="contained" sx={sharedButtonStyle}>
              Cập nhật
            </Button>
          <Box>
            <Button onClick={() => setDisableDialogOpen(true)} color="error" variant="contained" sx={sharedButtonStyle}>
              Disable
            </Button>
            <Button onClick={() => setEnableDialogOpen(true)} color="success" variant="contained" sx={sharedButtonStyle}>
              Enable
            </Button>
          </Box>
      </DialogActions>
        <UpdateDialog isOpen={updateDialogOpen} handleClose={() => setUpdateDialogOpen(false)} />

        {/* Dialog vô hiệu hóa */}
        <DisableDialog isOpen={disableDialogOpen} handleClose={() => setDisableDialogOpen(false)} />

        {/* Dialog kích hoạt */}
        <EnableDialog isOpen={enableDialogOpen} handleClose={() => setEnableDialogOpen(false)} />
    </Dialog>
  );
};

export default Detailprinter;
