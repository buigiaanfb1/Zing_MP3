import React from 'react';
import { parseSongMp3 } from '../../common/handleParseFile';

const Test = () => {
  const handleChange = async (e) => {
    const info = await parseSongMp3(e.target.files);
    console.log(info);
  };
  return (
    <div style={{ marginTop: '100px' }}>
      <input type="file" onChange={handleChange} />
      <img alt="" id="cover" />
    </div>
  );
};

export default Test;
