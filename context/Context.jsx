import { useReducer, createContext } from 'react';

const initialState = {
	user: {},
	offline: false,
};

const Context = createContext({});

const combineReducers = (...reducers) => (state, action) => {
	for (let i = 0; i < reducers.length; i += 1) {
		state = reducers[i](state, action);
	}
	return state;
};

const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(combineReducers(/* put reducers here */), initialState);
	const value = { state, dispatch };
	return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
