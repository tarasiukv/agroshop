<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Agroshop">
    <meta name="keywords" content="Agroshop">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Agroshop</title>
    @vite('resources/css/app.css')
{{--    <!-- Google Font -->--}}
{{--    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap" rel="stylesheet">--}}

</head>
    <body>
        <div id="app"></div>
        @vite('resources/js/app.js')
        <script type="module" src="{{ asset('assets/js/main.js') }}"></script>

    </body>
</html>
