import { useState } from "react";


// project imports
import { formatNumber } from "../utils/formatNumber";

// mui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';


const PopulationTable = ({population}) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - population.length) : 0;

    return (
        <Paper>
        <TableContainer component={Paper}>
            <Table size="small" aria-label="Population in Table Form">
                <TableHead>
                <TableRow>
                    <TableCell>Year</TableCell>
                    <TableCell align="right">Value</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {population
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                    return (
                        <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">{row.date}</TableCell>
                        <TableCell align="right">{formatNumber(row.value)}</TableCell>
                    </TableRow>
                    )
                })}

                {emptyRows > 0 && (
                <TableRow
                    style={{
                    height: 53 * emptyRows,
                }}
                >
                    <TableCell colSpan={2} />
                </TableRow>
                )}
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={population.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Paper>
    )
};

export default PopulationTable;