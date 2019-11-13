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
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_gen_1 = require("./uuid-gen");
const bcrypt = require("bcryptjs");
exports.generateUrl = (protocol = '', host = '', port = '') => __awaiter(void 0, void 0, void 0, function* () {
    protocol = protocol || 'http';
    host = host || 'localhost';
    port = port || '3800';
    const id = uuid_gen_1.UuidGenerator.generateId();
    const salt = yield bcrypt.genSalt(10);
    const criptedUrl = yield bcrypt.hash(id, salt);
    const buff = Buffer.from(criptedUrl);
    const base64Url = buff.toString('base64');
    return `${protocol}://${host}:${port}/${base64Url}`;
});
//# sourceMappingURL=url-gen.js.map