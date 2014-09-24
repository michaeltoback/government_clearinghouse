
document.getElementById("senate_menu_item").onclick = function(){
	document.getElementById("federal").style.display = "block";
	document.getElementById("find_senator_form").style.display = "block";
	document.getElementById("senator_list").style.display = "none";
	document.getElementById("help").style.display = "none";
	document.getElementById("find_house_form").style.display = "none";

}

/**document.getElementById("house_menu_item").onclick = function(){
	document.getElementById("federal").style.display = "block";
	document.getElementById("senator_list").style.display = "none";
	document.getElementById("help").style.display = "none";
	document.getElementById("find_senator_form").style.display = "none";
	document.getElementById("find_house_form").style.display = "block";
}*/

document.getElementById("help_id").onclick = function(){
	document.getElementById("federal").style.display = "none";
	document.getElementById("senator_list").style.display = "none";
	document.getElementById("help").style.display = "block";
	document.getElementById("find_senator_form").style.display = "none";
	document.getElementById("find_house_form").style.display = "none";
}


function onLoad()
{
	document.getElementById("federal").style.display = "none";
	document.getElementById("state").style.display = "none";
	document.getElementById("help").style.display = "block";
}

$(function()
{

		
		function showPosition(position) {
		   var url = "https://congress.api.sunlightfoundation.com/legislators/locate";
		   url += "?latitude=" + position.coords.latitude + "&longitude=" + position.coords.longitude;
		   var apikey = "d2186106d61b4296b0b38090606a96c8";
		   url += "&apikey=" + apikey;
			$.ajax({url:url,success:function(result){
				results = result['results'];
				innerHTML = "";
				results.forEach(function(congressman){
					if(congressman['chamber']=="house")
					{
						innerHTML +="<tr>";
						innerHTML += "<td>"+ congressman['first_name']+ " " + congressman['last_name'] + "</td>";
						innerHTML += "<td style='text-align:center;''>" + congressman['party'] + "</td>";
						innerHTML += "<td><a href='mailto:" + congressman['oc_email']+ "' target=_blank>email</a></td>";
						innerHTML += "<td><a href='" + congressman['contact_form']+ "' target=_blank>contact</a></td>";
						innerHTML += "<td><a href='" + congressman['website'] + "' target=_blank'>website</a></td>";
						innerHTML += "<td><a href='http://www.facebook.com/" + congressman['facebook_id'] + "' target='_blank'>"
							+ "facebook page</a></td>";
						innerHTML += "<td><a href='http://www.twitter.com/" + congressman['twitter_id'] + "' target='_blank'>"
							+ "twitter page </a></td>";
						innerHTML += "<td><a href='http://www.youtube.com/" + congressman['youtube_id'] + "' target='_blank'>"
							+ "youtube page </a></td>";
						innerHTML +="</tr>";
					}
				});
				$("#senator_table_body").html(innerHTML);
				$("#senator_list").css('display','inline-block');
			}});
		}
        $("#house_menu_item").click(function(){
			document.getElementById("federal").style.display = "block";
			document.getElementById("senator_list").style.display = "none";
			document.getElementById("help").style.display = "none";
			document.getElementById("find_senator_form").style.display = "none";
			document.getElementById("find_house_form").style.display = "block";
		    if (navigator.geolocation) {
		        navigator.geolocation.getCurrentPosition(showPosition);
		    } else {
		       alert("Geolocation is not supported by this browser.");
		    }
		});
		$("#find_senator").click(function(){
			var state = $('#senator_state').val();
			var apikey = "d2186106d61b4296b0b38090606a96c8";
			var url = "https://congress.api.sunlightfoundation.com/legislators";
			url += "?title=Sen&state=" + state + "&apikey="+apikey;
			innerHTML ="";
			$.ajax({url:url,success:function(result){
				    results = result['results'];
				    results.forEach(function(senator){
						innerHTML +="<tr>";
						innerHTML += "<td>"+ senator['first_name']+ " " + senator['last_name'] + "</td>";
						innerHTML += "<td style='text-align:center;''>" + senator['party'] + "</td>";
						innerHTML += "<td><a href='mailto:" + senator['oc_email']+ "' target=_blank>email</a></td>";
						innerHTML += "<td><a href='" + senator['contact_form']+ "' target=_blank>contact</a></td>";
						innerHTML += "<td><a href='" + senator['website'] + "' target=_blank'>website</a></td>";
						innerHTML += "<td><a href='http://www.facebook.com/" + senator['facebook_id'] + "' target='_blank'>"
							+ "facebook page</a></td>";
						innerHTML += "<td><a href='http://www.twitter.com/" + senator['twitter_id'] + "' target='_blank'>"
							+ "twitter page </a></td>";
						innerHTML += "<td><a href='http://www.youtube.com/" + senator['youtube_id'] + "' target='_blank'>"
							+ "youtube page </a></td>";
						innerHTML +="</tr>";
						$("#senator_table_body").html(innerHTML);
						$("#senator_list").css('display','inline-block');
						});
  				}});
		});
		onLoad();
});
