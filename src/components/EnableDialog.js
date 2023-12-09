import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";

const EnableDialog = ({ isOpen, handleClose, currentStatus, handleEnable }) => {
  const handleEnableConfirm = () => {
    // Kiểm tra xem trạng thái hiện tại đã là "Online" hay chưa
    if (currentStatus === 'Online') {
      // Nếu đã là Online, thông báo hoặc xử lý theo cách phù hợp với ứng dụng của bạn
      console.log("Máy in đã ở trạng thái Online, không thể Enable lại.");
    } else {
      // Thực hiện cập nhật trạng thái máy in chỉ khi nó chưa là Online
      // Gọi hàm xác nhận enable từ component cha
      handleEnable(true);
    }

    // Đóng dialog
    handleClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle sx={{ backgroundColor: 'green', color: 'white' }}>Confirm</DialogTitle>
      <DialogContent sx={{ paddingBottom: "0px" }}>
        <Typography sx={{ padding: "30px" }}>Bạn chắc chắn muốn Enable máy in?</Typography>
      </DialogContent>
      <DialogActions sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Button onClick={handleClose} color="success" variant="outlined" sx={{ width: "120px" }}>
          Hủy
        </Button>
        <Button onClick={() => handleEnableConfirm(true)} color="success" variant="contained" sx={{ width: "120px" }}>
          Chắc chắn
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EnableDialog;
