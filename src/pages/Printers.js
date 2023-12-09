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


export default function Printers() {

  const { printers, addPrinter, removePrinter, editPrinter } = usePrinterListContext();
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
    addPrinter(newPrinter);
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
