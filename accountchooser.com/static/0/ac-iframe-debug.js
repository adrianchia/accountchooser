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

/**
 * Enums for valid property keys of an account.
 * @enum {string}
 */
window.accountchooser.util.AccountPropertyKey = {
  EMAIL: 'email',
  DISPLAY_NAME: 'displayName',
  PHOTO_URL: 'photoUrl',
  PROVIDER_ID: 'providerId'
};

/**
 * Sanitizes account info so that only the valid key/value pairs are kept.
 * @param {Object} account The account to be sanitized.
 * @param {boolean=} opt_silent Whether silently discard invalid key/values or
 *     throw an error.
 * @return {Object} The sanitized account.
 */
window.accountchooser.util.sanitizeAccount = function(account,
    opt_silent) {
  var result = {};
  var AccountPropertyKey =
      window.accountchooser.util.AccountPropertyKey;
  for (var key in account) {
    switch (key) {
      case AccountPropertyKey.EMAIL:
      case AccountPropertyKey.DISPLAY_NAME:
      case AccountPropertyKey.PHOTO_URL:
      case AccountPropertyKey.PROVIDER_ID:
        result[key] = account[key];
        break;
      default:
        if (!opt_silent) {
          throw 'Unrecognized key "' + key + '" for account';
        }
    }
  }
  return result;
};

/**
 * Sanitizes a list of accounts.
 * @param {Array.<Object>} accounts The accounts to be sanitized.
 * @param {boolean=} opt_silent Whether silently discard invalid key/values or
 *     throw an error.
 * @return {Array.<Object>} The sanitized accounts.
 */
window.accountchooser.util.sanitizeAccounts = function(accounts,
    opt_silent) {
  var result = [];
  for (var i = 0, length = accounts.length; i < length; i++) {
    var account =
        window.accountchooser.util.sanitizeAccount(accounts[i]);
    result.push(account);
  }
  return result;
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
 * The regular expression for a vaild email address.
 * @type {RegExp}
 * @private
 */
window.accountchooser.util.VALID_EMAIL_REGEX_ =
    /^[a-z0-9]+(\.?[-+\w]+)*@([a-z0-9]([-a-z0-9]*[a-z0-9])?\.)+[a-z0-9]+$/i;

/**
 * The regular expression for a vaild domain.
 * @type {RegExp}
 * @private
 */
window.accountchooser.util.VALID_DOMAIN_REGEX_ =
    /^([a-z0-9]([-a-z0-9]*[a-z0-9])?\.)+[a-z0-9]+$/i;

/**
 * Checks if the given parameter is a valid email address format.
 * @param {string} email The input email to be checked.
 * @return {boolean} True if the email format is valid.
 */
window.accountchooser.util.isValidEmail = function(email) {
  return email && (null !=
    window.accountchooser.util.VALID_EMAIL_REGEX_.exec(email));
};

/**
 * Checks if the given parameter is a valid email domain format. For email
 * domain, port number is not allowed.
 * TODO(guibinkong): Should rename to isValidEmailDomain().
 * @param {string} domain The input email to be checked.
 * @return {boolean} True if the domain format is valid.
 */
window.accountchooser.util.isValidDomain = function(domain) {
  return domain && (null !=
    window.accountchooser.util.VALID_DOMAIN_REGEX_.exec(domain));
};

/**
 * Returns the domain part of an email in lower case.
 * @param {string} email The email to be parsed.
 * @return {string} The domain of the email parameter.
 */
window.accountchooser.util.getEmailDomain = function(email) {
  email = window.accountchooser.util.trim(email);
  if (email && window.accountchooser.util.isValidEmail(email)) {
    return email.split('@')[1].toLowerCase();
  }
};

/**
 * Returns the user name part of an email in lower case.
 * @param {string} email The email to be parsed.
 * @return {string} The user name of the email parameter.
 */
window.accountchooser.util.getEmailUsername = function(email) {
  email = window.accountchooser.util.trim(email);
  if (email && window.accountchooser.util.isValidEmail(email)) {
    return email.split('@')[0].toLowerCase();
  }
};

/**
 * Returns the IDP name for a domain if it is in NASCAR list.
 * @param {string} domain The domain to be checked.
 * @return {string} The IDP id, or <code>undefined</code> if not found.
 */
window.accountchooser.util.isDomainInNascar = function(domain) {
  if (domain) {
    var idps = window.accountchooser.config.idps;
    for (var idpId in idps) {
      var idp = idps[idpId];
      if (idp && (idp.domain == domain)) {
        return idpId;
      }
    }
  }
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
 * Name space for chooser storage.
 */
window.accountchooser.util.accountstorage = {};

/**
 * The key for cached users in the local storage.
 * @type {string}
 * @const
 * @private
 */
window.accountchooser.util.accountstorage.ACCOUNTS_ =
    'chooserAccounts';

/**
 * The Cookie name for cached users.
 * @type {string}
 * @const
 * @private
 */
window.accountchooser.util.accountstorage.AC_COOKIE_NAME_ =
    '__goog__ac__';

/**
 * The underlying storage instance.
 * @private
 */
window.accountchooser.util.accountstorage.storage_ =
    new window.accountchooser.util.Storage(
        window.accountchooser.util.accountstorage.ACCOUNTS_,
        window.accountchooser.util.accountstorage.
        AC_COOKIE_NAME_);

/**
 * Reads account entries from storage.
 * @return {Array.<Object>} An array of account entries objects.
 * @private
 */
window.accountchooser.util.accountstorage.read_ =
    function() {
  var savedAccounts =
      window.accountchooser.util.accountstorage.storage_.read();
  window.accountchooser.util.log(
      'Read saved accounts from storage: ' + JSON.stringify(savedAccounts));
  return savedAccounts;
};

/**
 * Writes account entries to storage.
 * @param {Array.<Object>} accounts The array of account entries objects.
 * @private
 */
window.accountchooser.util.accountstorage.write_ =
    function(accounts) {
  window.accountchooser.util.log(
      'Save accounts to storage: ' + JSON.stringify(accounts));
  window.accountchooser.util.accountstorage.storage_.write(
      accounts);
};

/**
 * Reads the saved account entries from underling storage.
 * @return {Array.<Object>} The saved account entries.
 */
window.accountchooser.util.accountstorage.readAccounts =
    function() {
  var accounts =
      window.accountchooser.util.accountstorage.read_();
  if (!accounts ||
      !window.accountchooser.util.isArray(accounts)) {
    accounts = [];
  }
  return accounts;
};

/**
 * Saves an account entry to the underling storage. If the email of target
 * account exists in the saved entries, will move that entry to the first, and
 * update corresponding attributes.
 * @param {Object} account The account object to be saved.
 * @return {boolean} Returns false if the account already exists, or is not
 *     saved.
 */
window.accountchooser.util.accountstorage.addAccount =
    function(account) {
  if (!account || !account.email) {
    return false;
  }
  var found = false;
  var accounts =
      window.accountchooser.util.accountstorage.readAccounts();
  var oldAccount;
  for (var i = 0; i < accounts.length; i++) {
    if (window.accountchooser.util.accountstorage.
        matchAccount_(accounts[i], account.email, account.providerId)) {
      oldAccount = accounts[i];
      accounts.splice(i, 1);
      found = true;
      break;
    }
  }
  if (oldAccount) {
    if (!account.displayName && oldAccount.displayName) {
      account.displayName = oldAccount.displayName;
    }
    if (!account.photoUrl && oldAccount.photoUrl) {
      account.photoUrl = oldAccount.photoUrl;
    }
  }
  accounts.unshift(account);
  window.accountchooser.util.accountstorage.write_(accounts);
  return !found;
};

/**
 * Removes an account entry from the underling storage.
 * @param {Object} account The account object to be removed.
 * @return {boolean} Returns true if the account is removed successfully.
 */
window.accountchooser.util.accountstorage.removeAccount =
    function(account) {
  if (!account || !account.email) {
    return false;
  }
  var found = false;
  var accounts =
      window.accountchooser.util.accountstorage.readAccounts();
  for (var i = 0; i < accounts.length; i++) {
    if (window.accountchooser.util.accountstorage.
         matchAccount_(accounts[i], account.email, account.providerId)) {
      accounts.splice(i, 1);
      found = true;
      break;
    }
  }
  window.accountchooser.util.accountstorage.write_(accounts);
  return found;
};

/**
 * Removes all account entries in underling storage.
 */
window.accountchooser.util.accountstorage.clearAccounts =
    function() {
  window.accountchooser.util.accountstorage.storage_.clear();
};

/**
 * Updates an account entry in underling storage. This method will find the
 * account entry, then trigger the callback function if found, then save the
 * updated entry.
 * @param {string} email The email for the entry to be updated.
 * @param {function(!Object)} func The callback function to update the entry.
 * @param {string=} opt_providerId The provider ID of this account.
 */
window.accountchooser.util.accountstorage.updateAccount =
    function(email, func, opt_providerId) {
  if (!email) {
    return;
  }
  var accounts =
    window.accountchooser.util.accountstorage.readAccounts();
  for (var i = 0; i < accounts.length; i++) {
    if (window.accountchooser.util.accountstorage.
          matchAccount_(accounts[i], email, opt_providerId)) {
      var account = accounts[i];
      func(account);
      window.accountchooser.util.accountstorage.write_(accounts);
      break;
    }
  }
};

/**
 * Refreshes the attribute values of the account entry in underling storage. If
 * no matching email found, the method WON'T add a new entry.
 * @param {Object} newProfile The new account information.
 */
window.accountchooser.util.accountstorage.refreshAccount =
    function(newProfile) {
  if (!newProfile || !newProfile.email) {
    return;
  }
  var refresh = function(account) {
    if (newProfile.displayName) {
      account.displayName = newProfile.displayName;
    }
    if (newProfile.photoUrl) {
      account.photoUrl = newProfile.photoUrl;
    }
    if (newProfile.legacy != undefined) {
      account.legacy = newProfile.legacy;
    }
  };
  window.accountchooser.util.accountstorage.updateAccount(
      newProfile.email, refresh, newProfile.providerId);
};

/**
 * Fetches an account entry in underling storage.
 * @param {string} email The email of the account.
 * @param {string=} opt_providerId The provider ID of this account.
 * @return {(Object|undefined)} The account entry, or {@code undefined} if not
 *     found.
 */
window.accountchooser.util.accountstorage.fetchAccount =
    function(email, opt_providerId) {
  if (email) {
    var accounts =
      window.accountchooser.util.accountstorage.readAccounts();
    for (var i = 0; i < accounts.length; i++) {
      if (window.accountchooser.util.accountstorage.
          matchAccount_(accounts[i], email, opt_providerId)) {
        var account = accounts[i];
        accounts.splice(i, 1);
        accounts.unshift(account);
        window.accountchooser.util.accountstorage.write_(
            accounts);
        return account;
      }
    }
  }
};

/**
 * Checks whether an account entry matches the <email, providerId>.
 * @param {Object} account The account object in the storage.
 * @param {string} email The email to be found.
 * @param {string|undefined} opt_providerId The providerId to be found.
 * @return {boolean} true if both email and providerId match.
 * @private
 */
window.accountchooser.util.accountstorage.matchAccount_ =
    function(account, email, opt_providerId) {
  if (account.email != email) {
    return false;
  }
  if (account.providerId && opt_providerId &&
      account.providerId == opt_providerId) {
    return true;
  }
  if (!account.providerId && !opt_providerId) {
    return true;
  }
  return false;
};

/**
 * Updates an account entry in underling storage. This method will find the
 * account entry, then triggers the callback function if found, then save the
 * updated entry.
 * @param {function(!Object)} account The new account information.
 */
window.accountchooser.updateSavedAccount = function(account) {
  window.accountchooser.util.accountstorage.addAccount(account);
};

/**
 * Removes an account entry from the underling storage.
 * @param {Object} account The account object to be removed.
 * @return {boolean} Returns true if an exist account is removed successfully.
 *     Returns false if no change to underling storage.
 */
window.accountchooser.removeSavedAccount = function(account) {
  return window.accountchooser.util.accountstorage.removeAccount(
      account);
};

/**
 * Removes all account entries in underling storage.
 */
window.accountchooser.clearSavedAccounts = function() {
  window.accountchooser.util.accountstorage.clearAccounts();
};


/**
 * The key for cached users in the local storage.
 * @type {string}
 * @const
 * @private
 */
window.accountchooser.util.accountstorage.ACCOUNTS_ =
    'chooserAccounts';

/**
 * The underlying storage instance.
 * @private
 */
window.accountchooser.util.accountstorage.storage_ =
    new window.accountchooser.util.Storage(
        window.accountchooser.util.accountstorage.ACCOUNTS_);

/**
 * The special provider ID for accounts without a providerId field.
 * @private
 * @const
 */
window.accountchooser.util.accountstorage.NO_IDP_ = 'NO_IDP';

/**
 * Reads the saved account entries from underling storage and returns the
 * filtered result.
 * @param {?Object=} opt_Filter Optional filter object.
 * <pre>
 * {
 *   withEmail: true/false,  // Show email account only. Default is false.
 *   idpList: [],            // IDPs whitelist.
 *   emailDomainList: [],    // Email Domain whitelist.
 * }
 * ...
 * </pre>
 * @return {Array.<Object>} The filtered account entries.
 */
window.accountchooser.util.accountstorage.readAccounts =
    function(opt_Filter) {
  var accounts =
      window.accountchooser.util.accountstorage.read_();
  if (!accounts ||
      !window.accountchooser.util.isArray(accounts)) {
    accounts = [];
  }
  if (!opt_Filter) {
    return accounts;
  }
  var filters = [];
  if (opt_Filter.withEmail) {
    var filter = function(account) {
      return window.accountchooser.util.isValidEmail(
          account.email);
    }
    filters.push(filter);
  }
  if (opt_Filter.idpList && opt_Filter.idpList.length != 0) {
    var filter = function(account) {
      var idp = account.providerId ||
          window.accountchooser.util.accountstorage.NO_IDP_;
      return window.accountchooser.util.indexOf(idp,
          opt_Filter.idpList) >= 0;
    }
    filters.push(filter);
  }
  if (opt_Filter.emailDomainList && opt_Filter.emailDomainList.length != 0) {
    var filter = function(account) {
      var domain = window.accountchooser.util.getEmailDomain(
          account.email);
      if (domain) {
        return window.accountchooser.util.indexOf(domain,
            opt_Filter.emailDomainList) >= 0;
      }
      return true;
    }
    filters.push(filter);
  }
  for (var i = 0; i < filters.length; i++) {
    accounts = window.accountchooser.util.accountstorage.
        filter_(accounts, filters[i]);
  }
  return accounts;
};

/**
 * Filters accounts by the filter function.
 * @param {Array.<Object>} accounts Account entries to be filtered.
 * @param {function(Object): boolean} func Filter function.
 * @return {Array.<Object>} The filtered account entries.
 * @private
 */
window.accountchooser.util.accountstorage.filter_ = function(
    accounts, func) {
  var result = [];
  for (var i = 0; i < accounts.length; i++) {
    if (func(accounts[i])) {
      result.push(accounts[i]);
    }
  }
  return result;
};


/**
 * Name space for browser-specific configuration.
 */
window.accountchooser.util.browserconfig = {};

/**
 * The key for browser-specific configuration stored in the local storage.
 * @type {string}
 * @const
 * @private
 */
window.accountchooser.util.browserconfig.SETTINGS_KEY_ =
    'cdsSettings';

/**
 * The Cookie name for browser-specific configuration.
 * @type {string}
 * @const
 * @private
 */
window.accountchooser.util.browserconfig.COOKIE_NAME_ =
    '__cds__settings__';

/**
 * The underlying storage instance.
 * @private
 */
window.accountchooser.util.browserconfig.storage_ =
    new window.accountchooser.util.Storage(
        window.accountchooser.util.browserconfig.SETTINGS_KEY_,
        window.accountchooser.util.browserconfig.COOKIE_NAME_);

/**
 * Gets all configuration.
 * @return {Object} The configuration object.
 */
window.accountchooser.util.browserconfig.getAll = function() {
  var config = window.accountchooser.util.browserconfig.storage_.
      read() || {};
  window.accountchooser.util.log(
      'Get CDS browser config: ' + JSON.stringify(config));
  return config;
};

/**
 * Sets all configuration.
 * @param {Object} config The configuration object.
 */
window.accountchooser.util.browserconfig.setAll = function(
    config) {
  window.accountchooser.util.log(
      'Set CDS browser config: ' + JSON.stringify(config));
  window.accountchooser.util.browserconfig.storage_.
      write(config);
};

/**
 * Clears all configuration.
 */
window.accountchooser.util.browserconfig.clearAll = function() {
  window.accountchooser.util.log('Clear CDS browser config.');
  window.accountchooser.util.browserconfig.storage_.clear();
};

/**
 * Gets a configuration value.
 * @param {string} key The key of the configuration.
 * @return {*} The configuration value.
 */
window.accountchooser.util.browserconfig.get = function(key) {
  var config = window.accountchooser.util.browserconfig.getAll();
  return config[key];
};

/**
 * Sets a configuration value.
 * @param {string} key The key of the configuration.
 * @param {*} value The configuration value.
 */
window.accountchooser.util.browserconfig.set = function(key,
    value) {
  var config = window.accountchooser.util.browserconfig.getAll();
  config[key] = value;
  window.accountchooser.util.browserconfig.setAll(config);
};

/**
 * Clears a configuration.
 * @param {string} key The key of the configuration.
 */
window.accountchooser.util.browserconfig.clear = function(key) {
  var config = window.accountchooser.util.browserconfig.getAll();
  delete config[key];
  window.accountchooser.util.browserconfig.setAll(config);
};

/**
 * Checks whether the CDS is disabled.
 * @return {boolean} {@code true} if the CDS is disabled.
 */
window.accountchooser.util.browserconfig.isDisabled =
    function() {
  return !!window.accountchooser.util.browserconfig.get(
      'disabled');
};

/**
 * Sets whether the CDS is disabled.
 * @param {boolean} disabled Whether the CDS is disabled.
 */
window.accountchooser.util.browserconfig.setDisabled = function(
    disabled) {
  window.accountchooser.util.browserconfig.set('disabled',
      !!disabled);
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
 * @param {Array.<Object>} accounts the list of accounta to be stored to CDS.
 * @param {Object} clientConfig the configuration parameters of current client.
 * @constructor
 */
window.accountchooser.rpc.StoreRequest = function(id, accounts,
    clientConfig) {
  window.accountchooser.param.notEmpty(id, 'id');
  window.accountchooser.param.notEmptyArray (accounts,
      'accounts');
  if (accounts) {
    accounts = window.accountchooser.util.sanitizeAccounts(
        accounts);
  }
  this.method_ = window.accountchooser.rpc.StoreRequest.METHOD;
  this.params_ = {
    accounts: accounts,
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
  if (localAccounts) {
    localAccounts = window.accountchooser.util.sanitizeAccounts(
        localAccounts);
  }
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
  if (account) {
    account = window.accountchooser.util.sanitizeAccount(
        account);
  }
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
 * @class Defines the AboutRequest class.
 * @param {string} id the id of the Request.
 * @param {Object} clientConfig the configuration parameters of current client.
 * @constructor
 */
window.accountchooser.rpc.AboutRequest = function(id,
    clientConfig) {
  window.accountchooser.param.notEmpty(id, 'id');
  this.method_ = window.accountchooser.rpc.AboutRequest.METHOD;
  this.params_ = {
    clientConfig: clientConfig
  };
  this.id_ = id;
};
window.accountchooser.rpc.AboutRequest.inheritsFrom(
    window.accountchooser.rpc.Request);

/** The method name of the AboutRequest */
window.accountchooser.rpc.AboutRequest.METHOD = 'about';

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
  if (account) {
    account = window.accountchooser.util.sanitizeAccount(
        account);
  }
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
 * Parses JSON-RPC Object on CDS iframe side.
 * <br>Possible RpcObject for CDS iframe: Request, ClientReadyNotification,
 * @param {string} json A JSON format string.
 * @return {RpcObject} A valid RpcObject, of null otherwise.
 */
window.accountchooser.rpc.parseRpcObject = function(json) {
  var result = null;
  if (json) {
    try {
      var request = JSON.parse(json);
    } catch (e) {
      window.accountchooser.util.log(
          'Invalid JSON-RPC object: not a JSON object.');
      return result;
    }
    if (!request || request.jsonrpc != '2.0') {
      window.accountchooser.util.log(
          'Invalid JSON-RPC request: \'jsonrpc\' field should be \'2.0\'.');
    } else if (request.method) {
      var method = request.method.toLowerCase();
      if (method == window.accountchooser.rpc.StoreRequest.
          METHOD.toLowerCase()) {
        if (request.id && request.params && request.params.accounts) {
          result = new window.accountchooser.rpc.StoreRequest(
              request.id, request.params.accounts, request.params.clientConfig);
        }
      } else if (method == window.accountchooser.rpc.
          SelectRequest.METHOD.toLowerCase()) {
        if (request.id) {
          result = new window.accountchooser.rpc.SelectRequest(
              request.id, request.params.localAccounts,
              request.params.clientConfig);
        }
      } else if (method == window.accountchooser.rpc.
          UpdateRequest.METHOD.toLowerCase()) {
        if (request.id && request.params && request.params.account) {
          result = new window.accountchooser.rpc.UpdateRequest(
              request.id, request.params.account, request.params.clientConfig);
        }
      } else if (method == window.accountchooser.rpc.
          QueryRequest.METHOD.toLowerCase()) {
        result = new window.accountchooser.rpc.QueryRequest(
            request.id, request.params.query, request.params.account,
            request.params.clientConfig);
      } else if (method == window.accountchooser.rpc.
          ClientReadyNotification.METHOD.toLowerCase()) {
        result = new window.accountchooser.rpc.
            ClientReadyNotification();
      }
    }
  }
  if (result) {
    window.accountchooser.util.log(
        'Successfully parsing request: ' + json);
  } else {
    window.accountchooser.util.log(
        'Failed to parse request: ' + json);
  }
  return result;
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
 * The prefix for saved in-bound (from client to CDS) RPC Objects
 * @private
 */
window.accountchooser.rpc.SAVED_IN_RPC_PREFIX_ = 'IN_RPC_';

/**
 * The prefix for saved out-bound (from CDS to client) RPC Objects
 * @private
 */
window.accountchooser.rpc.SAVED_OUT_RPC_PREFIX_ = 'OUT_RPC_';

/**
 * Reads saved RpcObjects from sessionStorage.
 * @param {string} clientDomain the domain of the client.
 * @param {boolean} inbound Reads inbound (from client to CDS) or out-bound
 *     (from CDS to client) RpcObjects.
 * @return {Array.<string>} An array of strings, each of which is a RpcObject.
 */
window.accountchooser.rpc.readSavedRpcObjects = function(
    clientDomain, inbound) {
  var key;
  if (inbound) {
    key = window.accountchooser.rpc.SAVED_IN_RPC_PREFIX_;
  } else {
    key = window.accountchooser.rpc.SAVED_OUT_RPC_PREFIX_;
  }
  key += clientDomain.replace(/^https?:\/\//, '');
  var result = [];
  var data = window.sessionStorage.getItem(key);
  if (data) {
    window.sessionStorage.removeItem(key);
    var objects = window.JSON.parse(data) || [];
    var now = new Date().getTime();
    if (objects.length) {
      // Only process the latest request.
      var strRequest = objects[objects.length - 1];
      try {
        var rpc = JSON.parse(strRequest);
        if (rpc && rpc.timestamp && now - rpc.timestamp <
            window.accountchooser.rpc.RPC_TIMEOUT) {
          result.push(strRequest);
          if (inbound) {
            // Keeps inbound request for CDS page reloading.
            window.sessionStorage.setItem(key, window.JSON.stringify(result));
          }
        } else {
          window.accountchooser.util.log(
              'Ignore expired JSON-RPC object: [' + strRequest + ']');
        }
      } catch (e) {
        window.accountchooser.util.log(
            'Ignore invalid JSON-RPC object: [' + strRequest + ']');
      }
    }
  }
  return result;
};

/**
 * Saves a RpcObject into sessionStorage.
 * @param {string} clientDomain the domain of the client.
 * @param {RpcObject} rpcObject the RpcObject to be saved.
 * @param {boolean} inbound Reads inbound (from client to CDS) or out-bound
 *     (from CDS to client) RpcObjects.
 */
window.accountchooser.rpc.saveRpcObject = function(clientDomain,
    rpcObject, inbound) {
  var domain = clientDomain.replace(/^https?:\/\//, '');
  // Delete the out-dated request/response before saving a new one.
  window.sessionStorage.removeItem(
      window.accountchooser.rpc.SAVED_IN_RPC_PREFIX_ + domain);
  window.sessionStorage.removeItem(
      window.accountchooser.rpc.SAVED_OUT_RPC_PREFIX_ + domain);
  // Save the new one.
  var key;
  if (inbound) {
    key = window.accountchooser.rpc.SAVED_IN_RPC_PREFIX_;
  } else {
    key = window.accountchooser.rpc.SAVED_OUT_RPC_PREFIX_;
  }
  key += domain;
  // Uses an array for future extensibility, currently at most 1 element.
  var rpcs = [];
  rpcObject.setTimestamp();
  rpcs.push(rpcObject.toString());
  var jsonData = window.JSON.stringify(rpcs);
  window.sessionStorage.setItem(key, jsonData);
};


/**
 * Triggers saved RpcObjects to the client.
 * @param {string} origin The domain of the client.
 * @private
 */
window.accountchooser.rpc.triggerSavedRpcs_ = function(origin) {
  if (!window.parent) {
    return;
  }
  var rpcs = window.accountchooser.rpc.readSavedRpcObjects(
      origin, false);
  if (rpcs && rpcs.length) {
    for (var i = 0; i < rpcs.length; i++) {
      window.parent.postMessage(rpcs[i], origin);
    }
  } else {
    window.accountchooser.rpc.call(window.parent,
        new window.accountchooser.rpc.EmptyResponseNotification);
  }
};

/**
 * Saves the request into CDS local storage and sends ack back to the client.
 * @param {window.accountchooser.rpc.Request} request
 *     The request sent from the client.
 * @param {string} origin The origin of the client.
 * @private
 */
window.accountchooser.rpc.saveAndAckRequest_ = function(request,
    origin) {
  window.accountchooser.rpc.saveRpcObject(origin, request,
      true);
  var ack = new window.accountchooser.rpc.RequestAckNotification(
      request.getId());
  window.parent.postMessage(ack.toString(), origin);
};

/**
 * Handles the inquiry and returns the result.
 * @param {window.accountchooser.rpc.Request} request
 *     The request sent from the client.
 * @param {string} origin The origin of the client.
 * @private
 */
window.accountchooser.rpc.handleQuery_ = function(request,
    origin) {
  var result = false;
  switch (request.params_.query) {
    case window.accountchooser.rpc.Queries.CDS_DISABLED:
      result = window.accountchooser.rpc.checkCdsDisabled_();
      break;
    case window.accountchooser.rpc.Queries.CDS_EMPTY:
      result = window.accountchooser.rpc.checkCdsEmpty_(
          request.params_.clientConfig);
      break;
    case window.accountchooser.rpc.Queries.ACCOUNT_EXIST:
      result = window.accountchooser.rpc.checkAccountExist_(
          request.params_.account, request.params_.clientConfig);
      break;
    default:
      window.accountchooser.rpc.sendInvalidQueryResponse_(
          request, origin);
      return;
  }
  var response = new window.accountchooser.rpc.Response(
      request.getId(), result);
  window.parent.postMessage(response.toString(), origin);
};

/**
 * Checks if the CDS is disabled.
 * @return {boolean} {@code true} if the CDS is disabled.
 * @private
 */
window.accountchooser.rpc.checkCdsDisabled_ = function() {
  return window.accountchooser.util.browserconfig.isDisabled();
};

/**
 * Checks if the CDS is empty.
 * @return {boolean} {@code true} if the CDS has no accounts.
 * @private
 */
window.accountchooser.rpc.checkCdsEmpty_ = function() {
  var accounts = window.accountchooser.util.accountstorage.
      readAccounts();
  return !accounts.length;
};

/**
 * Checks if the account exists in the CDS.
 * @param {Object} account The account to be inquiried.
 * @return {boolean} {@code true} if the account exists.
 * @private
 */
window.accountchooser.rpc.checkAccountExist_ = function(
    account) {
  var accounts = window.accountchooser.util.accountstorage.
      readAccounts();
  for (var i = 0; i < accounts.length; ++i) {
    var other = accounts[i];
    if (window.accountchooser.util.accountstorage.matchAccount_(
        account, other.email, other.providerId)) {
      return true;
    }
  }
  return false;
};

/**
 * Gets all accounts stored in the CDS according to the client's filter config.
 * @param {Object=} opt_clientConfig The configuration parameters of the client.
 * @return {Array.<Object>} accounts which match the config.
 * @private
 */
window.accountchooser.rpc.getAllAccountsByClientConfig_ =
    function(opt_clientConfig) {
  var filter = {
    withEmail: opt_clientConfig && !opt_clientConfig.showAll,
    idpList: opt_clientConfig && opt_clientConfig.idpFilter
  };
  return window.accountchooser.util.accountstorage.
      readAccounts(filter);
};

/**
 * Sends an error Response to the client.
 * @param {Object} error The error sent to the client.
 * @param {window.accountchooser.rpc.Request} request
 *     The request sent from the client.
 * @param {string} origin The origin of the client.
 * @private
 */
window.accountchooser.rpc.sendErrorResponse_ = function(error,
    request, origin) {
  var response = new window.accountchooser.rpc.Response(
      request.getId(), undefined, error);
  window.parent.postMessage(response.toString(), origin);
};

/**
 * Sends an error Response to the client to indicate the service is disabled.
 * @param {window.accountchooser.rpc.Request} request
 *     The request sent from the client.
 * @param {string} origin The origin of the client.
 * @private
 */
window.accountchooser.rpc.sendDisableResponse_ = function(
    request, origin) {
  var error = {
    code: -32601,
    message: 'Method not found',
    data: 'Service is disabled. Method is not available.'
  };
  window.accountchooser.rpc.sendErrorResponse_(error, request,
      origin);
};

/**
 * Sends an error Response to the client to indicate the query is invalid.
 * @param {window.accountchooser.rpc.Request} request
 *     The request sent from the client.
 * @param {string} origin The origin of the client.
 * @private
 */
window.accountchooser.rpc.sendInvalidQueryResponse_ = function(
    request, origin) {
  var error = {
    code: -32602,
    message: 'Invalid parameter',
    data: 'The query "' + request.params_.query + '" is invalid.'
  };
  window.accountchooser.rpc.sendErrorResponse_(error, request,
      origin);
};

/**
 * Handler for postMessage event.
 * @param {EventObject} e the message event object.
 * @private
 */
window.accountchooser.rpc.process_ = function(e) {
  window.accountchooser.util.log('Received message: ' + e.data +
      ' from ' + e.origin);
  var request = window.accountchooser.rpc.parseRpcObject(e.data);
  if (!request) {
    window.accountchooser.util.log(
        'Error request format: ' + e.data);
    return;
  }
  if (request instanceof
      window.accountchooser.rpc.ClientReadyNotification) {
    window.accountchooser.rpc.triggerSavedRpcs_(e.origin);
  } else if (request instanceof
      window.accountchooser.rpc.Request) {
    if (request instanceof
        window.accountchooser.rpc.QueryRequest) {
      window.accountchooser.rpc.handleQuery_(request, e.origin);
    } else {
      window.accountchooser.rpc.saveAndAckRequest_(request,
          e.origin);
    }
  } else {
    window.accountchooser.util.log(
        'Unrecognized rpcObject: ' + e.data);
  }
};

window.accountchooser.rpc.init_(
    window.accountchooser.rpc.process_);

