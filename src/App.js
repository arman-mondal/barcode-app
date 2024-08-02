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
     <h1>{format}</h1>
     <select value={format} onChange={(a)=>setformat(a.target.value)} >
        <option value="CODE128" >CODE128</option>
        <option value="CODE128A" >CODE128A</option>
        <option value="CODE128B" >CODE128B</option>
        <option value="CODE128C" onClick={()=>setformat("CODE128C")}>CODE128C</option>

        <option value="CODE39" >CODE39</option>
        <option value="EAN13" >EAN13</option>
        <option value="EAN8" >EAN8</option>
        <option value="UPC" >UPC</option>
        <option value="ITF14">ITF14</option>
        <option value="ITF" >ITF</option>
        <option value="MSI" >MSI</option>
        <option value="MSI10">MSI10</option>
        <option value="MSI11" >MSI11</option>
        <option value="MSI1010" >MSI1010</option>
        <option value="MSI1110">MSI1110</option>
        
     </select>
    </div>
  );
}

export default App;
