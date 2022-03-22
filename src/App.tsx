import React, { useEffect } from 'react';
import './App.css';
import { useGetCountryByIP } from './hooks/useGetCountry';
import { routes } from './router/config';
import Router from './router/Router';
import { useAppSelector } from './store';
import { selectCountry } from './store/user/userSelector';

function App() {
  const getCountry = useGetCountryByIP();
  const countryName = useAppSelector(selectCountry);
  useEffect(() => {
    if (countryName) return;
    getCountry();
  }, [getCountry]);
  return (
    <div className="App varient">
      <Router routes={routes} />
    </div>
  );
}

export default App;
