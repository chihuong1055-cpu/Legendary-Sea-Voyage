import React, { useState } from 'react';

const Formation = () => {
  const [frontRow, setFrontRow] = useState(['', '', '']);
  const [backRow, setBackRow] = useState(['', '', '']);

  return (
    <div style={{ padding: '20px', color: '#fff' }}>
      <h1>Formation Setup</h1>
      <p>Front Row: {frontRow.length} slots</p>
      <p>Back Row: {backRow.length} slots</p>
    </div>
  );
};

export default Formation;
