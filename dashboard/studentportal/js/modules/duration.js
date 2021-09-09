const instituteData = [
    {
        name: "",
        session: "",
        semester: "",
    },
];

const courseofStudy = [
    {
        course: "Medicine",
        duration: 6,
    },
];

/* ===== DECLARING VARIABLES AND CONSTANTS ===== */
const sideBar = document.querySelector(".side-container");
const menuControl = document.querySelector(".menu");

const liveSearchControl = document.querySelector(".liveSearchAdd");
const liveSearchDisplay = document.querySelector(".live-search-query");

const MAX_QUERY_RESULT_DISPLAY = 10;


function courseDuration() {
    if (studentData.course.duration <= 1) {
        console.log(
            `Course of study, ${studentData.course.name} is in ${studentData.course.duration} year`
        );
    } else {
        return `Course of study, ${studentData.course.name} is in ${studentData.course.duration} years`;
    }
}

