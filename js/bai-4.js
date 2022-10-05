// Bài 4
/**
 * Khối 1: input
 *      
 *      Chiều dài & chiều rộng của hình chữ nhật
 * 
 * Khối 2: Các bước xử lý 
 * 
 *      B1: khai báo biến và lưu giá trị input
 * 
 *      - biến length để lưu chiều dài của hình chữ nhật
 *      - biến width để lưu chiều rộng của hình chữ nhật
 *      - biến rectangleArea để lưu diện tích của hình chữ nhật
 *      - biến rectanglePerimeter để lưu chu vi của hình chữ nhật
 *      
 *      B2: Lập công thức tính toán
 * 
 *        Diện tích hình chữ nhật = dài * rộng
 *      -> rectangleArea = width * length
 * 
 *        Chu vi hình chữ nhật = ( dài + rộng ) * 2
 *      -> rectanglePerimeter = (width + length) * 2
 *    
 *      B3: Thông báo kết quả 
 *      
 * Khối 3: Output 
 *      In kết quả rectangleArea & rectanglePerimeter
 */
var length = 50,
  width = 30,
  rectangleArea = 0,
  rectanglePerimeter = 0;

 rectangleArea = width * length;
 rectanglePerimeter = (width + length) * 2;

console.log(
  "Diện tích hình chữ nhật là: " +
    rectangleArea +
    "m2. Chu vi hình chữ nhật là: " +
    rectanglePerimeter +
    "m"
);
