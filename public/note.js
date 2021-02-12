const Note = {
    //э-нт который перетаскиваем
    dragged: null,
}
// ф-я для редактирования заметок
function process(noteElement) {
    noteElement.addEventListener('click', () => {
        //noteElement.setAttribute('contenteditable', true);
        noteElement.removeAttribute('draggable');
        noteElement.closest('.column').removeAttribute('draggable');
        // если убираем фокус, кликаем 3 раза
        noteElement.focus();
    });
    // фокус уходит - удаляем атрибут contenteditable
    noteElement.addEventListener('blur', (e) => {
        noteElement.removeAttribute('contenteditable');
        console.log(e.target);
        noteElement.closest('.column').setAttribute('draggable', true);
        if (noteElement.textContent.trim().length === 0) {
            noteElement.remove();
        }
        // записываем в базу id и name карточки
        let columnId = e.target.dataset.column;
        console.log(`columnId --- ${columnId}`);

        let nameCard = e.target.outerText;
        console.log(`nameCard --- ${nameCard}`);

        let bodyFormData = new FormData();
        bodyFormData.set('column_id', columnId);
        bodyFormData.set('name', nameCard);

        axios({
            method: 'post',
            url: `/cards`,
            data: bodyFormData
        });
    });
    noteElement.addEventListener('dragstart', dragstart_noteHandler);
    noteElement.addEventListener('dragend', dragend_noteHandler);
    noteElement.addEventListener('dragenter', dragenter_noteHandler);
    noteElement.addEventListener('dragover', dragover_noteHandler);
    noteElement.addEventListener('dragleave', dragleave_noteHandler);
    noteElement.addEventListener('drop', drop_noteHandler);
}
//  -------------- ф-ии перетаскивания заметок-----------------------

function dragstart_noteHandler(event) {
    console.log(event)
    Note.dragged = this;
    this.classList.add('dragged');
    event.stopPropagation();
}

function dragend_noteHandler() {
    Note.dragged = null;
    this.classList.remove('dragged');
    document.querySelectorAll('.note').forEach(x => {
        x.classList.remove('under');
    })
}

function dragenter_noteHandler() {
    if (this === Note.dragged) {
        return
    }
    this.classList.add('under');
}

function dragover_noteHandler(event) {
    event.preventDefault();
    if (this === Note.dragged) {
        return
    }
}

function dragleave_noteHandler() {
    if (this === Note.dragged) {
        return
    }
    this.classList.remove('under');
}

function drop_noteHandler(event) {
    event.stopPropagation();
    if (this === Note.dragged) {
        return
    }
    if (this.parentElement === Note.dragged.parentElement) {
        const note = Array.from(this.parentElement.querySelectorAll('.note'));
        const indexA = note.indexOf(this);
        const indexB = note.indexOf(Note.dragged);

        if (indexA < indexB) {
            this.parentElement.insertBefore(Note.dragged, this);
        } else {
            this.parentElement.insertBefore(Note.dragged, this.nextElementSibling);
        }
    } else {
        this.parentElement.insertBefore(Note.dragged, this);
    }
}
