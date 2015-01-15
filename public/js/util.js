(function() {
    "use strict";

    var $ = function(selectorOrElement) {

        var els = null;

        if (typeof selectorOrElement == "string")
            els = document.querySelectorAll(selectorOrElement);
        else
            els = selectorOrElement;
        
        function on(eventName, cb) {

            if (this == null)
                return;

            if (this instanceof HTMLElement) {
                this.addEventListener(eventName, cb);
            }
            else if (this instanceof NodeList) {
                for (var i = 0; i < this.length; i++) {
                    this[i].addEventListener(eventName, cb);
                };
            }
        }

        function text() {

            if (this == null)
                return "";

            if (this instanceof HTMLElement)
                return this.innerText;
            else if (this instanceof NodeList && this.length == 1)
                return this[0].innerText;

            return "";
        }

        return {
            on: on.bind(els),
            text: text.bind(els)
        };
    };

    window.$ = $;
})();