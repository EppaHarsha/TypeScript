var u = { name: "", userId: 123 };
var h = {
    name: "",
    startTime: function () { return "2020"; },
    endTime: function () { return 2020; },
    getCoupon: function (copNo) { return copNo; }
};
var h1 = {
    name: "",
    startTime: function () { return "2020"; },
    endTime: function () { return 2020; },
    getCoupon: function (copNo) { return copNo; },
    userId: 123
};
//Class
var User5 = /** @class */ (function () {
    function User5(email, name) {
        this.email = email;
        this.name = name;
    }
    return User5;
}());
var u2 = new User5("h", "h@h.com");
