var arr= []; 
var pathname =  window.location.href;
var url = new URL(pathname);
var c = url.searchParams.get("q");
	console.log(c);

	$.ajax({
				url: c,
				success: function(data) {
				arr = data;
				writeHtml(arr);
				},
				type: 'GET'
	});
function writeHtml(param){

    var txt1 = "<p> <b>Issue Title :</b>"+param.title+"</p>";                
    var txt2 = "<p> <b>Issue discription: </b> "+param.body+"</p>";               
    var txt3 = "<p> <a href='user.html?q="+param.user.login+"'><img src='"+param.user.avatar_url+"'/></a></p>";      
    $("#title").append(txt1);
    $("#issuebody").append(txt2);
    $("#userimage").append(txt3);
}
