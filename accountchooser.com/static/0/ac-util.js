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
 * Checks the given URL's scheme is valid or not. Only http and https are
 * considered valid.
 * @param {string} url The URL to be checked.
 * @return {boolean} {@code true} if the scheme is valid.
 */
window.accountchooser.util.isValidSchemeUrl = function(url) {
  return /^https?:\/\//i.test(url);
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
 * Checkes whether two accounts match each other.
 * @param {Object} account1 The first account.
 * @param {Object} account2 The second account.
 * @return {boolean} {@code true} if they match.
 */
window.accountchooser.util.accountstorage.matchAccount =
    function(account1, account2) {
  return window.accountchooser.util.accountstorage.matchAccount_(
      account1, account2.email, account2.providerId);
};

/**
 * Checks whether two accounts are compatible. If two accounts are compatible,
 * they have the same email and providerId. Also their displayNames and
 * photoUrls don't conflict.
 * @param {Object} account1 The first account.
 * @param {Object} account2 The second account.
 * @return {boolean} {@code true} if they are compatible.
 */
window.accountchooser.util.accountstorage.checkCompatible =
    function(account1, account2) {
  if (!window.accountchooser.util.accountstorage.matchAccount(
      account1, account2)) {
    return false;
  }
  var merged = {
    displayName: account1.displayName || account2.displayName,
    photoUrl: account1.photoUrl || account2.photoUrl
  };
  return (
      (!account1.displayName || account1.displayName == merged.displayName) &&
      (!account1.photoUrl || account1.photoUrl == merged.photoUrl) &&
      (!account2.displayName || account2.displayName == merged.displayName) &&
      (!account2.photoUrl || account2.photoUrl == merged.photoUrl));
};

/**
 * Gets the index of the account in the list.
 * @param {Object} account the account to be checked.
 * @param {Array.<Object>} accounts the account list.
 * @return {number} the index of the account in the list. If it's not in the
 *     list, -1 is returned.
 */
window.accountchooser.util.accountstorage.inAccountList =
    function(account, accounts) {
  for (var i = 0, length = accounts.length; i < length; i++) {
    if (window.accountchooser.util.accountstorage.matchAccount(
        account, accounts[i])) {
      return i;
    }
  }
  return -1;
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

