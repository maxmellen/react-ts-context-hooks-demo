import React, { ComponentType, ReactNode } from 'react';
import { Context, createContext } from 'react';
import { Dispatch, SetStateAction, useState } from 'react';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

interface State {
  count: number;
}

const defaultState: State = { count: 0 };

export interface StateProps {
  state: State;
  setState: Dispatch<SetStateAction<State>>;
}

const StateContext = (createContext(null) as unknown) as Context<StateProps>;

interface StateProviderProps {
  initialState?: State;
  children?: ReactNode;
}

export function StateProvider({
  initialState = defaultState,
  children
}: StateProviderProps) {
  const [state, setState] = useState(initialState);

  return (
    <StateContext.Provider value={{ state, setState }}>
      {children}
    </StateContext.Provider>
  );
}

type OwnProps<P> = Omit<P, keyof StateProps>;

export function withState<P>(Component: ComponentType<P>) {
  return function(ownProps: OwnProps<P>) {
    return (
      <StateContext.Consumer>
        {stateProps => {
          // TypeScript does not infer that
          // `StateProps & Omit<P, keyof StateProps>` is equivalent to `P`.
          const props = ({ ...ownProps, ...stateProps } as unknown) as P;
          return <Component {...props} />;
        }}
      </StateContext.Consumer>
    );
  };
}
