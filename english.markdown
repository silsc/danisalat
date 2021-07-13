---
layout: default
title: Index
---
<body>
    <div class="banner-line-vertical"></div>
    <div class="navbar">
        <div class="navbar-links">
            <a class="navbar-logo" href="#">
                <img src="/assets/ellipse.png"/>
            </a>
            <a class="nav-link" href="#home">Home</a>
            <a class="nav-link" href="#servicios">Services</a>
            <a class="nav-link" href="#sobremi">About me</a>
            <a class="nav-link" href="#trabajo">Work</a>
            <a class="nav-link" href="#opiniones">Reviews</a>
            <a class="nav-link" href="#contacto">Contact</a>
        </div>
        <div class="navbar-lang tooltip">
          <a href="/index">
            <span class="iconify" data-inline="false" data-icon="fontisto:world-o" style="font-size: 32px;"></span>
            <span class="tooltiptext">Español</span>
          </a>
        </div>
    </div>
    <div id="home">
        <div class="banner-title">
            <h1>Dani Salat</h1>
        </div>
        <div class="year">
            <p>FROM 2015</p>
        </div>
        <div class="banner-info">
            <h4>ROCK & METAL PRODUCER, <span>BARCELONA</span></h4>
        </div>
        <div class="banner-text">
            <h2 class="effect-shine">IMPACT</h2>
            <h2 class="effect-shine">DEFINITION</h2>
            <h2 class="effect-shine">DEPTH</h2>
        </div>
        <a class="banner-button" href="#contacto">Let's talk</a>
        <div class="banner-line-horizontal-one">
        </div>
        <div class="banner-line-horizontal-two">
        </div>
        <div class="banner-line-horizontal-three">
        </div>
        <div class="banner-image">
          <img src="/assets/chan-shoulder.jpg" style="width: 125%;"/>
        </div>
        <div class="banner-arrow">
            <span class="iconify" data-inline="false" data-icon="eva:arrow-ios-downward-outline"
                style="font-size: 36px;"></span>
            <span class="iconify" data-inline="false" data-icon="eva:arrow-ios-downward-outline"
                style="font-size: 36px;"></span>
        </div>
    </div>
    <div id="servicios">
        <div class="servicios-line-horizontal"></div>
        <div class="down-icon">
            <span class="iconify" data-inline="false" data-icon="eva:arrow-ios-downward-outline"
                style="font-size: 36px;"></span>
            <span class="iconify" data-inline="false" data-icon="eva:arrow-ios-downward-outline"
                style="font-size: 36px;"></span>
        </div>
        <div class="servicios-title">
            <h2>Services</h2>
        </div>
        <div class="servicios-container">
            <div class="servicios-produccion">
                <span class="iconify" data-inline="false" data-icon="fluent:music-note-2-play-20-filled"
                    style="color: #d79404; font-size: 100px;"></span>
                <h4>Production</h4>
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or
                    double click me to add your own content and make changes to</p>
            </div>
            <div class="servicios-mezcla">
                <span class="iconify" data-inline="false" data-icon="entypo:sound-mix"
                    style="color: #d79404; font-size: 100px;"></span>
                <h4>Mix</h4>
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or
                    double
                    click me to add your own content and make changes to</p>
            </div>
        </div>
    </div>
    <div id="sobremi">
        <div class="sobre-mi-photo">
            <div class="one"><img src="https://source.unsplash.com/random/300x500" alt=""></div>
            <div class="two"><img src="https://source.unsplash.com/random/80x80" alt=""></div>
            <div class="three"><img src="https://source.unsplash.com/random/80x80" alt=""></div>
        </div>
        <div class="sobre-mi-text">
            <h2>About me</h2>
            <h3>I have...</h3>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or
                double click me to add your own content and make changes to the font. Feel free to drag and drop me
                anywhere you like on your page. I’m a great place for you to tell a story and let your users know a
                little more about you.</p>
            <a class="sobre-mi-button" href="#contacto">Let's talk</a>
        </div>
    </div>
    <div id="trabajo">
        <h2>Work</h2>
    </div>
    <div id="opiniones">
        <h2>Reviews</h2>
          {% include carousel.html height="50" unit="%" duration="7" %}
    </div>
    <div id="blog"></div>
    <div id="contacto"></div>
</body>
