/*
 * Copyright 2013 Ernests Karlsons
 * https://github.com/bez4pieci
 * http://www.karlsons.net
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var exec = require('cordova/exec');

/**
 * @constructor
 */
function CookieManager() {

}

/**
 * Get device info
 *
 * @param {Function} successCallback The function to call when cookies cleared successfully
 * @param {Function} errorCallback The function to call when there was an error (OPTIONAL)
 */
Cookies.prototype.clear = function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, "CookieManager", "clear", []);
};

/**
 * Get device info
 *
 * @param {Function} successCallback The function to call when cookies cleared successfully
 * @param {Function} errorCallback The function to call when there was an error (OPTIONAL)
 */
Cookies.prototype.get = function (successCallback, errorCallback, URL, target) {
    if (!URL) {
        // throw error 
        throw "Function call must include a URL target parameter";
        return;
    }

    // build paramaters object
    var paramaters = {
        URL: URL
    }

    // if optional target included, add to object
    if (target) {
        paramaters.target = target;
    }

    exec(successCallback, errorCallback, "CookieManager", "get", [paramaters]);
};


module.exports = new CookiCookieManageres();