// import React from 'react';
// import { Autocomplete } from '@mui/material';

// export const UserHome = () => {
//     const Area = [
//         { label: 'Southampton', id: 1 },
//         { label: 'London', id: 2 },
//         { label: 'Manchester', id: 3 },
//         { label: 'Edinburgh', id: 4 },
//       ];
//       const Service = [
//         { label: 'Cleaning', id: 1 },
//         { label: 'Babysitting', id: 2 },
//         { label: 'Pest Control', id: 3 },
//         { label: 'Plumbing', id: 4 },
//         { label: 'Electrical Repairs', id: 5 },
//         { label: 'Beauty', id: 6 },
//       ];
//     return (
//         <div>
//            <Autocomplete
//   disablePortal
//   id="combo-box-demo"
//   options={top100Films}
//   sx={{ width: 300 }}
//   renderInput={(params) => <TextField {...params} label="Area" />}
// />
// <Autocomplete
//   disablePortal
//   id="combo-box-demo"
//   options={top100Films}
//   sx={{ width: 300 }}
//   renderInput={(params) => <TextField {...params} label="Service" />}
// />
//         </div>
        
//     )
// }

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Link, useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';
import { useEffect } from 'react';
import axios, { Axios } from 'axios';




const columns = [
    { id: 'name', label: 'Service Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
      id: 'population',
      label: 'Population',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'size',
      label: 'Size\u00a0(km\u00b2)',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'density',
      label: 'Density',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
  ];
  
  function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
  }
  
  const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
  ];


export const UserHomeSearch = () => {
    
    const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [users, setUsers] = React.useState([]);
  useEffect(() => {
    loadUsers();
  },[]);
  
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8082/service/user_list");
    console.log(result.data);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

//   const history = useHistory();
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   username: data.get('username'),
    //   password: data.get('password'),
    // });
    navigate('/UserProfile')
  };
  return (
    <div>
        
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Area}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Area" />}
    />
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Service}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Services" />}
    />

<Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            // : <Link to={`ServiceDetailsUserSide/${row.id}`}>{value}</Link>}
                            : <Link to={`/servicerequestuserside`}>{value}</Link>}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    <Button component={Link} to="/UserProfile" variant="contained" color="primary">
      Profile
    </Button>
    </div>
    
  );
}

const Area = [
            { label: 'Southampton', id: 1 },
            { label: 'London', id: 2 },
            { label: 'Manchester', id: 3 },
            { label: 'Edinburgh', id: 4 },
          ];
          const Service = [
            { label: 'Cleaning', id: 1 },
            { label: 'Babysitting', id: 2 },
            { label: 'Pest Control', id: 3 },
            { label: 'Plumbing', id: 4 },
            { label: 'Electrical Repairs', id: 5 },
            { label: 'Beauty', id: 6 },
          ];
