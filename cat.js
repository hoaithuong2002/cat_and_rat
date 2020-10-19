class Cat {
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
    }

    sound = function () {
        alert(this.name + "meo meo!")
    }
    catch = function (rat) {
        if (this.speed > rat.speed) {
            alert(this.name + " hic hic bị bắt rùi " + rat.name);
            rat.status = false;
        } else {
            alert(this.name + " lêu lêu còn lâu mới bắt dc t   " + rat.name)
        }
    }
    eatRat = function (eat) {
        this.weight += rat.weight;
        alert(this.name + " ăn chuột rùi " + rat.name + " roi!");
    }
}
