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

}

function loadTitlesDropdown() {
    const titlesDropdown = document.getElementById("titlesDropdown");

    // create <option value="">Select One...</option>
    let selectOneOption = new Option("select one...", "");
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
