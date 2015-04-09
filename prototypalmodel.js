var Vehicle = function(VIN, color, naxels){
        this.VIN = VIN;
        this.color = color;
        this.naxels = naxels;
        this.speed = 0;
};

Vehicle.prototype.setSpeed = function(x){
        this.speed = x;
}


Vehicle.prototype.getSpeed = function(x){
        return this.speed;
};



var myCar = new Vehicle("324AEAWEQWE4234", "black", 4);
myCar.setSpeed(100);
console.log(myCar.getSpeed());





