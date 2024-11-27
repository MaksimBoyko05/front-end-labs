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
  }
}
export default NumberList;