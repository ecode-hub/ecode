import React, { useEffect } from 'react';
import {
  Header,
  HeaderWraper
} from '@components';
import SimpleMDE from 'simplemde';
import 'simplemde/dist/simplemde.min.css';
import './index.scss';

function Edit() {
  useEffect(()=>{
    let simplemde = new SimpleMDE({ element: document.getElementById('MyID') });
  }, []);
  return (
    <HeaderWraper>
      <Header />
      <textarea id='MyID' />
      <div>edit</div>
    </HeaderWraper>
  );
}

export default Edit;