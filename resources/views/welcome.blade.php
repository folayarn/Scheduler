<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="{{secure_asset('css/app.css')}}">

        <title>Laravel</title>

    </head>
    <body>
        <div id="example">


        </div>


    </body>
    <script src={{mix('js/app.js')}}></script>

</html>
