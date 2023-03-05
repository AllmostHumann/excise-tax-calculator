import { useMemo, useState } from "react";
import { useTable } from "react-table";

const MyTable = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        Header: "Lp.",
        accessor: "0",
      },
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

  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  const [showAllRows, setShowAllRows] = useState(false);
  const visibleRows = showAllRows ? rows : rows.slice(10, -3);

  const toggleRows = () => {
    setShowAllRows((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={toggleRows}>
        {showAllRows ? "Ukryj zbędne wiersze" : "Pokaż wszystkie wiersze"}
      </button>
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
          {visibleRows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps({ id: row.id })}>
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
