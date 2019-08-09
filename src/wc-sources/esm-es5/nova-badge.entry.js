import { r as registerInstance, h } from './core-c965133d.js';
var Nova = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
    }
    class_1.prototype.validateScore = function () {
        if (this.score === '1' ||
            this.score === '2' ||
            this.score === '3' ||
            this.score === '4') {
            this.getScoreCSSClass();
        }
        else {
            this.score = '1';
        }
    };
    class_1.prototype.isValidScore = function (score) {
        return score === '1' || score === '2' || score === '3' || score === '4';
    };
    class_1.prototype.componentWillLoad = function () {
        if (!this.isValidScore(this.score)) {
            this.score = '1';
        }
    };
    /**
     * Transform score to CSS class
     */
    class_1.prototype.getScoreCSSClass = function () {
        var scoreClass = '';
        switch (this.score) {
            case '1':
                scoreClass = 'one';
                break;
            case '2':
                scoreClass = 'two';
                break;
            case '3':
                scoreClass = 'three';
                break;
            case '4':
                scoreClass = 'four';
                break;
            default:
                scoreClass = 'one';
                break;
        }
        return scoreClass;
    };
    class_1.prototype.render = function () {
        return (h("div", { class: "container" }, h("div", { class: "title" }, "NOVA"), h("div", { class: 'score ' + this.getScoreCSSClass() }, this.score)));
    };
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "score": ["validateScore"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host{display:inline-block;font-family:Arial,Helvetica,sans-serif;font-weight:700}:host .container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;text-align:center}:host .container .title{color:#7e7e7e;font-size:24px}:host .container .score{color:#fff;width:68px;height:90px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:80px}:host .container .score.one{background-color:#48ab00}:host .container .score.two{background-color:#f5cd00}:host .container .score.three{background-color:#ec6500}:host .container .score.four{background-color:#e90000}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { Nova as nova_badge };
