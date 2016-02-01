<div class="sub-footer">
    <div class="wrapper footer">
        <div class="container">
            <div class="two-thirds-column clearfix">
                <p>App by Professor Steven Abbott</p>
            </div>
        </div>
    </div>
</div><!-- Javascript Starts Here -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="<?php echo get_url(); ?>/_/js/vendor/jquery-2.2.0.min.js"><\/script>')</script>
<?php
if (isset( $slider )) {
    echo '<script src="_/js/vendor/bootstrap-slider.js"></script>';
}
echo '<script src="_/js/vendor/bootstrap-modal.js"></script>';
if (isset( $canvas )) {
    echo '<script src="_/js/vendor/jcanvas.min.js"></script>';
}
if (isset( $database )) {
    echo '<script src="_/js/vendor/jquery.dataTables.min.js"></script>';
}
if (isset( $flot )) {
    echo '<script src="_/js/vendor/jquery.flot.min.js"></script>';
    echo '<script src="_/js/vendor/jquery.flot.axislabels.js"></script>';
    echo '<script src="_/js/vendor/jquery.flot.dashes.js"></script>';
    echo '<script src="_/js/vendor/jquery.flot.curvedlines.js"></script>';
}
if (isset( $app_scripts )) {
    echo '<script src="_/js/app-base.js"></script>';
    if (is_array($app_scripts)) {
        foreach ($app_scripts as $script) {
            echo "<script src=\"".$script."\"></script>";
        }
    } else {
        echo "<script src=\"".$app_scripts."\"></script>";
    }
}
?>
</body>
</html>
