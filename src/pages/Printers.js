import React,{ useState } from "react";
import MenuBar from "../components/MenuBar";
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
} from "@mui/material";
import { Search, FilterList, Add, Remove} from "@mui/icons-material";
import Detailprinter from '../components/Detailprinter';
import PrinterCard from "../components/PrinterCard";
import AddPrinterDialog from "../components/AddPrinter";

    
  // const printers = [
  //     { id: 1, brand: "Printer A", location: "Room 101", status: "Online" },
  //     { id: 2, brand: "Printer B", location: "Room 102", status: "Offline" },
  //     { id: 3, brand: "Printer C", location: "Room 103", status: "Online" },
  //     { id: 1, brand: "Printer A", location: "Room 101", status: "Online" },
  //     { id: 2, brand: "Printer B", location: "Room 102", status: "Offline" },
  //     { id: 3, brand: "Printer C", location: "Room 103", status: "Online" },
  //     { id: 1, brand: "Printer A", location: "Room 101", status: "Online" },
  //     { id: 2, brand: "Printer B", location: "Room 102", status: "Offline" },
  //     { id: 3, brand: "Printer C", location: "Room 103", status: "Online" },
  //     // ...Thêm thông tin của các máy in khác
  //   ];

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

  const [printers, setPrinters] = useState([
    { id: 1, name: 'Printer 1', brand: 'Brand A', type: 'Type A', location: 1, building: 'A3', room: ' 101', status: 'Online' },
  { id: 2, name: 'Printer 2', brand: 'Brand B', type: 'Type B', location: 2, building: 'B4', room: ' 102', status: 'Offline' },
  { id: 3, name: 'Printer 3', brand: 'Brand C', type: 'Type C', location: 1, building: 'A5', room: ' 103', status: 'Online' },
  { id: 4, name: 'Printer 4', brand: 'Brand D', type: 'Type D', location: 2, building: 'A4', room: ' 104', status: 'Offline' },
  { id: 5, name: 'Printer 5', brand: 'Brand E', type: 'Type E', location: 1, building: 'H6', room: ' 105', status: 'Online' },
  { id: 6, name: 'Printer 6', brand: 'Brand F', type: 'Type F', location: 2, building: 'B4', room: ' 106', status: 'Offline' },
  { id: 7, name: 'Printer 7', brand: 'Brand G', type: 'Type G', location: 1, building: 'A5', room: ' 107', status: 'Online' },
  { id: 8, name: 'Printer 8', brand: 'Brand H', type: 'Type H', location: 2, building: 'C4', room: ' 108', status: 'Offline' },
  { id: 9, name: 'Printer 9', brand: 'Brand I', type: 'Type I', location: 1, building: 'H1', room: ' 109', status: 'Online' },
  { id: 10, name: 'Printer 10', brand: 'Brand J', type: 'Type J', location: 2, building: 'H3', room: ' 110', status: 'Offline' },
    // ...Thêm thông tin của các máy in khác
  ]);
  const [selectedPrinter, setSelectedPrinter] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDialogOpenAddbuttom, setIsDialogOpenAddbuttom] = useState(false);



  const handleSelectPrinter = (printer) => {
    setSelectedPrinter(printer);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setIsDialogOpenAddbuttom(false);
  };
  const handleAddPrinter = (newPrinter) => {
    setPrinters((prevPrinters) => [...prevPrinters, newPrinter]);
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

            <Button startIcon={<Add />} variant="contained" color="success" sx={sharedButtonStyle} onClick={() => setIsDialogOpenAddbuttom(true)}>
              Add
            </Button>

            <Button startIcon={<Remove />} variant="contained" color="error" sx={sharedButtonStyle} >
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
          <Grid container spacing={3}>
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

        <AddPrinterDialog
          isOpen={isDialogOpenAddbuttom}
          handleClose={handleCloseDialog}
          handleAddPrinter={handleAddPrinter}
        />
        <Detailprinter
          printer={selectedPrinter}
          isOpen={isDialogOpen}
          handleClose={handleCloseDialog}
        />
      </Box>
    </div>
  );
}
