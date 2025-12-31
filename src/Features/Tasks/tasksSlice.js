import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: JSON.parse(localStorage.getItem("tasks")) || [],
        hideDone: false,
        loading: false,
    },

    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            if (index !== -1) {
                tasks.splice(index, 1);
            }
        },
        setAllDone: ({ tasks }) => {
            tasks.forEach(task => { task.done = true; });
        },
        fetchExampleTasks: (state) => {
            state.loading = true;
        },
        fetchExampleTasksSuccess: (state, { payload: tasks }) => {
            const tasksWithUniqueIds = tasks.map(task => ({
                ...task,
                id: nanoid(),
            }));

            state.tasks = [...state.tasks, ...tasksWithUniqueIds];
            state.loading = false;
        },
        fetchExampleTasksError: (state) => {
            state.loading = false;
        },
    },
});

export const {
    addTask, toggleHideDone, toggleTaskDone, removeTask,
    setAllDone, fetchExampleTasks, fetchExampleTasksSuccess, fetchExampleTasksError
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectLoading = state => selectTasksState(state).loading;

export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id == taskId);

export default tasksSlice.reducer;