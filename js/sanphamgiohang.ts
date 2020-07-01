import { sanpham} from "./sanpham"

export class SanPhamGioHang {
 	
 	private sanPham: sanpham;
 	private soluong:number;
 	constructor(sanPham: sanpham, soluong:number = 1) {
 		this.sanPham=sanPham;
 		this.soluong=soluong;
 		// code...
 	}
 	tinhGiaTien():number{
 		return ;
 	}
 	showSanPhamTrongGioHang():string{
 		return ;
 	}
 } 