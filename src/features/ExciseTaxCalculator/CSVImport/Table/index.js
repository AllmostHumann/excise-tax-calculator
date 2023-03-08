import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

const AgGrid = ({ rowData }) => {
  const columnDefs = [
    { headerName: "Lp.", field: "0", filter: true, editable: true },
    { headerName: "Nazwa", field: "1", filter: true, editable: true },
    { headerName: "Ilość", field: "2", filter: true, editable: true },
  ];

  return (
    <div className="ag-theme-alpine" style={{ width: 1000, height: 1000 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        animateRows={true}
        rowSelection="multiple"
      />
    </div>
  );
};

export default AgGrid;
