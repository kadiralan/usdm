"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[220],{

/***/ 7220:
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.a(__webpack_module__, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenContract: function() { return /* binding */ TokenContract; }
/* harmony export */ });
/* harmony import */ var o1js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9466);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([o1js__WEBPACK_IMPORTED_MODULE_0__]);
o1js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

class TokenContract extends o1js__WEBPACK_IMPORTED_MODULE_0__/* .SmartContract */ .C3 {
    constructor() {
        super(...arguments);
        this.totalAmountInCirculation = (0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .State */ .ZM)();
        this.mintNonce = (0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .State */ .ZM)();
    }
    deploy() {
        super.deploy();
        const permissionToEdit = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Permissions */ .Pl.proof();
        this.account.permissions.set({
            ...o1js__WEBPACK_IMPORTED_MODULE_0__/* .Permissions */ .Pl.default(),
            editState: permissionToEdit,
            setTokenSymbol: permissionToEdit,
            send: permissionToEdit,
            receive: permissionToEdit,
        });
    }
    init() {
        super.init();
        this.account.tokenSymbol.set("USDM");
        this.totalAmountInCirculation.set(o1js__WEBPACK_IMPORTED_MODULE_0__/* .UInt64 */ .zM.zero);
        this.mintNonce.set(o1js__WEBPACK_IMPORTED_MODULE_0__/* .UInt32 */ .xH.zero);
    }
    mint(receiverAddress, amount, adminSignature) {
        this.totalAmountInCirculation.assertEquals(this.totalAmountInCirculation.get());
        let totalAmountInCirculation = this.totalAmountInCirculation.get();
        this.mintNonce.assertEquals(this.mintNonce.get());
        let nonce = this.mintNonce.get();
        adminSignature
            .verify(this.address, amount.toFields().concat(...receiverAddress.toFields(), ...nonce.toFields()))
            .assertTrue();
        this.token.mint({
            address: receiverAddress,
            amount,
        });
        let newTotalAmountInCirculation = totalAmountInCirculation.add(amount);
        this.mintNonce.set(nonce.add(1));
        this.totalAmountInCirculation.set(newTotalAmountInCirculation);
    }
    burn(senderAddress, amount) {
        this.totalAmountInCirculation.assertEquals(this.totalAmountInCirculation.get());
        let totalAmountInCirculation = this.totalAmountInCirculation.get();
        this.token.burn({
            address: senderAddress,
            amount,
        });
        let newTotalAmountInCirculation = totalAmountInCirculation.sub(amount);
        this.totalAmountInCirculation.set(newTotalAmountInCirculation);
    }
    transfer(senderAddress, receiverAddress, amount) {
        const senderBalance = this.getBalance(senderAddress);
        senderBalance.assertGreaterThanOrEqual(amount, "Sender does not have enough balance");
        this.token.send({
            from: senderAddress,
            to: receiverAddress,
            amount,
        });
    }
    getBalance(address) {
        let accountUpdate = o1js__WEBPACK_IMPORTED_MODULE_0__/* .AccountUpdate */ .nx.create(address, this.token.id);
        let balance = accountUpdate.account.balance.get();
        return balance;
    }
}
__decorate([
    (0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .state */ .SB)(o1js__WEBPACK_IMPORTED_MODULE_0__/* .UInt64 */ .zM),
    __metadata("design:type", Object)
], TokenContract.prototype, "totalAmountInCirculation", void 0);
__decorate([
    (0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .state */ .SB)(o1js__WEBPACK_IMPORTED_MODULE_0__/* .UInt32 */ .xH),
    __metadata("design:type", Object)
], TokenContract.prototype, "mintNonce", void 0);
__decorate([
    o1js__WEBPACK_IMPORTED_MODULE_0__/* .method */ .UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [o1js__WEBPACK_IMPORTED_MODULE_0__/* .PublicKey */ .nh, o1js__WEBPACK_IMPORTED_MODULE_0__/* .UInt64 */ .zM, o1js__WEBPACK_IMPORTED_MODULE_0__/* .Signature */ .Pc]),
    __metadata("design:returntype", void 0)
], TokenContract.prototype, "mint", null);
__decorate([
    o1js__WEBPACK_IMPORTED_MODULE_0__/* .method */ .UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [o1js__WEBPACK_IMPORTED_MODULE_0__/* .PublicKey */ .nh, o1js__WEBPACK_IMPORTED_MODULE_0__/* .UInt64 */ .zM]),
    __metadata("design:returntype", void 0)
], TokenContract.prototype, "burn", null);
__decorate([
    o1js__WEBPACK_IMPORTED_MODULE_0__/* .method */ .UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [o1js__WEBPACK_IMPORTED_MODULE_0__/* .PublicKey */ .nh,
        o1js__WEBPACK_IMPORTED_MODULE_0__/* .PublicKey */ .nh,
        o1js__WEBPACK_IMPORTED_MODULE_0__/* .UInt64 */ .zM]),
    __metadata("design:returntype", void 0)
], TokenContract.prototype, "transfer", null);
__decorate([
    o1js__WEBPACK_IMPORTED_MODULE_0__/* .method */ .UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [o1js__WEBPACK_IMPORTED_MODULE_0__/* .PublicKey */ .nh]),
    __metadata("design:returntype", o1js__WEBPACK_IMPORTED_MODULE_0__/* .UInt64 */ .zM)
], TokenContract.prototype, "getBalance", null);
//# sourceMappingURL=TokenContract.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);