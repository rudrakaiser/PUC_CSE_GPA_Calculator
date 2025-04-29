function calculateGPA() {
    let courses = [
        { title: "ISD", credit: 3.00, number: document.getElementById("isd").value },
        { title: "AI", credit: 3.00, number: document.getElementById("ai").value },
        { title: "AIL", credit: 1.50, number: document.getElementById("ail").value },
        { title: "MAD", credit: 1.50, number: document.getElementById("mad").value },
        { title: "OS", credit: 3.00, number: document.getElementById("os").value },
        { title: "OSL", credit: 0.75, number: document.getElementById("osl").value },
        { title: "COA", credit: 3.00, number: document.getElementById("coa").value },
        { title: "SP", credit: 3.00, number: document.getElementById("sp").value }
    ];

    let totalCredit = 0;
    let totalGrade = 0;

    for (let i = 0; i < courses.length; i++) {
        if (courses[i].number === "") {
            alert("Please Fill In All Course Numbers !");
            return;
        }

        let grade = getGrade(courses[i].number);
        totalCredit += courses[i].credit;
        totalGrade += grade * courses[i].credit;
    }

    let gpa = totalGrade / totalCredit;
    document.getElementById("result").innerHTML = "Your Obtained GPA Is <span>" + gpa.toFixed(2) + "</span>";
}

function getGrade(number) {
    if (number >= 80) return 4.00;
    else if (number >= 75) return 3.75;
    else if (number >= 70) return 3.50;
    else if (number >= 65) return 3.25;
    else if (number >= 60) return 3.00;
    else if (number >= 55) return 2.75;
    else if (number >= 50) return 2.50;
    else if (number >= 45) return 2.25;
    else if (number >= 40) return 2.00;
    else return 0.00;
}