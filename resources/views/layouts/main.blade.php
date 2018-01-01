<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Vue CRUD</title>

    <!-- Styles -->
    <link rel="shortcut icon" href="{{{ asset('img/c.png') }}}">
    <link href="{{{ asset('css/bootstrap.min.css')}}}" rel="stylesheet">
    <link href="{{{ asset('css/style.css')}}}" rel="stylesheet">

    <!-- Scripts -->
    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
</head>
<body>
    <div id="app">
        @yield('content')
    </div>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{{ asset('js/jquery-3.2.1.min.js')}}}"></script>
    <script src="{{{ asset('js/bootstrap.min.js')}}}"></script>
    <script src="{{{ asset('js/script.js')}}}"></script>
</body>
</html>
