$(function () {

    var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
    handler.setInputAction(function (movement) {
        var cartesian = scene.camera.pickEllipsoid(movement.endPosition, ellipsoid);
        var ellipsoid = scene.globe.ellipsoid;
        if (cartesian) { //能获取，显示坐标
            var cartographic = ellipsoid.cartesianToCartographic(cartesian);
            var coords = '经度' + Cesium.Math.toDegrees(cartographic.longitude).toFixed(6) + ', ' + '纬度' + Cesium.Math.toDegrees(cartographic.latitude).toFixed(6) + '，' + '高度' + Math.ceil(viewer.camera.positionCartographic.height);
            // document.getElementByIdx_x_x('coords').innerHTML = coords; document.getElementByIdx_x_x('coords').style.display = '';

            // console.log("-->" + coords);

            $("#lng").val(Cesium.Math.toDegrees(cartographic.longitude).toFixed(6));
            $("#lat").val(Cesium.Math.toDegrees(cartographic.latitude).toFixed(6));
            $("#hig").val(Math.ceil(viewer.camera.positionCartographic.height));


        } else { //不能获取不显示
            // document.getElementByIdx_x_x('coords').style.display = 'none';
            console.log("坐标点不能获取不显示")
        }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
});


