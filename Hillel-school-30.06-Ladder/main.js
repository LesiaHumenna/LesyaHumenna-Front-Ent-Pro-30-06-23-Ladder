let ladder = {
    step: 0,
    up: function () {
        console.log(this.step);
        this.step++;
        return this.step;
    },
    down: function () {
        this.step--;
        return this;
    },
    showStep: function () { 
        alert(this.step);
        return this;
    }
};

ladder.up().up().down().showStep(); // 1