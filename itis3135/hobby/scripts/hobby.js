/*function showhide(value) 
{
    var pages = document.getElementByClassName("pages");
    document.getElementById(value).style.display = 'block';
    
    for(let i = 0; i < pages.length; i++){
        if(value != pages[i].id)
        {
            pages[i].style.display = 'none';
        }
    }
}*/

function show(shown, hidden1, hidden2, hidden3, hidden4, hidden5) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden1).style.display='none';
    document.getElementById(hidden2).style.display='none';
    document.getElementById(hidden3).style.display='none';
    document.getElementById(hidden4).style.display='none';
    document.getElementById(hidden5).style.display='none';
    return false;
  }