function showhide(value) 
{
    var pages = document.getElementByClassName("pages");
    document.getElementById(value).style.display = 'block';
    
    for(let i = 0; i < pages.length; i++){
        if(value != pages[i].id)
        {
            pages[i].style.display = 'none';
        }
    }
}