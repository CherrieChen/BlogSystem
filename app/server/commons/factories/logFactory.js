'use strict';

const fs = require('fs');
const log4js = require('log4js');

const SERVER_CONFIG = require('../../../config/server');
const JSON_PATH = SERVER_CONFIG.public.CONF_DIR + '/log4js.json';
const LOG_DIR = SERVER_CONFIG.public.LOGS_DIR;

class Log {
	constructor() {
		//加载log4js配置
		if(!fs.existsSync(LOG_DIR)) {
			fs.mkdirSync(LOG_DIR);
		}
		this._defaults = {};
		log4js.configure(JSON_PATH);
	}

	getLogger(name) {
		let _default = this._defaults;
		if(!name) {
			return this;
		}else{
			let logger = _default[name];
			if(!logger) {
				logger = log4js.getLogger(name);
			}
			return logger;
		}
	}

	connectLogger(name) {
		return log4js.connectLogger(this.getLogger(name), { level: 'auto'/*, format: ':method :url :status'*/ });
	}
}

var instance = new Log();
module.exports = instance;