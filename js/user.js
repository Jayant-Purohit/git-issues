var arr= []; 
var pathname =  window.location.href;
var url = new URL(pathname);
var c = url.searchParams.get("q");

	$.ajax({
				url: 'https://api.github.com/users/'+c,
				success: function(data) {
				arr = data;
				writeHtml(arr);
				},
				type: 'GET'
	});
function writeHtml(param){

    var txt1 ="<table><tr><td><b>user name:</b></td><td>"+param.name+"</td></tr>"                
    +"<tr><td>user image :</td><td><img src='"+param.avatar_url+"'/></td></tr>"              
    +"<tr><td>user html url : <td><a href='"+param.html_url+"'>"+param.html_url+"</a></td></tr></table>";      
    $("#userdetail").append(txt1);
    
}
