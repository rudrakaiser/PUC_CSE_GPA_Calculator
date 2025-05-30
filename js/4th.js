function calculateGPA() {
  let courses = [
    {
      title: "Algorithms",
      credit: 3.0,
      number: document.getElementById("algo").value,
    },
    {
      title: "Algorithms Laboratory",
      credit: 1.5,
      number: document.getElementById("algolab").value,
    },
    {
      title: "Matrix, Linear Algebra, Differential Equation",
      credit: 3.0,
      number: document.getElementById("mlade").value,
    },
    {
      title: "Biology for Engineers",
      credit: 3.0,
      number: document.getElementById("bioeng").value,
    },
    {
      title: "Database Management Systems",
      credit: 3.0,
      number: document.getElementById("dbms").value,
    },
    {
      title: "Database Management Systems Laboratory",
      credit: 1.5,
      number: document.getElementById("dbmslab").value,
    },
    {
      title: "Microprocessors & Microcontrollers",
      credit: 3.0,
      number: document.getElementById("micro").value,
    },
    {
      title: "Microprocessors & Microcontrollers Laboratory",
      credit: 1.5,
      number: document.getElementById("microlab").value,
    },
  ];

  let totalCredit = 0;
  let totalGradePoints = 0; // Changed variable name for clarity from totalGrade to totalGradePoints

  for (let i = 0; i < courses.length; i++) {
    if (
      courses[i].number === "" ||
      isNaN(parseFloat(courses[i].number)) ||
      parseFloat(courses[i].number) < 0 ||
      parseFloat(courses[i].number) > 100
    ) {
      alert("Please fill in all course numbers correctly (0 - 100)!");
      document.getElementById("result").innerHTML = ""; // Clear previous result if any
      return;
    }

    let marks = parseFloat(courses[i].number);
    let grade = getGrade(marks);
    totalCredit += courses[i].credit;
    totalGradePoints += grade * courses[i].credit;
  }

  if (totalCredit === 0) {
    document.getElementById("result").innerHTML =
      "Please enter marks for at least one course.";
    return;
  }

  let gpa = totalGradePoints / totalCredit;
  document.getElementById("result").innerHTML =
    "Your Obtained GPA Is <span>" + gpa.toFixed(2) + "</span>";
}

function getGrade(number) {
  if (number >= 80) return 4.0;
  else if (number >= 75) return 3.75;
  else if (number >= 70) return 3.5;
  else if (number >= 65) return 3.25;
  else if (number >= 60) return 3.0;
  else if (number >= 55) return 2.75;
  else if (number >= 50) return 2.5;
  else if (number >= 45) return 2.25;
  else if (number >= 40) return 2.0;
  else return 0.0;
}
