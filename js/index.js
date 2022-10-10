var btn__list__1 = document.getElementById("bai-1-list")
var btn__list__2 = document.getElementById("bai-2-list")
var btn__list__3 = document.getElementById("bai-3-list")
var btn__list__4 = document.getElementById("bai-4-list")
var btn__list__5 = document.getElementById("bai-5-list")

function OpenBook(){
 var book1 = document.getElementById("book_1")
 var book2 = document.getElementById("book_2")
 var book3 = document.getElementById("book_3")
 var book4 = document.getElementById("book_4")
 var book5 = document.getElementById("book_5")

 if(btn__list__1.classList.contains("active")){
    book1.className="fa-solid fa-book-open me-2"
 } 
 else{
    book1.className="fa-solid fa-book me-2"
 }

    if(btn__list__2.classList.contains("active")){
    book2.className="fa-solid fa-book-open me-2"
 }
 else{
    book2.className="fa-solid fa-book me-2"
 }
  if(btn__list__3.classList.contains("active")){
    book3.className="fa-solid fa-book-open me-2"
 }
 else{
    book3.className="fa-solid fa-book me-2"
 }

  if(btn__list__4.classList.contains("active")){
    book4.className="fa-solid fa-book-open me-2"
 }
 else{
    book4.className="fa-solid fa-book me-2"
 }

 if(btn__list__5.classList.contains("active")){
    book5.className="fa-solid fa-book-open me-2"
 }
 else{
    book5.className="fa-solid fa-book me-2"
 }
}