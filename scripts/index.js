"use strict";

let data = [
    {
        CourseId: "19SUM100",
        Title: "Introduction to HTML/CSS/Git",
        Instructor: "Wyatt",
        Location: "Classroom 7",
        StartDate: "07/08/19",
        Fee: 100.00,
    },
    {
        CourseId: "19SUM200",
        Title: "Introduction to JavaScript",
        Instructor: "Lynn",
        Location: "Classroom 8",
        StartDate: "07/22/19",
        Fee: 350.00,
    },
    {
        CourseId: "19SUM300",
        Title: "Introduction to Node.JS and Express",
        Instructor: "Gross",
        Location: "Classroom 4",
        StartDate: "09/09/19",
        Fee: 50.00,
    },
    {
        CourseId: "19SUM400",
        Title: "Introduction to SQL and Databases",
        Instructor: "Wyatt",
        Location: "Classroom 6",
        StartDate: "09/16/19",
        Fee: 50.00,
    },
    {
        CourseId: "19SUM500",
        Title: "Introduction to Angular",
        Instructor: "Lynn",
        Location: "Classroom 7",
        StartDate: "09/23/19",
        Fee: 50.00,
    },
    {
        CourseId: "19SUM600",
        Title: "Introduction to C",
        Instructor: "Jones",
        Location: "Classroom 8",
        StartDate: "09/25/19",
        Fee: 50.00,
    },
    {
        CourseId: "19SUM700",
        Title: "Introduction to C++",
        Instructor: "Wyatt",
        Location: "Classroom 9",
        StartDate: "09/01/19",
        Fee: 50.00,
    },
    {
        CourseId: "19SUM800",
        Title: "Introduction to Critical Thinking",
        Instructor: "Wyatt",
        Location: "Classroom 7",
        StartDate: "07/08/19",
        Fee: 100.00,
    },
    {
        CourseId: "19SUM900",
        Title: "Introduction to Happy",
        Instructor: "Lynn",
        Location: "Classroom 8",
        StartDate: "07/22/19",
        Fee: 350.00,
    },
    {
        CourseId: "19SUM350",
        Title: "Introduction to Math",
        Instructor: "Gross",
        Location: "Classroom 4",
        StartDate: "09/09/19",
        Fee: 50.00,
    }
];


window.onload = function () {
    loadTitlesDropdown();

    const showDetailsBtn = document.getElementById("showBtn");
    showDetailsBtn.onclick = showDetailsBtnClicked;

}

function loadTitlesDropdown() {
    const titlesDropdown = document.getElementById("titlesDropdown");

    // create <option value="">Select One...</option> as first option
    let selectOneOption = new Option("select one...", "");
    //let selectOneOption = document.createElement("option");
    titlesDropdown.appendChild(selectOneOption);


    for (let i = 0; i < data.length; i++) {
        // create an option each time we go thru the loop
        // <option value="xxx">text</option>
        let theOption = document.createElement("option");
        theOption.textContent = data[i].Title;
        theOption.value = data[i].CourseId;

        // add that option to the <select> element
        titlesDropdown.appendChild(theOption);
    }
}


function showDetailsBtnClicked() {
    // find where the data will show on the apge
    const courseIdPara = document.getElementById("courseIdPara");
    const titlePara = document.getElementById("titlePara");
    const startDatePara = document.getElementById("startDatePara");
    const feePara = document.getElementById("feePara");

    // ADD THIS TO CLEAR ANY PREVIOUS DESCRIPTION JUST IN CASE THERE IS AN ERROR
    courseIdPara.innerHTML = "";
    titlePara.innerHTML = "";
    startDatePara.innerHTML = "";
    feePara.innerHTML = "";

    // get the (value of) hike selected from the dropdown list
    const titlesDropdown = document.getElementById("titlesDropdown");
    let selectedId = titlesDropdown.value;

    // ADD TO TEST TO SEE IF THE USER SELECTED "SELECTED ONE..." BEFORE THEY CLICKED THE BUTTON
    // testing to see if the user has selected "Selected one..."
    if (selectedId == "") {
        alert("Please select a course first");
        return;
    }

    // go find that hike in the array of hiking data (we will match by the id of the hike
    // that was in the VALUE of the selected dropdown - the description of the hike was
    // the text of the dropdown selection)
    let matchingTitle = data.find(arrayElement => arrayElement.CourseId == selectedId);

    // display the specific matching hiking data below the button in the details area
    courseIdPara.innerHTML = matchingTitle.CourseId; // show description in one para
    titlePara.innerHTML = "Title: " + matchingTitle.Title; // show hike length in the other paragraph
    startDatePara.innerHTML = matchingTitle.StartDate;
    feePara.innerHTML = matchingTitle.Fee;
    // // display the specific matching hiking data below the button in the details area 
    // descriptionPara.innerHTML = matchingHike.description;
    // lengthPara.innerHTML = "Length: " + matchingHike.length;
}
