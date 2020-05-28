import * as React from 'react';

interface IState {
	hasError: boolean;
}

interface IProps {
	content: React.ReactElement;
}

class ErrorBoundary extends React.Component<IProps, IState> {
	state = { hasError: false };

	static getDerivedStateFromError() {
  	// 更新 state 使下一次渲染能够显示降级后的 UI
  	return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
  	// TODO: 将错误日志上报给服务器
  	console.error('组件奔溃 Error: %o', error);
  	console.error('组件奔溃 Info: %o', errorInfo);
	}

	render() {
  	if (this.state.hasError) {
  		//降级后的 UI 并渲染
  		return this.props.content;
  	}
  	return this.props.children;
	}
}

export { ErrorBoundary };
