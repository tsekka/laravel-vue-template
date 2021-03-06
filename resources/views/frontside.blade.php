<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  {{-- <link rel="icon" type="image/png" href="/storage/favicon.png"> --}}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
    rel="stylesheet">
  {{ \App\Vite::assets('timber.local') }}
  @include('_injectables')
  <script>
    window.route_prefix = @json($routePrefix);
  </script>
</head>

<body>
  <div id="app"></div>
</body>

</html>
