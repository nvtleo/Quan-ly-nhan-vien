function DanhSachNhanVien() {
    this.mangNV = []
    this.themNV = function (nhanVien) {
        this.mangNV.push(nhanVien)
    }
    this.xoaNhanVien = function (tkXoa) {
        var indexXoa = this.mangNV.findIndex(function (nhanVien) {
            return nhanVien.taiKhoan == tkXoa;
        });
        this.mangNV.splice(indexXoa, 1)
    }
    this.xemNhanVien = function (tkXem) {
        var nvFind = this.mangNV.find(function (nhanVien) {
            return nhanVien.taiKhoan == tkXem
        });
        return nvFind;
    }
    this.updateNV = function (nhanVienUpdate) {
        var indexUpdate = this.mangNV.findIndex(function (nhanVien) {
            return nhanVien.taiKhoan == nhanVienUpdate.taiKhoan
        });

        if (indexUpdate > -1) {
            this.mangNV[indexUpdate] = nhanVienUpdate;
        }
    }
}
DanhSachNhanVien.prototype.searchByType = function (tuTK) {
    var mangTK = [];
    var tuTKXoaSpace = tuTK.toLowerCase().replace(/\s/g, "");
    this.mangNV.map(function (nhanVien) {
        var loaiNV = nhanVien.xepLoai.toLowerCase();
        var loaiXoaSpace = loaiNV.replace(/\s/g, "");
        var indexTK = loaiXoaSpace.indexOf(tuTKXoaSpace);
        if (indexTK > -1) {
            mangTK.push(nhanVien);
        }
    })
    return mangTK;
}