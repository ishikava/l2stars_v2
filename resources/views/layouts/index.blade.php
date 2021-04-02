<!DOCTYPE html>
<html lang="ru">

@include('layouts.head')

{{--
<body style="background-image: url('/brand/{{$brand->image}}')">
--}}

<body>

@include('layouts.topmenu')

<div class="container scene">

    <div class="content">
        @yield('content')
    </div>

    @include('layouts.footer')

</div>

</body>
</html>
