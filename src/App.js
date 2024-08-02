import logo from './logo.svg';
import './App.css';
import Barcode from 'react-barcode';
import { useState } from 'react';
function App() {
  const [format,setformat]=useState("CODE128");
  return (
    <div className="App">
      <div>
      <Barcode value="240726001" format={'CODE39'}   />
<h1>Code 39</h1>
      </div>
      <div>
      <Barcode value="240726001" format={'CODE128A'}   />
<h1>Code 128A</h1>
      </div>
      <div>
      <Barcode value="240726001" format={'CODE128B'}   />
<h1>Code 128B</h1>
      </div>     <div>
      <Barcode value="240726001" format={'CODE128C'}   />
<h1>Code 128C</h1>
      </div> 
      <div>
      <Barcode value="240726001"  format='CODE128'   />
<h1>`128` </h1>
      </div>
      <div>
      <Barcode value="240726001" ean128 format='CODE128'   />
<h1>`128` EAN128</h1>
      </div>
    
    </div>
  );
}

export default App;
