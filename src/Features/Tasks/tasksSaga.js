import { takeEvery, select, call } from "redux-saga/effects";
import { selectTasks } from "./tasksSlice";

const saveTasksInLocalStorage = (tasks) =>
    localStorage.setItem("tasks", JSON.stringify(tasks));

function* saveTasksHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeEvery("*", saveTasksHandler);
}