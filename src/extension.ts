import * as vscode from 'vscode';
import { ChatViewProvider } from './views/ChatViewProvider';

// 扩展激活时，会调用此方法
export function activate(context: vscode.ExtensionContext) {
	// 实例化聊天视图
	const provider = new ChatViewProvider(context);
	// 注册聊天视图
	const chatView = vscode.window.registerWebviewViewProvider(
		ChatViewProvider.viewId, 
		provider, 
		{ webviewOptions: { retainContextWhenHidden: true }	}
	);
	// 订阅聊天视图
	context.subscriptions.push(chatView);
	
	// context.subscriptions.push(
	// 	vscode.window.registerWebviewViewProvider('bhtchat.chatView', {
	// 		resolveWebviewView(webviewView: vscode.WebviewView, context: vscode.WebviewViewResolveContext, token: vscode.CancellationToken) {
	// 			const webview = webviewView.webview;
	// 			webview.options = { enableScripts: true };
	// 			webview.html = `<!DOCTYPE html>
	// 				<html lang="en">
	// 				<head>
	// 					<meta charset="UTF-8">
	// 					<meta name="viewport" content="width=device-width, initial-scale=1.0">
	// 					<title>Chat View</title>
	// 					<style>
	// 						html, body {
	// 							height: 100%;
	// 						}
	// 						#app {
	// 							height: 100%;
	// 						}
	// 					</style>
	// 				</head>
	// 				<body>
	// 					<div id="app">
	// 						<a href="https://testaizhishiku.bhuitong.com/AI/inside?ZhiShiKuKey=e9aea574-73af-47b1-baed-26998b8a1937&ZhiShiKuName=XJ%E9%97%AE%E7%AD%94%E5%BA%93&corpid=wpfG_gBwAAjrdsNU6BFwIS3Iz-p5xPSw" target="_blank">打开AI助手</a>
	// 					</div>
	// 				</body>
	// 				</html>`;
	// 		}
	// 	}, {
	// 		webviewOptions: { retainContextWhenHidden: true }
	// 	})
	// )
}

// 扩展被停用时，会调用此方法
export function deactivate() {}
