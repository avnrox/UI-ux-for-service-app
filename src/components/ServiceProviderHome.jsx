import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


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

export const ServiceProviderHome = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
  //   const history = useHistory();
    const navigate = useNavigate(); 
    return (
        <div>
          <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add Service
              </Button>
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
                            : <Link to={`/servicedetailsandchatserviceproviderside`}>{value}</Link>}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
        </div>
    )
}

// import { Avatar, Box, Typography, useTheme } from "@mui/material";
// import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
// import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
// import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
// import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined'; import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined'; import StyleIcon from '@mui/icons-material/Style';
// import { Link, useNavigate } from "react-router-dom";

// export const ServiceProviderHome = () => {
//     const { collapsed } = useProSidebar();
//     const theme = useTheme();

//     return <Sidebar
//         style={{ height: "100%", top: 'auto' }}
//         breakPoint="md"
//         backgroundColor={theme.palette.neutral.light}

//     >
//         <Box sx={styles.avatarContainer}>
//             <Avatar sx={styles.avatar} alt="Masoud" src="src/assets/avatars/masoud.jpeg" />
//             {!collapsed ? <Typography variant="body2" sx={styles.yourChannel}>Your Channel</Typography> : null}
//             {!collapsed ? <Typography variant="overline">React with Masoud</Typography> : null}
//         </Box>

//         <Menu
//             menuItemStyles={{
//                 button: ({ level, active }) => {
//                     return {
//                         backgroundColor: active ? theme.palette.neutral.medium : undefined,
//                     };
//                 },
//             }}>
//             <MenuItem active={window.location.pathname === "/"} component={<Link to="/" />} icon={<DashboardOutlinedIcon />}> <Typography variant="body2">Dashboard</Typography> </MenuItem>
//             <MenuItem active={window.location.pathname === "/content"} component={<Link to="/content" />} icon={<SourceOutlinedIcon />}> <Typography variant="body2">Content </Typography></MenuItem>
//             <MenuItem active={window.location.pathname === "/analytics"} component={<Link to="/analytics" />} icon={<AnalyticsOutlinedIcon />}> <Typography variant="body2">Analytics </Typography></MenuItem>
//             <MenuItem active={window.location.pathname === "/customization"} component={<Link to="/customization" />} icon={<StyleOutlinedIcon />}> <Typography variant="body2">Customization </Typography></MenuItem >
//         </Menu >
//     </Sidebar >;
// }

// // export default SideNav;

// /**
//  * @type {import("@mui/material").SxProps}
//  */
// const styles = {
//     avatarContainer: {
//         display: "flex",
//         alignItems: "center",
//         flexDirection: 'column',
//         my: 5
//     },
//     avatar: {
//         width: '40%',
//         height: 'auto'
//     },
//     yourChannel: {
//         mt: 1
//     }

// }