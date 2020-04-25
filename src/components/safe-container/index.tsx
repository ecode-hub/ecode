import * as React from 'react';
import { Result } from 'antd';
import { ErrorBoundary } from '@components/error-boundary';

interface IProps {
  message?: JSX.Element | string;
}

function SafeContainer(props: React.PropsWithChildren<IProps>) {
  const defultMsg = (
    <span>您可以尝试刷新以解决故障。</span>
  );
  const fallbackContent = (
    <Result status='warning' subTitle='出了点小故障'>
      <div style={{ textAlign: 'center' }}>
        {props.message ? props.message : defultMsg}
      </div>
    </Result>
  );
  return (
    <ErrorBoundary content={fallbackContent}>
      {props.children}
    </ErrorBoundary>
  );
}

export {
  SafeContainer
};
