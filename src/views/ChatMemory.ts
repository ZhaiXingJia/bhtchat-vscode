import { ExtensionContext } from "vscode";

export class SessionItem {

}

export class SessionStore {
    constructor(private readonly _extensionContext: ExtensionContext) {
        const keys = this._extensionContext.globalState.keys();
        for (const key of keys) {
            const value = this._extensionContext.globalState.get(key);
            console.log(key, value);
        }
    }
}