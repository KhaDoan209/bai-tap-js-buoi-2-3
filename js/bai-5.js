// Bài 5
/**
 * Khối 1: input
 *      
 *      Một số có 2 chữ số
 * 
 * Khối 2: Các bước xử lý 
 * 
 *      B1: khai báo biến và lưu giá trị input
 * 
 *      - biến numb để lưu số nhập vào
 *      - biến unit để lưu phần đơn vị của số có 2 chữ số sau khi tách
 *      - biến tens để lưu phần chục của số có 2 chữ số sau khi tách
 *      - biến sum để lưu tổng 2 ký số của số có 2 chữ số
 *      
 *      B2: Lập công thức tính toán
 * 
 *        Phần đơn vị = làm tròn phần dư của kết quả của phép tính lấy số nhập vào chia 10
 *          -> unit = Math.floor(numb % 10);
 *        Phần chục = làm tròn phần nguyên của kết quả của phép tính lấy số nhập vào chia 10
 *          -> tens = Math.floor(numb / 10);
*         Tổng các ký số = phần đơn vị + phần chục
*           sum = tens + unit;
 *    
 *      B3: Thông báo kết quả 
 *      
 * Khối 3: Output 
 *      In kết quả sum
 */

var numb = 75,
    unit = 0, 
    sum = 0, 
    tens = 0;

    unit = Math.floor(numb % 10);
    tens = Math.floor(numb / 10);

    sum = tens + unit;

console.log("Tổng 2 ký số của số " + numb + " là " + sum);
