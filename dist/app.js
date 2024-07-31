"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const middlewares_1 = require("./middlewares");
const app = (0, express_1.default)();
const port = 3000;
app.use(middlewares_1.addTimestamp);
app.use(middlewares_1.logger);
app.use('/health', routes_1.healthRouter);
app.use('/calculator', routes_1.calculatorRouter);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map