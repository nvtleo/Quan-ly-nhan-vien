var dsnv = new DanhSachNhanVien();
var Validation = new Validation();
document.getElementById("btnThemNV").addEventListener("click", themNhanVien);
document.getElementById("btnCapNhat").addEventListener("click", capNhatNV);
function themNhanVien() {
    var taiKhoan = document.getElementById("tknv").value;
    var hoTen = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var matKhau = document.getElementById("password").value;
    var ngayLam = document.getElementById("datepicker").value;
    var luongCB = document.getElementById("luongCB").value;
    var chucVu = document.getElementById("chucvu").value;
    var gioLam = document.getElementById("gioLam").value;
    var isValid = true;
    isValid &= Validation.checkEmpty(taiKhoan, "Tài Khoản viên không được để trống", "tbTKNV") && Validation.checkTK(taiKhoan, "Tài khoản viên không hợp lệ ", "tbTKNV");
    isValid &= Validation.checkEmpty(taiKhoan, "Tài Khoản viên không được để trống", "tbTKNV") && Validation.checkTKTrung(taiKhoan, "Tài khoản viên không được trùng ", "tbTKNV", dsnv.mangNV);
    isValid &= Validation.checkEmpty(hoTen, "Họ tên không được để trống", "tbTen") && Validation.checkHoTen(hoTen, "Họ tên không hợp lệ", "tbTen");
    isValid &= Validation.checkEmpty(email, "Email không được để trống", "tbEmail") && Validation.checkEmail(email, "Email không hợp lệ", "tbEmail");
    isValid &= Validation.checkEmpty(matKhau, "Mật khẩu không được để trống", "tbMatKhau") && Validation.checkMatKhau(matKhau, "Mật khẩu từ 6-10 ký tự chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt", "tbMatKhau");
    isValid &= Validation.checkEmpty(ngayLam, "Ngày làm không được bỏ trống", "tbNgay") && Validation.checkNgay(ngayLam, "Ngày làm không hợp lệ", "tbNgay");
    isValid &= Validation.checkEmpty(luongCB, "Lương cơ bản không được để trống", "tbLuongCB") && Validation.checkLuongCB(luongCB, "Lương cơ bản từ 1.000.000 đến 20.000.000", "tbLuongCB");
    isValid &= Validation.checkChucVu(chucVu, "Vui lòng chọn chức vụ", "tbChucVu");
    isValid &= Validation.checkEmpty(gioLam, "Giờ làm không được bỏ trống", "tbGiolam") && Validation.checkGioLam(gioLam, "Giờ làm phải từ 80 đến 200", "tbGiolam");
    if (isValid) {
        var nhanVien = new NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCB, chucVu, gioLam);
        nhanVien.tinhLuong();
        nhanVien.Loai();
        dsnv.themNV(nhanVien);
        hienThiNV(dsnv.mangNV)
        setLocalStorage();
        document.getElementById("btnDong").click();
    }
}

function hienThiNV(mang) {
    var content = "";
    mang.map(function (nhanVien, index) {
        var trELE = `<tr>
    <td>${nhanVien.taiKhoan}</td>
    <td>${nhanVien.hoTen}</td>
    <td>${nhanVien.email}</td>
    <td>${nhanVien.ngayLam}</td>
    <td>${nhanVien.chucVu}</td>
    <td>${nhanVien.Luong}</td>
    <td>${nhanVien.xepLoai}</td>
    <td style="display: flex">
    <button style="margin-right: 10px;" class="btn btn-danger"onclick="xoaNhanVien('${nhanVien.taiKhoan}')">Xoá</button>
    <button class="btn btn-info" onclick="xemNhanVien('${nhanVien.taiKhoan}')">Xem</button>
    </td>
    </tr>`
        content += trELE;
        console.log(content)
    })
    document.getElementById("tableDanhSach").innerHTML = content;
}
function setLocalStorage() {
    localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV))
}
function getLocalStorage() {
    if (localStorage.getItem("DSNV") != null) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
        hienThiNV(dsnv.mangNV)
    }
}
// gọi khi load trang web
getLocalStorage()
// xoa sv
function xoaNhanVien(tkXoa) {
    dsnv.xoaNhanVien(tkXoa)
    setLocalStorage();
    getLocalStorage();
}
// xem nhân viên(để cập nhật)
function xemNhanVien(tkXem) {
    document.getElementById("btnThem").click();
    var nvFind = dsnv.xemNhanVien(tkXem);
    document.getElementById("tknv").value = nvFind.taiKhoan;
    document.getElementById("tknv").disabled = true;
    document.getElementById("name").value = nvFind.hoTen;
    document.getElementById("email").value = nvFind.email;
    document.getElementById("password").value = nvFind.matKhau;
    document.getElementById("datepicker").value = nvFind.ngayLam;
    document.getElementById("luongCB").value = nvFind.luongCB;
    vocument.getElementById("chucvu").value = nvFind.chucVu;
    document.getElementById("gioLam").value = nvFind.gioLam;

}

// cập nhật nhân viên
function capNhatNV() {
    var taiKhoan = document.getElementById("tknv").value;
    var hoTen = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var matKhau = document.getElementById("password").value;
    var ngayLam = document.getElementById("datepicker").value;
    var luongCB = document.getElementById("luongCB").value;
    var chucVu = document.getElementById("chucvu").value;
    var gioLam = document.getElementById("gioLam").value;
    var isValid = true;
    isValid &= Validation.checkEmpty(hoTen, "Họ tên không được để trống", "tbTen") && Validation.checkHoTen(hoTen, "Họ tên không hợp lệ", "tbTen");
    isValid &= Validation.checkEmpty(email, "Email không được để trống", "tbEmail") && Validation.checkEmail(email, "Email không hợp lệ", "tbEmail");
    isValid &= Validation.checkEmpty(matKhau, "Mật khẩu không được để trống", "tbMatKhau") && Validation.checkMatKhau(matKhau, "Mật khẩu từ 6-10 ký tự chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt", "tbMatKhau");
    isValid &= Validation.checkEmpty(ngayLam, "Ngày làm không được bỏ trống", "tbNgay") && Validation.checkNgay(ngayLam, "Ngày làm không hợp lệ", "tbNgay");
    isValid &= Validation.checkEmpty(luongCB, "Lương cơ bản không được để trống", "tbLuongCB") && Validation.checkLuongCB(luongCB, "Lương cơ bản từ 1.000.000 đến 20.000.000", "tbLuongCB");
    isValid &= Validation.checkChucVu(chucVu, "Vui lòng chọn chức vụ", "tbChucVu");
    isValid &= Validation.checkEmpty(gioLam, "Giờ làm không được bỏ trống", "tbGiolam") && Validation.checkGioLam(gioLam, "Giờ làm phải từ 80 đến 200", "tbGiolam");
    if (isValid) {
        var nhanVienUpdate = new NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCB, chucVu, gioLam);
        nhanVienUpdate.tinhLuong();
        nhanVienUpdate.Loai();
        dsnv.updateNV(nhanVienUpdate);
        setLocalStorage();
        getLocalStorage();
        document.getElementById("btnDong").click();
    }

}
// tìm kiếm nhân viên
document.getElementById("btnTimNV").onclick = function () {
    var tuTK = document.getElementById("searchName").value;
    var mangTK = dsnv.searchByType(tuTK);
    hienThiNV(mangTK);
}


