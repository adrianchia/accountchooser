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

//java/com/google/apps/easyconnect/easyrp/widget/javascript/cdshelper/source.js
window.accountchooser = window.accountchooser || {};
// Copyright 2012 Google Inc. All Rights Reserved.

/**
 * @fileoverview Description of this file.
 * @author mengcheng@google.com (Mengcheng Duan)
 */

/**
 * Namespace alias for CDS.
 * @deprecated This namespace alias is for backward compatability only. It'll be
 * removed in the future. Do not use it.
 */
window.cds = window.accountchooser;
// Copyright 2011 Google Inc. All Rights Reserved.

/**
 * @fileoverview Configuration parameters for the login widget.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * Namespace declaration.
 */
window.accountchooser.config =
    window.accountchooser.config || {};
// Copyright 2012 Google Inc. All Rights Reserved.

/**
 * @fileoverview Default configuration for CDS helper.
 * @author mengcheng@google.com (Mengcheng Duan)
 */

/**
 * Enums for CDS helper modes.
 * @enum {string}
 */
window.accountchooser.config.cdsHelperModes = {
  LOGIN: 'login',
  SIGNUP: 'signup'
};

/** Default IDs for UI elements. */
window.accountchooser.config.uiElementIds = {
  email: 'email',
  password: 'password',
  name: 'displayName',
  photo: 'photoUrl'
};

/** Default login URL. */
window.accountchooser.config.loginUrl = 'account-login';

/** Default sign up URL. */
window.accountchooser.config.signupUrl = 'account-create';

/** Default user status URL. */
window.accountchooser.config.userStatusUrl = 'account-status';

/** Default home URL. */
window.accountchooser.config.loginOkUrl = '/';
// Copyright 2011 Google Inc. All Rights Reserved.

/**
 * @fileoverview A template to set configuration parameters. A widget should
 * overwrite some of the methods that starts with 'setWidget' to actually
 * support these configuration parameters.
 * @author guibinkong@google.com (Guibin Kong)
 * @author mengcheng@google.com (Mengcheng Duan)
 */

/**
 * This method is the entry point to change the configuration parameters of a
 * widget.
 * <p>This method lists all supported parameter names, which are
 * case-insensitive. The default behavior when changing a config is to write a
 * log to the browser console. (With the exception 'developerKey', 'returnToUrl'
 * , and 'companyName', which will do the real work here.)
 * <p>A widget should override some of the methods that starts with 'setWidget'
 * to actually support these configuration parameters.
 * @param {Object} config The configuration parameter key-value pairs.
 */
window.accountchooser.config.setConfig = function(config) {
  if (config) {
    for (var key in config) {
      var value = config[key];
      // Uses lower case for error-tolerance
      var lowerCaseKey = key.toLowerCase();
      switch (lowerCaseKey) {
        case 'gitclient': {
          window.accountchooser.config.setWidgetGitClient_(value,
              key);
          break;
        }
        case 'apiversion': {
          window.accountchooser.config.setApiVersion_(value,
              key);
          break;
        }
        case 'developerkey': {
          window.accountchooser.config.setDeveloperKey_(value,
              key);
          break;
        }
        case 'supportlegacyusername': {
          window.accountchooser.config.setSupportLegacyUsername_(
              value, key);
          break;
        }
        case 'checkusernameformat': {
          window.accountchooser.config.setCheckUsernameFormat_(
              value, key);
          break;
        }
        case 'usernameregex': {
          window.accountchooser.config.setUsernameRegex_(value,
              key);
          break;
        }
        case 'usecontextparam': {
          window.accountchooser.config.setUseContextParam_(value,
              key);
          break;
        }
        case 'language': {
          window.accountchooser.config.setLanguage_(value, key);
          break;
        }
        //TODO(guibinkong): remove returntourl when docs changed.
        case 'returntourl':
        case 'callbackurl': {
          window.accountchooser.config.setCallbackUrl_(value,
              key);
          break;
        }
        case 'realm': {
          window.accountchooser.config.setRealm_(value,
              key);
          break;
        }
        case 'companyname': {
          window.accountchooser.config.setCompanyName_(value,
              key);
          break;
        }
        case 'width': {
          window.accountchooser.config.setWidgetWidth(value,
              key);
          break;
        }
        case 'loginurl': {
          window.accountchooser.config.setWidgetLoginUrl(value,
              key);
          break;
        }
        case 'userstatusurl': {
          window.accountchooser.config.setWidgetUserStatusUrl(
              value, key);
          break;
        }
        case 'signupurl': {
          window.accountchooser.config.setWidgetSignupUrl(value,
              key);
          break;
        }
        case 'federatedsignupurl': {
          window.accountchooser.config.
              setWidgetFederatedSignupUrl(value, key);
          break;
        }
        case 'homeurl': {
          window.accountchooser.config.setWidgetHomeUrl(value,
              key);
          break;
        }
        case 'forgoturl': {
          window.accountchooser.config.setWidgetForgotUrl(value,
              key);
          break;
        }
        case 'accountchooserpageurl': {
          window.accountchooser.config.
              setWidgetAccountChooserPageUrl(value, key);
          break;
        }
        case 'logouturl': {
          window.accountchooser.config.setWidgetLogoutUrl(value,
              key);
          break;
        }
        case 'logouthandler': {
          window.accountchooser.config.setWidgetLogoutHandler(
              value, key);
          break;
        }
        case 'idps': {
          window.accountchooser.config.setWidgetIdps(value,
              key);
          break;
        }
        // Set the properties for exited IDPs or add new IDP. For new IDPs,
        // lable, image and domain are required fields. For existed IDPs, the
        // fields provided will be merged with the pre-defined ones.
        // window.accountchooser.setConfig({
        //   ...
        //   idpConfig: {
        //     MockIdp: {         // Add a new IDP called 'MockIdp'
        //       label: '',
        //       image: '',
        //       domain: ''
        //     },
        //     Gmail: {           // Set the OAuth scopes for existed IDP.
        //       scopes: []
        //     },
        //     Yahoo: {
        //       consumerKey: ''  // Set the OAuth consumer key for existed IDP.
        //     }
        //     ...
        //   },
        //   ...
        // });
        case 'idpconfig': {
          window.accountchooser.config.setWidgetIdpConfig(value,
              key);
          break;
        }
        case 'localtabheader': {
          window.accountchooser.config.setWidgetLocalTabHeader(
              value, key);
          break;
        }
        case 'anytabheader': {
          window.accountchooser.config.setWidgetAnyTabHeader(
              value, key);
          break;
        }
        case 'tryfederatedfirst': {
          window.accountchooser.config.
              setWidgetTryFederatedFirst(value, key);
          break;
        }
        case 'usecacheduserstatus': {
          window.accountchooser.config.
              setWidgetUseCachedUserStatus(value, key);
          break;
        }
        case 'showaccountsmenu': {
          window.accountchooser.config.
              setWidgetShowAccountsMenu(value, key);
          break;
        }
        case 'dropdownmenu': {
          window.accountchooser.config.
              setWidgetDrowdownMenu(value, key);
          break;
        }
        case 'sitelogourl': {
          window.accountchooser.config.
              setWidgetSiteLogoUrl(value, key);
          break;
        }
        case 'usefullpageredirect': {
          window.accountchooser.config.
              setWidgetUseFullPageRedirect(value, key);
          break;
        }
        case 'usecds': {
          window.accountchooser.config.setWidgetUseCds(value,
              key);
          break;
        }
        case 'cdsemptyresponsehandler': {
          window.accountchooser.config.
              setCdsEmptyResponseHandler(value, key);
          break;
        }
        case 'cdsclientcallbackurl': {
          window.accountchooser.config.setCdsClientCallbackUrl(
              value, key);
          break;
        }
        case 'cdsuiconfig': {
          window.accountchooser.config.setCdsUiConfig(value,
              key);
          break;
        }
        case 'siteemailid': {
          window.accountchooser.config.setSiteEmailId(value,
              key);
          break;
        }
        case 'sitepasswordid': {
          window.accountchooser.config.setSitePasswordId(value,
              key);
          break;
        }
        case 'sitedisplaynameid': {
          window.accountchooser.config.setSiteDisplayNameId(
              value, key);
          break;
        }
        case 'sitephotourlid': {
          window.accountchooser.config.setSitePhotoUrlId(value,
              key);
          break;
        }
        case 'mode': {
          window.accountchooser.config.setMode(value, key);
          break;
        }
        case 'storeaccount': {
          window.accountchooser.config.setStoredAccount(value,
              key);
          break;
        }
        default: {
          window.accountchooser.config.logUnrecognizedConfig_(
              key);
          break;
        }
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
 * Sets configuration parameter: api version.
 * @param {string} value the parameter value.
 * @param {string} key The name of the configuration parameter.
 * @private
 */
window.accountchooser.config.setApiVersion_ = function(value,
    key) {
  if (window.gapi && window.gapi.client) {
    // Using new gapi client library.
    window.accountchooser.param.notEmpty(value, key);
    window.accountchooser.config.apiVersion = value;
  } else if (window.googleapis) {
    // Using old-fashion googleapis library.
    window.accountchooser.param.notEmpty(value, key);
    window.accountchooser.config.apiVersion = value;
    window.googleapis.setVersions({
      'identitytoolkit': value
    });
  } else {
    window.accountchooser.config.logUnrecognizedConfig_(key);
  }
};

/**
 * Sets configuration parameter: developer key.
 * @param {string} value the parameter value.
 * @param {string} key The name of the configuration parameter.
 * @private
 */
window.accountchooser.config.setDeveloperKey_ = function(value,
    key) {
  // Note that plusone.js just introduces the window.gapi.client namespace but
  // doesn't really include the client.js library. Since we give the workaround
  // that replacing "googleapis.js" with "plusone.js" to the developers, we must
  // make sure when we push the new version using "client.js", we don't break
  // them. In the case that sites only include "plusone.js", we still use
  // old-fashion googleapis library, which is included by "plusone.js".
  if (window.gapi && window.gapi.client && window.gapi.client.setApiKey) {
    // Using new gapi client library.
    window.accountchooser.param.notEmpty(value, key);
    window.gapi.client.setApiKey(value);
  } else if (window.googleapis) {
    // Using old-fashion googleapis library.
    window.accountchooser.param.notEmpty(value, key);
    window.googleapis.setDeveloperKey(value);
  } else {
    window.accountchooser.config.logUnrecognizedConfig_(key);
  }
};

/**
 * Sets configuration parameter: whether treat username as legacy account.
 * @param {string} value the parameter value.
 * @private
 */
window.accountchooser.config.setSupportLegacyUsername_ =
    function(value) {
  window.accountchooser.config.supportLegacyUsername = !!value;
};

/**
 * Sets configuration parameter: strict user name format checking.
 * @param {string} value the parameter value.
 * @private
 */
window.accountchooser.config.setCheckUsernameFormat_ =
    function(value) {
  window.accountchooser.config.disableUsernameFormatCheck =
      !value;
};

/**
 * Sets configuration parameter: the Regex for user name.
 * @param {string} value the Regex for user name.
 * @private
 */
window.accountchooser.config.setUsernameRegex_ =
    function(value) {
  window.accountchooser.config.usernameRegex = value;
};

/**
 * Sets configuration parameter: whether appending extra parameters to the
 * callback URL or putting them into context parameter of the creatAuthUrl API.
 * @param {string} value the parameter value.
 * @private
 */
window.accountchooser.config.setUseContextParam_ = function(
    value) {
  window.accountchooser.config.useContextParam = !!value;
};

/**
 * Sets configuration parameter: the language of the messages.
 * @param {string} value the parameter value.
 * @param {string} key The name of the configuration parameter.
 * @private
 */
window.accountchooser.config.setLanguage_ = function(value,
    key) {
  window.accountchooser.config.language = value;
};

/**
 * Sets configuration parameter: return to URL
 * @param {string} value the parameter value.
 * @param {string} key The name of the configuration parameter.
 * @private
 */
window.accountchooser.config.setCallbackUrl_ = function(value,
    key) {
  window.accountchooser.param.notEmpty(value, key);
  window.accountchooser.config.continueUrl = value;
};

/**
 * Sets configuration parameter: realm
 * @param {string} value the parameter value.
 * @private
 */
window.accountchooser.config.setRealm_ = function(value) {
  window.accountchooser.config.realm = value;
};

/**
 * Sets configuration parameter: company name.
 * @param {string} value the parameter value.
 * @private
 */
window.accountchooser.config.setCompanyName_ = function(value) {
  if (window.accountchooser.labels) {
    window.accountchooser.config.replaceCompanyName_(
        window.accountchooser.labels, value);
  }
};

/**
 * Replaces all the place holder '' to company name.
 * @param {Object} res The resource object.
 * @param {string} companyNameValue The value of the company name.
 * @private
 */
window.accountchooser.config.replaceCompanyName_ = function(res,
    companyNameValue) {
  for (var key in res) {
    var value = res[key];
    if (typeof(value) == 'string') {
      res[key] = value.replace(/\%\%companyName\%\%/g, companyNameValue);
    } else if (typeof(value) == 'object') {
      window.accountchooser.config.replaceCompanyName_(value,
          companyNameValue);
    }
  }
};

/**
 * Sets configuration parameter: Git Client.
 * @param {string} value the parameter value.
 * @param {string} key The name of the configuration parameter.
 * @private
 */
window.accountchooser.config.setWidgetGitClient_ = function(
    value, key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: widget width.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setWidgetWidth = function(value,
    key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: login URL.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setWidgetLoginUrl = function(value,
    key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: sign up URL.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setWidgetSignupUrl = function(
    value, key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: federated sign up URL.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setWidgetFederatedSignupUrl =
    function(value, key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: user status URL.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setWidgetUserStatusUrl = function(
    value, key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: sign up URL.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setWidgetForgotUrl = function(
    value, key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: sign up URL.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setWidgetHomeUrl = function(value,
    key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: nascar IDPs.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setWidgetIdps = function(value,
    key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: IDP configurations.
 * @param {Object} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setWidgetIdpConfig = function(
    value, key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: any tab header.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setWidgetLocalTabHeader = function(
    value, key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: any tab header.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setWidgetAnyTabHeader = function(
    value, key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: tryFederatedFirst.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setWidgetTryFederatedFirst =
    function(value, key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: useCachedUserStatus.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setWidgetUseCachedUserStatus =
    function(value, key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: showAccountsMenu.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setWidgetShowAccountsMenu =
    function(value, key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: log out URL.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setWidgetLogoutUrl = function(value,
    key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: log out handler.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setWidgetLogoutHandler = function(
    value, key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: dropdown menu array.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setWidgetDrowdownMenu = function(
    value, key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: the URL for the logo of the site.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setWidgetSiteLogoUrl = function(
    value, key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: the redirect mode.
 * @param {boolean} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setWidgetUseFullPageRedirect =
    function(value, key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: Whether to use the CDS.
 * @param {boolean} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setWidgetUseCds = function(value,
    key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: hanlder for CDS empty response.
 * @param {function()} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setCdsEmptyResponseHandler =
    function(value, key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: callback url for CDS client.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setCdsClientCallbackUrl = function(
    value, key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: ui configuration for CDS.
 * @param {Object} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setCdsUiConfig = function(value,
    key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: UI element id for email input field.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setSiteEmailId = function(
    value, key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: UI element id for password input field.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setSitePasswordId = function(
    value, key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: UI element id for display name input field.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setSiteDisplayNameId = function(
    value, key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: UI element id for photo URL input field.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setSitePhotoUrlId = function(
    value, key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: mode for the widget.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setMode = function(value, key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Sets configuration parameter: account to be stored.
 * @param {Object} value the parameter value.
 * @param {string} key the parameter name.
 */
window.accountchooser.config.setStoredAccount = function(value,
    key) {
  window.accountchooser.config.logUnrecognizedConfig_(key);
};

/**
 * Shortcut method for
 * {@code window.accountchooser.config.setConfig}
 * @param {Object} config The configuration parameter key-value pairs.
 */
window.accountchooser.setConfig = function(config) {
  window.accountchooser.config.setConfig(config);
};
// Copyright 2011 Google Inc. All Rights Reserved.

/**
 * @fileoverview Defines some common utility functions.
 * @supported Chrome5+, FireFox3.6+, IE8, IE7, and Safari4.0+.
 * @author guibinkong@google.com (Guibin Kong)
 * @author mengcheng@google.com (Mengcheng Duan)
 */

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
// Copyright 2011 Google Inc. All Rights Reserved.

/**
 * @fileoverview Defines utility functions to validate parameter.
 * @author guibinkong@google.com (Guibin Kong)
 * @author mengcheng@google.com (Mengcheng Duan)
 */

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
// Copyright 2011 Google Inc. All Rights Reserved.

/**
 * @fileoverview Defines utility method to extend class.
 *
 * @author guibinkong@google.com (Guibin Kong)
 */

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
// Copyright 2012 Google Inc. All Rights Reserved.

/**
 * @fileoverview Defines class to save/read data to/from storage (i.e., HTML5
 * localStorage and cookie).
 * @author mengcheng@google.com (Mengcheng Duan)
 */

/**
 * @class Local data storage class. The storage takes HTML5 localStorage as the
 * primary storage if the browser supports it and the localStorage key is
 * provided. Otherwise, the cookie is used as the underlying storage if the
 * cookie name is provided.
 * @param {?string=} opt_localStorageKey The key under which the data is stored
 *     in HTML5 localStorage.
 * @param {?string=} opt_cookieName The name of the cookie which the data is
 *     saved into.
 * @constructor
 */
window.accountchooser.util.Storage = function(
    opt_localStorageKey, opt_cookieName) {
  window.accountchooser.param.notEmpty(
      opt_localStorageKey || opt_cookieName,
      'opt_localStorageKey || opt_cookieName');
  if (!window.accountchooser.util.Storage.
      isLocalStorageSupported()) {
    window.accountchooser.param.notEmpty(opt_cookieName,
        'opt_cookieName');
  }
  this.localStorageKey_ = opt_localStorageKey;
  this.cookieName_ = opt_cookieName;
};

/**
 * Checks whether the browser supports HTML5 localStorage or not.
 * @return {boolean} {@code true} if HTML5 localStorage is supported.
 */
window.accountchooser.util.Storage.isLocalStorageSupported =
    function() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
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
      isLocalStorageSupported() && this.isLocalStorageAllowed_()) {
    return this.readFromLocalStorage_();
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
      isLocalStorageSupported() && this.isLocalStorageAllowed_()) {
    this.writeToLocalStorage_(data);
  } else if (this.isCookieStorageAllowed_()) {
    this.writeToCookie_(data);
  }
};

/**
 * Clears data from storage.
 */
window.accountchooser.util.Storage.prototype.clear = function() {
  if (window.accountchooser.util.Storage.
      isLocalStorageSupported() && this.isLocalStorageAllowed_()) {
    this.clearFromLocalStorage_();
  }
  if (this.isCookieStorageAllowed_()) {
    this.clearFromCookie_();
  }
};

/**
 * Checks whether the storage is allowed to use HTML5 localStorage or not.
 * @return {boolean} {@code true} if HTML5 localStorage is allowed to use.
 * @private
 */
window.accountchooser.util.Storage.prototype.
   isLocalStorageAllowed_ = function() {
  return !!this.localStorageKey_;
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
 * Reads data from the HTML5 localStorage.
 * @return {*} The data previously saved into the HTML5 localStorage.
 * @private
 */
window.accountchooser.util.Storage.prototype.
    readFromLocalStorage_ = function() {
  window.accountchooser.param.notEmpty(this.localStorageKey_,
      'localStorageKey');
  try {
    var data = window.localStorage.getItem(this.localStorageKey_);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    window.accountchooser.util.log(
        'Failed to read from localStorage: ' + e);
  }
};

/**
 * Writes data to the HTML5 localStorage.
 * @param {*} data The data to be stored into the HTML5 localStorage.
 * @private
 */
window.accountchooser.util.Storage.prototype.
    writeToLocalStorage_ = function(data) {
  window.accountchooser.param.notEmpty(this.localStorageKey_,
      'localStorageKey');
  try {
    var jsonData = JSON.stringify(data);
    window.localStorage.setItem(this.localStorageKey_, jsonData);
  } catch (e) {
    window.accountchooser.util.log(
        'Failed to write to localStorage: ' + e);
  }
};

/**
 * Clears saved data from the HTML5 localStorage.
 * @private
 */
window.accountchooser.util.Storage.prototype.
    clearFromLocalStorage_ = function() {
  window.accountchooser.param.notEmpty(this.localStorageKey_,
      'localStorageKey');
  try {
    window.localStorage.removeItem(this.localStorageKey_);
  } catch (e) {
    window.accountchooser.util.log(
        'Failed to clear from localStorage: ' + e);
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
    document.cookie = this.cookieName_ + '=' + escape(JSON.stringify(data)) +
        '; Path=/; expires=' + cookieDate.toGMTString();
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
    document.cookie = this.cookieName_ + '=; Path=/; expires=' +
        cookieDate.toGMTString();
  } catch (e) {
    window.accountchooser.util.log(
        'Failed to clear from cookie: ' + e);
  }
};
// Copyright 2012 Google Inc. All Rights Reserved.

/**
 * @fileoverview Utilities for getting script contents.
 * @author mengcheng@google.com (Mengcheng Duan)
 */

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
  if (script) {
    return script.innerHTML;
  }
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
// Copyright 2012 Google Inc. All Rights Reserved.

/**
 * @fileoverview Defines the Loader base class.
 * @author mengcheng@google.com (Mengcheng Duan)
 */

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
    } else {
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
  var finished = false;
  element.onload = element.onreadystatechange = function() {
    if (!finished && (!this.readyState ||
        this.readyState === 'loaded' || this.readyState === 'complete')) {
      finished = true;
      element.onload = element.onreadystatechange = null;
      if (opt_onSuccess) {
        opt_onSuccess();
      }
    }
  };
  element.onerror = function() {
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
// Copyright 2012 Google Inc. All Rights Reserved.

/**
 * @fileoverview Defines the JavaScript dynamic loader.
 * @author mengcheng@google.com (Mengcheng Duan)
 */

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
// Copyright 2012 Google Inc. All Rights Reserved.

/**
 * @fileoverview Utilities wrapping standard CDS client JS library and helping
 * sites to easily integrate CDS with their login/signup flows.
 * @author mengcheng@google.com (Mengcheng Duan)
 */

/** Namespace for CDS helper. */
window.accountchooser.cdshelper =
    window.accountchooser.cdshelper || {};

/**
 * Timeout (in milliseconds) for inquirying user status API.
 * @const
 * @private
 */
window.accountchooser.cdshelper.USER_STATUS_TIMEOUT_ = 1000;

/**
 * CDS client object.
 * @private
 */
window.accountchooser.cdshelper.cdsClient_ = null;

/**
 * UI elements.
 * @private
 */
window.accountchooser.cdshelper.uiElements_ = {
  email: null,
  password: null,
  name: null,
  photo: null
};

/**
 * Checks whether the mode is login.
 * @return {boolean} {@code true} if current mode is login mode.
 * @private
 */
window.accountchooser.cdshelper.isLoginMode_ = function() {
  return window.accountchooser.config.cdsHelperMode ==
      window.accountchooser.config.cdsHelperModes.LOGIN;
};

/**
 * Checks whether the mode is signup.
 * @return {boolean} {@code true} if current mode is signup mode.
 * @private
 */
window.accountchooser.cdshelper.isSignupMode_ = function() {
  return window.accountchooser.config.cdsHelperMode ==
      window.accountchooser.config.cdsHelperModes.SIGNUP;
};

/**
 * Storage for keeping account information when redirecting between login and
 * signup page.
 * @private
 */
window.accountchooser.cdshelper.storage_ =
    new window.accountchooser.util.Storage('storedAccount',
        '__STORED_ACCOUNT__');

/**
 * Gets the stored account information from underlying storage.
 * @return {Object|undefined} the stored account.
 * @private
 */
window.accountchooser.cdshelper.getStoredAccount_ = function() {
  var account = window.accountchooser.cdshelper.storage_.read();
  window.accountchooser.cdshelper.storage_.clear();
  return account;
};

/**
 * Saves the account information into underlying storage.
 * @param {Object} account the account to be stored.
 * @private
 */
window.accountchooser.cdshelper.storeAccount_ = function(
    account) {
  window.accountchooser.cdshelper.storage_.write(account);
};

/**
 * Finds the proper UI elements.
 * @private
 */
window.accountchooser.cdshelper.findUiElements_ = function() {
  for (var e in window.accountchooser.cdshelper.uiElements_) {
    var id = window.accountchooser.config.uiElementIds[e];
    if (id) {
      window.accountchooser.cdshelper.uiElements_[e] =
          jQuery('#' + id);
    }
  }
};

/**
 * Creates an absolute URL from the given URL.
 * @param {string} url the destination url, which could be an absolute URL,
 *     an absolute path or a relative path.
 * @param {string=} opt_baseUrl the base url used to construct the destination
 *     url. If omitted, window.location.href is used.
 * @return {string} the absolute URL constructed from the given URL.
 * @private
 */
window.accountchooser.cdshelper.createAbsoluteUrl_ =
    function(url, opt_baseUrl) {
  var baseUrl = opt_baseUrl || window.location.href;
  if (!url) {
    return baseUrl;
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
  if (/https?:\/\//.test(url)) {
    // Absolute URL.
    return url;
  } else if (url[0] == '/') {
    // Absolute path.
    return protocol + '//' + host + url;
  } else {
    // Relative path.
    var components = path.split('/');
    components[components.length - 1] = url;
    return protocol + '//' + host + components.join('/');
  }
};

/**
 * Checks whether two URLs are matched or not. The search and hash parts are
 *     removed when comparing.
 * @param {string} url1 the first URL, which could be an absolute URL, an
 *     absolute path, or a relative path.
 * @param {string} url2 the second URL, which could be an absolute URL, an
 *     absolute path, or a relative path.
 * @param {string=} opt_baseUrl the base URL for both url1 and url2.
 * @return {boolean} {@code true} if the two URLs match.
 * @private
 */
window.accountchooser.cdshelper.matchUrl_ =
    function(url1, url2, opt_baseUrl) {
  // Normalize to absolute URLs.
  url1 = window.accountchooser.cdshelper.createAbsoluteUrl_(
      url1, opt_baseUrl);
  url2 = window.accountchooser.cdshelper.createAbsoluteUrl_(
      url2, opt_baseUrl);
  // Remove search and hash parts. If two URLs are equal except the search and
  // hash parts, they are considered as matched.
  url1 = url1.split(/\?|#/)[0];
  url2 = url2.split(/\?|#/)[0];
  return url1 == url2;
};

/**
 * Checks if the current page is the login page or not.
 * @return {boolean} {@code true} if the current page is the login page.
 * @private
 */
window.accountchooser.cdshelper.isLoginPage_ = function() {
  return window.accountchooser.cdshelper.matchUrl_(
      window.location.href,
      window.accountchooser.config.loginUrl);
};

/**
 * Checks if the current page is the sign up page or not.
 * @return {boolean} {@code true} if the current page is the sign up page.
 * @private
 */
window.accountchooser.cdshelper.isSignupPage_ = function() {
  return window.accountchooser.cdshelper.matchUrl_(
      window.location.href,
      window.accountchooser.config.signupUrl);
};

/**
 * Detects and sets the CDS helper mode from the URL path or URL hash parameter.
 * @private
 */
window.accountchooser.cdshelper.detectCdsHelperMode_ =
    function() {
  // If explicitly set, use the value.
  if (window.accountchooser.config.cdsHelperMode) {
    return;
  }
  var Modes = window.accountchooser.config.cdsHelperModes;
  if (window.accountchooser.cdshelper.isLoginPage_()) {
    window.accountchooser.config.cdsHelperMode = Modes.LOGIN;
  } else if (window.accountchooser.cdshelper.isSignupPage_()) {
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
 * @param {Object} account the account to be checked.
 * @param {function(Object)} callback the callback function to be called when
 *     response is returned.
 * @private
 */
window.accountchooser.cdshelper.checkUserStatus_ =
    function(account, callback) {
  jQuery.ajax({
      type: 'POST',
      cache: false,
      url: window.accountchooser.config.userStatusUrl,
      data: account,
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
 * @param {Object} account the account returned from the CDS.
 * @private
 */
window.accountchooser.cdshelper.prefill_ = function(account) {
  window.accountchooser.cdshelper.uiElements_.email.val(
      account.email);
  if (window.accountchooser.cdshelper.uiElements_.name) {
    window.accountchooser.cdshelper.uiElements_.name.val(
        account.displayName);
  }
  if (window.accountchooser.cdshelper.uiElements_.photo) {
    window.accountchooser.cdshelper.uiElements_.photo.val(
        account.photoUrl);
  }
  if (window.accountchooser.cdshelper.uiElements_.password) {
    window.accountchooser.cdshelper.uiElements_.password.focus();
  }
};

/**
 * Redirects to the correct page with the account information returned from the
 * CDS.
 * @param {Object} account the account returned from the CDS.
 * @param {window.accountchooser.config.cdsHelperModes} mode the
 *     mode of the target page.
 * @private
 */
window.accountchooser.cdshelper.redirect_ = function(account,
    mode) {
  window.accountchooser.cdshelper.storeAccount_(account);
  switch (mode) {
    case window.accountchooser.config.cdsHelperModes.LOGIN:
      window.location.href =
          window.accountchooser.config.loginUrl;
      break;
    case window.accountchooser.config.cdsHelperModes.SIGNUP:
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
 * @param {Object|undefined} result the result returned from the CDS.
 * @param {Object|undefined} error the error object returned from the CDS.
 * @private
 */
window.accountchooser.cdshelper.selectCallback_ = function(
    result, error) {
  var account = result && result.account;
  if (account && account.email) {
    window.accountchooser.cdshelper.checkUserStatus_(account,
        function(userStatus) {
      if (userStatus.authUri) {
        // Redirect to the auth endpoint.
        if (userStatus.authUri.length < 2048) {
          window.location.href = userStatus.authUri;
        } else {
          window.accountchooser.util.formRedirect(
              userStatus.authUri);
        }
      } else {
        var mode = userStatus.registered ?
            window.accountchooser.config.cdsHelperModes.LOGIN :
            window.accountchooser.config.cdsHelperModes.SIGNUP;
        // If the account is registered and current mode is login, or it is not
        // registered and current mode is signup, stay in the page and prefill
        // the fields. Otherwise, redirect to correct page.
        if (mode == window.accountchooser.config.cdsHelperMode) {
          window.accountchooser.cdshelper.prefill_(account);
        } else {
          window.accountchooser.cdshelper.redirect_(account,
              mode);
        }
      }
    });
  } else {
    // The user clicks 'sign into another account' or an error occurs. No
    // account is returned, just focus on the username input field.
    window.accountchooser.cdshelper.uiElements_.email.focus();
  }
};

/**
 * Handles the result returned from the CDS store/update service.
 * @param {Object|undefined} result the result returned from the CDS.
 * @param {Object|undefined} error the error object returned from the CDS.
 * @private
 */
window.accountchooser.cdshelper.defaultCallback_ = function(
    result, error) {
  // For login mode, it need to auto redirect to the CDS selecting page (if
  // there's any account in the CDS). This is done by the empty response
  // callback. However, there may be leftover result from store/update service,
  // which causes store/update callback instead of empty response callback is
  // called. In this case, just eat the store/update result and call the empty
  // response callback directly.
  if (window.accountchooser.cdshelper.isLoginMode_()) {
    window.accountchooser.cdshelper.emptyCallback_();
  }
};

/**
 * Handles empty response notification.
 * @private
 */
window.accountchooser.cdshelper.emptyCallback_ = function() {
  // Store account to CDS if there's any.
  if (window.accountchooser.config.storedAccount) {
    window.accountchooser.storeAccountToCds(
        window.accountchooser.config.storedAccount);
    window.accountchooser.config.storedAccount = undefined;
  }
  // If not login or signup mode, no need to prefill or auto select account.
  if (!window.accountchooser.cdshelper.isLoginMode_() &&
      !window.accountchooser.cdshelper.isSignupMode_()) {
    return;
  }
  // Get the stored account.
  var account =
      window.accountchooser.cdshelper.getStoredAccount_();
  if (account) {
    // If stored account exists, prefill all fields with the stored account
    // information.
    window.accountchooser.cdshelper.prefill_(account);
  } else if (window.accountchooser.cdshelper.isLoginMode_()) {
    // If no stored account and the mode is login, automatically redirect to CDS
    // selecting page.
    window.accountchooser.selectAccountFromCds();
  }
};

/**
 * Initializes the CDS helper.
 */
window.accountchooser.initCdsHelper = function() {
  // Initialize CDS client.
  var client = window.cds.CdsClient.init({
      // Don't need callback for store/update currently.
      callbacks: {
        select: window.accountchooser.cdshelper.selectCallback_,
        store: window.accountchooser.cdshelper.defaultCallback_,
        update: window.accountchooser.cdshelper.defaultCallback_,
        empty: window.accountchooser.cdshelper.emptyCallback_
      }
  });
  window.accountchooser.cdshelper.cdsClient_ = client;
  // Find UI elements.
  window.accountchooser.cdshelper.findUiElements_();
  // Detect the CDS helper mode from URL path or hash part if it exists.
  window.accountchooser.cdshelper.detectCdsHelperMode_();
};

/**
 * Selects an account from the CDS.
 */
window.accountchooser.selectAccountFromCds = function() {
  var cdsOptions = {
    ui: window.accountchooser.config.cdsUiConfig,
    language: window.accountchooser.config.language
  };
  // Do lookahead lookup. If the CDS is empty, skip redirecting.
  window.accountchooser.cdshelper.cdsClient_.select(null,
      cdsOptions, true);
};

/**
 * Stores an account into the CDS.
 * @param {Object} account the account to be stored.
 */
window.accountchooser.storeAccountToCds = function(account) {
  // Don't use the built-in lookahead look up feature of "store" API since the
  // return URL usually is not the current page. Use checkAccountExist
  // explicitly so that if the account exists, we can redirect to the correct
  // page.
  var clientCallbackUrl =
      window.accountchooser.cdshelper.createAbsoluteUrl_(
          window.accountchooser.config.loginOkUrl);
  var cb = function(result, error) {
    if (!error && result) {
      window.location.href = clientCallbackUrl;
    } else {
      var cdsOptions = {
        clientCallbackUrl: clientCallbackUrl,
        language: window.accountchooser.config.language
      };
      window.accountchooser.cdshelper.cdsClient_.store(account,
          null, cdsOptions);
    }
  };
  window.accountchooser.cdshelper.cdsClient_.checkAccountExist(
      account, cb);
};

/**
 * Updates an account which is in the CDS.
 * @param {Object} account the new account which is used to update the old one.
 */
window.accountchooser.updateAccountToCds = function(account) {
  // Don't use the built-in lookahead look up feature of "update" API since the
  // return URL usually is not the current page. Use checkAccountExist
  // explicitly so that if the account doesn't exist, we can redirect to the
  // correct page.
  var clientCallbackUrl =
      window.accountchooser.cdshelper.createAbsoluteUrl_(
          window.accountchooser.config.loginOkUrl);
  var cb = function(result, error) {
    if (!error && !result) {
      window.location.href = clientCallbackUrl;
    } else {
      var cdsOptions = {
        clientCallbackUrl: clientCallbackUrl,
        language: window.accountchooser.config.language
      };
      window.accountchooser.cdshelper.cdsClient_.update(account,
          null, cdsOptions);
    }
  };
  window.accountchooser.cdshelper.cdsClient_.checkAccountExist(
      account, cb);
};
// Copyright 2012 Google Inc. All Rights Reserved.

/**
 * @fileoverview Configuration setting functions for the CDS helper.
 * @author mengcheng@google.com (Mengcheng Duan)
 */

/**
 * Sets configuration parameter: sign up URL.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 * @suppress {duplicate}
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
 * @suppress {duplicate}
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
 * @suppress {duplicate}
 */
window.accountchooser.config.setWidgetSignupUrl = function(
    value, key) {
  window.accountchooser.config.signupUrl = value;
};

/**
 * Sets configuration parameter: user status URL.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 * @suppress {duplicate}
 */
window.accountchooser.config.setWidgetUserStatusUrl = function(
    value, key) {
  window.accountchooser.config.userStatusUrl = value;
};

/**
 * Sets configuration parameter: ui configuration for CDS.
 * @param {Object} value the parameter value.
 * @param {string} key the parameter name.
 * @suppress {duplicate}
 */
window.accountchooser.config.setCdsUiConfig = function(value,
    key) {
  window.accountchooser.config.cdsUiConfig = value;
};

/**
 * Sets configuration parameter: UI element id for email input field.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 * @suppress {duplicate}
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
 * @suppress {duplicate}
 */
window.accountchooser.config.setSitePasswordId = function(
    value, key) {
  window.accountchooser.config.uiElementIds.password = value;
};

/**
 * Sets configuration parameter: UI element id for display name input field.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 * @suppress {duplicate}
 */
window.accountchooser.config.setSiteDisplayNameId = function(
    value, key) {
  window.accountchooser.config.uiElementIds.name = value;
};

/**
 * Sets configuration parameter: UI element id for photo URL input field.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 * @suppress {duplicate}
 */
window.accountchooser.config.setSitePhotoUrlId = function(
    value, key) {
  window.accountchooser.config.uiElementIds.photo = value;
};

/**
 * Sets configuration parameter: mode for CDS helper, either signup or login.
 * @param {string} value the parameter value.
 * @param {string} key the parameter name.
 * @suppress {duplicate}
 */
window.accountchooser.config.setMode = function(value, key) {
  var Modes = window.accountchooser.config.cdsHelperModes;
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
 * @suppress {duplicate}
 */
window.accountchooser.config.setStoredAccount = function(value,
    key) {
  window.accountchooser.config.storedAccount = value;
};
// Copyright 2012 Google Inc. All Rights Reserved.

/**
 * @fileoverview Generates CDS helper initalization script.
 * @author mengcheng@google.com (Mengcheng Duan)
 */

/**
 * Template for generating CDS helper initialization script.
 * @private
 */
window.accountchooser.cdshelper.initTemplate_ =
  '<script type="text/javascript">\n' +
  '(function() {\n' +
  'var loader = new window.accountchooser.loader.JsLoader();\n' +
  'function onAllLoaded() {\n' +
  '  window.accountchooser.setConfig({\n' +
  '    %%CONFIG%%\n' +
  '  });\n' +
  '  window.accountchooser.initCdsHelper();\n' +
  '}\n' +
  'function loadCdsClient() {\n' +
  '  if (window.accountchooser.CdsClient) {\n' +
  '    onAllLoaded();\n' +
  '    return;\n' +
  '  }\n' +
  '  var url = "https://www.accountchooser.com/client.js";\n' +
  '  loader.load(url, undefined, onAllLoaded);\n' +
  '}\n' +
  'function loadJQuery() {\n' +
  '  if (window.jQuery) {\n' +
  '    loadCdsClient();\n' +
  '    return;\n' +
  '  }\n' +
  '  var url =\n' +
  '    "https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js";\n' +
  '  loader.load(url, undefined, loadCdsClient);\n' +
  '}\n' +
  'loadJQuery();\n' +
  '})();\n' +
  '</script>\n';

/**
 * DOM ID of the script tag loading the library.
 * @private
 * @const
 */
window.accountchooser.cdshelper.SCRIPT_ID_ = 'ac_script';

/**
 * Regex for matching the src fo the script tag loading the library.
 * @private
 * @const
 */
window.accountchooser.cdshelper.SCRIPT_SRC_REGEX_ =
    /www\.accountchooser\.com\/client\.js/;

(function() {
  // Get the current script, if the library is static loaded, the configuration
  // is in the current script.
  var content =
    window.accountchooser.util.getCurrentScriptContent();
  // Get the script whose id is 'ac_script'. Script with this id is suppose to
  // contain the configuration.
  if (!content) {
    content = window.accountchooser.util.getScriptContentById(
        window.accountchooser.cdshelper.SCRIPT_ID_);
  }
  // Get the script whose src matches the accountchooser.com URL pattern. This
  // is the last try to find out the script containing the configuration.
  if (!content) {
    content = window.accountchooser.util.getScriptContentBySrc(
        window.accountchooser.cdshelper.SCRIPT_SRC_REGEX_);
  }
  // Generate initialization script.
  var configStr = content || '';
  var script =
    window.accountchooser.cdshelper.initTemplate_.replace(
        /\%\%CONFIG\%\%/, configStr);
  document.write(script);
})();

