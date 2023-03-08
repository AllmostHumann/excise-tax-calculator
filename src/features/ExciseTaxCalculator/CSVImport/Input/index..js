import { useState } from "react";
import { Input } from "./styled";
import Papa from "papaparse";
import AgGrid from "../Table";

const CSVImport = () => {
  const [rowData, setRowData] = useState([]);

  const handleFileUpload = ({ target }) => {
    const file = target.files[0];

    Papa.parse(file, {
      header: false,
      dynamicTyping: false,
      skipEmptyLines: true,
      complete: (results) => {
        const parsedData = results.data
          .map((row) => {
            return [row[0], row[2], row[3]];
          })
          .slice(10, -3);
        setRowData(parsedData);
        console.log(parsedData);
      },
    });
  };

  return (
    <>
      <Input type="file" onChange={handleFileUpload} />
      <AgGrid rowData={rowData} />
    </>
  );
};

export default CSVImport;
