

	// Activate on ready
	$(function() {
		$.getScript("//www.parsecdn.com/js/parse-1.6.12.min.js");
		introAnimations();
		arrowClick();
	});


	function introAnimations(){
		$("#introduction, .idea, .content, .arrow, #join").hide();
		$(".title").hide(0).delay(500).fadeIn(500);
		$(".subtitle").hide(0).delay(1000).fadeIn(1000);
		$("#intro-text").hide(0).delay(2000).fadeIn(1000);
		$(".container").show();
		$("#introduction, .idea, #join, .arrow").hide(1000).delay(2000).fadeIn("slow");
	}

	function arrowClick(){
	
		// on arrow click:

		$(".arrow-image").click(function() {
       		$('html, body').animate({ 	  
       		scrollTop:$(this).next().offset().top}, 'slow');
		});

		function getUserData(){

		 	Parse.initialize("83ESnsf1KPjYEvQOvqS3w9JMTsEa44B2OKxIGZzm", "C2LCT13jgb6hPq2AVk04t5zdPx5Cxb4ablOrkdZD");

		 	var userData =
		 	$( ".userData" ).map(function() {
				return $( this ).val();
			}).get();

			// alert entire userdata array
			alert(userData);

			// create a variable for each
		 	var email = userData[0];
		 	var userName = userData[1];
		 	var userMessage = userData[2];
			// check checkboxes and save as var
		 	var joinTeam = $('#checkJoin').prop('checked');
		 	var joinPilot = $('#checkPilot').prop('checked');
		 	var joinDevTeam = $('#checkCode').prop('checked');

		 	// create parse object
	        var ParseObj = Parse.Object.extend('testUserData');
	        var user = new ParseObj();

	        // instantiate user data
	        user.set("email", email);
	        user.set("userName", userName);
	        user.set("userMessage", userMessage);
	        user.set("joinTeam", joinTeam);
	        user.set("joinPilot", joinPilot);
	        user.set("joinDevTeam", joinDevTeam);

	        // query user data to parse
	        user.save().then(function(object) {
	  			alert("Succesfully submitted!");
			});
	    }
	}
