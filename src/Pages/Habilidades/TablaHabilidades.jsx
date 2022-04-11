import * as React from "react";
import { useState, Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";
import DialogEliminar from "./DialogEliminar";

const headers = ["Habilidad", "Descripción"];

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;
  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function CustomPaginationActionsTable(props) {
  let isLoged = localStorage.getItem("loged");

  const { array } = props;

  function createData(experiencia, descripcion) {
    const object = { experiencia, descripcion };

    return object;
  }

  const rows = [];
  const [index, setIndex] = useState(0);
  const [openEliminarH, setOpenEliminarH] = useState(false);
  const [filasH, setfilasH] = useState(rows);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filasH.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    let arrayTemporal = [];
    for (let i = 0; i < array.length; i++) {
      let nuevoElemento = createData(...array[i]);
      arrayTemporal.push(nuevoElemento);
      setfilasH([...filasH, ...arrayTemporal]);
    }
  }, [array]);
  useEffect(() => {
    let filasH = localStorage.getItem("dataHabilidades");
    if (filasH != null) {
      setfilasH(JSON.parse(filasH));
    }
  }, []);
  useEffect(() => {
    if (isLoged === "true") {
      localStorage.setItem("dataHabilidades", JSON.stringify(filasH));
    }
  }, [filasH]);
  return (
    <Fragment>
      {filasH.length > 0 ? (
        <Fragment>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 50 }}>
              <TableHead style={{ backgroundColor: "black" }}>
                <TableRow>
                  {headers.map((header, index) => (
                    <TableCell
                      key={index}
                      align="left"
                      style={{ color: "white" }}
                    >
                      {header}
                    </TableCell>
                  ))}

                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? filasH.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : filasH
                ).map((row, index) => (
                  <TableRow key={index}>
                    <TableCell style={{ width: "15px" }} align="left">
                      {row.experiencia}
                    </TableCell>
                    <TableCell style={{ width: "15px" }} align="left">
                      {row.descripcion}
                    </TableCell>

                    <TableCell style={{ width: "15px" }} align="left">
                      <IconButton
                        aria-label="delete"
                        onClick={() => {
                          setIndex(page * rowsPerPage + index);
                          setOpenEliminarH(true);
                        }}
                      >
                        <DeleteIcon sx={{ color: red[500] }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}

                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    colSpan={3}
                    count={filasH.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
          <DialogEliminar
            open={openEliminarH}
            handleClose={() => setOpenEliminarH(false)}
            index={index}
            filasH={filasH}
            setfilasH={setfilasH}
          />
        </Fragment>
      ) : (
        <div
          style={{
            height: "80vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Sin datos</h1>
        </div>
      )}
    </Fragment>
  );
}
