var geo = function() {
	this.deg2rad = Math.PI / 180;
	this.rad2deg = 180 / Math.PI;
	this.earthRad = 6371;
	this.earthDia = this.earthRad * 2;
}

var proto = geo.prototype;

proto.constructor = geo;


proto.distance = function(geo1, geo2) {
	var latCenterRad=geo1.latitude,
		lonCenterRad=geo1.longitude,
		latVals=geo2.latitude,
		lonVals=geo2.longitude;

	//计算经纬度
	  var latRad = latVals * this.deg2rad;
      var lonRad = lonVals * this.deg2rad;

      //计算经纬度的差
      var diffX = latCenterRad * this.deg2rad - latRad;
      var diffY = lonCenterRad * this.deg2rad - lonRad;
      //计算正弦和余弦
      var hsinX = Math.sin(diffX * 0.5);
      var hsinY = Math.sin(diffY * 0.5);
      var latCenterRad_cos = Math.cos(latCenterRad * this.deg2rad);
      var h = hsinX * hsinX+ (latCenterRad_cos * Math.cos(latRad) * hsinY * hsinY);

      return (this.earthDia * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h)));
}