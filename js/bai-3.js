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
var usd = 105,
  rate = 23.5,
  vnd = 0;

 vnd = usd * rate;

console.log(usd + "$ = " + vnd + "000 VND");