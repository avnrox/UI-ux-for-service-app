import React, { useState , useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from "axios";


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
    const [data, setData] = React.useState([]);
    const provider_id = localStorage.getItem("provider_id");

    // useEffect(() => {
    //   axios.get('http://localhost:8082/order/request_list?provider_id='+provider_id)
    //     .then(response => {
    //       setData(response.data);
    //       console.log("data",response.data);
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // }, []);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const handleOnClick = (event) => {
      event.preventDefault();
      // const data = new FormData(event.currentTarget);
      // console.log({
      //   username: data.get('username'),
      //   password: data.get('password'),
      // });
      navigate('/serviceprovideraddservice');
      // localStorage.removeItem('user_id');
      // console.log("user_id",localStorage.getItem("user_id"))
      };

      const [res, setRes] = useState([]);
      const gettempdata = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8082/order/request_list?provider_id='+provider_id)
        .then((response) => {
          console.log(response.data);
          setRes(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      };

      console.log("am i getting data?", res)
        
        // console.log("am i getting data?", res)
      
  //   const history = useHistory();
    const navigate = useNavigate(); 
    return (
        <div>
           {/* <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={gettempdata}
              >
                temp
              </Button> */}
          <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleOnClick}
              >
                Add Service
              </Button>
              <button onClick={gettempdata}>Fetch Services</button>
              {res.length > 0 &&
  <ul style={{ color: 'white' }}>
    {res.map(item => (
      <Link to={`/servicedetailsandchatserviceproviderside`} key={item.serviceId}>
        <li 
          onClick={() => {
            localStorage.setItem('spchat', JSON.stringify(item));
          }}
          style={{ color: 'white' }}
        >
          <h3>{item.user_id}</h3>
          {/* <p>{item.description}</p> */}
          {/* <ul>
            {item.reviews.map(review => (
              <li key={review.id}>
                <p>{review.text}</p>
                <p>Rating: {review.rating}/5</p>
              </li>
            ))}
          </ul> */}
        </li>
      </Link>
    ))}
  </ul>
}
              {/* <TableContainer sx={{ maxHeight: 440 }}>
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
      </TableContainer> */}
        </div>
    )
}
