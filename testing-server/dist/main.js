"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const PORT = process.env.PORT || "8000";
const fetchItemsListByUserid = (userid) => __awaiter(void 0, void 0, void 0, function* () {
    const data = [
        {
            name: "bamba"
        },
        {
            name: "cola",
            description: "it's good"
        }
    ];
    return data;
});
app.get('/listItems/:userid', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userid = req.params.id;
    const data = yield fetchItemsListByUserid(userid);
    res.json(data);
}));
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
//# sourceMappingURL=main.js.map