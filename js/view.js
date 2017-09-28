function write(){
$("write").empty();
var list = "<li>"+ arrOfIssue[0].title + "</li>";
var list2 = "<li>"+ arrOfIssue[1].title + "</li>";
var list3 = "<li>"+ arrOfIssue[2].title + "</li>";
$("#write").after(list,list2,list3);


}







