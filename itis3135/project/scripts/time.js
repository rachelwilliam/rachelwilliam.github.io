//function to load text when Submit button is clicked on the interest form- https://www.w3schools.com/jquery/jquery_ajax_get_post.asp
// post is an ajax method
function loadsubmit() {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("submittext").innerHTML = this.responseText;
      }
    };
    req.open("POST", "demopost.txt", true);
    req.send();
}