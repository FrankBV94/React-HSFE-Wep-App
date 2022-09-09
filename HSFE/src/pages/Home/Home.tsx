import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { People } from "@/data/people";
/**
 * TODO: Terminar tabla
 */
export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const pageSize = 5;
  const colums = [
    {}
  ]
  return (
    <div>
      <DataGrid
        disableColumnSelector
        disableSelectionOnClick
        autoHeight
        pageSize={pageSize}
        rowsPerPageOptions={[pageSize]}
        rows={People}
      />
    </div>
  );
};

export default Home;
