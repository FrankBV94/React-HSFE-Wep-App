import React, { useState } from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { People } from "@/data/people";
import { Checkbox } from "@mui/material";
import { Person } from "../../models/index";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  const pageSize = 5;

  /**
   * "!!" transforma la resolucion de una exprecion en true/false
   * var x = !!(expression) o var x = Boolean(expression)
   */
  const findPerson = (person: Person) =>
    !!selectedPeople.find((p) => p.id === person.id);
  const filterPerson = (person: Person) =>
    selectedPeople.filter((p) => p.id !== person.id);

  /**
   * [... array]copiar los elementos de una matriz en particular en una nueva matriz sin afectar la matriz original
   * let arra1 = ["a", "b", "b"];
   * let arra2 = [...arra1];
   * console.log(arra2); // ["a","b","c"]
   */
  const handleChange = (person: Person) => {
    setSelectedPeople(
      findPerson(person) ? filterPerson(person) : [...selectedPeople, person]
    );
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
            <Checkbox
              size="small"
              checked={findPerson(params.row)}
              onChange={() => handleChange(params.row)}
            />
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
      rows={People}
      columns={colums}
      getRowId={(row: any) => row.id}
    />
  );
};

export default Home;
