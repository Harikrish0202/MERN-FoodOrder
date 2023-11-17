import React, { useState } from "react";
import fakeData from "./Dummydata.json";
import { useTable } from "react-table";
import { Link } from "react-router-dom";

import "./Orders.css";
const Order = () => {
  const data = React.useMemo(() => fakeData, []);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const offset = currentPage * itemsPerPage;

  const slicedData = data.slice(offset, offset + itemsPerPage);

  const columns = React.useMemo(
    () => [
      {
        Header: "Restaurant Name",
        accessor: "restaurant",
        Cell: ({ cell: { value } }) => {
          return value;
        },
      },
      {
        Header: "Order Items",
        accessor: "orderItems",
        Cell: ({ cell: { value } }) => {
          console.log(value);
          return value;
        },
      },
      {
        Header: "Num of Items",
        accessor: "numOfItems",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Order Date",
        accessor: "orderDate",
      },

      {
        Header: "Actions",
        accessor: "actions",
        Cell: () => {
          return (
            <Link to={`/orders/ordersdetails`} className="btn btn-primary">
              <i className="fa fa-eye"></i>
            </Link>
          );
        },
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows, // Use 'page' instead of 'rows' for pagination
    prepareRow,
  } = useTable({
    columns,
    data: slicedData,
  });

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="main_container">
        <div className="order_container">
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="pagination-controls">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <span className="page-number">Page {currentPage + 1}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={offset + itemsPerPage >= data.length}
        >
          Next
        </button>
      </div>
      <div></div>
    </>
  );
};

export default Order;
