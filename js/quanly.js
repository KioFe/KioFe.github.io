"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuanLyHang = void 0;
var sanpham_1 = require("./sanpham");
var QuanLyHang = /** @class */ (function () {
    function QuanLyHang() {
    }
    QuanLyHang.prototype.getSanPham = function () {
        return [];
    };
    QuanLyHang.prototype.getSanPhamById = function () {
        var motsanpham = new sanpham_1.sanpham(1, "sp1", 90000, "mota", true, "../image/phaitraibook.jpg");
        return motsanpham;
    };
    QuanLyHang.prototype.addSanPham = function () {
        return;
    };
    QuanLyHang.prototype.showSanPham = function () {
        return;
    };
    return QuanLyHang;
}());
exports.QuanLyHang = QuanLyHang;
