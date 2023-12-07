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
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import MenuBar from "../components/MenuBar";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

const PrinterList = [
  { id: 1, name: "Canon PIXMA MG3620", coso: "Lý Thường Kiệt" },
  { id: 2, name: "Brother HLL2380DW", coso: "Thủ Đức" },
  { id: 3, name: "HP LaserJet Pro MFP M29W", coso: "Lý Thường Kiệt" },
  { id: 4, name: "Epson EcoTank ET4760", coso: "Lý Thường Kiệt" },
  { id: 5, name: "Samsung Xpress C430W", coso: "Thủ Đức" },
  { id: 6, name: "Brother HLL2380DW", coso: "Thủ Đức" },
  { id: 7, name: "Brother HLL2380DW", coso: "Lý Thường Kiệt" },
  { id: 8, name: "Brother HLL2380DW", coso: "Lý Thường Kiệt" },
  { id: 9, name: "Xerox Phaser 6510DN", coso: "Thủ Đức" },
];
const filters = [{ text: "Lọc theo toà" }];
export default function ChoosePrinter() {
  const [anchorFilter, setAnchorFilter] = React.useState(null);
  const handleCloseFilter = (event) => {
    setAnchorFilter(null);
  };
  const handleOpenFilter = (event) => {
    setAnchorFilter(event.currentTarget);
  };
  const ShowPrinter = (val) => {
    return (
      <Grid item xs={4}>
        <CardActionArea>
          <Card sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="https://i.imgur.com/Ma9RIGO.png"
              alt="May in"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" fontWeight="bold" variant="h6">
                  {val.name}
                </Typography>
                <Typography>
                  ID: {val.id} <br />
                  Cơ sở: {val.coso} <br />
                  Toà: <br />
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
      <Box sx={{ ml: 150, mb: 5, mt: 2 }}>
        <Tooltip title="Open settings">
          <Button
            id="demo-customized-button"
            variant="outlined"
            onClick={handleOpenFilter}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Options
          </Button>
        </Tooltip>
        <Menu
          sx={{ ml: -2 }}
          id="menu-appbar"
          anchorEl={anchorFilter}
          keepMounted
          open={Boolean(anchorFilter)}
          onClose={handleCloseFilter}
        >
          {filters.map((filters) => (
            <MenuItem
              key={filters}
              onClick={() => handleCloseFilter(filters.text)}
            >
              <Typography textAlign="center">{filters.text}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
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
