import * as React from 'react';

interface IProps {
	if: boolean;
	else?: JSX.Element;
}

function IfElse(props: IProps & React.PropsWithChildren<IProps>) {
  const { children } = props;
  const ifCondition = props.if;
  const elseElement = props.else;

  return ifCondition ? <>{children}</> : (elseElement || null);
}

export {
  IfElse
};