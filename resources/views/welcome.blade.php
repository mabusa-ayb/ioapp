@extends('layouts.app')
@section('content')
    @include('inc.navbar')
    <main class="py-4">
        <router-view></router-view>
    </main>
@endsection