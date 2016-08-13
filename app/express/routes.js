//'use strict';
var express = require('express');
var route = express.Router();
var fs = require('fs');
var path = require('path');
var cfgUtil = require('./../server/commons/factories/configuration');
var serverCfg = cfgUtil.get('server');
var ROUTES_PATH = path.join(__dirname, '../server/routes');
var EXCLUDE_ROUTER_MODULE = serverCfg.router.EXCLUDE_MODULE || [];

(fs.readdirSync(ROUTES_PATH) || []).forEach(function (file) {
	var fileNameParser = path.parse(file);
	if(fileNameParser.ext === '.js') {
		if(EXCLUDE_ROUTER_MODULE.indexOf(fileNameParser.name) === -1) {
			require(path.join(ROUTES_PATH, file))(route);
		}
	}
});

module.exports = expressRouter;