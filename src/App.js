import React, { useState, useCallback, useMemo } from 'react';

// Онучий компонент
const GrandChild = React.memo(({ text }) => {
  console.log('GrandChild render');
  return (
    <div className="bg-gray-100 p-4 mt-4 rounded-lg">
      <p className="text-lg">Онучий компонент: {text}</p>
    </div>
  );
});

// Дочірній компонент
const Child = React.memo(({ onButtonClick, text }) => {
  console.log('Child render');
  return (
    <div className="bg-gray-200 p-4 mt-4 rounded-lg">
      <div className="space-y-4">
        <p className="text-lg">Дочірній компонент</p>
        <button 
          onClick={onButtonClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Натисни мене
        </button>
        <GrandChild text={text} />
      </div>
    </div>
  );
});

// Батьківський компонент
const Parent = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('Початковий текст');
  const [multiplier, setMultiplier] = useState(1);

  // useCallback для мемоізації функції
  const handleClick = useCallback(() => {
    console.log('Button clicked');
    setCounter(prev => prev + 1);
  }, []);

  // useMemo для обчислення значення
  const expensiveCalculation = useMemo(() => {
    console.log('Calculating...');
    return counter * multiplier * 100;
  }, [counter, multiplier]);

  return (
    <div className="p-6 max-w-md mx-auto">
      <div className="bg-gray-300 p-4 rounded-lg">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Батьківський компонент</h1>
          
          <div className="space-y-2">
            <p>Лічильник: {counter}</p>
            <p>Множник: {multiplier}</p>
            <p>Обчислене значення: {expensiveCalculation}</p>
          </div>

          <div className="space-x-2">
            <button 
              onClick={() => setMultiplier(prev => prev + 1)}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Збільшити множник
            </button>
            
            <button 
              onClick={() => setText(prev => prev + ' (оновлено)')}
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            >
              Змінити текст
            </button>
          </div>

          <Child 
            onButtonClick={handleClick}
            text={text}
          />
        </div>
      </div>
    </div>
  );
};

export default Parent;