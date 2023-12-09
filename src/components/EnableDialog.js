import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box } from "@mui/material";

const EnableDialog = ({ isOpen, handleClose }) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle
       sx={{ backgroundColor: 'green', color: 'white' }}
      
      >Confirm</DialogTitle>
      <DialogContent sx={{paddingBottom: "0px"}}>
        <Typography sx={{padding: "30px"}}>Bạn chắc chắn muốn Enable máy in?</Typography>
      </DialogContent>
      <DialogActions sx={{display:"flex", alignItems: "center", justifyContent: "center" }}>
          <Button onClick={handleClose} color="success" variant="outlined" sx={{width: "120px"}}>
            Hủy
          </Button>
          <Button onClick={handleClose}  color="success" variant="contained" sx={{width: "120px"}}>
            Chắc chắn
          </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EnableDialog;
