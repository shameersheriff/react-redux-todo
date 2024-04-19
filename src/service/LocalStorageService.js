
export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return undefined; // Let Redux initialize the state.
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined; // Let Redux initialize the state on error.
    }
  };
  
  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch (err) {
      // Handle write errors here.
      console.error("Could not save state to local storage:", err);
    }
  };
  