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
 * @desc [accountchooser] Title for sharing account page.
 */
var MSG_SHARE_ACCOUNT_TITLE = 'Add account';

/**
 * @desc [accountchooser] Title for sharing multiple accounts page.
 */
var MSG_SHARE_ACCOUNT_TITLE_MULTIPLE = 'Add accounts';

/**
 * @desc [accountchooser] Label for confirm to add account button. If the
 * user clicks this button, this account will be added to account chooser.
 */
var MSG_SHARE_ACCOUNT_CONFIRM = 'Remember this account';

/**
 * @desc [accountchooser] Label for the button that confirm to add multiple
 * accounts. If user clicks this button, these accounts will be added to
 * account chooser.
 */
var MSG_SHARE_ACCOUNT_CONFIRM_MULTIPLE = 'Remember these accounts';

/**
 * @desc [accountchooser] Label for cancel button. If the user clicks this
 * button, this account won't be added to account chooser.
 */
var MSG_SHARE_ACCOUNT_CANCEL = 'Skip this';

/**
 * @desc [accountchooser] Title for updating account page.
 */
var MSG_UPDATE_ACCOUNT_TITLE = 'Update account';

/**
 * @desc [accountchooser] Label for confirm button. If the user clicks this
 * button, this account will be updated.
 */
var MSG_UPDATE_ACCOUNT_CONFIRM = 'Update account';

/**
 * @desc [accountchooser] Label for cancel button. If the user clicks this
 * button, this account won't be updated.
 */
var MSG_UPDATE_ACCOUNT_CANCEL = 'Cancel';

/**
 * @desc [accountchooser] Title for selecting account page.
 */
var MSG_SELECT_ACCOUNT_TITLE = 'Sign in to';

/**
 * @desc [accountchooser] Add account button label.
 */
var MSG_SELECT_ACCOUNT_ADD_ACCOUNT = 'Add account';

/**
 * @desc [accountchooser] Title for managing account page.
 */
var MSG_MANAGE_ACCOUNT_TITLE = 'Manage accounts';

/**
 * @desc [accountchooser] This message is shown after the user deletes an
 * account from the Account Chooser. It reminds the user even if he/she removes
 * the account here, the account may still be remembered by some websites.
 */
var MSG_MANAGE_ACCOUNT_DELETE_REMINDER = 'Account removed. On some websites ' +
    'you may still be logged into this account, or those sites may still ' +
    'remember you used this account.';

/**
 * @desc [accountchooser] Copyright declaration. see
 * http://openid.net/foundation for more information about OpenID Foundation.
 */
var MSG_CONTAINER_FOOTER_COPYRIGHT = 'Copyright 2012 OpenID Foundation.';

/**
 * @desc [accountchooser] Hyperlink text which is shown at the bottom of the
 * page. Click on this link will bring the user to a web page which gives
 * detailed information about Account Chooser.
 */
var MSG_CONTAINER_FOOTER_LEARN_MORE = 'About Account Chooser';

/**
 * @desc [accountchooser] Page header that shows this is the account management
 * page.
 */
var MSG_CONTAINER_MANAGE_HEADER = 'Manage your Account Chooser';

/**
 * @desc [accountchooser] Description that tells the user he/she can remove
 * account entries from the account chooser.
 */
var MSG_CONTAINER_MANAGE_DESCRIPTION = 'Remove any accounts you no longer ' +
    'wish to keep.';

/**
 * @desc [accountchooser] Page header that shows this is the account selecting
 * page and the user can select an account from account chooser and sign in to
 * another site. For example, the header will be shown like: 'Select and account
 * to sign in to http://example.com'.
 */
var MSG_CONTAINER_SELECT_HEADER = 'Select an account to sign in to';

/**
 * @desc [accountchooser] Page header that shows this is the account adding page
 * and the user can add the account displayed into this device for later use.
 */
var MSG_CONTAINER_STORE_HEADER = 'Add your account to this device';

/**
 * @desc [accountchooser] Page header that shows this is the account adding page
 * and the user can add these accounts displayed into this device for later use.
 */
var MSG_CONTAINER_STORE_HEADER_MULTIPLE = 'Add your accounts to this device';

/**
 * @desc [accountchooser] Description that tells the user why he/she wants to
 * add the account to account chooser.
 */
var MSG_CONTAINER_STORE_DESCRIPTION = 'Tired of signing in so often? Add ' +
    'your account here. New apps (like a shopping website) may even let you ' +
    'sign up just by clicking the account or entering its password.';

/**
 * @desc [accountchooser] Description that tells the user why he/she wants to
 * add these accounts to account chooser.
 */
var MSG_CONTAINER_STORE_DESCRIPTION_MULTIPLE = 'Tired of signing in so ' +
    'often? Add your accounts here. New apps (like a shopping website) may ' +
    'even let you sign up just by clicking the account or entering its ' +
    'password.';

/**
 * @desc [accountchooser] Description for one of the benefits that the use gets
 * after he/she added the account to account chooser.
 */
var MSG_CONTAINER_STORE_BENEFIT_1 = 'Once you add an account to this device, ' +
    'you won\'t have to type your email address whenever a page asks you to ' +
    'sign in. Just select the right account from a list.';

/**
 * @desc [accountchooser] Description for one of the benefits that the user gets
 * after he/she added the account to account chooser.
 */
var MSG_CONTAINER_STORE_BENEFIT_2 = 'Some pages will ask for your password, ' +
    'but others will sign you in automatically after you click the account ' +
    'name.';

/**
 * @desc [accountchooser] Page header that shows this is the updating account
 * page.
 */
var MSG_CONTAINER_UPDATE_HEADER = 'Update your account details';

/**
 * @desc [accountchooser] Description that tells the user he/she can update the
 * account information whis is displayed on this page.
 */
var MSG_CONTAINER_UPDATE_DESCRIPTION = 'Confirm the details that will be ' +
    'displayed in your Account Chooser.';

/**
 * @desc [accountchooser] Window title for learn more about account chooser
 * page.
 */
var MSG_CONTAINER_ABOUT_TITLE = 'About Account Chooser';

/**
 * @desc [accountchooser] Header for the learn more about account chooser page.
 */
var MSG_CONTAINER_ABOUT_HEADER = 'About Account Chooser';

/**
 * @desc [accountchooser] This message is the introduction of account chooser
 * which explains how to select an account from account chooser.
 * @param {string} beginLink placeholder for <a> tag.
 * @param {string} endLink placeholder for </a> tag.
 * @return {string} the message with hyperlink.
 */
var MSG_CONTAINER_ABOUT_SEC1_PAR1 = 'Websites are replacing traditional ' +
    'login boxes with an account chooser to make those sites more secure and ' +
    'easier to use. When you try to sign in to such a site, you will see a ' +
    'page like this one with the list of accounts you most frequently use on ' +
    'this computer.';

/**
 * @desc [accountchooser] Header of for section 2 of learn more about account
 * chooser page.
 */
var MSG_CONTAINER_ABOUT_SUB_HEADER1 = 'Users: How it works';

/**
 * @desc [accountchooser] This message explains the first benefit for users of
 * adding account to account chooser.
 */
var MSG_CONTAINER_ABOUT_SEC2_PAR1 = 'Once you add an account to this device, ' +
    'you won\'t have to type your email address whenever a page asks you to ' +
    'sign in. Just select the right account from a list.';

/**
 * @desc [accountchooser] This message explains the second benefit for users of
 * adding account to account chooser.
 */
var MSG_CONTAINER_ABOUT_SEC2_PAR2 = 'Some pages will ask for your password, ' +
    'but others will sign you in automatically after you click the account ' +
    'name.';

/**
 * @desc [accountchooser] Header for section 3 of learn more about account
 * chooser page.
 */
var MSG_CONTAINER_ABOUT_SUB_HEADER2 =
    'Website Owners: Learn how to upgrade your site';

/**
 * @desc [accountchooser] This message is the introduction of benefits for web
 * owners.
 */
var MSG_CONTAINER_ABOUT_SEC3_PAR1 = 'There are several advantages to ' +
    'upgrading your site to use an Account Chooser:';

/**
 * @desc [accountchooser] This message explains the first benefits for web
 * owners of using account chooser.
 */
var MSG_CONTAINER_ABOUT_SEC3_PAR1_LIST1 =
    'Increase signin and signup rates on your site';

/**
 * @desc [accountchooser] This message explains the second benefits for web
 * owners of using account chooser.
 */
var MSG_CONTAINER_ABOUT_SEC3_PAR1_LIST2 =
    'Makes it easier for your site to support identity providers in the future';

/**
 * @desc [accountchooser] This message explains the third benefits for web
 * owners of using account chooser.
 */
var MSG_CONTAINER_ABOUT_SEC3_PAR1_LIST3 =
    'It only requires a few very small changes to your site';

/**
 * @desc [accountchooser] Label for a button which points site owners who are
 * interested in deploying account chooser to the instruction page.
 * @param {string} beginLink placeholder for <a> tag.
 * @param {string} endLink placeholder for </a> tag.
 * @return {string} the message with hyperlink.
 */
var MSG_CONTAINER_ABOUT_DEPLOY_BUTTON = function(beginLink, endLink) {
    return beginLink + 'Learn how you can deploy an account chooser' + endLink;
};

/** @private */
var AC_SITE_OWNER_URL_ = 'http://accountchooser.net/owners';

/**
 * Stores all the images used in the widget.
 */
window.accountchooser.images = jQuery.extend(
    window.accountchooser.images || {}, {
  noPhoto: 'static/image/generic_avatar.png',
  manHome: 'static/image/man-personal.jpg',
  manWork: 'static/image/man-professional.jpg',
  womanHome: 'static/image/woman-personal.jpg',
  womanWork: 'static/image/woman-professional.jpg'
});

/**
 * Stores all the labels of the widget.
 */
window.accountchooser.labels = jQuery.extend(
    window.accountchooser.labels || {}, {
  shareAccountPage: {
    title: MSG_SHARE_ACCOUNT_TITLE,
    titleMultiple: MSG_SHARE_ACCOUNT_TITLE_MULTIPLE,
    confirm: MSG_SHARE_ACCOUNT_CONFIRM,
    confirmMultiple: MSG_SHARE_ACCOUNT_CONFIRM_MULTIPLE,
    cancel: MSG_SHARE_ACCOUNT_CANCEL
  },

  updateAccountPage: {
    title: MSG_UPDATE_ACCOUNT_TITLE,
    confirm: MSG_UPDATE_ACCOUNT_CONFIRM,
    cancel: MSG_UPDATE_ACCOUNT_CANCEL
  },

  selectAccountPage: {
    title: MSG_SELECT_ACCOUNT_TITLE,
    addAccount: MSG_SELECT_ACCOUNT_ADD_ACCOUNT
  },

  manageAccountPage: {
    title: MSG_MANAGE_ACCOUNT_TITLE,
    deleteReminder: MSG_MANAGE_ACCOUNT_DELETE_REMINDER
  },

  manageContainer: {
    header: MSG_CONTAINER_MANAGE_HEADER,
    description: MSG_CONTAINER_UPDATE_DESCRIPTION
  },

  selectContainer: {
    header: MSG_CONTAINER_SELECT_HEADER
  },

  storeContainer: {
    header: MSG_CONTAINER_STORE_HEADER,
    headerMultiple: MSG_CONTAINER_STORE_HEADER_MULTIPLE,
    description: MSG_CONTAINER_STORE_DESCRIPTION,
    descriptionMultiple: MSG_CONTAINER_STORE_DESCRIPTION_MULTIPLE,
    benefits: [MSG_CONTAINER_STORE_BENEFIT_1, MSG_CONTAINER_STORE_BENEFIT_2]
  },

  updateContainer: {
    header: MSG_CONTAINER_UPDATE_HEADER,
    description: MSG_CONTAINER_UPDATE_DESCRIPTION
  },

  aboutContainer: {
    title: MSG_CONTAINER_ABOUT_TITLE,
    header: MSG_CONTAINER_ABOUT_HEADER,
    sec1Par1: MSG_CONTAINER_ABOUT_SEC1_PAR1,
    subHeader1: MSG_CONTAINER_ABOUT_SUB_HEADER1,
    sec2Par1: MSG_CONTAINER_ABOUT_SEC2_PAR1,
    sec2Par2: MSG_CONTAINER_ABOUT_SEC2_PAR2,
    subHeader2: MSG_CONTAINER_ABOUT_SUB_HEADER2,
    sec3Par1: MSG_CONTAINER_ABOUT_SEC3_PAR1,
    sec3Par1List1: MSG_CONTAINER_ABOUT_SEC3_PAR1_LIST1,
    sec3Par1List2: MSG_CONTAINER_ABOUT_SEC3_PAR1_LIST2,
    sec3Par1List3: MSG_CONTAINER_ABOUT_SEC3_PAR1_LIST3,
    deployButton: MSG_CONTAINER_ABOUT_DEPLOY_BUTTON(
        '<a href="' + AC_SITE_OWNER_URL_ + '">', '</a>'),
    accountManHome: {
      email: 'john.garcia@gmail.com',
      displayName: 'John Garcia',
      photoUrl: window.accountchooser.images.manHome
    },
    accountManWork: {
      email: 'jgarcia@summitmedgroup.com',
      displayName: 'John Garcia',
      photoUrl: window.accountchooser.images.manWork
    },
    accountWomanHome: {
      email: 'sara_corlett@yahoo.com',
      displayName: 'Sara Corlett',
      photoUrl: window.accountchooser.images.womanHome
    },
    accountWomanWork: {
      email: 'corlett@alertblue.com',
      displayName: 'Mrs. Corlett',
      photoUrl: window.accountchooser.images.womanWork
    }
  },

  footerContainer: {
    copyright: MSG_CONTAINER_FOOTER_COPYRIGHT,
    learnMore: MSG_CONTAINER_FOOTER_LEARN_MORE,
    learnMoreLink: '/learnmore.html'
  }
});

window.accountchooser = window.accountchooser || {};


/**
 * Namespace declaration.
 */
window.accountchooser.config =
    window.accountchooser.config || {};


/**
 * @namespace The configuration parameters for the popup window.
 */
window.accountchooser.config.popup = {};

/**
 * The width of the popup window.
 */
window.accountchooser.config.popup.width = 520;

/**
 * The height of the popup window.
 */
window.accountchooser.config.popup.height = 550;

/**
 * The HTML of the popup window.
 */
window.accountchooser.config.popup.HTML =
    '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '  <head>\n' +
    '    <meta charset="utf-8">\n' +
    '    <title>%%title%%</title>\n' +
    '    <style type="text/css">\n' +
    '      html,\n' +
    '      body {\n' +
    '        background: #f6f6f6;\n' +
    '        text-align: center;\n' +
    '        margin: 0;\n' +
    '        padding: 0;\n' +
    '      }\n' +
    '      #message span {\n' +
    '        display: inline-block;\n' +
    '        margin: 20% 0 0;\n' +
    '        padding: 20px;\n' +
    '        font-weight: 300;\n' +
    '        font-size: 16px;\n' +
    '        text-align: center;\n' +
    '        background: #fff;\n' +
    '        border: 1px solid #ddd;\n' +
    '        border-radius: 4px;\n' +
    '        -moz-border-radius: 4px;\n' +
    '        -webkit-border-radius: 4px;\n' +
    '      }\n' +
    '    </style>\n' +
    '  </head>\n' +
    '  <body>\n' +
    '    <div id="message">\n' +
    '      <span>%%message%%</span>\n' +
    '    </div>\n' +
    '  </body>\n' +
    '</html>\n';


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
        case 'uiconfig': {
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


/**
 * @class Defines the Page class, which is super class for all pages.
 * @constructor
 */
window.accountchooser.Page =
    window.accountchooser.Page || function() {};

/**
 * Renders the page on the page container.
 * @param {element} container The HTML element that contains the page.
 * @param {object} resource The resource object.
 * @param {boolean} opt_showCloseIcon whether to show the close icon.
 */
window.accountchooser.Page.prototype.render = function(container,
    resource, opt_showCloseIcon) {
  window.accountchooser.param.notNull(container, 'container');
  window.accountchooser.param.notNull(resource, 'resource');
  this.container_ = container;
  this.resource_ = resource;
  this.showCloseIcon_ = !!opt_showCloseIcon;
};

/**
 * Returns the parent DOM element.
 * @return {element} The parent DOM element.
 */
window.accountchooser.Page.prototype.getContainer = function() {
  return this.container_;
};

/**
 * Returns the resource bundle used in the Page.
 * @return {object} The resource bundle used in the Page.
 */
window.accountchooser.Page.prototype.getResource = function() {
  return this.resource_;
};

/**
 * Whether to show the close icon.
 * @return {boolean} Whether to show the close icon.
 */
window.accountchooser.Page.prototype.isShowCloseIcon =
    function() {
  return this.showCloseIcon_;
};


/**
 * Creates a table.
 * @param {string} opt_styleClass The optional style class name for the created
 *        table. Can set multiple classes separated by space.
 * @return {Element} the created table element wrapped by jQuery.
 */
window.accountchooser.Page.prototype.createTable = function(
    opt_styleClass) {
  var table = jQuery('<table>').attr('cellspacing', 0).attr('cellpadding', 0)
      .attr('border', 0);
  if (opt_styleClass) {
    table.addClass(opt_styleClass);
  }
  return table;
};

/**
 * Creates a normal button by HTML input element.
 * @param {string} caption The caption of the button.
 * @param {string} handler The handler function when the button is clicked.
 * @param {string} opt_styleClass An optional class name for the button.
 * @return {Element} The created button element.
 */
window.accountchooser.Page.prototype.createButton = function(
    caption, handler, opt_styleClass) {
  window.accountchooser.param.notEmpty(caption, 'caption');
  window.accountchooser.param.notEmpty(handler, 'handler');
  var btn = jQuery('<input type=button>').val(caption).addClass(
      'widget-input-button');
  if (opt_styleClass) {
    btn.addClass(opt_styleClass);
  }
  var self = this;
  btn.click(function() {
    self[handler].call(self);
  });
  return btn;
};

/**
 * Creates a link button by HTML a element.
 * @param {string} caption The caption of the button.
 * @param {string} handler The handler function when the button is clicked.
 * @param {string} opt_styleClass An optional class name for the button.
 * @return {Element} The created button element.
 */
window.accountchooser.Page.prototype.createLinkButton = function(
    caption, handler, opt_styleClass) {
  window.accountchooser.param.notEmpty(caption, 'caption');
  window.accountchooser.param.notEmpty(handler, 'handler');
  var btn = jQuery('<a>').addClass('widget-link').html(caption);
  if (opt_styleClass) {
    btn.addClass(opt_styleClass);
  }
  var self = this;
  btn.click(function() {
    self[handler].call(self);
    return false;
  });
  return btn;
};

/**
 * Creates a 3D button by background images.
 * @param {string} caption The caption of the button.
 * @param {string} handler The handler function when the button is clicked.
 * @param {string} opt_styleClass An optional class name for the button.
 * @return {Element} The created button element.
 */
window.accountchooser.Page.prototype.createRenderedButton =
    function(caption, handler, opt_styleClass) {
  window.accountchooser.param.notEmpty(caption, 'caption');
  window.accountchooser.param.notEmpty(handler, 'handler');
  var link = jQuery('<a>').html(caption).addClass('widget-button-link');
  var table = this.createTable('widget-button');
  if (opt_styleClass) {
    table.addClass(opt_styleClass);
  }
  var btnLine = jQuery('<tr>').appendTo(table);
  jQuery('<td>').addClass('widget-button-left').appendTo(btnLine);
  jQuery('<td>').addClass('widget-button-middle').append(link)
      .appendTo(btnLine);
  jQuery('<td>').addClass('widget-button-right').appendTo(btnLine);
  var self = this;
  jQuery(table).click(function() {
    self[handler].call(self);
    return false;
  });
  return table;
};

/**
 * Creates a text/password input box.
 * @param {string} inputClass The class for the created input element.
 * @param {boolean} isPassword Whether the input is a password instead of a
 *        text.
 * @param {string} opt_handler The handler function when keypress on the input.
 * @return {Element} The created input box element.
 */
window.accountchooser.Page.prototype.createTextBox = function(
    inputClass, isPassword, opt_handler) {
  window.accountchooser.param.notEmpty(inputClass, 'inputClass');
  var type = (isPassword ? 'password' : 'text');
  var textBox = jQuery('<input type=' + type + '>');
  textBox.addClass(inputClass);
  if (opt_handler) {
    var self = this;
    textBox.keypress(function(origianlEvent) {
      self[opt_handler].call(self, origianlEvent);
    });
  }
  return textBox;
};

/**
 * Creates a checkbox element. Note returned is a DIV element holding the check
 * box, not the check box itself.
 * @param {string} labelHtml The label text of the created checkbox.
 * @param {boolean} checked Whether the checkbox is checked.
 * @param {string} opt_styleClass An optional class name for the checkbox.
 * @return {Element} The created element.
 */
window.accountchooser.Page.prototype.createCheckbox = function(
    labelHtml, checked, opt_styleClass) {
  window.accountchooser.param.notNull(labelHtml, 'labelHtml');
  var checkBox = jQuery('<input type=checkbox>').attr('checked', !!checked);
  var label = jQuery('<label>').addClass('widget-checkbox-text').append(
      checkBox).append(labelHtml);
  var div = jQuery('<div>').addClass('widget-checkbox').append(label);
  if (opt_styleClass) {
    div.addClass(opt_styleClass);
  }
  return div;
};

/**
 * Creates a hyper-link that can be used for choice.
 * @param {string} caption The caption of the choice link.
 * @param {string} handler The handler function when the link is clicked.
 * @return {Element} The created element.
 */
window.accountchooser.Page.prototype.createChoiceLink = function(
    caption, handler) {
  window.accountchooser.param.notEmpty(caption, 'caption');
  window.accountchooser.param.notEmpty(handler, 'handler');
  var div = jQuery('<div>').addClass('widget-choice-link');
  this.createLinkButton(caption, handler).appendTo(div);
  return div;
};

/**
 * Creates a reusable HTML fragment that has a text and a clickable link.
 * @param {string} infoHtml The HTML code for the information part.
 * @param {string} linkHtml The HTML code for the link part.
 * @param {string} handler The handler function when the button is clicked.
 * @param {string} styleClass The class name for the created DIV element.
 * @return {Element} The created DIV element.
 */
window.accountchooser.Page.prototype.createInfoLinkSection =
    function(infoHtml, linkHtml, handler, styleClass) {
  window.accountchooser.param.notEmpty(infoHtml, 'infoHtml');
  window.accountchooser.param.notEmpty(linkHtml, 'linkHtml');
  window.accountchooser.param.notEmpty(handler, 'handler');
  window.accountchooser.param.notEmpty(styleClass, 'styleClass');
  var link = jQuery('<a>').html(linkHtml);
  var div = jQuery('<div>').addClass(styleClass).append(infoHtml).append(link);
  var self = this;
  link.click(function() {
    self[handler].call(self);
    return false;
  });
  return div;
};

/**
 * Creates a reusable HTML fragment that has a text and a hyper link.
 * @param {string} infoHtml The HTML code for the information part.
 * @param {string} linkHtml The HTML code for the link part.
 * @param {string} linkUrl The URL of the link part.
 * @param {string} styleClass The class name for the created DIV element.
 * @param {string=} opt_target Target attribute for the link element, for
 *     example, _blank, _self, _top, _parent. If not set, _blank will be used.
 * @return {Element} The created DIV element.
 */
window.accountchooser.Page.prototype.createInfoLink =
    function(infoHtml, linkHtml, linkUrl, styleClass, opt_target) {
  window.accountchooser.param.notEmpty(linkHtml, 'linkHtml');
  window.accountchooser.param.notEmpty(linkUrl, 'linkUrl');
  window.accountchooser.param.notEmpty(styleClass, 'styleClass');
  var link = jQuery('<a>').html(linkHtml).attr('href', linkUrl).attr('target',
      opt_target || '_blank');
  var div = jQuery('<div>').addClass(styleClass);
  if (infoHtml) {
    div.append(infoHtml);
  }
  div.append(link);
  return div;
};

/**
 * Creates a Nascar IDP link.
 * @param {{labe: '', image: '', domain: ''}} idp The IDP configuration data.
 * @param {string} idpId The IDP id to be rendered.
 * @param {string} handler The handler function when a IDP link is clicked.
 * @return {Element} The created element.
 * @private
 */
window.accountchooser.Page.prototype.createNascarLink_ =
    function(idp, idpId, handler) {
  window.accountchooser.param.notEmpty(idp, 'idp');
  window.accountchooser.param.notEmpty(idpId, 'idpId');
  window.accountchooser.param.notEmpty(handler, 'handler');
  var idpDiv = jQuery('<div>').addClass('widget-idp');
  var idpLink = jQuery('<a>').attr('href', 'javascript: void(0)').appendTo(
      idpDiv);
  var table = this.createTable('widget-idp-link').appendTo(idpLink);
  var idpTableLine = jQuery('<tr>').appendTo(table);
  idpTableLine.append(jQuery('<td>').append(
      jQuery('<img>').attr('src', idp.image).addClass('widget-idp-icon')));
  idpTableLine.append(jQuery('<td>').append(idp.label));
  var self = this;
  idpLink.click(function() {
    self[handler].call(self, idpId);
    return false;
  });
  return idpDiv;
};

/**
 * Creates a Nascar list.
 * @param {idpId: {}, ...} idps The configuration parameters for IDPs.
 * @param {Array} nascarIdpList The list of IDP ids to be rendered.
 * @param {string} handler The handler function when a IDP link is clicked.
 * @return {Element} The created element.
 */
window.accountchooser.Page.prototype.createNascarList = function(
    idps, nascarIdpList, handler) {
  window.accountchooser.param.notEmpty(idps, 'idps');
  window.accountchooser.param.notEmptyArray(nascarIdpList,
      'nascarIdpList');
  window.accountchooser.param.notEmpty(handler, 'handler');
  var nascar = jQuery('<div>').addClass('widget-nascar-list');
  for (var i = 0; i < nascarIdpList.length; i++) {
    var idpId = nascarIdpList[i];
    this.createNascarLink_(idps[idpId], idpId, handler).appendTo(nascar);
  }
  return nascar;
};

/**
 * Creates a HTML fragment with a title and a Nascar list.
 * @param {string} label The label text for the title.
 * @param {Object} idps The idps config data.
 * @param {Array} nascarIdpList The list of IDP ids to be rendered.
 * @param {string} handler The handler function when a IDP link is clicked.
 * @return {Element} The created element.
 */
window.accountchooser.Page.prototype.createNascarSection =
    function(label, idps, nascarIdpList, handler) {
  window.accountchooser.param.notNull(label, 'label');
  window.accountchooser.param.notEmpty(idps, 'idps');
  window.accountchooser.param.notEmptyArray(nascarIdpList,
      'nascarIdpList');
  window.accountchooser.param.notEmpty(handler, 'handler');
  var nascarSection = jQuery('<p>').append(label);
  this.createNascarList(idps, nascarIdpList, handler).appendTo(nascarSection);
  return nascarSection;
};

/**
 * Creates a widget header. Note: if opt_showCloseIcon is true, must provide
 * opt_handler.
 * @param {string} title The label of the header.
 * @param {boolean} opt_showCloseIcon Whether to show the close icon.
 * @param {string} opt_closeIcon The URL for the close icon.
 * @param {string} opt_handler The handler function when a IDP link is clicked.
 * @param {string} opt_closeTitle The title for the close icon.
 * @return {Element} The created header DIV element.
 */
window.accountchooser.Page.prototype.createHeader = function(
    title, opt_showCloseIcon, opt_closeIcon, opt_handler, opt_closeTitle) {
  window.accountchooser.param.notNull(title, 'title');
  var headerBar = jQuery('<div>').addClass('widget-header-bar');
  this.header = jQuery('<div>').html(title).addClass('widget-header').appendTo(
      headerBar);
  if (opt_showCloseIcon) {
    window.accountchooser.param.notEmpty(opt_closeIcon,
        'opt_closeIcon');
    window.accountchooser.param.notEmpty(opt_handler,
        'opt_handler');
    var closeIcon = jQuery('<img>').attr('src', opt_closeIcon).addClass(
        'widget-close-icon').appendTo(headerBar);
    if (opt_closeTitle) {
      closeIcon.attr('title', opt_closeTitle);
    }
    var self = this;
    closeIcon.click(function() {
      self[opt_handler].call(self);
    });
  }
  headerBar.append(jQuery('<div>').css('clear', 'both'));
  return headerBar;
};

/**
 * Creates a fragment with a label and a text/password input box.
 * @param {Element} parent The parent element for the label and input box.
 * @param {string} label The text for the label part.
 * @param {string} inputClass The class for the created input element.
 * @param {boolean} isPassword Whether the input is a password instead of a
 *        text.
 * @param {string} opt_handler The handler function when keypress on the input.
 */
window.accountchooser.Page.prototype.appendLabelledTextBox =
    function(parent, label, inputClass, isPassword, opt_handler) {
  window.accountchooser.param.notNull(parent, 'parent');
  window.accountchooser.param.notNull(label, 'label');
  window.accountchooser.param.notEmpty(inputClass, 'inputClass');
  if (label) {
    parent.append(label).append('<br>');
  }
  parent.append(this.createTextBox(inputClass, isPassword, opt_handler));
};

/**
 * Appends a error message DIV to the parent.
 * @param {Element} parent The parent element for the created element.
 * @return {Element} The created DIV element.
 */
window.accountchooser.Page.prototype.appendErrorDiv = function(
    parent) {
  window.accountchooser.param.notNull(parent, 'parent');
  var errorDiv = jQuery('<div>').addClass('widget-error').appendTo(parent);
  return errorDiv;
};

/**
 * Appends a information message DIV to the parent.
 * @param {Element} parent The parent element for the created element.
 * @return {Element} The created DIV element.
 */
window.accountchooser.Page.prototype.appendMessageDiv = function(
    parent) {
  window.accountchooser.param.notNull(parent, 'parent');
  var message = jQuery('<div>').addClass('widget-message').appendTo(parent)
      .hide();
  return message;
};

/**
 * Appends a DIV with style {clear: both;} to the parent.
 * @param {Element} parent The parent element for the created element.
 */
window.accountchooser.Page.prototype.appendClearDiv = function(
    parent) {
  window.accountchooser.param.notNull(parent, 'parent');
  jQuery('<div>').addClass('cl').appendTo(parent);
};

/**
 * Creates a <code>center</code> element.
 * @param {Element} opt_child If set, append the element to the created center
 *        element.
 * @param {Element} opt_parent If set, appent the created center element to the
 *        element.
 * @return {Element} The created center element.
 */
window.accountchooser.Page.prototype.putCenter = function(
    opt_child, opt_parent) {
  var center = jQuery('<center>');
  if (opt_child) {
    center.append(opt_child);
  }
  if (opt_parent) {
    center.appendTo(opt_parent);
  }
  return center;
};

/**
 * Creates a clickable icon.
 * @param {string} icon File to be rendered.
 * @param {string} handler The handler function when the button is clicked.
 * @param {string} opt_param The parameter of the handler.
 * @param {string} opt_styleClass Style class to be applied.
 * @return {Object} Div of the created item.
 */
window.accountchooser.Page.prototype.createIconButton =
    function(icon, handler, opt_param, opt_styleClass) {
  var buttonDiv = jQuery('<div>').addClass('wizard-idp');
  if (opt_styleClass) {
    buttonDiv.addClass(opt_styleClass);
  }
  var buttonLink = jQuery('<a>').attr('href', 'javascript: void(0)');
  buttonLink.append(jQuery('<img>').attr('src', icon));
  var self = this;
  buttonDiv.click(function() {
    self[handler].call(self, opt_param);
    return false;
  });
  buttonLink.appendTo(buttonDiv);
  return buttonDiv;
};


/**
 * Creates a Nascar IDP link.
 * @param {Object} idp The IDP configuration data.
 * @param {string} idpId The IDP id to be rendered.
 * @param {string} handler The handler function when a IDP link is clicked.
 * @return {Element} The created element.
 * @private
 */
window.accountchooser.Page.prototype.createNascarLink_ =
    function(idp, idpId, handler) {
  window.accountchooser.param.notEmpty(idp, 'idp');
  window.accountchooser.param.notEmpty(idpId, 'idpId');
  window.accountchooser.param.notEmpty(handler, 'handler');
  var li = jQuery('<li>').css('backgroundImage', 'url("' + idp.image + '")').
      addClass('widget-idp');
  var idpLink = jQuery('<a>').attr('href', 'javascript: void(0)').
      append(jQuery('<span>').html(idp.label)).appendTo(li);
  var self = this;
  idpLink.click(function() {
    self[handler].call(self, idpId);
    return false;
  });
  return li;
};

/**
 * Creates a Nascar list.
 * @param {idpId: {}, ...} idps The configuration parameters for IDPs.
 * @param {Array} nascarIdpList The list of IDP ids to be rendered.
 * @param {string} handler The handler function when a IDP link is clicked.
 * @return {Element} The created element.
 */
window.accountchooser.Page.prototype.createNascarList =
    function(idps, nascarIdpList, handler) {
  window.accountchooser.param.notEmpty(idps, 'idps');
  window.accountchooser.param.notEmptyArray(nascarIdpList,
      'nascarIdpList');
  window.accountchooser.param.notEmpty(handler, 'handler');
  var nascar = jQuery('<ol>');
  for (var i = 0; i < nascarIdpList.length; i++) {
    var idpId = nascarIdpList[i];
    this.createNascarLink_(idps[idpId], idpId, handler).appendTo(nascar);
  }
  return nascar;
};

/**
 * Creates a HTML fragment with a title and a Nascar list.
 * @param {string} label The label text for the title.
 * @param {Object} idps The IDP configuration parameters.
 * @param {Array} nascarIdpList The list of IDP ids to be rendered.
 * @param {string} handler The handler function when a IDP link is clicked.
 * @return {Element} The created element.
 */
window.accountchooser.Page.prototype.createNascarSection =
    function(label, idps, nascarIdpList, handler) {
  window.accountchooser.param.notEmpty(idps, 'idps');
  window.accountchooser.param.notEmptyArray(nascarIdpList,
      'nascarIdpList');
  window.accountchooser.param.notEmpty(handler, 'handler');
  var nascarSection = jQuery('<div>').addClass('widget-nascar-list').append(
      jQuery('<h2>').html(label));
  this.createNascarList(idps, nascarIdpList, handler).appendTo(nascarSection);
  return nascarSection;
};

/**
 * Creates a widget header. Note: if opt_showCloseIcon is true, must provide
 * opt_handler.
 * @param {string} title The label of the header.
 * @param {boolean=} opt_showCloseIcon Whether to show the close icon.
 * @param {string=} opt_closeIcon The URL of the close icon.
 * @param {string=} opt_handler The handler function when the close icon is
 *     clicked.
 * @param {string=} opt_closeTitle The title for the close icon.
 * @param {string=} opt_styleClass An optional style class name for the header.
 * @return {Element} The created header DIV element.
 */
window.accountchooser.Page.prototype.createHeader = function(
    title, opt_showCloseIcon, opt_closeIcon, opt_handler, opt_closeTitle,
    opt_styleClass) {
  window.accountchooser.param.notNull(title, 'title');
  var headerBar = jQuery('<div>').addClass('widget-header').
      append(jQuery('<h1>').html(title));
  if (opt_styleClass) {
    headerBar.addClass(opt_styleClass);
  }
  if (opt_showCloseIcon) {
    window.accountchooser.param.notEmpty(opt_handler,
        'opt_handler');
    var closeIcon = jQuery('<span>').addClass('widget-close-icon').
        appendTo(headerBar);
    if (opt_closeTitle) {
      closeIcon.attr('title', opt_closeTitle);
    }
    var self = this;
    closeIcon.click(function() {
      self[opt_handler].call(self);
    });
  }
  return headerBar;
};

/**
 * Creates the account box.
 * @param {string} email The email of the user.
 * @param {boolean} legacy The type of the user.
 * @param {string} displayName The name of the user.
 * @param {url} photoUrl The URL of the user. If not set, default photo will be
 *     used.
 * @param {string} handler The handler function when the account is clicked.
 * @param {url} removeIconUrl The URL of the remove user icon.
 * @param {string} removeHandler The handler when user click on remove button.
 * @param {string} removeTitle The tooltip for the remove button.
 * @param {string} opt_providerId The provider of the account.
 * @return {Element} The created element.
 */
window.accountchooser.Page.prototype.createAccountBox =
    function(email, legacy, displayName, photoUrl, handler, removeIconUrl,
    removeHandler, removeTitle, opt_providerId) {
  window.accountchooser.param.notEmpty(email, 'email');
  window.accountchooser.param.notNull(legacy, 'legacy');
  window.accountchooser.param.notEmpty(photoUrl, 'photoUrl');
  window.accountchooser.param.notEmpty(handler, 'handler');
  window.accountchooser.param.notEmpty(removeHandler,
      'removeHandler');
  window.accountchooser.param.notEmpty(removeTitle,
      'removeTitle');

  var li = jQuery('<li>').addClass('widget-account');
  jQuery('<img>').attr('src', photoUrl).addClass('widget-account-photo').
      appendTo(li);

  var account = jQuery('<p>').appendTo(li);
  if (displayName) {
    account.append(
        jQuery('<strong>').addClass('widget-account-name').html(displayName));
  } else {
    account.addClass('widget-email-only');
  }
  account.append(jQuery('<span>').addClass('widget-account-email').html(email));

  var removeLink = jQuery('<a>').addClass('widget-account-remove').
      attr('title', removeTitle).attr('href', 'javascript: void(0)').
      appendTo(li);
  removeLink.append(jQuery('<img>').attr('src', removeIconUrl));
  var self = this;
  li.click(function() {
    self[handler].call(self, {email: email, displayName: displayName,
      legacy: !!legacy, photoUrl: photoUrl, providerId : opt_providerId});
    return false;
  });
  removeLink.click(function() {
    self[removeHandler].call(self, {email: email, displayName: displayName,
      legacy: !!legacy, photoUrl: photoUrl, providerId : opt_providerId});
    return false;
  });
  return li;
};

/**
 * Creates a busy image to indicate a popup is showing.
 * @param {string} busyIcon The URL of the icon.
 * @param {string} busyLabel The text.
 * @param {string} handler The handler function when the indicator is clicked.
 * @return {Element} The created element.
 */
window.accountchooser.Page.prototype.createPopupIndicator =
    function(busyIcon, busyLabel, handler) {
  window.accountchooser.param.notEmpty(busyIcon, 'busyIcon');
  window.accountchooser.param.notEmpty(busyLabel, 'busyLabel');
  window.accountchooser.param.notEmpty(handler, 'handler');

  var main = jQuery('<div>').addClass('widget-main');
  var loading = jQuery('<div>').addClass('widget-loading').appendTo(main);
  loading.append(jQuery('<img>').attr('src', busyIcon));
  loading.append(jQuery('<p>').html(busyLabel));
  var self = this;
  main.click(function() {
    self[handler].call(self);
    return false;
  });
  return main;
};

/**
 * Creates the account box.
 * @param {string} email The email of the user.
 * @param {string} displayName The name of the user.
 * @param {url} photoUrl The URL of the user. If not set, default photo will be
 *     used.
 * @param {string=} opt_styleClass Optional style clss.
 * @return {Element} The created element.
 */
window.accountchooser.Page.prototype.
   createLegacyAccountSignInBox = function(email, displayName, photoUrl,
   opt_styleClass) {
  window.accountchooser.param.notEmpty(email, 'email');
  window.accountchooser.param.notEmpty(photoUrl, 'photoUrl');
  var li = jQuery('<li>').addClass('widget-account');
  if (opt_styleClass) {
    li.addClass(opt_styleClass);
  }
  jQuery('<img>').attr('src', photoUrl).addClass('widget-account-photo').
      appendTo(li);
  var account = jQuery('<p>').appendTo(li);
  if (displayName) {
    account.append(
        jQuery('<strong>').addClass('widget-account-name').html(displayName));
  } else {
    account.addClass('widget-email-only');
  }
  account.append(jQuery('<span>').addClass('widget-account-email').html(email));
  return li;
};

/**
 * Creates the button with key hole.
 * @param {string} keyholeUrl The URL of the key hole.
 * @param {string} caption The caption of the button.
 * @param {string} handler The handler function when the button is clicked.
 * @param {string=} opt_styleClass An optional class name for the button.
 * @return {Element} The created element.
 */
window.accountchooser.Page.prototype.createKeyholeButton =
    function(keyholeUrl, caption, handler, opt_styleClass) {
  window.accountchooser.param.notEmpty(keyholeUrl, 'keyholeUrl');
  window.accountchooser.param.notEmpty(caption, 'caption');
  window.accountchooser.param.notEmpty(handler, 'handler');

  var button = jQuery('<a>').attr('href', 'javascript: void(0)').
      addClass('widget-keyhole-button');
  if (opt_styleClass) {
    button.addClass(opt_styleClass);
  }
  jQuery('<img>').attr('src', keyholeUrl).appendTo(button);
  button.append(caption);
  var self = this;
  button.click(function() {
    self[handler].call(self);
    return false;
  });
  return button;
};

/**
 * Creates the button with key hole.
 * @param {string} caption The caption of the button.
 * @param {string} handler The handler function when the button is clicked.
 * @param {string=} opt_styleClass An optional class name for the button.
 * @return {Element} The created element.
 */
window.accountchooser.Page.prototype.createRenderedButton =
    function(caption, handler, opt_styleClass) {
  window.accountchooser.param.notEmpty(caption, 'caption');
  window.accountchooser.param.notEmpty(handler, 'handler');

  var button = jQuery('<a>').attr('href', 'javascript: void(0)').
      addClass('widget-keyhole-button');
  if (opt_styleClass) {
    button.addClass(opt_styleClass);
  }
  button.append(caption);
  var self = this;
  button.click(function() {
    self[handler].call(self);
    return false;
  });
  return button;
};

/**
 * Appends a error message DIV to the parent.
 * @param {Element} parent The parent element for the created element.
 * @return {Element} The created DIV element.
 */
window.accountchooser.Page.prototype.appendErrorDiv = function(
    parent) {
  window.accountchooser.param.notNull(parent, 'parent');
  var errorDiv = jQuery('<div>').addClass('widget-error').append(jQuery('<p>')).
      appendTo(parent);
  return errorDiv;
};


/**
 * Creates the account box.
 * @param {object} account The account object.
 * @param {url} defaultPhotoUrl The default photo URL.
 * @param {string} mode The purpose to show this account box. Valid values:
 *     'selectable', 'removable', and 'readonly'.
 * @param {string} opt_handler The handler function when the account is clicked.
 * @return {Element} The created element.
 * @private
 */
window.accountchooser.Page.prototype.createAccountBox_ =
    function(account, defaultPhotoUrl, mode, opt_handler) {
  window.accountchooser.param.notNull(account, 'account');
  window.accountchooser.param.notEmpty(account.email,
      'account.email');
  window.accountchooser.param.notEmpty(defaultPhotoUrl,
      'defaultPhotoUrl');
  window.accountchooser.param.notEmpty(mode, 'mode');

  var title = account.email;
  if (account.providerId) {
    title += ' (' + account.providerId + ')';
  }
  var li = jQuery('<li>').attr('title', title);
  var photoUrl;
  if (/^https?:\/\//i.test(account.photoUrl)) {
    photoUrl = account.photoUrl;
  }
  var img = jQuery('<img>').attr('src', photoUrl || defaultPhotoUrl).
      addClass('widget-account-photo').appendTo(li);
  img.error(function() {
    img.attr('src', defaultPhotoUrl);
  });

  var accountInfo = jQuery('<p>').appendTo(li);
  if (account.displayName) {
    accountInfo.append(jQuery('<strong>').addClass('widget-account-name').
        text(account.displayName));
  } else {
    accountInfo.addClass('widget-email-only');
  }
  var emailLine = jQuery('<span>').addClass('widget-account-email').
      text(account.email).appendTo(accountInfo);
  if (account.providerId) {
    var idpLine = jQuery('<span>').addClass('widget-account-idp').
        text(account.providerId).appendTo(accountInfo);
    var faviconUrl = 'http://' + account.providerId + '/favicon.ico';
    var favicon = jQuery('<img>').attr('src', faviconUrl).
        attr('title', account.providerId).attr('alt', account.providerId);
    // Favicon is available
    favicon.load(function() {
      idpLine.hide();
      emailLine.prepend(favicon);
    });
  }

  if (mode == 'removable') {
    jQuery('<span>').addClass('widget-account-remove').appendTo(li);
    li.addClass('widget-selectable-account');
  } else if (mode == 'selectable') {
    jQuery('<span>').addClass('widget-account-select').appendTo(li);
    li.addClass('widget-selectable-account');
  }
  if (opt_handler) {
    var self = this;
    li.click(function() {
      self[opt_handler].call(self, account);
      return false;
    });
  }
  return li;
};

/**
 * Creates a selectable account box. Users can select an account by clicking on
 * it.
 * @param {object} account The account object.
 * @param {url} defaultPhotoUrl The default photo URL.
 * @param {string} handler The handler function when the account is clicked.
 * @return {Element} The created element.
 */
window.accountchooser.Page.prototype.createSelectableAccountBox =
    function(account, defaultPhotoUrl, handler) {
  window.accountchooser.param.notEmpty(handler, 'handler');
  return this.createAccountBox_(account, defaultPhotoUrl, 'selectable',
    handler);
};

/**
 * Creates a removable account box. Users can remove it by clicking on
 * it.
 * @param {object} account The account object.
 * @param {url} defaultPhotoUrl The default photo URL.
 * @param {string} handler The handler function when the account is clicked.
 * @return {Element} The created element.
 */
window.accountchooser.Page.prototype.createRemovableAccountBox =
    function(account, defaultPhotoUrl, handler) {
  window.accountchooser.param.notEmpty(handler, 'handler');
  return this.createAccountBox_(account, defaultPhotoUrl, 'removable', handler);
};

/**
 * Creates a readonly account box.
 * @param {object} account The account object.
 * @param {url} defaultPhotoUrl The default photo URL.
 * @return {Element} The created element.
 */
window.accountchooser.Page.prototype.createAccountBox =
    function(account, defaultPhotoUrl) {
  return this.createAccountBox_(account, defaultPhotoUrl, 'readonly');
};

/**
 * Creates the CDS learn more link.
 * @param {string} text for the link.
 * @param {string} url for the link.
 * @param {string=} opt_Language target language for the learn more page.
 * @return {Element} The created link.
 */
window.accountchooser.Page.prototype.createLearnMoreLink =
    function(text, url, opt_Language) {
  if (opt_Language) {
    if (url.indexOf('?') < 0) {
      url += '?lang=' + opt_Language;
    } else {
      url += '&lang=' + opt_Language;
    }
  }
  return jQuery('<a>').attr('href', url).attr('target', '_blank').html(text);
};

/**
 * Creates a widget header. Note: if opt_showCloseIcon is true, must provide
 * opt_handler.
 * @param {string} title The label of the header.
 * @param {string} opt_subTitle The label of the sub title.
 * @param {boolean=} opt_showCloseIcon Whether to show the close icon.
 * @param {string=} opt_closeIcon The URL of the close icon.
 * @param {string=} opt_handler The handler function when the close icon is
 *     clicked.
 * @param {string=} opt_closeTitle The title for the close icon.
 * @param {string=} opt_styleClass An optional style class name for the header.
 * @return {Element} The created header DIV element.
 */
window.accountchooser.Page.prototype.createHeader = function(
    title, opt_subTitle, opt_showCloseIcon, opt_closeIcon, opt_handler,
    opt_closeTitle, opt_styleClass) {
  window.accountchooser.param.notNull(title, 'title');
  var headerBar = jQuery('<div>').addClass('widget-header').
      append(jQuery('<h1>').html(title));
  if (opt_subTitle) {
    jQuery('<h2>').html(opt_subTitle).appendTo(headerBar);
    headerBar.addClass('widget-header-with-sub');
  }
  if (opt_styleClass) {
    headerBar.addClass(opt_styleClass);
  }
  if (opt_showCloseIcon) {
    window.accountchooser.param.notEmpty(opt_handler,
        'opt_handler');
    var closeIcon = jQuery('<span>').addClass('widget-close-icon').
        appendTo(headerBar);
    if (opt_closeTitle) {
      closeIcon.attr('title', opt_closeTitle);
    }
    var self = this;
    closeIcon.click(function() {
      self[opt_handler].call(self);
    });
  }
  return headerBar;
};

/**
 * Clears the error message.
 */
window.accountchooser.Page.prototype.clearError = function() {
  jQuery('.widget-error', this.container_).hide();
  this.getErrorElement().empty();
};

/**
 * Checks whether an error message is showing?
 * @return {boolean} {@code true} if an error message is showing,
 *     {@code false} otherwise.
 */
window.accountchooser.Page.prototype.isShowingError =
    function() {
  return jQuery('.widget-error', this.container_).css('display') != 'none';
};

/**
 * Shows an error message.
 * @param {string} errorHtml The error message (can use HTML tags).
 */
window.accountchooser.Page.prototype.setError = function(
    errorHtml) {
  jQuery('.widget-error', this.container_).show();
  this.getErrorElement().html(errorHtml);
};

/**
 * @return {Element} The DOM element for the error message.
 */
window.accountchooser.Page.prototype.getErrorElement =
    function() {
  return jQuery('.widget-error p', this.container_);
};

/**
 * @return {Array.<Element>} The DOM elements for all account shown.
 */
window.accountchooser.Page.prototype.getAccountElements =
    function() {
  return jQuery('li', this.container_);
};

/**
 * @param {number} index The position index of the account.
 * @return {Element} The DOM element for the account in the position specified
 *     by the index.
 */
window.accountchooser.Page.prototype.getAccountElement =
    function(index) {
  window.accountchooser.param.notNull(index, 'index');
  return jQuery('li:eq(' + index + ')', this.container_);
};

/**
 * @return {Element} The DOM element for confirm button.
 */
window.accountchooser.Page.prototype.getConfirmElement =
    function() {
  return jQuery('.widget-footer a.widget-keyhole-button', this.container_);
};

/**
 * @return {Element} The DOM element for cancel button.
 */
window.accountchooser.Page.prototype.getCancelElement =
    function() {
  return jQuery('.widget-footer a.widget-button-skip', this.container_);
};

/**
 * @return {Element} The DOM element for add account button.
 */
window.accountchooser.Page.prototype.getAddAccountElement =
    function() {
  return jQuery('.widget-footer a.widget-account-add', this.container_);
};


/**
 * Creates the nav bar.
 * @param {string} photoUrl The URL of the photo.
 * @param {string} label The email of the user.
 * @param {string} handler The handler function when the account is clicked.
 * @param {string} opt_styleClass The theme style class.
 * @return {Element} The created element.
 */
window.accountchooser.Page.prototype.createSigninBar =
    function(photoUrl, label, handler, opt_styleClass) {
  window.accountchooser.param.notEmpty(photoUrl, 'photoUrl');
  window.accountchooser.param.notEmpty(label, 'label');
  window.accountchooser.param.notEmpty(handler, 'handler');

  return this.createKeyholeButton(photoUrl, label, handler, opt_styleClass);
};

/**
 * Creates the nav bar.
 * @param {string} photoUrl The URL of the photo.
 * @param {string} label The email of the user.
 * @param {string} handler The handler function when the account is clicked.
 * @param {string} arrowUrl The optional style class.
 * @param {string} opt_styleClass The theme style class.
 * @return {Element} The created element.
 */
window.accountchooser.Page.prototype.createNavBar =
    function(photoUrl, label, handler, arrowUrl, opt_styleClass) {
  window.accountchooser.param.notEmpty(photoUrl, 'photoUrl');
  window.accountchooser.param.notEmpty(label, 'label');
  window.accountchooser.param.notEmpty(handler, 'handler');
  window.accountchooser.param.notEmpty(arrowUrl, 'arrowUrl');

  var button = jQuery('<a>').attr('href', 'javascript: void(0)').
      addClass('widget-keyhole-button');
  if (opt_styleClass) {
    button.addClass(opt_styleClass);
  }
  jQuery('<img>').attr('src', photoUrl).appendTo(button);
  button.append(jQuery('<span>').html(label));
  jQuery('<img>').addClass('widget-navbar-arrow').attr('src', arrowUrl).
      appendTo(button);
  var self = this;
  button.click(function() {
    self[handler].call(self);
    return false;
  });
  return button;
};

/**
 * Creates the drop down menu.
 * @param {Array=} menuArray An array whose element is
 *     {label, handler, opt_styleClass}. For example,
 *     [{label:'Switch account', handler:'onSwitchAccount'},
 *     {label:'Sign out', handler:'onSignOut'}].
 * @return {Element} The created element.
 */
window.accountchooser.Page.prototype.createDropMenu =
    function(menuArray) {
  window.accountchooser.param.notEmpty(menuArray, 'menuArray');
  var menu = jQuery('<ol>').addClass('widget-navbar-menu');
  for (var i = 0; i < menuArray.length; i++) {
    var item = menuArray[i];
    if (item && item.label && (item.url || item.handler)) {
      menu.append(this.createMenuItem_(item.label, item.url, item.handler,
          item.opt_styleClass));
    }
  }
  return menu;
};

/**
 * Creates a menu item in the dorpdown menu of the navbar.
 * @param {string} label The email of the user.
 * @param {string} url The URL to go when the menu item is clicked.
 * @param {string|Function} handler The handler function when the account is
 *     clicked.
 * @param {string=} opt_styleClass The login state of the account.
 * @return {Element} The created element.
 * @private
 */
window.accountchooser.Page.prototype.createMenuItem_ =
    function(label, url, handler, opt_styleClass) {
  window.accountchooser.param.notEmpty(label, 'label');
  window.accountchooser.param.notEmpty(
      url || handler, 'url or handler');
  var item = jQuery('<li>').addClass('widget-navbar-menuitem');
  if (opt_styleClass) {
    item.addClass(opt_styleClass);
  }
  var link = jQuery('<a>').append(jQuery('<nobr>').html(label)).appendTo(item);
  var self = this;
  link.click(function() {
    if (jQuery.isFunction(handler)) {
      handler.call(self);
    } else if (handler) {
      self[handler].call(self);
    } else {
      window.location.href = url;
    }
    return false;
  });
  return item;
};


/**
 * Name space for the UI controls.
 */
window.accountchooser.page =
    window.accountchooser.page || {};


/**
 * @class Class for the Empty Request page.
 * @constructor
 * @extends {window.accountchooser.Page}
 */
window.accountchooser.page.EmptyRequestPage = function() {
};
window.accountchooser.page.EmptyRequestPage.inheritsFrom(
    window.accountchooser.Page);

/**
 * Renders the Empty Request page.
 * @param {Element} container The rootDiv of the widget.
 * @param {string=} opt_clientDomain The domain of the client.
 * @param {Object=} opt_resource The resource object.
 */
window.accountchooser.page.EmptyRequestPage.prototype.render =
    function(container, opt_clientDomain, opt_resource) {
  this.clientDomain_ = opt_clientDomain;
  var resource = opt_resource ||
      window.accountchooser.labels.emptyRequestPage;
  this.parentClass.render.call(this, container, resource, false);
  this.render_();
};

/**
 * Really renders the page.
 * @private
 */
window.accountchooser.page.EmptyRequestPage.prototype.
    render_ = function() {
  this.createHeader(this.resource_.title, this.showCloseIcon_,
      this.resource_.closeIcon, 'onCloseIconClicked', this.resource_.close).
      appendTo(this.container_);
  var main = jQuery('<div>').addClass('widget-empty-request widget-main').
      appendTo(this.container_);
  this.appendErrorDiv(main).html(this.resource_.msg);
  var action = jQuery('<div>').appendTo(main);
  if (this.clientDomain_) {
    action.html(this.resource_.actionWithDomain.replace(/\%\%domain\%\%/g,
        this.clientDomain_));
  } else {
    action.html(this.resource_.action);
  }
  var footer = jQuery('<div>').addClass('widget-footer').appendTo(
      this.container_);
  jQuery('<a>').attr('href', this.resource_.acSiteUrl).attr(
      'target', '_blank').html(this.resource_.acSiteText).appendTo(footer);
};


/**
 * Class for the Share Account page.
 * @constructor
 * @extends {window.accountchooser.Page}
 */
window.accountchooser.page.ShareAccountPage = function() {
};
window.accountchooser.page.ShareAccountPage.inheritsFrom(
    window.accountchooser.Page);

/**
 * Renders the Account Chooser page.
 * @param {Element} container The rootDiv of the widget.
 * @param {Array.<Object>} accounts An array of accounts to be shared.
 * @param {Object=} opt_resource The resource object.
 * @param {boolean=} opt_showCloseIcon Whether to show the close icon.
 */
window.accountchooser.page.ShareAccountPage.prototype.render =
    function(container, accounts, opt_resource, opt_showCloseIcon) {
  this.accounts_ = accounts;
  var resource = opt_resource;
  if (!resource) {
    resource = window.accountchooser.labels.shareAccountPage;
  }
  this.parentClass.render.call(this, container, resource, false);
  this.render_();
};

/**
 * Really renders the page.
 * @private
 */
window.accountchooser.page.ShareAccountPage.prototype.render_ =
    function() {
  // header
  var title = this.accounts_.length <= 1 ? this.resource_.title :
      this.resource_.titleMultiple;
  this.createHeader(title, null, this.showCloseIcon_, this.resource_.closeIcon,
      'onCloseIconClicked', this.resource_.close).appendTo(this.container_);
  // main
  var main = jQuery('<div>').addClass('widget-accounts widget-main').
      appendTo(this.container_);
  var defaultPhotoUrl = window.accountchooser.images.noPhoto;
  // main - accounts
  if (this.accounts_.length) {
    var accounts = jQuery('<ol>').appendTo(main);
    for (var index = 0; index < this.accounts_.length; index++) {
      var account = this.accounts_[index];
      if (account) {
        this.createAccountBox(account, defaultPhotoUrl).appendTo(accounts);
      }
    }
  }
  // footer
  var footer = jQuery('<div>').addClass('widget-footer').
      appendTo(this.container_);
  var confirm = this.accounts_.length <= 1 ? this.resource_.confirm :
      this.resource_.confirmMultiple;
  this.createRenderedButton(confirm, 'onShareConfirmedClicked').
      appendTo(footer);
  this.createLinkButton(this.resource_.cancel, 'onShareCancelClicked',
      'widget-button-skip').appendTo(footer);
};

window.accountchooser.page.ShareAccountPage.prototype.
    onShareConfirmedClicked = function(account) {
};

window.accountchooser.page.ShareAccountPage.prototype.
    onShareCancelClicked = function(account) {
};


/**
 * Class for the Select Account page.
 * @constructor
 * @extends {window.accountchooser.Page}
 */
window.accountchooser.page.SelectAccountPage = function() {
};
window.accountchooser.page.SelectAccountPage.inheritsFrom(
    window.accountchooser.Page);

/**
 * Renders the Select Account page.
 * @param {Element} container The rootDiv of the widget.
 * @param {Array.<Object>=} opt_localAccounts An array of accounts passed in by
 *     the calling site.
 * @param {Array.<Object>=} opt_cdsAccounts An array of accounts from CDS.
 * @param {boolean=} opt_showAllInfo Whether to show all info of an account. NOT
 *     USED.
 * @param {string=} opt_domain The domain name of the calling site. If provided
 *     and the title text contains placeholder '%%domain%%' then it'll be
 *     replaced by the domain.
 * @param {string=} opt_language the language which is used to create the
 *     corresponding learn more link.
 * @param {Object=} opt_resource The resource object.
 * @param {boolean=} opt_showCloseIcon Whether to show the close icon.
 */
window.accountchooser.page.SelectAccountPage.prototype.render =
    function(container, opt_localAccounts, opt_cdsAccounts, opt_showAllInfo,
    opt_domain, opt_language, opt_resource, opt_showCloseIcon) {
  this.localAccounts_ = opt_localAccounts || [];
  this.cdsAccounts_ = opt_cdsAccounts || [];
  var resource = opt_resource;
  if (!resource) {
    resource = window.accountchooser.labels.selectAccountPage;
  }
  this.parentClass.render.call(this, container, resource, false);

  this.showAllInfo = !!opt_showAllInfo;
  this.siteDomain = opt_domain || '';
  this.language = opt_language;
  this.render_();
};

/**
 * Really renders the page.
 * @private
 */
window.accountchooser.page.SelectAccountPage.prototype.render_ =
    function() {
  // header
  this.createHeader(this.resource_.title, this.siteDomain,
      this.showCloseIcon_, this.resource_.closeIcon, 'onCloseIconClicked',
      this.resource_.close).appendTo(this.container_);
  // main
  var main = jQuery('<div>').addClass('widget-accounts widget-main').
      appendTo(this.container_);
  var defaultPhotoUrl = window.accountchooser.images.noPhoto;
  // main - local accounts
  if (this.localAccounts_.length) {
    var accounts = jQuery('<ol>').appendTo(main);
    for (var i = 0; i < this.localAccounts_.length; i++) {
      var account = this.localAccounts_[i];
      if (account && account.email) {
        this.createSelectableAccountBox(account, defaultPhotoUrl,
            'onAccountClicked').appendTo(accounts);
      }
    }
  }
  // main - cds accounts
  if (this.cdsAccounts_.length) {
    var accounts = jQuery('<ol>').appendTo(main);
    for (var i = 0; i < this.cdsAccounts_.length; i++) {
      var account = this.cdsAccounts_[i];
      if (account && account.email) {
        this.createSelectableAccountBox(account, defaultPhotoUrl,
            'onAccountClicked').appendTo(accounts);
      }
    }
  }
  // footer
  var footer = jQuery('<div>').addClass('widget-footer').appendTo(
      this.container_);
  this.createLinkButton(this.resource_.addAccount, 'onAddAccountClicked',
      'widget-account-add').appendTo(footer);
};

window.accountchooser.page.SelectAccountPage.prototype.
    onAccountClicked = function(account) {
};

window.accountchooser.page.SelectAccountPage.prototype.
    onAddAccountClicked = function() {
};


/**
 * Class for the Update Account page.
 * @constructor
 * @extends {window.accountchooser.Page}
 */
window.accountchooser.page.UpdateAccountPage = function() {
};
window.accountchooser.page.UpdateAccountPage.inheritsFrom(
    window.accountchooser.Page);

/**
 * Renders the Update Account page.
 * @param {Element} container The rootDiv of the widget.
 * @param {object} account The account to update.
 * @param {string=} opt_language the language which is used to create the
 *     corresponding learn more link.
 * @param {Object=} opt_resource The resource object.
 * @param {boolean=} opt_showCloseIcon Whether to show the close icon.
 */
window.accountchooser.page.UpdateAccountPage.prototype.render =
    function(container, account, opt_language, opt_resource,
    opt_showCloseIcon) {
  this.account_ = account;
  var resource = opt_resource;
  if (!resource) {
    resource = window.accountchooser.labels.updateAccountPage;
  }
  this.parentClass.render.call(this, container, resource, false);

  this.language = opt_language;
  this.render_();
};

/**
 * Really renders the page.
 * @private
 */
window.accountchooser.page.UpdateAccountPage.prototype.render_ =
    function() {
  // header
  this.createHeader(this.resource_.title, null, this.showCloseIcon_,
      this.resource_.closeIcon, 'onCloseIconClicked', this.resource_.close).
      appendTo(this.container_);
  // main
  var main = jQuery('<div>').addClass('widget-accounts widget-main').
      appendTo(this.container_);
  // main - account
  var updateAccount = jQuery('<ol>').appendTo(main);
  var defaultPhotoUrl = window.accountchooser.images.noPhoto;
  this.createAccountBox(this.account_, defaultPhotoUrl).appendTo(updateAccount);
  // footer
  var footer = jQuery('<div>').addClass('widget-footer').appendTo(
      this.container_);
  this.createRenderedButton(this.resource_.confirm, 'onUpdateConfirmedClicked').
      appendTo(footer);
  this.createLinkButton(this.resource_.cancel, 'onUpdateCancelClicked',
      'widget-button-skip').appendTo(footer);
};

window.accountchooser.page.UpdateAccountPage.prototype.
    onUpdateConfirmedClicked = function(account) {
};

window.accountchooser.page.UpdateAccountPage.prototype.
    onUpdateCancelClicked = function(account) {
};


/**
 * Class for the Manage Account page.
 * @constructor
 * @extends {window.accountchooser.Page}
 */
window.accountchooser.page.ManageAccountPage = function() {
};
window.accountchooser.page.ManageAccountPage.inheritsFrom(
    window.accountchooser.Page);

/**
 * Renders the Manage Account page.
 * @param {Element} container The rootDiv of the widget.
 * @param {Array.<Object>=} opt_accounts An array of accounts to be shown.
 * @param {string=} opt_language the language which is used to create the
 *     corresponding learn more link.
 * @param {Object=} opt_resource The resource object.
 * @param {boolean=} opt_showCloseIcon Whether to show the close icon.
 */
window.accountchooser.page.ManageAccountPage.prototype.render =
    function(container, opt_accounts, opt_language, opt_resource,
    opt_showCloseIcon) {
  this.accounts_ = opt_accounts || [];
  var resource = opt_resource ||
      window.accountchooser.labels.manageAccountPage;
  this.parentClass.render.call(this, container, resource, false);
  this.language = opt_language;
  this.render_();
};

/**
 * Really renders the page.
 * @private
 */
window.accountchooser.page.ManageAccountPage.prototype.render_ =
    function() {
  // header
  this.createHeader(this.resource_.title, null, this.showCloseIcon_,
      this.resource_.closeIcon, 'onCloseIconClicked', this.resource_.close).
      appendTo(this.container_);
  // main
  var main = jQuery('<div>').addClass('widget-accounts widget-main').
      appendTo(this.container_);
  // main - error
  this.appendErrorDiv(main).hide();
  var defaultPhotoUrl = window.accountchooser.images.noPhoto;
  // main - accounts
  if (this.accounts_.length) {
    var accounts = jQuery('<ol>').appendTo(main);
    for (var i = 0; i < this.accounts_.length; ++i) {
      var account = this.accounts_[i];
      if (account && account.email) {
        this.createRemovableAccountBox(account, defaultPhotoUrl,
            'onAccountClicked').appendTo(accounts);
      }
    }
  }
};

/**
 * Performs default action when an account entry is clicked.
 * @param {Object} account The account entry which is clicked.
 */
window.accountchooser.page.ManageAccountPage.prototype.
    onAccountClicked = function(account) {
};



/**
 * @class Common classes for all services of the CDS.
 * @constructor
 */
window.accountchooser.Service = function() {
};

/**
 * Sets CDS configuration to the service.
 * @param {object} cdsConfig The configuration of the CDS.
 */
window.accountchooser.Service.prototype.setCdsConfig =
    function(cdsConfig) {
  this.cdsConfig_ = cdsConfig;
};

/**
 * Sets the container HTML element that render the UI.
 * @param {element} container The container HTML element.
 */
window.accountchooser.Service.prototype.setContainer =
    function(container) {
  this.container_ = container;
};

/**
 * Checks the type of Request.
 * @param {class} expectType The expected type.
 * @param {boolean} opt_notToClient If false, redirect back to client
 *     automatically.
 * @return {boolean} Returns true if the type is same as expected.
 *     Otherwise return false, and send back error response.
 * @private
 */
window.accountchooser.Service.prototype.checkRequestType_ =
    function(expectType, opt_notToClient) {
  var error = null;
  if (! this.request_ instanceof
      window.accountchooser.rpc.Request) {
    error = {
      code: -32600,
      message: 'Invalid Request',
      data: 'Parameter must be a Request type.'
    };
  } else if (! this.request_ instanceof expectType) {
    error = {
      code: -32600,
      message: 'Invalid Request',
      data: 'Error request type: expect type is {' + expectType + '}.'
    };
  }
  if (error) {
    this.sendErrorResponse_(error, opt_notToClient);
    return false;
  }
  return true;
};

/**
 * Executes the service with the input request object.
 * @param {window.accountchooser.rpc.Request} request
 *     The request object.
 * @param {string} clientDomain The domain of the client.
 */
window.accountchooser.Service.prototype.executeRequest =
    function(request, clientDomain) {
  if (request) {
    this.request_ = request;
    this.clientDomain_ = clientDomain;
    // If disabled, send disabled error response back unless the service is
    // ManageService. In this case, there's no client to send the response.
    // Instead just execute the service and ManageService will handle this.
    if (window.accountchooser.util.browserconfig.isDisabled() &&
        !(this instanceof window.accountchooser.ManageService) &&
        !(this instanceof window.accountchooser.AboutService)) {
      this.sendDisabledErrorResponse_();
    } else {
      this.execute();
    }
  } else {
    window.accountchooser.util.log(
        'Empty request received, ignored.');
  }
};

/**
 * Executes the service with the input request object.
 */
window.accountchooser.Service.prototype.execute =
    function() {
  var error = {
    code: -32601,
    message: 'Method not found',
    data: 'Unimplemented \'execute\' method!'
  };
  this.sendErrorResponse_(error);
};

/**
 * Sends back Response to client.
 * @param {window.accountchooser.rpc.Response} response
 *     A Response object wraps the result of the Request.
 * @param {boolean} opt_notToClient If false, redirect back to client
 *     automatically.
 * @private
 */
window.accountchooser.Service.prototype.sendResponse_ =
    function(response, opt_notToClient) {
  window.accountchooser.rpc.callClient(response);
  if (!opt_notToClient) {
    this.goToClient();
  }
};

/**
 * Sends an error Response to client.
 * @param {object} error error information as defined by JSON-PRC.
 * @param {boolean} opt_notToClient If false, redirect back to client
 *     automatically.
 * @private
 */
window.accountchooser.Service.prototype.sendErrorResponse_ =
    function(error, opt_notToClient) {
  var response = new window.accountchooser.rpc.Response(
      this.request_.getId(), undefined, error);
  this.sendResponse_(response, opt_notToClient);
};

/**
 * Sends a service disabled error Response to client.
 * @param {boolean} opt_notToClient If false, redirect back to client
 *     automatically.
 * @private
 */
window.accountchooser.Service.prototype.
    sendDisabledErrorResponse_ = function(opt_notToClient) {
  var error = {
    code: -32601,
    message: 'Method not found',
    data: 'Service is disabled. Method is not available.'
  };
  this.sendErrorResponse_(error, opt_notToClient);
};

/**
 * Sends a Response with result to client.
 * @param {string|number|object} result The result object.
 * @param {boolean} opt_notToClient If false, redirect back to client
 *     automatically.
 * @private
 */
window.accountchooser.Service.prototype.sendDoneResponse_ =
    function(result, opt_notToClient) {
  var response = new window.accountchooser.rpc.Response(
      this.request_.getId(), result);
  this.sendResponse_(response, opt_notToClient);
};

/**
 * Sends a Response to indicate whether user store the account.
 * @param {boolean} stored whether user store the account.
 * @param {boolean} opt_notToClient If false, redirect back to client
 *     automatically.
 */
window.accountchooser.Service.prototype.sendStoreResponse =
    function(stored, opt_notToClient) {
  var positiveCallbackUrl = this.getClientConfigValue('positiveCallbackUrl');
  var negativeCallbackUrl = this.getClientConfigValue('negativeCallbackUrl');
  if (stored && positiveCallbackUrl) {
    window.location.replace(positiveCallbackUrl);
  } else if (!stored && negativeCallbackUrl) {
    window.location.replace(negativeCallbackUrl);
  } else {
    this.sendDoneResponse_({stored: stored}, opt_notToClient);
  }
};

/**
 * Sends a Response to indicate user select an account entry.
 * @param {object} account the account user selected.
 * @param {object} opt_idpAssertion the IDP assertion with the selected account.
 * @param {boolean} opt_notToClient If false, redirect back to client
 *     automatically.
 */
window.accountchooser.Service.prototype.sendSelectResponse =
    function(account, opt_idpAssertion, opt_notToClient) {
  this.sendDoneResponse_({account: account, idpAssertion: opt_idpAssertion},
      opt_notToClient);
};

/**
 * Sends a Response to indicate user click the 'add account' button.
 * @param {boolean} opt_notToClient If false, redirect back to client
 *     automatically.
 */
window.accountchooser.Service.prototype.sendAddAccountResponse =
    function(opt_notToClient) {
  this.sendDoneResponse_({addAccount: true}, opt_notToClient);
};

/**
 * Sends a Response to indicate whether the user update the account.
 * @param {boolean} updated whether the user update the account.
 * @param {boolean} opt_notToClient If false, redirect back to client
 *     automatically.
 */
window.accountchooser.Service.prototype.sendUpdateResponse =
    function(updated, opt_notToClient) {
  var positiveCallbackUrl = this.getClientConfigValue('positiveCallbackUrl');
  var negativeCallbackUrl = this.getClientConfigValue('negativeCallbackUrl');
  if (updated && positiveCallbackUrl) {
    window.location.replace(positiveCallbackUrl);
  } else if (!updated && negativeCallbackUrl) {
    window.location.replace(negativeCallbackUrl);
  } else {
    this.sendDoneResponse_({updated: updated}, opt_notToClient);
  }
};

/**
 * Returns to the client.
 */
window.accountchooser.Service.prototype.goToClient = function() {
  var request = this.request_;
  this.request_ = null;
  this.clientDomain_ = null;
  if (!this.cdsConfig_.popupMode) {
    window.location = request.params_.clientConfig.clientCallbackUrl;
  } else if (!request.params_.clientConfig.keepPopup) {
    window.close();
  }
};

/**
 * Gets the configuration value from the Request.
 * @param {string} config The name of the configuration.
 * @return {string|object} The value of the configuration.
 */
window.accountchooser.Service.prototype.getClientConfigValue =
    function(config) {
  return config && this.request_ && this.request_.params_ &&
      this.request_.params_.clientConfig &&
      this.request_.params_.clientConfig[config];
};

/**
 * Service types.
 * @enum {string}
 */
window.accountchooser.ServiceType = {
  MANAGE: 'manage',
  SELECT: 'select',
  STORE: 'store',
  UPDATE: 'update',
  ABOUT: 'about'
};


/**
 * @class Class for Manage Service.
 * @constructor
 * @extends {window.accountchooser.Service)
 */
window.accountchooser.ManageService = function() {
};
window.accountchooser.ManageService.inheritsFrom(
    window.accountchooser.Service);

/**
 * Executes the service with the input request object.
 */
window.accountchooser.ManageService.prototype.execute =
    function() {
  if (!this.checkRequestType_(
      window.accountchooser.rpc.ManageRequest)) {
    return;
  }
  var accounts =
      window.accountchooser.util.accountstorage.readAccounts();
  this.showManageAccountPage_(accounts);
};

/**
 * Shows the manage account page of account chooser.
 * @param {Array.<Object>} accounts A list of accounts stored in CDS.
 * @private
 */
window.accountchooser.ManageService.prototype.
    showManageAccountPage_ = function(accounts) {
  this.container_.empty();
  this.page_ = new window.accountchooser.page.
      ManageAccountPage();
  var self = this;
  this.page_.onAccountClicked = function(account) {
    window.accountchooser.util.accountstorage.removeAccount(
        account);
    var accounts = window.accountchooser.util.accountstorage.
        readAccounts();
    self.showManageAccountPage_(accounts);
    self.page_.setError(window.accountchooser.labels.
        manageAccountPage.deleteReminder);
  };
  this.page_.render(this.container_, accounts, undefined, undefined, false);
};


/**
 * @class Class for Store Service.
 * @constructor
 * @extends {window.accountchooser.Service}
 */
window.accountchooser.StoreService = function() {
};
window.accountchooser.StoreService.inheritsFrom(
    window.accountchooser.Service);

/**
 * Executes the service with the input request object.
 */
window.accountchooser.StoreService.prototype.execute =
    function() {
  if (!this.checkRequestType_(
      window.accountchooser.rpc.StoreRequest)) {
    return;
  }
  var cdsAccounts = window.accountchooser.util.
      accountstorage.readAccounts();
  // Sanitize the accounts passed by the site.
  var accounts = window.accountchooser.util.sanitizeAccounts(
      this.request_.params_.accounts || [],
      window.accountchooser.util.accountSanitizer);
  this.accounts_ = [];
  for (var i = 0, length = accounts.length; i < length; i++) {
    var account = accounts[i];
    var stored = false;
    for (var j = 0; j < cdsAccounts.length; j++) {
      if (window.accountchooser.util.accountstorage.matchAccount(
          cdsAccounts[j], account)) {
        stored = true;
        break;
      }
    }
    if (!stored) {
      this.accounts_.push(account);
    }
  }
  if (this.accounts_.length == 0) {
    this.sendStoreResponse(true);
  } else {
    this.showShareAccountPage_();
  }
};

/**
 * Shows the account chooser page.
 * @param {Array.<Object>} accounts The account to be stored.
 * @param {Array.<Object>} cdsAccounts The account list stored in the CDS.
 * @private
 */
window.accountchooser.StoreService.prototype.
    showShareAccountPage_ = function() {
  this.container_.empty().addClass('widget-panel-chooser');
  var self = this;
  this.page_ =
    new window.accountchooser.page.ShareAccountPage();

  this.page_.onShareConfirmedClicked = function() {
    for (var i = 0; i < self.accounts_.length; i++) {
      window.accountchooser.util.accountstorage.addAccount(
          self.accounts_[i]);
    }
    self.sendStoreResponse(true);
  },

  this.page_.onShareCancelClicked = function() {
    self.sendStoreResponse(false);
  },

  this.page_.render(this.container_, this.accounts_, undefined, false);
};



/**
 * @class Class for Select Service.
 * @constructor
 * @extends {window.accountchooser.Service}
 */
window.accountchooser.SelectService = function() {
};
window.accountchooser.SelectService.inheritsFrom(
    window.accountchooser.Service);

/**
 * Executes the service with the input request object.
 */
window.accountchooser.SelectService.prototype.execute =
    function() {
  if (!this.checkRequestType_(
      window.accountchooser.rpc.SelectRequest)) {
    return;
  }
  var showAll = this.getClientConfigValue('showAll');
  this.filter = {withEmail: !showAll,
    idpList: this.getClientConfigValue('idpFilter')};

  var cdsAccounts = window.accountchooser.util.accountstorage.
      readAccounts(this.filter) || [];
  // Sanitize the accounts passed by the site.
  var localAccounts =
      window.accountchooser.util.sanitizeAccounts(
          this.request_.params_.localAccounts || [],
          window.accountchooser.util.accountSanitizer);
  // Avoid duplication of accounts.
  localAccounts = this.removeDuplicatedAccounts_(localAccounts, cdsAccounts);

  if (!localAccounts.length && !cdsAccounts.length) {
    this.sendAddAccountResponse();
  } else {
    var language = this.getClientConfigValue('language');
    this.showSelectAccountPage_(localAccounts, cdsAccounts, showAll, language);
  }
};

/**
 * Gets assertions for the account.
 * @param {object} account The account to get assertion.
 * @private
 */
window.accountchooser.SelectService.prototype.getAssertion_ =
    function(account) {
  var idp = window.accountchooser.rpc.isSupportedIdp(account);
  if (!idp) {
    this.sendSelectResponse(account);
    return;
  }

  var self = this;
  var callback = function(response) {
    if (response && response.getResult()) {
      self.sendSelectResponse(account, response.getResult().idpAssertion);
    } else {
      self.sendSelectResponse(account);
    }
  };
  var timeout = function() {
    self.sendSelectResponse(account);
  };
  var request =
      new window.accountchooser.rpc.IdpAuthRequest(account,
      {clientCallbackUrl: this.getClientConfigValue('clientCallbackUrl')});
  window.accountchooser.rpc.callIdp(idp, request, callback,
      timeout);
};

/**
 * Shows the account chooser page.
 * @param {Array.<object>} localAccounts The account list passed in by the
 *   calling site.
 * @param {Array.<object>} cdsAccounts The account list stored in the CDS.
 * @param {boolean=} opt_showAll Whether to show all information of an account.
 * @param {string=} opt_language The widget's language which is used to create
 *     the corresponding learn more link.
 * @private
 */
window.accountchooser.SelectService.prototype.
    showSelectAccountPage_ =
    function(localAccounts, cdsAccounts, opt_showAll, opt_language) {
  this.container_.empty().addClass('widget-panel-chooser');
  var self = this;
  this.page_ =
    new window.accountchooser.page.SelectAccountPage();

  this.page_.onAccountClicked = function(account) {
    window.accountchooser.util.accountstorage.addAccount(
        account);
    self.getAssertion_(account);
  };

  this.page_.onAddAccountClicked = function() {
    self.sendAddAccountResponse();
  };

  var callbackDomain = this.request_.params_.clientConfig.clientCallbackUrl &&
      window.accountchooser.util.getDomainFromUrl(
          this.request_.params_.clientConfig.clientCallbackUrl);
  this.page_.render(this.container_, localAccounts, cdsAccounts, opt_showAll,
      callbackDomain, opt_language, undefined, false);
};

/**
 * Removes an account from the a list.
 * @param {object} account The account to be removed.
 * @param {Array.<object>} accountList The account list.
 * @private
 */
window.accountchooser.SelectService.prototype.
    removeAccountFromList_ = function(account, accountList) {
  for (var i = 0; i < accountList.length; i++) {
    if (window.accountchooser.util.accountstorage.matchAccount(
        accountList[i], account)) {
      accountList.splice(i, 1);
      break;
    }
  }
};

/**
 * Removes the duplicated accounts in the account list passed in by the calling
 * site from the accounts stored in the CDS.
 * @param {Array.<object>} localAccounts The account list passed in by the
 *   calling site.
 * @param {Array.<object>} cdsAccounts The account list stored in the CDS.
 * @return {Array.<object>} The deduplicated account list of the calling site.
 * @private
 */
window.accountchooser.SelectService.prototype.
    removeDuplicatedAccounts_ = function(localAccounts, cdsAccounts) {
  var result = [];
  if (localAccounts && localAccounts.length) {
    for (var i = 0; i < localAccounts.length; i++) {
      var account = localAccounts[i];
      var found = false;
      for (var j = 0; j < cdsAccounts.length; j++) {
        if (window.accountchooser.util.accountstorage.
            matchAccount(cdsAccounts[j], account)) {
          found = true;
          break;
        }
      }
      if (!found) {
        result.push(account);
      }
    }
  }
  return result;
};


/**
 * @class Class for Update Service.
 * @constructor
 * @extends {window.accountchooser.Service}
 */
window.accountchooser.UpdateService = function() {
};
window.accountchooser.UpdateService.inheritsFrom(
    window.accountchooser.Service);

/**
 * Executes the service with the input request object.
 */
window.accountchooser.UpdateService.prototype.execute =
    function() {
  if (!this.checkRequestType_(
      window.accountchooser.rpc.UpdateRequest)) {
    return;
  }
  // Sanitize the account passed by the site.
  var account = window.accountchooser.util.sanitizeAccount(
      this.request_.params_.account,
      window.accountchooser.util.accountSanitizer);
  var cdsAccounts = window.accountchooser.util.
      accountstorage.readAccounts() || [];
  var found = false;
  for (var i = 0; i < cdsAccounts.length; i++) {
    var other = cdsAccounts[i];
    if (window.accountchooser.util.accountstorage.matchAccount(
        account, other)) {
      // If the accounts are compatible, show the merged account info.
      if (window.accountchooser.util.accountstorage.
          checkCompatible(account, other)) {
        account.displayName = account.displayName || other.displayName;
        account.photoUrl = account.photoUrl || other.photoUrl;
      }
      found = true;
      break;
    }
  }
  if (found) {
    var language = this.getClientConfigValue('language');
    this.showUpdateAccountPage_(account, language);
  } else {
    this.sendUpdateResponse(false);
  }
};

/**
 * Shows the account updating page.
 * @param {object} account The account to be updated.
 * @param {string=} opt_language The widget's language which is used to create
 *     the corresponding learn more link.
 * @private
 */
window.accountchooser.UpdateService.prototype.
    showUpdateAccountPage_ = function(account, opt_language) {
  this.container_.empty().addClass('widget-panel-chooser');
  var self = this;
  this.page_ =
    new window.accountchooser.page.UpdateAccountPage();

  this.page_.onUpdateConfirmedClicked = function() {
    window.accountchooser.util.accountstorage.refreshAccount(
        account);
    self.sendUpdateResponse(true);
  },
  this.page_.onUpdateCancelClicked = function() {
    self.sendUpdateResponse(false);
  },

  this.page_.render(this.container_, account, opt_language, undefined, false);
};

/**
 * Class for About Service.
 * @constructor
 * @extends {window.accountchooser.Service}
 */
window.accountchooser.AboutService = function() {
};
window.accountchooser.AboutService.inheritsFrom(
    window.accountchooser.Service);

/**
 * Executes the service with the input request object. Do nothing.
 */
window.accountchooser.AboutService.prototype.execute =
    function() {
  // Do nothing.
};

