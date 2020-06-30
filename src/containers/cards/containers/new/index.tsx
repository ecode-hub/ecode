import React, { useState } from 'react';
import { Markdown } from '@components';
import { Button } from 'antd';
import { Avatar } from '@components/avatar';

import './index.scss';

function New() {
  const [title, setTitle] = useState('');
  const [data, setData] = useState('');
  
  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onDataChange = (event) => {
    setData(event.target.value);
  };
  
  const onPublish = () => {
    console.log('publish');
  };

  return (
    <div className='markdown-editor'>
      <div className='editor-header'>
        <input 
          type='text' 
          value={title}
          className='title'
          placeholder='输入答题卡标题...'
          onChange={onTitleChange}
        />
        {/* <div className='empty'></div> */}
        <Button type='primary' onClick={onPublish}>
          发布
        </Button>
        <Avatar/>
      </div>
      <div className='editor-container'>
        <div className='textarea'>
          <textarea value={data} onChange={onDataChange}></textarea>
        </div>
        <div className='markdown-container'>
          <Markdown data={data}/>
        </div>
      </div>
      
    </div>
  );
}

export default New;