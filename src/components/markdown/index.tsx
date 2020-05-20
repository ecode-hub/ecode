import React, { useEffect, useRef } from 'react';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import './index.scss';

interface IProps {
  data: string;
}

const md = new MarkdownIt();
const markdown = new MarkdownIt({
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${hljs.highlight(lang, str, true).value}</code></pre>`;
      } catch (e) {
        console.warn('highlight.js render error', e);
      }
    }
    return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`;
  }
});

/**
 * 为了防止 xss 攻击，目前 markdown 编辑器禁止解析 html
 */
function Markdown(props: IProps) {
  const { data } = props;
  const ref = useRef(null);

  useEffect(() => {
    const result = markdown.render(data);
    ref.current.innerHTML = result;
  }, [data]);

  return (
    <div ref={ref}></div>
  );
}

export {
  Markdown
};