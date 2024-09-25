import React, { useState } from 'react';
import ItemList from './Itemlist';
import AddItemForm from './AddItemForm';

const App = () => {
  const [items, setItems] = useState (['Phone', 'Laptop', 'Orange' , 'Melon']);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h1>Hello word!</h1>
      <h1>My Item List:</h1>
      <ItemList items={items} />
      <AddItemForm onAddItem={addItem} /> {/* addform */}
    </div>
  );
};

export default App;