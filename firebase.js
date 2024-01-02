  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBlG_rAZLmEjI-7gApvuoNzNLOosXop2GA",
    authDomain: "netflix-ac746.firebaseapp.com",
    databaseURL: "https://netflix-ac746-default-rtdb.firebaseio.com",
    projectId: "netflix-ac746",
    storageBucket: "netflix-ac746.appspot.com",
    messagingSenderId: "987179241715",
    appId: "1:987179241715:web:db447a2890e32c2de8e786",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getDatabase(app);

  document.getElementById("submit").addEventListener("click", signin);

function signin(e){
    set(ref(db, 'user/' + document.getElementById("email").value), {
        email : document.getElementById("email").value,
        password : document.getElementById("password").value,
    });

    alert("Login Sucessfull !");
}