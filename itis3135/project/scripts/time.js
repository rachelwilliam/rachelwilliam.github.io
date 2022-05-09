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