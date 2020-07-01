

export class sanpham{
	private _id: number;
	private _ten:string;
	private _gia: number;
	private _mota: string;
	private _tinhtrang:boolean;
	private _anh:string;

	public set id(v : number) {
		this._id = v;
	}
	public get id() : number {
		return this._id;
	}
	public set ten(v : string) {
		this._ten = v;
	}
	public get ten() : string {
		return this._ten;
	}
	public set gia(v : number) {
		this._gia = v;
	}
	public get gia() : number {
		return this._gia;
	}
	public set mota(v : string) {
		this._mota = v;
	}
	public get mota() : string {
		return this._mota;
	}
	public set tinhtrang(v : boolean) {
		this._tinhtrang = v;
	}
	public get tinhtrang() : boolean {
		return this._tinhtrang;
	}
	public set anh(v : string) {
		this._anh = v;
	}
	public get anh() : string {
		return this._anh;
	}
	constructor(id:number, ten:string, gia:number, mota:string, tinhtrang: boolean, anh:string){
		this.id = id;
		this.ten = ten;
		this.gia = gia;
		this.mota = mota;
		this.tinhtrang = tinhtrang;
		this.anh = anh;
	}
}