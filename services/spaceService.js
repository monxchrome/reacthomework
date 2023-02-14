"use strict";
exports.__esModule = true;
exports.spaceService = void 0;
var apiService_1 = require("./apiService");
var spaceService = {
    getAll: function () { return apiService_1.apiService.get('/launches'); }
};
exports.spaceService = spaceService;
