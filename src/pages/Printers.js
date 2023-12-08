import React,{ useState } from "react";
import MenuBar from "../components/MenuBar";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  Grid,
  CardActionArea,
} from "@mui/material";
import { Search, FilterList, Add, Remove, CheckCircle, HighlightOff } from "@mui/icons-material";
import Detailprinter from '../components/Detailprinter';
import PrinterCard from "../components/PrinterCard";

const printers = [
  { id: 1, brand: "Printer A", location: "Room 101", status: "Online" },
  { id: 2, brand: "Printer B", location: "Room 102", status: "Offline" },
  { id: 3, brand: "Printer C", location: "Room 103", status: "Online" },
  { id: 1, brand: "Printer A", location: "Room 101", status: "Online" },
  { id: 2, brand: "Printer B", location: "Room 102", status: "Offline" },
  { id: 3, brand: "Printer C", location: "Room 103", status: "Online" },
  { id: 1, brand: "Printer A", location: "Room 101", status: "Online" },
  { id: 2, brand: "Printer B", location: "Room 102", status: "Offline" },
  { id: 3, brand: "Printer C", location: "Room 103", status: "Online" },
  // ...Thêm thông tin của các máy in khác
];

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






export default function Printers() {
  const [selectedPrinter, setSelectedPrinter] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSelectPrinter = (printer) => {
    setSelectedPrinter(printer);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <div>
      <MenuBar />
      <Box sx={{ padding: 5 }}>
        <Typography
          sx={{
            color: "#1B3764",
            fontSize: "24px",
            fontWeight: "400"
          }}
        >Quản lý máy in</Typography>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Box>
            <Button startIcon={<FilterList />}  sx={{ ...sharedButtonStyle, backgroundColor: '#FFFFFF', color: 'black' }}>
              Filter
            </Button>

            <Button startIcon={<Add />} variant="contained" color="success" sx={sharedButtonStyle}>
              Add
            </Button>

            <Button startIcon={<Remove />} variant="contained" color="error" sx={sharedButtonStyle}>
              Remove
            </Button>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Search />
            <TextField startIcon={<Search />} id="outlined-basic" label="Search" variant="outlined" size="small" sx={{ marginLeft: 'auto' }} />
          </Box>

        </Box>

        <Box
          sx={{
            maxHeight: "450px",
            overflowY: "auto",
            marginTop: "15px",
            border: "1px solid rgba(0, 0, 0, 0.25)",
            borderRadius: "10px",
            padding: "20px"
          }}
        >
          <Grid container spacing={5}>
            {printers.map((printer) => (
              <Grid item key={printer.id} xs-none md={4} lg={3} sm={6}  >
                <PrinterCard
                printer={printer}
                onSelect={handleSelectPrinter}
              />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Detailprinter
          printer={selectedPrinter}
          isOpen={isDialogOpen}
          handleClose={handleCloseDialog}
        />
      </Box>
    </div>
  );
}
