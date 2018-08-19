function attachEvents() {

    const URL = 'https://baas.kinvey.com/appdata/kid_BJXTsSi-e/students';
    const USER = 'guest';
    const PASSWORD = 'guest';
    const BASE_64 = btoa(USER + ':' + PASSWORD);
    const AUTH = {"Authorization": 'Basic ' + BASE_64};
    const BODY = $('#results').children();

    getStudents();

    let addBtn = $(`.add`);
    addBtn.on('click', addStudent);

    function getStudents() {

        $.ajax({
            method: "GET",
            url: URL,
            headers: AUTH
        }).then(listStudents).catch(handleErr)
    }


    function addStudent() {

        let inputs = $('#addForm').find('input');
        let id = $(inputs[0]).val();
        let firstName = $(inputs[1]).val();
        let lastName = $(inputs[2]).val();
        let facultyNumber = $(inputs[3]).val();
        let grade = $(inputs[4]).val();

        if (id !== '' && firstName !== '' && lastName !== '' && facultyNumber !== '' && grade !== '') {

            $.ajax({
                method: 'POST',
                url: URL,
                headers: {"Authorization": 'Basic ' + BASE_64, "Content-type": 'application/json'},
                data: JSON.stringify({
                    ID: Number(id),
                    FirstName: firstName,
                    LastName: lastName,
                    FacultyNumber: facultyNumber,
                    Grade: Number(grade)
                })
            }).then(getStudents).catch(handleErr)

        }

        for (let input of inputs) {
            $(input).val('');
        }


    }

    function listStudents(students) {
        let firstRow = $(`tbody tr`).first();
        BODY.empty();
        BODY.append(firstRow);
        let sortedStudents = students.sort((a, b) => a.ID - b.ID);
        for (let student of sortedStudents) {
            let currRow = $(`<tr>`);

            let tdID = $(`<td>${student.ID}</td>`);
            let tdFirstName = $(`<td>${student.FirstName}</td>`);
            let tdLastName = $(`<td>${student.LastName}</td>`);
            let tdFacultyNumber = $(`<td>${student.FacultyNumber}</td>`);
            let tdGrade = $(`<td>${student.Grade}</td>`);

            currRow.append(tdID);
            currRow.append(tdFirstName);
            currRow.append(tdLastName);
            currRow.append(tdFacultyNumber);
            currRow.append(tdGrade);
            currRow.appendTo(BODY);
        }

    }

    function handleErr(err) {
        console.log(err);
    }
}

