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

function main() {
    cc_onStart();
}
main();