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
import { useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Modal from "@mui/material/Modal";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import MenuBar from "../components/MenuBar";

const DefaultList = [
  {
    id: 1,
    name: "Canon PIXMA MG3620",
    fac: "Lý Thường Kiệt",
    build: "A2",
    room: "201",
    state: "Sẵn sàng",
  },
  {
    id: 2,
    name: "Brother HLL2380DW",
    fac: "Dĩ An",
    build: "H1",
    room: "305",
    state: "Sẵn sàng",
  },
  {
    id: 3,
    name: "Brother HLL2380DW",
    fac: "Lý Thường Kiệt",
    build: "A2",
    room: "201",
    state: "Không sẵn sàng",
  },
  {
    id: 4,
    name: "Epson EcoTank ET4760",
    fac: "Lý Thường Kiệt",
    build: "C3",
    room: "212",
    state: "Sẵn sàng",
  },
  {
    id: 5,
    name: "Samsung Xpress C430W",
    fac: "Dĩ An",
    build: "H1",
    room: "602",
    state: "Sẵn sàng",
  },
  {
    id: 6,
    name: "Brother HLL2380DW",
    fac: "Dĩ An",
    build: "H6",
    room: "307",
    state: "Sẵn sàng",
  },
  {
    id: 7,
    name: "Brother HLL2380DW",
    fac: "Lý Thường Kiệt",
    build: "B4",
    room: "102",
    state: "Sẵn sàng",
  },
  {
    id: 8,
    name: "Brother HLL2380DW",
    fac: "Lý Thường Kiệt",
    build: "B4",
    room: "102",
    state: "Không sẵn sàng",
  },
  {
    id: 9,
    name: "Xerox Phaser 6510DN",
    fac: "Dĩ An",
    build: "H3",
    room: "107",
    state: "Sẵn sàng",
  },
];
export default function ChoosePrinter() {
  const navigate = useNavigate();
  const [filterFac, setFilterFac] = React.useState("");
  const [filterBuild, setFilterBuild] = React.useState("");
  const [PrinterList, setPrinterList] = React.useState(DefaultList);
  const [choosen, setChoosen] = React.useState("");

  const handleChoose = (val) => {
    setChoosen(val.id);
  };
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
  const [open, setOpen] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    if (choosen === "") {
      setOpenError(true);
    } else {
      setOpen(true);
      setTimeout(() => {
        navigate("/bill");
      }, 2000);
    }
  };
  const ShowPrinter = (val) => {
    return (
      <Grid item xs={4}>
        {val.state === "Sẵn sàng" && (
          <CardActionArea onClick={() => handleChoose(val)}>
            <Card
              sx={
                val.id === choosen
                  ? {
                      display: "flex",
                      boxShadow: "0 0 0 0.5rem #1488DB",
                    }
                  : {
                      display: "flex",
                    }
              }
            >
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="https://i.imgur.com/94qk77J.jpg"
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
                    Phòng: {val.room} <br />
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
        )}
        {val.state === "Không sẵn sàng" && (
          <Card sx={{ display: "flex", backgroundColor: "#E9E8E8" }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="https://i.imgur.com/94qk77J.jpg"
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
                  Phòng: {val.room} <br />
                </Typography>
                <Typography
                  sx={{
                    color: "#9A5151",
                    fontWeight: "bold",
                  }}
                >
                  Không sẵn sàng
                </Typography>
              </CardContent>
            </Box>
          </Card>
        )}
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
          <Grid container spacing={2} p={1}>
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
        <Button
          variant="contained"
          color="error"
          onClick={() => navigate("/home")}
        >
          Huỷ
        </Button>
        <Button variant="contained" color="success" onClick={handleOpen}>
          Chọn
        </Button>
      </Stack>
      <Backdrop
        sx={{ color: "#1488DB", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        transitionDuration={{ exit: 1000, enter: 1000, appear: 1000 }}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Modal open={openError} onClose={() => setOpenError(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #fff",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography>Bạn chưa chọn máy in</Typography>
        </Box>
      </Modal>
    </>
  );
}
