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
 * The regular expression for a vaild username.
 * @type {RegExp}
 * @private
 */
window.accountchooser.util.USERNAME_REGEX = /^\w+(\.\w+)*$/;

/**
 * Checks if the given parameter is a valid user name.
 * @param {string} username The input user name to be checked.
 * @return {boolean} True if the format is valid.
 */
window.accountchooser.util.isValidUsername = function(username) {
  if (!window.accountchooser.config) {
    return !!username && (null !=
      window.accountchooser.util.USERNAME_REGEX.exec(username));
  } else if(!window.accountchooser.config.
      disableUsernameFormatCheck) {
    if(window.accountchooser.config.usernameRegex) {
      return !!username && (null != window.accountchooser.config.
          usernameRegex.exec(username));
    } else  {
      return !!username && (null != window.accountchooser.util.
          USERNAME_REGEX.exec(username));
    }
  } else {
    return !!username;
  }
};


/**
 * The regular expression for a domain part.
 * @type {RegExp}
 * @private
 */
window.accountchooser.util.DOMAIN_REGEX_ = /:\/\/(.[^\/?]+)/;

/**
 * The regular expression for a valid domain.
 * @type {RegExp}
 * @private
 */
window.accountchooser.util.VALID_URL_DOMAIN_REGEX_ =
  /^([a-z0-9]([-a-z0-9]*[a-z0-9])?\.)+[a-z0-9]+(\:\d+)?$/i;

/**
 * Parses the domain part from a URL.
 * @param {string} url The input URL to be parsed.
 * @return {string} The domain in the URL.
 */
window.accountchooser.util.getDomainFromUrl = function(url) {
  try {
    var domain =
        url.match(window.accountchooser.util.DOMAIN_REGEX_)[1];
    return domain;
  } catch (e) {
  }
};

/**
 * Checks whether a string is a valid URL domain. URL domain can have port
 * number in it.
 * @param {string} domain The domain to check.
 * @return {boolean} true is valid.
 */
window.accountchooser.util.isValidUrlDomain = function(domain) {
  if (domain) {
    return window.accountchooser.util.VALID_URL_DOMAIN_REGEX_.
        test(domain);
  }
  return false;
};


/**
 * Regex for mobile agent.
 * @private
 */
window.accountchooser.util.MOBILE_REGEX_ =
    /iphone|ipad|ipod|android|blackberry|mini|iemobile|windows\sce|palm/i;

/**
 * Whether an agent is a mobile user agent.
 * @param {string} agent the user agent string.
 * @return {boolean} Whether an agent is a mobile user agent.
 */
window.accountchooser.util.isMobileAgent = function(agent) {
  return agent && window.accountchooser.util.MOBILE_REGEX_.test(
      agent.toLowerCase());
};


/**
 * List of supported language which is denoted by its normalized code.
 * @private
 */
window.accountchooser.util.SUPPORTED_LANGUAGE_ = [
    'en', 'en_gb', 'fr', 'it', 'de', 'es', 'zh_cn', 'zh_tw', 'ja', 'ko', 'nl',
    'pl', 'pt', 'ru', 'th', 'tr', 'bg', 'ca', 'hr', 'cs', 'da', 'fil', 'fi',
    'el', 'hi', 'hu', 'id', 'lv', 'lt', 'no', 'pt_pt', 'ro', 'sr', 'sk', 'sl',
    'sv', 'uk', 'vi', 'ar', 'iw'];
/**
 * Language codes map which maps the alternative code to the normolized code in
 * the list of supported language.
 * @private
 */
window.accountchooser.util.ALTERNATIVE_CODES_MAP_ = {
  'en_us': 'en', 'zh': 'zh_cn', 'zh_hans': 'zh_cn', 'zh_hans_cn': 'zh_cn',
  'zh_hant': 'zh_tw', 'zh_hant_tw': 'zh_tw', 'nl_nl': 'nl', 'fr_fr': 'fr',
  'de_de': 'de', 'it_it': 'it', 'ja_jp': 'ja', 'ko_kr': 'ko', 'pl_pl': 'pl',
  'pt_br': 'pt', 'ru_ru': 'ru', 'es_es': 'es', 'th_th': 'th', 'tr_tr': 'tr',
  'bg_bg': 'bg', 'ca_es': 'ca', 'hr_hr': 'hr', 'cs_cz': 'cs', 'da_dk': 'da',
  'fil_ph': 'fil', 'tl': 'fil', 'fi_fi': 'fi', 'el_gr': 'el', 'hi_in': 'hi',
  'hu_hu': 'hu', 'id_id': 'id', 'lv_lv': 'lv', 'lt_lt': 'lt', 'no_no': 'no',
  'nb': 'no', 'nb_no': 'no', 'ro_ro': 'ro', 'sr_cyrl_rs': 'sr', 'sk_sk': 'sk',
  'sl_si': 'sl', 'sv_se': 'sv', 'uk_ua': 'uk', 'vi_vn': 'vi'};

/**
 * Finds the normalized code in the supported language list for a given one. If
 * there's no exactly matched one, try to match the higer level. i.e., 'zh-HK'
 * will get 'zh' as result, which is eventually mapped to 'zh_cn'. If no code is
 * found, {@code undefined} is returned.
 * @param {string} language The language code.
 * @return {string|undefined} The normalized language code.
 */
window.accountchooser.util.findLanguageCode = function(
    language) {
  // Normalize language code
  var lang = language && language.replace(/-/g, '_').toLowerCase();
  var code;
  while (lang) {
    if (jQuery.inArray(lang,
        window.accountchooser.util.SUPPORTED_LANGUAGE_) > -1) {
      code = lang;
      break;
    } else if (window.accountchooser.util.
        ALTERNATIVE_CODES_MAP_[lang]) {
      code = window.accountchooser.util.
          ALTERNATIVE_CODES_MAP_[lang];
      break;
    }
    var parts = lang.split('_');
    parts.pop();
    lang = parts.join('_');
  }
  return code;
};

/**
 * Finds the language is right-to-left or not.
 * @param {string} language The language code.
 * @return {@code true} if the language is rtl, otherwise {@code false}.
 */
window.accountchooser.util.isRightToLeft = function(language) {
  var lang =
      window.accountchooser.util.findLanguageCode(language);
  // Arabic or Hebrew
  return lang == 'ar' || lang == 'iw';
};


/**
 * Gets the target namespaced object by its name string. For example, you can
 * get the target function by 'window.cds.StoreServices' or 'cds.StoreServices'.
 * @param {string} name a dot-separated name string.
 * @return {object} target object.
 */
window.accountchooser.util.getNamespacedObjectByString =
    function(name) {
  var parts = name.split('.');
  for (var i = 0, len = parts.length, obj = window; i < len; ++i) {
    if (i == 0 && parts[0] == 'window') {
      obj = window;
    } else {
      obj = obj[parts[i]];
    }
    window.accountchooser.param.notNull(obj, name);
  }
  return obj;
};


/**
 * The prefix for the registry key.
 * @type {string}
 * @private
 */
window.accountchooser.util.REGISTRY_KEY_PREFIX_ = 'widget_';

/**
 * Holds all the login widget instances in the page.
 * @type {Object}
 * @private
 */
window.accountchooser.util.widgets_ = {};

/**
 * Registers the widget instance to the window by its uuid.
 * @param {number|string} uuid The uuid of the widget.
 * @param {Object} ref The instance of the widget.
 */
window.accountchooser.util.registerWidget = function(uuid, ref) {
  var id =
      window.accountchooser.util.REGISTRY_KEY_PREFIX_ + uuid;
  window.accountchooser.util.widgets_[id] = ref;
};

/**
 * Removes a widget instance from the window by its uuid.
 * @param {number|string} uuid The uuid of the widget.
 */
window.accountchooser.util.unregisterWidget = function(uuid) {
  var id =
      window.accountchooser.util.REGISTRY_KEY_PREFIX_ + uuid;
  delete window.accountchooser.util.widgets_[id];
};

/**
 * Gets the widget instance by its uuid. This parameter opt_uuid is optional if
 * only one widget instance in the page.
 * @param {number|string} opt_uuid The uuid of the widget.
 * @return {Object} The widget instance.
 * @private
 */
window.accountchooser.util.getWidget_ = function(opt_uuid) {
  var widget;
  if (opt_uuid) {
    var id = window.accountchooser.util.REGISTRY_KEY_PREFIX_ +
        opt_uuid;
    widget = window.accountchooser.util.widgets_[id];
  } else {
    for (var id in window.accountchooser.util.widgets_) {
      widget = window.accountchooser.util.widgets_[id];
      break;
    }
  }
  return widget;
};

/**
 * Defines a general way to send notification to a widget .
 * @param {string} type The type of the notification.
 * @param {object} params The parameters with the notification.
 * @param {number|string} opt_uuid The uuid of the widget to notify. This
 *    parameter is optional if only one widget instance in the page.
 */
window.accountchooser.util.notifyWidget = function(type, params,
    opt_uuid) {
  window.accountchooser.util.log('window.notifyWidget: type=\'' +
      type + "\', uuid=\'" + opt_uuid + "\'");
  var widget = window.accountchooser.util.getWidget_(opt_uuid);
  if (!widget) {
    window.accountchooser.util
        .log('Failed to find widget with uuid \'' + opt_uuid + "\'.");
  } else {
    // Fix bug on IE8: Clone a local copy for the remote parameter object.
    var clonedParams = jQuery.extend({}, params);
    var doNotification = function() {
      widget.handleNotification(type, clonedParams);
    };
    window.setTimeout(doNotification, 200);
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
 * @class CSS dynamic loader class.
 * @constructor
 * @extends {window.accountchooser.loader.Loader}
 */
window.accountchooser.loader.CssLoader = function() {
};
window.accountchooser.loader.CssLoader.inheritsFrom(
    window.accountchooser.loader.Loader);

/**
 * Creates a resource element.
 * @param {string} resourceUri The resource URI to be loaded.
 * @return {!Element} The resource element.
 */
window.accountchooser.loader.CssLoader.prototype.
    createResourceElement = function(resourceUri) {
  var element = document.createElement('link');
  element.setAttribute('type', 'text/css');
  element.setAttribute('rel', 'stylesheet');
  element.setAttribute('href', resourceUri);

  // Hack for old firefox (i.e., firefox 3.6) which doesn't fire onload event
  // when the stylesheet is loaded.
  var img = document.createElement('img');
  img.setAttribute('src', resourceUri);
  var self = this;
  img.onerror = function() {
    if (!self.finished_) {
      element.onload();
    }
  };
  return element;
};


/**
 * @class The Semaphore class monitors a value and trigger the handler when
 * the value becomes to 0.
 * @param {function} handler The function to trigger when the semaphore value
 *     becomes to 0.
 * @param {number=} opt_value The initial value, must be positive integer or
 *     zero. If not set, default value would be 0.
 * @constructor
 */
window.accountchooser.util.Semaphore = function(handler,
    opt_value) {
  window.accountchooser.param.notEmptyFunction(handler,
      'handler');
  if (opt_value < 0) {
    throw 'Semaphore value cannot be negative.';
  }
  this.handler_ = handler;
  this.value_ = opt_value || 0;
  this.started_ = false;
};

/**
 * Returns the current value of the semaphore.
 * @return {number} The current value of the semaphore.
 */
window.accountchooser.util.Semaphore.prototype.getValue =
    function() {
  return this.value_;
};

/**
 * Increases the semaphore value by 1. Must be called before start().
 */
window.accountchooser.util.Semaphore.prototype.increase =
    function() {
  if (this.started_) {
    throw 'Cannot increase Semaphore value after calling start().';
  }
  this.value_++;
};

/**
 * Starts to monitor the semaphore value, which must be bigger than 0.
 */
window.accountchooser.util.Semaphore.prototype.start =
    function() {
  if (this.value_ <= 0) {
    throw 'Semaphore value must bigger than 0.';
  }
  this.started_ = true;
};

/**
 * Checks whether the start() method is called on this semaphore.
 * @return {boolean} True if start() method is called, false otherwise.
 */
window.accountchooser.util.Semaphore.prototype.isStarted =
    function() {
  return this.started_;
};

/**
 * Decreases the semaphore value by 1. Must be called after start().
 */
window.accountchooser.util.Semaphore.prototype.decrease =
    function() {
  if (!this.started_) {
    throw 'Cannot decrease Semaphore value before calling start().';
  }
  if (this.value_ > 0) {
    this.value_--;
    window.accountchooser.util.log(
        'semaphore value decrease to ' + this.value_);
    if (this.value_ == 0) {
      this.handler_();
    }
  }
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
 * Sanitizes account info so that only the valid key/value pairs are kept. If
 * the sanitizer is not provided, this function only checks the account property
 * keys so that it can fail fast if the sanitizer is not available.
 * @param {Object} account The account to be sanitized..
 * @param {function(string, string): string=} opt_sanitizer The sanitizer.
 * @param {boolean=} opt_silent Whether silently discard invalid key/values or
 *     throw an error.
 * @return {Object} The sanitized account.
 */
window.accountchooser.util.sanitizeAccount = function(account,
    opt_sanitizer, opt_silent) {
  var result = {};
  var AccountPropertyKey =
      window.accountchooser.util.AccountPropertyKey;
  for (var key in account) {
    var value = account[key];
    switch (key) {
      case AccountPropertyKey.EMAIL:
      case AccountPropertyKey.DISPLAY_NAME:
      case AccountPropertyKey.PHOTO_URL:
      case AccountPropertyKey.PROVIDER_ID:
        value = opt_sanitizer ? opt_sanitizer(key, value) : value;
        if (value) {
          result[key] = value;
        }
        break;
      default:
        if (!opt_silent) {
          throw 'Unrecognized key "' + key + '" for account';
        }
    }
  }
  if (!result[AccountPropertyKey.EMAIL]) {
    throw 'No valid email field for the account';
  }
  return result;
};

/**
 * Sanitizes a list of accounts. If the sanitizer is not provided, this function
 * only checks the account property keys so that it can fail fast if the
 * sanitizer is not available.
 * @param {Array.<Object>} accounts The accounts to be sanitized..
 * @param {function(string, string): string=} opt_sanitizer The sanitizer.
 * @param {boolean=} opt_silent Whether silently discard invalid key/values or
 *     throw an error.
 * @return {Array.<Object>} The sanitized accounts.
 */
window.accountchooser.util.sanitizeAccounts = function(accounts,
    opt_sanitizer, opt_silent) {
  var result = [];
  for (var i = 0, length = accounts.length; i < length; i++) {
    var account = window.accountchooser.util.sanitizeAccount(
        accounts[i], opt_sanitizer, opt_silent);
    result.push(account);
  }
  return result;
};

/**
 * Default sanitize function for account sanitizing. It uses caja
 * html-css-sanitizer to sanitize email/providerId/displayName fields and
 * rejects any photoUrl whose scheme is not http or https.
 * @param {string} key the key of the property to be sanitized.
 * @param {string} value the value of the property ot be sanitized.
 * @return {string|undefined} the sanitized value.
 */
window.accountchooser.util.accountSanitizer = function(
    key, value) {
  if (key ==
      window.accountchooser.util.AccountPropertyKey.PHOTO_URL) {
    if (/^https?:\/\//i.test(value)) {
      return value;
    }
  } else {
    // Use caja html-css-sanitizer to sanitize the value. All HTML tags are
    // removed.
    return html.sanitizeWithPolicy(value, function() {});
  }
};


/**
 * Name space for Caja.
 */
window.accountchooser.caja =
    window.accountchooser.caja || {};

/**
 * Loads raw HTML as a String.
 * @param {string} htmlUrl The URL of the HTML file.
 * @param {number} timeout The timeout to load the file, in milliseconds.
 * @param {function} callback Callback when the file is loaded successfully.
 * @param {function=} opt_errorCallback Callback when an error occurs.
 */
window.accountchooser.caja.loadHtml = function(htmlUrl,
    timeout, callback, opt_errorCallback) {
  jQuery.ajax({
    type: 'GET',
    url: htmlUrl,
    dataType: 'html',
    success: callback,
    timeout: timeout,
    error: function(jqXHR, textStatus, errorThrown) {
      if (opt_errorCallback) {
        opt_errorCallback(textStatus, errorThrown);
      }
    }
  });
};

/**
 * Really loads a JS file from web.
 * @param {string} jsUrl The URL of the JS file.
 * @param {function} callback Callback when the file is loaded successfully.
 * @param {function=} opt_errorCallback Callback when an error occurs.
 * @private
 */
window.accountchooser.caja.loadJs_ = function(jsUrl, callback,
    opt_errorCallback) {
  var loader = new window.accountchooser.loader.JsLoader();
  loader.load(jsUrl, undefined, callback, opt_errorCallback);
};

/**
 * Loaded URLs registry. The key of each entry is a URL, the value of it is:
 * {
 *   loaded: false,
 *   callbacks: [],
 *   error: false,
 *   errorCallbacks: []
 * }
 * @private
 */
window.accountchooser.caja.loadedUrls_ = {};

/**
 * The callback function when the resource is loaded successfully.
 * @param {string} url The URL of the resource.
 * @private
 */
window.accountchooser.caja.loadedCallback_ = function(url) {
  if (url) {
    var config = window.accountchooser.caja.loadedUrls_[url];
    if (config) {
      config.loaded = true;
      for (var i = 0; i < config.callbacks.length; i++) {
        var callback = config.callbacks[i];
        if (callback) {
          callback();
        }
      }
      config.callbacks = [];
      config.error = false;
      config.errorCallbacks = [];
    }
  }
};

/**
 * The callback function when some error occurs.
 * @param {string} url The URL of the resource.
 * @param {string=} textStatus A string for the error from underline system.
 * @param {object=} errorThrown A exception from underline system.
 * @private
 */
window.accountchooser.caja.errorCallback_ = function(url,
    textStatus, errorThrown) {
  if (url) {
    var config = window.accountchooser.caja.loadedUrls_[url];
    if (config) {
      config.loaded = true;
      config.error = true;
      for (var i = 0; i < config.errorCallbacks.length; i++) {
        var callback = config.errorCallbacks[i];
        if (callback) {
          callback(textStatus, errorThrown);
        }
      }
      config.errorCallbacks = [];
      config.callbacks = [];
    }
  }
};

/**
 * Loads a JS file. The method allow multiple pending request to the same JS.
 * In that case, only 1 request is sent. Also if the JS file is already loaded,
 * the callback (or opt_errorCallback) will be invoked directly.
 * @param {string} jsUrl The URL of the JS file.
 * @param {function} callback Callback when the file is loaded successfully.
 * @param {function=} opt_errorCallback Callback when an error occurs.
 */
window.accountchooser.caja.loadJs = function(jsUrl, callback,
    opt_errorCallback) {
  window.accountchooser.param.notEmpty(jsUrl, 'jsUrl');
  var config = window.accountchooser.caja.loadedUrls_[jsUrl];
  if (!config) {
    window.accountchooser.caja.loadedUrls_[jsUrl] = {
      loaded: false,
      callbacks: [callback]
    };
    window.accountchooser.caja.loadJs_(jsUrl, function() {
      window.accountchooser.caja.loadedCallback_(jsUrl);
    }, function() {
      window.accountchooser.caja.errorCallback_(jsUrl);
    });
  } else if (!config.loaded) {
    config.callbacks.push(callback);
    if (opt_errorCallback) {
      config.errorCallbacks.push(opt_errorCallback);
    }
  } else if (config.error) {
    if (opt_errorCallback) {
      opt_errorCallback();
    }
  } else {
    callback();
  }
};

/**
 *
 */

/**
 */
window.accountchooser.caja =
    window.accountchooser.caja || {};

/**
 */
window.accountchooser.caja.cajaUrl =
  'https://ssl.gstatic.com/caja/4891/caja.js';

/**
 */
window.accountchooser.caja.htmlSanitizerUrl =
  'https://ssl.gstatic.com/caja/4891/html-css-sanitizer-minified.js';

/**
 */
window.accountchooser.caja.CAJA_TIMEOUT = 5000;

/**
 */
window.accountchooser.caja.WHITELIST_IDS = ['AC_LANGUAGE_LIST'];



/**
 * Name space for Caja.
 */
window.accountchooser.caja =
    window.accountchooser.caja || {};

/**
 * Sanitizes a HTML file, and return the sanitized HTML as a string.
 * @param {string} htmlUrl The URL of the HTML file.
 * @param {function} callback Callback when the file is loaded successfully.
 * @param {function=} opt_errorCallback Callback when some error occurs.
 */
window.accountchooser.caja.sanitizeHtml = function(htmlUrl,
    callback, opt_errorCallback) {
  var urlRewriter = function(url) {
    return url;
  };
  var idRewriter = function(id) {
    if (jQuery.inArray(id,
        window.accountchooser.caja.WHITELIST_IDS) >= 0) {
      return id;
    }
  };
  var expectedTimeoutTime = new Date().getTime() +
      window.accountchooser.caja.CAJA_TIMEOUT;

  // Step 3: sanitize raw HTML
  var sanitize = function(rawHtml) {
    var time = expectedTimeoutTime - new Date().getTime();
    if (time < 0) {
      // send timeout error
      if (opt_errorCallback) {
        opt_errorCallback('timeout');
      }
    } else {
      var sanitizedHtml = html_sanitize(rawHtml, urlRewriter, idRewriter);
      callback(sanitizedHtml);
    }
  };
  // Step 2: load raw HTML
  var loadRawHtml = function() {
    var time = expectedTimeoutTime - new Date().getTime();
    if (time < 50) {
      // send timeout error
      if (opt_errorCallback) {
        opt_errorCallback('timeout');
      }
    } else {
      window.accountchooser.caja.loadHtml(htmlUrl, time,
          sanitize, opt_errorCallback);
    }
  };
  // Step 1: load html-sanitizer-minified.js
  window.accountchooser.caja.loadJs(
      window.accountchooser.caja.htmlSanitizerUrl,
      loadRawHtml);
};

/**
 * Cajole a HTML file, and put the cajoled HTML into a target element.
 * @param {element} guestElementId The parent of the cajoled HTML.
 * @param {string} htmlUrl The URL of the HTML file.
 * @param {function=} opt_doneCallback Callback when the file is loaded
 *     successfully.
 * @param {function=} opt_timeoutCallback Callback when some error occurs.
 */
window.accountchooser.caja.cajoleHtml = function(
    guestElementId, htmlUrl, opt_doneCallback, opt_timeoutCallback) {
  var uriPolicy = {
    rewrite: function(uri) {
      return uri;
    }
  };
  var element = document.getElementById(guestElementId);
  var timeout = false;
  var done = false;
  var timeoutId = window.setTimeout(function() {
    window.accountchooser.util.log(
        'Caja process stoped due to timeout.');
    timeout = true;
    if (!done && opt_timeoutCallback) {
      opt_timeoutCallback();
    }
  }, window.accountchooser.caja.CAJA_TIMEOUT);

  var expectedTimeoutTime = new Date().getTime() +
      window.accountchooser.caja.CAJA_TIMEOUT;
  // Step 4: cajole and render HTML.
  var cajole = function(rawHtml) {
    if (timeout) {
      window.accountchooser.util.log(
          'Timeout when initializing Caja.');
      return;
    }
    caja.load(element, uriPolicy, function(frame) {
      frame.code(undefined, 'text/html', rawHtml).run(function() {
        if (!timeout) {
          window.clearTimeout(timeoutId);
        }
        done = true;
        if (opt_doneCallback) {
          opt_doneCallback();
        }
        window.accountchooser.util.log(
            'Guest code rendered successfully.');
      });
    });
  };
  // Step 3: initialize Caja.
  var init = function(rawHtml) {
    if (timeout) {
      window.accountchooser.util.log(
          'Timeout when loading raw HTML.');
      return;
    }
    if (!rawHtml) {
      window.accountchooser.util.log(
          'No content returned in the HTML file.');
      return;
    }
    if (!window.accountchooser.caja.cajaInitialized) {
      window.accountchooser.caja.cajaInitialized = true;
      caja.initialize({
        cajaServer: 'https://ssl.gstatic.com/caja/',
        forceES5Mode: true
      });
    }
    window.setTimeout(function() {
      cajole(rawHtml);
    }, 10);
  };
  // Step 2: load raw HTML.
  var loadRawHtml = function() {
    if (timeout) {
      window.accountchooser.util.log(
          'Timeout when loading caja.js.');
      return;
    }
    var time = expectedTimeoutTime - new Date().getTime();
    if (time < 50) {
      window.accountchooser.util.log(
          'Timeout when loading caja.js.');
      return;
    }
    window.accountchooser.caja.loadHtml(htmlUrl, time,
        function(rawHtml) {
      window.setTimeout(function() {
        init(rawHtml);
      }, 10);
    });
  };
  // Step 1: load caja.js
  window.accountchooser.caja.loadJs(
      window.accountchooser.caja.cajaUrl, function() {
        window.setTimeout(loadRawHtml, 10);
      });
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
  ACCOUNT_EXIST: 'accountExist',
  SHOULD_UPDATE: 'shouldUpdate'
};


/**
 * @class Defines the IdpReadyNotification class. IdpReadyNotification is a
 * Notification to indicate that IDP IFrame page is loaded and initialized.
 * @constructor
 */
window.accountchooser.rpc.IdpReadyNotification = function() {
  this.method_ =
      window.accountchooser.rpc.IdpReadyNotification.METHOD;
};
window.accountchooser.rpc.IdpReadyNotification.inheritsFrom(
   window.accountchooser.rpc.Notification);

/** The method name of the IdpReadyNotification */
window.accountchooser.rpc.IdpReadyNotification.METHOD =
    'idpReadyNotification';

/**
 * @class Defines the IdpAuthRequest class.
 * @param {object} account the account that user selected in CDS.
 * @param {object} clientConfig the configuration parameters of current client.
 * @constructor
 */
window.accountchooser.rpc.IdpAuthRequest = function(account,
    clientConfig) {
  window.accountchooser.param.notEmpty(account, 'account');
  this.method_ = window.accountchooser.rpc.IdpAuthRequest.METHOD;
  this.params_ = {
    account: account,
    clientConfig: clientConfig
  };
  this.id_ =
      window.accountchooser.rpc.IdpAuthRequest.DEFAULT_ID + ':' +
      account.email;
};
window.accountchooser.rpc.IdpAuthRequest.inheritsFrom(
    window.accountchooser.rpc.Request);

/** The method name of the IdpAuthRequest */
window.accountchooser.rpc.IdpAuthRequest.METHOD = 'idpAuth';

/** The default request id of the IdpAuthRequest */
window.accountchooser.rpc.IdpAuthRequest.DEFAULT_ID = 'idpAuth';


/**
 * Parses JSON-RPC Object on CDS server side.
 * <br>Possible RpcObject for CDS server: Request, IdpReadyNotification, or
 * Response from IDP.
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
          ManageRequest.METHOD.toLowerCase()) {
        if (request.id) {
          result = new window.accountchooser.rpc.ManageRequest(
              request.id, request.params.clientConfig);
        }
      } else if (method == window.accountchooser.rpc.
          AboutRequest.METHOD.toLowerCase()) {
        if (request.id) {
          result = new window.accountchooser.rpc.AboutRequest(
              request.id, request.params.clientConfig);
        }
      } else if (method == window.accountchooser.rpc.
          IdpReadyNotification.METHOD.toLowerCase()) {
        result = new window.accountchooser.rpc.
            IdpReadyNotification();
      }
    } else if (typeof request.id === 'string' && request.id.indexOf(
        window.accountchooser.rpc.IdpAuthRequest.DEFAULT_ID) >=
        0) {
      result = new window.accountchooser.rpc.Response(
          request.id, request.result, request.error);
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


/** A map from IDP id to its status. */
window.accountchooser.rpc.idps = {};

/** A map from IDP domain name to its status. */
window.accountchooser.rpc.idpsIndexedByDomain = {};

/** A map from email domain to its IDP. */
window.accountchooser.rpc.emailMapIdp = {};

/**
 * Before connect to IDP for an assertion, a timer should be set to invoke the
 * timeout callback. If returned from IDP timely, the timer should be cleared.
 * @private
 */
window.accountchooser.rpc.timer_ = {
  running: false,
  id: 0,
  callback: null
};

/**
 * Clears the timeout callback, if set.
 * @private
 */
window.accountchooser.rpc.clearTimeoutCallback_ = function() {
  if (window.accountchooser.rpc.timer_.running) {
    try {
      window.clearTimeout(
          window.accountchooser.rpc.timer_.id);
    } catch (e) {}
    window.accountchooser.rpc.timer_.running = false;
    window.accountchooser.rpc.timer_.id = 0;
    window.accountchooser.rpc.timer_.callback = null;
  }
};

/**
 * Sets a timeout callback.
 * @param {function} timeoutCallback The callback function to be invoked.
 * @private
 */
window.accountchooser.rpc.setTimeoutCallback_ = function(
    timeoutCallback) {
  window.accountchooser.param.notEmptyFunction(timeoutCallback,
      'timeoutCallback');
  window.accountchooser.rpc.clearTimeoutCallback_();
  var cb = function() {
    if (window.accountchooser.rpc.timer_.callback) {
      window.accountchooser.rpc.timer_.callback.call(window);
    }
    window.accountchooser.rpc.timer_.running = false;
    window.accountchooser.rpc.timer_.id = 0;
    window.accountchooser.rpc.timer_.callback = null;
  };
  window.accountchooser.rpc.timer_.callback = timeoutCallback;
  window.accountchooser.rpc.timer_.id = window.setTimeout(
      cb, window.accountchooser.rpc.IDP_TIMEOUT);
  window.accountchooser.rpc.timer_.running = true;
};

/**
 * Initializes a IDP IFrame.
 * @param {string} idp the id the IDP.
 * @private
 */
window.accountchooser.rpc.initIdpIFrame_ = function(idp) {
  if (!idp || !window.accountchooser.rpc.idps[idp]) {
    window.accountchooser.util.log('Unsupported IDP \'' + idp +
        '\'.');
    return;
  }
  if (!window.accountchooser.rpc.idps[idp].iframeUrl) {
    window.accountchooser.util.log(
        'Failed to init IDP iframe for \'' + idp + '\': no valid iframeUrl.');
    return;
  }
  var idpConfig = window.accountchooser.rpc.idps[idp];
  window.accountchooser.rpc.initIdpIFrameByConfig_(idpConfig);
};

/**
 * Initializes a IDP IFrame.
 * @param {object} idpConfig the configuration of the IDP.
 * @private
 */
window.accountchooser.rpc.initIdpIFrameByConfig_ =
    function(idpConfig) {
  if (!idpConfig) {
    return;
  }
  if (!idpConfig.iframe) {
    var iframe = jQuery('<iframe />').css('position', 'absolute').
        css('width', '1px').css('height', '1px').css('left', '-9999px').
        appendTo('body');
    idpConfig.iframe = iframe;
    iframe.attr('src', idpConfig.iframeUrl);
  }
};

/**
 * The event handler for IdpReadyNotification.
 * @param {string} domain the IDP domain.
 * @private
 */
window.accountchooser.rpc.onIdpReady_ = function(domain) {
  if (!domain ||
      !window.accountchooser.rpc.idpsIndexedByDomain[domain]) {
    window.accountchooser.util.log('Unsupported IDP domain \'' +
        domain + '\'.');
    return;
  }
  var idpConfig =
      window.accountchooser.rpc.idpsIndexedByDomain[domain];
  if (!idpConfig.iframe) {
    window.accountchooser.util.log(
        'Illegal state error: IDP domain \'' + domain +
        '\' has\'t initialized yet.');
    return;
  }
  var w = idpConfig.iframe[0].contentWindow;
  if (idpConfig.queue && idpConfig.queue.length) {
    for (var i = 0; i < idpConfig.queue.length; i++) {
      window.accountchooser.rpc.call(w, idpConfig.queue[i]);
    }
    idpConfig.queue = [];
  }
  idpConfig.idpReady = true;
};

/**
 * Sends a Request to an IDP.
 * @param {string} idp The id of the IDP.
 * @param {Request} request The Request to send.
 * @param {function} callback The callback function to be invoked after returned
 *     from IDP.
 * @param {function} timeout The callback function to be invoked if no IDP
 *     response returned till timeout.
 */
window.accountchooser.rpc.callIdp = function(idp, request,
    callback, timeout) {
  if (idp && window.accountchooser.rpc.idps[idp]) {
    var idpConfig = window.accountchooser.rpc.idps[idp];
    window.accountchooser.rpc.callIdpByConfig(idpConfig, request,
        callback, timeout);
  }
};

/**
 * Sends a Request to an IDP by its domaion.
 * @param {string} domain The domain name of the IDP.
 * @param {Request} request The Request to send.
 * @param {function} callback The callback function to be invoked after returned
 *     from IDP.
 * @param {function} timeout The callback function to be invoked if no IDP
 *     response returned till timeout.
 */
window.accountchooser.rpc.callIdpByDomain = function(domain,
    request, callback, timeout) {
  if (domain &&
      window.accountchooser.rpc.idpsIndexedByDomain[domain]) {
    var idpConfig =
        window.accountchooser.rpc.idpsIndexedByDomain[domain];
    window.accountchooser.rpc.callIdpByConfig(idpConfig, request,
        callback, timeout);
  }
};

/**
 * Sends a Request to an IDP by its domaion.
 * @param {object} idpConfig The configuration object of the IDP.
 * @param {Request} request The Request to send.
 * @param {function} callback The callback function to be invoked after returned
 *     from IDP.
 * @param {function} timeout The callback function to be invoked if no IDP
 *     response returned till timeout.
 */
window.accountchooser.rpc.callIdpByConfig = function(idpConfig,
    request, callback, timeout) {
  window.accountchooser.param.notEmpty(idpConfig, 'idpConfig');
  window.accountchooser.param.notEmpty(request, 'request');
  window.accountchooser.param.notEmptyFunction(callback,
      'callback');
  window.accountchooser.param.notEmptyFunction(timeout,
      'timeout');
  window.accountchooser.rpc.setTimeoutCallback_(timeout);
  window.accountchooser.rpc.addIdpCallback_(idpConfig, request,
      callback);
  if (!idpConfig.idpReady) {
    if (!idpConfig.queue) {
      idpConfig.queue = [];
    }
    idpConfig.queue.push(request);
    if (!idpConfig.iframe) {
      window.accountchooser.rpc.initIdpIFrameByConfig_(
          idpConfig);
    }
  } else {
    var w = idpConfig.iframe[0].contentWindow;
    window.accountchooser.rpc.call(w, request);
  }
};

/**
 * All the pending callbacks with IDPs
 * @private
 */
window.accountchooser.rpc.callIdpByConfig.callbacks_ = {};

/**
 * Registers a callback function for a IdpAuthRequest.
 * @param {Object} idpConfig The configuration object of the IDP.
 * @param {window.accountchooser.rpc.Request} request
 *     The request sent to the IDP.
 * @param {function} callback The callback function to be invoked upon a
 *     response is returned.
 * @private
 */
window.accountchooser.rpc.addIdpCallback_ = function(idpConfig,
    request, callback) {
  window.accountchooser.rpc.callIdpByConfig.
      callbacks_[idpConfig.domain + ':' + request.getId()] = {
    callback: callback,
    idpConfig: idpConfig
  };
};

/**
 * Gets the callback for the response from the IDP.
 * @param {string} domain The domain of the IDP.
 * @param {window.accountchooser.rpc.Response} response
 *     The response returned from the IDP.
 * @return {function} The callback for the response.
 * @private
 */
window.accountchooser.rpc.getIdpCallback_ = function(domain,
    response) {
  var key = domain + ':' + response.getId();
  var callback =
      window.accountchooser.rpc.callIdpByConfig.callbacks_[key];
  if (callback) {
    delete
      window.accountchooser.rpc.callIdpByConfig.callbacks_[key];
    return callback.callback;
  }
};

/**
 * Checks if the CDS-IDP communication is supported for an account's IDP.
 * @param {object} account The account entry to be checked.
 * @return {boolean} whether CDS-IDP communication is supported.
 */
window.accountchooser.rpc.isSupportedIdp = function(account) {
  if (account) {
    var domain = account.providerId ||
        window.accountchooser.util.getEmailDomain(account.email);
    if (domain) {
      var idp = window.accountchooser.rpc.emailMapIdp[domain];
      if (idp && window.accountchooser.rpc.idps[idp]) {
        return idp;
      }
    }
  }
  return false;
};


/** The exception thrown when saved RPC is empty */
window.accountchooser.rpc.EMPTY_SAVED_RPC = 'EMPTY_SAVED_RPC';

/** The exception thrown when CDS got an invalid domain */
window.accountchooser.rpc.INVALID_CLIENT_DOMAIN =
    'INVALID_CLIENT_DOMAIN';

/** whether popup mode is used currently? */
window.accountchooser.rpc.popupMode = false;

/** the window object for CDS client */
window.accountchooser.rpc.clientWindow = null;

/**
 * Parses the domain name for the hash part in the URL.
 * <br>The hash is used to pass the client domain in redirect mode.
 * @return {string} The domain name in the hash part in the URL.
 * @private
 */
window.accountchooser.rpc.getDomainInHash_ = function() {
  if (window.location.hash) {
    var hash = window.location.hash;
    if (hash && hash[0] == '#') {
      hash = hash.substring(1);
    }
    return hash;
  }
};

/**
 * Triggers the saved RPC objects after the CDS page is loaded.
 * <br>In redirect mode, the RPC object is saved before redirecting. Then
 * after redirected to CDS page, the saved RPC will be triggered again so that
 * CDS server can handle them.
 * @throws {string} EMPTY_SAVED_RPC when no saved RPC.
 * @private
 */
window.accountchooser.rpc.triggerSavedRpcs_ = function() {
  if (window.accountchooser.rpc.popupMode) {
    return;
  }
  var rpcs = window.accountchooser.rpc.readSavedRpcObjects(
      window.accountchooser.rpc.clientDomain_, true);
  if (rpcs && rpcs.length) {
    for (var i = 0; i < rpcs.length; i++) {
      var rpc = {
        data: rpcs[i],
        origin: window.accountchooser.rpc.clientDomain_
      };
      window.accountchooser.rpc.process_(rpc, true);
    }
  } else {
    throw window.accountchooser.rpc.EMPTY_SAVED_RPC;
  }
};

/**
 * Sends notification to opener window.
 * <br>In popup mode, the CDS server will send a CdsReadyNotification to CDS
 * client after it is ready to accept messages.
 * <br>Note: when post messge for CdsReadyNotification, '*' is used instead of
 * a specific client domain. The reason is the popup window doesn't know the
 * client domain at that time. This shouldn't be a security issue, since no
 * other data inclued in the notification.
 * @private
 */
window.accountchooser.rpc.sendCdsReadyNotification_ =
    function() {
  if (window.accountchooser.rpc.popupMode) {
    var notification =
        new window.accountchooser.rpc.CdsReadyNotification();
    window.accountchooser.rpc.clientWindow.postMessage(
        notification.toString(), '*');
  }
};

/**
 * Handler for postMessage event.
 * @param {EventObject} e the message event object.
 * @param {boolean} fromSaved whether this event is triggered from saved RPCs.
 * @private
 */
window.accountchooser.rpc.process_ = function(e, fromSaved) {
  window.accountchooser.util.log('Received message: ' + e.data +
      ' from ' + e.origin);
  var domain = e.origin.replace(/^https?:\/\//, '');
  var request = window.accountchooser.rpc.parseRpcObject(e.data);
  if (!request) {
    window.accountchooser.util.log(
        'Error request format: ' + e.data);
    return;
  }
  if (request instanceof
      window.accountchooser.rpc.ManageRequest && !fromSaved) {
    window.accountchooser.util.log('Illegal request: ' + e.data);
    return;
  }
  if (request instanceof
      window.accountchooser.rpc.IdpReadyNotification) {
    window.accountchooser.rpc.onIdpReady_(domain);
    return;
  }
  if (request instanceof window.accountchooser.rpc.Response) {
    window.accountchooser.rpc.clearTimeoutCallback_();
    var callback = window.accountchooser.rpc.getIdpCallback_(
        domain, request);
    if (callback) {
      callback.call(window, request, e.origin, callback.context);
    } else {
      window.accountchooser.util.log(
          'Failed to find callback for response: ' + e.data);
    }
    return;
  }
  if (!(request instanceof window.accountchooser.rpc.Request)) {
    window.accountchooser.util.log(
        'Unrecognized request: ' + e.data);
    return;
  }
  // RPC call from CDS Client
  // Check callback URL domain first.
  if (!window.accountchooser.rpc.checkCallbackDomain_(
      request, domain)) {
    return;
  }
  var handler = window.accountchooser.rpc.
      services_['serviceLoader'];
  if (!handler) {
    window.accountchooser.util.log('No RPC handler for \'' +
        request.getMethod() + '\' found!');
    return;
  }
  if ((request instanceof window.accountchooser.rpc.Request) &&
      !fromSaved) {
    var ack = new window.accountchooser.rpc.
        RequestAckNotification(request.getId());
    window.parent.postMessage(ack.toString(), e.origin);
  }
  handler(request, e.origin);
};

/**
 * Checks whether the callback URL is from the same domain of the calling site.
 * @param {Request} request The request sent from the calling site.
 * @param {string} domain The domain of the calling site.
 * @return {boolean} True if the callback matches the domain. False otherwise.
 * @private
 */
window.accountchooser.rpc.checkCallbackDomain_ = function(
    request, domain) {
  var callbackUrls = [
      request.params_.clientConfig.clientCallbackUrl,
      request.params_.clientConfig.positiveCallbackUrl,
      request.params_.clientConfig.negativeCallbackUrl
  ];
  for (var i = 0; i < callbackUrls.length; i++) {
    var callbackUrl = callbackUrls[i];
    if (!callbackUrl) {
      continue;
    }
    if (!window.accountchooser.util.isValidSchemeUrl(
        callbackUrl)) {
      window.accountchooser.util.log(
          'Invalid scheme for callbackUrl: "' + callbackUrl + '".');
      return false;
    }
    var callbackDomain = window.accountchooser.util.
        getDomainFromUrl(callbackUrl);
    if (callbackDomain != domain) {
      window.accountchooser.util.log(
          'Invalid domain for callbackUrl: "' + callbackUrl + '".');
      return false;
    }
  }
  return true;
};

/**
 * Initializes the CDS server's IDP configuration.
 * @param {Object} idps The IDP configuration.
 * @param {Object} emailMapIdp The mapping between an email domain and an IDP.
 * @return {Array.<string>} The list of IDPs which need to be preloaded.
 * @private
 */
window.accountchooser.rpc.initIdp_ = function(idps,
    emailMapIdp) {
  var preloadIdps = [];
  if (idps) {
    for (var idp in idps) {
      window.accountchooser.param.notEmpty(idps[idp].iframeUrl,
          'iframeUrl');
      var iframeUrl = idps[idp].iframeUrl;
      var domain = window.accountchooser.util.getDomainFromUrl(
          iframeUrl);
      window.accountchooser.param.notEmpty(domain, 'domain');
      var idpConfig = {
        id: idp,
        domain: domain,
        iframe: null,
        iframeUrl: iframeUrl,
        queue: [],
        idpReady: false
      };
      window.accountchooser.rpc.idps[idp] = idpConfig;
      window.accountchooser.rpc.idpsIndexedByDomain[domain] =
          idpConfig;
      if (idps[idp].preload) {
        preloadIdps.push(idp);
      }
    }
  }
  if (emailMapIdp) {
    for (var emailDomain in emailMapIdp) {
      var idp = emailMapIdp[emailDomain];
      if (!idp) {
        window.accountchooser.util.log('Invalid value for' +
            ' \'options.emailMapIdp["' + emailDomain + '"]\'.');
        continue;
      }
      if (!window.accountchooser.rpc.idps[idp]) {
        window.accountchooser.util.log('Invalid value for' +
            ' \'options.emailMapIdp.["' + emailDomain + '"]\', not exist.');
        continue;
      }
      window.accountchooser.rpc.emailMapIdp[emailDomain] = idp;
    }
  }
  return preloadIdps;
};

/**
 * Initializes the CDS server with given configuration parameters. See
 * below example for options:
 * <pre>
 * {
 *   popupMode: true/false,  //default is false, that is, redirect mode.
 *   idps: {
 *     idp: {
 *       iframeUrl: '',      //The URL of the IDP IFrame.
 *       preload: true/false //default is false
 *     },
 *   },
 *   emailMapIdp: {
 *     emailDomain: idp
 *   }
 * }
 * </pre>
 * @param {Object} options configuration parameters of the CDS server.
 * @throws {string} INVALID_CLIENT_DOMAIN if no valid client domain found
 *     in URL hash.
 */
window.accountchooser.rpc.initCds = function(options) {
  var preloadIdps;
  if (options) {
    if (options.rpcs) {
      for (var rpc in options.rpcs) {
        window.accountchooser.rpc.register(rpc,
            options.rpcs[rpc]);
      }
    }
    preloadIdps = window.accountchooser.rpc.initIdp_(
        options.idps, options.emailMapIdp);
  }
  if (options && options.popupMode) {
    window.accountchooser.rpc.popupMode = true;
    window.accountchooser.rpc.clientWindow = window.opener;
  } else {
    window.accountchooser.rpc.popupMode = false;
    var domain = window.accountchooser.rpc.getDomainInHash_();
    if (!domain) {
      window.accountchooser.util.log(
          'Failed to get client domain in URL hash.');
      throw window.accountchooser.rpc.INVALID_CLIENT_DOMAIN;
    }
    window.accountchooser.rpc.clientDomain_ = domain;
  }
  window.accountchooser.rpc.init_(
      window.accountchooser.rpc.process_);
  if (window.accountchooser.rpc.popupMode) {
    window.accountchooser.rpc.sendCdsReadyNotification_();
  }
  if (preloadIdps && preloadIdps.length) {
    for (var i = 0; i < preloadIdps.length; i++) {
      window.accountchooser.rpc.initIdpIFrame_(preloadIdps[i]);
    }
  }
  if (options && !options.popupMode) {
    window.accountchooser.rpc.triggerSavedRpcs_();
  }
};

/**
 * Sends an RPC object to CDS client.
 * @param {RpcObject} rpcObject The RPC object.
 */
window.accountchooser.rpc.callClient = function(rpcObject) {
  window.accountchooser.param.notEmpty(rpcObject, 'rpcObject');
  window.accountchooser.util.log(
      'Send message: ' + rpcObject.toString());
  if (window.accountchooser.rpc.popupMode) {
    window.accountchooser.rpc.clientWindow.postMessage(
        rpcObject.toString(), '*');
  } else if (window.accountchooser.rpc.clientDomain_) {
    window.accountchooser.rpc.saveRpcObject(
        window.accountchooser.rpc.clientDomain_, rpcObject,
        false);
  } else {
    window.accountchooser.util.log(
        'CallClient failed: cannot find client window.');
  }
};


/**
 * Creates an UI loader.
 * @constructor
 */
window.accountchooser.UiLoader = function() {
};

/**
 * Finds a configuration entry according to current method of the request and
 * expected language. Below is an example for the configuration object:
 * <pre>
 * {
 *   store: {name: 'window.cds.StoreService', ....},
 *   select: {name: 'window.cds.SelectService', ....},
 *   zh_cn: {
 *     store: {name: 'window.cds.StoreService', ....}
 *   }
 * }
 * </pre>
 * @param {Object} services The configuration object for the service.
 * @param {string} method The RPC method of the request.
 * @param {string=} opt_language The expected language.
 * @return {Object} the configuration entry found.
 * @private
 */
window.accountchooser.UiLoader.prototype.findServiceByLanguage_ =
    function(services, method, opt_language) {
  if (!services) {
    return null;
  }
  if (opt_language && services[opt_language] &&
      services[opt_language][method]) {
    return services[opt_language][method];
  }
  return services[method];
};

/**
 * Finds a configuration entry according to current request, from a mobile agent
 * and expected language. Below is an example for the configuration object:
 * <pre>
 * {
 *   web: {
 *     store: {name: 'window.cds.StoreService', ....},
 *     select: {name: 'window.cds.SelectService', ....},
 *     zh_cn: {
 *       store: {name: 'window.cds.StoreService', ....}
 *     }
 *   },
 *   mobile: {
 *     store: {name: 'window.cds.StoreService', ....}
 *   }
 * }
 * </pre>
 * @param {rpc.Request} request Current request to handle.
 * @param {Object} services The configuration object for the service.
 * @param {boolean} opt_mobile Whether the request is from an mobile agent.
 * @param {string=} opt_language The expected language.
 * @return {Object} the configuration entry found.
 * @private
 */
window.accountchooser.UiLoader.prototype.findService_ = function(
    request, services, opt_mobile, opt_language) {
  var service = null;
  if (services) {
    var method = request.getMethod();
    if (opt_mobile && services.mobile) {
      service = this.findServiceByLanguage_(services.mobile, method,
          opt_language);
    }
    if (!service) {
      service = this.findServiceByLanguage_(services.web, method, opt_language);
    }
  }
  return service;
};

/**
 * Really loads a service UI resource from the Web. Only called when target
 * resource is not loaded before.
 * @param {Object} serviceMeta The configuration object for the service.
 * @param {function} done The callback function after loaded resource.
 */
window.accountchooser.UiLoader.prototype.loadServiceFromWeb =
    function(serviceMeta, done) {
  throw 'Unimplementated! Child object must provide an implementation.';
};

/**
 * Whether the resource has been loaded before.
 * @param {Object} serviceMeta The configuration object for the service.
 * @return {boolean} Whether the resource has been loaded before.
 */
window.accountchooser.UiLoader.prototype.isServiceLoaded =
    function(serviceMeta) {
  return false;
};

/**
 * Marks the target resource as loaded.
 * @param {Object} serviceMeta The configuration object for the service.
 */
window.accountchooser.UiLoader.prototype.setServiceLoaded =
    function(serviceMeta) {
};

/**
 * Before handle a request, make sure target service UI is loaded, and invoke
 * the callback function after loaded.
 * @param {rpc.Request} request Current request to handle.
 * @param {Object} services The configuration object for the service.
 * @param {function} callback The function to be invoked after loaded.
 */
window.accountchooser.UiLoader.prototype.loadService = function(
    request, services, callback) {
  var mobile = window.accountchooser.util.isMobileAgent(
      navigator.userAgent);
  var language = request && request.params_ && request.params_.clientConfig &&
      request.params_.clientConfig.language;
  var originalMeta = this.findService_(request, services, mobile, language);
  window.accountchooser.param.notEmpty(originalMeta,
      'serviceMeta');
  window.accountchooser.param.notEmpty(originalMeta.name,
      'serviceMeta.name');
  var serviceMeta = jQuery.extend({}, originalMeta,
      {mobile: !!mobile, language: language});

  if (!!this.isServiceLoaded(serviceMeta)) {
    var constructor = window.accountchooser.util.
        getNamespacedObjectByString(serviceMeta.name);
    window.accountchooser.param.notEmpty(constructor,
        serviceMeta.name);
    callback(constructor);
  } else {
    var self = this;
    var done = function() {
      self.setServiceLoaded(serviceMeta);
      var constructor = window.accountchooser.util.
          getNamespacedObjectByString(serviceMeta.name);
      window.accountchooser.param.notEmpty(constructor,
          serviceMeta.name);
      callback(constructor);
    };
    this.loadServiceFromWeb(serviceMeta, done);
  }
};


/**
 * Creates a URL-based UI loader.
 * @constructor
 */
window.accountchooser.UrlUiLoader = function() {
};
window.accountchooser.UrlUiLoader.inheritsFrom(
    window.accountchooser.UiLoader);

/**
 * Computes a URL for javascript file according to the configuration.
 * @param {Object} serviceMeta The configuration object for the service.
 * @return {string} The URL string.
 */
window.accountchooser.UrlUiLoader.prototype.getJsFileUrl =
    function(serviceMeta) {
  throw 'Unimplementated! Child object must provide an implementation.';
};

/**
 * Computes a URL for CSS file according to the configuration.
 * @param {Object} serviceMeta The configuration object for the service.
 * @return {string} The URL string.
 */
window.accountchooser.UrlUiLoader.prototype.getCssFileUrl =
    function(serviceMeta) {
  throw 'Unimplementated! Child object must provide an impelementation.';
};

/**
 * Checkes if the file is loaded.
 * @param {string} url file URL.
 * @return {boolean} {@code true} if loaded.
 */
window.accountchooser.UrlUiLoader.prototype.isFileLoaded =
    function(url) {
  throw 'Unimplementated! Child object must provide an impelementation.';
};

/**
 * Removes old CSS link tag specified.
 */
window.accountchooser.UrlUiLoader.prototype.removeOldCss =
    function() {
  throw 'Unimplementated! Child object must provide an impelementation.';
};

/**
 * Removes old javascript script tag specified.
 */
window.accountchooser.UrlUiLoader.prototype.removeOldJs =
    function() {
  throw 'Unimplementated! Child object must provide an impelementation.';
};

/**
 * Really loads a service UI resource from the Web. Only called when target
 * resource is not loaded before.
 * @param {Object} serviceMeta The configuration object for the service.
 * @param {function} done The callback function after loaded the resource.
 */
window.accountchooser.UrlUiLoader.prototype.loadServiceFromWeb =
    function(serviceMeta, done) {
  var self = this;
  var loadJs = function() {
    var jsUrl = self.getJsFileUrl(serviceMeta);
    if (self.isFileLoaded(jsUrl)) {
      done();
    } else {
      var jsLoader = new window.accountchooser.loader.JsLoader();
      jsLoader.load(jsUrl, null, function() {
        self.removeOldJs();
        done();
      });
    }
  }
  // Load CSS first.
  var cssUrl = this.getCssFileUrl(serviceMeta);
  if (this.isFileLoaded(cssUrl)) {
    loadJs();
  } else {
    var cssLoader = new window.accountchooser.loader.CssLoader();
    cssLoader.load(cssUrl, null, function() {
      self.removeOldCss();
      loadJs();
    });
  }
};


/**
 * Creates a URL-template-based UI loader.
 * @param {string} jsUrlTemplate The URL template for javascript. The place
 *     holders '{language}' and '{baseFilename}' will be replaced to create
 *     actually URL.
 * @param {string} cssUrlTemplate The URL template for CSS. The placeholder
 *     '{baseFilename}' will be replaced to create actually URL.
 * @param {string=} opt_defaultLanguage The default language used to fill in the
 *     URL template if no language is provided. If it's not specified or not
 *     supproted, the default language is set to 'en'.
 * @constructor
 */
window.accountchooser.UrlTemplateUiLoader = function(
    jsUrlTemplate, cssUrlTemplate, opt_defaultLanguage) {
  this.jsUrlTemplate_ = jsUrlTemplate;
  this.cssUrlTemplate_ = cssUrlTemplate;
  this.defaultLanguage_ = window.accountchooser.util.
      findLanguageCode(opt_defaultLanguage) || 'en';
  this.jsUrl_ = null;
  this.cssUrl_ = null;
};
window.accountchooser.UrlTemplateUiLoader.inheritsFrom(
    window.accountchooser.UrlUiLoader);

/**
 * Computes a URL for javascript file according to the configuration.
 * @param {Object} serviceMeta The configuration object for the service.
 * @return {string} The URL string.
 */
window.accountchooser.UrlTemplateUiLoader.prototype.
    getJsFileUrl = function(serviceMeta) {
  var language = this.getLanguage_(serviceMeta.language);
  return this.jsUrlTemplate_.
      replace(/\{baseFilename\}/, serviceMeta.baseFilename).
      replace(/\{language\}/, language);
};

/**
 * Computes a URL for CSS file according to the configuration.
 * @param {Object} serviceMeta The configuration object for the service.
 * @return {string} The URL string.
 */
window.accountchooser.UrlTemplateUiLoader.prototype.
    getCssFileUrl = function(serviceMeta) {
  var baseFilename = serviceMeta.cssBaseFilename;
  return this.cssUrlTemplate_.replace(/\{baseFilename\}/, baseFilename);
};

/**
 * Checkes if the file is loaded.
 * @param {string} url file URL.
 * @return {boolean} {@code true} if loaded.
 */
window.accountchooser.UrlTemplateUiLoader.prototype.
    isFileLoaded = function(url) {
  return !!this.findTag_(url);
};

/**
 * Whether the resource has been loaded before.
 * @param {Object} serviceMeta The configuration object for the service.
 * @return {boolean} Whether the resource has been loaded before.
 */
window.accountchooser.UrlTemplateUiLoader.prototype.
    isServiceLoaded = function(serviceMeta) {
  return this.isFileLoaded(this.getJsFileUrl(serviceMeta)) &&
      this.isFileLoaded(this.getCssFileUrl(serviceMeta));
};

/**
 * Marks the target resource as loaded.
 * @param {Object} serviceMeta The configuration object for the service.
 */
window.accountchooser.UrlTemplateUiLoader.prototype.
    setServiceLoaded = function(serviceMeta) {
  this.jsUrl_ = this.getJsFileUrl(serviceMeta);
  this.cssUrl_ = this.getCssFileUrl(serviceMeta);
};

/**
 * Really loads a service UI resource from the Web. Only called when target
 * resource is not loaded before.
 * @param {Object} serviceMeta The configuration object for the service.
 * @param {function} done The callback function after loaded the resource.
 */
window.accountchooser.UrlTemplateUiLoader.prototype.
    loadServiceFromWeb = function(serviceMeta, done) {
  var self = this;
  window.accountchooser.UrlUiLoader.prototype.loadServiceFromWeb.
      call(self, serviceMeta, function() {
    done();
    var body = document.getElementsByTagName('body')[0] ||
        document.body;
    var className = body.getAttribute('class') || '';
    if (self.isRightToLeft_(serviceMeta)) {
      body.dir = 'rtl';
      className += ' rtl';
    } else {
      body.dir = 'ltr';
      className = className.replace(/rtl/g, '');
    }
    body.setAttribute('class', className);
  });
};

/**
 * Removes old script or link tag specified by the URL.
 * @param {string} url The URL to match.
 * @private
 */
window.accountchooser.UrlTemplateUiLoader.prototype.
    removeOldTag_ = function(url) {
  var tag = this.findTag_(url);
  if (tag) {
    tag.parentNode.removeChild(tag);
  }
};

/**
 * Removes old CSS link tag specified.
 */
window.accountchooser.UrlTemplateUiLoader.prototype.
    removeOldCss = function() {
  this.removeOldTag_(this.cssUrl_);
};

/**
 * Removes old javascript script tag specified.
 */
window.accountchooser.UrlTemplateUiLoader.prototype.
    removeOldJs = function() {
  this.removeOldTag_(this.jsUrl_);
};

/**
 * Finds the script or link tag which matches the given URL.
 * @param {string?} url The URL to match.
 * @return {Element=} The matched DOM element.
 * @private
 */
window.accountchooser.UrlTemplateUiLoader.prototype.findTag_ =
    function(url) {
  if (url) {
    var head = document.getElementsByTagName('head')[0] ||
        document.documentElement;
    var children = head.childNodes;
    for (var i = 0, length = children.length; i < length; i++) {
      var element = children.item(i);
      var tagName = element.nodeName.toLowerCase();
      if ((tagName == 'script' && element.getAttribute('src') == url) ||
          (tagName == 'link' && element.getAttribute('href') == url)) {
        return element;
      }
    }
  }
};

/**
 * Gets the language setting. If no language is specified, use default.
 * @param {string=} opt_language The optional language.
 * @return {string} the language code.
 * @private
 */
window.accountchooser.UrlTemplateUiLoader.prototype.
    getLanguage_ = function(opt_language) {
  // If the calling site doesn't specify the language, use the user's browser
  // language instead. NOTE: It is the browser language that is taken into
  // account other than the user's language preference set in the browser.
  // There's no easy way to get it.
  var language = opt_language || window.navigator.language;
  language =
      window.accountchooser.util.findLanguageCode(language) ||
      this.defaultLanguage_;
  return language;
};

/**
 * Check the to be loaded language is RtoL or not.
 * @param {Object} serviceMeta The configuration object for the service.
 * @return {boolean} {@code true} if so.
 * @private
 */
window.accountchooser.UrlTemplateUiLoader.prototype.
   isRightToLeft_ = function(serviceMeta) {
  var language = this.getLanguage_(serviceMeta.language);
  return window.accountchooser.util.isRightToLeft(language);
};


/**
 * Creates a UI loader based on Google AJAX Loader.
 * @constructor
 */
window.accountchooser.AjaxUiLoader = function() {
  this.loadedPackages_ = [];
};
window.accountchooser.AjaxUiLoader.inheritsFrom(
    window.accountchooser.UiLoader);

/**
 * Computes a unique String according to the configuration.
 * @param {object} serviceMeta The configuration object for the service.
 * @return {string} A unique String for the configuration.
 */
window.accountchooser.AjaxUiLoader.prototype.stringify =
    function(serviceMeta) {
  return serviceMeta.module + ':' + serviceMeta.version + ':' +
      serviceMeta.packageName + ':' + serviceMeta.language;
};

/**
 * Really loads a service UI resource from Ajax Loader. Only called when target
 * resource is not loaded before.
 * @param {object} serviceMeta The configuration object for the service.
 * @param {function} done The callback function after loaded the resource.
 */
window.accountchooser.AjaxUiLoader.prototype.loadServiceFromWeb =
    function(serviceMeta, done) {
  google.load(serviceMeta.module, serviceMeta.version, {
    packages: [serviceMeta.packageName],
    language: serviceMeta.language || window.navigator.language,
    callback: done
  });
};

/**
 * Whether the resource has been loaded before.
 * @param {object} serviceMeta The configuration object for the service.
 * @return {boolean} Whether the resource has been loaded before.
 */
window.accountchooser.AjaxUiLoader.prototype.isServiceLoaded =
    function(serviceMeta) {
  var packageString = this.stringify(serviceMeta);
  return jQuery.inArray(packageString, this.loadedPackages_) > -1;
};

/**
 * Marks the target resource as loaded.
 * @param {object} serviceMeta The configuration object for the service.
 */
window.accountchooser.AjaxUiLoader.prototype.setServiceLoaded =
    function(serviceMeta) {
  var packageString = this.stringify(serviceMeta);
  if (jQuery.inArray(packageString, this.loadedPackages_) < 0) {
    this.loadedPackages_.push(packageString);
  }
};

/**
 * Default CDS container UI handler.
 * @constructor
 */
window.accountchooser.UiHandler = function() {
};

/**
 * Simple URL Regex with following rules:<br/>
 * 1) Only allow HTTP/HTTPS schema.
 * 2) Must be an absolute URL (starting with 'http' or 'https').
 * 3) No hash part.
 * @const
 * @private
 */
window.accountchooser.UiHandler.VALID_URL_REGEX_ =
    /^http(s)?:\/\/(localhost|([a-z0-9]([-a-z0-9]*[a-z0-9])?\.)+[a-z0-9]+)(\:\d+)?(\/([^?#]*))?(\?([^#]*))?$/i;

/**
 * Shows the whole container content.
 * @param {Object=} opt_config The configuration object. For example:
 * <pre>
 * {
 *   title: '',                 // browser tab title.
 *   favicon: '',               // favicon URL.
 *   branding: '',              // branding content URL.
 *   cajaMethod: '',            // caja method.
 *   language: '',              // current language.
 *   accounts: [],              // accounts to be stored.
 *   domain: '',                // site domain.
 *   serviceType: '',           // current service type.
 *   onLanguageChanged: null    // callback invoked when language changed.
 * }
 * ...
 * </pre>
 */
window.accountchooser.UiHandler.prototype.show = function(
    opt_config) {
  this.setUp_(opt_config);
  this.showTitle_();
  this.showFavIcon_();
  switch (this.serviceType_) {
    case window.accountchooser.ServiceType.MANAGE:
      this.showManageContent_();
      break;
    case window.accountchooser.ServiceType.SELECT:
      this.showSelectContent_();
      break;
    case window.accountchooser.ServiceType.STORE:
      this.showStoreContent_();
      break;
    case window.accountchooser.ServiceType.UPDATE:
      this.showUpdateContent_();
      break;
    case window.accountchooser.ServiceType.ABOUT:
      this.showAboutContent_();
      break;
  }
  this.showFooterContent_();
  this.initLanguageSelector_();
  // IE9 standard mode fix: force to re-render the page.
  jQuery('body').hide().show();
};

/**
 * Sets up the handler's configuration.
 * @param {Object=} opt_config The configuration object.
 * @private
 */
window.accountchooser.UiHandler.prototype.setUp_ = function(
    opt_config) {
  var config = opt_config || {};
  this.title_ = config.title;
  this.favicon_ = config.favicon;
  this.branding_ = config.branding;
  this.cajaMethod_ = config.cajaMethod;
  this.language_ = config.language || 'en';
  this.accounts_ = config.accounts || [];
  this.domain_ = config.domain;
  this.serviceType_ = config.serviceType;
  this.onLanguageChanged_ = config.onLanguageChanged;
};

/**
 * Shows the title on browser tab if it is provided.
 * @private
 */
window.accountchooser.UiHandler.prototype.showTitle_ =
    function() {
  if (this.title_) {
    document.title = this.title_;
  }
};

/**
 * Shows the favicon on browser tab if it is provided.
 * @private
 */
window.accountchooser.UiHandler.prototype.showFavIcon_ =
    function() {
  if (this.favicon_ &&
      window.accountchooser.UiHandler.VALID_URL_REGEX_.exec(
          this.favicon_)) {
    var head = document.getElementsByTagName('head')[0];
    var links = head.getElementsByTagName('link');
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      if (link.type == 'image/x-icon' && link.rel == 'shortcut icon') {
        head.removeChild(link);
      }
    }
    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = this.favicon_;
    head.appendChild(link);
  }
};

/**
 * Shows the branding content if it is provided.
 * @private
 */
window.accountchooser.UiHandler.prototype.showBrandingContent_ =
    function() {
  var brandingElementId = 'ac-market';
  var display = function(opt_html) {
    var element = jQuery('#' + brandingElementId);
    if (opt_html) {
      element.html(opt_html);
    }
    element.show();
  };

  if (this.branding_ &&
      window.accountchooser.UiHandler.VALID_URL_REGEX_.exec(
          this.branding_)) {
    var url = this.branding_;
    if (url.indexOf('?') == -1) {
      url += '?';
    } else {
      url += '&';
    }
    url += 'lang=' + this.language_;
    if (this.cajaMethod_ == 'cajole') {
      window.accountchooser.caja.cajoleHtml(brandingElementId,
          url, display);
    } else {
      window.accountchooser.caja.sanitizeHtml(url, display);
    }
  }
};

/**
 * Shows the sample account chooser.
 * @private
 */
window.accountchooser.UiHandler.prototype.
    showSampleAccountChooser_ = function() {
  var page = new window.accountchooser.page.SelectAccountPage();
  var sample = jQuery('#sample-accountchooser').empty();
  page.render(sample, this.accounts_, undefined, this.domain_);
};

/**
 * Shows container content for manage service page.
 * @private
 */
window.accountchooser.UiHandler.prototype.showManageContent_ =
    function() {
  jQuery('#manage_marketing_box > h1').html(
      window.accountchooser.labels.manageContainer.header);
  jQuery('#manage_marketing_box > p').html(
      window.accountchooser.labels.manageContainer.description);
};

/**
 * Shows container content for select service page.
 * @private
 */
window.accountchooser.UiHandler.prototype.showSelectContent_ =
    function() {
  var header =
      window.accountchooser.labels.selectContainer.header +
      ' <span>' + this.domain_ + '</span>';
  jQuery('#select_marketing_box > h1').html(header);
  this.showBrandingContent_();
  jQuery('#select_marketing_box').show();
};

/**
 * Shows container content for store service page.
 * @private
 */
window.accountchooser.UiHandler.prototype.showStoreContent_ =
    function() {
  var multiple = this.accounts_ && this.accounts_.length > 1;
  var header =
      window.accountchooser.labels.storeContainer.header;
  var headerMultiple = window.accountchooser.labels.
      storeContainer.headerMultiple;
  jQuery('#store_marketing_box > h1').html(multiple ? headerMultiple : header);
  var description =
      window.accountchooser.labels.storeContainer.description;
  var descriptionMultiple = window.accountchooser.labels.
      storeContainer.descriptionMultiple;
  jQuery('#store_marketing_box > p').html(
      multiple ? descriptionMultiple : description);
  var benefits =
      window.accountchooser.labels.storeContainer.benefits;
  jQuery('ol.benefit-list > li > p').each(function(i, element) {
    if (i < benefits.length) {
      jQuery(element).html(benefits[i]);
    }
  });
  this.showSampleAccountChooser_();
  jQuery('#store_marketing_box').show();
};

/**
 * Shows container content for update service page.
 * @private
 */
window.accountchooser.UiHandler.prototype.showUpdateContent_ =
    function() {
  jQuery('#update_marketing_box > h1').html(
      window.accountchooser.labels.updateContainer.header);
  jQuery('#update_marketing_box > p').html(
      window.accountchooser.labels.updateContainer.description);
  jQuery('#update_marketing_box').show();
};

/**
 * Shows container content for learn more page.
 * @private
 */
window.accountchooser.UiHandler.prototype.showAboutContent_ =
    function() {
  this.title_ =
      window.accountchooser.labels.aboutContainer.title;
  this.showTitle_();
  this.showAboutContainerMessages_('msg_');
  this.accounts_ = this.getAboutContainerSampleAccounts_();
  this.showSampleAccountChooser_();
};

/**
 * Shows the messages in corresponding html elements for learn more page.
 * @param {string} idPrefix the prefix of the container element's id.
 * @private
 */
window.accountchooser.UiHandler.prototype.
    showAboutContainerMessages_ = function(idPrefix) {
  var res = window.accountchooser.labels.aboutContainer;
  // Finds all elements whose id start with the prefix.
  var elements = jQuery('[id^="' + idPrefix + '"]');
  if (!elements || !res) {
    return;
  }
  for (var i = 0; i < elements.length; i++) {
    var element = jQuery(elements[i]);
    // The resource name is element's id without the prefix.
    var resourceName = element.attr('id').replace(idPrefix, '');
    if (res[resourceName]) {
      element.html(res[resourceName]);
    }
  }
};

/**
 * Maximum number of the accounts shown on the learn more page's sample widget.
 * @type {number}
 * @private
 * @const
 */
window.accountchooser.UiHandler.MAX_SAMPLE_ACCOUNTS_COUNT_ = 2;

/**
 * Minimum number of the accounts shown on the learn more page's sample widget.
 * @private
 * @const
 */
window.accountchooser.UiHandler.MIN_SAMPLE_ACCOUNTS_COUNT_ = 2;

/**
 * Gets the accounts stored in CDS for demonstrating on learn more page. If the
 * number of stored accounts is greater than MAX_SAMPLE_ACCOUNTS_COUNT, only
 * MAX_SAMPLE_ACCOUNTS_COUNT accounts returned. If the number of stored accounts
 * is less than MIN_SAMPLE_ACCOUNTS_COUNT_, a default pre-defined account lists
 * is returned.
 * @return {Array.<Object>} a list of accounts for demonstrating on learn more
 *     page.
 * @private
 */
window.accountchooser.UiHandler.prototype.
    getAboutContainerSampleAccounts_ = function() {
  var accounts =
      window.accountchooser.util.accountstorage.readAccounts();
  var max =
      window.accountchooser.UiHandler.MAX_SAMPLE_ACCOUNTS_COUNT_;
  var min =
      window.accountchooser.UiHandler.MIN_SAMPLE_ACCOUNTS_COUNT_;
  var res = window.accountchooser.labels.aboutContainer;
  if (accounts.length > max) {
    return accounts.slice(0, max);
  } else if (accounts.length < min) {
    return [res.accountWomanHome, res.accountWomanWork];
  } else {
    return accounts;
  }
};

/**
 * Shows page footer content.
 * @private
 */
window.accountchooser.UiHandler.prototype.showFooterContent_ =
    function() {
  jQuery('#copyright').html(
      window.accountchooser.labels.footerContainer.copyright);
  var learnMoreLink =
      window.accountchooser.labels.footerContainer.learnMoreLink;
  if (this.language_ && this.language_ != 'en') {
    if (learnMoreLink.indexOf('?') >= 0) {
      learnMoreLink += '&lang=' + this.language_;
    } else {
      learnMoreLink += '?lang=' + this.language_;
    }
  }
  var learnMoreText =
      window.accountchooser.labels.footerContainer.learnMore;
  jQuery('#learnmore').html(learnMoreText).attr('href', learnMoreLink);
};

/**
 * Initialize the language selector.
 * @private
 */
window.accountchooser.UiHandler.prototype.initLanguageSelector_ =
    function() {
  var selector = jQuery('#ac-language');
  selector.unbind('change');
  selector.val(this.language_);
  var self = this;
  selector.change(function() {
    var lang = selector.val();
    if (lang != self.language_ && self.onLanguageChanged_) {
      self.onLanguageChanged_(lang);
    }
  });
};


(function(jQuery) {
  var LEARN_MORE_LINK = '/learnmore.html';

  var widget = {
    /**
     * Widget options defined by jQuery.
     */
    options: {
      popupMode: false,
      manageMode: false,
      aboutMode: false,
      uiLoader: null,
      idps: {},
      emailMapIdp: {},
      uiHandler: new window.accountchooser.UiHandler(),
      enableCajole: false
    },

    /**
     * Dynamically loads a service UI. Actually it will delegate to the UI
     * loader in options.
     * @param {rpc.Request} request Current request to be handled.
     * @param {string} origin The domain that sends the request.
     */
    loadService_: function(request, origin) {
      var self = this;
      var done = function(constructor) {
        self.executeService_(constructor, request, origin);
      };
      this.options.uiLoader.loadService(request, this.options.services, done);
    },

    /**
     * After a service UI is loaded, invoke its method to handle the request.
     * @param {Function} constructor The constructor for the service.
     * @param {rpc.Request} request Current request to be handled.
     * @param {string} origin The domain that sends the request.
     */
    executeService_: function(constructor, request, origin) {
      var serviceImpl = new constructor;
      serviceImpl.setContainer(this.element);
      serviceImpl.setCdsConfig(this.cdsConfig);
      serviceImpl.executeRequest.call(serviceImpl, request);

      this.showCustomizedUI_(request, origin);
    },

    /**
     * Displays customized UI.
     * @param {rpc.Request} request Current request to be handled.
     * @param {string} origin The domain that sends the request.
     * @private
     */
    showCustomizedUI_: function(request, origin) {
      if (!this.options.uiHandler) {
        return;
      }
      var ui = {};
      if (request && request.params_ && request.params_.clientConfig) {
        ui = request.params_.clientConfig.ui || ui;
        // Copy the language setting to ui so that uiHandler can use it.
        ui.language = window.accountchooser.util.
            findLanguageCode(request.params_.clientConfig.language);
        // Check whether 'cajole' is allowed.
        if (!this.options.enableCajole && 'cajole' == ui.cajaMethod) {
          ui.cajaMethod = 'sanitize';
        }
        ui.serviceType = request.getMethod();
        ui.accounts =
            window.accountchooser.util.sanitizeAccounts(
                request.getParameters()['accounts'] || [],
                window.accountchooser.util.accountSanitizer);
        var self = this;
        ui.onLanguageChanged = function(lang) {
          request.params_.clientConfig.language =
              window.accountchooser.util.findLanguageCode(lang);
          self.loadService_(request, origin);
        }
      }
      ui.language = ui.language || 'en';
      ui.domain = origin.replace(/^https?:\/\//, '');
      this.options.uiHandler.show(ui);
    },

    /**
     * Widget life cycle method defined by jQuery.
     */
    _create: function() {
      jQuery(this.element).empty();
      this.cdsConfig = {
        popupMode: this.options.popupMode,
        idps: this.options.idps,
        emailMapIdp: this.options.emailMapIdp
      };
      this.cdsConfig.rpcs = {
        serviceLoader: jQuery.proxy(this.loadService_, this)
      };
      try {
        window.accountchooser.rpc.initCds(this.cdsConfig);
      } catch (e) {
        if ((!this.options.manageMode && !this.options.aboutMode) && (
            e == window.accountchooser.rpc.EMPTY_SAVED_RPC ||
            e == window.accountchooser.rpc.INVALID_CLIENT_DOMAIN
            )) {
          this.redirectEmptyRequest();
        } else if (!this.options.manageMode && !this.options.aboutMode) {
          // Other exception, re-throw
          throw e;
        }
      }
      if (this.options.manageMode) {
        this.showManagePage();
      } else if (this.options.aboutMode) {
        this.showAboutPage();
      }
    },

    redirectEmptyRequest: function() {
      var domain = window.accountchooser.rpc.getDomainInHash_();
      if (domain &&
          window.accountchooser.util.isValidUrlDomain(domain)) {
        // Redirect to client domain.
        window.location.href = 'http://' + domain;
      } else {
        // Redirect to to CDS manage account page.
        window.location.href =
            window.location.protocol + '//' + window.location.host;
      }
    },

    showManagePage: function() {
      var disable = window.accountchooser.util.browserconfig.
          isDisabled();
      var accounts = window.accountchooser.util.accountstorage.
          readAccounts();
      if (disable || !accounts.length) {
        this.showLearnMorePage_();
      } else {
        this.sendFakeRequest_(
            window.accountchooser.rpc.ManageRequest, 'manage');
      }
    },

    showAboutPage: function() {
      this.sendFakeRequest_(
          window.accountchooser.rpc.AboutRequest, 'about');
    },

    sendFakeRequest_: function(constructor, id) {
      var params = window.accountchooser.util.parseUrlParams(
          window.location.href);
      var clientConfig = {
        language: params['lang'],
        clientCallbackUrl: window.location.href
      };
      var request = new constructor(id, clientConfig);
      var e = {
        data: request.toString(),
        origin: window.location.host
      };
      window.accountchooser.rpc.process_(e, true);
    },

    showLearnMorePage_: function() {
      var lang = window.accountchooser.util.parseUrlParams(
          window.location.href)['lang'];
      var url = LEARN_MORE_LINK;
      if (lang) {
        if (url.indexOf('?') >= 0) {
          url += '&lang=' + lang;
        } else {
          url += '?lang=' + lang;
        }
      }
      window.location.replace(url);
    },

    /**
     * Removes this widget. Widget life cycle method defined by jQuery.
     */
    destroy: function() {
      jQuery(this.element).empty();
      jQuery.Widget.prototype.destroy.call(this);
    }
  };

  jQuery.widget('ui.cds', widget);
})(jQuery);

