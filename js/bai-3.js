// Bài 3
/**
 * Khối 1: input
 *
 *      Số tiền người dùng nhập vào
 *      1 USD = 23.500 VNĐ
 *
 * Khối 2: Các bước xử lý
 *
 *      B1: khai báo biến và lưu giá trị input
 *
 *      - biến usd để lưu số tiền cần đổi từ phía người dùng
 *      - biến rate để lưu tỉ giá 1 USD = 23.500 VNĐ
 *      - biến vnd để lưu số tiền sau khi đổi từ USD
 *
 *      B2: Lập công thức tính toán
 *
 *        Số tiền đổi được = số tiền nhập vào * tỉ giá
 *      -> vnd = usd * rate;
 *
 *      B3: Thông báo kết quả
 *
 * Khối 3: Output
 *      In kết quả vnd
 */

function ConvertToVND() {
  var usd = document.getElementById("usd").value,
    rate = 23500,
    vnd = 0,
    noti = document.getElementById("noti-3");

  vnd = Number(usd) * rate;

  noti.classList = "alert alert-success col-5";
  noti.innerHTML =
    "Số tiền quy đổi: " +
    new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "USD"
    }).format(usd) +
    " = " +
    new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "VND"
    }).format(vnd);
}
