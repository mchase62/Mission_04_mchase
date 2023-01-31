//jquery

$("#btnSend").click(function () {
    // calculate grade
    assignments = parseInt($("#txtAssignments").val()) * .5;
    groupProjects = parseInt($("#txtGroupProject").val()) * .1;
    quizzes = parseInt($("#txtQuizzes").val()) * .1;
    midterm = parseInt($("#txtMidtermExam").val()) * .1;
    final = parseInt($("#txtFinalExam").val()) * .1;
    intex = parseInt($("#txtIntex").val()) * .1;
    var total = assignments + groupProjects + quizzes + midterm + final + intex;

    // check letter grade
    if (total >= 93) {
        printStatement = total + '% A'
    }
    else if (total >= 90) {
        printStatement = total + '% A-'
    }
    else if (total >= 87) {
        printStatement = total + '% B+!'
    }                               
    else if (total >= 84) {         
        printStatement = total + '% B.'
    }                               
    else if (total >= 80) {         
        printStatement = total + '% B-.'
    }                               
    else if (total >= 77) {         
        printStatement = total + '% C+.'
    }                               
    else if (total >= 74) {         
        printStatement = total + '% C.'
    }                               
    else if (total >= 70) {         
        printStatement = total + '% C-'
    }                               
    else if (total >= 67) {         
        printStatement = total + '% D+'
    }                               
    else if (total >= 64) {         
        printStatement = total + '% D' 
    }                               
    else if (total >= 60) {         
        printStatement = total + '% D-'
    }                               
    else {                          
        printStatement = total + '% E'
    }
    $('#jsresult').html(printStatement);
})
