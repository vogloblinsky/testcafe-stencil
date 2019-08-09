import { h } from "@stencil/core";
export class Nova {
    validateScore() {
        if (this.score === '1' ||
            this.score === '2' ||
            this.score === '3' ||
            this.score === '4') {
            this.getScoreCSSClass();
        }
        else {
            this.score = '1';
        }
    }
    isValidScore(score) {
        return score === '1' || score === '2' || score === '3' || score === '4';
    }
    componentWillLoad() {
        if (!this.isValidScore(this.score)) {
            this.score = '1';
        }
    }
    /**
     * Transform score to CSS class
     */
    getScoreCSSClass() {
        let scoreClass = '';
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
    }
    render() {
        return (h("div", { class: "container" },
            h("div", { class: "title" }, "NOVA"),
            h("div", { class: 'score ' + this.getScoreCSSClass() }, this.score)));
    }
    static get is() { return "nova-badge"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["nova.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["nova.css"]
    }; }
    static get properties() { return {
        "score": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The score"
            },
            "attribute": "score",
            "reflect": false
        }
    }; }
    static get watchers() { return [{
            "propName": "score",
            "methodName": "validateScore"
        }]; }
}
