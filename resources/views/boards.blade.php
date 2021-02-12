<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">

    <link href="style.css" rel="stylesheet" type="text/css">
    <link href="modal.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700&display=swap&subset=cyrillic-ext"
          rel="stylesheet">
    <title>Trello</title>
</head>

<body>
<ul>

@foreach($boards as $board)
    <li>
        {{ $board->name }}
    </li>
@endforeach

</ul>

<script src="/column.js"></script>
<script src="/note.js"></script>
<script src="row.js"></script>
<script src="script.js"></script>
<script src="modal.js"></script>
</body>

</html>
