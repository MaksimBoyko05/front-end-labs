import React, { useState } from 'react';
import _ from 'lodash';

const NumberList = () => {
  const generateRandomNumbers = () =>
    Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

  const [numbers, setNumbers] = useState(generateRandomNumbers());
  const [sortedNumbers, setSortedNumbers] = useState([]);
  const [average, setAverage] = useState(0);

  const calculateAverage = (nums) => {
    return nums.length ? _.mean(nums).toFixed(2) : 0;
  };

  const handleGenerate = () => {
    const newNumbers = generateRandomNumbers();
    setNumbers(newNumbers);
    setSortedNumbers([]);
    setAverage(calculateAverage(newNumbers));
  };

  const handleSort = () => {
    const sorted = _.sortBy(numbers);
    setSortedNumbers(sorted);
  };

  const handleFilterEven = () => {
    const filtered = _.filter(numbers, (num) => num % 2 === 0);
    setSortedNumbers(filtered);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <h2>Список випадкових чисел</h2>
      <p><strong>Початковий список:</strong> {numbers.join(', ')}</p>
      <p><strong>Оброблений список:</strong> {sortedNumbers.join(', ')}</p>
      <p><strong>Середнє значення:</strong> {average}</p>

      <button onClick={handleGenerate} style={{ marginRight: '10px' }}>
        Згенерувати новий список
      </button>
      <button onClick={handleSort} style={{ marginRight: '10px' }}>
        Сортувати
      </button>
      <button onClick={handleFilterEven}>
        Фільтрувати парні числа
      </button>
    </div>
  );
};

export default NumberList;
