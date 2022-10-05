//Bài 1
/**
 * Khối 1: input 
 *     Lương 1 ngày: 100.000 VNĐ
 *     Số ngày làm: 7 ngày
 * 
 * Khối 2: Các bước xử lý 
 *      B1: khai báo biến và lưu giá trị input
 * 
 *      - biến workDay để lưu số ngày làm
 *      - biến salaryPerDay để lưu số tiền lương 1 ngày
 *      - biến totalSalary để lưu tổng số tiền lương nhận được theo số ngày làm
 *  
 *      B2: Lập công thức tính toán
 * 
 *        Tổng số tiền lương = số tiền lương 1 ngày * số ngày làm
 *      -> totalSalary = workDay * salaryPerDay
 *    
 *  B3: Thông báo kết quả 
 *      
 * Khối 3: Output 
 *      In kết quả totalSalary
 */

var workDay = 7,
  salaryPerDay = 100000,
  totalSalary =0;

 totalSalary = workDay * salaryPerDay;

console.log("Tiền lương nhân viên là: " + totalSalary+" VND");





  