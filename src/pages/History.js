import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import MenuBar from "../components/MenuBar";
import Typography from "@mui/material/Typography";

import { useContext } from "react";
import { HistoryContext } from "../components/HistoryContext";

const columns = [
  {
    field: "fileName",
    headerName: "Tên File",
    width: 300,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "printID",
    headerName: "Mã in",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "printerID",
    headerName: "ID Máy in",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "printPages",
    headerName: "Số trang In",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "paperSize",
    headerName: "Loại giấy",
    width: 100,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "location",
    headerName: "Nơi in",
    width: 200,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "printDate",
    headerName: "Ngày in",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
];

export default function History() {
  const { History } = useContext(HistoryContext);
  return (
    <>
      <MenuBar />
      <Box
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems="center"
          sx={{
            width: 1400,
          }}
        >
          <Typography
            sx={{
              color: "#1B3764",
              fontSize: 38,
              paddingTop: 3,
            }}
          >
            Lịch sử sử dụng dịch vụ in
          </Typography>
          <Box paddingTop={2} sx={{ height: 500 }}>
            <DataGrid
              rows={History}
              columns={columns}
              disableColumnFilter
              disableColumnSelector
              disableDensitySelector
              components={{
                Toolbar: GridToolbar,
              }}
              sx={{
                ".MuiDataGrid-columnHeaderTitle": {
                  fontWeight: "bold !important",
                  overflow: "visible !important",
                },
                "& .super-app-theme--header": {
                  backgroundColor: "#7280FF",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
