document.addEventListener("DOMContentLoaded", function () {
  $(document).ready(function () {
    $.ajax({
      url: "administration.json",
      dataType: "json",
      success: function (data) {
        populateCharts(data);
      },
      error: function (xhr, status, error) {
        console.error("Error fetching JSON data:", error);
      },
    });
  });

  function populateCharts(data) {
    var studentPerformanceLabels = [];
    var studentPerformanceData = [];
    data.students.forEach(function (student) {
      studentPerformanceLabels.push(student.name);
      studentPerformanceData.push(student.performance);
    });
    var ctx1 = document
      .getElementById("studentPerformanceChart")
      .getContext("2d");
    var studentPerformanceChart = new Chart(ctx1, {
      type: "line",
      data: {
        labels: studentPerformanceLabels,
        datasets: [
          {
            label: "Performance",
            data: studentPerformanceData,
            fill: true,
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    });

    var gradesLabels = ["exelent", "tres bien", "bien", "passable", "reject"];
    var gradesData = [];
    data.grades.forEach(function (grade) {
      gradesData.push(grade.count);
    });
    var ctx2 = document.getElementById("gradesChart").getContext("2d");
    var gradesChart = new Chart(ctx2, {
      type: "doughnut",
      data: {
        labels: gradesLabels,
        datasets: [
          {
            data: gradesData,
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 206, 86, 0.5)",
              "rgba(75, 192, 192, 0.5)",
              "rgba(153, 102, 255, 0.5)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    });

    var coursesLabels = [];
    var coursesData = [];
    data.courses.forEach(function (course) {
      coursesLabels.push(course.name);
      coursesData.push(course.coursPerformance);
    });
    var ctx3 = document.getElementById("coursesChart").getContext("2d");
    var coursesChart = new Chart(ctx3, {
      type: "bar",
      data: {
        labels: coursesLabels,
        datasets: [
          {
            label: "Course Performance",
            data: coursesData,
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                var value = context.dataset.data[context.dataIndex];
                return value + "%";
              },
            },
          },
          legend: {
            position: "bottom",
          },
        },
      },
    });
  }

  // Cree table body

  var tableBody = document.querySelector(".small");
  var voirToutRow;
  var searchInput = document.querySelector(".serching-holder");
  var allStudents;

  fetch("administration.json")
    .then((response) => response.json())
    .then((data) => {
      var visibleStudents = 10;
      showStudents(data.students.slice(0, visibleStudents));
      allStudents = data.students;

      if (data.students.length > visibleStudents) {
        addShowAllOption(data.students);
      }
    })
    .catch((error) => console.error("Error fetching data:", error));

  function showStudents(students) {
    tableBody.innerHTML = "";
    students.forEach((student, index) => {
      var row = createStudentRow(student, index);
      tableBody.appendChild(row);
    });
  }
  var voirToutRow;
  function addShowAllOption(students) {
    voirToutRow = document.createElement("p");
    var voirToutCell = document.createElement("td");
    voirToutCell.textContent = "Voir tout";
    voirToutCell.style.cursor = "pointer";
    voirToutCell.setAttribute("colspan", "6");
    voirToutCell.addEventListener("click", function () {
      showStudents(students);
      voirToutRow.style.display = "none";
      addShowLessOption(students);
    });
    voirToutRow.appendChild(voirToutCell);
    tableBody.appendChild(voirToutRow);
  }
  var voirMoinsRow;
  function addShowLessOption(students) {
    voirMoinsRow = document.createElement("p");
    var voirMoinsCell = document.createElement("td");
    voirMoinsCell.textContent = "Voir moins";
    voirMoinsCell.style.cursor = "pointer";
    voirMoinsCell.addEventListener("click", function () {
      var visibleStudents = 10;
      showStudents(students.slice(0, visibleStudents));
      voirMoinsRow.style.display = "none";
      addShowAllOption(students);
    });
    voirMoinsRow.appendChild(voirMoinsCell);
    tableBody.appendChild(voirMoinsRow);
  }

  function showStudents(students) {
    var tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
    students.forEach((student, index) => {
      var row = document.createElement("tr");
      var status;
      var color;
      if (student.performance >= 10) {
        status = "en ligne";
        color = "#3ec147";
      } else {
        status = "offline";
        color = "#8a95a8";
      }
      row.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.name}</td>
      <td>${student.prenom}</td>
      <td>${student.CEF}</td>
      <td>${student.group}</td>
      <td>${status} 
      <i class="fa-solid fa-circle fa-2xs m-lg-3" style="color: ${color};">
      </i>
      </td>
    `;
      tableBody.appendChild(row);
    });
  }

  var filteredStagiaire = [];
  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      var searchStagiare = event.target.value.toLowerCase();
      filteredStagiaire = allStudents.filter((student) => {
        return (
          student.name.toLowerCase().includes(searchStagiare) ||
          student.prenom.toLowerCase().includes(searchStagiare) ||
          student.CEF.toLowerCase().includes(searchStagiare) ||
          student.group.toLowerCase().includes(searchStagiare)
        );
      });
      showStudents(filteredStagiaire);
    }
  });
  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      var tableRect = tableBody.getBoundingClientRect();
      window.scrollTo({
        top: window.scrollY + tableRect.top,
        behavior: "smooth",
      });
    }
  });

  tableBody.addEventListener("click", function (event) {
    var clickedRow = event.target.closest("tr");
    if (clickedRow) {
      var rowIndex = clickedRow.rowIndex - 1;
      if (searchInput.value) {
        var studentsToShow = filteredStagiaire;
      } else {
        studentsToShow = allStudents;
      }
      if (studentsToShow.length > 0) {
        var student = studentsToShow[rowIndex];
        var url = `info.html?name=${encodeURIComponent(
          student.name
        )}&prenom=${encodeURIComponent(
          student.prenom
        )}&CEF=${encodeURIComponent(student.CEF)}&group=${encodeURIComponent(
          student.group
        )}&performance=${encodeURIComponent(student.performance)}`;
        window.location.href = url;
      }
    }
  });
});
