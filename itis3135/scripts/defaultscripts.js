function scriptTest() {
    alert("Hey my script is running!");
}

function welcome() {
    let name = document.getElementById("name").value;
    let feel = document.getElementById("feel").value;
    document.getElementById("welcome").innerHTML = ("<p>The Ruby Wallaby welcomes you, " + name + "! We're glad you are feeling " + feel + "!")
}

function datetime() {
    var date = new Date();
    document.getElementById("datetime").innerHTML = ("<p>Date: " + date.toLocaleString());
}

function suggestion1() {
    document.getElementById("suggestion1").innerHTML = ("Read a good book!")
}

function suggestion2() {
    document.getElementById("suggestion2").innerHTML = ("Ride a bicycle!")
}

function suggestion3() {
    document.getElementById("suggestion3").innerHTML = ("Take a nap!")
}

function suggestion4() {
    document.getElementById("suggestion4").innerHTML = ("Go to the pool!")
}

function suggestion5() {
    document.getElementById("suggestion5").innerHTML = ("Watch a movie!")
}