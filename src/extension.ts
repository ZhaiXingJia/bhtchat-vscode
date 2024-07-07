import * as vscode from 'vscode';
import { ChatViewProvider } from './views/ChatViewProvider';

// 扩展激活时，会调用此方法
export function activate(context: vscode.ExtensionContext) {
	// 注册Webview视图扩展
	registerWebviewViewExtension(context);
}

// 扩展被停用时，会调用此方法
export function deactivate() {}

// 注册Webview视图扩展
function registerWebviewViewExtension(context: vscode.ExtensionContext) {
	// 实例化聊天视图
	const provider = new ChatViewProvider(context);
	// 注册聊天视图
	const chatView = vscode.window.registerWebviewViewProvider(
		ChatViewProvider.viewId, 
		provider, 
		{ webviewOptions: { retainContextWhenHidden: true }	}
	);
	// 订阅
	context.subscriptions.push(
		chatView
	);
}
