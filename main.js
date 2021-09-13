var name_of_student = [];
function submit(){


var student1 = document.getElementById("student_1").value;
var student2 = document.getElementById("student_2").value;
var student3 = document.getElementById("student_3").value;
var student4 = document.getElementById("student_4").value;

name_of_student.push(student1);
name_of_student.push(student2);
name_of_student.push(student3);
name_of_student.push(student4);
console.log (name_of_student);
document.getElementById("Display").innerHTML = name_of_student;

document.getElementById("submit_button").style.display ="none";
document.getElementById("sort_button").style.display ="inline-block";
}
function sort(){
    name_of_student.sort();
    console.log (name_of_student);
    document.getElementById("Display").innerHTML = name_of_student;
}

