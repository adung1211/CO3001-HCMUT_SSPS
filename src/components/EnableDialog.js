import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import { usePrinterListContext } from "../components/PrinterListContext";

const EnableDialog = ({ printer, isOpen, handleClose, handleEnable }) => {
  const { editPrinter } = usePrinterListContext();
  const handleEnableConfirm = (confirmed) => {
    // Xử lý khi xác nhận Enable hoặc hủy bỏ
    handleClose();

    if (confirmed) {
      const updatedPrinter = { ...printer, status: "Sẵn sàng" };
      editPrinter(updatedPrinter);
      handleClose();
      // Gọi hàm xác nhận enable từ component cha
      // handleEnable();
    }
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle sx={{ backgroundColor: "green", color: "white" }}>
        Confirm
      </DialogTitle>
      <DialogContent sx={{ paddingBottom: "0px" }}>
        <Typography sx={{ padding: "30px" }}>
          Bạn chắc chắn muốn Enable máy in?
        </Typography>
      </DialogContent>
      <DialogActions
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button
          onClick={handleClose}
          color="success"
          variant="outlined"
          sx={{ width: "120px" }}
        >
          Hủy
        </Button>
        <Button
          onClick={() => handleEnableConfirm(true)}
          color="success"
          variant="contained"
          sx={{ width: "120px" }}
        >
          Chắc chắn
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EnableDialog;
