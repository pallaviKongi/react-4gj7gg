import React, { useReducer, useEffect } from 'react';
import './style.css';
import reducer from './reducer.js';
import fetchData from './services.js';

export default function App() {
  const initialState = {
    loading: true,
    error: false,
    catDetails: []
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  useEffect(async () => {
    const result = await fetchData();
    console.log(result);
    dispatch({ type: 'FETCH_DATA', payload: result });
  }, []);

  return (
    <div className="grid-container">
      {state.catDetails.length
        ? state.catDetails.map(catInfo => (
            <div className="grid-child">
              <img class="cat-image" src={catInfo.url} alt="cat-image" />
            </div>
          ))
        : null}
    </div>
  );
}
