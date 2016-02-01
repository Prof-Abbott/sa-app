var AmLoaded = false,
    input = $('input'),
    store = "RayleighSettings";
$(document).ready(function () {
    $("#SlidePr1").slider({tooltip: 'always', precision: 0}).on("slideStop", function (value) {
        CalcIt()
    });
    $("#SlidePr2").slider({tooltip: 'always', precision: 0}).on("slideStop", function (value) {
        CalcIt()
    });
    $("#SlidePerc2").slider({tooltip: 'always', precision: 0}).on("slideStop", function (value) {
        CalcIt()
    });
    $("#Slidenm").slider({tooltip: 'always', precision: 2}).on("slideStop", function (value) {
        CalcIt()
    });
    $("#Slidenp").slider({tooltip: 'always', precision: 2}).on("slideStop", function (value) {
        CalcIt()
    });
    $("#Slidelambda").slider({tooltip: 'always', precision: 0}).on("slideStop", function (value) {
        CalcIt()
    });

    var previousPoint = null;
    $("#placeholder").bind("plothover", function (event, pos, item) {
        if (item) {
            if (previousPoint != item.dataIndex) {
                previousPoint = item.dataIndex;
                $("#tooltip").remove();
                showTooltip(item.pageX, item.pageY, "θ=" + item.datapoint[0].toFixed(0) + "°, Scatter=" + item.datapoint[1].toFixed(3));
            }
        }
        else {
            $("#tooltip").remove();
            previousPoint = null;
        }
    });

    setupInput(store, input);
    AmLoaded = true
    CalcIt();
});
function CalcIt() {
    if (!AmLoaded) return

    var ThemAll = setupCheckRadio(input);
    if (localStorage) {
        localStorage.setItem(store, ThemAll);
    }
    var Pr1 = parseFloat($('#SlidePr1').val()) / 1e9
    var Pr2 = parseFloat($('#SlidePr2').val()) / 1e9
    var Perc2 = parseFloat($('#SlidePerc2').val()) / 100
    var nm = parseFloat($('#Slidenm').val())
    var np = parseFloat($('#Slidenp').val())
    var lambda = parseFloat($('#Slidelambda').val()) / 1e9
    var R = 1e-6 //1μm
    var lmod = lambda / nm
    var nfact = (np * np - 1) / (np * np + 1)
    var ToRad = Math.PI / 180
    var Theta = 0, PPts = [], S1 = 0, S2 = 0
    var Pre = 64 * Math.pow(Math.PI, 4)
    var LFac = 8 * R * R * Math.pow(lmod, 4)
    // LFac=1/(2*R*R)*Math.pow(2*Math.PI/lmod,4)*Math.pow((np*np-1)/(np*np+2),2)
    for (i = 0; i <= 180; i++) {
        Theta = i * ToRad
        S1 = Pre * Math.pow(Pr1, 6) / (LFac) * nfact * (1 + Math.pow(Math.cos(Theta), 2))
        S2 = Pre * Math.pow(Pr2, 6) / (LFac) * nfact * (1 + Math.pow(Math.cos(Theta), 2))
        // S1=(1+Math.pow(Math.cos(Theta),2))*LFac*Math.pow(Pr1,6)
        // S2=(1+Math.pow(Math.cos(Theta),2))*LFac*Math.pow(Pr2,6)
        PPts.push([i, S1 * (1 - Perc2) + S2 * Perc2])
    }
//Brute force other wavelengths
    var PPts4 = [], PPts5 = [], PPts6 = [], PPts7 = []
    lmod = 400 / 1e9 / nm
    LFac = 8 * R * R * Math.pow(lmod, 4)
    for (i = 0; i <= 180; i++) {
        Theta = i * ToRad
        S1 = Pre * Math.pow(Pr1, 6) / (LFac) * nfact * (1 + Math.pow(Math.cos(Theta), 2))
        S2 = Pre * Math.pow(Pr2, 6) / (LFac) * nfact * (1 + Math.pow(Math.cos(Theta), 2))
        PPts4.push([i, S1 * (1 - Perc2) + S2 * Perc2])
    }
    lmod = 500 / 1e9 / nm
    LFac = 8 * R * R * Math.pow(lmod, 4)
    for (i = 0; i <= 180; i++) {
        Theta = i * ToRad
        S1 = Pre * Math.pow(Pr1, 6) / (LFac) * nfact * (1 + Math.pow(Math.cos(Theta), 2))
        S2 = Pre * Math.pow(Pr2, 6) / (LFac) * nfact * (1 + Math.pow(Math.cos(Theta), 2))
        PPts5.push([i, S1 * (1 - Perc2) + S2 * Perc2])
    }
    lmod = 600 / 1e9 / nm
    LFac = 8 * R * R * Math.pow(lmod, 4)
    for (i = 0; i <= 180; i++) {
        Theta = i * ToRad
        S1 = Pre * Math.pow(Pr1, 6) / (LFac) * nfact * (1 + Math.pow(Math.cos(Theta), 2))
        S2 = Pre * Math.pow(Pr2, 6) / (LFac) * nfact * (1 + Math.pow(Math.cos(Theta), 2))
        PPts6.push([i, S1 * (1 - Perc2) + S2 * Perc2])
    }
    lmod = 700 / 1e9 / nm
    LFac = 8 * R * R * Math.pow(lmod, 4)
    for (i = 0; i <= 180; i++) {
        Theta = i * ToRad
        S1 = Pre * Math.pow(Pr1, 6) / (LFac) * nfact * (1 + Math.pow(Math.cos(Theta), 2))
        S2 = Pre * Math.pow(Pr2, 6) / (LFac) * nfact * (1 + Math.pow(Math.cos(Theta), 2))
        PPts7.push([i, S1 * (1 - Perc2) + S2 * Perc2])
    }
    var options = {
        grid: {hoverable: true, mouseActiveRadius: 4, backgroundColor: "#fdfdfd"},
        xaxes: [{
            min: 0, max: 180, axisLabel: "θ°",
        }],
        yaxes: [{axisLabel: "Scatter",}]
    }
    $.plot($("#placeholder"), [{data: PPts, label: "λnm"}, {data: PPts4, label: "400nm"}, {
        data: PPts5,
        label: "500nm"
    }, {data: PPts6, label: "600nm"}, {data: PPts7, label: "700nm"},], options)
}

