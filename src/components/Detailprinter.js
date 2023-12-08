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


const Detailprinter = ({ printer, isOpen, handleClose }) => {
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [disableDialogOpen, setDisableDialogOpen] = useState(false);
  const [enableDialogOpen, setEnableDialogOpen] = useState(false);
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>THÔNG TIN MÁY IN</DialogTitle>
      <DialogContent>
        {printer && (
          <>
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
      <DialogActions>
        <Button onClick={() => setUpdateDialogOpen(true)} color="primary">
          Cập nhật
        </Button>
        <Button onClick={() => setDisableDialogOpen(true)} color="secondary">
          Disable
        </Button>
        <Button onClick={() => setEnableDialogOpen(true)} color="success">
          Enable
        </Button>
        <Button onClick={handleClose}>Đóng</Button>
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
