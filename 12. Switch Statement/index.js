// switch (new Date().getDay()) {
//     case 0:
//         day = "Sunday";
//         break;
    
//     case 1:
//         day = "Monday";
//         break;

//     case 2:
//         day = "Tuesday";
//         break;

//     case 3:
//         day = "Wednesday";
//         break;

//     case 4:
//         day = "Thursday";
//         break;

//     case 5:
//         day = "Friday";
//         break;

//     case 6:
//         day = "Saturday";
// }

let text;

switch (new Date().getDay()) {
    case 6:
        text = "Today is Saturday";
        break;
    
    case 0:
        text = "Today is Sunday";
        break;

    default:
        text = "Looking forward to the Weekend"
};

console.log(text);

let text2;

switch (new Date().getDay()) {
    case 4:
    case 5:
        text2 = "Soon it is weekend";
        break;
    
    case 0:
    case 6:
        text2 = "It is weekend";
        break;

    default:
        text2 = "Looking forward to the Weekend";
}

console.log(text2);