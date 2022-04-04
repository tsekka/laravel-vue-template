@if ($gtagId = config('analytics.id'))
  <script async src="https://www.googletagmanager.com/gtag/js?id={{ $gtagId }}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', '{{ $gtagId }}');
  </script>
@endif
@if (!app()->isProduction())
  <meta name="robots" content="noindex">
@endif
  <meta name=app content='<?php if (isset($injectables)) {
    echo str_replace("'", '&#39;', json_encode($injectables));
} ?>'>
