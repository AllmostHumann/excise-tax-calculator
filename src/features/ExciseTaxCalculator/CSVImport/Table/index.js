import { useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

const AgGrid = ({ rowData }) => {
  const [columnDefs] = useState([
    { headerName: "Lp.", field: "0" , width: 100},
    { headerName: "Nazwa", field: "1" , width: 400},
    { headerName: "Ilość", field: "2" , width: 100},
  ]);

  const defaultColDef = useMemo(() => {
    return {
      resizable: true,
      filter: true,
      editable: true,
    };
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ width: 1000, height: 1000 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        animateRows={true}
        rowSelection="multiple"
      />
    </div>
  );
};

export default AgGrid;
