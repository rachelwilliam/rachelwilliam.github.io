let names = [];
let salaries = [];

function addsalary()
{
    let salary = document.getElementById("salary").value;
    if (salary == "" || salary < 0 || isNaN(salary))
    {
        alert("You must enter a valid salary");
        salary = "";
    }
    else
    {
        salaries.push(parseFloat(salary));
        let name = document.getElementById('name').value;
        names.push(name);
    }
}

function results()
{
    let average = 0;
    let max = 0;
    let sum = 0;
    
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

function displaysalary()
{
    let salarytable = "<table><tr><th>Employee Name</th><th>Salary</th></tr>";

    for(let i = 0; i < names.length; i++)
    {
        salarytable += "<tr><td>" + names[i] + "</td><td>" + salaries[i]+ "</td></tr>";
    }

    salarytable += "</table>";
    document.getElementById("results_table").innerHTML = "<h2>Salaries</h2>" + salarytable;
}