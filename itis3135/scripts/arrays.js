let names = [];
let salaries = [];

function addSalary()
{
    let salary = document.getElementById("salary").value;
    if (salary == "")
    {
        alert("You must enter a name and a valid salary");
        salary = "";
    }
    else
    {
        salaries.push(parseFloat(salary));
    }
    let name = document.getElementById('name').value;
    name.push(name);
}

function displayResults()
{
    let average = 0;
    let max = 0;
    let sum = 0;
    //let results = "<h2>Results</h2>";
    
    for (let i = 0; i < salaries.length; i++)
    {
        sum += salaries[i];
    }

    for (let i = 0; i < salaries.length; i++)
    {
        if (max < salaries[i])
        {
            max = salaries[i];
        }
    }

    average = sum / salaries.length;
    document.getElementById("results").innerHTML = "<h2>Results</>" + "<p>Average salary: $" + average + "</p>" + "<p>Highest salary: $" + max + "</p>";
}

function displaySalary()
{
    let salaryTable = "<table><tr><th>Employee Name</th><th>Salary</th></tr>";

    for(let i = 0; i < names.length; i++)
    {
        salaryTable += "<tr><td>" + names[i] + "</td><td>" + salaries[i]+ "</td></tr>";
    }

    salaryTable += "</table>";
    document.getElementById("results_table").innerHTML = "<h2>Salaries</h2>" + salaryTable;
}