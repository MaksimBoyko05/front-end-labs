import React from 'react';
import DataList from './components/DataList';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="App">
      <h1>Data List</h1>
      <DataList />
      <Toaster />
    </div>
  );
}

export default App;