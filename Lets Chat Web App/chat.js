// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyCaCfDPCDn2iugHH1gNwJ2k0StWiFB1LNM",
    authDomain: "kwitter-f6b78.firebaseapp.com",
    databaseURL: "https://kwitter-f6b78-default-rtdb.firebaseio.com",
    projectId: "kwitter-f6b78",
    storageBucket: "kwitter-f6b78.appspot.com",
    messagingSenderId: "812637935654",
    appId: "1:812637935654:web:dc68a9fc63e7f953aceee7"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



