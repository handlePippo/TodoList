import { createSlice } from "@reduxjs/toolkit";

const initialState = { tasklist: [] };

const slice = createSlice({
  name: "tasklist", //tag azioni
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasklist = [
        ...state.tasklist,
        {
          deleted: false,
          task: action.payload,
        },
      ];
    },
    deleteTask: (state, action) => {
      state.tasklist = state.tasklist.map((el, index) => {
        if (index === action.payload) {
          return {
            ...el,
            deleted: true,
          };
        }
        return el;
      });
    },
    editTask: (state, action) => {
      state.tasklist = state.tasklist.map((el, index) => {
        const { editedTask, index: indexT } = action.payload;
        if (indexT === index) {
          return {
            ...el,
            task: editedTask,
          };
        }
        return el;
      });
    },
    restoreTask: (state, action) => {
      state.tasklist = state.tasklist.map((el, index) => {
        if (index === action.payload) {
          return {
            ...el,
            deleted: false,
          };
        }
        return el;
      });
    },
    finalizeDeleted: (state, action) => {
      state.tasklist = state.tasklist.filter((el) => !el.deleted);
    },
  },
});

export default slice.reducer;

// Actions

export const { addTask, deleteTask, finalizeDeleted, restoreTask, editTask } =
  slice.actions;
