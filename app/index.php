<?php include( '_inc/header.php' ); ?>
        <div class="wrapper">
            <div class="container">
                <div class="main-content full-width">
                    <h2>App Intro Title</h2>
                    <p class="intro-text">Introduction text</p>
<?php
$flot        = true;
$slider      = true;
$app_scripts = "rayleigh.js";
?>
<div class="feature-box app clearfix">
    <h3>Rayleigh Scattering</h3>
    <div class="panel panel-default">
        <div class="row">
            <div id="placeholder" class="flot-graph"></div>
        </div>
    </div>
    <div class="row">
        <div class="three-columns">r<sub>1</sub> nm
            <input id="SlidePr1" type="text" data-slider-min="5" data-slider-max="100" data-slider-step="1" data-slider-value="20">
        </div>
        <div class="three-columns">r<sub>2</sub> nm
            <input id="SlidePr2" type="text" data-slider-min="5" data-slider-max="500" data-slider-step="1" data-slider-value="200">
        </div>
        <div class="three-columns">% r<sub>2</sub>
            <input id="SlidePerc2" type="text" data-slider-min="0" data-slider-max="100" data-slider-step="1" data-slider-value="10">
        </div>
    </div>
    <div class="row">
        <div class="three-columns">n<sub>medium</sub>
            <input id="Slidenm" type="text" data-slider-min="1" data-slider-max="5" data-slider-step="0.01" data-slider-value="1.45">
        </div>
        <div class="three-columns">n<sub>particle</sub>
            <input id="Slidenp" type="text" data-slider-min="1" data-slider-max="5" data-slider-step="0.01" data-slider-value="2">
        </div>
        <div class="three-columns">λ nm
            <input id="Slidelambda" type="text" data-slider-min="400" data-slider-max="750" data-slider-step="1" data-slider-value="450">
        </div>
    </div>
</div>
                </div>
            </div>
        </div>
<?php include( '_inc/footer.php' );
