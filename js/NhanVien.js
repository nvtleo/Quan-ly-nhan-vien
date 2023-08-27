function NhanVien(taiKhoan, hoTen, email, matKhau, ngaylam, luongCB, chucVu, gioLam) {
    this.taiKhoan = taiKhoan;
    this.hoTen = hoTen;
    this.email = email;
    this.matKhau = matKhau
    this.ngayLam = ngaylam;
    this.luongCB = luongCB
    this.chucVu = chucVu;
    this.gioLam = gioLam
    this.Luong = 0;
    this.tinhLuong = function tinhLuong() {
        if (this.chucVu === "Sếp") {
            this.Luong = (this.luongCB * 3).toLocaleString();
        } else if (this.chucVu === "Trưởng phòng") {
            this.Luong = (this.luongCB * 2).toLocaleString();
        } else if (this.chucVu === "Nhân viên") {
            this.Luong = Number(this.luongCB).toLocaleString();
        }
    }
    this.xepLoai = "";
    this.Loai = function xepLoai() {
        if (this.gioLam >= 192) {
            this.xepLoai = "nhân viên xuất sắc"
        } else if (this.gioLam >= 176) {
            this.xepLoai = "nhân viên giỏi"
        } else if (this.gioLam >= 160) {
            this.xepLoai = "nhân viên khá"
        } else {
            this.xepLoai = "nhân viên trung bình"
        }
    }
}
/**
 *       
 */

