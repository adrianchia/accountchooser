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

var a=window,f=jQuery,g="length",i="",j='"]',k="#",l=".",o=".widget-footer",p='<a href="http://accountchooser.net/owners">',q='[id^="',r="id",s="\u0410\u043a\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0432\u0430\u0442\u0435 \u0443\u0435\u0431\u0441\u0430\u0439\u0442, ",t="\u043d\u0430\u0443\u0447\u0435\u0442\u0435 \u043a\u0430\u043a \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u0430 \u0432\u043d\u0435\u0434\u0440\u0438\u0442\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0437\u0430 \u0438\u0437\u0431\u043e\u0440 \u043d\u0430 \u043f\u0440\u043e\u0444\u0438\u043b";
a.accountchooser=a.accountchooser||{};a.cds=a.accountchooser;function u(b,d){return s+(b+(t+(d+l)))}
a.accountchooser.cdsLearnMorePageMessages={title:"\u041d\u0430\u0443\u0447\u0435\u0442\u0435 \u043f\u043e\u0432\u0435\u0447\u0435 \u0437\u0430 \u0443\u0441\u043b\u0443\u0433\u0430\u0442\u0430 \u0437\u0430 \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u0438\u0437\u0438\u0440\u0430\u043d\u043e \u0438\u0437\u0431\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u043f\u0440\u043e\u0444\u0438\u043b \u2013 \u0440\u0430\u0431\u043e\u0442\u043d\u0430 \u0433\u0440\u0443\u043f\u0430 \u201e\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0437\u0430 \u0438\u0437\u0431\u043e\u0440 \u043d\u0430 \u043f\u0440\u043e\u0444\u0438\u043b\u201c",header:"\u041d\u0430\u0443\u0447\u0435\u0442\u0435 \u043f\u043e\u0432\u0435\u0447\u0435 \u0437\u0430 \u0443\u0441\u043b\u0443\u0433\u0430\u0442\u0430 \u0437\u0430 \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u0438\u0437\u0438\u0440\u0430\u043d\u043e \u0438\u0437\u0431\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u043f\u0440\u043e\u0444\u0438\u043b",
deployReminder1:u(p,"</a>"),sec1Par1:'\u0417\u0430 \u0434\u0430 \u0431\u044a\u0434\u0430\u0442 \u0443\u0435\u0431\u0441\u0430\u0439\u0442\u043e\u0432\u0435\u0442\u0435 \u043f\u043e-\u0441\u0438\u0433\u0443\u0440\u043d\u0438 \u0438 \u043f\u043e-\u043b\u0435\u0441\u043d\u0438 \u0437\u0430 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043d\u0435, \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435\u0442\u0430 \u0437\u0430 \u0432\u0445\u043e\u0434 \u0441\u0435 \u0437\u0430\u043c\u0435\u0441\u0442\u0432\u0430\u0442 \u0441 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0437\u0430 \u0438\u0437\u0431\u043e\u0440 \u043d\u0430 \u043f\u0440\u043e\u0444\u0438\u043b\u0438 (<a href="https://ac-cribwars.appspot.com">\u0440\u0430\u0437\u0433\u043b\u0435\u0434\u0430\u0439\u0442\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u0435\u043d \u0441\u0430\u0439\u0442</a>). \u041f\u0440\u0438 \u043e\u043f\u0438\u0442 \u0437\u0430 \u0432\u043b\u0438\u0437\u0430\u043d\u0435 \u0432 \u0442\u0430\u043a\u044a\u0432 \u0441\u0430\u0439\u0442 \u0449\u0435 \u0432\u0438\u0434\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043a\u0430\u0442\u043e \u0442\u0430\u0437\u0438 \u0441\u044a\u0441 \u0441\u043f\u0438\u0441\u044a\u043a\u0430 \u0441 \u043f\u0440\u043e\u0444\u0438\u043b\u0438\u0442\u0435, \u043a\u043e\u0438\u0442\u043e \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u0442\u0435 \u043d\u0430\u0439-\u0447\u0435\u0441\u0442\u043e \u043d\u0430 \u0442\u043e\u0437\u0438 \u043a\u043e\u043c\u043f\u044e\u0442\u044a\u0440:',
sec1Par2:"\u0422\u0440\u044f\u0431\u0432\u0430 \u0441\u0430\u043c\u043e \u0434\u0430 \u043a\u043b\u0438\u043a\u043d\u0435\u0442\u0435 \u0432\u044a\u0440\u0445\u0443 \u043f\u0440\u043e\u0444\u0438\u043b\u0430, \u043a\u043e\u0439\u0442\u043e \u0438\u0441\u043a\u0430\u0442\u0435 \u0434\u0430 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u0442\u0435. \u0410\u043a\u043e \u043d\u0435 \u0432\u0438\u0436\u0434\u0430\u0442\u0435 \u0437\u0430\u043f\u0438\u0441 \u0437\u0430 \u043d\u0435\u0433\u043e, \u043a\u043b\u0438\u043a\u043d\u0435\u0442\u0435 \u0432\u044a\u0440\u0445\u0443 \u0431\u0443\u0442\u043e\u043d\u0430 \u0432 \u0433\u043e\u0440\u043d\u0430\u0442\u0430 \u0447\u0430\u0441\u0442, \u0437\u0430 \u0434\u0430 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u0435 \u0434\u0440\u0443\u0433 \u043f\u0440\u043e\u0444\u0438\u043b.",
sec1Par3:"\u0421\u043b\u0435\u0434 \u043a\u0430\u0442\u043e \u0432\u043b\u0435\u0437\u0435\u0442\u0435 \u0432 \u043f\u0440\u043e\u0444\u0438\u043b\u0430, \u0449\u0435 \u0432\u0438 \u0441\u0435 \u043f\u043e\u043a\u0430\u0436\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043a\u0430\u0442\u043e \u0442\u0430\u0437\u0438, \u043f\u0440\u0438\u043a\u0430\u043d\u0432\u0430\u0449\u0430 \u0432\u0438 \u0434\u0430 \u043f\u043e\u0442\u0432\u044a\u0440\u0434\u0438\u0442\u0435, \u0447\u0435 \u0438\u0441\u043a\u0430\u0442\u0435 \u0434\u0430 \u0433\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u0435 \u043a\u044a\u043c \u0441\u043f\u0438\u0441\u044a\u043a\u0430 \u0441 \u043f\u0440\u043e\u0444\u0438\u043b\u0438 \u043d\u0430 \u0442\u043e\u0437\u0438 \u043a\u043e\u043c\u043f\u044e\u0442\u044a\u0440.",
subHeader1:"\u0420\u0430\u0437\u0448\u0438\u0440\u0435\u043d\u0438 \u0442\u0435\u043c\u0438",sec2Par1:"\u0410\u043a\u043e \u0438\u0441\u043a\u0430\u0442\u0435 \u0434\u0430 \u043f\u0440\u0435\u043c\u0430\u0445\u043d\u0435\u0442\u0435 \u043f\u0440\u043e\u0444\u0438\u043b, \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u0430 \u0437\u0430\u0434\u044a\u0440\u0436\u0438\u0442\u0435 \u043a\u0443\u0440\u0441\u043e\u0440\u0430 \u043d\u0430 \u043c\u0438\u0448\u043a\u0430\u0442\u0430 \u0432\u044a\u0440\u0445\u0443 \u0437\u0430\u043f\u0438\u0441\u0430 \u0437\u0430 \u043d\u0435\u0433\u043e \u0438 \u0434\u0430 \u043a\u043b\u0438\u043a\u043d\u0435\u0442\u0435 \u0432\u044a\u0440\u0445\u0443 \u0431\u0443\u0442\u043e\u043d\u0430 \u201e\u0425\u201c \u0432 \u0433\u043e\u0440\u043d\u0438\u044f \u044a\u0433\u044a\u043b (\u0432 \u043c\u043e\u0431\u0438\u043b\u043d\u0438 \u0431\u0440\u0430\u0443\u0437\u044a\u0440\u0438 \u2013 \u0432\u044a\u0440\u0445\u0443 \u0431\u0443\u0442\u043e\u043d\u0430 \u201e\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0430\u043d\u0435\u201c), \u0437\u0430 \u0434\u0430 \u0433\u043e \u0438\u0437\u0442\u0440\u0438\u0435\u0442\u0435. \u0412 \u0441\u043b\u0443\u0447\u0430\u0439 \u0447\u0435 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u0442\u0435 \u043e\u0431\u0430\u0447\u0435 \u0441\u043f\u043e\u0434\u0435\u043b\u0435\u043d \u043a\u043e\u043c\u043f\u044e\u0442\u044a\u0440 \u0438 \u043d\u0435 \u0438\u0441\u043a\u0430\u0442\u0435 \u0434\u0430 \u0441\u043c\u0435\u0441\u0432\u0430\u0442\u0435 \u0437\u0430\u043f\u0438\u0441\u0438\u0442\u0435 \u0437\u0430 \u043f\u0440\u043e\u0444\u0438\u043b\u0438\u0442\u0435 \u0441 \u0434\u0440\u0443\u0433\u0438 \u0445\u043e\u0440\u0430, \u043f\u043e\u043c\u0438\u0441\u043b\u0435\u0442\u0435 \u0434\u0430\u043b\u0438 \u0434\u0430 \u043d\u0435 \u0432\u044a\u0437\u043f\u0440\u0438\u0435\u043c\u0435\u0442\u0435 \u043f\u043e\u0434\u0445\u043e\u0434, \u043a\u043e\u0439\u0442\u043e \u0434\u044a\u0440\u0436\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f\u0442\u0430 \u0432 \u0431\u0440\u0430\u0443\u0437\u044a\u0440\u0430 \u0432\u0438 \u043e\u0442\u0434\u0435\u043b\u043d\u043e.  \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:",
sec2Par1List1:"\u0418\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u0439\u0442\u0435 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u0438 \u043f\u0440\u043e\u0444\u0438\u043b\u0438 \u043d\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0438 \u0432 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u0430\u0442\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430.",sec2Par1List2:"\u0418\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u0439\u0442\u0435 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u0438 \u0431\u0440\u0430\u0443\u0437\u044a\u0440\u0438.",
sec2Par1List3:'\u0418\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u0439\u0442\u0435 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0441\u043a\u0438 \u043f\u0440\u043e\u0444\u0438\u043b\u0438 \u0432 \u0431\u0440\u0430\u0443\u0437\u044a\u0440\u0430 (\u043d\u0430\u0443\u0447\u0435\u0442\u0435 \u043a\u0430\u043a \u0434\u0430 \u0433\u043e \u043f\u0440\u0430\u0432\u0438\u0442\u0435 \u0432\u044a\u0432 <a href="http://support.mozilla.org/en-US/kb/Managing-profiles">Firefox</a> \u0438\u043b\u0438 <a href="http://support.google.com/chrome/bin/answer.py?hl=en&answer=2364824">Google Chrome</a>).',
sec2Par1List4:'\u0418\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u0439\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0442\u0430 \u0437\u0430 \u0447\u0430\u0441\u0442\u043d\u043e \u0441\u044a\u0440\u0444\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u0431\u0440\u0430\u0443\u0437\u044a\u0440\u0430 (\u043d\u0430\u0443\u0447\u0435\u0442\u0435 \u043a\u0430\u043a \u0434\u0430 \u0433\u043e \u043f\u0440\u0430\u0432\u0438\u0442\u0435 \u0432 <a href="http://windows.microsoft.com/en-US/windows7/What-is-InPrivate-Browsing">Internet Explorer</a>, <a href="http://support.mozilla.org/en-US/kb/Private-Browsing">Firefox</a>, <a href="http://support.google.com/chrome/bin/answer.py?hl=en&answer=95464">Google Chrome</a> \u0438\u043b\u0438 <a href="http://docs.info.apple.com/article.html?path=Safari/3.0/en/9311.html">Safari</a>).',
sec2Par2:'\u0421\u043f\u0438\u0441\u044a\u043a\u044a\u0442 \u0441 \u043f\u0440\u043e\u0444\u0438\u043b\u0438, \u043f\u043e\u043a\u0430\u0437\u0430\u043d \u043e\u0442 \u201eaccountchooser.com\u201c, \u0441\u0435 \u0441\u044a\u0445\u0440\u0430\u043d\u044f\u0432\u0430 \u0432 \u0431\u0440\u0430\u0443\u0437\u044a\u0440\u0430 \u0432\u0438.  \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f\u0442\u0430 \u0437\u0430 \u043f\u0440\u043e\u0444\u0438\u043b\u0430 \u043d\u0438\u043a\u043e\u0433\u0430 \u043d\u0435 \u0441\u0435 \u0441\u043f\u043e\u0434\u0435\u043b\u044f \u0441 \u0434\u0430\u0434\u0435\u043d \u0441\u0430\u0439\u0442, \u043e\u0441\u0432\u0435\u043d \u0430\u043a\u043e \u0438\u0437\u0440\u0438\u0447\u043d\u043e \u043d\u0435 \u0438\u0437\u0431\u0435\u0440\u0435\u0442\u0435 \u043f\u0440\u043e\u0444\u0438\u043b, \u043a\u043e\u0439\u0442\u043e \u0434\u0430 \u0441\u0435 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430 \u0441 \u043d\u0435\u0433\u043e.  \u041c\u043e\u0436\u0435\u0442\u0435 \u0434\u0438\u0440\u0435\u043a\u0442\u043d\u043e \u0434\u0430 \u043e\u0442\u0432\u043e\u0440\u0438\u0442\u0435 <a href="/">\u0441\u0430\u0439\u0442\u0430 \u043d\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430 \u0437\u0430 \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u0438\u0437\u0438\u0440\u0430\u043d \u0438\u0437\u0431\u043e\u0440 \u043d\u0430 \u043f\u0440\u043e\u0444\u0438\u043b</a> \u043f\u043e \u0432\u0441\u044f\u043a\u043e \u0432\u0440\u0435\u043c\u0435, \u0437\u0430 \u0434\u0430 \u043f\u0440\u0435\u0433\u043b\u0435\u0434\u0430\u0442\u0435 \u0438\u043b\u0438 \u0438\u0437\u0442\u0440\u0438\u0435\u0442\u0435 \u0437\u0430\u043f\u0438\u0441\u0438 \u0437\u0430 \u043f\u0440\u043e\u0444\u0438\u043b\u0438. \u041c\u043e\u0436\u0435\u0442\u0435 \u0441\u044a\u0449\u043e \u0434\u0430 \u0434\u0435\u0430\u043a\u0442\u0438\u0432\u0438\u0440\u0430\u0442\u0435 \u0438\u043b\u0438 \u0434\u0430 \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u0430\u0442\u0435 \u043e\u0442\u043d\u043e\u0432\u043e \u0443\u0441\u043b\u0443\u0433\u0430\u0442\u0430 \u0437\u0430 \u0438\u0437\u0431\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u043f\u0440\u043e\u0444\u0438\u043b \u043d\u0430 \u043a\u043e\u043c\u043f\u044e\u0442\u044a\u0440\u0430 \u0441\u0438, \u043a\u0430\u0442\u043e \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435 <a href="/config.html">\u0442\u0430\u0437\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430</a>.',
subHeader2:"\u0421\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u0438\u0446\u0438 \u043d\u0430 \u0443\u0435\u0431\u0441\u0430\u0439\u0442\u043e\u0432\u0435: \u041d\u0430\u0443\u0447\u0435\u0442\u0435 \u043a\u0430\u043a \u0434\u0430 \u043d\u0430\u0434\u0441\u0442\u0440\u043e\u0438\u0442\u0435 \u0441\u0430\u0439\u0442\u0430 \u0441\u0438",sec3Par1:"\u0418\u043c\u0430 \u043d\u044f\u043a\u043e\u043b\u043a\u043e \u043f\u0440\u0435\u0434\u0438\u043c\u0441\u0442\u0432\u0430, \u0430\u043a\u043e \u043d\u0430\u0434\u0441\u0442\u0440\u043e\u0438\u0442\u0435 \u0441\u0430\u0439\u0442\u0430 \u0441\u0438 \u0434\u0430 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0437\u0430 \u0438\u0437\u0431\u043e\u0440 \u043d\u0430 \u043f\u0440\u043e\u0444\u0438\u043b\u0438:",
sec3Par1List1:"\u0423\u0432\u0435\u043b\u0438\u0447\u0430\u0432\u0430\u043d\u0435 \u043d\u0430 \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u0430 \u043d\u0430 \u0432\u043b\u0438\u0437\u0430\u043d\u0435 \u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043d\u0435 \u0432 \u0441\u0430\u0439\u0442\u0430 \u0432\u0438.",sec3Par1List2:"\u0423\u043b\u0435\u0441\u043d\u044f\u0432\u0430\u043d\u0435 \u043d\u0430 \u043f\u043e\u0434\u0434\u044a\u0440\u0436\u0430\u043d\u0435\u0442\u043e \u043e\u0442 \u0441\u0430\u0439\u0442\u0430 \u0432\u0438 \u043d\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u0447\u0438\u0446\u0438 \u043d\u0430 \u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u0438 \u0443\u0441\u043b\u0443\u0433\u0438 \u0432 \u0431\u044a\u0434\u0435\u0449\u0435.",
sec3Par1List3:"\u0418\u0437\u0438\u0441\u043a\u0432\u0430\u0442 \u0441\u0435 \u0441\u0430\u043c\u043e \u043d\u044f\u043a\u043e\u043b\u043a\u043e \u043c\u043d\u043e\u0433\u043e \u043c\u0430\u043b\u043a\u0438 \u043f\u0440\u043e\u043c\u0435\u043d\u0438 \u0432 \u0441\u0430\u0439\u0442\u0430 \u0432\u0438.",deployReminder2:u(p,"</a>"),deployButton:'<a href="http://accountchooser.net/owners" class="button" style="width:100%">\u041d\u0430\u0443\u0447\u0435\u0442\u0435 \u043a\u0430\u043a \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u0430 \u0432\u043d\u0435\u0434\u0440\u0438\u0442\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0437\u0430 \u0438\u0437\u0431\u043e\u0440 \u043d\u0430 \u043f\u0440\u043e\u0444\u0438\u043b</a>'};
a.accountchooser.DEFAULT_ACCOUNT_MAN_HOME_={email:"john.garcia@gmail.com",displayName:"John Garcia",photoUrl:"static/image/man-personal.jpg"};a.accountchooser.DEFAULT_ACCOUNT_MAN_WORK_={email:"jgarcia@summitmedgroup.com",displayName:"John Garcia",photoUrl:"static/image/man-professional.jpg"};a.accountchooser.DEFAULT_ACCOUNT_WOMAN_HOME_={email:"sara_corlett@yahoo.com",displayName:"Sara Corlett",photoUrl:"static/image/woman-personal.jpg"};
a.accountchooser.DEFAULT_ACCOUNT_WOMAN_WORK_={email:"corlett@alertblue.com",displayName:"Mrs. Corlett",photoUrl:"static/image/woman-professional.jpg"};a.accountchooser.setWindowTitle=function(b){a.document.title=(b||a.accountchooser.cdsLearnMorePageMessages).title};a.accountchooser.showMessages=function(b,d){var c=f(q+b+j),e=d||a.accountchooser.cdsLearnMorePageMessages;if(c&&e)for(var h=0;h<c[g];h++){var m=f(c[h]),n=m.attr(r).replace(b,i);e[n]&&m.html(e[n])}};
a.accountchooser.showSelectAccountPage=function(b){var b=f(k+b),d=new a.accountchooser.page.SelectAccountPage,c=a.accountchooser.getAccountList_();d.render(b,null,c,!0,void 0,void 0,null,!1);b.children(o).hide()};a.accountchooser.showShareAccountPage=function(b){var b=f(k+b),d=new a.accountchooser.page.ShareAccountPage,c=a.accountchooser.getAccountList_(),e=Math.floor(Math.random()*c[g]),e=c.splice(e,1)[0];d.render(b,e,c,void 0,null,!1);b.children(o).hide()};
a.accountchooser.MAX_NUMBER_OF_SAMPLE_ACCOUNTS_=2;a.accountchooser.MIN_NUMBER_OF_SAMPLE_ACCOUNTS_=2;a.accountchooser.getAccountList_=function(){var b=a.accountchooser.util.accountstorage.readAccounts(),d=a.accountchooser.MAX_NUMBER_OF_SAMPLE_ACCOUNTS_,c=a.accountchooser.MIN_NUMBER_OF_SAMPLE_ACCOUNTS_;return b[g]>d?b.slice(0,d):b[g]<c?[a.accountchooser.DEFAULT_ACCOUNT_WOMAN_WORK_,a.accountchooser.DEFAULT_ACCOUNT_WOMAN_HOME_]:b};