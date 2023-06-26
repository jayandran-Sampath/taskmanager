import { fireEvent, render, screen } from "@testing-library/react"
import { TaskForm } from "./TaskForm"
import { TaskModel } from "../model/TaskModel";

describe("Task", () => {

    test('can add Task', () => {
        const myMock = jest.fn();
        render(<TaskForm onSubmit={myMock} />)
        const taskDescription = screen.getByTestId('task-description');
        fireEvent.change(taskDescription, {target: {value: 'TaskDescription One'}})
        fireEvent.click(screen.getByTestId('submitBtn'))
        expect(myMock).toBeCalledTimes(1)
        expect(myMock).toBeCalledWith(expect.objectContaining({
            description : "TaskDescription One",
            day : new Date().toDateString(),
            reminder : false
        }))
    })
})