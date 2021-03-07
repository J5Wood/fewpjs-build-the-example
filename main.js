// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function cycleHeart(like) {
  if (like.classList.contains("activated-heart")) {
    like.classList.remove("activated-heart");
    like.innerText = `Like! ${EMPTY_HEART}`;
  } else {
    like.classList.add("activated-heart");
    like.innerText = `Like! ${FULL_HEART}`;
  }
}

window.addEventListener('load', () => {
  const errorBar = document.getElementById("modal");
  errorBar.classList.add("hidden");

  const likes = document.getElementsByClassName("like");
  for (const like of likes) {
    like.addEventListener("click", () => {

      mimicServerCall()
      .then(() => {
        cycleHeart(like);
      })
      .catch((error) => {
        errorBar.classList.remove("hidden");
        errorBar.innerText = error;
        setTimeout(function() {
          errorBar.classList.add("hidden");
        }, 5000)
      })
    })
  }
});


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
