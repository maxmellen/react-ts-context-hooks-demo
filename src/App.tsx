import React from 'react';
import './App.css';
import { StateProps, withState } from './appState';

function App({ state, setState }: StateProps) {
  const onClick = (_event: any) => {
    setState({ ...state, count: state.count + 1 });
  };

  return (
    <div className="App">
      <h1>Using Context &amp; Hooks to replace Redux in (TypeScript) React</h1>
      <p>Count: {state.count}</p>
      <p>
        <button {...{ onClick }}>Increment</button>
      </p>
    </div>
  );
}

export default withState(App);
