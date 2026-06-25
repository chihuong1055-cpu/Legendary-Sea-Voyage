import React, { useState } from 'react';

const HeroGacha = () => {
  const [rolls, setRolls] = useState(0);

  return (
    <div style={{ padding: '20px', color: '#fff' }}>
      <h1>Hero Gacha</h1>
      <p>Rolls: {rolls}</p>
      <button onClick={() => setRolls(rolls + 1)}>Single Pull</button>
    </div>
  );
};

export default HeroGacha;
