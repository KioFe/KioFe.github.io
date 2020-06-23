"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanpham = void 0;
var sanpham = /** @class */ (function () {
    function sanpham(id, ten, gia, mota, tinhtrang, anh) {
        this.id = id;
        this.ten = ten;
        this.gia = gia;
        this.mota = mota;
        this.tinhtrang = tinhtrang;
        this.anh = anh;
    }
    Object.defineProperty(sanpham.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (v) {
            this._id = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(sanpham.prototype, "ten", {
        get: function () {
            return this._ten;
        },
        set: function (v) {
            this._ten = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(sanpham.prototype, "gia", {
        get: function () {
            return this._gia;
        },
        set: function (v) {
            this._gia = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(sanpham.prototype, "mota", {
        get: function () {
            return this._mota;
        },
        set: function (v) {
            this._mota = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(sanpham.prototype, "tinhtrang", {
        get: function () {
            return this._tinhtrang;
        },
        set: function (v) {
            this._tinhtrang = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(sanpham.prototype, "anh", {
        get: function () {
            return this._anh;
        },
        set: function (v) {
            this._anh = v;
        },
        enumerable: false,
        configurable: true
    });
    return sanpham;
}());
exports.sanpham = sanpham;
