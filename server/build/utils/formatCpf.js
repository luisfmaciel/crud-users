"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCpf = void 0;
function formatCpf(strCpf) {
    const cpf = strCpf.split(/[.-]/).join('');
    return cpf;
}
exports.formatCpf = formatCpf;
