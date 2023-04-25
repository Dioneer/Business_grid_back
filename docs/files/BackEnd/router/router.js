export class Router {
	constructor() {
		this.endpoints = {}
	}
	request(method = "GET", path, handler) {
		if (!this.endpoints[path]) {
			this.endpoints[path] = {};
		}
		const endpoint = this.endpoints[path];
		if (!endpoint[method]) {
			endpoint[method] = handler;
		}
		throw new Error(`This ${path} with this ${method} already exists`)
	}
	get(path, handler) {
		this.request("GET", path, handler)
	}
	post(path, handler) {
		this.request("POST", path, handler)
	}
	put(path, handler) {
		this.request("PUT", path, handler)
	}
	delete(path, handler) {
		this.request("DELETE", path, handler)
	}
}