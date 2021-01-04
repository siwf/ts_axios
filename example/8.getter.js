// getter setter
var GetterSetter = /** @class */ (function () {
    function GetterSetter() {
    }
    Object.defineProperty(GetterSetter.prototype, "fullname", {
        get: function () {
            console.log('get');
            return this._fullname;
        },
        set: function (name) {
            console.log('set');
            this._fullname = name;
        },
        enumerable: true,
        configurable: true
    });
    return GetterSetter;
}());
var gettterSetter = new GetterSetter();
gettterSetter.fullname;
gettterSetter.fullname = 'si';
