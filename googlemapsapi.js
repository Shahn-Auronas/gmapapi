/////////////////////////////////////////////////////////////////////////
//-----------------Google Maps API----------------------------------/////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//-------------created by Shahn Auronas-----------------------------/////
/////////////////////////////////////////////////////////////////////////
//-Location Map of developable sites in Oakland, in their various----////
//-states of entitlement---------------------------------------------////
/////////////////////////////////////////////////////////////////////////
(function () {
    "use strict";
    function initialize() {
        var mapOptions,
            map,
            tableId = "1iPnUw-b_lCjRpna46ui0zI_6n1AplacaENv0aWE",
            locationColumn = 'Location',
            layer,
            jKCoords,
            jackLondon,
            dTCoords,
            downTown,
            uTCoords,
            upTown,
            lMCoords,
            lakeMeritt,
            styles = [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "hue": "#00ccff"
                        }
                    ]
                }
            ],
            styledMap = new google.maps.StyledMapType(styles,
                { name: "Styled Map" });
        mapOptions = {
            center: new google.maps.LatLng(37.794433, -122.258539),
            zoom: 13,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"]
            }
        };
        map = new google.maps.Map(document.getElementById("map-canvas"),
                mapOptions);
               
        map.mapTypes.set("map_style", styledMap);
        map.setMapTypeId("map_style");
        //submarket layers to be added back, slowing down marker infoboxes
        /* 
        jKCoords = [
            new google.maps.LatLng(37.80121, -122.29229),
            new google.maps.LatLng(37.80071, -122.29202),
            new google.maps.LatLng(37.80046, -122.29159),
            new google.maps.LatLng(37.80004, -122.29077),
            new google.maps.LatLng(37.79979, -122.28958),
            new google.maps.LatLng(37.79941, -122.28862),
            new google.maps.LatLng(37.79836, -122.28472),
            new google.maps.LatLng(37.79715, -122.28146),
            new google.maps.LatLng(37.79622, -122.27933),
            new google.maps.LatLng(37.79498, -122.28024),
            new google.maps.LatLng(37.79479, -122.27995),
            new google.maps.LatLng(37.79507, -122.27981),
            new google.maps.LatLng(37.79459, -122.27874),
            new google.maps.LatLng(37.79452, -122.27847),
            new google.maps.LatLng(37.79457, -122.27815),
            new google.maps.LatLng(37.79426, -122.27744),
            new google.maps.LatLng(37.79408, -122.27753),
            new google.maps.LatLng(37.79396, -122.27748),
            new google.maps.LatLng(37.79406, -122.27737),
            new google.maps.LatLng(37.79372, -122.27653),
            new google.maps.LatLng(37.7935, -122.27658),
            new google.maps.LatLng(37.79336, -122.27622),
            new google.maps.LatLng(37.79357, -122.27606),
            new google.maps.LatLng(37.79407, -122.27598),
            new google.maps.LatLng(37.79369, -122.275),
            new google.maps.LatLng(37.79339, -122.27514),
            new google.maps.LatLng(37.79291, -122.27393),
            new google.maps.LatLng(37.79252, -122.27398),
            new google.maps.LatLng(37.79224, -122.27377),
            new google.maps.LatLng(37.79193, -122.27307),
            new google.maps.LatLng(37.79175, -122.27281),
            new google.maps.LatLng(37.79161, -122.27236),
            new google.maps.LatLng(37.79085, -122.27126),
            new google.maps.LatLng(37.79075, -122.27119),
            new google.maps.LatLng(37.79034, -122.27042),
            new google.maps.LatLng(37.79034, -122.27013),
            new google.maps.LatLng(37.79009, -122.27028),
            new google.maps.LatLng(37.78997, -122.26986),
            new google.maps.LatLng(37.79031, -122.26965),
            new google.maps.LatLng(37.79006, -122.26896),
            new google.maps.LatLng(37.79019, -122.26851),
            new google.maps.LatLng(37.79011, -122.26835),
            new google.maps.LatLng(37.78996, -122.26829),
            new google.maps.LatLng(37.78965, -122.26838),
            new google.maps.LatLng(37.78953, -122.26832),
            new google.maps.LatLng(37.78929, -122.26706),
            new google.maps.LatLng(37.78915, -122.26711),
            new google.maps.LatLng(37.78907, -122.26688),
            new google.maps.LatLng(37.78992, -122.26642),
            new google.maps.LatLng(37.78988, -122.26618),
            new google.maps.LatLng(37.79016, -122.26606),
            new google.maps.LatLng(37.79046, -122.26529),
            new google.maps.LatLng(37.79087, -122.26486),
            new google.maps.LatLng(37.79097, -122.26454),
            new google.maps.LatLng(37.79121, -122.26428),
            new google.maps.LatLng(37.79105, -122.26321),
            new google.maps.LatLng(37.7918, -122.2628),
            new google.maps.LatLng(37.79197, -122.26255),
            new google.maps.LatLng(37.7942, -122.26534),
            new google.maps.LatLng(37.795, -122.26657),
            new google.maps.LatLng(37.79628, -122.26969),
            new google.maps.LatLng(37.7974, -122.27275),
            new google.maps.LatLng(37.79848, -122.2757),
            new google.maps.LatLng(37.79941, -122.27824),
            new google.maps.LatLng(37.79971, -122.27878),
            new google.maps.LatLng(37.80003, -122.27925),
            new google.maps.LatLng(37.8007, -122.28098),
            new google.maps.LatLng(37.80156, -122.28323),
            new google.maps.LatLng(37.80203, -122.28455),
            new google.maps.LatLng(37.80225, -122.28524),
            new google.maps.LatLng(37.80245, -122.28607),
            new google.maps.LatLng(37.80259, -122.28695),
            new google.maps.LatLng(37.80262, -122.28772),
            new google.maps.LatLng(37.80271, -122.28855),
            new google.maps.LatLng(37.80266, -122.28961),
            new google.maps.LatLng(37.80254, -122.29068),
            new google.maps.LatLng(37.80245, -122.29145),
            new google.maps.LatLng(37.80227, -122.29178),
            new google.maps.LatLng(37.80199, -122.2921),
            new google.maps.LatLng(37.80167, -122.29225)
        ];
        jackLondon = new google.maps.Polygon({
            paths: jKCoords,
            strokeColor: "#C9B0D6",
            strokeOpacity: 0.6,
            strokeWeight: 1,
            fillColor: "#C9B0D6",
            fillOpacity: 0.4,
            clickable: false,
            map: map
        });
        dTCoords = [
            new google.maps.LatLng(37.79731, -122.27114),
            new google.maps.LatLng(37.80432, -122.26676),
            new google.maps.LatLng(37.80531, -122.26632),
            new google.maps.LatLng(37.80651, -122.26953),
            new google.maps.LatLng(37.80604, -122.27054),
            new google.maps.LatLng(37.80639, -122.27218),
            new google.maps.LatLng(37.80794, -122.27629),
            new google.maps.LatLng(37.80616, -122.27736),
            new google.maps.LatLng(37.80412, -122.27856),
            new google.maps.LatLng(37.80251, -122.27919),
            new google.maps.LatLng(37.80175, -122.27963),
            new google.maps.LatLng(37.801, -122.27938),
            new google.maps.LatLng(37.80049, -122.27865),
            new google.maps.LatLng(37.79945, -122.27645)
        ];
        downTown = new google.maps.Polygon({
            paths: dTCoords,
            strokeColor: "#D4c4A4",
            strokeOpacity: 0.6,
            strokeWeight: 1,
            fillColor: "#D4c4A4",
            fillOpacity: 0.4,
            clickable: false,
            map: map
        });
        uTCoords = [
            new google.maps.LatLng(37.80544, -122.26612),
            new google.maps.LatLng(37.8067, -122.2698),
            new google.maps.LatLng(37.8064, -122.27057),
            new google.maps.LatLng(37.80639, -122.27176),
            new google.maps.LatLng(37.80807, -122.27614),
            new google.maps.LatLng(37.81119, -122.27421),
            new google.maps.LatLng(37.81209, -122.27303),
            new google.maps.LatLng(37.81371, -122.27157),
            new google.maps.LatLng(37.81509, -122.2703),
            new google.maps.LatLng(37.81611, -122.26998),
            new google.maps.LatLng(37.81643, -122.26964),
            new google.maps.LatLng(37.81548, -122.26449),
            new google.maps.LatLng(37.81531, -122.26384),
            new google.maps.LatLng(37.81382, -122.26255),
            new google.maps.LatLng(37.8125, -122.26178),
            new google.maps.LatLng(37.81077, -122.26251),
            new google.maps.LatLng(37.80907, -122.26298)
        ];
        upTown = new google.maps.Polygon({
            paths: uTCoords,
            strokeColor: "#B3D6B3",
            strokeOpacity: 0.6,
            strokeWeight: 1,
            fillColor: "#B3D6B3",
            fillOpacity: 0.4,
            clickable: false,
            map: map
        });
        lMCoords = [
            new google.maps.LatLng(37.79517, -122.26526),
            new google.maps.LatLng(37.7975, -122.2712),
            new google.maps.LatLng(37.80798, -122.26449),
            new google.maps.LatLng(37.80741, -122.2635),
            new google.maps.LatLng(37.80544, -122.26247),
            new google.maps.LatLng(37.80449, -122.26131),
            new google.maps.LatLng(37.80388, -122.26088),
            new google.maps.LatLng(37.80026, -122.26187),
            new google.maps.LatLng(37.79934, -122.26148),
            new google.maps.LatLng(37.7987, -122.26007),
            new google.maps.LatLng(37.79775, -122.25989),
            new google.maps.LatLng(37.79656, -122.25989),
            new google.maps.LatLng(37.79583, -122.26015),
            new google.maps.LatLng(37.79521, -122.26173),
            new google.maps.LatLng(37.79436, -122.26144),
            new google.maps.LatLng(37.79361, -122.26182),
            new google.maps.LatLng(37.79275, -122.26248)
        ];
        lakeMeritt = new google.maps.Polygon({
            paths: lMCoords,
            strokeColor: "#D2A7A7",
            strokeOpacity: 0.6,
            strokeWeight: 1,
            fillColor: "#D2A7A7",
            fillOpacity: 0.4,
            clickable: false,
            map: map
        });
        jackLondon.setMap(map);
        downTown.setMap(map);
        upTown.setMap(map);
        lakeMeritt.setMap(map);
        */
        layer = new google.maps.FusionTablesLayer({
            query: {
                select: locationColumn,
                from: tableId
            },
            map: map
        });
        layer.setMap(map);
        google.maps.event.addDomListener(document.getElementById("subMarket"),
            "change", function () {
                updateWithSubMarket(layer, tableId, locationColumn);
        });
        setMarkers(map, sites);
    }
    function updateWithSubMarket(layer, tableId, locationColumn) {
            var subMarket = document.getElementById("subMarket").value;
            if (subMarket === "Downtown") {
                layer.setOptions({
                    query: {
                        select: locationColumn,
                        from: tableId,
                        where: "Submarket = '" + subMarket + "'"
                    }
                });
            } else if (subMarket === "Uptown") {
                layer.setOptions({
                    query: {
                        select: locationColumn,
                        from: tableId,
                        where: "Submarket = '" + subMarket + "'"
                    }
                });
            } else if (subMarket === "Lake Merritt") {
                layer.setOptions({
                    query: {
                        select: locationColumn,
                        from: tableId,
                        where: "Submarket = '" + subMarket + "'"
                    }
                });
            } else if (subMarket === "Jack London") {
                layer.setOptions({
                    query: {
                        select: locationColumn,
                        from: tableId,
                        where: "Submarket = '" + subMarket + "'"
                    }
                });
            } else {
                layer.setOptions({
                    query: {
                        select: locationColumn,
                        from: tableId
                    }
                });
            }
        }
    
    var sites = [
        new google.maps.LatLng(37.80121, -122.29229),
        new google.maps.LatLng(37.80071, -122.29202),
        new google.maps.LatLng(37.80046, -122.29159),
        new google.maps.LatLng(37.80004, -122.29077),
        new google.maps.LatLng(37.79979, -122.28958),
        new google.maps.LatLng(37.79941, -122.28862),
        new google.maps.LatLng(37.79836, -122.28472),
        new google.maps.LatLng(37.79715, -122.28146),
        new google.maps.LatLng(37.79622, -122.27933)
    ];
            
    function setMarkers(map, locations) {
        var image,
            shape,
            i,
            site,
            myLatLng,
            marker;
        //turn market into custom image
        image = {
            url: "build.jpg",
            size: new google.maps.Size(20, 32),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 32)
        };
        //shapes: clickable region of the icon
        shape = {
            coord: [1, 1, 1, 20, 18, 20, 18, 1],
            type: "poly"
        };
        for (i = 0; i < locations.length; i += 1) {
            site = locations[i];
            myLatLng = new google.maps.LatLng(site[1], site[2]);
            marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                icon: image,
                shape: shape,
                title: site[0],
                zIndex: site[3]
            });
        }
    }
    google.maps.event.addDomListener(window, "load", initialize);
}());

////////////////////////
//Select effects
/////////////////////

(function () {
    $("select").on("click" , function() {
        $(this).parent(".custom-select").toggleClass("open");
    });
    $(document).mouseup(function (e) {
        var container = $(".custom-select");
        if (container.has(e.target).length === 0) {
            container.removeClass("open");
        }
    });
    $("select").on("change" , function() {
      var selection = $(this).find("option:selected").text(),
          labelFor = $(this).attr("id"),
          label = $("[for='" + labelFor + "']");
      label.find(".selection-choice").html(selection);
    });
}());