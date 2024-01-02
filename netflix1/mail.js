const firebaseConfig = {
  //   copy your firebase config informations
    apiKey: "AIzaSyB1TKqTDub-XYWTv2IFQ9cWZ5F_SZQmfcY",
    authDomain: "fir-57978.firebaseapp.com",
    databaseURL: "https://fir-57978-default-rtdb.firebaseio.com",
    projectId: "fir-57978",
    storageBucket: "fir-57978.appspot.com",
    messagingSenderId: "801003138478",
    appId: "1:801003138478:web:7d664d1483b39acb6bec3f",
    measurementId: "G-LSSJLLB4JW"
    
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
