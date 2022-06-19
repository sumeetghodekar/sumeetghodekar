import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import Card from './Cards';
import Sdata from './Sdata';
const root = ReactDOM.createRoot(document.getElementById('root'));

function ncard(val)
{
  return(
    <Card
      imgsrc={val.imgscr}
      title={val.title}
      sname={val.sname}
      link={val.links}
    />
  )
}

root.render(
  <React.StrictMode>
    <h1 className="heading_style">Highly Rated Movies, You should not MISS OUT this </h1>
   {Sdata.map(ncard)}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
