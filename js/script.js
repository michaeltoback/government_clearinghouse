
document.getElementById("senate_menu_item").onclick = function(){
	onApp();
	document.getElementById("federal").style.display = "block";
	document.getElementById("find_senator_form").style.display = "block";
	document.getElementById("senator_list").style.display = "none";
	document.getElementById("help").style.display = "none";
	document.getElementById("find_house_form").style.display = "none";

}

document.getElementById("help_id").onclick = function(){
	onApp();
	document.getElementById("federal").style.display = "none";
	document.getElementById("senator_list").style.display = "none";
	document.getElementById("help").style.display = "block";
	document.getElementById("find_senator_form").style.display = "none";
	document.getElementById("find_house_form").style.display = "none";
}

function onApp()
{
	document.getElementById("government_site").style.display = "block";
	document.getElementById("about_site").style.display = "none";
	document.getElementById("about_me").style.display = "none";

}

function onAboutSite()
{
	document.getElementById("government_site").style.display = "none";
	document.getElementById("about_site").style.display = "block";
	document.getElementById("about_me").style.display = "none";

}

function onAboutMe()
{
	document.getElementById("government_site").style.display = "none";
	document.getElementById("about_site").style.display = "none";
	document.getElementById("about_me").style.display = "block";

}

function onLoad()
{
	document.getElementById("federal").style.display = "none";
	document.getElementById("state").style.display = "none";
	document.getElementById("help").style.display = "block";
	onApp();
}

$(function()
{

		$("#about_site_id").click(function(){
			onAboutSite();
		});

		$("#about_me_id").click(function(){
			onAboutMe();
		});
		
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
						innerHTML += "<td><a href='http://bioguide.congress.gov/scripts/biodisplay.pl?index=" + congressman['bioguide_id']+ "' target=_blank>biography</a></td>";
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

		$("#find_congressmen").click(function(){
			var zipcode = $("#zip_code").val();
			var apikey = "d2186106d61b4296b0b38090606a96c8";
			var url = "https://congress.api.sunlightfoundation.com/legislators/locate";
			url += "?title=Sen&zip=" + zipcode + "&apikey="+apikey;
			innerHTML ="";
			$.ajax({url:url,success:function(result){
				    results = result['results'];
				    results.forEach(function(representative){
					if(representative['chamber']=="house")
					{
						innerHTML +="<tr>";
						innerHTML += "<td>"+ representative['first_name']+ " " + representative['last_name'] + "</td>";
						innerHTML += "<td style='text-align:center;''>" + representative['party'] + "</td>";
						innerHTML += "<td><a href='http://bioguide.congress.gov/scripts/biodisplay.pl?index=" + representative['bioguide_id']+ "' target=_blank>biography</a></td>";
						innerHTML += "<td><a href='mailto:" + representative['oc_email']+ "' target=_blank>email</a></td>";
						innerHTML += "<td><a href='" + representative['contact_form']+ "' target=_blank>contact</a></td>";
						innerHTML += "<td><a href='" + representative['website'] + "' target=_blank'>website</a></td>";
						innerHTML += "<td><a href='http://www.facebook.com/" + representative['facebook_id'] + "' target='_blank'>"
							+ "facebook page</a></td>";
						innerHTML += "<td><a href='http://www.twitter.com/" + representative['twitter_id'] + "' target='_blank'>"
							+ "twitter page </a></td>";
						innerHTML += "<td><a href='http://www.youtube.com/user/" + representative['youtube_id'] + "' target='_blank'>"
							+ "youtube page </a></td>";
						innerHTML +="</tr>";
						$("#senator_table_body").html(innerHTML);
						$("#senator_list").css('display','inline-block');
  				}});
		}});
		});
        $("#house_menu_item").click(function(){
			onApp();
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
						innerHTML += "<td><a href='http://bioguide.congress.gov/scripts/biodisplay.pl?index=" + senator['bioguide_id']+ "' target=_blank>biography</a></td>";
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
