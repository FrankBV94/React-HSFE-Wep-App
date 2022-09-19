import { localStorageTypes, Person } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

const initialSate: Person[] = [];

export const peopleSlice = createSlice({
  name: "people",
  initialState: getLocalStorage(localStorageTypes.PEOPLE)
    ? JSON.parse(getLocalStorage(localStorageTypes.PEOPLE) as string)
    : initialSate,
  reducers: {
    addpeople: (state, action) => {
      setLocalStorage(localStorageTypes.PEOPLE, state);
      return action.payload;
    },
  },
});
