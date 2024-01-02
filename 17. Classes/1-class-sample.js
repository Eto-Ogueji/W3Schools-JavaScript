class student {
    constructor(name, age, grade) {

        this.name = name;
        this.age = age;
        this.grade = grade;

        this.description = function() {

            console.log("My name is "+ this.name + ". I am " + this.age + " years old!" + " I am in grade " + this.grade);
        }
    }
}

Student_1 = new student("Eto Ogueji", "18", "12");

student_name_input = prompt("Enter your name: ");

student_age_input = prompt("Enter your age: ");

student_grade_input = prompt("Enter your grade: ");

Student_2 = new student(student_name_input, student_age_input, student_grade_input);

function student_1_info() {

    console.log(Student_1.name);
    console.log(Student_1.age);
    console.log(Student_1.grade);

}

function student_2_info() {

    console.log(Student_2.name);
    console.log(Student_2.age);
    console.log(Student_2.grade);
}

Student_1.description();
Student_2.description();