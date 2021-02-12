// let columnIdCounter = 4;
let el = document.querySelectorAll('[data-action-addNote]')

Array.from(el).forEach(function (element) {
    element.addEventListener('click', colunmProcess);
});
//-------------- редактирование заметок --------------
document.querySelectorAll('.note').forEach(process)

let addColumn = document.querySelector('[data-action-addColumn]');

addColumn.addEventListener('click', function () {

    let allColumns = document.querySelector('.columns');
    // -------- создаем колонку ----------
    let createColumn = document.createElement('div');
    createColumn.classList.add('column');
    createColumn.dataset.actionAdd = '';
    createColumn.setAttribute('draggable', 'true');
    // ------- создаем form для ввода title -------
    let formTitleColumn = document.createElement('div');
    formTitleColumn.classList.add('inputTitleBlock');

    // ------- создаем input title and buttons -------
    let inputTitleTable = document.createElement('input');
    inputTitleTable.classList.add('inputHeaderName');

    let blockBtnFromTitle = document.createElement('div');
    blockBtnFromTitle.classList.add('blockBtnFromTitle')

    let addTitleBtn = document.createElement('button');

    addTitleBtn.classList.add('addTitleToColumn');
    addTitleBtn.textContent = 'Добавить список';

    let hideTitleBtn = document.createElement('button');

    hideTitleBtn.classList.add('hideTitleToColumn');
    hideTitleBtn.textContent = "X";

    formTitleColumn.append(inputTitleTable); //  добавляем input в form
    blockBtnFromTitle.append(addTitleBtn);
    blockBtnFromTitle.append(hideTitleBtn);
    formTitleColumn.append(blockBtnFromTitle); //  добавляем div с кнопками в form

    createColumn.append(formTitleColumn); // добавляем блок (inputTitleBlock) в колонку

    allColumns.append(createColumn);

    addTitleBtn.addEventListener('click', addTitle); //добавляем название карточки

    function addTitle() {
        let inputTitleValue = inputTitleTable.value;

        if (inputTitleValue.trim().length === 0) {
            createColumn.remove();
        } else {
            let titleColumn = document.createElement('p');
            titleColumn.textContent = inputTitleValue;
            titleColumn.classList.add('column-header');
            formTitleColumn.style.display = 'none';
            createColumn.append(titleColumn);
            let cardContainer = document.createElement('div');
            cardContainer.dataset.notes = true;
            createColumn.append(cardContainer);
        }
        axios({
            method: 'post',
            url: `/columns`,
            data: {
                name: inputTitleValue,
                board_id: 1,
            }
        }).then(response => {
            let data = response.data;
            createColumn.dataset.columnId = data.id;

            let columnFooter = document.createElement('p');
            columnFooter.classList.add('column-footer');

            let addNote = document.createElement("span");
            addNote.dataset.actionAddNote = true;
            addNote.dataset.column = data.id;
            addNote.classList.add('action');
            addNote.textContent = '+ Добавить карточку';
            addNote.addEventListener('click', colunmProcess)

            columnFooter.append(addNote)
            createColumn.append(columnFooter);
        });

        console.log(inputTitleValue)
    }
    hideTitleBtn.addEventListener('click', closeCreateTitle);
    function closeCreateTitle() {
        createColumn.remove();
    }
});
//-------------- ф-я добавления заметок в колонку--------------
function colunmProcess(e) {
    let target = e.target;

    let noteElement = document.createElement('div');       // создаем div для карточки
    let columnId = target.dataset.column;                        // достаем атрибут на элемент по клику

    noteElement.dataset.column = columnId;                         // вешаем атрибут на элемент

    noteElement.classList.add('note');
    noteElement.setAttribute('draggable', 'true');
    noteElement.setAttribute('contenteditable', 'true');
    console.log(target)
    console.log(target.parentElement.previousElementSibling.append(noteElement))

    process(noteElement);

    noteElement.focus();

    target.addEventListener('dragover', (event) => {
        event.preventDefault();
    })

    target.addEventListener('drop', (event) => {
        if (Note.dragged) {
            return target.parentElement.previousElementSibling.append(Note.dragged);
        }
    })

    // -------------- заголовок таблицы, добавляем событие ред-ия на заголовок

    // let headerElement = createColumn.querySelector('.column-header');
    //     headerElement.addEventListener('dblclick', () => {
    //     headerElement.setAttribute('contenteditable', 'true');
    //     headerElement.focus();
    // })
    //
    // headerElement.addEventListener('blur', () => {
    //     headerElement.removeAttribute('contenteditable', 'true');
    // })
    //
}


