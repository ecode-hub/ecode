import React, { useEffect, useRef } from 'react';
import MarkdownIt from 'markdown-it';
import './index.scss';

interface IProps {
  data: string;
}

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

  return (
    <div ref={ref}></div>
  );
}

export {
  Markdown
};