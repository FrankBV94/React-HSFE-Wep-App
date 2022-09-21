import { Person } from "@/models";
import { addFavorite, removeFavorite } from "@/redux/states";
import { AppStore } from "@/redux/store";
import { Checkbox, IconButton } from "@mui/material";
import { GridRenderCellParams, DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Remove from "@mui/icons-material/Remove";

export interface FavoriteTableInterface {}

const FavoriteTable: React.FC<FavoriteTableInterface> = () => {
  const pageSize = 5;
  const stateFavorites = useSelector((store: AppStore) => store.favorites);
  const dispatch = useDispatch();

  /**
   * [... array]copiar los elementos de una matriz en particular en una nueva matriz sin afectar la matriz original
   * let arra1 = ["a", "b", "b"];
   * let arra2 = [...arra1];
   * console.log(arra2); // ["a","b","c"]
   */
  const handleClick = (person: Person) => {
    dispatch(removeFavorite(person));
  };

  const colums = [
    {
      field: "actions",
      type: "actions",
      headerName: "",
      sortable: false,
      width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <IconButton
              color="error"
              aria-label="favorites"
              component="label"
              onClick={() => handleClick(params.row)}
            >
              <Remove />
            </IconButton>
          }
        </>
      ),
    },
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
      rows={stateFavorites}
      columns={colums}
      getRowId={(row: any) => row.id}
    />
  );
};

export default FavoriteTable;
