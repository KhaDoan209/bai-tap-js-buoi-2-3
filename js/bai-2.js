// Bài 2
/**
 * Khối 1: input
 *
 *      5 số thực khác nhau
 *
 * Khối 2: Các bước xử lý
 *
 *      B1: khai báo biến và lưu giá trị input
 *
 *      - biến numb_1 để lưu giá trị của số thực thứ 1
 *      - biến numb_2 để lưu giá trị của số thực thứ 2
 *      - biến numb_3 để lưu giá trị của số thực thứ 3
 *      - biến numb_4 để lưu giá trị của số thực thứ 4
 *      - biến numb_5 để lưu giá trị của số thực thứ 5
 *      - biến mean để lưu giá trị trung bình cộng của 5 số thực
 *
 *      B2: Lập công thức tính toán
 *
 *        Trung bình cộng = ( số thứ 1 + số thứ 2 + số thứ 3 + số thứ 4 + số thứ 5) / 5
 *
 *        -> mean = (numb_1 + numb_2 + numb_3 + numb_4 + numb_5)/5
 *
 *      B3: Thông báo kết quả
 *
 * Khối 3: Output
 *      In kết quả mean
 */
function CalculateAverage() {
  var numb_1 = document.getElementById("numb1").value,
    numb_2 = document.getElementById("numb2").value,
    numb_3 = document.getElementById("numb3").value,
    numb_4 = document.getElementById("numb4").value,
    numb_5 = document.getElementById("numb5").value,
    mean = 0;
  var noti = document.getElementById("noti-2");
  mean =
    (Number(numb_1) +
      Number(numb_2) +
      Number(numb_3) +
      Number(numb_4) +
      Number(numb_5)) /
    5;

  noti.classList = "alert alert-success col-12 mt-3";
  noti.innerHTML = "Số trung bình cộng bằng " + mean;
}
