import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe("Task Manager",() => {
  
    test('renders App Header', () => {
      render(<App />);
      const headerTitle = screen.getByText(/Task Manager/i);
      expect(headerTitle).toBeInTheDocument();
    });
  
    test('renders default tasks', () => {
      render(<App />);
      const defaultTaskDescription = screen.getByText(/Doctor appointment/i);
      expect(defaultTaskDescription).toBeInTheDocument();
    });
  
    test('remove Task when delete button is clicked', () => {
      render(<App />);
      fireEvent.click(screen.getByTestId('task-1-delete'))
      const defaultTaskDescription = screen.queryByText('Doctor appointment');
      expect(defaultTaskDescription).not.toBeInTheDocument();
    });
  
    test('render add Task form when add button is clicked', () => {
      render(<App />);
      fireEvent.click(screen.getByTestId('AddBtn'))
      const addTaskForm = screen.getByTestId('add-task-form');
      expect(addTaskForm).toBeInTheDocument();
    });
  
    test('closes add Task form when close button is clicked', () => {
      render(<App />);
      fireEvent.click(screen.getByTestId('AddBtn'))
      fireEvent.click(screen.getByTestId('CloseBtn'));
      const addFormText = screen.queryByText('Add Your task here');
      expect(addFormText).not.toBeInTheDocument();
    });
  
  })
