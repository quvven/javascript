function Course(title, instructor, image) {
    this.title = title;
    this.instructor = instructor;
    this.image = image;

}

function UI() {
    
}

UI.prototype.addCourseList = function (course) {
    const list = document.getElementById('course-list');

    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');

    var img = document.createElement('img');
    var a = document.createElement('a');
    
    img.setAttribute('src', `img/${course.image}`);
    img.setAttribute('width', '78');
    img.setAttribute('height', '64');

    a.setAttribute('href', '#');
    a.classList.add('btn');
    a.classList.add('btn-danger');
    a.classList.add('btn-sm');
    a.classList.add('delete');
    a.innerHTML = "Delete";

    td1.appendChild(img);
    td2.innerHTML=`${course.title}`;
    td3.innerHTML=`${course.instructor}`;
    td4.appendChild(a);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    list.appendChild(tr);

}

UI.prototype.clearControls = function () {
    const title = document.getElementById('title').value = "";
    const instructor = document.getElementById('instructor').value = "";
    const image = document.getElementById('image').value = "";
    
}

UI.prototype.deleteItem = function (elem) {
    //console.log(elem);

    if(elem.classList.contains('delete')) {
        elem.parentElement.parentElement.remove();
    }
}

UI.prototype.showAlert = function (message, level) {
    var alert = `
    <div class="alert alert-${level}">${message}</div>
    `;
    const row = document.querySelector('.row').insertAdjacentHTML('beforebegin', alert);

    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000);
}

document.getElementById('new-course').addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('title');
    const instructor = document.getElementById('instructor');
    const image = document.getElementById('image');

    console.log(title.value, instructor.value, image.value);

    // create object
    const course = new Course(title.value, instructor.value, image.value);

    // ui init
    const ui = new UI();
    console.log(ui);

    if(
        title.value === "" ||
        title.instructor === "" ||
        title.image === ""
    ) {
        ui.showAlert("Eksik bilgi, lütfen formu doldurun!", "warning");
    } else {
            
        // add course
        ui.addCourseList(course);

        // clear form
        ui.clearControls();

        ui.showAlert("Kayıt başarıyla eklendi!", "success");
    }

})

document.getElementById('course-list').addEventListener('click', function (e) {
    const ui = new UI();
    ui.deleteItem(e.target);
    ui.showAlert("Kayıt Silindi!", "danger");
})
