/**
 * skylark-videojs-vtt - A version of videojs-vtt.js that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define([],function(){var e={"":!0,up:!0};function n(e){return"number"==typeof e&&e>=0&&e<=100}return function(){var r=100,t=3,o=0,i=100,u=0,c=100,f="";Object.defineProperties(this,{width:{enumerable:!0,get:function(){return r},set:function(e){if(!n(e))throw new Error("Width must be between 0 and 100.");r=e}},lines:{enumerable:!0,get:function(){return t},set:function(e){if("number"!=typeof e)throw new TypeError("Lines must be set to a number.");t=e}},regionAnchorY:{enumerable:!0,get:function(){return i},set:function(e){if(!n(e))throw new Error("RegionAnchorX must be between 0 and 100.");i=e}},regionAnchorX:{enumerable:!0,get:function(){return o},set:function(e){if(!n(e))throw new Error("RegionAnchorY must be between 0 and 100.");o=e}},viewportAnchorY:{enumerable:!0,get:function(){return c},set:function(e){if(!n(e))throw new Error("ViewportAnchorY must be between 0 and 100.");c=e}},viewportAnchorX:{enumerable:!0,get:function(){return u},set:function(e){if(!n(e))throw new Error("ViewportAnchorX must be between 0 and 100.");u=e}},scroll:{enumerable:!0,get:function(){return f},set:function(n){var r=function(n){return"string"==typeof n&&!!e[n.toLowerCase()]&&n.toLowerCase()}(n);!1===r?console.warn("Scroll: an invalid or illegal string was specified."):f=r}}})}});
//# sourceMappingURL=sourcemaps/vttregion.js.map
