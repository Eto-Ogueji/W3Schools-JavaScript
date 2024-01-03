const staffMember = {
    title: "Professor",
    firstName: "Michael",
    lastName: "Davidson",
    faculty: "Engineering",
    department: "Mechanical Engineering"
}

console.log(staffMember.title);
console.log(staffMember.firstName);
console.log(staffMember.lastName);
console.log(staffMember.faculty);
console.log(staffMember.department);

// OR

console.log(staffMember["title"]);
console.log(staffMember["firstName"]);
console.log(staffMember["lastName"]);
console.log(staffMember["faculty"]);
console.log(staffMember["department"]);

// OR

a, b, c, d, e = "title'", "firstName", "lastName", "faculty", "department"

console.log(staffMember[a]);
console.log(staffMember[b]);
console.log(staffMember[c]);
console.log(staffMember[d]);
console.log(staffMember[e]);