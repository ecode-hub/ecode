import React from 'react';
import MarkdownIt from 'markdown-it';
import { SafeContainer } from '@components';
import './index.scss';

interface IProps {
  data: string;
}

const { useEffect, useRef } = React;

/**
 * 为了防止 xss 攻击，目前 markdown 编辑器禁止解析 html
 */
function Markdown(props: IProps) {
  const { data } = props;
  const ref = useRef(null);

  useEffect(() => {
    const md = new MarkdownIt();
    const result = md.render(data);
    ref.current.innerHTML = result;
  }, [data]);

  throw '123';

  return (

    <div id='markdown-container' ref={ref}>markdown</div>

  );
}

export {
  Markdown
};