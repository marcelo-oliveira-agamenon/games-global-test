import React from 'react';

const title: React.FC<{ title: string }> = ({ title }) => {
  return <h1 id="title">{title}</h1>;
};

export default title;
