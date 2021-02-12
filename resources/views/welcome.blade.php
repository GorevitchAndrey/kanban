<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">

    <link href="/modal.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700&display=swap&subset=cyrillic-ext"
          rel="stylesheet">
    <link href="/css/app.css" rel="stylesheet" type="text/css">

    <title>Trello board</title>
</head>

<body>
<div class="container">
    <div class="header">
        <div class="about">
           
            <div class="nameBoard"></div>
           
            <div class="addUsers"> Добавить учасников</div>
        </div>
        <div class="logoBoard"></div>
        <div><button class="showMore">+ Меню</button></div>
        <div class="backgroundBlock">
            <div class="changeBackgroundColor">
                <button class="hideMore">x</button>
                <h6>Сменить цвет фона</h6>
                <input class="changeColor" type="color" value="#e0feff">
                <button class="btnChangeColor">Применить</button>
                <!-- <hr>
                <h5>Добавить изображение фону</h5>
                <div class="changeBackgroundImages">
                    <div class="img img1"><img class="backgroundImage" src="/img/background1.jpg"></div>
                    <div class="img img2"><img class="backgroundImage" src="/img/background2.jpg"></div>
                    <div class="img img3"><img class="backgroundImage" src="/img/background3.jpg"></div>
                    <div class="img img4"><img class="backgroundImage" src="/img/background4.jpg"></div>
                    <div class="img img5"><img class="backgroundImage" src="/img/background5.jpg"></div>
                    <div class="img img6"><img class="backgroundImage" src="/img/background6.jpg"></div>
                </div> -->
            </div>
        </div>
    </div>

    <div class="row">

        <div class="columns">
            @foreach($columns as $column)
            <div class="column" draggable="true" data-column-id="{{ $column->id }}">
                <p class="column-header">{{$column->name}}</p>

                <div data-notes>
                    @foreach($column->cards as $card)
                    <div class="note" draggable="true" data-note-id="{{ $card->id }}" data-column="{{ $column->id }}">
                        {{$card->name}}
                    </div>
                    @endforeach
                </div>
                <p class="column-footer">
                    <span data-action-addNote class="action1" data-column="{{ $column->id }}">
                        + Добавить карточку
                    </span>
                </p>
            </div>
            @endforeach
        </div>

        <div class="adder">
            <span data-action-addColumn class="action">+ Добавить колонку</span>
        </div>
    </div>
</div>

<div class="modal">
    <div class="modal-overlay">
        <div class="modal-window">

            <div class="modal-header">
                @foreach($column->cards as $card)
                <span class="modal-title">{{$card->name}}</span>
                @endforeach
                <span class="modal-close">&times;</span>
            </div>

            <div class="modal-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque necessitatibus cum laudantium
                    sequi deserunt! Distinctio?</p>

                <form action="/comment/submit" method="post">
                    @csrf
                    <div class="form-group">
                        <label for="message">Добавить описание</label>
                        <textarea name="message" placeholder="Введите подробное описание" id="message" class="form-control"></textarea>
                    </div>
                    <button class="modal-body__save" type="submit">Сохранить</button>
                    <span class="modal-body__close">&times;</span>
                </form>
            </div>

            <div class="modal-footer">

            </div>

        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/changeBackground.js"></script>
<script src="/note.js"></script>
<script src="/modal.js"></script>

<script src="/script.js"></script>
</body>

</html>
