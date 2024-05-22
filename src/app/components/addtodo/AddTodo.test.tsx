/* eslint-disable testing-library/no-unnecessary-act */
import { useMutation } from '@tanstack/react-query';
import { act, render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { AddTodo } from './AddTodo';

jest.mock('@tanstack/react-query');

const TODO_TITLE = 'test todo';
const mutationMock = { mutate: jest.fn() };

beforeEach(() => {
  (useMutation as jest.Mock).mockReturnValue(mutationMock);
});

describe('AddTodo', () => {
  it('renders input for todo title and button for adding todo', () => {
    // WHEN
    render(<AddTodo />);

    // THEN
    const todoTitleInput = screen.getByLabelText(/Add new todo/i);
    const addTodoButton = screen.getByRole('button', {
      name: /Add todo/i
    });

    expect(todoTitleInput).toBeInTheDocument();
    expect(addTodoButton).toBeInTheDocument();
  });

  it('adds todo', () => {
    // GIVEN
    render(<AddTodo />);
    const todoTitleInput = screen.getByLabelText(/Add new todo/i);
    act(() => user.type(todoTitleInput, TODO_TITLE));

    // WHEN
    const addTodoButton = screen.getByRole('button', {
      name: /Add todo/i
    });

    act(() => user.click(addTodoButton));

    // THEN
    expect(mutationMock.mutate).toHaveBeenCalledWith(TODO_TITLE);
  });

  it('does not add todo when todo title is empty', () => {
    // GIVEN
    render(<AddTodo />);

    // WHEN
    const addTodoButton = screen.getByRole('button', {
      name: /Add todo/i
    });

    act(() => user.click(addTodoButton));

    // THEN
    expect(mutationMock.mutate).not.toHaveBeenCalled();
  });
});
