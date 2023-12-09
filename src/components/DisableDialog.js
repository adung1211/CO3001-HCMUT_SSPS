import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button , Typography} from "@mui/material";

const DisableDialog = ({ isOpen, handleClose }) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
    <DialogTitle
     sx={{ backgroundColor: 'red', color: 'white' }}
    
    >Confirm</DialogTitle>
    <DialogContent sx={{paddingBottom: "0px"}}>
      <Typography sx={{padding: "30px"}}>Bạn chắc chắn muốn Enable máy in?</Typography>
    </DialogContent>
    <DialogActions sx={{display:"flex", alignItems: "center", justifyContent: "center" }}>
        <Button onClick={handleClose} color="error" variant="outlined" sx={{width: "120px"}}>
          Hủy
        </Button>
        <Button onClick={handleClose}  color="error" variant="contained" sx={{width: "120px"}}>
          Chắc chắn
        </Button>
    </DialogActions>
  </Dialog>
  );
};

export default DisableDialog;
