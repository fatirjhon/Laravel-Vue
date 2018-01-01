@extends('layouts.main')

@section('content')
<section>
    <div class="jumbotron text-center" id="jumbotron">
        <img src="img/sun.png" id="sun">
        <img src="img/a.png" id="a">
        <img src="img/b.png" id="b">
        <img src="img/c.png" id="c">
    </div>
</section>

<section>
<div class="container" id="astro">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading text-center"><h3>Data Astronaut</h3></div>
                <div class="panel-body">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
@endsection
