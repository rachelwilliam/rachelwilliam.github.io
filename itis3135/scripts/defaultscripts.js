function scriptTest() {
    alert("Hey my script is running!");
}

function welcome() {
    let name = document.getElementById("name").value;
    let feel = document.getElementById("feel").value;
    document.getElementById("welcome").innerHTML = ("<p>The Ruby Wallaby welcomes you, " + name + "! It seems you are feeling " + feel + "!")
}

function getDate() {
    let date = new Date();
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate();
}

function getTime() {
    let date = new Date();
    let clock = date.getHours() >= 12 ? 'PM' : 'AM';
    let min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return date.getHours() % 12 + ':' + min + ' ' + clock;
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
    document.getElementById("suggestion1").innerHTML = ("Watch a movie!")
}