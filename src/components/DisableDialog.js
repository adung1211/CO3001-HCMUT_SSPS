import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button , Typography} from "@mui/material";
import { usePrinterListContext} from '../components/PrinterListContext';

const DisableDialog = ({ printer, isOpen, handleClose }) => {
  const {printers, editPrinter} = usePrinterListContext();
  const handleDisableConfirm = (confirmed) => {
    // Xử lý khi xác nhận Enable hoặc hủy bỏ
    handleClose();

    if (confirmed) {
      const updatedPrinter = { ...printer, status: 'Offline' };
      editPrinter(updatedPrinter);
      handleClose();
      // Gọi hàm xác nhận enable từ component cha
    }
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
    <DialogTitle
     sx={{ backgroundColor: 'red', color: 'white' }}
    
    >Confirm</DialogTitle>
    <DialogContent sx={{paddingBottom: "0px"}}>
      <Typography sx={{padding: "30px"}}>Bạn chắc chắn muốn Disable máy in?</Typography>
    </DialogContent>
    <DialogActions sx={{display:"flex", alignItems: "center", justifyContent: "center" }}>
        <Button onClick={handleClose} color="error" variant="outlined" sx={{width: "120px"}}>
          Hủy
        </Button>
        <Button onClick={() => handleDisableConfirm(true)}  color="error" variant="contained" sx={{width: "120px"}}>
          Chắc chắn
        </Button>
    </DialogActions>
  </Dialog>
  );
};

export default DisableDialog;