import React, { useState } from 'react';
import { Markdown } from '@components';
import { Button, message } from 'antd';
import { postCard } from '@services';
import { Avatar } from '@components/avatar';

import './index.scss';

function New() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  
  const onTitleChange = (event) => {
    setQuestion(event.target.value);
  };

  const onDataChange = (event) => {
    setAnswer(event.target.value);
  };
  
  const onPublish = () => {
    if(!question || !answer){
      message.warn('标题或内容不能为空');
      return;
    }
    postCard({ question, answer }).then(res=>{
      message.success(res.message);
    });
  };

  return (
    <div className='markdown-editor'>
      <div className='editor-header'>
        <input 
          type='text' 
          value={question}
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
          <textarea value={answer} onChange={onDataChange}></textarea>
        </div>
        <div className='markdown-container'>
          <Markdown data={answer}/>
        </div>
      </div>
      
    </div>
  );
}

export default New;