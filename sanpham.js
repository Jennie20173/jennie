function TaoDoiTuongSanPham(hinhanh, thuonghieu, tensanpham, giatien) {
    var sanPham = new Object();
    sanPham.hinhanh = hinhanh;
    sanPham.thuonghieu = thuonghieu;
    sanPham.tensanpham = tensanpham;
    sanPham.giatien = giatien;

    return sanPham;
}

// danh sách đối tượng sản phẩm
function chuyenDanhSachDoiTuongSanPhamThanhHTML(danhSachSanPham) {
    var HTMLDanhSachSanPham = '<div class="pro-container"> ';
    for (var i = 0; i < danhSachSanPham.length; i++) {
        var sanPham = danhSachSanPham[i];
        var htmlSanPham = chuyenDoiTuongSanPhamThanhHTML(sanPham);
        HTMLDanhSachSanPham = HTMLDanhSachSanPham + htmlSanPham;
    }
    
    HTMLDanhSachSanPham = HTMLDanhSachSanPham + '</div>';
    return HTMLDanhSachSanPham;
}
// đối tượng sản phẩm
function chuyenDoiTuongSanPhamThanhHTML(sanPham) {
    var html = '';
    html += `<div class="pro">
        <img src="img/products/f1.jpg" alt="">
            <div class="des">
                <span>Adidas</span>
                <h5>Cartoon Astronaut T-shirts</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>$78</h4>
            </div>
            <a href="#"><i class="fas fa-shopping-cart cart"></i></a>
    </div>`
    return html;
}