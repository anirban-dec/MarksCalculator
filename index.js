function total() {
    
    let sub1 = parseInt(document.getElementById("math").value);
    let sub2 = parseInt(document.getElementById("sci").value);
    let sub3 = parseInt(document.getElementById("eng").value);
    let sub4 = parseInt(document.getElementById("hin").value);
    let sub5 = parseInt(document.getElementById("comp").value);
    
    if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100) {
        alert("Wrong Data Entered");
    }

    
    else {
        let total = sub1 + sub2 + sub3 + sub4 + sub5;
        document.getElementById("total").innerHTML = `Mathemetics: ${sub1} <br> Science: ${sub2}<br>English: ${sub3}<br>Hindi: ${sub4}<br>Computer: ${sub5}<br><br><h2>Total:${total}<\h2>`;
    }
    if(sub1<33||sub2<33||sub3<33||sub4<33||sub5<33){
        document.getElementById("ress").innerHTML="Fail"
        document.getElementById("ress").style.color="red";
    }
    
    else{
        document.getElementById("ress").innerHTML="Pass"
        document.getElementById("ress").style.color="darkgreen";
    }
}


function grade() {
    let sub1 = parseInt(document.getElementById("math").value);
    let sub2 = parseInt(document.getElementById("sci").value);
    let sub3 = parseInt(document.getElementById("eng").value);
    let sub4 = parseInt(document.getElementById("hin").value);
    let sub5 = parseInt(document.getElementById("comp").value);

    

    
        let total = sub1 + sub2 + sub3 + sub4 + sub5;
        let avg = (total / 5);

        if (avg >= 90 && avg <= 100) {
            document.getElementById("grade").innerHTML = `Total Grade: A+`;
        }
        else if (avg >= 80 && avg <= 90) {
            document.getElementById("grade").innerHTML = `Total Grade: A`;
        }
        else if (avg >= 70 && avg <= 80) {
            document.getElementById("grade").innerHTML = `Total Grade: B+`;
        }
        else if (avg >= 60 && avg <= 70) {
            document.getElementById("grade").innerHTML = `Total Grade: B`;
        }
        else if (avg >= 50 && avg <= 60) {
            document.getElementById("grade").innerHTML = `Total Grade: C+`;
        }
        else if (avg >= 40 && avg <= 50) {
            document.getElementById("grade").innerHTML = `Total Grade: C`;
        }
        else if (avg >= 33 && avg <= 40) {
            document.getElementById("grade").innerHTML = `Total Grade: D`;
        }
        else {
            document.getElementById("grade").innerHTML = `Total Grade: E`;
        }


    
    if (sub1 >= 90 && sub1 <= 100) {
        document.getElementById("mathgrade").innerHTML = `Mathematics: A+`;
    }
    else if (sub1 >= 80 && sub1 <= 90) {
        document.getElementById("mathgrade").innerHTML = `Mathematics: A`;
    }
    else if (sub1 >= 70 && sub1 <= 80) {
        document.getElementById("mathgrade").innerHTML = `Mathematics: B+`;
    }
    else if (sub1 >= 60 && sub1 <= 70) {
        document.getElementById("mathgrade").innerHTML = `Mathematics: B`;
    }
    else if (sub1 >= 50 && sub1 <= 60) {
        document.getElementById("mathgrade").innerHTML = `Mathematics: C+`;
    }
    else if (sub1 >= 40 && sub1 <= 50) {
        document.getElementById("mathgrade").innerHTML = `Mathematics: C`;
    }
    else if (sub1 >= 33 && sub1 <= 40) {
        document.getElementById("mathgrade").innerHTML = `Mathematics: D`;
    }
    else {
        document.getElementById("mathgrade").innerHTML = `Mathematics: E`;
    }

    if (sub2 >= 90 && sub2 <= 100) {
        document.getElementById("scigrade").innerHTML = `Science: A+`;
    }
    else if (sub2 >= 80 && sub2 <= 90) {
        document.getElementById("scigrade").innerHTML = `Science: A`;
    }
    else if (sub2 >= 70 && sub2 <= 80) {
        document.getElementById("scigrade").innerHTML = `Science: B+`;
    }
    else if (sub2 >= 60 && sub2 <= 70) {
        document.getElementById("scigrade").innerHTML = `Science: B`;
    }
    else if (sub2 >= 50 && sub2 <= 60) {
        document.getElementById("scigrade").innerHTML = `Science: C+`;
    }
    else if (sub2 >= 40 && sub2 <= 50) {
        document.getElementById("scigrade").innerHTML = `Science: C`;
    }
    else if (sub2 >= 33 && sub2 <= 40) {
        document.getElementById("scigrade").innerHTML = `Science: D`;
    }
    else {
        document.getElementById("scigrade").innerHTML = `Science: E`;
    }

    if (sub3 >= 90 && sub3 <= 100) {
        document.getElementById("enggrade").innerHTML = `English: A+`;
    }
    else if (sub3 >= 80 && sub3 <= 90) {
        document.getElementById("enggrade").innerHTML = `English: A`;
    }
    else if (sub3 >= 70 && sub3 <= 80) {
        document.getElementById("enggrade").innerHTML = `English: B+`;
    }
    else if (sub3 >= 60 && sub3 <= 70) {
        document.getElementById("enggrade").innerHTML = `English: B`;
    }
    else if (sub3 >= 50 && sub3 <= 60) {
        document.getElementById("enggrade").innerHTML = `English: C+`;
    }
    else if (sub3 >= 40 && sub3 <= 50) {
        document.getElementById("enggrade").innerHTML = `English: C`;
    }
    else if (sub3 >= 33 && sub3 <= 40) {
        document.getElementById("enggrade").innerHTML = `English: D`;
    }
    else {
        document.getElementById("enggrade").innerHTML = `English: E`;
    }

    if (sub4 >= 90 && sub4 <= 100) {
        document.getElementById("hindigrade").innerHTML = `Hindi: A+`;
    }
    else if (sub4 >= 80 && sub4 <= 90) {
        document.getElementById("hindigrade").innerHTML = `Hindi: A`;
    }
    else if (sub4 >= 70 && sub4 <= 80) {
        document.getElementById("hindigrade").innerHTML = `Hindi: B+`;
    }
    else if (sub4 >= 60 && sub4 <= 70) {
        document.getElementById("hindigrade").innerHTML = `Hindi: B`;
    }
    else if (sub4 >= 50 && sub4 <= 60) {
        document.getElementById("hindigrade").innerHTML = `Hindi: C+`;
    }
    else if (sub4 >= 40 && sub4 <= 50) {
        document.getElementById("hindigrade").innerHTML = `Hindi: C`;
    }
    else if (sub4 >= 33 && sub4 <= 40) {
        document.getElementById("hindigrade").innerHTML = `Hindi: D`;
    }
    else{
        document.getElementById("hindigrade").innerHTML = `Hindi: E`;
    }

    if(sub5>=90 && sub5<=100){
        document.getElementById("compgrade").innerHTML=`Computer: A+`;
    }
    else if(sub5>=80 && sub5<=90){
        document.getElementById("compgrade").innerHTML=`Computer: A`;
    }
    else if(sub5>=70 && sub5<=80){
        document.getElementById("compgrade").innerHTML=`Computer: B+`;
    }
    else if(sub5>=60 && sub5<=70){
        document.getElementById("compgrade").innerHTML=`Computer: B`;
    }
    else if(sub5>=50 && sub5<=60){
        document.getElementById("compgrade").innerHTML=`Computer: C+`;
    }
    else if(sub5>=40 && sub5<=50){
        document.getElementById("compgrade").innerHTML=`Computer: C`;
    }
    else if(sub5>=33 && sub5<=40){
        document.getElementById("compgrade").innerHTML=`Computer: D`;
    }
    else{
        document.getElementById("mathgrade").innerHTML=`Computer: E`;
    }

    if(sub1<33||sub2<33||sub3<33||sub4<33||sub5<33){
        document.getElementById("ress").innerHTML="Fail"
        document.getElementById("ress").style.color="red";
    }
    
    else{
        document.getElementById("ress").innerHTML="Pass"
        document.getElementById("ress").style.color="darkgreen";
    }
}



    function Percentage() {
        let sub1 = parseInt(document.getElementById("math").value);
        let sub2 = parseInt(document.getElementById("sci").value);
        let sub3 = parseInt(document.getElementById("eng").value);
        let sub4 = parseInt(document.getElementById("hin").value);
        let sub5 = parseInt(document.getElementById("comp").value);
        let total = sub1 + sub2 + sub3 + sub4 + sub5;
        let percent = (total / 5);

        if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100) {
            alert("Wrong Data Entered");
        }
        else {
            document.getElementById("per").innerHTML = `Total Percentage: ${percent}%`
        }

        document.getElementById("mathper").innerHTML=`Mathematics: ${sub1}%`;
        document.getElementById("sciper").innerHTML=`Science: ${sub2}%`;
        document.getElementById("engper").innerHTML=`English: ${sub3}%`;
        document.getElementById("hinper").innerHTML=`Hindi: ${sub4}%`;
        document.getElementById("compper").innerHTML=`Computer: ${sub5}%`;

        if(sub1<33||sub2<33||sub3<33||sub4<33||sub5<33){
            document.getElementById("ress").innerHTML="Fail"
            document.getElementById("ress").style.color="red";
        }
        
        else{
            document.getElementById("ress").innerHTML="Pass"
            document.getElementById("ress").style.color="darkgreen";
        }
    }

