"use strict";
exports.__esModule = true;
var spaceService_1 = require("./services/spaceService");
spaceService_1.spaceService.getAll().then(function (_a) {
    var data = _a.data;
    console.log(data[0].mission_name);
});
