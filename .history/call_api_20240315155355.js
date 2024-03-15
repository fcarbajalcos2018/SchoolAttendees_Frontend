function cc_onStart() {
    // Select View
    const viewContainer = document.querySelector('#view');
    console.log(viewContainer);
    // Creation of student list container
    const textContainer = document.createElement('div');
    textContainer.classList.add('student_list');
    viewContainer.appendChild(textContainer);
    // Creation of button field container
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttons');
    viewContainer.appendChild(buttonContainer);
    // Creation of add and delete buttons
    const addStudent = document.createElement('button');
    const delStudent = document.createElement('button');
    addStudent.textContent = 'Add';
    delStudent.textContent = 'Delete';
    buttonContainer.appendChild(addStudent);
    buttonContainer.appendChild(delStudent);
}

async function getData() {
    const resp = await fetch("https://localhost:7141/api/Students")
    const data = await resp.json();
    console.log(data);
    return data;
}

async function cc_onDataCreation() {
    const data = await getData();
    if (data === null || typeof data !== "object") {
        throw new ReferenceError;
    }
    console.log('Data:', data);
    for (const student of data) {
        console.log(student);
    }
}

function main() {
    cc_onStart();
    cc_onDataCreation();
}
main();