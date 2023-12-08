import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import MenuBar from "../components/MenuBar";

const DefaultList = [
  { id: 1, name: "Canon PIXMA MG3620", fac: "Lý Thường Kiệt", build: "A2" },
  { id: 2, name: "Brother HLL2380DW", fac: "Dĩ An", build: "H1" },
  { id: 3, name: "Brother HLL2380DW", fac: "Lý Thường Kiệt", build: "A2" },
  { id: 4, name: "Epson EcoTank ET4760", fac: "Lý Thường Kiệt", build: "C3" },
  { id: 5, name: "Samsung Xpress C430W", fac: "Dĩ An", build: "H1" },
  { id: 6, name: "Brother HLL2380DW", fac: "Dĩ An", build: "H6" },
  { id: 7, name: "Brother HLL2380DW", fac: "Lý Thường Kiệt", build: "B4" },
  { id: 8, name: "Brother HLL2380DW", fac: "Lý Thường Kiệt", build: "B4" },
  { id: 9, name: "Xerox Phaser 6510DN", fac: "Dĩ An", build: "H3" },
];
export default function ChoosePrinter() {
  const [filterFac, setFilterFac] = React.useState("");
  const [filterBuild, setFilterBuild] = React.useState("");
  const [PrinterList, setPrinterList] = React.useState(DefaultList);

  const handleChangeFac = (event) => {
    const selectedFac = event.target.value;

    // Filter the PrinterList based on the selected facility
    const filteredPrinters = DefaultList.filter(
      (printer) => printer.fac === selectedFac
    );

    // Update the state with the filtered facility and clear the filterBuild
    setFilterFac(selectedFac);
    setPrinterList(filteredPrinters);
    if (selectedFac === "") {
      setPrinterList(DefaultList);
    }
    setFilterBuild("");
  };
  const handleChangeBuild = (event) => {
    const selectedBuild = event.target.value;

    // Filter the PrinterList based on the selected building
    const filteredPrinters = PrinterList.filter(
      (printer) => printer.build === selectedBuild
    );

    // Update the state with the filtered building and clear the filterBuild
    setFilterBuild(selectedBuild);
    setPrinterList(filteredPrinters);
    if (selectedBuild === "") {
      setPrinterList(DefaultList);
    }
  };
  const ShowPrinter = (val) => {
    return (
      <Grid item xs={4}>
        <CardActionArea>
          <Card sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="https://lh3.googleusercontent.com/6ywT4BKNphnw3yBHAO-2p-gjW3Bj--puzTV-E7N9qEZNbp0-AuS5xeDjl54ndl5bKiZ4ypwbkbe-RpgBqqAh=w500-rw"
              alt="May in"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" fontWeight="bold" variant="h6">
                  {val.name}
                </Typography>
                <Typography>
                  ID: {val.id} <br />
                  Cơ sở: {val.fac} <br />
                  Toà: {val.build} <br />
                  Phòng: <br />
                </Typography>
                <Typography
                  sx={{
                    color: "green",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  Sẵn sàng
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </CardActionArea>
      </Grid>
    );
  };
  return (
    <>
      <MenuBar />
      <Stack
        display="flex"
        justifyContent="center"
        alignItems="center"
        direction="row"
        sx={{ ml: 90, mb: 2, mt: 2 }}
      >
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Cơ sở</InputLabel>
          <Select value={filterFac} label="Cơ sở" onChange={handleChangeFac}>
            <MenuItem value="">None</MenuItem>
            <MenuItem value={"Lý Thường Kiệt"}>Lý Thường Kiệt</MenuItem>
            <MenuItem value={"Dĩ An"}>Dĩ An</MenuItem>
          </Select>
        </FormControl>
        {filterFac === "Dĩ An" && (
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Toà</InputLabel>
            <Select
              value={filterBuild}
              label="Toà"
              onChange={handleChangeBuild}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"H1"}>H1</MenuItem>
              <MenuItem value={"H2"}>H2</MenuItem>
              <MenuItem value={"H3"}>H3</MenuItem>
              <MenuItem value={"H6"}>H6</MenuItem>
            </Select>
          </FormControl>
        )}
        {filterFac === "Lý Thường Kiệt" && (
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>Toà</InputLabel>
            <Select
              value={filterBuild}
              label="Toà"
              onChange={handleChangeBuild}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"A2"}>A2</MenuItem>
              <MenuItem value={"B3"}>B3</MenuItem>
              <MenuItem value={"C4"}>C4</MenuItem>
            </Select>
          </FormControl>
        )}
        {filterFac === "" && (
          <FormControl sx={{ m: 1, minWidth: 120 }} disabled>
            <InputLabel>Toà</InputLabel>
            <Select value={filterBuild} label="Toà"></Select>
          </FormControl>
        )}
      </Stack>
      <Box display="flex" justifyContent="center" alignItems="center">
        {" "}
        <Box
          sx={{
            width: 1200,
            height: 480,
            bgcolor: "#E9E8E8",
            overflow: "hidden",
            overflowY: "scroll",
          }}
        >
          <Grid container spacing={2}>
            {PrinterList.map((printer) => (
              <ShowPrinter key={printer.id} {...printer} />
            ))}
          </Grid>
        </Box>
      </Box>
      <Stack
        marginTop={5}
        marginLeft={120}
        justifyContent="center"
        alignItems="center"
        direction="row"
        spacing={2}
      >
        <Button variant="contained" color="error">
          Huỷ
        </Button>
        <Button variant="contained" color="success">
          Chọn
        </Button>
      </Stack>
    </>
  );
}
