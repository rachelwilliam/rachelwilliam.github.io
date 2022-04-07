var sides = numberSides();
var i = 0;
while (i == 0) {
    if (validateEntry(sides)) 
        {
            alert(getShape(sides));
            i = 1;
        }
    else 
        {
            alert(errorMessage());
        }
    }

function numberSides() 
{
    let number = parseFloat(prompt("The Ruby Wallaby would like a number from 0-10"));
    return number;
}

function errorMessage() 
{
    var errorPrompt = parseFloat(prompt("Invalid entry. Enter a number from 0-10"));
    return errorPrompt;
}

function getShape(numSides) 
{
    numSides = Math.round(Math.abs(numSides));
    if (numSides == 1)
    {
        return "A polygon with 1 side is a Henagon";
    }
    else if (numSides == 2)
    {
        return "A polygon with 2 side is a Digon";
    }
    else if (numSides == 3)
    {
        return "A polygon with 3 side is a Trigon";
    }
    else if (numSides == 4)
    {
        return "A polygon with 4 side is a Tetragon";
    }
    else if (numSides == 5)
    {
        return "A polygon with 5 side is a Pentagon";
    }
    else if (numSides == 6)
    {
        return "A polygon with 1 side is a Hexagon";
    }
    else if (numSides == 7)
    {
        return "A polygon with 7 side is a Heptagon";
    }
    else if (numSides == 8)
    {
        return "A polygon with 8 side is a Octagon";
    }
    else if (numSides == 9)
    {
        return "A polygon with 9 side is a Nonagon";
    }
    else if (numSides == 10)
    {
        return "A polygon with 10 side is a Decagon";
    }

}

function validateEntry(numSides) 
{
    if (numSides >= -10 && numSides <= 10 && numSides != 0) 
    {
        if (typeof numSides == 'number')
        {
            return true;
        }
    }
}
