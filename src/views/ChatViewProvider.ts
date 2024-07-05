import * as vscode from "vscode";
import { SessionStore, SessionItem } from "./ChatMemory";

export class ChatViewProvider implements vscode.WebviewViewProvider {
	public static readonly viewId = "bhtchat.chatView";
	private _view?: vscode.WebviewView;
	private _extensionUri: vscode.Uri;

	private sessionStore: SessionStore;
	private sessionItem: SessionItem = new SessionItem();
	constructor(private readonly _extensionContext: vscode.ExtensionContext) {
		this._extensionUri = _extensionContext.extensionUri;
		this.sessionStore = new SessionStore(_extensionContext);
	}

    public resolveWebviewView(webviewView: vscode.WebviewView, _context: vscode.WebviewViewResolveContext, _token: vscode.CancellationToken) {
        this._view = webviewView;

        // 设置webview的选项，允许脚本
        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [
                this._extensionUri
            ]
        };

        // 设置webview的HTML
        webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

        // 为webview接收到的消息添加事件侦听器
        webviewView.webview.onDidReceiveMessage(async (data) => {
            // switch (data.type) {
            // }
        });
    }

    private _getHtmlForWebview(webview: vscode.Webview): string {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                html, body {
                    height: 100%;
                }
                #app {
                    height: 100%;
                }
            </style>
        </head>
        <body>
            <div id="app">
                <a href="https://testaizhishiku.bhuitong.com/AI/inside?ZhiShiKuKey=e9aea574-73af-47b1-baed-26998b8a1937&ZhiShiKuName=XJ%E9%97%AE%E7%AD%94%E5%BA%93&corpid=wpfG_gBwAAjrdsNU6BFwIS3Iz-p5xPSw" target="_blank">打开AI助手</a>
            </div>
        </body>
        </html>`;
    }

}