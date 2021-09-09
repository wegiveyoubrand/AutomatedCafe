const query = document.querySelector('#query-data');
const queryResult = document.querySelector('.query-result-data');

// Search students.json and filter it

const queryData = async queryText => {
    const res = await fetch('/js/data/students.json');
    const students = await res.json();

    // Get Matches to current text input

    let results = students.filter(student => {
        const regex = new RegExp(`^${queryText}`, 'gi');

        return student.matricNumber.match(regex) || student.JAMBRegNumber.match(regex)
    });

    if (queryText.length === 0) {
        results = [];
        queryResult.innerHTML ='';
    }; 

    outputHTML(results);
}

// Show results in HTML

const outputHTML = results => {
    if (results.length > 0) {
        const html = results.map(student => `
            <li>
                <span id="regNumber">${student.matricNumber}</span>
                <span id="firstName">${student.name.first}</span>
            </li>
            `).join('');

        queryResult.innerHTML = html;
    };
}

query.addEventListener('input', () => queryData(query.value));

const studentName = document.querySelector("#studentName");

