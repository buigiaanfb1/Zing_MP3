import React from 'react';
import { testImage } from '../../common/handleParseFile';

const Test = () => {
  const handleChange = (e) => {
    testImage(e.target.files);
  };
  return (
    <div style={{ marginTop: '100px' }}>
      <input type="file" onChange={handleChange} />
      <img alt="" id="cover" />
    </div>
  );
};

export default Test;
