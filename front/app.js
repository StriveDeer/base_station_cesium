// viewer = new Cesium.Viewer('cesiumContainer');
var viewer = new Cesium.Viewer('cesiumContainer', {
    // infoBox: false,
    selectionIndicator: false,
    shadows: false,
    geocoder: false,
    homeButton: false,
    sceneModePicker: false,
    baseLayerPicker: false,
    navigationHelpButton: false,
    fullscreenButton: false,
    skyAtmosphere: false,
    shouldAnimate: false
});

// var initialPosition = new Cesium.Cartesian3.fromDegrees(116.570816, 40.03791, 2000);
//
// var homeCameraView = {
//     destination: initialPosition,
// };
//
// viewer.scene.camera.setView(homeCameraView);

var scene = viewer.scene;

// var viewer = new Cesium.Viewer('cesiumContainer', {timeline : false, animation : false});
var pinBuilder = new Cesium.PinBuilder();

$("#cesiumContainer").contextMenu({
    width: 110, // width
    itemHeight: 30, // 菜单项height
    bgColor: "#333", // 背景颜色
    color: "#fff", // 字体颜色
    fontSize: 12, // 字体大小
    hoverBgColor: "#99CC66", // hover背景颜色
    target: function (ele) { // 当前元素
        console.log(ele);
    },
    menu: [{ // 菜单项
        text: "查询",
        icon: "./images/right/search.png",
        callback: function () {
            var lng = $("#lng").val();
            var lat = $("#lat").val();

            httpRes(lat, lng)
        }
    }
    ]
});

function getPosition(ip) {
    var parser=new DOMParser();

    $.get("https://restapi.amap.com/v3/ip?ip=" + ip + "&output=xml&key=497d0e7530fb42e20b3a159ca13d11a9", function (result) {

        var xmlDoc=parser.parseFromString(result,"text/xml");
        var countrys = xmlDoc.getElementsByTagName('rectangle');

        console.log('-----result----')
        console.log(result)
        console.log(result.rectangle)
        console.log(countrys)
        console.log('-----result----')
    })
}


function httpRes(lat, lng) {

    $.get("http://localhost:8089/getBaseStationByDistance?lat=" + lat + "&lng=" + lng, function (result) {
        viewer.scene.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(Number(result[0].lng), Number(result[0].lat), 2500)
        });


        for (var i = 0; i < result.length; i++) {
            addEntities(
                result[i].address,
                result[i].cell,
                result[i].city,
                result[i].country,
                result[i].day,
                result[i].distance_um,
                result[i].lac,
                result[i].lat,
                result[i].lng,
                result[i].mcc,
                result[i].mnc,
                result[i].o_LAT,
                result[i].o_LNG,
                result[i].precision,
                result[i].region)
        }

    });

}

function addEntities(address, cell, city, country, day, distance_um, lac, lat, lng, mcc, mnc, o_LAT, o_LNG, precision, region) {
    console.log(city)
    console.log(country)
    viewer.entities.add({
        name: lng + "," + lat,
        position: Cesium.Cartesian3.fromDegrees(Number(lng), Number(lat)),
        billboard: {
            image: pinBuilder.fromText(cell, Cesium.Color.BLACK, 100).toDataURL(),
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM
        },
        description: "<div class=\"panel panel-default\">\n" +
            "      <div class=\"panel-heading\">" + address + "</div>\n" +
            "      <table class=\"table\">\n" +
            "        <thead>\n" +
            "          <tr>\n" +
            "            <th>#</th>\n" +
            "            <th>基站号</th>\n" +
            "            <th>国家</th>\n" +
            "            <th>城市</th>\n" +
            "            <th>位置</th>\n" +
            "            <th>国家编号</th>\n" +
            "            <th>运营商代号</th>\n" +
            "          </tr>\n" +
            "        </thead>\n" +
            "        <tbody>\n" +
            "          <tr>\n" +
            "            <th scope=\"row\">#</th>\n" +
            "            <td>" + cell + "</td>\n" +
            "            <td>" + country + "</td>\n" +
            "            <td>" + city + "</td>\n" +
            "            <td>" + address + "</td>\n" +
            "            <td>" + mcc + "</td>\n" +
            "            <td>" + mnc + "</td>\n" +
            "          </tr>\n" +
            "        </tbody>\n" +
            "      </table>\n" +
            "    </div>"
    });
}




