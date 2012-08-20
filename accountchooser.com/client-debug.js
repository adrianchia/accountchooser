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
 * Default name for popup window.
 */
window.accountchooser.util.DEFAULT_POPUP_NAME = 'OpenIdPopup';

/**
 * Opens a new window.
 * @param {number} width The width of the window.
 * @param {number} height The height of the window.
 * @param {string=} opt_url The URL for the new window. If missing or set to
 *     null, 'about:blank' will be used.
 * @param {string=} opt_name The name for the new window. If missing, use the
 *     default name.
 * @return {Window} the opened window object.
 */
window.accountchooser.util.showPopup = function(width, height,
    opt_url, opt_name) {
  var top = (window.accountchooser.util.windowHeight(window) -
      height) / 2;
  var left = (window.accountchooser.util.windowWidth(window) -
      width) / 2;
  top = top > 0 ? top : 0;
  left = left > 0 ? left : 0;
  var options = 'width=' + width + ',height=' + height + ',left=' + left +
      ',top=' + top + ',status=1,location=1,resizable=yes,menubar=no,' +
      'toolbar=no,titlebar=no,channelmode=no,directories=no,fullscreen=no';
  var url = opt_url || 'about:blank';
  var popupName = opt_name ||
      window.accountchooser.util.DEFAULT_POPUP_NAME;
  var popup = window.open(url, popupName, options);
  if (popup) {
    if (!document.getElementById('popin-box') &&
        window.accountchooser.util.showDarkScreen) {
      window.accountchooser.util.showDarkScreen(popup);
    }
    window.accountchooser.util.popup_ = popup;
    window.accountchooser.util.popupName_ = popupName;
    popup.focus();
  }
  return popup;
};


/**
 * RE for matching MSIE's user agent.
 * @private
 */
window.accountchooser.util.REGEX_MSIE_UA_ =
    /MSIE ([\d.]+).*Windows NT ([\d.]+)/;

/**
 * RE for matching Firefox's user agent.
 * @private
 */
window.accountchooser.util.REGEX_FIREFOX_UA_ =
    /Firefox\/([\d.]+)/;

/**
 * RE for matching Opera's user agent.
 * @private
 */
window.accountchooser.util.REGEX_OPERA_UA_ =
    /Opera[ \/]([\d.]+)(.*Version\/([\d.]+))?/;

/**
 * RE for matching Chrome's user agent.
 * @private
 */
window.accountchooser.util.REGEX_CHROME_UA_ =
    /Chrome\/([\d.]+)/;

/**
 * RE for matching Safari's user agent.
 * @private
 */
window.accountchooser.util.REGEX_SAFARI_UA_ =
    /((Windows NT ([\d.]+))|(Mac OS X ([\d_]+))).*Version\/([\d.]+).*Safari/;

/**
 * RE for matching Android default browser's user agent.
 * @private
 */
window.accountchooser.util.REGEX_ANDROID_UA_ =
    /Android ([\d.]+).*Safari/;

/**
 * RE for matching Mobile Safari's user agent.
 * @private
 */
window.accountchooser.util.REGEX_MOBILE_SAFARI_UA_ =
    /OS ([\d_]+) like Mac OS X.*Mobile.*Safari/;

/**
 * RE for matching Konqueror's user agent.
 * @private
 */
window.accountchooser.util.REGEX_KONQUEROR_UA_ =
    /Konqueror\/([\d.]+)/;

/**
 * RE for matching Mobile MSIE's user agent.
 * @private
 */
window.accountchooser.util.REGEX_MOBILE_MSIE_UA_ =
    /MSIE ([\d.]+).*Windows Phone OS ([\d.]+)/;

/**
 * @class Class for representing versions.
 * @param {string} version The version string.
 * @param {string=} opt_delimiter The delimiter which separates each components
 * of the version. Default is a dot '.'.
 * @constructor
 */
window.accountchooser.util.Version = function(version,
    opt_delimiter) {
  window.accountchooser.param.notEmpty(version, 'version');

  this.version_ = version;
  this.components_ = version.split(opt_delimiter || '.');
  for (var i = 0; i < this.components_.length; ++i) {
    this.components_[i] = parseInt(this.components_[i]);
  }
};

/**
 * Compares the version with another one.
 * @param {window.accountchooser.util.Version|string} version
 *     The version to be compared.
 * @return {number} -1, 0 or 1 if it's less than, equal to or greater than the
 *     other.
 */
window.accountchooser.util.Version.prototype.compare = function(
    version) {
  if (!(version instanceof window.accountchooser.util.Version)) {
    version = new window.accountchooser.util.Version(version);
  }
  var maxLength = Math.max(this.components_.length, version.components_.length);
  for (var i = 0; i < maxLength; ++i) {
    var num1 = this.components_[i];
    var num2 = version.components_[i];
    if (num1 !== undefined && num2 !== undefined && num1 !== num2) {
      return num1 - num2;
    } else if (num1 === undefined) {
      return -1;
    } else if (num2 === undefined) {
      return 1;
    }
  }
  return 0;
};

/**
 * Checks the version is equal to or greater than another one.
 * @param {window.accountchooser.util.Version|string} version
 *     The version to be compared.
 * @return {boolean} {@code true} if it's equal to or greater than the other.
 */
window.accountchooser.util.Version.prototype.ge = function(
    version) {
  return this.compare(version) >= 0;
};

/**
 * Checks whether the browser supports SNI (Server Name Indicator).
 * @param {string=} opt_userAgent The user agent string of the browser. If
 *     omitted, get it from window.navigator.userAgent.
 * @return {boolean} {@code true} if the browser supports SNI.
 */
window.accountchooser.util.isSNISupported = function(
    opt_userAgent) {
  var ua = opt_userAgent || (window.navigator && window.navigator.userAgent);
  var result;
  if (!ua) {
    return false;
  } else if (result = ua.match(
      window.accountchooser.util.REGEX_OPERA_UA_)) {
    var version = new window.accountchooser.util.Version(
        result[3] || result[1]);
    // Opera Mini, No.
    if (ua.indexOf('Opera Mini') >= 0) {
      return false;
    }
    // Opera Mobile 10.1 or later on Android supports SNI.
    if (ua.indexOf('Opera Mobi') >= 0) {
      return ua.indexOf('Android') >= 0 && version.ge('10.1');
    }
    // Desktop Opera 8.0 or later suppports SNI.
    return version.ge('8.0');
  } else if (result = ua.match(
      window.accountchooser.util.REGEX_FIREFOX_UA_)) {
    // Firefox 2.0 or later supports SNI.
    var version =
        new window.accountchooser.util.Version(result[1]);
    return version.ge('2.0');
  } else if (result = ua.match(
      window.accountchooser.util.REGEX_CHROME_UA_)) {
    // Chrome 6.0 or later supports SNI.
    var version =
        new window.accountchooser.util.Version(result[1]);
    return version.ge('6.0');
  } else if (result = ua.match(
      window.accountchooser.util.REGEX_SAFARI_UA_)) {
    // Safari 2.1 or later on OS X 10.5.6 or higher and Windows Vista or higher
    // supports SNI.
    var version =
        new window.accountchooser.util.Version(result[6]);
    var winVersion = result[3] &&
        new window.accountchooser.util.Version(result[3]);
    var osxVersion = result[5] &&
        new window.accountchooser.util.Version(result[5], '_');
    var platSupport = !!(winVersion && winVersion.ge('6.0')) ||
        !!(osxVersion && osxVersion.ge('10.5.6'));
    return platSupport && version.ge('3.0');
  } else if (result = ua.match(
      window.accountchooser.util.REGEX_ANDROID_UA_)) {
    // Android default browser on Android OS 3.0 or higher supports SNI.
    var version =
        new window.accountchooser.util.Version(result[1]);
    return version.ge('3.0');
  } else if (result = ua.match(
      window.accountchooser.util.REGEX_MOBILE_SAFARI_UA_)) {
    // Mobile Safari on iOS 4.0 or higher supports SNI.
    var iosVersion =
        new window.accountchooser.util.Version(result[1], '_');
    return iosVersion.ge('4.0');
  } else if (result = ua.match(
      window.accountchooser.util.REGEX_KONQUEROR_UA_)) {
    // Konqueror 4.7 or later supports SNI.
    var version =
        new window.accountchooser.util.Version(result[1]);
    return version.ge('4.7');
  } else if (result = ua.match(
      window.accountchooser.util.REGEX_MOBILE_MSIE_UA_)) {
    // Mobile IE on WP7 supports SNI.
    var version =
        new window.accountchooser.util.Version(result[1]);
    var winVersion =
        new window.accountchooser.util.Version(result[2]);
    return version.ge('7.0') && winVersion.ge('7.0');
  } else if (result = ua.match(
      window.accountchooser.util.REGEX_MSIE_UA_)) {
    // Only IE7 or later on Windows Vista or higher supports SNI.
    var version =
        new window.accountchooser.util.Version(result[1]);
    var winVersion =
        new window.accountchooser.util.Version(result[2]);
    return version.ge('7.0') && winVersion.ge('6.0');
  }
  return false;
};

/**
 * Error thrown when detecting the browser doesn't support SNI.
 */
window.accountchooser.util.SNI_NOT_SUPPORT_ERROR = {
  error: 'SNI is not supported.'
};

/**
 * Checks whether the browser supports SNI (Server Name Indicator). If not,
 * throw an error.
 * @param {string=} opt_userAgent The user agent string of the browser. If
 *     omitted, get it from window.navigator.userAgent.
 */
window.accountchooser.util.checkSNISupported = function(
    opt_userAgent) {
  if (!window.accountchooser.util.isSNISupported(
      opt_userAgent)) {
    throw window.accountchooser.util.SNI_NOT_SUPPORT_ERROR;
  }
};


/**
 * Name space for AJAX CDS RPC.
 */
window.accountchooser.rpc =
    window.accountchooser.rpc || {};

/**
 * @class Base class for all RPC objects (Request, Response, and Notification).
 * @constructor
 */
window.accountchooser.rpc.RpcObject = function() {};

/**
 * Sets the timestamp for the RpcObject. If the timestamp is not provided, the
 * current time is used.
 * @param {number} opt_timestamp The timestamp for this RpcObject.
 */
window.accountchooser.rpc.RpcObject.prototype.setTimestamp =
    function(opt_timestamp) {
  this.timestamp_ = opt_timestamp || new Date().getTime();
};

/**
 * Transfers the RPC object to a normal object and sets the storage timestamp.
 * @return {string} The normal object represents the RPC object.
 */
window.accountchooser.rpc.RpcObject.prototype.toJSON =
    function() {
  var json = {jsonrpc: '2.0'};
  if (this.timestamp_ != null) {
    json.timestamp = this.timestamp_;
  }
  return json;
};

/**
 * Returns the JSON String format of the RPC object.
 * @return {string} The JSON String format.
 */
window.accountchooser.rpc.RpcObject.prototype.toString =
    function() {
  return JSON.stringify(this.toJSON());
};

/**
 * @class Base class for Request and Notification.
 * @param {string} method The name of the method to be invoked.
 * @param {object} params The parameter values to be used during the invocation
 *     of the method.
 * @constructor
 */
window.accountchooser.rpc.AbstractRequest = function(method,
    params) {
  this.method_ = method;
  this.params_ = params;
};
window.accountchooser.rpc.AbstractRequest.inheritsFrom(
    window.accountchooser.rpc.RpcObject);

/**
 * Sets the name of the method to be invoked.
 * @param {string} method The name of the method to be invoked.
 */
window.accountchooser.rpc.AbstractRequest.prototype.setMethod =
    function(method) {
  this.method_ = method;
};

/**
 * Returns the name of the method to be invoked.
 * @return {string} The name of the method to be invoked.
 */
window.accountchooser.rpc.AbstractRequest.prototype.getMethod =
    function() {
  return this.method_;
};

/**
 * Sets the parameter values to be used during the invocation of the method.
 * @param {object} params The parameter values to be used during the invocation
 *     of the method.
 */
window.accountchooser.rpc.AbstractRequest.prototype.
    setParameters = function(params) {
  this.params_ = params;
};

/**
 * Returns the parameter values to be used during the invocation of the method.
 * @return {object} The parameter values to be used during the invocation of
 *     the method.
 */
window.accountchooser.rpc.AbstractRequest.prototype.
    getParameters = function() {
  return this.params_;
};

/**
 * Transfers the RPC object to a normal object.
 * @return {string} The normal object represents the RPC object.
 */
window.accountchooser.rpc.AbstractRequest.prototype.toJSON =
    function() {
  var json = window.accountchooser.rpc.RpcObject.prototype.
      toJSON.call(this);
  if (this.method_ != null) {
    json.method = this.method_;
  }
  if (this.params_ != null) {
    json.params = this.params_;
  }
  return json;
};

/**
 * @class Defines the Notification class. Notification is a request that
 * without response returned.
 * @param {string} method The name of the method to be invoked.
 * @param {object} params The parameter values to be used during the invocation
 *     of the method.
 * @constructor
 */
window.accountchooser.rpc.Notification = function(method,
    params) {
  this.method_ = method;
  this.params_ = params;
};
window.accountchooser.rpc.Notification.inheritsFrom(
    window.accountchooser.rpc.AbstractRequest);

/**
 * @class Defines the Request class. Request is a wrapper for a RPC request.
 * There must be a Response returned from the Server after handling the Request.
 * @param {string} method The name of the method to be invoked.
 * @param {object} params The parameter values to be used during the invocation
 *     of the method.
 * @param {string} id The id of the request.
 * @constructor
 */
window.accountchooser.rpc.Request = function(method, params,
    id) {
  this.method_ = method;
  this.params_ = params;
  this.id_ = id;
};
window.accountchooser.rpc.Request.inheritsFrom(
    window.accountchooser.rpc.AbstractRequest);

/**
 * Sets the request id.
 * @param {string} id the id of the request.
 */
window.accountchooser.rpc.Request.prototype.setId = function(
    id) {
  this.id_ = id;
};

/**
 * Returns the request id.
 * @return {string} the id of the request.
 */
window.accountchooser.rpc.Request.prototype.getId = function() {
  return this.id_;
};

/**
 * Transfers the RPC object to a normal object.
 * @return {string} The normal object represents the RPC object.
 */
window.accountchooser.rpc.Request.prototype.toJSON = function() {
  var json = window.accountchooser.rpc.AbstractRequest.prototype.
      toJSON.call(this);
  if (this.id_ != null) {
    json.id = this.id_;
  }
  return json;
};

/**
 * @class Defines the Response class. After a Request is processed by the
 * server, a Response is returned as the result. The parameters opt_result and
 * opt_error cannot exist together, and exact one parameter should be provided.
 * @param {string} id The id of the request object.
 * @param {object|string|boolean|number} opt_result The result of the RPC
 *     request. Its value is determined by the method invoked on the Server.
 * @param {object} opt_error the error information.
 * @constructor
 */
window.accountchooser.rpc.Response = function(id, opt_result,
    opt_error) {
  window.accountchooser.param.notEmpty(id, 'id');
  this.id_ = id;
  this.result_ = opt_result;
  this.error_ = opt_error;
};
window.accountchooser.rpc.Response.inheritsFrom(
    window.accountchooser.rpc.RpcObject);

/**
 * Returns the result of the Response.
 * @return {object|string|Boolean|number} the result of the Response.
 */
window.accountchooser.rpc.Response.prototype.getResult =
    function() {
  return this.result_;
};

/**
 * Sets the result of the Response.
 * @param {object|string|Boolean|number} result the result of the Response.
 */
window.accountchooser.rpc.Response.prototype.setResult =
    function(result) {
  this.result_ = result;
};

/**
 * Returns the error of the Response.
 * @return {object} the error of the Response.
 */
window.accountchooser.rpc.Response.prototype.getError =
    function() {
  return this.error_;
};

/**
 * Sets the error of the Response.
 * @param {object} error the error of the Response.
 */
window.accountchooser.rpc.Response.prototype.setError =
    function(error) {
  this.error_ = error;
};

/**
 * Sets the request id.
 * @param {string} id the id of the request.
 */
window.accountchooser.rpc.Response.prototype.setId =
    function(id) {
  this.id_ = id;
};

/**
 * Returns the request id.
 * @return {string} the id of the request.
 */
window.accountchooser.rpc.Response.prototype.getId = function() {
  return this.id_;
};

/**
 * Transfers the RPC object to a normal object.
 * @return {string} The normal object represents the RPC object.
 */
window.accountchooser.rpc.Response.prototype.toJSON =
    function() {
  var json = window.accountchooser.rpc.RpcObject.prototype.
      toJSON.call(this);
  json.id = this.id_;
  if (this.result_ != null) {
    json.result = this.result_;
  } else if (this.error_ != null) {
    json.error = this.error_;
  }
  return json;
};


/** default CDS domain  */
window.accountchooser.rpc.DEFAULT_CDS_DOMAIN =
    'https://www.accountchooser.com';

/** default CDS iframe URL  */
window.accountchooser.rpc.DEFAULT_CDS_IFRAME_PATH =
    '/iframe.html';

/** default CDS popup URL  */
window.accountchooser.rpc.DEFAULT_CDS_POPUP_PATH = '/popup.html';

/** default CDS redirect URL  */
window.accountchooser.rpc.DEFAULT_CDS_REDIRECT_PATH =
    '/redirect.html';

/** default popup width  */
window.accountchooser.rpc.DEFAULT_POPUP_WIDTH = 520;

/** default popup height  */
window.accountchooser.rpc.DEFAULT_POPUP_HEIGHT = 550;

/** callback name for empty response */
window.accountchooser.rpc.EMPTY_RESPONSE_CALLBACK = 'empty';

/** Timeout for IDP assertion, in milliseconds. Default to 3 seconds  */
window.accountchooser.rpc.IDP_TIMEOUT = 3000;

/** The life time of an RPC object, in milliseconds. Default to 5 minutes. */
window.accountchooser.rpc.RPC_TIMEOUT = 5 * 60 * 1000;



/**
 * @class Defines the RequestAckNotification class. RequestAckNotification is a
 * Notification to indicate that a Request is received by CDS.
 * @param {string} requestId The id of the Request.
 * @constructor
 */
window.accountchooser.rpc.RequestAckNotification = function(
    requestId) {
  window.accountchooser.param.notEmpty(requestId, 'requestId');
  this.method_ =
      window.accountchooser.rpc.RequestAckNotification.METHOD;
  this.params_ = {requestId: requestId};
};
window.accountchooser.rpc.RequestAckNotification.inheritsFrom(
   window.accountchooser.rpc.Notification);

/** The method name of the RequestAckNotification */
window.accountchooser.rpc.RequestAckNotification.METHOD =
    'requestAckNotification';

/**
 * Sets the id of the Request to be acknowledged.
 * @param {string} requestId The id of the Requestto be acknowledged.
 */
window.accountchooser.rpc.RequestAckNotification.prototype.
    setRequestId = function(requestId) {
  this.params_.requestId = requestId;
};

/**
 * Returns the id of the Request to be acknowledged.
 * @return {string} The id of the Request to be acknowledged.
 */
window.accountchooser.rpc.RequestAckNotification.prototype.
    getRequestId = function() {
  return this.params_.requestId;
};

/**
 * @class Defines the CdsReadyNotification class. CdsReadyNotification is a
 * Notification to indicate that CDS page is loaded and initialized.
 * @constructor
 */
window.accountchooser.rpc.CdsReadyNotification = function() {
  this.method_ =
      window.accountchooser.rpc.CdsReadyNotification.METHOD;
};
window.accountchooser.rpc.CdsReadyNotification.inheritsFrom(
   window.accountchooser.rpc.Notification);

/** The method name of the CdsReadyNotification */
window.accountchooser.rpc.CdsReadyNotification.METHOD =
    'cdsReadyNotification';

/**
 * @class Defines the ClientReadyNotification class. ClientReadyNotification is
 * a Notification to indicate that CDS Client page is loaded and initialized.
 * @constructor
 */
window.accountchooser.rpc.ClientReadyNotification = function() {
  this.method_ =
      window.accountchooser.rpc.ClientReadyNotification.METHOD;
};
window.accountchooser.rpc.ClientReadyNotification.inheritsFrom(
   window.accountchooser.rpc.Notification);

/** The method name of the ClientReadyNotification */
window.accountchooser.rpc.ClientReadyNotification.METHOD =
    'clientReadyNotification';

/**
 * @class Defines the EmptyResponseNotification class. EmptyResponseNotification
 * is a Notification to indicate that there's no saved Response for the Client.
 * @constructor
 */
window.accountchooser.rpc.EmptyResponseNotification =
    function() {
  this.method_ =
      window.accountchooser.rpc.EmptyResponseNotification.METHOD;
};
window.accountchooser.rpc.EmptyResponseNotification.inheritsFrom(
    window.accountchooser.rpc.Notification);

/** The method name of the EmptyResponseNotification */
window.accountchooser.rpc.EmptyResponseNotification.METHOD =
    'emptyResponseNotification';

/**
 * @class Defines the StoreRequest class.
 * @param {string} id the id of the Request.
 * @param {Object} account the account to be stored to CDS.
 * @param {Array.<Object>} localAccounts the list of local account to be
 *     shown in the CDS.
 * @param {Object} clientConfig the configuration parameters of current client.
 * @constructor
 */
window.accountchooser.rpc.StoreRequest = function(id, account,
    localAccounts, clientConfig) {
  window.accountchooser.param.notEmpty(id, 'id');
  window.accountchooser.param.notEmpty(account, 'account');
  this.method_ = window.accountchooser.rpc.StoreRequest.METHOD;
  this.params_ = {
    account: account,
    localAccounts: localAccounts,
    clientConfig: clientConfig
  };
  this.id_ = id;
};
window.accountchooser.rpc.StoreRequest.inheritsFrom(
    window.accountchooser.rpc.Request);

/** The method name of the StoreRequest */
window.accountchooser.rpc.StoreRequest.METHOD = 'store';

/**
 * @class Defines the SelectRequest class.
 * @param {string} id the id of the Request.
 * @param {Array.<Object>} localAccounts the list of local account to be
 *     shown in the CDS.
 * @param {Object} clientConfig the configuration parameters of current client.
 * @constructor
 */
window.accountchooser.rpc.SelectRequest = function(id,
    localAccounts, clientConfig) {
  window.accountchooser.param.notEmpty(id, 'id');
  this.method_ = window.accountchooser.rpc.SelectRequest.METHOD;
  this.params_ = {
    localAccounts: localAccounts,
    clientConfig: clientConfig
  };
  this.id_ = id;
};
window.accountchooser.rpc.SelectRequest.inheritsFrom(
    window.accountchooser.rpc.Request);

/** The method name of the SelectRequest */
window.accountchooser.rpc.SelectRequest.METHOD = 'select';

/**
 * @class Defines the UpdateRequest class.
 * @param {string} id the id of the Request.
 * @param {Object} account the account to be updated in CDS.
 * @param {Object} clientConfig the configuration parameters of current client.
 * @constructor
 */
window.accountchooser.rpc.UpdateRequest = function(id, account,
    clientConfig) {
  window.accountchooser.param.notEmpty(id, 'id');
  window.accountchooser.param.notEmpty(account, 'account');
  this.method_ = window.accountchooser.rpc.UpdateRequest.METHOD;
  this.params_ = {
    account: account,
    clientConfig: clientConfig
  };
  this.id_ = id;
};
window.accountchooser.rpc.UpdateRequest.inheritsFrom(
    window.accountchooser.rpc.Request);

/** The method name of the UpdateRequest */
window.accountchooser.rpc.UpdateRequest.METHOD = 'update';

/**
 * @class Defines the ManageRequest class.
 * @param {string} id the id of the Request.
 * @param {Object} clientConfig the configuration parameters of current client.
 * @constructor
 */
window.accountchooser.rpc.ManageRequest = function(id,
    clientConfig) {
  window.accountchooser.param.notEmpty(id, 'id');
  this.method_ = window.accountchooser.rpc.ManageRequest.METHOD;
  this.params_ = {
    clientConfig: clientConfig
  };
  this.id_ = id;
};
window.accountchooser.rpc.ManageRequest.inheritsFrom(
    window.accountchooser.rpc.Request);

/** The method name of the ManageRequest */
window.accountchooser.rpc.ManageRequest.METHOD = 'manage';

/**
 * @class Defines the QueryRequest class.
 * @param {string} id the id of the Request.
 * @param {string} query the inquiry from the client.
 * @param {Object} account the account associated with this query.
 * @param {Object} clientConfig the configuration parameters of current client.
 * @constructor
 */
window.accountchooser.rpc.QueryRequest = function(id, query,
    account, clientConfig) {
  window.accountchooser.param.notEmpty(id, 'id');
  window.accountchooser.param.notEmpty(query, 'query');
  this.method_ = window.accountchooser.rpc.QueryRequest.METHOD;
  this.params_ = {
    query: query,
    account: account,
    clientConfig: clientConfig
  };
  this.id_ = id;
};
window.accountchooser.rpc.QueryRequest.inheritsFrom(
    window.accountchooser.rpc.Request);

/** The method name of the UpdateRequest */
window.accountchooser.rpc.QueryRequest.METHOD = 'query';

/**
 * Enums for CDS queries.
 * @enum {string}
 */
window.accountchooser.rpc.Queries = {
  CDS_DISABLED: 'cdsDisabled',
  CDS_EMPTY: 'cdsEmpty',
  ACCOUNT_EXIST: 'accountExist'
};


/**
 * Parses JSON-RPC Object on CDS client side.
 * <br>Possible RpcObject for CDS client: Response, RequestAckNotification,
 * or CdsReadyNotification.
 * @param {string} json A JSON format string.
 * @return {RpcObject} A valid RpcObject, of null otherwise.
 */
window.accountchooser.rpc.parseRpcObject = function(json) {
  var result = null;
  if (json) {
    try {
      var rpcObject = JSON.parse(json);
    } catch (e) {
      window.accountchooser.util.log(
          'Invalid JSON-RPC object: not a JSON object.');
      return result;
    }
    if (!rpcObject || rpcObject.jsonrpc != '2.0') {
      window.accountchooser.util.log(
          'Invalid JSON-RPC object: \'jsonrpc\' field should be \'2.0\'.');
    } else if (!rpcObject.id && !rpcObject.method) {
      window.accountchooser.util.log(
          'Invalid JSON-RPC object: no \'id\' or \'method\' field found.');
    } else if (rpcObject.method) {
      var method = rpcObject.method.toLowerCase();
      if (method == window.accountchooser.rpc.
          RequestAckNotification.METHOD.toLowerCase()) {
        if (rpcObject.params && rpcObject.params.requestId) {
          var requestId = rpcObject.params.requestId;
          result = new window.accountchooser.rpc.
              RequestAckNotification(requestId);
        } else {
          window.accountchooser.util.log('Invalid JSON-RPC' +
              ' notification: no \'params.requestId\' field found.');
        }
      } else if (method == window.accountchooser.rpc.
          CdsReadyNotification.METHOD.toLowerCase()) {
        result = new window.accountchooser.rpc.
            CdsReadyNotification();
      } else if (method == window.accountchooser.rpc.
          EmptyResponseNotification.METHOD.toLowerCase()) {
        result = new window.accountchooser.rpc.
            EmptyResponseNotification();
      } else {
        window.accountchooser.util.log(
            'Invalid JSON-RPC response: invalid \'id\' field.');
      }
    } else {
      result = new window.accountchooser.rpc.Response(
          rpcObject.id, rpcObject.result, rpcObject.error);
    }
  }
  return result;
};


/**
 * The services registered on this page.
 * @private
 */
window.accountchooser.rpc.services_ = {};

/**
 * Registers an RPC service.
 * @param {string} serviceName The name of the service.
 * @param {funtion} handler The handler function when the RPC is called.
 */
window.accountchooser.rpc.register = function(serviceName,
    handler) {
  window.accountchooser.param.notEmpty(serviceName,
      'serviceName');
  window.accountchooser.param.notNull(handler, 'handler');
  window.accountchooser.rpc.services_[serviceName] = handler;
};

/**
 * Calls an RPC service registered in another window.
 * @param {Window} targetWindow The target window object.
 * @param {window.accountchooser.rpc.Request} request
 *     The request to send. When target window receive the request, it will
 *     invoke the service whose name is same as the method name of the request.
 * @param {string} opt_domain The domain of the target window.
 */
window.accountchooser.rpc.call = function(targetWindow,
    request, opt_domain) {
  window.accountchooser.param.notEmpty(targetWindow,
      'targetWindow');
  var json = request.toString();
  window.accountchooser.util.log('Send message: ' + json);
  targetWindow.postMessage(json, opt_domain || '*');
};

/**
 * Initialize the message handler for postMessage, on which RPC services are
 * based.
 * @param {function} messageHandler The message handler for postMessage.
 * @private
 */
window.accountchooser.rpc.init_ = function(messageHandler) {
  if (window.addEventListener) {
    window.addEventListener('message', messageHandler, false);
  } else if (window.attachEvent) {
    window.attachEvent('onmessage', messageHandler);
  } else if (window.document.attachEvent) {
    window.document.attachEvent('onmessage', messageHandler);
  } else {
    window.accountchooser.util.log(
        'Register handler for postMessage failed.');
  }
};


/**
 * The status of the CDS client.
 * @private
 */
window.accountchooser.rpc.client_ = {
  popupMode: false,
  popupWindow: null,
  domain: window.location.host,
  cdsDomain: null,
  iframe: null,
  iframeLoaded: false,
  cdsReady: false,
  queue: []
};

/**
 * Sets the popup mode.
 * @param {boolean} popupMode The value for popup mode.
 */
window.accountchooser.rpc.setPopupMode = function(popupMode) {
  window.accountchooser.rpc.client_.popupMode = popupMode;
};

/**
 * Gets the popup mode.
 * @return {boolean} The value for popup mode.
 */
window.accountchooser.rpc.getPopupMode = function() {
  return window.accountchooser.rpc.client_.popupMode;
};

/**
 * Sets the popup window.
 * @param {Window} popupWindow The value for popup window.
 */
window.accountchooser.rpc.setPopupWindow =
    function(popupWindow) {
  window.accountchooser.rpc.client_.popupWindow = popupWindow;
};

/**
 * Gets the popup window.
 * @return {Window} The value for popup window.
 */
window.accountchooser.rpc.getPopupWindow = function() {
  return window.accountchooser.rpc.client_.popupWindow;
};

/**
 * Gets the host (domain:port) string for current client.
 * @return {string} the domain as a string.
 * @private
 */
window.accountchooser.rpc.getCurrentDomain_ = function() {
  return window.accountchooser.rpc.client_.domain;
};

/**
 * Handler for postMessage event.
 * @param {EventObject} e the message event object.
 * @private
 */
window.accountchooser.rpc.process_ = function(e) {
  window.accountchooser.util.log('Received message: ' + e.data +
      ' from ' + e.origin);
  if (e.origin !== window.accountchooser.rpc.client_.cdsDomain) {
    window.accountchooser.util.log(
        'Ingore message from unrecognized domain: ' + e.origin);
    return;
  }
  var rpcObject =
      window.accountchooser.rpc.parseRpcObject(e.data);
  if (!rpcObject) {
    window.accountchooser.util.log(
        'Unrecognized rpc received: ' + e.data);
    return;
  }
  window.accountchooser.rpc.fireResponseEvent(rpcObject);
};

/**
 * Sends the RPC objects in the waiting queue. It is called when the CDS IFrame
 * is loaded (in redirect mode), or when the CdsReadyNotification is received
 * (in popup mode).
 * @param {window} targetWindow The target window to send RPC.
 * @private
 */
window.accountchooser.rpc.sendRpcInQueue_ = function(
    targetWindow) {
  var queue = window.accountchooser.rpc.client_.queue;
  if (queue && queue.length) {
    for (var i = 0; i < queue.length; i++) {
      window.accountchooser.rpc.call(targetWindow, queue[i]);
    }
    window.accountchooser.rpc.client_.queue = [];
  }
};

/**
 * Initializes the CDS IFrame.
 * @param {string} iframeUrl The URL of the CDS IFrame.
 * @private
 */
window.accountchooser.rpc.initIFrame_ = function(iframeUrl) {
  if (!window.accountchooser.rpc.client_.iframe) {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('style', 'position: absolute; width: 1px; ' +
        'height: 1px; left: -9999px;');
    iframe.setAttribute('id', 'accountchooser-iframe');
    document.body.appendChild(iframe);
    window.accountchooser.rpc.client_.iframe = iframe;
    if (window.addEventListener) {
      iframe.addEventListener('load', window.accountchooser.
          rpc.iframeOnLoad_, false);
    } else if (window.attachEvent) {
      iframe.attachEvent('onload', window.accountchooser.rpc.
          iframeOnLoad_, false);
    } else {
      window.accountchooser.util.log(
          'Failed to add iframe onload event.');
    }
    iframe.setAttribute('src', iframeUrl);
  }
};

/**
 * OnLoad handler for CDS IFrame.
 * @private
 */
window.accountchooser.rpc.iframeOnLoad_ = function() {
  window.accountchooser.rpc.client_.iframeLoaded = true;
  if (!window.accountchooser.rpc.client_.popupMode) {
    //Sends notification to CDS IFrame to trigger saved RPCs.
    var w = window.accountchooser.rpc.client_.iframe.
        contentWindow;
    window.accountchooser.rpc.call(w,
        new window.accountchooser.rpc.ClientReadyNotification());
    window.accountchooser.rpc.sendRpcInQueue_(w);
  }
};

/**
 * Handler for CdsReadyNotification.
 * @private
 */
window.accountchooser.rpc.onCdsReady_ = function() {
  window.accountchooser.rpc.client_.cdsReady = true;
  if (window.accountchooser.rpc.client_.popupMode) {
    window.accountchooser.rpc.sendRpcInQueue_(
        window.accountchooser.rpc.client_.popupWindow);
  }
};

/**
 * Initializes the CDS client with given configuration parameters. See
 * below sample for options:
 * <pre>
 * {
 *   popupMode: true/false,  //default is false, that is, redirect mode.
 *   popupWindow: popup,     // popup window object. Used in popup mode.
 *   iframeUrl:  '',         // Used in redirect mode.
 *   cdsDomain:  ''          // The domain of CDS.
 * }
 * </pre>
 * @param {Object} options configuration parameters of the CDS client.
 */
window.accountchooser.rpc.initClient = function(options) {
  if (options.popupMode) {
    window.accountchooser.rpc.setPopupMode(options.popupMode);
  }
  if (options.popupWindow) {
    window.accountchooser.rpc.setPopupWindow(
        options.popupWindow);
  }
  window.accountchooser.rpc.init_(
      window.accountchooser.rpc.process_);
  if (!window.accountchooser.rpc.client_.popupMode) {
    window.accountchooser.rpc.initIFrame_(options.iframeUrl);
  }
  window.accountchooser.rpc.client_.cdsDomain =
      options.cdsDomain;
};

/**
 * Sends an RPC object to CDS server.
 * @param {Request} request The RPC request object.
 */
window.accountchooser.rpc.callCds = function(request) {
  if (!window.accountchooser.rpc.client_.popupMode) {
    if (!window.accountchooser.rpc.client_.iframeLoaded) {
      window.accountchooser.rpc.client_.queue.push(request);
    } else {
      var targetWindow = window.accountchooser.rpc.client_.
          iframe.contentWindow;
      window.accountchooser.rpc.call(targetWindow, request);
    }
  } else {
    if (!window.accountchooser.rpc.client_.cdsReady) {
      window.accountchooser.rpc.client_.queue.push(request);
    } else {
      var targetWindow = window.accountchooser.rpc.client_.
          popupWindow;
      window.accountchooser.rpc.call(targetWindow, request);
    }
  }
};


/** Acknowledgment event: a request is received. */
window.accountchooser.rpc.EVENT_ACK = 'ack';

/** Done event: the response is returned. */
window.accountchooser.rpc.EVENT_DONE = 'done';

/** CDS Ready event */
window.accountchooser.rpc.EVENT_CDS_READY = 'cdsReady';

/** Empty response event */
window.accountchooser.rpc.EVENT_EMPTY_RESPONSE = 'emptyResponse';

/**
 * Event arrays constants for easy use.
 */
window.accountchooser.rpc.ALL_EVENTS = [
  window.accountchooser.rpc.EVENT_ACK,
  window.accountchooser.rpc.EVENT_DONE,
  window.accountchooser.rpc.EVENT_CDS_READY,
  window.accountchooser.rpc.EVENT_EMPTY_RESPONSE
];

/**
 * Event arrays constants for easy use.
 */
window.accountchooser.rpc.DONE_AND_ACK = [
  window.accountchooser.rpc.EVENT_ACK,
  window.accountchooser.rpc.EVENT_DONE
];

/**
 * All the listeners
 * @type {Array.<
 *     {listener: function, events: {Array.<string>},
 *     oneTime: {boolean}, service: {string}}
 *     >}
 * @private
 */
window.accountchooser.rpc.listeners_ = [];

/**
 * Creates suitable events array for the event filter. Listen to all events,
 * if a listener doesn't have the event filter. if a string, only allow that
 * type of event; if an string array, allow all events in the array.
 * @param {string|Array.<string>} opt_events The event or events array.
 * @return {Array.<string>} events array for the event filter.
 * @private
 */
window.accountchooser.rpc.makeEventArray_ = function(
    opt_events) {
  var events = [];
  if (!opt_events) {
    // Make a copy of ALL_EVENTS array.
    events = window.accountchooser.rpc.ALL_EVENTS.slice(0);
  } else {
    if (window.accountchooser.util.isArray(opt_events)) {
      for (var i = 0; i < opt_events.length; i++) {
        if (window.accountchooser.util.indexOf(opt_events[i],
            window.accountchooser.rpc.ALL_EVENTS) > -1) {
          events.push(opt_events[i]);
        } else {
          window.accountchooser.util.log(
              'Unrecognized event type: ' + opt_events[i]);
        }
      }
    } else if (window.accountchooser.util.indexOf(
        opt_events, window.accountchooser.rpc.ALL_EVENTS) > -1) {
      events.push(opt_events);
    } else {
      window.accountchooser.util.log(
          'Unrecognized event type: ' + opt_events);
    }
  }
  return events;
};

/**
 * Mapping from rpcObject to event types. In other words, when client receive
 * a RpcObject from server, the event type it will fire.
 * @param {RpcObject} rpcObject The RpcObject the client received from server.
 * @return {string} the event type.
 * @private
 */
window.accountchooser.rpc.getEventType_ = function(rpcObject) {
  var event = null;
  if (rpcObject instanceof
      window.accountchooser.rpc.RequestAckNotification) {
    event = window.accountchooser.rpc.EVENT_ACK;
  } else if (rpcObject instanceof
      window.accountchooser.rpc.CdsReadyNotification) {
    event = window.accountchooser.rpc.EVENT_CDS_READY;
  } else if (rpcObject instanceof
      window.accountchooser.rpc.Response) {
    event = window.accountchooser.rpc.EVENT_DONE;
  } else if (rpcObject instanceof
      window.accountchooser.rpc.EmptyResponseNotification) {
    event = window.accountchooser.rpc.EVENT_EMPTY_RESPONSE;
  }
  return event;
};

/**
 * Adds a listener with some options filters.
 * @param {function} listener The event listener.
 * @param {string|Array.<string>} opt_events The event filter. If not set,
 *     allows all events; if a string, only allow that type of event;
 *     if an string array, allow all events in the array.
 * @param {boolean} opt_oneTime If true, remove the listener immediately it is
 *     invoked the very first time.
 * @param {string} opt_service The service filter. If set, only invoked when
 *     the method of the response is same to the service set.
 */
window.accountchooser.rpc.addResponseListener = function(
    listener, opt_events, opt_oneTime, opt_service) {
  var events = window.accountchooser.rpc.makeEventArray_(
      opt_events);
  var l = {
    listener: listener,
    events: events,
    oneTime: !!opt_oneTime,
    service: opt_service
  };
  window.accountchooser.rpc.listeners_.push(l);
};

/**
 * Removes a listener.
 * @param {function} listener The listener to be removed.
 */
window.accountchooser.rpc.removeResponseListener = function(
    listener) {
  var i = 0;
  while (i < window.accountchooser.rpc.listeners_.length) {
    if (window.accountchooser.rpc.listeners_[i].listener ==
      listener) {
      window.accountchooser.rpc.listeners_.splice(i, 1);
    } else {
      i++;
    }
  }
};

/**
 * Removes all the listeners.
 */
window.accountchooser.rpc.clearResponseListeners = function() {
  window.accountchooser.rpc.listeners_ = [];
};

/**
 * Fires event to listeners.
 * @param {RpcObject} rpcObject The RpcObject the client received from server.
 */
window.accountchooser.rpc.fireResponseEvent = function(
    rpcObject) {
  var event = window.accountchooser.rpc.getEventType_(rpcObject);
  if (!event) {
    return;
  }
  var i = 0;
  while (i < window.accountchooser.rpc.listeners_.length) {
    var listener = window.accountchooser.rpc.listeners_[i];
    if (window.accountchooser.util.indexOf(event,
        listener.events) < 0) {
      i++;
      continue;
    }
    if (listener.service) {
      if (rpcObject instanceof
          window.accountchooser.rpc.RequestAckNotification &&
          rpcObject.getRequestId() != listener.service) {
        i++;
        continue;
      } else if (rpcObject instanceof
          window.accountchooser.rpc.Response &&
          rpcObject.getId() != listener.service) {
        i++;
        continue;
      }
    }
    listener.listener(rpcObject);
    if (listener.oneTime) {
      window.accountchooser.rpc.listeners_.splice(i, 1);
    } else {
      i++;
    }
  }
};


/**
 * @class CdsClient is a wrapper for CDS client.
 * @param {Object} config The configuration of the client.
 * @constructor
 */
window.accountchooser.CdsClient = function(config) {
  // Check if the browser is supported or not.
  window.accountchooser.util.checkSNISupported();
  window.accountchooser.param.notEmpty(config, 'config');
  // Merge customized client configuration with the default.
  config = window.accountchooser.util.extend(true, {},
      window.accountchooser.CdsClient.DEFAULT_CDS_CLIENT_CONFIG_,
      config);
  // Build the absolute URLs for CDS server.
  var cdsServer = config.cdsServer;
  cdsServer.iframe = cdsServer.domain + cdsServer.iframe;
  cdsServer.popup = cdsServer.domain + cdsServer.popup;
  cdsServer.redirect = cdsServer.domain + cdsServer.redirect;
  this.config_ = config;
  this.cdsOptions_ = {
    clientCallbackUrl: this.config_.clientCallbackUrl,
    positiveCallbackUrl: this.config_.positiveCallbackUrl,
    negativeCallbackUrl: this.config_.negativeCallbackUrl,
    keepPopup: !!this.config_.keepPopup,
    showAll: !!this.config_.showAll,
    idpFilter: this.config_.idpFilter,
    language: this.config_.language,
    ui: this.config_.ui
  };
};

/**
 * Default CDS configuration
 * @private
 */
window.accountchooser.CdsClient.DEFAULT_CDS_CLIENT_CONFIG_ = {
  cdsServer: {
    domain: window.accountchooser.rpc.DEFAULT_CDS_DOMAIN,
    iframe: window.accountchooser.rpc.DEFAULT_CDS_IFRAME_PATH,
    popup: window.accountchooser.rpc.DEFAULT_CDS_POPUP_PATH,
    redirect: window.accountchooser.rpc.DEFAULT_CDS_REDIRECT_PATH
  },
  popupWidth: window.accountchooser.rpc.DEFAULT_POPUP_WIDTH,
  popupHeight: window.accountchooser.rpc.DEFAULT_POPUP_HEIGHT,
  clientCallbackUrl: window.location.href
};

/**
 * Constructs a CdsClient, and initializes it before return.
 * @param {Object} config The configuration of the client.
 * <pre>
 * {
 *   popupMode: true/false,  // Default is false, that is, redirect mode.
 *   popupWindow: popup,     // Popup window object. Used in popup mode.
 *   cdsServer: {            // Optional CDS server config.
 *     domain: '',           // CDS domain.
 *     iframe: '',           // Path for iframe page. e.g., '/iframe.html'
 *     popup: '',            // Path for popup page. e.g., '/popup.html'
 *     redirect: ''          // Path for redirect page. e.g., '/redirect.html'
 *   },
 *   popupWidth: '',         // Width of the popup window. Used in popup mode.
 *   popupHeight: '',        // Height of the popup window. Used in popup mode.
 *   clientCallbackUrl: '',  // Address returned from CDS. Used in redirect
 *                           // mode. Default is the current page Url.
 *   positiveCallbackUrl: '',// If specified and user performs positive action,
 *                           // such as confirm adding/updating account, this
 *                           // one is used instead of clientCallbackUrl and no
 *                           // need to read the response from HTML5 storage.
 *   negativeCallbackUrl: '',// If specified and user performs negative action,
 *                           // such as cancel adding/updating account, this
 *                           // one is used instead of clientCallbackUrl and no
 *                           // need to read the response from HTML5 storage.
 *   keepPopup: true/false,  // Used in popup mode. Default is false, that is,
 *                           // the popup window will be closed automatically.
 *   showAll: true/false,    // Default is false, that is, CDS will only show
 *                           // accounts with an email.
 *   idpFilter: [],          // IDPs list. If it is undefined/null, then
 *                           // accounts with any IDP are shown.
 *   callbacks: {},          // A set of callback functions, e.g.,
 *                           // {store: storeCallback, select: selectCallback}
 *   ui: {                   // Customized UI settings.
 *     favicon: '',          // URL of the favicon.
 *     title: '',            // The window title.
 *     header: '',           // URL of the header HTML.
 *     main: {
 *       url: '',            // URL of the main HTML.
 *       method: 'cajole'/'sanitize'  // Methods to process the main HTML.
 *       enableOnMobile: true/false // Shows the main part on mobile device.
 *     },
 *     footer: ''            // URL of the footer HTML.
 *   }
 * }
 * ...
 * </pre>
 * @return {CdsClient} The created CdsClient object.
 */
window.accountchooser.CdsClient.init = function(config) {
  var wrapper = new window.accountchooser.CdsClient(config);
  wrapper.init();
  return wrapper;
};

/**
 * Initializes the CdsClient object with the configuration. In full page
 * redirect mode the returned service result will be checked, and invoked if
 * any.
 * @return {CdsClient} The CdsClient itself.
 */
window.accountchooser.CdsClient.prototype.init = function() {
  if (this.config_.popupMode) {
    window.accountchooser.rpc.addResponseListener(
        window.accountchooser.rpc.onCdsReady_,
        window.accountchooser.rpc.EVENT_CDS_READY);
  }
  this.registerListeners_(this.config_.oneTimeCallbacks, true);
  this.registerListeners_(this.config_.callbacks, false);
  window.accountchooser.rpc.initClient({
    popupMode: this.config_.popupMode,
    popupWindow: this.config_.popupWindow,
    iframeUrl: this.config_.cdsServer.iframe,
    cdsDomain: this.config_.cdsServer.domain
  });
  return this;
};

/**
 * Sets the popup window used by CdsClient.
 * @param {Window} popupWindow The popup window object.
 */
window.accountchooser.CdsClient.prototype.setPopupWindow =
    function(popupWindow) {
  window.accountchooser.rpc.setPopupWindow(popupWindow);
};

/**
 * Gets the popup window used by CdsClient.
 * @return {Window} popupWindow The popup window object.
 */
window.accountchooser.CdsClient.prototype.getPopupWindow =
    function() {
  return window.accountchooser.rpc.getPopupWindow();
};

/**
 * Closes the popup window if it is not closed already.
 */
window.accountchooser.CdsClient.prototype.closePopupWindow =
    function() {
  this.config_.popupWindow = null;
  if (window.accountchooser.rpc.client_.popupWindow) {
    if (!window.accountchooser.rpc.client_.popupWindow.closed) {
      window.accountchooser.rpc.client_.popupWindow.close();
    }
    window.accountchooser.rpc.client_.popupWindow = null;
  }
};

/**
 * Changes the popup mode after CdsClient has initialized.
 * @param {boolean} popupMode The new popupMode value.
 */
window.accountchooser.CdsClient.prototype.changePopupModeTo =
    function(popupMode) {
  if (this.config_.popupMode == popupMode) {
    return;
  }
  var oldPopupMode = this.config_.popupMode;
  this.config_.popupMode = popupMode;
  if (oldPopupMode) {
    window.accountchooser.rpc.removeResponseListener(
        window.accountchooser.rpc.onCdsReady_);
  } else {
    window.accountchooser.rpc.addResponseListener(
        window.accountchooser.rpc.onCdsReady_,
        window.accountchooser.rpc.EVENT_CDS_READY);
  }
  window.accountchooser.rpc.setPopupMode(popupMode);
};

/**
 * Adds listeners.
 * @param {Object} callbacks The listeners object, with the property name is
 *     the method name of the Response; and the property value is the callback
 *     function.
 * @param {boolean} oneTime Whether the callbacks are one time.
 * @private
 */
window.accountchooser.CdsClient.prototype.registerListeners_ =
    function(callbacks, oneTime) {
  if (callbacks) {
    for (var service in callbacks) {
      var callback = callbacks[service];
      if (callback) {
        window.accountchooser.param.notEmptyFunction(callback,
            (oneTime ? 'oneTimeCallbacks.' : 'callbacks.') + service);
        var event;
        if (service ==
            window.accountchooser.rpc.EMPTY_RESPONSE_CALLBACK) {
          event =
              window.accountchooser.rpc.EVENT_EMPTY_RESPONSE;
        } else {
          event = window.accountchooser.rpc.EVENT_DONE;
        }
        var cb = this.wrapCallback_(callback);
        window.accountchooser.rpc.addResponseListener(cb, event,
            oneTime, service);
      }
    }
  }
};

/**
 * Opens a popup window, and render the CDS page in it.
 * @return {window} The created popup window object.
 * @private
 */
window.accountchooser.CdsClient.prototype.openPopupWindow_ =
    function() {
  window.accountchooser.rpc.client_.cdsReady = false;
  var popupWindow =
      window.accountchooser.rpc.client_.popupWindow;
  if (!popupWindow || popupWindow.closed) {
    popupWindow = window.accountchooser.util.showPopup(
        this.config_.popupWidth, this.config_.popupHeight,
        this.config_.cdsServer.popup);
  } else {
    popupWindow.focus();
    popupWindow.window.location.href = this.config_.cdsServer.popup;
  }
  window.accountchooser.rpc.client_.popupWindow = popupWindow;
  return popupWindow;
};

/**
 * Makes preparation for the RPC call. If in popup mode, make sure the popup
 * window is shown. If in redirect mode, registers a listener so that the page
 * is redirected after the request is saved.
 * @param {string} requestId The id of the request to be sent.
 * @private
 */
window.accountchooser.CdsClient.prototype.prepareCall_ =
    function(requestId) {
  if (this.config_.popupMode) {
    this.openPopupWindow_();
  } else {
    var url = this.config_.cdsServer.redirect;
    url += '#' + window.accountchooser.rpc.getCurrentDomain_();
    var goToCds = function() {
      window.location.href = url;
    };
    window.accountchooser.rpc.addResponseListener(goToCds,
        window.accountchooser.rpc.EVENT_ACK, true, requestId);
  }
};

/**
 * Creates a wrapper callback which translates the Response into a pair of
 * result and error so that the caller would not be aware of the underlying
 * Response object.
 * @param {function(Object=, Object=)} callback The real callback function
 *     provieded by the caller.
 * @return {function(window.accountchooser.rpc.RpcObject)}
 *     the callback wrapper.
 * @private
 */
window.accountchooser.CdsClient.prototype.wrapCallback_ =
    function(callback) {
  var cb = function(response) {
    if (response instanceof window.accountchooser.rpc.Response) {
      callback(response.getResult(), response.getError());
    } else {
      // In case the RpcObject is not a Response, i.e., the
      // EmptyResponseNotification, there's no result and error to return. we
      // should discard it so that the caller won't be aware of our underlying
      // RPC communcation.
      callback();
    }
  };
  return cb;
};

/**
 * Creates a function as the callback of the look-ahead checking. The callback
 * will be called when the look-ahead checking is done. If the checking result
 * meets the critiria, the original request is discarded and the result provided
 * is returned immediately. Otherwise the request is sent as usual.
 * @param {window.accountchooser.rpc.Request} request
 *     The original request.
 * @param {boolean|function(boolean): boolean} bypassOn Indicates whether to
 *     bypass the request or not.
 * @param {*} bypassResult The result sent when bypassing.
 * @return {function(boolean, Object)} the callback for the look-ahead query.
 * @private
 */
window.accountchooser.CdsClient.prototype.
    createLookAheadQueryCallback_ = function(request, bypassOn, bypassResult) {
  var self = this;
  var callback = function(result, error) {
    var bypass = typeof bypassOn === 'function' ? bypassOn(result) : !!bypassOn;
    if (!error && bypass) {
      window.accountchooser.rpc.fireResponseEvent(
          new window.accountchooser.rpc.Response(
              request.getId(), bypassResult));
    } else {
      self.callCds_(request);
    }
  };
  return callback;
};

/**
 * Actually sends the request to the CDS.
 * @param {window.accountchooser.rpc.Request} request
 *     The original request.
 * @private
 */
window.accountchooser.CdsClient.prototype.callCds_ = function(
    request) {
  this.prepareCall_(request.getId());
  window.accountchooser.rpc.callCds(request);
};

/**
 * Starts the store service on CDS.
 * @param {Object} account The account to store.
 * @param {Array.<Object>} localAccounts The local accounts list, which can be
 *     shown to end user for selection.
 * @param {Object=} opt_cdsOptions Optional options for CDS. These options will
 *     be merged with global ones (set by CdsClient.init(config)) and passed to
 *     CDS. These are one-time and won't change global options. Options
 *     supported are listed as below:
 * <pre>
 * {
 *   clientCallbackUrl: '',  // Address returned from CDS.
 *   positiveCallbackUrl: '',// If specified and user performs positive action,
 *                           // this is used instead of clientCallbackUrl.
 *   negativeCallbackUrl: '',// If specified and user performs negative action,
 *                           // this is used instead of clientCallbackUrl.
 *   keepPopup: true/false,  // Whether to keep the popup window or not.
 * }
 * ...
 * </pre>
 */
window.accountchooser.CdsClient.prototype.store = function(
    account, localAccounts, opt_cdsOptions) {
  window.accountchooser.param.notEmpty(account, 'account');

  var service = 'store';
  var options = opt_cdsOptions ?
      window.accountchooser.util.extend(false, {},
          this.cdsOptions_, opt_cdsOptions) :
      this.cdsOptions_;
  var store = new window.accountchooser.rpc.StoreRequest(
      service, account, localAccounts, options);
  this.callCds_(store);
};

/**
 * Starts the select service on CDS.
 * @param {Array.<Object>} localAccounts The local accounts list, which can be
 *     shown to end user for selection.
 * @param {Object=} opt_cdsOptions Optional options for CDS. These options will
 *     be merged with global ones (set by CdsClient.init(config)) and passed to
 *     CDS. These are one-time and won't change global options. Options
 *     supported are listed as below:
 * <pre>
 * {
 *   clientCallbackUrl: '',  // Address returned from CDS.
 *   keepPopup: true/false,  // Whether to keep the popup window or not.
 *   showAll: true/false,    // Whether to show accounts without an email.
 *   idpFilter: [],          // IDPs list.
 * }
 * ...
 * </pre>
 */
window.accountchooser.CdsClient.prototype.select = function(
    localAccounts, opt_cdsOptions) {
  var service = 'select';
  var options = opt_cdsOptions ?
      window.accountchooser.util.extend(false, {},
          this.cdsOptions_, opt_cdsOptions) :
      this.cdsOptions_;
  var select = new window.accountchooser.rpc.SelectRequest(
      service, localAccounts, options);
  this.callCds_(select);
};

/**
 * Starts the update service on CDS.
 * @param {Object} account The account to store.
 * @param {Object=} opt_cdsOptions Optional options for CDS. These options will
 *     be merged with global ones (set by CdsClient.init(config)) and passed to
 *     CDS. These are one-time and won't change global options. Options
 *     supported are listed as below:
 * <pre>
 * {
 *   clientCallbackUrl: '',  // Address returned from CDS.
 *   positiveCallbackUrl: '',// If specified and user performs positive action,
 *                           // this is used instead of clientCallbackUrl.
 *   negativeCallbackUrl: '',// If specified and user performs negative action,
 *                           // this is used instead of clientCallbackUrl.
 *   keepPopup: true/false,  // Whether to keep the popup window or not.
 * }
 * ...
 * </pre>
 */
window.accountchooser.CdsClient.prototype.update = function(
    account, opt_cdsOptions) {
  window.accountchooser.param.notEmpty(account, 'account');

  var service = 'update';
  var options = opt_cdsOptions ?
      window.accountchooser.util.extend(false, {},
          this.cdsOptions_, opt_cdsOptions) :
      this.cdsOptions_;
  var update = new window.accountchooser.rpc.UpdateRequest(
      service, account, options);
  this.callCds_(update);
};

/**
 * Sends the query to CDS to get the result.
 * @param {string} query The query sent to CDS.
 * @param {Object} account the account associated with this query.
 * @param {functio(window.accountchooser.rpc.Response)} callback
 *     The callback function which is called to pass the result response.
 * @param {Object=} opt_cdsOptions Optional options for CDS. These options will
 *     be merged with global ones (set by CdsClient.init(config)) and passed to
 *     CDS. These are one-time and won't change global options. Options
 *     supported are listed as below:
 * <pre>
 * {
 *   showAll: true/false,    // Whether to show accounts without an email.
 *   idpFilter: [],          // IDPs list.
 * }
 * ...
 * </pre>
 * @private
 */
window.accountchooser.CdsClient.prototype.query_ = function(
    query, account, callback, opt_cdsOptions) {
  window.accountchooser.param.notEmptyFunction(callback,
      'callback');
  // iframe is not used in popup mode so there's no way to inquiry.
  if (this.config_.popupMode) {
    var error = {
      code: -32601,
      message: 'Method not found',
      data: 'Query request is not supported in popup mode.'
    };
    callback(undefined, error);
    return;
  }
  var service = 'query_' + query + '_' + new Date().getTime();
  var cb = this.wrapCallback_(callback);
  window.accountchooser.rpc.addResponseListener(cb,
      window.accountchooser.rpc.EVENT_DONE, true, service);
  var options = opt_cdsOptions ?
      window.accountchooser.util.extend(false, {},
          this.cdsOptions_, opt_cdsOptions) :
      this.cdsOptions_;
  var request = new window.accountchooser.rpc.QueryRequest(
      service, query, account, options);
  window.accountchooser.rpc.callCds(request);
};

/**
 * Checks whether the CDS is disabled or not.
 * @param {function(boolean, Object)} callback The callback function which is
 *     called to pass the result or error. The first parameter is the checking
 *     result and the second is the error if it occurs.
 */
window.accountchooser.CdsClient.prototype.checkCdsDisabled =
    function(callback) {
  this.query_(window.accountchooser.rpc.Queries.CDS_DISABLED,
      null, callback);
};

/**
 * Checks whether the CDS is empty.
 * @param {function(boolean, Object)} callback The callback function which is
 *     called to pass the result or error. The first parameter is the checking
 *     result and the second is the error if it occurs.
 * @param {Object=} opt_cdsOptions Optional options for CDS. These options will
 *     be merged with global ones (set by CdsClient.init(config)) and passed to
 *     CDS. These are one-time and won't change global options. Options
 *     supported are listed as below:
 * <pre>
 * {
 *   showAll: true/false,    // Whether to show accounts without an email.
 *   idpFilter: [],          // IDPs list.
 * }
 * ...
 * </pre>
 */
window.accountchooser.CdsClient.prototype.checkCdsEmpty =
    function(callback, opt_cdsOptions) {
  this.query_(window.accountchooser.rpc.Queries.CDS_EMPTY, null,
      callback, opt_cdsOptions);
};

/**
 * Checks whether the CDS has this account in its storage.
 * @param {Object} account the account associated with this query.
 * @param {function(boolean, Object)} callback The callback function which is
 *     called to pass the result or error. The first parameter is the checking
 *     result and the second is the error if it occurs.
 * @param {Object=} opt_cdsOptions Optional options for CDS. These options will
 *     be merged with global ones (set by CdsClient.init(config)) and passed to
 *     CDS. These are one-time and won't change global options. Options
 *     supported are listed as below:
 * <pre>
 * {
 *   showAll: true/false,    // Whether to show accounts without an email.
 *   idpFilter: [],          // IDPs list.
 * }
 * ...
 * </pre>
 */
window.accountchooser.CdsClient.prototype.checkAccountExist =
    function(account, callback, opt_cdsOptions) {
  this.query_(window.accountchooser.rpc.Queries.ACCOUNT_EXIST,
      account, callback, opt_cdsOptions);
};

