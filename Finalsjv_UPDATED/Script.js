// button for popups //
let startBtn = document.querySelector('.center #startbtn');
let closeBtn = document.querySelector(".choosePopUp #closeBtn");

let monthlyBtn = document.querySelector(".choosePopUp .choiceBtn #Monthly");
let monthlyCloseBtn = document.querySelector(".monthlyPopUp #monthlyCloseBtn");

let semiMonthlyBtn  = document.querySelector(".choosePopUp .choiceBtn #semiMonthly");
let semiMonthlyCloseBtn = document.querySelector(".semiMonthlyPopUp #semiMonthlyCloseBtn");

startBtn.addEventListener("click", () => {
    document.querySelector(".choosePopUp").classList.add("active");
});
closeBtn.addEventListener("click", () => {
    document.querySelector(".choosePopUp").classList.remove("active");
});

monthlyBtn.addEventListener("click", () => {
    document.querySelector(".monthlyPopUp").classList.add("active");
});
monthlyCloseBtn.addEventListener("click", () => {
    document.querySelector(".monthlyPopUp").classList.remove("active");
});

semiMonthlyBtn.addEventListener("click", () => {
    document.querySelector(".semiMonthlyPopUp").classList.add("active2");
});
semiMonthlyCloseBtn.addEventListener("click", () => {
    document.querySelector(".semiMonthlyPopUp").classList.remove("active2");
});
// ----- //

//semiMonthly
var philHealth =  0.025;
var sss = 0.075;
var pagIbig = 100;
var minimum = 214.83;
var netIncome;
var grossIncome;
let workHours;

function semiMonthly() {
    var usrName = document.getElementById("name").value;
    var workHours = Number(document.getElementById("hours").value);
    var workDays = Number(document.getElementById("days").value);
    var workLate = Number(document.getElementById("lates").value);
    var workAbsent = Number(document.getElementById("absent").value);

    var absentHours = workAbsent * 9;
    var ttlLoss = absentHours + workLate;
    var totalDays = workDays - workAbsent; //itu gamitin for DAYS if papakita na ung whole info
    var totalHours = workHours - (absentHours + workLate); //itu gamitin for hours if papakita na ung whole info

    grossIncome = ((workHours - ttlLoss) * minimum).toFixed(2);

//UNSURE AKO SA COMPUTATION AHAHHA TAKTE HAHA SORRYY GUYS BOBO AKO _KIRBY
    // Computation Deductions
    var philHealthDeduction = grossIncome * philHealth;
    var sssDeduction = grossIncome * sss;
    var pagIbigDeduction = pagIbig;

    var totalDeductions = philHealthDeduction + sssDeduction + pagIbigDeduction;
    netIncome = grossIncome - totalDeductions;

    // Result ng Div Yung Box naten
    var resultText = `
        <strong>Employee:</strong> ${usrName} <br>
        <strong>Gross Income:</strong> ₱${grossIncome} <br>
        <strong>PhilHealth:</strong> ₱${philHealthDeduction.toFixed(2)} <br>
        <strong>SSS:</strong> ₱${sssDeduction.toFixed(2)} <br>
        <strong>Pag-ibig:</strong> ₱${pagIbigDeduction.toFixed(2)} <br>
        <strong>Total Deductions:</strong> ₱${totalDeductions.toFixed(2)} <br>
        <strong>Net Income:</strong> ₱${netIncome.toFixed(2)}
    `;

    // Display result and activate Result
    document.getElementById("resultText").innerHTML = resultText;
    document.querySelector(".result").classList.add("active");
}

document.getElementById("semiComputeBtn").onclick = semiMonthly;
