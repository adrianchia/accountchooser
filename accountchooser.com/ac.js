/* Copyright 2012 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

window.accountchooser = window.accountchooser || {};


/**
 * Namespace alias for CDS.
 * @deprecated This namespace alias is for backward compatability only. It'll be
 * removed in the future. Do not use it.
 */
window.cds = window.accountchooser;


/**
 * Namespace declaration.
 */
window.accountchooser.config =
    window.accountchooser.config || {};


/**
 * Enums for CDS helper modes.
 * @enum {string}
 */
window.accountchooser.config.CdsHelperModes = {
  LOGIN: 'login',
  SIGNUP: 'signup'
};

/**
 * Default IDs for UI elements.
 * @type {Object.<string>}
 */
window.accountchooser.config.uiElementIds = {
  email: 'email',
  password: 'password',
  name: 'displayName',
  photo: 'photoUrl'
};

/**
 * Default login URL.
 * @type {string}
 */
window.accountchooser.config.loginUrl = 'account-login';

/**
 * Default sign up URL.
 * @type {string}
 */
window.accountchooser.config.signupUrl = 'account-create';

/**
 * Default user status URL.
 * @type {string}
 */
window.accountchooser.config.userStatusUrl = 'account-status';

/**
 * Default home URL.
 * @type {string}
 */
window.accountchooser.config.loginOkUrl = '/';


/**
 * Namespace for utility functions.
 */
window.accountchooser.util =
    window.accountchooser.util || {};

/**
 * Logs a message to the console of the browser for debugging.
 * @param {string} message The message to log.
 */
window.accountchooser.util.log = function(message) {
  try {
    if (window.console && window.console.log) {
      window.console.log(message);
    }
  } catch (ex) {
    // Ignore if cannot log to console.
  }
};

/**
 * UUID allows multiple instances on the same page.
 * @type {number}
 * @private
 */
window.accountchooser.util.uuidCounter_ = new Date().getTime();

/**
 * Computes a UUID for this widget. If a UUID is set on the options, use it.
 * Otherwise generates one.
 * @param {Object} options The options object of this widget.
 * @return {number | string} The uuid of this widget.
 */
window.accountchooser.util.generateUuid = function(options) {
  var newUuid;
  if (options && options.uuid) {
    newUuid = options.uuid;
  } else {
    newUuid = ++window.accountchooser.util.uuidCounter_;
  }
  return newUuid;
};

/**
 * Creates a form to submit the {@code parameters} to the {@code targetUrl}.
 * @param {string} targetUrl The URL to which the form will submit.
 * @param {{key1: value1, key2: value2, ...}} parameters The parameters in the
 *     form.
 * @param {string=} opt_targetWinName The name of the target window which the
 *     form is submitted to. If targetWinName is an empty string or not
 *     present, the current window is used.
 * @return {Element} The created DOM element.
 * @private
 */
window.accountchooser.util.createForm_ = function(targetUrl,
    parameters, opt_targetWinName) {
  if (!targetUrl) {
    throw 'The targetUrl cannot be null.';
  }
  var myForm = window.document.createElement('form');
  myForm.method = 'post';
  myForm.action = targetUrl;
  if (parameters) {
    for (var k in parameters) {
      var myInput = window.document.createElement('input');
      myInput.setAttribute('type', 'hidden');
      myInput.setAttribute('name', k);
      if (parameters[k] === null || parameters[k] === undefined) {
        myInput.setAttribute('value', '');
      } else {
        myInput.setAttribute('value', parameters[k]);
      }
      myForm.appendChild(myInput);
    }
  }
  if (opt_targetWinName) {
    myForm.target = opt_targetWinName;
  }
  window.document.body.appendChild(myForm);
  return myForm;
};

/**
 * Creates a form with {@code parameters} and submit it to {@code targetUrl}.
 * @param {string} targetUrl The URL to which the form will submit.
 * @param {{key1: value1, key2: value2, ...}} parameters The parameters in the
 *     form.
 * @param {string=} opt_targetWinName The name of the target window which the
 *     form is submitted to. If targetWinName is an empty string or not
 *     present, the current window is used.
 */
window.accountchooser.util.postTo = function(targetUrl,
    parameters, opt_targetWinName) {
  var myForm = window.accountchooser.util.createForm_(targetUrl,
      parameters, opt_targetWinName);
  myForm.submit();
  window.document.body.removeChild(myForm);
};

/**
 * Returns the URL params. e.g. To get the value of the "foo" param in the
 * URL the code can be: var foo = parseUrlParams()['foo'];
 * @param {string} url The URL to parse.
 * @return {Object} The URL params array.
 */
window.accountchooser.util.parseUrlParams = function(url) {
  var params = {};
  var segments = url.slice(url.indexOf('?') + 1).split('&');
  for (var i = 0; i < segments.length; i++) {
    var pair = segments[i].split('=');
    if (pair.length == 2) {
      params[pair[0]] = decodeURIComponent(pair[1]);
    } else {
      params[pair[0]] = undefined;
    }
  }
  return params;
};

/**
 * Sends the request to the given URL with POST method instead of GET method.
 * A hidden form is used to post the request.
 * @param {string} targetUrl The URL to post.
 * @param {string=} opt_targetWinName The name of the target window which the
 *     form is submitted to. If targetWinName is an empty string or not
 *     present, the current window is used.
 */
window.accountchooser.util.formRedirect = function(targetUrl,
    opt_targetWinName) {
  var url = targetUrl.substring(0, targetUrl.indexOf('?'));
  var params =
      window.accountchooser.util.parseUrlParams(targetUrl);
  window.accountchooser.util.postTo(url, params,
      opt_targetWinName);
};

/**
 * Checks whether the user's browser is supported.
 * @return {boolean} {@code true} if the browser is supported.
 */
window.accountchooser.util.isBrowserSupported = function() {
  var version = 999;
  if (navigator.appVersion.indexOf('MSIE') != -1) {
    version = parseFloat(navigator.appVersion.split('MSIE')[1]);
  }
  return version > 7;
};

/**
 * Makes a URL from the base URL and the parameters
 * @param {string} url The base URL.
 * @param {Object.<string, number|string|boolean>} params The URL parameters. The
 *     name of the parameter should be a string and the value should be a
 *     number, string or boolean.
 * @return {string} The new URI with the parameters.
 */
window.accountchooser.util.makeUrl = function(url, params) {
  var query = [];
  for (var i in params) {
    query.push(params[i] ? i + '=' + params[i] : i);
  }
  return url + '?' + query.join('&');
};

// Utility functions which are to substitute for jQuery ones.
/**
 * Checks whether the value is an array or not. Try to use jQuery.isArray if
 * possible.
 * @param {*} value The value to be checked.
 * @return {boolean} True if it's an array, false otherwise.
 */
window.accountchooser.util.isArray = function(value) {
  if (typeof jQuery !== 'undefined') {
    return jQuery.isArray(value);
  } else {
    return Object.prototype.toString.call(value) === '[object Array]';
  }
};

/**
 * Checks whether the value is a function or not. Try to use jQuery.isFunction
 * if possible.
 * @param {*} value The value to be checked.
 * @return {boolean} True if it's a function, false otherwise.
 */
window.accountchooser.util.isFunction = function(value) {
  if (typeof jQuery !== 'undefined') {
    return jQuery.isFunction(value);
  } else {
    return Object.prototype.toString.call(value) === '[object Function]';
  }
};

/**
 * Checks whether the elements is in the array/array-like object and returns the
 * index of it. Try to use jQuery.inArray if possible.
 * @param {*} element The element to be checked.
 * @param {Array.<*>|{length: number}} array The array to be searched.
 * @return {number} The index of the element in the array. If the element is not
 *     in the array, -1 is returned.
 */
window.accountchooser.util.indexOf = function(element, array) {
  if (array) {
    if (typeof jQuery !== 'undefined') {
      return jQuery.inArray(element, array);
    }
    if (array.indexOf) {
      return array.indexOf(element);
    }
    var length = array.length;
    for (var i = 0; i < length; i++) {
      if (i in array && array[i] === element) {
        return i;
      }
    }
  }
  return -1;
};

/**
 * Gets the width of the window.
 * @param {Element} window The window element.
 * @return {number} The width of the window.
 */
window.accountchooser.util.windowWidth = function(window) {
  if (typeof jQuery !== 'undefined') {
    return jQuery(window).width();
  }
  var width = 0;
  if (window.innerWidth) {
    width = window.innerWidth;
  } else if (window.document && window.document.documentElement &&
      window.document.documentElement.clientWidth) {
    width = window.document.documentElement.clientWidth;
  } else if (window.document && window.document.body &&
      window.document.body.clientWidth) {
    width = window.document.body.clientWidth;
  }
  return width;
};

/**
 * Gets the height of the window.
 * @param {Element} window The window element.
 * @return {number} The height of the window.
 */
window.accountchooser.util.windowHeight = function(window) {
  if (typeof jQuery !== 'undefined') {
    return jQuery(window).height();
  }
  var height = 0;
  if (window.innerHeight) {
    height = window.innerHeight;
  } else if (window.document && window.document.documentElement &&
      window.document.documentElement.clientHeight) {
    height = window.document.documentElement.clientHeight;
  } else if (window.document && window.document.body &&
      window.document.body.clientHeight) {
    height = window.document.body.clientHeight;
  }
  return height;
};

/**
 * Trims the leading and trailing space characters. Try to use jQuery.trim if
 * possible.
 * @param {string} str The string to be trimmed.
 * @return {string} The trimmed string.
 */
window.accountchooser.util.trim = function(str) {
  if (typeof jQuery !== 'undefined') {
    return jQuery.trim(str);
  }
  if (str == null) {
    return '';
  } else if (String.prototype.trim) {
    return String.prototype.trim.call(str);
  } else {
    return str.replace(/^[\s\xa0]+/, '').replace(/[\s\xa0]+$/, '');
  }
};

/**
 * Merges several objects into the first object. Try to use jQuery.extend if
 * possible.
 * @param {boolean} deep Whether to performe deep copy or not.
 * @param {Object} target The object to receive the properties from other ones.
 * @param {...Object} var_objects A set of objects to merge in.
 * @return {Object} The merged object.
 */
window.accountchooser.util.extend = function(deep, target,
    var_objects) {
  // If no target provided, return {}. If no other objects to merge in, return
  // target unmodifed..
  if (arguments.length < 3) {
    return target || {};
  }
  if (typeof jQuery !== 'undefined') {
    // If deep == false, don't pass it to jQuery.extend since it'll be treated
    // as the target.
    var args = Array.prototype.slice.call(arguments, deep ? 0 : 1);
    return jQuery.extend.apply(jQuery, args);
  }
  if (typeof target !== 'object' || target == null) {
    target = {};
  }
  for (var i = 2, num = arguments.length; i < num; i++) {
    var obj = arguments[i];
    if (obj == null) {
      continue;
    }
    for (var name in obj) {
      // Skip undefined properties and itself.
      if (obj[name] === undefined || target === obj[name]) {
        continue;
      }
      if (deep && typeof obj[name] == 'object') {
        // Make sure target property is array if the source property is array.
        if (window.accountchooser.util.isArray(obj[name]) &&
            !window.accountchooser.util.isArray(target[name])) {
          target[name] = [];
        }
        target[name] = window.accountchooser.util.extend(true,
            target[name], obj[name]);
      } else {
        target[name] = obj[name];
      }
    }
  }
  return target;
};


/**
 * @namespcae Parameter validators.
 */
window.accountchooser.param = {};

/**
 * Checks a parameter value is not null or undefined.
 * @param {*} value The value of a parameter.
 * @param {string=} opt_paramName An optional name of the parameter.
 */
window.accountchooser.param.notNull = function(value,
    opt_paramName) {
  if (value === undefined || value === null) {
    window.accountchooser.param.throwError_(
        'Parameter %%param%% cannot be null.', opt_paramName);
  }
};

/**
 * Checks a parameter value is not empty. That is, the value must evaluate to
 * true.
 * @param {*} value The value of a parameter.
 * @param {string=} opt_paramName An optional name of the parameter.
 */
window.accountchooser.param.notEmpty = function(value,
    opt_paramName) {
  if (!value) {
    window.accountchooser.param.throwError_(
        'Parameter %%param%% cannot be empty.', opt_paramName);
  }
};

/**
 * Checks a parameter value must be a non-empty array.
 * @param {*} value The value of a parameter.
 * @param {string=} opt_paramName An optional name of the parameter.
 */
window.accountchooser.param.notEmptyArray = function(value,
    opt_paramName) {
  if (!value) {
    window.accountchooser.param.throwError_(
        'Parameter %%param%% cannot be empty.', opt_paramName);
  }
  if (!window.accountchooser.util.isArray(value)) {
    window.accountchooser.param.throwError_(
        'Parameter %%param%% is not an array.', opt_paramName);
  }
  if (!value.length) {
    window.accountchooser.param.throwError_(
        'Parameter %%param%% cannot be an empty array.', opt_paramName);
  }
};

/**
 * Checks a parameter value must be a non-empty array.
 * @param {*} value The value of a parameter.
 * @param {string=} opt_paramName An optional name of the parameter.
 */
window.accountchooser.param.notEmptyFunction = function(value,
    opt_paramName) {
  if (!value) {
    window.accountchooser.param.throwError_(
        'Parameter %%param%% cannot be empty.', opt_paramName);
  }
  if (!window.accountchooser.util.isFunction(value)) {
    window.accountchooser.param.throwError_(
        'Parameter %%param%% is not a function.', opt_paramName);
  }
};

/**
 * Throws an error to indicate a failed parameter validation.
 * @param {string} message The error message.
 * @param {string=} opt_paramName An optional name of the parameter.
 * @private
 */
window.accountchooser.param.throwError_ = function(message,
    opt_paramName) {
  try {
    if (console && console.trace) {
      console.trace();
    }
  } catch (e) {
  }
  var param = opt_paramName ? ' \'' + opt_paramName + '\'' : '';
  throw message.replace(/\%\%param\%\%/g, param);
};


/**
 * A class can extends parent class.
 * @param {Function} parentClass The parent class to be extended.
 */
Function.prototype.inheritsFrom = function(parentClass) {
  window.accountchooser.param.notEmptyFunction(parentClass,
      'parentClass');

  this.prototype = new parentClass;
  this.prototype.constructor = this;
  this.prototype.parentClass = parentClass.prototype;
};


/**
 * @class Local data storage class. The storage takes HTML5 DOM storage as the
 * primary storage if the browser supports it and the domStorage key is
 * provided. Otherwise, the cookie is used as the underlying storage if the
 * cookie name is provided.
 * @param {string=} opt_domStorageKey The key under which the data is stored in
 *     HTML5 DOM storage.
 * @param {string=} opt_cookieName The name of the cookie which the data is
 *     saved into.
 * @param {boolean=} opt_perSession Whether the storage is per session or not.
 * @constructor
 */
window.accountchooser.util.Storage = function(opt_domStorageKey,
    opt_cookieName, opt_perSession) {
  window.accountchooser.param.notEmpty(
      opt_domStorageKey || opt_cookieName,
      'opt_domStorageKey || opt_cookieName');
  if (!window.accountchooser.util.Storage.
      isDomStorageSupported(opt_perSession)) {
    window.accountchooser.param.notEmpty(opt_cookieName,
        'opt_cookieName');
  }
  this.domStorageKey_ = opt_domStorageKey;
  this.cookieName_ = opt_cookieName;
  this.perSession_ = opt_perSession;
};

/**
 * Checks whether the browser supports HTML5 DOM storage or not.
 * @param {boolean=} opt_perSession Whether the storage is per session or not.
 * @return {boolean} {@code true} if HTML5 DOM storage is supported.
 */
window.accountchooser.util.Storage.isDomStorageSupported =
    function(opt_perSession) {
  try {
    if (opt_perSession) {
      return 'sessionStorage' in window && window['sessionStorage'] != null;
    } else {
      return 'localStorage' in window && window['localStorage'] != null;
    }
  } catch (e) {
    return false;
  }
};

/**
 * Reads data from storage.
 * @return {*} The previously saved data.
 */
window.accountchooser.util.Storage.prototype.read = function() {
  if (window.accountchooser.util.Storage.
      isDomStorageSupported(this.perSession_) && this.isDomStorageAllowed_()) {
    return this.readFromDomStorage_();
  } else if (this.isCookieStorageAllowed_()) {
    return this.readFromCookie_();
  }
};

/**
 * Writes data to storage.
 * @param {*} data The data to be stored.
 */
window.accountchooser.util.Storage.prototype.write = function(
    data) {
  if (window.accountchooser.util.Storage.
      isDomStorageSupported(this.perSession_) && this.isDomStorageAllowed_()) {
    this.writeToDomStorage_(data);
  } else if (this.isCookieStorageAllowed_()) {
    this.writeToCookie_(data);
  }
};

/**
 * Clears data from storage.
 */
window.accountchooser.util.Storage.prototype.clear = function() {
  if (window.accountchooser.util.Storage.
      isDomStorageSupported(this.perSession_) && this.isDomStorageAllowed_()) {
    this.clearFromDomStorage_();
  }
  if (this.isCookieStorageAllowed_()) {
    this.clearFromCookie_();
  }
};

/**
 * Checks whether the storage is allowed to use HTML5 DOM storage or not.
 * @return {boolean} {@code true} if HTML5 DOM storage is allowed to use.
 * @private
 */
window.accountchooser.util.Storage.prototype.
   isDomStorageAllowed_ = function() {
  return !!this.domStorageKey_;
};

/**
 * Checkes whether the storage is allowed to use cookie or not.
 * @return {boolean} {@code true} if cookie is allowed to use.
 * @private
 */
window.accountchooser.util.Storage.prototype.
    isCookieStorageAllowed_ = function() {
  return !!this.cookieName_;
};

/**
 * Reads data from the HTML5 DOM Storage.
 * @return {*} The data previously saved into the HTML5 DOM storage.
 * @private
 */
window.accountchooser.util.Storage.prototype.
    readFromDomStorage_ = function() {
  window.accountchooser.param.notEmpty(this.domStorageKey_,
      'domStorageKey');
  var storage = this.perSession_ ? window.sessionStorage : window.localStorage;
  try {
    var data = storage.getItem(this.domStorageKey_);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    window.accountchooser.util.log(
        'Failed to read from DOM storage: ' + e);
  }
};

/**
 * Writes data to the HTML5 DOM storage.
 * @param {*} data The data to be stored into the HTML5 DOM storage.
 * @private
 */
window.accountchooser.util.Storage.prototype.
    writeToDomStorage_ = function(data) {
  window.accountchooser.param.notEmpty(this.domStorageKey_,
      'domStorageKey');
  var storage = this.perSession_ ? window.sessionStorage : window.localStorage;
  try {
    var jsonData = JSON.stringify(data);
    storage.setItem(this.domStorageKey_, jsonData);
  } catch (e) {
    window.accountchooser.util.log(
        'Failed to write to DOM storage: ' + e);
  }
};

/**
 * Clears saved data from the HTML5 DOM storage.
 * @private
 */
window.accountchooser.util.Storage.prototype.
    clearFromDomStorage_ = function() {
  window.accountchooser.param.notEmpty(this.domStorageKey_,
      'domStorageKey');
  var storage = this.perSession_ ? window.sessionStorage : window.localStorage;
  try {
    storage.removeItem(this.domStorageKey_);
  } catch (e) {
    window.accountchooser.util.log(
        'Failed to clear from DOM storage: ' + e);
  }
};

/**
 * Reads data from cookie.
 * @return {*} The data previously saved into cookie.
 * @private
 */
window.accountchooser.util.Storage.prototype.readFromCookie_ =
    function() {
  window.accountchooser.param.notEmpty(this.cookieName_,
      'cookieName');
  var cookieRegex = '(^|;) ?' + this.cookieName_ + '=([^;]*)(;|$)';
  var cookieValues = document.cookie.match(cookieRegex);
  if (cookieValues) {
    var data = window.accountchooser.util.trim(cookieValues[2]);
    if (data) {
      try {
        return JSON.parse(unescape(data));
      } catch (e) {
        window.accountchooser.util.log(
            'Failed to read from cookie: ' + e);
      }
    }
  }
};

/**
 * Writes data to cookie.
 * @param {*} data The data to be stored into cookie.
 * @private
 */
window.accountchooser.util.Storage.prototype.writeToCookie_ =
    function(data) {
  window.accountchooser.param.notEmpty(this.cookieName_,
      'cookieName');
  try {
    var currentDate = new Date();
    var year = currentDate.getFullYear() + 10;
    var month = currentDate.getMonth();
    var day = currentDate.getDate();
    var cookieDate = new Date(year, month, day);
    var expires = this.perSession_ ? 0 : cookieDate.toGMTString();
    document.cookie = this.cookieName_ + '=' + escape(JSON.stringify(data)) +
        '; expires=' + expires + '; path=/';
  } catch (e) {
    window.accountchooser.util.log(
        'Failed to write to cookie: ' + e);
  }
};

/**
 * Clears saved data from cookie.
 * @private
 */
window.accountchooser.util.Storage.prototype.clearFromCookie_ =
    function() {
  window.accountchooser.param.notEmpty(this.cookieName_,
      'cookieName');
  try {
    var cookieDate = new Date();
    cookieDate.setTime(cookieDate.getTime() - 1);
    document.cookie = this.cookieName_ + '=; expires=' +
        cookieDate.toGMTString() + '; path=/';
  } catch (e) {
    window.accountchooser.util.log(
        'Failed to clear from cookie: ' + e);
  }
};


/**
 * Gets the current script element in which the function is called.
 * @return {(Element|undefined)} the script element if found.
 */
window.accountchooser.util.getCurrentScript = function() {
  // For firefox.
  if (document.currentScript) {
    return document.currentScript;
  }
  // For other browsers.
  var scripts = document.getElementsByTagName('script');
  if (scripts.length) {
    return scripts[scripts.length - 1];
  }
};

/**
 * Gets the content of the current script in which the function is called.
 * @return {(string|undefined)} the script content if found.
 */
window.accountchooser.util.getCurrentScriptContent = function() {
  var script = window.accountchooser.util.getCurrentScript();
  return window.accountchooser.util.getCleanScriptContent(
      script);
};

/**
 * Gets the script element by the filter provided. If multiple scripts meet the
 * requirement, the first one is returned.
 * @param {function(Element): boolean} filter the filter function which returns
 *     {@code true} if the script meets the requirement.
 * @return {(Element|undefined)} the script element if found.
 * @private
 */
window.accountchooser.util.getScriptByFilter_ = function(
    filter) {
  if (filter && typeof filter === 'function') {
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
      if (filter(scripts[i])) {
        return scripts[i];
      }
    }
  }
};

/**
 * Gets the script element whose {@code src} attribute matches the regex.
 * @param {Object} srcRegex regular expression used to match the {@code src}
 *     attribute of the script.
 * @return {(Element|undefined)} the script element if found.
 */
window.accountchooser.util.getScriptBySrc = function(srcRegex) {
  return window.accountchooser.util.getScriptByFilter_(
      function(e) {
        return srcRegex && e.src && srcRegex.test(e.src);
      }
  );
};

/**
 * Gets the content of the script whose {@code src} attribute matches the regex.
 * @param {Object} srcRegex regular expression used to match the {@code src}
 *     attribute of the script.
 * @return {(string|undefined)} the script content if found.
 */
window.accountchooser.util.getScriptContentBySrc = function(
    srcRegex) {
  var script =
      window.accountchooser.util.getScriptBySrc(srcRegex);
  return window.accountchooser.util.getCleanScriptContent(
      script);
};

/**
 * Gets the script element with the provided id.
 * @param {string} id the script id.
 * @return {(Element|undefined)} the script element if found.
 */
window.accountchooser.util.getScriptById = function(id) {
  return window.accountchooser.util.getScriptByFilter_(
      function(e) {
        // Must have a src attribute so that the content in the script will not
        // be executed by the browser as normal statements.
        return e.id && e.id === id && e.src;
      }
  );
};

/**
 * Gets the content of the script with the provided id.
 * @param {string} id the script id.
 * @return {(string|undefined)} the script content if found.
 */
window.accountchooser.util.getScriptContentById = function(id) {
  var script =
      window.accountchooser.util.getScriptById(id);
  return window.accountchooser.util.getCleanScriptContent(
      script);
};

/**
 * Regular expression to strip the begin/end CDATA/comment tags.
 * @private
 * @const
 */
window.accountchooser.util.CLEAN_SCRIPT_REPLACE_REGEX_ =
    /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g;

/**
 * Gets the clean content of a script, which doesn't contain the CDATA/comment
 * tags.
 * @param {Element} script the script element.
 * @return {string} the clean script content.
 */
window.accountchooser.util.getCleanScriptContent = function(
    script) {
  var content = (script && script.innerHTML) || '';
  return content.replace(
      window.accountchooser.util.CLEAN_SCRIPT_REPLACE_REGEX_,
      '');
};


/** Namespace for loader. */
window.accountchooser.loader =
    window.accountchooser.loader || {};

/**
 * @class Common class for all dynamic loader.
 * @constructor
 */
window.accountchooser.loader.Loader = function() {
};

/**
 * Loads the resource. If the resource is not available and the default resource
 * is provided, then the default is loaded.
 * @param {string} resourceUri The resource URI to be loaded.
 * @param {string=} opt_defaultResourceUri The default resource URI.
 * @param {function()=} opt_onSuccess The callback function which will be called
 *     when the resouce is loaded.
 * @param {function()=} opt_onError The callback function which will be called
 *     when an error occurs.
 */
window.accountchooser.loader.Loader.prototype.load = function(
    resourceUri, opt_defaultResourceUri, opt_onSuccess, opt_onError) {
  var self = this;
  var onError = function() {
    if (opt_defaultResourceUri) {
      self.load_(opt_defaultResourceUri, opt_onSuccess, opt_onError);
    } else if (opt_onError) {
      opt_onError();
    }
  };
  this.load_(resourceUri, opt_onSuccess, onError);
};

/**
 * Actually loads the resouce.
 * @param {string} resourceUri The resource URI to be loaded.
 * @param {function()=} opt_onSuccess The callback function which will be called
 *     when the resouce is loaded.
 * @param {function()=} opt_onError The callback function which will be called
 *     when loading fails.
 * @private
 */
window.accountchooser.loader.Loader.prototype.load_ = function(
    resourceUri, opt_onSuccess, opt_onError) {
  var head = document.getElementsByTagName('head')[0] ||
      document.documentElement;
  var element = this.createResourceElement(resourceUri);
  this.finished_ = false;
  var self = this;
  element.onload = element.onreadystatechange = function() {
    if (!self.finished_ && (!this.readyState ||
        this.readyState === 'loaded' || this.readyState === 'complete')) {
      self.finished_ = true;
      element.onload = element.onreadystatechange = null;
      if (opt_onSuccess) {
        opt_onSuccess();
      }
    }
  };
  element.onerror = function() {
    self.finished_ = true;
    head.removeChild(element);
    if (opt_onError) {
      opt_onError();
    }
  };
  head.insertBefore(element, head.firstChild);
};

/**
 * Creates a resource element.
 * @param {string} resourceUri The resource URI to be loaded.
 * @return {!Element} The resource element.
 */
window.accountchooser.loader.Loader.prototype.
    createResourceElement = function(resourceUri) {
  throw 'Unimplemented! Child object must provide an implementation.';
};


/**
 * @class Javascript dynamic loader class.
 * @constructor
 * @extends {window.accountchooser.loader.Loader}
 */
window.accountchooser.loader.JsLoader = function() {
};
window.accountchooser.loader.JsLoader.inheritsFrom(
    window.accountchooser.loader.Loader);

/**
 * Creates a resource element.
 * @param {string} resourceUri The resource URI to be loaded.
 * @return {!Element} The resource element.
 */
window.accountchooser.loader.JsLoader.prototype.
    createResourceElement = function(resourceUri) {
  var element = document.createElement('script');
  element.setAttribute('type', 'text/javascript');
  element.setAttribute('src', resourceUri);
  return element;
};

/**
 * Namespace for utility functions.
 */
window.accountchooser.util =
    window.accountchooser.util || {};

/**
 * Represents an absolute URL.
 * @param {string} url the destination url, which could be an absolute URL,
 *     an absolute path or a relative path.
 * @param {string=} opt_baseUrl the base url used to construct the destination
 *     url. If omitted, window.location.href is used.
 * @constructor
 */
window.accountchooser.util.AbsoluteUrl = function(url,
    opt_baseUrl) {
  var baseUrl = opt_baseUrl || window.location.href;
  /**
   * The normalized absolute URL.
   * @type {string}
   * @private
   */
  this.url_ = baseUrl;
  if (!url) {
    return;
  }
  // Extract protocol/host/path of the base url.
  var a = document.createElement('a');
  a.href = baseUrl;
  var protocol = a.protocol;
  var host = a.host;
  var path = a.pathname;
  // Safari 4 fix: use hostname instead of host
  if (a.hostname.length > a.host.length) {
    host = a.hostname;
  }
  // IE 8 fix: remove port if it is 80/443 for http/https and add leading '/'
  // for pathname.
  if (protocol == 'http:' && host.slice(-3) == ':80') {
    host = host.slice(0, -3);
  } else if (protocol == 'https:' && host.slice(-4) == ':443') {
    host = host.slice(0, -4);
  }
  if (path.length > 0 && path[0] != '/') {
    path = '/' + path;
  }
  if (/^https?:\/\//.test(url)) {
    // Absolute URL.
    this.url_ = url;
  } else if (url[0] == '/') {
    // Absolute path.
    this.url_ = protocol + '//' + host + url;
  } else {
    // Relative path.
    var components = path.split('/');
    components[components.length - 1] = url;
    this.url_ = protocol + '//' + host + components.join('/');
  }
};

/**
 * Checks whether two URLs are matched or not. The search and hash parts are
 *     removed when comparing.
 * @param {window.accountchooser.util.AbsoluteUrl} other
 *     The other URL to be matched.
 * @return {boolean} {@code true} if the two URLs match.
 */
window.accountchooser.util.AbsoluteUrl.prototype.matches =
    function(other) {
  if (!other) {
    return false;
  }
  // Remove search and hash parts. If two URLs are equal except the search and
  // hash parts, they are considered as matched.
  var url1 = this.url_.split(/\?|#/)[0];
  var url2 = other.url_.split(/\?|#/)[0];
  return url1 == url2;
};

/**
 * @return {string} the string format of the absolute URL.
 */
window.accountchooser.util.AbsoluteUrl.prototype.get =
    function() {
  return this.url_;
};



/** Namespace for CDS helper. */
window.accountchooser.cdshelper =
    window.accountchooser.cdshelper || {};

/**
 * Timeout (in milliseconds) for inquirying user status API.
 * @type {number}
 * @const
 * @private
 */
window.accountchooser.cdshelper.USER_STATUS_TIMEOUT_ = 1000;

/**
 * Class wrapping the CDS client library to help sites to easily use CDS.
 * @constructor
 */
window.accountchooser.cdshelper.CdsHelper = function() {
  /**
   * CDS client object.
   * @type {!window.accountchooser.CdsClient}
   * @private
   */
  this.cdsClient_ = window.accountchooser.CdsClient.init({
      // Don't need callback for store/update currently.
      callbacks: {
        select: jQuery.proxy(this.selectCallback_, this),
        store: jQuery.proxy(this.defaultCallback_, this),
        update: jQuery.proxy(this.defaultCallback_, this),
        empty: jQuery.proxy(this.emptyCallback_, this)
      }
  });
  /**
   * The underlying storage object for temporary account storing.
   * @type {!window.accountchooser.util.Storage}
   * @private
   */
  this.storage_ = new window.accountchooser.util.Storage(
      'storeAccount', undefined, true);
  /**
   * Holder for DOM elements of website's login/sign up input fields.
   * @type {!Object.<jQueryObject>}
   * @private
   */
  this.uiElements_ = {
    email: null,
    password: null,
    name: null,
    photo: null
  };
  // Find UI elements.
  this.findUiElements_();
  // Detect the CDS helper mode from URL path or hash part if it exists.
  this.detectCdsHelperMode_();
};

/**
 * Gets the stored account information from underlying storage.
 * @return {Object|undefined} the stored account.
 * @private
 */
window.accountchooser.cdshelper.CdsHelper.prototype.
    getStoredAccount_ = function() {
  var account = this.storage_.read();
  this.storage_.clear();
  return account;
};

/**
 * Saves the account information into underlying storage.
 * @param {!Object} account the account to be stored.
 * @private
 */
window.accountchooser.cdshelper.CdsHelper.prototype.
    storeAccount_ = function(account) {
  this.storage_.write(account);
};

/**
 * Finds the login/sign up input fields on current page.
 * @private
 */
window.accountchooser.cdshelper.CdsHelper.prototype.
    findUiElements_ = function() {
  for (var e in this.uiElements_) {
    var id = window.accountchooser.config.uiElementIds[e];
    if (id) {
      this.uiElements_[e] = jQuery('#' + id);
    }
  }
};

/**
 * Checks whether the mode is login.
 * @return {boolean} {@code true} if current mode is login mode.
 * @private
 */
window.accountchooser.cdshelper.CdsHelper.prototype.
    isLoginMode_ = function() {
  return window.accountchooser.config.cdsHelperMode ==
      window.accountchooser.config.CdsHelperModes.LOGIN;
};

/**
 * Checks whether the mode is signup.
 * @return {boolean} {@code true} if current mode is signup mode.
 * @private
 */
window.accountchooser.cdshelper.CdsHelper.prototype.
    isSignupMode_ = function() {
  return window.accountchooser.config.cdsHelperMode ==
      window.accountchooser.config.CdsHelperModes.SIGNUP;
};

/**
 * Checks if the current page is the login page or not.
 * @return {boolean} {@code true} if the current page is the login page.
 * @private
 */
window.accountchooser.cdshelper.CdsHelper.prototype.
    isLoginPage_ = function() {
  var currentUrl = new window.accountchooser.util.AbsoluteUrl(
      window.location.href);
  var loginUrl = new window.accountchooser.util.AbsoluteUrl(
      window.accountchooser.config.loginUrl);
  return currentUrl.matches(loginUrl);
};

/**
 * Checks if the current page is the sign up page or not.
 * @return {boolean} {@code true} if the current page is the sign up page.
 * @private
 */
window.accountchooser.cdshelper.CdsHelper.prototype.
    isSignupPage_ = function() {
  var currentUrl = new window.accountchooser.util.AbsoluteUrl(
      window.location.href);
  var signupUrl = new window.accountchooser.util.AbsoluteUrl(
      window.accountchooser.config.signupUrl);
  return currentUrl.matches(signupUrl);
};

/**
 * Detects and sets the CDS helper mode from the URL path or URL hash parameter.
 * @private
 */
window.accountchooser.cdshelper.CdsHelper.prototype.
    detectCdsHelperMode_ = function() {
  // If explicitly set, use the value.
  if (window.accountchooser.config.cdsHelperMode) {
    return;
  }
  // Alias for CdsHelperModes enum.
  var Modes = window.accountchooser.config.CdsHelperModes;
  if (this.isLoginPage_()) {
    window.accountchooser.config.cdsHelperMode = Modes.LOGIN;
  } else if (this.isSignupPage_()) {
    window.accountchooser.config.cdsHelperMode = Modes.SIGNUP;
  } else if (window.location.hash) {
    var hash = window.location.hash;
    if (hash[0] == '#') {
      hash = hash.substring(1);
    }
    var params = hash.split('&');
    for (var i = 0; i < params.length; i++) {
      var parts = params[i].split('=');
      if (parts.length == 2 && parts[0].toLowerCase() == 'cdshelpermode') {
        window.accountchooser.config.setMode(parts[1], parts[0]);
        return;
      }
    }
  }
};

/**
 * Checks the status of the account. If any error or timeout occurs, treat the
 * account as registered.
 * @param {!Object} account the account to be checked.
 * @param {function(!Object)} callback the callback function to be called when
 *     response is returned.
 * @private
 */
window.accountchooser.cdshelper.CdsHelper.prototype.
    checkUserStatus_ = function(account, callback) {
  var data = {email: account.email};
  if (account.displayName) {
    data.displayName = account.displayName;
  }
  if (account.photoUrl) {
    data.photoUrl = account.photoUrl;
  }
  if (account.providerId) {
    data.providerId = account.providerId;
  }
  jQuery.ajax({
      type: 'POST',
      cache: false,
      url: window.accountchooser.config.userStatusUrl,
      data: data,
      dataType: 'json',
      timeout:
          window.accountchooser.cdshelper.USER_STATUS_TIMEOUT_,
      success: function(response) {
        callback(response ? response : {registered: true});
      },
      error: function() {
        callback({registered: true});
      }
  });
};

/**
 * Prefills input fields with the account's information.
 * @param {!Object} account the account returned from the CDS.
 * @private
 */
window.accountchooser.cdshelper.CdsHelper.prototype.prefill_ =
    function(account) {
  if (this.uiElements_.email) {
    this.uiElements_.email.val(account.email);
  }
  if (this.uiElements_.name) {
    this.uiElements_.name.val(account.displayName);
  }
  if (this.uiElements_.photo) {
    this.uiElements_.photo.val(account.photoUrl);
  }
  if (this.uiElements_.password) {
    this.uiElements_.password.focus();
  }
};

/**
 * Redirects to the correct page with the account information returned from the
 * CDS.
 * @param {!Object} account the account returned from the CDS.
 * @param {window.accountchooser.config.CdsHelperModes} mode the
 *     mode of the target page.
 * @private
 */
window.accountchooser.cdshelper.CdsHelper.prototype.redirect_ =
    function(account, mode) {
  this.storeAccount_(account);
  switch (mode) {
    case window.accountchooser.config.CdsHelperModes.LOGIN:
      window.location.href =
          window.accountchooser.config.loginUrl;
      break;
    case window.accountchooser.config.CdsHelperModes.SIGNUP:
      window.location.href =
          window.accountchooser.config.signupUrl;
      break;
    default:
      window.accountchooser.util.log(
          'Unrecognized CDS helper mode :' + mode);

  }
};

/**
 * Handles the result returned from the CDS select service.
 * @param {Object=} opt_result the result returned from the CDS.
 * @param {Object=} opt_error the error object returned from the CDS.
 * @private
 */
window.accountchooser.cdshelper.CdsHelper.prototype.
    selectCallback_ = function(opt_result, opt_error) {
  var account = opt_result && opt_result.account;
  if (account && account.email) {
    var self = this;
    this.checkUserStatus_(account, function(userStatus) {
      var authUri = userStatus.authUri || userStatus.authUrl;
      if (authUri) {
        // Redirect to the auth endpoint.
        if (authUri.length < 2048) {
          window.location.href = authUri;
        } else {
          window.accountchooser.util.formRedirect(authUri);
        }
      } else {
        var mode = userStatus.registered ?
            window.accountchooser.config.CdsHelperModes.LOGIN :
            window.accountchooser.config.CdsHelperModes.SIGNUP;
        // If the account is registered and current mode is login, or it is not
        // registered and current mode is signup, stay in the page and prefill
        // the fields. Otherwise, redirect to correct page.
        if (mode == window.accountchooser.config.cdsHelperMode) {
          self.prefill_(account);
        } else {
          self.redirect_(account, mode);
        }
      }
    });
  } else {
    // The user clicks 'sign into another account' or an error occurs. No
    // account is returned, just focus on the username input field.
    this.uiElements_.email.focus();
  }
};

/**
 * Handles the result returned from the CDS store/update service.
 * @param {Object=} opt_result the result returned from the CDS.
 * @param {Object=} opt_error the error object returned from the CDS.
 * @private
 */
window.accountchooser.cdshelper.CdsHelper.prototype.
    defaultCallback_ = function(opt_result, opt_error) {
  // For login mode, it need to auto redirect to the CDS selecting page (if
  // there's any account in the CDS). This is done by the empty response
  // callback. However, there may be leftover result from store/update service,
  // which causes store/update callback instead of empty response callback is
  // called. In this case, just eat the store/update result and call the empty
  // response callback directly.
  if (this.isLoginMode_()) {
    this.emptyCallback_();
  }
};

/**
 * Handles empty response notification.
 * @private
 */
window.accountchooser.cdshelper.CdsHelper.prototype.
    emptyCallback_ = function() {
  // Store account to CDS if there's any.
  if (window.accountchooser.config.storedAccount) {
    this.storeAccountToCds(
        window.accountchooser.config.storedAccount);
    window.accountchooser.config.storedAccount = undefined;
  }
  // If not login or signup mode, no need to prefill or auto select account.
  if (!this.isLoginMode_() && !this.isSignupMode_()) {
    return;
  }
  // Get the stored account.
  var account = this.getStoredAccount_();
  if (account) {
    // If stored account exists, prefill all fields with the stored account
    // information.
    this.prefill_(account);
  } else if (this.isLoginMode_()) {
    // If no stored account and the mode is login, automatically redirect to CDS
    // selecting page.
    this.selectAccountFromCds();
  }
};

/**
 * Selects an account from the CDS.
 */
window.accountchooser.cdshelper.CdsHelper.prototype.
    selectAccountFromCds = function() {
  var self = this;
  var cb = function(empty, error) {
    if (!empty || error) {
      // The CDS is not empty, redirect user to select an account.
      // If an error occurs, it's maybe due to popup mode, so we still need to
      // perform the action.
      var cdsOptions = {
        ui: window.accountchooser.config.cdsUiConfig,
        language: window.accountchooser.config.language,
        providers: window.accountchooser.config.providers
      };
      self.cdsClient_.select(null, cdsOptions);
    } else {
      // No account selected.
      self.selectCallback_();
    }
  }
  this.cdsClient_.checkCdsEmpty(cb);
};

/**
 * Stores an account into the CDS.
 * @param {!Object} account the account to be stored.
 */
window.accountchooser.cdshelper.CdsHelper.prototype.
    storeAccountToCds = function(account) {
  var clientCallbackUrl =
      new window.accountchooser.util.AbsoluteUrl(
          window.accountchooser.config.loginOkUrl);
  var self = this;
  var cb = function(exist, error) {
    if (!exist || error) {
      // Account doesn't exist in the CDS, redirect user to store the account.
      // If an error occurs, it's maybe due to popup mode, so we still need to
      // perform the action.
      var cdsOptions = {
        clientCallbackUrl: clientCallbackUrl.get(),
        language: window.accountchooser.config.language
      };
      self.cdsClient_.store([account], cdsOptions);
    } else {
      // Account exists, try to update it.
      self.updateAccountToCds(account);
    }
  };
  this.cdsClient_.checkAccountExist(account, cb);
};

/**
 * Updates an account which is in the CDS.
 * @param {!Object} account the new account which is used to update the old one.
 */
window.accountchooser.cdshelper.CdsHelper.prototype.
    updateAccountToCds = function(account) {
  var clientCallbackUrl =
      new window.accountchooser.util.AbsoluteUrl(
          window.accountchooser.config.loginOkUrl);
  var self = this;
  var cb = function(shouldUpdate, error) {
    if (shouldUpdate || error) {
      // Should update the account. If an error occurs, it's maybe due to popup
      // mode, so we still need to perform the action.
      var cdsOptions = {
        clientCallbackUrl: clientCallbackUrl.get(),
        language: window.accountchooser.config.language
      };
      self.cdsClient_.update(account, cdsOptions);
    } else {
      window.location.href = clientCallbackUrl.get();
    }
  };
  this.cdsClient_.checkShouldUpdate(account, cb);
};

/**
 * CdsHelper singleton instance.
 * @type {window.accountchooser.cdshelper.CdsHelper}
 * @private
 */
window.accountchooser.cdshelper.INSTANCE_;

/**
 * Initializes the CDS helper. This is a static function which creates an
 * CdsHelper singleton in the first time. After that, each call will return the
 * single instance.
 * @param {Object=} opt_config The configuration object. Only the first
 *     invocation of this function uses it to do the initialization. The
 *     following invocations will ignore it.
 * @return {window.accountchooser.cdshelper.CdsHelper} The
 *     CdsHelper singleton instance.
 */
window.accountchooser.initAccountChooser = function(opt_config) {
  if (!window.accountchooser.cdshelper.INSTANCE_) {
    window.accountchooser.setConfig(opt_config || {});
    window.accountchooser.cdshelper.INSTANCE_ =
        new window.accountchooser.cdshelper.CdsHelper();
  }
  return window.accountchooser.cdshelper.INSTANCE_;
};


/**
 * Sets the configurtion for cds helper.
 * <p>This method lists all supported parameter names, which are
 * case-insensitive.
 * @param {Object.<string, *>} config The configuration parameter key-value
 *     pairs.
 */
window.accountchooser.config.setConfig = function(config) {
  if (config) {
    for (var key in config) {
      var value = config[key];
      var lowerCasekey = key.toLowerCase();
      switch (lowerCasekey) {
        case 'homeurl':
          window.accountchooser.config.setWidgetHomeUrl(
              /** @type {string} */ (value), key);
          break;
        case 'loginurl':
          window.accountchooser.config.setWidgetLoginUrl(
              /** @type {string} */ (value), key);
          break;
        case 'signupurl':
          window.accountchooser.config.setWidgetSignupUrl(
              /** @type {string} */ (value), key);
          break;
        case 'userstatusurl':
          window.accountchooser.config.setWidgetUserStatusUrl(
              /** @type {string} */ (value), key);
          break;
        case 'uiconfig':
          window.accountchooser.config.setCdsUiConfig(
              /** @type {Object} */ (value), key);
          break;
        case 'siteemailid':
          window.accountchooser.config.setSiteEmailId(
              /** @type {string} */ (value), key);
          break;
        case 'sitepasswordid':
          window.accountchooser.config.setSitePasswordId(
              /** @type {string} */ (value), key);
          break;
        case 'sitedisplaynameid':
          window.accountchooser.config.setSiteDisplayNameId(
              /** @type {string} */ (value), key);
          break;
        case 'sitephotourlid':
          window.accountchooser.config.setSitePhotoUrlId(
              /** @type {string} */ (value), key);
          break;
        case 'mode':
          window.accountchooser.config.setMode(
              /** @type {string} */ (value), key);
          break;
        case 'storeaccount':
          window.accountchooser.config.setStoredAccount(
              /** @type {Object} */ (value), key);
          break;
        case 'providers':
          window.accountchooser.config.setProviders(
              /** @type {Array.<string>} */ (value), key);
          break;
        default:
          window.accountchooser.config.logUnrecognizedConfig_(
              key);
      }
    }
  }
};

/**
 * Writes a log to browser console for a unrecognized configuration parameter.
 * @param {string} key The name of the configuration parameter.
 * @private
 */
window.accountchooser.config.logUnrecognizedConfig_ = function(
    key) {
  if (window.accountchooser.util &&
      window.accountchooser.util.log) {
    var msg = 'Unrecognized config parameter \'' + key + '\', ignored!';
    window.accountchooser.util.log(msg);
  }
};

/**
 * Sets configuration parameter: sign up URL.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setWidgetHomeUrl = function(
    value, key) {
  window.accountchooser.param.notEmpty(value, key);
  window.accountchooser.config.loginOkUrl = value;
};

/**
 * Sets configuration parameter: login URL.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setWidgetLoginUrl = function(
    value, key) {
  window.accountchooser.param.notEmpty(value, key);
  window.accountchooser.config.loginUrl = value;
};

/**
 * Sets configuration parameter: sign up URL.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setWidgetSignupUrl = function(
    value, key) {
  window.accountchooser.config.signupUrl = value;
};

/**
 * Sets configuration parameter: user status URL.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setWidgetUserStatusUrl = function(
    value, key) {
  window.accountchooser.config.userStatusUrl = value;
};

/**
 * Sets configuration parameter: ui configuration for CDS.
 * @param {Object} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setCdsUiConfig = function(value,
    key) {
  window.accountchooser.config.cdsUiConfig = value;
};

/**
 * Sets configuration parameter: UI element id for email input field.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setSiteEmailId = function(
    value, key) {
  window.accountchooser.param.notEmpty(value, key);
  window.accountchooser.config.uiElementIds.email = value;
};

/**
 * Sets configuration parameter: UI element id for password input field.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setSitePasswordId = function(
    value, key) {
  window.accountchooser.config.uiElementIds.password = value;
};

/**
 * Sets configuration parameter: UI element id for display name input field.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setSiteDisplayNameId = function(
    value, key) {
  window.accountchooser.config.uiElementIds.name = value;
};

/**
 * Sets configuration parameter: UI element id for photo URL input field.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setSitePhotoUrlId = function(
    value, key) {
  window.accountchooser.config.uiElementIds.photo = value;
};

/**
 * Sets configuration parameter: mode for CDS helper, either signup or login.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setMode = function(value, key) {
  // Alias for CdsHelperModes enum.
  var Modes = window.accountchooser.config.CdsHelperModes;
  for (var m in Modes) {
    if (Modes[m] == String(value).toLowerCase()) {
      window.accountchooser.config.cdsHelperMode = Modes[m];
      return;
    }
  }
  window.accountchooser.util.log(
      'Ignore unrecognized value for \'' + key + '\':' + value);
};

/**
 * Sets configuration parameter: account to be stored.
 * @param {Object} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setStoredAccount = function(value,
    key) {
  window.accountchooser.config.storedAccount = value;
};

/**
 * Sets configuration parameter: supported provider IDs.
 * @param {Array.<string>} value the parameter value.
 * @param {string} key the parameter key.
 */
window.accountchooser.config.setProviders = function(value,
   key) {
  window.accountchooser.config.providers = value;
};

/**
 * Shortcut method for
 * {@code window.accountchooser.config.setConfig}
 * @param {Object} config The configuration parameter key-value pairs.
 */
window.accountchooser.setConfig = function(config) {
  window.accountchooser.config.setConfig(config);
};


/**
 * @define {string} The jquery library URL.
 */
var JQUERY_SRC =
  'https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js';

/**
 * @define {string} The accountchooser client library URL.
 */
var ACCOUNTCHOOSER_CLIENT_SRC = 'https://www.accountchooser.com/client.js';

/**
 * Template for generating CDS helper initialization script.
 * @private
 */
window.accountchooser.cdshelper.initTemplate_ =
  '<script type="text/javascript">\n' +
  '(function() {\n' +
  'var loader = new window.accountchooser.loader.JsLoader();\n' +
  'function onAllLoaded() {\n' +
  '  jQuery(function() {\n' +
  '    var config = jQuery.extend({},\n' +
  '        {%%CONFIG%%},\n' +
  '        window.accountchooser.CONFIG);\n' +
  '    window.accountchooser.initAccountChooser(config);\n' +
  '  });\n' +
  '}\n' +
  'function loadCdsClient() {\n' +
  '  if (window.accountchooser.CdsClient) {\n' +
  '    onAllLoaded();\n' +
  '    return;\n' +
  '  }\n' +
  '  var url = "' + ACCOUNTCHOOSER_CLIENT_SRC + '";\n' +
  '  loader.load(url, undefined, onAllLoaded);\n' +
  '}\n' +
  'function loadJQuery() {\n' +
  '  if (typeof jQuery !== "undefined") {\n' +
  '    loadCdsClient();\n' +
  '    return;\n' +
  '  }\n' +
  '  var url = "' + JQUERY_SRC + '";\n' +
  '  loader.load(url, undefined, loadCdsClient);\n' +
  '}\n' +
  'loadJQuery();\n' +
  '})();\n' +
  '</script>\n';

(function() {
  // Define the global config object.
  window.accountchooser.CONFIG = {};

  // Get the current script node.
  var node = window.accountchooser.util.getCurrentScript();

  // Check whether to auto initialize.
  var src = node.getAttribute('src');
  var index = src.indexOf('#');
  if (index > -1) {
    var hash = src.substring(index + 1);
    if (/(^|&)no-auto-init(&|$)/.test(hash)) {
      return;
    }
  }

  // Get the configuration from current script content.
  var content =
      window.accountchooser.util.getCleanScriptContent(node);
  var configStr = content || '';
  var script =
    window.accountchooser.cdshelper.initTemplate_.replace(
        /\%\%CONFIG\%\%/, configStr);
  document.write(script);
})();

