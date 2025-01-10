import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../actionTypes/actionTypes"
// action for adding task
export const addtask = (newTask) => {
    return {
        type: ADD_TASK,
        payload: newTask,
    }
}
// action for delete atsk
export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id,
    }
}
// action for editing
export const editTask = (id, titleEdited) => {
    return {
        type: EDIT_TASK,
        payload:{id,titleEdited}
    }
}
// action dor done task
export const doneTask = (id) => {
    return {
        type: DONE_TASK,
        payload:id
    }
}