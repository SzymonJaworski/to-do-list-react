import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import tasksReducer from './Features/Tasks/tasksSlice';
import { tasksSaga } from './Features/Tasks/tasksSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(tasksSaga);

export default store;