"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HealtController {
    constructor() {
        this.info = (_req, res) => {
            res.json({
                name: process.env.npm_package_name,
                version: process.env.npm_package_version,
                description: process.env.npm_package_description
            });
        };
        this.ping = (_req, res) => {
            res.send('pong');
        };
    }
}
exports.default = HealtController;
