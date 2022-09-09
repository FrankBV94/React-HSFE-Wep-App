import React from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { People } from "@/data/people";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const pageSize = 5;
  const colums = [
    {
      field: "name",
      headerName: "Nombre",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Categoria",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Compañia",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "levelOfHappiness",
      headerName: "Nivel de felicidad",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];
  return (
      <DataGrid
        disableColumnSelector
        disableSelectionOnClick
        autoHeight
        pageSize={pageSize}
        rowsPerPageOptions={[pageSize]}
        rows={People}
        columns={colums}
        getRowId={(row: any) => row.id}
      />
  );
};

export default Home;
