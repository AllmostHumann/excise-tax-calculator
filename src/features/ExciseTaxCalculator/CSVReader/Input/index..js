import { useState } from "react";
import Papa from "papaparse";
import MyTable from "../Table";
import { Input } from "./styled";

function CSVTable() {
  const [data, setData] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    Papa.parse(file, {
      header: false,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  };

  return (
    <>
      <Input type="file" onChange={handleFileUpload} />
      <div>{data && <MyTable data={data} />}</div>
    </>
  );
}

export default CSVTable;
