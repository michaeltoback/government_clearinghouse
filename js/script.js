
document.getElementById("senate_menu_item").onclick = function(){
	onApp();
	document.getElementById("federal").style.display = "block";
	document.getElementById("find_senator_form").style.display = "block";
	document.getElementById("senator_list").style.display = "none";
	document.getElementById("help").style.display = "none";
	document.getElementById("find_house_form").style.display = "none";
	document.getElementById("find_upper_house_form").style.display = "none";
	document.getElementById("find_lower_house_form").style.display = "none";
	document.getElementById("coming_soon").style.display = "none";

}

document.getElementById("historical_menu_item").onclick = function(){
	onHistory();
	document.getElementById("history_list").style.display = "none";

}

document.getElementById("help_id").onclick = function(){
	onApp();
	document.getElementById("federal").style.display = "none";
	document.getElementById("senator_list").style.display = "none";
	document.getElementById("help").style.display = "block";
	document.getElementById("find_senator_form").style.display = "none";
	document.getElementById("find_house_form").style.display = "none";
	document.getElementById("find_upper_house_form").style.display = "none";
	document.getElementById("find_lower_house_form").style.display = "none";
	document.getElementById("coming_soon").style.display = "none";
}

document.getElementById("upper_house_menu_item").onclick=function(){
	document.getElementById("federal").style.display = "none";
	document.getElementById("help").style.display = "none";
	document.getElementById("find_house_form").style.display = "none";
	document.getElementById("find_upper_house_form").style.display = "none";
	document.getElementById("find_lower_house_form").style.display = "none";
	document.getElementById("about_site").style.display = "none";
	document.getElementById("about_me").style.display = "none";
	document.getElementById("historical_site").style.display = "none";
	document.getElementById("coming_soon").style.display = "block";

}

document.getElementById("lower_house_menu_item").onclick=function(){
	document.getElementById("federal").style.display = "none";
	document.getElementById("help").style.display = "none";
	document.getElementById("historical_site").style.display = "none";
	document.getElementById("find_house_form").style.display = "none";
	document.getElementById("find_upper_house_form").style.display = "none";
	document.getElementById("find_lower_house_form").style.display = "none";
	document.getElementById("about_site").style.display = "none";
	document.getElementById("about_me").style.display = "none";
	document.getElementById("coming_soon").style.display = "block";

}

function onHistory()
{
	document.getElementById("historical_site").style.display = "block";
	document.getElementById("government_site").style.display = "none";
	document.getElementById("about_site").style.display = "none";
	document.getElementById("about_me").style.display = "none";	
	document.getElementById("coming_soon").style.display = "none";
}
function onApp()
{
	document.getElementById("historical_site").style.display = "none";
	document.getElementById("government_site").style.display = "block";
	document.getElementById("about_site").style.display = "none";
	document.getElementById("about_me").style.display = "none";
	document.getElementById("coming_soon").style.display = "none";

}

function onAboutSite()
{
	document.getElementById("government_site").style.display = "none";
	document.getElementById("about_site").style.display = "block";
	document.getElementById("about_me").style.display = "none";
	document.getElementById("historical_site").style.display = "none";
	document.getElementById("coming_soon").style.display = "none";
}

function onAboutMe()
{
	document.getElementById("government_site").style.display = "none";
	document.getElementById("about_site").style.display = "none";
	document.getElementById("about_me").style.display = "block";
	document.getElementById("historical_site").style.display = "none";
	document.getElementById("coming_soon").style.display = "none";
}

function onLoad()
{
	document.getElementById("federal").style.display = "none";
	document.getElementById("state").style.display = "none";
	document.getElementById("historical_site").style.display = "none";
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
		
		$("#abe_lincoln").click(function(){
			var url = "http://198.199.114.41:8000/api2/legislator/?format=json&last_name=Lincoln&first_name=Abraham";
			innerHTML ="";
			$.ajax({url:url,
				success:function(result){
				    results = result['objects'];
				    results.forEach(function(representative){
					innerHTML +="<tr>";
					innerHTML += "<td>"+ representative['first_name']+ " " + representative['last_name'] + "</td>";
					innerHTML += "<td><a href='http://bioguide.congress.gov/scripts/biodisplay.pl?index=" + representative['bioguide_id']+ "' target=_blank>biography</a></td>";
					innerHTML +="</tr>";
					$("#history_table_body").html(innerHTML);
					$("#history_list").css('display','inline-block');

				});
		}});
        });

		$("#john_kennedy").click(function(){
			var url = "http://198.199.114.41:8000/api2/legislator/?format=json&last_name=Kennedy&first_name=John";
			innerHTML ="";
			$.ajax({url:url,
				success:function(result){
				    results = result['objects'];
				    results.forEach(function(representative){
				    if(representative['bioguide_id'] == 'K000107'){
						innerHTML +="<tr>";
						innerHTML += "<td>"+ representative['first_name']+ " " + representative['last_name'] + "</td>";
						innerHTML += "<td><a href='http://bioguide.congress.gov/scripts/biodisplay.pl?index=" + representative['bioguide_id']+ "' target=_blank>biography</a></td>";
						innerHTML +="</tr>";
						$("#history_table_body").html(innerHTML);
						$("#history_list").css('display','inline-block');
				    	
				    }

				});
		}});
        });

		$("#richard_nixon").click(function(){
			var url = "http://198.199.114.41:8000/api2/legislator/?format=json&last_name=Nixon&first_name=Richard";
			innerHTML ="";
			$.ajax({url:url,
				success:function(result){
				    results = result['objects'];
				    results.forEach(function(representative){
					innerHTML +="<tr>";
					innerHTML += "<td>"+ representative['first_name']+ " " + representative['last_name'] + "</td>";
					innerHTML += "<td><a href='http://bioguide.congress.gov/scripts/biodisplay.pl?index=" + representative['bioguide_id']+ "' target=_blank>biography</a></td>";
					innerHTML +="</tr>";
					$("#history_table_body").html(innerHTML);
					$("#history_list").css('display','inline-block');

				});
		}});
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
					    innerHTML += "<td align='center'><a href='mailto:" + congressman['oc_email']+ " target='_blank'><img src='images/Mail.png' alt='email'></a></td>";
						innerHTML += "<td align='center'><a href='" + congressman['contact_form']+ "' target=_blank>contact</a></td>";
						innerHTML += "<td align='center'><a href='" + congressman['website'] + "' target=_blank'><img alt='website' src='images/world.PNG' width=25 height=25/></a></td>";
						innerHTML += "<td align='center'><a href='http://www.facebook.com/" + congressman['facebook_id'] + "' target='_blank'>"
							+ "<img width=25 height=25 src='images/FB-f-Logo__blue_100.png' alt='facebook page'/></a></td>";
						innerHTML += "<td align='center'><a href='http://www.twitter.com/" + congressman['twitter_id'] + "' target='_blank'>"
							+ "<img alt='twitter page' width=25 height=25 src='images/1412501097_Twitter_alt_3.png'/> </a></td>";
						innerHTML += "<td align='center'><a href='http://www.youtube.com/user/" + congressman['youtube_id'] + "' target='_blank'>"
							+ "<img src='images/YouTube-icon.png' alt='youtube page'/></a></td>";
						innerHTML +="</tr>";
					}
				});
				$("#senator_table_body").html(innerHTML);
				$("#senator_list").css('display','inline-block');
			}});
		}
		
		$("#find_history").click(function(){
			var year = $("#history_year").val()
			if (year < 1790)
			{
				alert("year must be at least 1790");
				return;
			}
			var url = "http://198.199.114.41:8000/api1/terms/?format=json&terms_start__lte=" + $("#history_year").val();
			url += "-05-01&terms_end__gte=" + $("#history_year").val() + "-05-01&terms_state=" + $('#history_state').val();
			$.ajax({url:url,
				success:function(result){
				    results = result['objects'];
				    if(results.length == 0){
				    	alert($('#history_state').val() + " must not have been a state in " + $("#history_year").val()
				    		+ "! please try again!");
				    	return;
				    }
				    $("#history_table_body").html("");
				    results.forEach(function(term){
				    	legislator_id = term['legislator']
						var leg_url = "http://198.199.114.41:8000" + legislator_id + "?format=json";
						$.ajax({url:leg_url,
							success:function(representative){
								var innerHTML ="";
								innerHTML +="<tr>";
								innerHTML += "<td>"+ representative['first_name']+ " " + representative['last_name'] + "</td>";
								innerHTML += "<td><a href='http://bioguide.congress.gov/scripts/biodisplay.pl?index=" + representative['bioguide_id']+ "' target=_blank>biography</a></td>";
								innerHTML +="</tr>";
								$("#history_table_body").html($("#history_table_body").html() + innerHTML);
							}});
					});
					$("#history_list").css('display','inline-block');
				}});
        });
		$("#find_congressmen").click(function(){
			var zipcode = $("#zip_code").val();
			var apikey = "d2186106d61b4296b0b38090606a96c8";
			var url = "https://congress.api.sunlightfoundation.com/legislators/locate";
			url += "?title=Sen&zip=" + zipcode + "&apikey="+apikey;
			innerHTML ="";
			$.ajax({url:url,success:function(result){
				    results = result['results'];
				    if(results.length == 0){
				    	alert(zipcode  + " is not working for this data, try another");
				    	return;
				    }
				    results.forEach(function(representative){
					if(representative['chamber']=="house")
					{
						innerHTML +="<tr>";
						innerHTML += "<td>"+ representative['first_name']+ " " + representative['last_name'] + "</td>";
						innerHTML += "<td style='text-align:center;''>" + representative['party'] + "</td>";
						innerHTML += "<td><a href='http://bioguide.congress.gov/scripts/biodisplay.pl?index=" + representative['bioguide_id']+ "' target=_blank>biography</a></td>";
					    innerHTML += "<td align='center'><a href='mailto:" + representative['oc_email']+ " target='_blank'><img src='images/Mail.png' alt='email'></a></td>";
						innerHTML += "<td align='center'><a href='" + representative['contact_form']+ "' target=_blank>contact</a></td>";
						innerHTML += "<td align='center'><a href='" + representative['website'] + "' target=_blank'><img alt='website' src='images/world.PNG' width=25 height=25/></a></td>";
						innerHTML += "<td align='center'><a href='http://www.facebook.com/" + representative['facebook_id'] + "' target='_blank'>"
							+ "<img width=25 height=25 src='images/FB-f-Logo__blue_100.png' alt='facebook page'/></a></td>";
						innerHTML += "<td align='center'><a href='http://www.twitter.com/" + representative['twitter_id'] + "' target='_blank'>"
							+ "<img alt='twitter page' width=25 height=25 src='images/1412501097_Twitter_alt_3.png'/> </a></td>";
						innerHTML += "<td align='center'><a href='http://www.youtube.com/user/" + representative['youtube_id'] + "' target='_blank'>"
							+ "<img src='images/YouTube-icon.png' alt='youtube page'/></a></td>";
						innerHTML +="</tr>";
						$("#senator_table_body").html(innerHTML);
						$("#senator_list").css('display','inline-block');
  				}});
		}});
		});
		$("#about_site").accordion({heightStyle: "content"});
		$("#about_me").accordion({heightStyle: "content"});
        $("#house_menu_item").click(function(){
			onApp();
			document.getElementById("federal").style.display = "block";
			document.getElementById("senator_list").style.display = "none";
			document.getElementById("help").style.display = "none";
			document.getElementById("find_senator_form").style.display = "none";
			document.getElementById("find_house_form").style.display = "block";
			document.getElementById("find_upper_house_form").style.display = "none";
			document.getElementById("find_lower_house_form").style.display = "none";
		    if (navigator.geolocation) {
		        navigator.geolocation.getCurrentPosition(showPosition);
		    } else {
		       alert("Geolocation is not supported by this browser.");
		    }
		});
		$('#zip_code').keypress(function (e) {
  			if (e.which == 13) {
    			$('#find_congressmen').click();
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
						innerHTML += "<td align='center'><a href='mailto:" + senator['oc_email']+ " target='_blank'><img src='images/Mail.png' alt='email'></a></td>";
						innerHTML += "<td><a href='" + senator['contact_form']+ "' target=_blank>contact</a></td>";
						innerHTML += "<td align='center'><a href='" + senator['website'] + "' target=_blank'><img alt='website' src='images/world.PNG' width=25 height=25/></a></td>";
						innerHTML += "<td align='center'><a href='http://www.facebook.com/" + senator['facebook_id'] + "' target='_blank'>"
							+ "<img width=25 height=25 src='images/FB-f-Logo__blue_100.png' alt='facebook page'/></a></td>";
						innerHTML += "<td align='center'><a href='http://www.twitter.com/" + senator['twitter_id'] + "' target='_blank'>"
							+ "<img alt='twitter page' width=25 height=25 src='images/1412501097_Twitter_alt_3.png'/> </a></td>";
						innerHTML += "<td align='center'><a href='http://www.youtube.com/" + senator['youtube_id'] + "' target='_blank'>"
							+ "<img src='images/YouTube-icon.png' alt='youtube page'/></a></td>";
						innerHTML +="</tr>";
						$("#senator_table_body").html(innerHTML);
						$("#senator_list").css('display','inline-block');
						});
  				}});
		});
		onLoad();
});
