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

(function(){var a=window,e=jQuery,f="",g='"]',l="#",m="About Account Chooser",n='[id^="',p="copyright",q="id",r="learnmore",s="msg_",t="sample-accountchooser",u="samplesite.com";a.accountchooser=a.accountchooser||{};a.cds=a.accountchooser;
a.accountchooser.cdsLearnMorePageMessages={title:m,header:m,sec1Par1:'Websites are replacing traditional login boxes with an account chooser to make those sites more secure and easier to use (<a href="https://ac-cribwars.appspot.com">explore a sample site</a>). When you try to sign in to such a site, you will see a page like this one with the list of accounts you most frequently use on this computer:',subHeader1:"Users: How it works",sec2Par1:"Once you add an account to this device, you won't have to type your email address whenever a page asks you to sign in. Just select the right account from a list.",
sec2Par2:"Some pages will ask for your password, but others will sign you in automatically after you click the account name.",subHeader2:"Website Owners: Learn how to upgrade your site",sec3Par1:"There are several advantages to upgrading your site to use an Account Chooser:",sec3Par1List1:"Increase signin and signup rates on your site",sec3Par1List2:"Makes it easier for your site to support identity providers in the future",sec3Par1List3:"It only requires a few very small changes to your site",deployButton:'<a href="http://accountchooser.net/owners">Learn how you can deploy an account chooser</a>',
copyright:"Copyright 2012 OpenID Foundation.",learnMore:m};a.accountchooser.DEFAULT_ACCOUNT_MAN_HOME_={email:"john.garcia@gmail.com",displayName:"John Garcia",photoUrl:"static/image/man-personal.jpg"};a.accountchooser.DEFAULT_ACCOUNT_MAN_WORK_={email:"jgarcia@summitmedgroup.com",displayName:"John Garcia",photoUrl:"static/image/man-professional.jpg"};
a.accountchooser.DEFAULT_ACCOUNT_WOMAN_HOME_={email:"sara_corlett@yahoo.com",displayName:"Sara Corlett",photoUrl:"static/image/woman-personal.jpg"};a.accountchooser.DEFAULT_ACCOUNT_WOMAN_WORK_={email:"corlett@alertblue.com",displayName:"Mrs. Corlett",photoUrl:"static/image/woman-professional.jpg"};
a.accountchooser.showLearnMorePage=function(){a.accountchooser.setWindowTitle();a.accountchooser.showMessages(s);a.accountchooser.showSampleSelectAccountPage(t);a.accountchooser.showCopyright(p);a.accountchooser.showLearnMore(r)};a.accountchooser.setWindowTitle=function(b){a.document.title=(b||a.accountchooser.cdsLearnMorePageMessages).title};
a.accountchooser.showMessages=function(b,d){var c=e(n+b+g),h=d||a.accountchooser.cdsLearnMorePageMessages;if(c&&h)for(var i=0;i<c.length;i++){var j=e(c[i]),k=j.attr(q).replace(b,f);h[k]&&j.html(h[k])}};a.accountchooser.showSampleSelectAccountPage=function(b){b=e(l+b).empty();var d=new a.accountchooser.page.SelectAccountPage,c=a.accountchooser.getAccountList_();d.render(b,void 0,c,!0,u)};a.accountchooser.showCopyright=function(b,d){var c=d||a.accountchooser.cdsLearnMorePageMessages;e(l+b).html(c.copyright)};
a.accountchooser.showLearnMore=function(b,d){var c=d||a.accountchooser.cdsLearnMorePageMessages;e(l+b).html(c.learnMore)};a.accountchooser.MAX_NUMBER_OF_SAMPLE_ACCOUNTS_=2;a.accountchooser.MIN_NUMBER_OF_SAMPLE_ACCOUNTS_=2;
a.accountchooser.getAccountList_=function(){var b=a.accountchooser.util.accountstorage.readAccounts(),d=a.accountchooser.MAX_NUMBER_OF_SAMPLE_ACCOUNTS_,c=a.accountchooser.MIN_NUMBER_OF_SAMPLE_ACCOUNTS_;return b.length>d?b.slice(0,d):b.length<c?[a.accountchooser.DEFAULT_ACCOUNT_WOMAN_WORK_,a.accountchooser.DEFAULT_ACCOUNT_WOMAN_HOME_]:b};})()
