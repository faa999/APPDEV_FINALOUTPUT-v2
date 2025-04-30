// Semi-Monthly Payroll Calculator
var philHealthRate = 0.025;
var sssRate = 0.075;
var pagIbigFixed = 100;
var minimumRate = 214.83;

function semiMonthly() {
    var usrName = document.getElementById("name").value;
    var workHours = Number(document.getElementById("hours").value);
    var workDays = Number(document.getElementById("days").value);
    var workLate = Number(document.getElementById("lates").value);
    var workAbsent = Number(document.getElementById("absent").value);

    var absentHours = workAbsent * 9;
    var ttlLoss = absentHours + workLate;

    var totalHours = workHours - ttlLoss;
    var grossIncome = (totalHours * minimumRate);

    var philHealth = grossIncome * philHealthRate;
    var sss = grossIncome * sssRate;
    var pagIbig = pagIbigFixed;

    var totalDeductions = philHealth + sss + pagIbig;

    var netIncome = grossIncome - totalDeductions;

    // Result output
    console.log("Employee: " + usrName);
    console.log("Gross Income: " + grossIncome.toFixed(2));
    console.log("PhilHealth: " + philHealth.toFixed(2));
    console.log("SSS: " + sss.toFixed(2));
    console.log("Pag-ibig: " + pagIbig.toFixed(2));
    console.log("Total Deductions: " + totalDeductions.toFixed(2));
    console.log("Net Income: " + netIncome.toFixed(2));
}

document.getElementById("semiComputeBtn").onclick = semiMonthly;
