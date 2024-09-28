import React from 'react';

type Props = {
  framework: string;
};

const Frameworks: React.FC<Props> = ({ framework }) => {
  return (
    <div>
      <img src={`../../../assets/icons/${framework}.png`} alt="" />
      <h2>{framework}</h2>
    </div>
  );
};

export default Frameworks;