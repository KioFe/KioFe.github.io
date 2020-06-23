import { sanpham } from "./sanpham"

export class QuanLyHang {
	private hang : sanpham[];
	constructor() {
		
	}
	getSanPham(): sanpham[] {
			return [];
		} 
	getSanPhamById() : sanpham {
		var motsanpham = new sanpham(1, "sp1", 90000, "mota", true, "../image/phaitraibook.jpg");
		return motsanpham;
	}
	addSanPham() : void {
		return
	}
	showSanPham():string {
		return ;
	}
}	