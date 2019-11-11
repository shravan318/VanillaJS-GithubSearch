// init GitHub

const gitHub = new GitHub();

// init ui

const ui = new UI();

// search input

const searchuser = document.getElementById("searchUser");

searchuser.addEventListener("keyup", e => {
  const userText = e.target.value;
  if (userText !== "") {
    //make http call
    gitHub.getUser(userText).then(res => {
      if (res.profileData.message === "Not Found") {
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        ui.showProfile(res.profileData);
      }
    });
  } else {
    //clear ui
    ui.clearProfile();
  }
});
