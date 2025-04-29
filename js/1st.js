function calculateGPA() {
    let courses = [
        { title: "FBL", credit: 2.00, number: document.getElementById("fbl").value },
        { title: "CFE", credit: 1.50, number: document.getElementById("cfe").value },
        { title: "PF", credit: 3.00, number: document.getElementById("pf").value },
        { title: "PFL", credit: 1.50, number: document.getElementById("pfl").value },
        { title: "IEE", credit: 3.00, number: document.getElementById("iee").value },
        { title: "IEEL", credit: 1.50, number: document.getElementById("ieel").value },
        { title: "GE", credit: 3.00, number: document.getElementById("ge").value },
        { title: "DIC", credit: 3.00, number: document.getElementById("dic").value },
        { title: "MED", credit: 0.75, number: document.getElementById("med").value }
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