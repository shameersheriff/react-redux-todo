import { createStore } from 'redux';
import { loadState, saveState } from './service/LocalStorageService';

const initialState = {
  todos: []
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'REMOVE_TODO':
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
    default:
      return state;
  }
}

const persistedState = loadState();

const store = createStore(todoReducer, persistedState);

store.subscribe(() => {
  saveState({
    todos: store.getState().todos
  });
});

export default store;
