import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
theme: 'light',
favorites: JSON.parse(localStorage.getItem('favorites')) || [],
dentists: [],
};

const appReducer = (state, action) => {
switch (action.type) {
case 'TOGGLE_THEME':
return {
...state,
theme: state.theme === 'light' ? 'dark' : 'light',
};
case 'SET_DENTISTS':
return {
...state,
dentists: action.payload,
};
case 'ADD_FAVORITE':
const updatedFavorites = [...state.favorites, action.payload];
localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
return {
...state,
favorites: updatedFavorites,
};
case 'REMOVE_FAVORITE':
const filteredFavorites = state.favorites.filter(fav => fav.id !== action.payload);
localStorage.setItem('favorites', JSON.stringify(filteredFavorites));
return {
...state,
favorites: filteredFavorites,
};
default:
return state;
}
};

export const AppProvider = ({ children }) => {
const [state, dispatch] = useReducer(appReducer, initialState);

return (
<AppContext.Provider value={{ state, dispatch }}>
{children}
</AppContext.Provider>
);
};

export const useAppContext = () => useContext(AppContext);