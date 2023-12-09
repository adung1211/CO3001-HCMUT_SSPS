import React, { useState, useEffect } from 'react';
import MenuBar from "../components/MenuBar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';
import { useNumberContext } from '../components/NumberContext';

export default function PaperBill() {
    const navigate = useNavigate();
  
    const { number1, number2 } = useNumberContext();

    const onClick = useCallback(() => {
      navigate("/home");
    }, [navigate]);

    const ClockComponent = () => {
        const [currentTime, setCurrentTime] = useState(new Date());
      
        useEffect(() => {
          // Cập nhật thời gian một lần khi component được tạo
          setCurrentTime(new Date());
      
          // Không cần clear interval vì không có interval được thiết lập
        }, []); // Chỉ chạy một lần khi component được tạo
      
        const formattedDateTime = new Intl.DateTimeFormat('vi-VN', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
          }).format(currentTime);
        
          return (
            <Typography variant="h4" gutterBottom
            sx={{
                fontFamily: 'Be Vietnam Pro,Akaya Telivigala', // Chọn font chữ
                color: '#000', // Chọn màu chữ
                letterSpacing: '2px', // Khoảng cách giữa các ký tự
                fontSize: 18
            }}
            >
              {formattedDateTime}
            </Typography>
          );
        };

    const TableColumn = ({ content, isDataType }) => {
        return (
          <TableCell
            sx={{
              borderBottom: '2px solid #ccc',
              backgroundColor: '#FFFFFF',
              color: 'inherit',
              fontSize: '18px',
              fontWeight: isDataType ? 'bold' : 'normal',
              textAlign:"center"
            }}
          >
            {content}
          </TableCell>
        );
    };

    const TableMergedHeaderColumn = ({ content }) => {
        return (
          <TableCell
            sx={{
              backgroundColor: '#1B3764',
              color: '#fff',
              fontSize: '30px',
              fontWeight: 'bold',
              borderBottom: '2px solid #fff',
              textAlign:"center"
            }}
            colSpan={2} // Gộp cả hai cột
          >
            Thanh toán thành công <CheckIcon style={{ color: '#FFFFFF', backgroundColor: '#4CAF50', borderRadius: '50%', width: 24, height: 24 }} />
          </TableCell>
        );
    };

    const TableRowComponent = ({ dataType, data }) => {
        return (
          <TableRow>
            <TableColumn content={dataType} isDataType />
            <TableColumn content={data} />
          </TableRow>
        );
    };

    const tableData = [
        { dataType: 'Thời gian', data: ClockComponent() },
        { dataType: 'Số tờ', data: number1 },
        { dataType: 'Đơn giá', data: 2000 },
        { dataType: 'Thành tiền', data: number2 },
    ];

    return (
    <div>
        <MenuBar/>
        <Box
        display="flex"
        flexDirection={"column"}
        justifyContent="flex-start"
        alignItems="center"
        minHeight="98vh"
        sx={{
          bgcolor: "#F4F8FF",
          paddingTop: 5,
          paddingLeft: 15,
          paddingRight: 15
        }}
        >
            <TableContainer component={Paper}>
            <Table>
                <TableBody>
                <TableMergedHeaderColumn/>
                {tableData.map((row, index) => (
                    <TableRowComponent key={index} {...row} />
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            <Button
                variant="contained"
                color="primary"
                onClick={onClick}
                sx={{
                mt: 5,
                fontSize: 18
                }}
                >
                Quay về trang chủ
            </Button>
        </Box>
        <div>
      <p>Received numbers: {number1}, {number2}</p>
    </div>
    </div>
    );
};