import { useState } from "react";
import Papa from "papaparse";

function CSVTable() {
  const [data, setData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (results) => {
        setData(results.data.slice(8));
      },
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <table>
        <thead>
          <tr>
            {data.length > 0 &&
              Object.keys(data[0]).slice(11).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).slice(2,4).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CSVTable;
