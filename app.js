



	var app = angular.module("scheduleApp", ['firebase']);


    app.controller('MainController', function() {
    	console.log($scope)

   	});

$(function() {

	var ref = new Firebase("https://gajobs.firebaseio.com/")

	// Retrieve new posts as they are added to our database
	ref.on("child_added", function(snapshot, prevChildKey) {
	  var newPost = snapshot.val();
	  console.log("Author: " + newPost);
	  console.log("Title: " + newPost);
	  console.log("Previous Post ID: " + prevChildKey);
	});

	$("#name").change(function() {
    	globalValue = document.getElementById('name').value;
  		console.log(globalValue);
  		var ref = new Firebase("https://gajobs.firebaseio.com/");

	  	var jobs = ref.child("users");
	    jobs.push(globalValue);

	    ref.on("child_added", function(snapshot, prevChildKey) {
		  var newPost = snapshot.val();
		  console.log(newPost)
		});
	});



	  // var ref = new Firebase("https://gajobs.firebaseio.com/");

	  // var usersRef = ref.child("users");
	  //     usersRef.set(gobalValue);
	  


});