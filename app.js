// Initialize Firebase
var config = {
	apiKey: "AIzaSyBdUw3aXuV7QlXATZi6F7rZzkjxZ3bBZoE",
    authDomain: "belajar-ffa7a.firebaseapp.com",
    databaseURL: "https://belajar-ffa7a.firebaseio.com",
    projectId: "belajar-ffa7a",
    storageBucket: "belajar-ffa7a.appspot.com",
    messagingSenderId: "540141512236",
};

firebase.initializeApp(config);

const dbRef = firebase.database().ref();

const usersRef = dbRef.child('users');
const userListUI = document.getElementById("userList");

usersRef.on("child_added", snap => {

	let user = snap.val();

	let $li = document.createElement("li");
	$li.innerHTML = user.name;
	$li.setAttribute("child-key", snap.key);
	$li.addEventListener("click", userClicked)
	userListUI.append($li);

});


function userClicked(e) {

	var userID = e.target.getAttribute("child-key");

	const userRef = dbRef.child('users/' + userID);
	const userDetailUI = document.getElementById("userDetail");

	userDetailUI.innerHTML = ""

	userRef.on("child_added", snap => {

		var $p = document.createElement("p");
		$p.innerHTML = snap.key  + ": " +  snap.val()
		userDetailUI.append($p);

	});

}


