import React, { useEffect, useRef, useState } from 'react';
import { UserWarning } from './UserWarning';
import {
  addTodos,
  deleteTodo,
  getTodos,
  patchTodos,
  USER_ID,
} from './api/todos';
import { Todo } from './types/Todo';
import { TodoList } from './components/TodoList';
import { FormTodo } from './components/FormTodo';
import { FooterTodos } from './components/FooterTodos';
import { ErrorTodos } from './components/ErrorTodos';
import { Filter } from './types/Filter';

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState('');
  const [filterSelect, setFilterSelected] = useState<Filter>(Filter.All);
  const [isDisabledInput, setIsDisabledInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getTodos()
      .then(setTodos)
      .catch(() => {
        setError('Unable to load todos');
      });
  }, []);

  const filteredTodos = todos.filter(todo => {
    if (filterSelect === Filter.Active) {
      return !todo.completed;
    }

    if (filterSelect === Filter.Completed) {
      return todo.completed;
    }

    return true;
  });

  const postTodos = async (title: string) => {
    const trimmedTitle = title.trim();

    if (trimmedTitle.length === 0) {
      setError('Title should not be empty');
      inputRef.current?.focus();

      return;
    }

    setIsDisabledInput(true);

    const tempId = Date.now();

    const tempTodo: Todo = {
      id: tempId,
      userId: 3177,
      title: trimmedTitle,
      completed: false,
    };

    setTodos(prev => [...prev, tempTodo]);

    try {
      const newTodo = await addTodos({
        title: trimmedTitle,
        completed: false,
        userId: 3177,
      });

      setTodos(prev => prev.map(todo => (todo.id === tempId ? newTodo : todo)));
      setSearchTerm('');
    } catch {
      setError('Unable to add a todo');
      setTodos(prev => prev.filter(todo => todo.id !== tempId));
      throw new Error('Unable to add a todo');
    } finally {
      setIsDisabledInput(false);

      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  };

  const removeTodos = (todoId: number) => {
    return deleteTodo(todoId)
      .then(() => {
        setTodos(prev => prev.filter(todo => todo.id !== todoId));
        inputRef.current?.focus();
      })
      .catch(() => {
        setError('Unable to delete a todo');
        throw new Error('Unable to delete a todo');
      });
  };

  const changeTodo = (todoId: number, title: string, completed: boolean) => {
    return patchTodos({ id: todoId, title, completed, userId: 3177 })
      .then(() => {
        setTodos(prev =>
          prev.map(todo =>
            todo.id === todoId ? { ...todo, title, completed } : todo,
          ),
        );
      })
      .catch(() => {
        setError('Unable to update a todo');
        throw new Error('Unable to update a todo');
      });
  };

  const changeComplite = () => {
    const isAllCompleted = todos.every(todo => todo.completed);
    const updatedTodos = todos.map(todo => ({
      ...todo,
      completed: !isAllCompleted,
    }));

    setTodos(updatedTodos);

    const todosToUpdate = todos.filter(
      todo => todo.completed === isAllCompleted,
    );

    Promise.all(
      todosToUpdate.map(todo =>
        patchTodos({ ...todo, completed: !isAllCompleted }),
      ),
    )
      .then(() => getTodos())
      .then(setTodos)
      .catch(() => {
        setError('Unable to update todos');
      });
  };

  const filter = (type: Filter) => {
    setFilterSelected(type);
  };

  const clearCompleted = () => {
    const completedTodos = todos.filter(todo => todo.completed);

    Promise.allSettled(completedTodos.map(todo => deleteTodo(todo.id)))
      .then(results => {
        const failedTodos = completedTodos.filter(
          (todo, index) => results[index].status === 'rejected',
        );

        setTodos(prevTodos =>
          prevTodos.filter(todo => {
            if (!todo.completed) {
              return true;
            }

            return failedTodos.some(failed => failed.id === todo.id);
          }),
        );

        inputRef.current?.focus();

        if (failedTodos.length > 0) {
          setError('Unable to delete a todo');
        }
      })
      .catch(() => {
        setError('Unexpected error');
      });
  };

  const clearError = () => {
    setError('');
  };

  if (!USER_ID) {
    return <UserWarning />;
  }

  return (
    <div className="todoapp">
      <h1 className="todoapp__title">todos</h1>

      <div className="todoapp__content">
        <FormTodo
          postTodos={postTodos}
          changeComplite={changeComplite}
          todos={todos}
          isDisabledInput={isDisabledInput}
          inputRef={inputRef}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {todos.length > 0 && (
          <TodoList
            todos={filteredTodos}
            deleteTodo={removeTodos}
            changeTodo={changeTodo}
          />
        )}

        {todos.length > 0 && (
          <FooterTodos
            todos={todos}
            filter={filter}
            clearCompleted={clearCompleted}
            selected={filterSelect}
          />
        )}
      </div>

      <ErrorTodos error={error} clearError={clearError} />
    </div>
  );
};
