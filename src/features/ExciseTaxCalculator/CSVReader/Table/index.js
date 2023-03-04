import { useMemo, useState } from "react";
import { useTable } from "react-table";

const MyTable = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        Header: "Nazwa piwa",
        accessor: "2",
      },
      {
        Header: "Ilość sprzedana",
        accessor: "3",
      },
    ],
    []
  );

  const [hiddenRows, setHiddenRows] = useState([]);

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  const visableRows = rows.filter((row) => !hiddenRows.includes(row.id));

  return (
    <div>
      <button onClick={() => setHiddenRows([])}>Show All Rows</button>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {visableRows.slice(10).map((row) => {
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
  );
};

export default MyTable;
