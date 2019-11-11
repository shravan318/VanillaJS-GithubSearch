// init GitHub

const gitHub = new GitHub();

// search input

const searchuser = document.getElementById("searchUser");

searchuser.addEventListener("keyup", e => {
  const userText = e.target.value;
  if (userText !== "") {
    //make http call
    gitHub.getUser(userText).then(res => {
      if (res.profileData.message === "Not Found") {
        alert("User not Found");
      } else {
        console.log(res);
      }
    });
  } else {
    //clear ui
  }
});
