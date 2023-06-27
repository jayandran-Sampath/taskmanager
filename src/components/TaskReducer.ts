import { TaskModel } from "../model/TaskModel";

export enum TaskActionType {
    ADD = 'ADD',
    REMOVE = 'REMOVE',
    UPDATE_REMINDER = 'UPDATE_REMINDER',
}

interface TaskAction {
    type: TaskActionType;
    payload: TaskModel;
}

export interface TaskState {
    value: TaskModel[];
}

export const taskReducer = (state: TaskState, action: TaskAction) =>  {
    const { type, payload } = action;
    switch (type) {
        case TaskActionType.ADD:
            return {
                ...state,
                value: [...state.value, payload]
            };
        case TaskActionType.REMOVE:
            return {
                ...state,
                value: state.value.filter((t) => t.id !== payload.id)
            };
        case TaskActionType.UPDATE_REMINDER:
            return {
                ...state,
                value: state.value.map((t) => {
                    if (t.id === payload.id) {
                      t.reminder = payload.reminder
                    }
                    return t
                  })
            };
        default:
            return state;
    }
};