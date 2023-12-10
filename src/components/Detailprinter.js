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
import { usePrinterListContext, PrinterListProvider } from '../components/PrinterListContext';

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
  const { printers, editPrinter } = usePrinterListContext();
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [disableDialogOpen, setDisableDialogOpen] = useState(false);
  const [enableDialogOpen, setEnableDialogOpen] = useState(false);
  const handleCloseDetailprinter = () => {
    // Xử lý các thay đổi cần thiết khi đóng chi tiết máy in
    console.log("Chi tiết máy in đã được đóng");

    // Đóng chi tiết máy in
    handleClose();
  };

  const handleEnableConfirm = (confirmed) => {
    // Xử lý khi xác nhận Enable hoặc hủy bỏ
    setEnableDialogOpen(false);

    if (confirmed) {
      // Thực hiện cập nhật trạng thái máy in thành Online
      const updatedPrinterInfo = { ...printer, status: 'Online' };
      editPrinter(updatedPrinterInfo);
    }
  };
  
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
                <Typography variant="h6">{printer.name}</Typography>
                <Typography color="text.secondary">ID: {printer.id}</Typography>
                <Typography color="text.secondary">Mẫu máy in: {printer.brand}</Typography>
                <Typography color="text.secondary">Cơ sở: {printer.location}</Typography>
                <Typography color="text.secondary">Tòa: {printer.building}</Typography>
                <Typography color="text.secondary">Phòng: {printer.room}</Typography>
                {printer.status !== null && printer.status !== undefined && (
                  <Typography color="text.secondary">Trạng thái: {printer.status}</Typography>
                )}
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
            {printer.status !== null && printer.status !== undefined &&  printer.status === 'Online' ? (
              <Button onClick={() => setDisableDialogOpen(true)} color="error" variant="contained" sx={sharedButtonStyle}>
                Disable
              </Button>
            ) : (
              <Button onClick={() => setEnableDialogOpen(true)} color="success" variant="contained" sx={sharedButtonStyle}>
                Enable
              </Button>
            )}
          </Box>
      </DialogActions>
        <UpdateDialog
          printer={printer}
          isOpen={updateDialogOpen}
          handleClose={() => {
            setUpdateDialogOpen(false);
            handleCloseDetailprinter(); // Gọi hàm đóng từ Detailprinter khi đóng UpdateDialog
          }}
        />

        {/* Dialog vô hiệu hóa */}
        <DisableDialog 
          printer={printer}
          isOpen={disableDialogOpen}
          handleClose={() => {
            setDisableDialogOpen(false);
            handleCloseDetailprinter(); // Gọi hàm đóng từ Detailprinter khi đóng UpdateDialog
          }}
          />
          

        {/* Dialog kích hoạt */}
        <EnableDialog
         printer={printer}
         isOpen={enableDialogOpen} 
         handleEnable={handleEnableConfirm}
         handleClose={() => {
          setEnableDialogOpen(false);
          handleCloseDetailprinter(); // Gọi hàm đóng từ Detailprinter khi đóng UpdateDialog
        }}

          />
    </Dialog>
  );
};

export default Detailprinter;