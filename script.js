function calculateGPA() {
    let courses = [
        { title: "EDC", credit: 3.00, number: document.getElementById("edc").value },
        { title: "EDCL", credit: 1.50, number: document.getElementById("edcl").value },
        { title: "DS", credit: 3.00, number: document.getElementById("ds").value },
        { title: "DSL", credit: 1.50, number: document.getElementById("dsl").value },
        { title: "DMNT", credit: 3.00, number: document.getElementById("dmnt").value },
        { title: "EE", credit: 3.00, number: document.getElementById("ee").value },
        { title: "ICMP", credit: 3.00, number: document.getElementById("icmp").value },
        { title: "PHY", credit: 1.50, number: document.getElementById("phy").value },
        { title: "CPL", credit: 0.75, number: document.getElementById("cpl").value }
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