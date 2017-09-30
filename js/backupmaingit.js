var arr = [];
var arrOfIssue = [];
var reponame=[];

$.typeahead({
	input: ".js-typeahead",
	maxItem:10,
	dynamic: true,
	delay: 500,
	display: "name",
	debug: true,
	selector: {
        container: "typeahead__container"
	},
	searchOnFocus: true,
	template: function (query, item) {

		var color = "#777";

		return "{{name}} {{open_issues}}"
	},
	source: {
		items: {
			ajax: function (query) {
				return {
					type: "GET",
					url: "https://api.github.com/search/repositories",
					data: {
						q: "{{query}}"
					},
					callback: {
						done: function (data) {		
							return data.items;
						}
					}
				}
			}
		}

	},
	callback: {
		    onClick: function (node, a, item, event) {
				event.preventDefault();
				var prepareurl = "";
	            // You can do a simple window.location of the item.href
	            console.log(item.issues_url);
				var issue_str = item.issues_url.slice(0, -9);
				console.log(issue_str);
				prepareurl = issue_str +"?q=state:open+sort:created-asc";
				makeCall(prepareurl);
				this.container.removeClass('result');
			} 
        }
});

function makeCall(url) {
	$.ajax({
		url: url,
		success: function(data) {
			console.log(data);
			arrOfIssue = [];
			arrOfIssue = data;
			write();
		},
		type: 'GET'
	});
}

function write(){
	$("write").empty();
	var htmlstr = "";
	for(i = 0 ; i < (arrOfIssue.length/2);i++ ){
		htmlstr += "<div><a href='issue.html?q="+arrOfIssue[i].url+"'>"+arrOfIssue[i].title+"</a></div>";
	}
	$("#write").append(htmlstr);
}