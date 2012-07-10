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

//java/com/google/apps/easyconnect/easyrp/widget/javascript/learnmore/res-source.js
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
// Copyright 2012 Google Inc. All Rights Reserved.

/**
 * @fileoverview Defines messages for the account chooser learn more page.
 * @author mengcheng@google.com (Mengcheng Duan)
 */

/**
 * @desc [accountchooser] Window title for this page.
 */
var MSG_ABOUT_PAGE_TITLE = 'Learn more about the central account chooser ' +
    'service - Account Chooser working group';

/**
 * @desc [accountchooser] Header for the page.
 */
var MSG_ABOUT_PAGE_HEADER =
    'Learn more about the central account chooser service';

/**
 * @desc [accountchooser] This message is shown under the page title and gives a
 * pointer to site owners who are interested in deploying account chooser to the
 * instruction page.
 * @param {string} beginLink placeholder for <a> tag.
 * @param {string} endLink placeholder for </a> tag.
 * @return {string} the message with hyperlink.
 */
var MSG_ABOUT_PAGE_DEPLOY_REMINDER = function(beginLink, endLink) {
  return 'If you manage a website, ' + beginLink + 'learn how you can deploy ' +
      'an account chooser' + endLink + '.';
};

/**
 * @desc [accountchooser] This message is the first paragraph of section 1 and
 * explains how to select an account from account chooser.
 * @param {string} beginLink placeholder for <a> tag.
 * @param {string} endLink placeholder for </a> tag.
 * @return {string} the message with hyperlink.
 */
var MSG_ABOUT_PAGE_SEC1_PAR1 = function(beginLink, endLink) {
  return 'Websites are replacing traditional login boxes with an account ' +
      'chooser to make those sites more secure and easier to use (' +
      beginLink + 'explore a sample site' + endLink + '). When you try to ' +
      'sign in to such a site, you will see a page like this one with the ' +
      'list of accounts you most frequently use on this computer:';
};

/**
 * @desc [accountchooser] This message is the second paragraph of section 1 and
 * explains how to use account chooser.
 */
var MSG_ABOUT_PAGE_SEC1_PAR2 = 'Simply click the account that you want to ' +
    'use. If you do not see an entry for the account you want to use, then ' +
    'simply click the button at the bottom to add another account.';

/**
 * @desc [accountchooser] This message is the third paragraph of section 1 and
 * explains how to add an account to account chooser.
 */
var MSG_ABOUT_PAGE_SEC1_PAR3 = 'Once you log into the account, you will be ' +
    'shown a page like this one asking you to confirm that you want to add ' +
    'it to the list of accounts on this computer.';

/**
 * @desc [accountchooser] Header for section 2.
 */
var MSG_ABOUT_PAGE_SUB_HEADER1 = 'Advanced Topics';

/**
 * @desc [accountchooser] This message is the first paragraph of section 2 and
 * explains how to remove an account from account chooser.
 */
var MSG_ABOUT_PAGE_SEC2_PAR1 = 'If you want to remove an account, you can ' +
    'use your mouse to hover over that account entry and then choose the X ' +
    'button in the top corner to delete it (or on mobile browsers click the ' +
    'Edit button).  However, if you are using a shared computer and you ' +
    'don\'t want to mix the account entries with other people, then you ' +
    'should consider using an approach that keeps your browser information ' +
    'separate.  For example:';

/**
 * @desc [accountchooser] This message shows the first approach of how to keep
 * browsers information separate in a shared computer.
 */
var MSG_ABOUT_PAGE_SEC2_PAR1_LIST1 = 'Use different operating system accounts';

/**
 * @desc [accountchooser] This message shows the second approach of how to keep
 * browsers information separate in a shared computer.
 */
var MSG_ABOUT_PAGE_SEC2_PAR1_LIST2 = 'Use different browsers';

/**
 * @desc [accountchooser] This message shows the third approach of how to keep
 * browsers information separate in a shared computer.
 * @param {string} beginLink1 placeholder for <a> tag.
 * @param {string} endLink1 placeholder for </a> tag.
 * @param {string} beginLink2 placeholder for <a> tag.
 * @param {string} endLink2 placeholder for </a> tag.
 * @return {string} the message with hyperlink.
 */
var MSG_ABOUT_PAGE_SEC2_PAR1_LIST3 = function(beginLink1, endLink1, beginLink2,
    endLink2) {
  return 'Use different profiles in the browser (learn how to use them with ' +
      beginLink1 + 'Firefox' + endLink1 + ' or ' + beginLink2 +
      'Google Chrome' + endLink2 + ')';
};

/**
 * @desc [accountchooser] This message shows the fourth approach of how to keep
 * browsers information separate in a shared computer.
 * @param {string} beginLink1 placeholder for <a> tag.
 * @param {string} endLink1 placeholder for </a> tag.
 * @param {string} beginLink2 placeholder for <a> tag.
 * @param {string} endLink2 placeholder for </a> tag.
 * @param {string} beginLink3 placeholder for <a> tag.
 * @param {string} endLink3 placeholder for </a> tag.
 * @param {string} beginLink4 placeholder for <a> tag.
 * @param {string} endLink4 placeholder for </a> tag.
 * @return {string} the message with hyperlink.
 */
var MSG_ABOUT_PAGE_SEC2_PAR1_LIST4 = function(beginLink1, endLink1, beginLink2,
    endLink2, beginLink3, endLink3, beginLink4, endLink4) {
  return 'Use the browser\'s private browsing feature (learn how to use it ' +
      'with ' + beginLink1 + 'Internet Explorer' + endLink1 + ', ' +
      beginLink2 + 'Firefox' + endLink2 + ', ' + beginLink3 + 'Google Chrome' +
      endLink3 + ', or ' + beginLink4 + 'Safari' + endLink4 + ')';
};

/**
 * @desc [accountchooser] This message is the second paragraph of section 2 and
 * explains privacy related information.
 * @param {string} beginLink1 placeholder for <a> tag.
 * @param {string} endLink1 placeholder for </a> tag.
 * @param {string} beginLink2 placeholder for <a> tag.
 * @param {string} endLink2 placeholder for </a> tag.
 * @return {string} the message with hyperlink.
 */
var MSG_ABOUT_PAGE_SEC2_PAR2 = function(beginLink1, endLink1, beginLink2,
    endLink2) {
  return 'The list of accounts displayed by accountchooser.com are stored in ' +
      'your browser.  The account information is never shared with a site ' +
      'unless you explicitly select an account to use with the site.  You ' +
      'can visit the ' + beginLink1 + 'central account chooser site' +
      endLink1 + ' directly at any time to view, or delete, account ' +
      'entries. You can also disable, or re-enable, the account chooser ' +
      'service on your computer by visiting ' + beginLink2 + 'this page' +
      endLink2 + '.';
};

/**
 * @desc [accountchooser] Header for section 3.
 */
var MSG_ABOUT_PAGE_SUB_HEADER2 =
    'Website Owners: Learn How to Upgrade Your Site';

/**
 * @desc [accountchooser] This message is the first paragraph of section 3 and
 * explains the advantages by using an account chooser.
 */
var MSG_ABOUT_PAGE_SEC3_PAR1 = 'There are several advantages to upgrading ' +
    'your site to use an Account Chooser:';

/**
 * @desc [accountchooser] This message shows the first advantage of using an
 * account chooser.
 */
var MSG_ABOUT_PAGE_SEC3_PAR1_LIST1 =
    'Increase signin and signup rates on your site';

/**
 * @desc [accountchooser] This message shows the second advantage of using an
 * account chooser.
 */
var MSG_ABOUT_PAGE_SEC3_PAR1_LIST2 =
    'Makes it easier for your site to support identity providers in the future';

/**
 * @desc [accountchooser] This message shows the third advantage of using an
 * account chooser.
 */
var MSG_ABOUT_PAGE_SEC3_PAR1_LIST3 =
    'It only requires a few very small changes to your site';

/**
 * @desc [accountchooser] Label for a button which points site owners who are
 * interested in deploying account chooser to the instruction page.
 * @param {string} beginLink placeholder for <a> tag.
 * @param {string} endLink placeholder for </a> tag.
 * @return {string} the message with hyperlink.
 */
var MSG_ABOUT_PAGE_DEPLOY_BUTTON = function(beginLink, endLink) {
    return beginLink + 'Learn how you can deploy an account chooser' + endLink;
}

// Constans for URLs.
/** @private */
var CRIBWARS_URL_ = 'https://ac-cribwars.appspot.com';
/** @private */
var AC_SITE_OWNER_URL_ = 'http://accountchooser.net/owners';
/** @private */
var FIREFOX_MANAGE_PROFILE_URL_ =
  'http://support.mozilla.org/en-US/kb/Managing-profiles';
/** @private */
var CHROME_MANAGE_PROFILE_URL_ =
  'http://support.google.com/chrome/bin/answer.py?hl=en&answer=2364824';
/** @private */
var PRIVATE_IE_URL_ =
  'http://windows.microsoft.com/en-US/windows7/What-is-InPrivate-Browsing';
/** @private */
var PRIVATE_FIREFOX_URL_ =
  'http://support.mozilla.org/en-US/kb/Private-Browsing';
/** @private */
var PRIVATE_CHROME_URL_ =
  'http://support.google.com/chrome/bin/answer.py?hl=en&answer=95464';
/** @private */
var PRIVATE_SAFARI_URL_ =
  'http://docs.info.apple.com/article.html?path=Safari/3.0/en/9311.html';
/** @private */
var CDS_MANAGE_URL_ = '/';
/** @private */
var CDS_DISABLE_URL_ = '/config.html';

/**
 * Stores all messages for the page.
 */
window.accountchooser.cdsLearnMorePageMessages = {
  title: MSG_ABOUT_PAGE_TITLE,
  header: MSG_ABOUT_PAGE_HEADER,
  deployReminder1: MSG_ABOUT_PAGE_DEPLOY_REMINDER(
      '<a href="' + AC_SITE_OWNER_URL_ + '">', '</a>'),
  sec1Par1: MSG_ABOUT_PAGE_SEC1_PAR1(
      '<a href="' + CRIBWARS_URL_ + '">', '</a>'),
  sec1Par2: MSG_ABOUT_PAGE_SEC1_PAR2,
  sec1Par3: MSG_ABOUT_PAGE_SEC1_PAR3,
  subHeader1: MSG_ABOUT_PAGE_SUB_HEADER1,
  sec2Par1: MSG_ABOUT_PAGE_SEC2_PAR1,
  sec2Par1List1: MSG_ABOUT_PAGE_SEC2_PAR1_LIST1,
  sec2Par1List2: MSG_ABOUT_PAGE_SEC2_PAR1_LIST2,
  sec2Par1List3: MSG_ABOUT_PAGE_SEC2_PAR1_LIST3(
      '<a href="' + FIREFOX_MANAGE_PROFILE_URL_ + '">', '</a>',
      '<a href="' + CHROME_MANAGE_PROFILE_URL_ + '">', '</a>'),
  sec2Par1List4: MSG_ABOUT_PAGE_SEC2_PAR1_LIST4(
      '<a href="' + PRIVATE_IE_URL_ + '">', '</a>',
      '<a href="' + PRIVATE_FIREFOX_URL_ + '">', '</a>',
      '<a href="' + PRIVATE_CHROME_URL_ + '">', '</a>',
      '<a href="' + PRIVATE_SAFARI_URL_ + '">', '</a>'),
  sec2Par2: MSG_ABOUT_PAGE_SEC2_PAR2(
      '<a href="' + CDS_MANAGE_URL_ + '">', '</a>',
      '<a href="' + CDS_DISABLE_URL_ + '">', '</a>'),
  subHeader2: MSG_ABOUT_PAGE_SUB_HEADER2,
  sec3Par1: MSG_ABOUT_PAGE_SEC3_PAR1,
  sec3Par1List1: MSG_ABOUT_PAGE_SEC3_PAR1_LIST1,
  sec3Par1List2: MSG_ABOUT_PAGE_SEC3_PAR1_LIST2,
  sec3Par1List3: MSG_ABOUT_PAGE_SEC3_PAR1_LIST3,
  deployReminder2: MSG_ABOUT_PAGE_DEPLOY_REMINDER(
      '<a href="' + AC_SITE_OWNER_URL_ + '">', '</a>'),
  deployButton: MSG_ABOUT_PAGE_DEPLOY_BUTTON(
      '<a href="' + AC_SITE_OWNER_URL_ + '" class="button" style="width:100%">',
      '</a>')
};

/**
 * Default account for showing a man's personal account on learn more page.
 * @private
 */
window.accountchooser.DEFAULT_ACCOUNT_MAN_HOME_ = {
  email: 'john.garcia@gmail.com',
  displayName: 'John Garcia',
  photoUrl: 'https://ssl.gstatic.com/cds/image/man-personal.jpg'
};

/**
 * Default account for showing a man's work account on learn more page.
 * @private
 */
window.accountchooser.DEFAULT_ACCOUNT_MAN_WORK_ = {
  email: 'jgarcia@summitmedgroup.com',
  displayName: 'John Garcia',
  photoUrl: 'https://ssl.gstatic.com/cds/image/man-professional.jpg'
};

/**
 * Default account for showing a woman's personal account on learn more page.
 * @private
 */
window.accountchooser.DEFAULT_ACCOUNT_WOMAN_HOME_ = {
  email: 'sara_corlett@yahoo.com',
  displayName: 'Sara Corlett',
  photoUrl: 'https://ssl.gstatic.com/cds/image/woman-personal.jpg'
};

/**
 * Default account for showing a woman's work account on learn more page.
 * @private
 */
window.accountchooser.DEFAULT_ACCOUNT_WOMAN_WORK_ = {
  email: 'corlett@alertblue.com',
  displayName: 'Mrs. Corlett',
  photoUrl: 'https://ssl.gstatic.com/cds/image/woman-professional.jpg'
};
// Copyright 2012 Google Inc. All Rights Reserved.

/**
 * @fileoverview Defines functions to show messages in the page.
 * @author mengcheng@google.com (Mengcheng Duan)
 */

/**
 * Sets the window title.
 * @param {Object=} opt_res the resouce bundle.
 */
window.accountchooser.setWindowTitle = function(opt_res) {
  var res = opt_res ||
      window.accountchooser.cdsLearnMorePageMessages;
  window.document.title = res.title;
};

/**
 * Shows the messages in corresponding html elements.
 * @param {string} idPrefix the prefix of the container element's id.
 * @param {Object=} opt_res the resouce bundle.
 */
window.accountchooser.showMessages = function(idPrefix,
    opt_res) {
  // Finds all elements whose id start with the prefix.
  var elements = jQuery('[id^="' + idPrefix + '"]');
  var res = opt_res ||
      window.accountchooser.cdsLearnMorePageMessages;
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
 * Shows the select account page with the given accounts.
 * @param {string} containerId id of the container html element.
 */
window.accountchooser.showSelectAccountPage = function(
    containerId) {
  var container = jQuery('#' + containerId);
  var page = new window.accountchooser.page.SelectAccountPage();
  var accounts = window.accountchooser.getAccountList_();
  page.render(container, null, accounts, true, undefined, undefined, null,
      false);
  // hide learn more link since itself is on the learn more page.
  container.children('.widget-footer').hide();
};

/**
 * Shows the add account page with the given accounts.
 * @param {string} containerId id of the container html element.
 */
window.accountchooser.showShareAccountPage = function(
    containerId) {
  var container = jQuery('#' + containerId);
  var page = new window.accountchooser.page.ShareAccountPage();
  var accounts = window.accountchooser.getAccountList_();
  var pos = Math.floor(Math.random() * accounts.length);
  var account = accounts.splice(pos, 1)[0];
  page.render(container, account, accounts, undefined, null, false);
  // hide learn more link since itself is on the learn more page.
  container.children('.widget-footer').hide();
};

/**
 * Maximum number of the accounts shown on the learn more page for each widget.
 * @private
 * @const
 */
window.accountchooser.MAX_NUMBER_OF_SAMPLE_ACCOUNTS_ = 2;

/**
 * Minimum number of the accounts shown on the learn more page for each widget.
 * @private
 * @const
 */
window.accountchooser.MIN_NUMBER_OF_SAMPLE_ACCOUNTS_ = 2;

/**
 * Gets the accounts stored in CDS for demonstrating on learn more page. If the
 * number of stored accounts is greater than 4, only 4 accounts returned. If
 * less than 2, a default pre-defined account lists is returned.
 * @return {Array.<Object>} a list of accounts for demonstrating on learn more
 *     page.
 * @private
 */
window.accountchooser.getAccountList_ = function() {
  var accounts =
      window.accountchooser.util.accountstorage.readAccounts();
  var max =
      window.accountchooser.MAX_NUMBER_OF_SAMPLE_ACCOUNTS_;
  var min =
      window.accountchooser.MIN_NUMBER_OF_SAMPLE_ACCOUNTS_;
  if (accounts.length > max) {
    return accounts.slice(0, max);
  } else if (accounts.length < min) {
    return [window.accountchooser.DEFAULT_ACCOUNT_WOMAN_WORK_,
           window.accountchooser.DEFAULT_ACCOUNT_WOMAN_HOME_];
  } else {
    return accounts;
  }
};

