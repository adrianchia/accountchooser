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

(function(){window.accountchooser = window.accountchooser || {};
window.cds = window.accountchooser;
var MSG_CONTAINER_ABOUT_DEPLOY_BUTTON = function(beginLink, endLink) {
  return beginLink + ("\u0414\u0456\u0437\u043d\u0430\u0439\u0442\u0435\u0441\u044f, \u044f\u043a \u0443\u043f\u0440\u043e\u0432\u0430\u0434\u0438\u0442\u0438 \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0432\u0438\u0431\u043e\u0440\u0443 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u043e\u0433\u043e \u0437\u0430\u043f\u0438\u0441\u0443" + endLink)
};
window.accountchooser.images = jQuery.extend(window.accountchooser.images || {}, {noPhoto:"static/image/generic_avatar.png", manHome:"static/image/man-personal.jpg", manWork:"static/image/man-professional.jpg", womanHome:"static/image/woman-personal.jpg", womanWork:"static/image/woman-professional.jpg"});
window.accountchooser.labels = jQuery.extend(window.accountchooser.labels || {}, {shareAccountPage:{title:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0441", titleMultiple:"\u0414\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u0438\u0445 \u0437\u0430\u043f\u0438\u0441\u0456\u0432", confirm:"\u0417\u0430\u043f\u0430\u043c\u2019\u044f\u0442\u0430\u0442\u0438 \u0446\u0435\u0439 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0441", 
confirmMultiple:"\u0417\u0430\u043f\u0430\u043c\u2019\u044f\u0442\u0430\u0442\u0438 \u0446\u0456 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u0456 \u0437\u0430\u043f\u0438\u0441\u0438", cancel:"\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u0438"}, updateAccountPage:{title:"\u041e\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u043e\u0433\u043e \u0437\u0430\u043f\u0438\u0441\u0443", confirm:"\u041e\u043d\u043e\u0432\u0438\u0442\u0438 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0441", 
cancel:"\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438"}, selectAccountPage:{title:"\u0423\u0432\u0456\u0439\u0442\u0438 \u0432", seeMoreAccounts:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u0431\u0456\u043b\u044c\u0448\u0435", notUsable:"\u041d\u0435 \u043c\u043e\u0436\u043d\u0430 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u043d\u0430 \u0446\u044c\u043e\u043c\u0443 \u0441\u0430\u0439\u0442\u0456", addAccount:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0441"}, 
manageAccountPage:{title:"\u041a\u0435\u0440\u0443\u0432\u0430\u043d\u043d\u044f \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u0438\u043c\u0438 \u0437\u0430\u043f\u0438\u0441\u0430\u043c\u0438", deleteReminder:"\u041e\u0431\u043b\u0456\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0441 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043e. \u041d\u0430 \u0434\u0435\u044f\u043a\u0438\u0445 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0430\u0445 \u0432\u0438 \u0432\u0441\u0435 \u0436 \u0437\u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u0445\u043e\u0434\u0438\u0442\u0438 \u0432 \u0446\u0435\u0439 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0441 \u0430\u0431\u043e \u0442\u0430\u043a\u0456 \u0441\u0430\u0439\u0442\u0438 \u043c\u043e\u0436\u0443\u0442\u044c \u043f\u0430\u043c\u2019\u044f\u0442\u0430\u0442\u0438, \u0449\u043e \u0432\u0438 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u043b\u0438 \u0446\u0435\u0439 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0441."}, 
manageContainer:{header:"\u0412\u0430\u0448\u0456 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u0456 \u0437\u0430\u043f\u0438\u0441\u0438", description:"\u041d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u0431\u0443\u0434\u044c-\u044f\u043a\u0438\u0439 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0441, \u0449\u043e\u0431 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0439\u043e\u0433\u043e \u0437 \u0406\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0443 \u0432\u0438\u0431\u043e\u0440\u0443 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u043e\u0433\u043e \u0437\u0430\u043f\u0438\u0441\u0443"}, 
selectContainer:{header:"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0441 \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u0443 \u043d\u0430"}, storeContainer:{header:"\u0414\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u043e\u0433\u043e \u0437\u0430\u043f\u0438\u0441\u0443 \u043d\u0430 \u0446\u044c\u043e\u043c\u0443 \u043f\u0440\u0438\u0441\u0442\u0440\u043e\u0457", headerMultiple:"\u0414\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u0438\u0445 \u0437\u0430\u043f\u0438\u0441\u0456\u0432 \u043d\u0430 \u0446\u044c\u043e\u043c\u0443 \u043f\u0440\u0438\u0441\u0442\u0440\u043e\u0457", 
description:"\u0412\u0442\u043e\u043c\u0438\u043b\u0438\u0441\u044f \u0432\u0445\u043e\u0434\u0438\u0442\u0438 \u0442\u0430\u043a \u0447\u0430\u0441\u0442\u043e? \u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u0441\u0432\u0456\u0439 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0441 \u0442\u0443\u0442. \u041d\u043e\u0432\u0456 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0438 (\u044f\u043a-\u043e\u0442 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 \u0434\u043b\u044f \u043f\u043e\u043a\u0443\u043f\u043e\u043a) \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442\u044c \u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044f, \u043f\u0440\u043e\u0441\u0442\u043e \u043d\u0430\u0442\u0438\u0441\u043d\u0443\u0432\u0448\u0438 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0441 \u0430\u0431\u043e \u0432\u0432\u0456\u0432\u0448\u0438 \u0439\u043e\u0433\u043e \u043f\u0430\u0440\u043e\u043b\u044c.", 
descriptionMultiple:"\u0412\u0442\u043e\u043c\u0438\u043b\u0438\u0441\u044f \u0432\u0445\u043e\u0434\u0438\u0442\u0438 \u0442\u0430\u043a \u0447\u0430\u0441\u0442\u043e? \u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u0441\u0432\u043e\u0457 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u0456 \u0437\u0430\u043f\u0438\u0441\u0438 \u0442\u0443\u0442. \u041d\u043e\u0432\u0456 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0438 (\u044f\u043a-\u043e\u0442 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 \u0434\u043b\u044f \u043f\u043e\u043a\u0443\u043f\u043e\u043a) \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442\u044c \u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044f, \u043f\u0440\u043e\u0441\u0442\u043e \u043d\u0430\u0442\u0438\u0441\u043d\u0443\u0432\u0448\u0438 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0441 \u0430\u0431\u043e \u0432\u0432\u0456\u0432\u0448\u0438 \u0439\u043e\u0433\u043e \u043f\u0430\u0440\u043e\u043b\u044c.", 
benefits:["\u0414\u043e\u0434\u0430\u0432\u0448\u0438 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0441 \u043d\u0430 \u0446\u044c\u043e\u043c\u0443 \u043f\u0440\u0438\u0441\u0442\u0440\u043e\u0457, \u0432\u0430\u043c \u043d\u0435 \u0434\u043e\u0432\u0435\u0434\u0435\u0442\u044c\u0441\u044f \u0432\u0432\u043e\u0434\u0438\u0442\u0438 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0449\u043e\u0440\u0430\u0437\u0443, \u043a\u043e\u043b\u0438 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0432\u0432\u0456\u0439\u0442\u0438 \u043d\u0430 \u0441\u0442\u043e\u0440\u0456\u043d\u0446\u0456. \u041f\u0440\u043e\u0441\u0442\u043e \u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u0438\u0439 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0441 \u0437\u0456 \u0441\u043f\u0438\u0441\u043a\u0443.", 
"\u0414\u0435\u044f\u043a\u0456 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0438 \u043f\u0440\u043e\u043f\u043e\u043d\u0443\u0432\u0430\u0442\u0438\u043c\u0443\u0442\u044c \u0432\u0432\u0435\u0441\u0442\u0438 \u043f\u0430\u0440\u043e\u043b\u044c, \u0430 \u043d\u0430 \u0456\u043d\u0448\u0438\u0445 \u0432\u0438 \u0432\u0445\u043e\u0434\u0438\u0442\u0438\u043c\u0435\u0442\u0435 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u043e, \u043a\u043e\u043b\u0438 \u043d\u0430\u0442\u0438\u0441\u043d\u0435\u0442\u0435 \u0456\u043c\u2019\u044f \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u043e\u0433\u043e \u0437\u0430\u043f\u0438\u0441\u0443."]}, 
updateContainer:{header:"\u041e\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u0434\u0430\u043d\u0438\u0445 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u043e\u0433\u043e \u0437\u0430\u043f\u0438\u0441\u0443", description:"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u044c\u0442\u0435 \u0434\u0430\u043d\u0456, \u044f\u043a\u0456 \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u0438\u043c\u0443\u0442\u044c\u0441\u044f \u0432 \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0456 \u0432\u0438\u0431\u043e\u0440\u0443 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u043e\u0433\u043e \u0437\u0430\u043f\u0438\u0441\u0443."}, 
aboutContainer:{title:"\u041f\u0440\u043e \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0432\u0438\u0431\u043e\u0440\u0443 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u043e\u0433\u043e \u0437\u0430\u043f\u0438\u0441\u0443", header:"\u041f\u0440\u043e \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0432\u0438\u0431\u043e\u0440\u0443 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u043e\u0433\u043e \u0437\u0430\u043f\u0438\u0441\u0443", sec1Par1:"\u0429\u043e\u0431 \u0437\u0440\u043e\u0431\u0438\u0442\u0438 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0438 \u0431\u0435\u0437\u043f\u0435\u0447\u043d\u0456\u0448\u0438\u043c\u0438 \u0442\u0430 \u043f\u0440\u043e\u0441\u0442\u0456\u0448\u0438\u043c\u0438 \u0432 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u0456, \u0442\u0440\u0430\u0434\u0438\u0446\u0456\u0439\u043d\u0456 \u0432\u0456\u043a\u043d\u0430 \u0432\u0445\u043e\u0434\u0443 \u0437\u0430\u043c\u0456\u043d\u044e\u044e\u0442\u044c\u0441\u044f \u043d\u0430 \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0432\u0438\u0431\u043e\u0440\u0443 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u043e\u0433\u043e \u0437\u0430\u043f\u0438\u0441\u0443. \u041f\u0456\u0434 \u0447\u0430\u0441 \u0441\u043f\u0440\u043e\u0431\u0438 \u0432\u0432\u0456\u0439\u0442\u0438 \u043d\u0430 \u0442\u0430\u043a\u043e\u043c\u0443 \u0441\u0430\u0439\u0442\u0456 \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0430\u0454\u0442\u044c\u0441\u044f \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0430, \u0441\u0445\u043e\u0436\u0430 \u043d\u0430 \u0446\u044e, \u0437\u0456 \u0441\u043f\u0438\u0441\u043a\u043e\u043c \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u0438\u0445 \u0437\u0430\u043f\u0438\u0441\u0456\u0432, \u044f\u043a\u0456 \u0432\u0438 \u043d\u0430\u0439\u0447\u0430\u0441\u0442\u0456\u0448\u0435 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u0435 \u043d\u0430 \u0446\u044c\u043e\u043c\u0443 \u043a\u043e\u043c\u043f\u2019\u044e\u0442\u0435\u0440\u0456.", 
subHeader1:"\u0414\u043b\u044f \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432: \u044f\u043a \u0446\u0435 \u043f\u0440\u0430\u0446\u044e\u0454", sec2Par1:"\u0414\u043e\u0434\u0430\u0432\u0448\u0438 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0441 \u043d\u0430 \u0446\u044c\u043e\u043c\u0443 \u043f\u0440\u0438\u0441\u0442\u0440\u043e\u0457, \u0432\u0430\u043c \u043d\u0435 \u0434\u043e\u0432\u0435\u0434\u0435\u0442\u044c\u0441\u044f \u0432\u0432\u043e\u0434\u0438\u0442\u0438 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0449\u043e\u0440\u0430\u0437\u0443, \u043a\u043e\u043b\u0438 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0432\u0432\u0456\u0439\u0442\u0438 \u043d\u0430 \u0441\u0442\u043e\u0440\u0456\u043d\u0446\u0456. \u041f\u0440\u043e\u0441\u0442\u043e \u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u0438\u0439 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0441 \u0437\u0456 \u0441\u043f\u0438\u0441\u043a\u0443.", 
sec2Par2:"\u0414\u0435\u044f\u043a\u0456 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0438 \u043f\u0440\u043e\u043f\u043e\u043d\u0443\u0432\u0430\u0442\u0438\u043c\u0443\u0442\u044c \u0432\u0432\u0435\u0441\u0442\u0438 \u043f\u0430\u0440\u043e\u043b\u044c, \u0430 \u043d\u0430 \u0456\u043d\u0448\u0438\u0445 \u0432\u0438 \u0432\u0445\u043e\u0434\u0438\u0442\u0438\u043c\u0435\u0442\u0435 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u043e, \u043a\u043e\u043b\u0438 \u043d\u0430\u0442\u0438\u0441\u043d\u0435\u0442\u0435 \u0456\u043c\u2019\u044f \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u043e\u0433\u043e \u0437\u0430\u043f\u0438\u0441\u0443.", 
subHeader2:"\u0414\u043b\u044f \u0432\u043b\u0430\u0441\u043d\u0438\u043a\u0456\u0432 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0456\u0432: \u0434\u0456\u0437\u043d\u0430\u0439\u0442\u0435\u0441\u044f, \u044f\u043a \u043e\u043d\u043e\u0432\u0438\u0442\u0438 \u0441\u0430\u0439\u0442", sec3Par1:"\u041e\u043d\u043e\u0432\u0438\u0432\u0448\u0438 \u0441\u0430\u0439\u0442, \u0449\u043e\u0431 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0432\u0438\u0431\u043e\u0440\u0443 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u043e\u0433\u043e \u0437\u0430\u043f\u0438\u0441\u0443, \u0432\u0438 \u043e\u0442\u0440\u0438\u043c\u0443\u0454\u0442\u0435 \u0440\u044f\u0434 \u043f\u0435\u0440\u0435\u0432\u0430\u0433.", 
sec3Par1List1:"\u0417\u0431\u0456\u043b\u044c\u0448\u0443\u0454\u0442\u044c\u0441\u044f \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0432\u0445\u043e\u0434\u0456\u0432 \u0456 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0439 \u043d\u0430 \u0441\u0430\u0439\u0442\u0456", sec3Par1List2:"\u041f\u043e\u043b\u0435\u0433\u0448\u0443\u0454\u0442\u044c\u0441\u044f \u043f\u043e\u0434\u0430\u043b\u044c\u0448\u0430 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u043a\u0430 \u0441\u0430\u0439\u0442\u043e\u043c \u043f\u043e\u0441\u0442\u0430\u0447\u0430\u043b\u044c\u043d\u0438\u043a\u0456\u0432 \u0456\u0434\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u043e\u0440\u0456\u0432", 
sec3Par1List3:"\u041f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0432\u043d\u0435\u0441\u0442\u0438 \u043b\u0438\u0448\u0435 \u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u043d\u0435\u0437\u043d\u0430\u0447\u043d\u0438\u0445 \u0437\u043c\u0456\u043d \u043d\u0430 \u0441\u0430\u0439\u0442\u0456", deployButton:MSG_CONTAINER_ABOUT_DEPLOY_BUTTON('<a href="http://accountchooser.net/owners">', "</a>"), accountManHome:{email:"john.garcia@gmail.com", displayName:"John Garcia", photoUrl:window.accountchooser.images.manHome}, 
accountManWork:{email:"jgarcia@summitmedgroup.com", displayName:"John Garcia", photoUrl:window.accountchooser.images.manWork}, accountWomanHome:{email:"sara_corlett@yahoo.com", displayName:"Sara Corlett", photoUrl:window.accountchooser.images.womanHome}, accountWomanWork:{email:"corlett@alertblue.com", displayName:"Mrs. Corlett", photoUrl:window.accountchooser.images.womanWork}}, footerContainer:{copyright:"\u0410\u0432\u0442\u043e\u0440\u0441\u044c\u043a\u0435 \u043f\u0440\u0430\u0432\u043e 2012 OpenID Foundation.", 
learnMore:"\u041f\u0440\u043e \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0432\u0438\u0431\u043e\u0440\u0443 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u043e\u0433\u043e \u0437\u0430\u043f\u0438\u0441\u0443", learnMoreLink:"/learnmore.html"}});
window.accountchooser = window.accountchooser || {};
window.accountchooser.config = window.accountchooser.config || {};
window.accountchooser.config.popup = {};
window.accountchooser.config.popup.width = 520;
window.accountchooser.config.popup.height = 550;
window.accountchooser.config.popup.HTML = '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <title>%%title%%</title>\n    <style type="text/css">\n      html,\n      body {\n        background: #f6f6f6;\n        text-align: center;\n        margin: 0;\n        padding: 0;\n      }\n      #message span {\n        display: inline-block;\n        margin: 20% 0 0;\n        padding: 20px;\n        font-weight: 300;\n        font-size: 16px;\n        text-align: center;\n        background: #fff;\n        border: 1px solid #ddd;\n        border-radius: 4px;\n        -moz-border-radius: 4px;\n        -webkit-border-radius: 4px;\n      }\n    </style>\n  </head>\n  <body>\n    <div id="message">\n      <span>%%message%%</span>\n    </div>\n  </body>\n</html>\n';
window.accountchooser.Page = window.accountchooser.Page || function() {
};
window.accountchooser.Page.prototype.render = function(container, resource, opt_showCloseIcon) {
  window.accountchooser.param.notNull(container, "container");
  window.accountchooser.param.notNull(resource, "resource");
  this.container_ = container;
  this.resource_ = resource;
  this.showCloseIcon_ = !!opt_showCloseIcon
};
window.accountchooser.Page.prototype.getContainer = function() {
  return this.container_
};
window.accountchooser.Page.prototype.getResource = function() {
  return this.resource_
};
window.accountchooser.Page.prototype.isShowCloseIcon = function() {
  return this.showCloseIcon_
};
window.accountchooser.Page.prototype.createTable = function(opt_styleClass) {
  var table = jQuery("<table>").attr("cellspacing", 0).attr("cellpadding", 0).attr("border", 0);
  opt_styleClass && table.addClass(opt_styleClass);
  return table
};
window.accountchooser.Page.prototype.createButton = function(caption, handler, opt_styleClass) {
  window.accountchooser.param.notEmpty(caption, "caption");
  window.accountchooser.param.notEmpty(handler, "handler");
  var btn = jQuery("<input type=button>").val(caption).addClass("widget-input-button");
  opt_styleClass && btn.addClass(opt_styleClass);
  var self = this;
  btn.click(function() {
    self[handler].call(self)
  });
  return btn
};
window.accountchooser.Page.prototype.createLinkButton = function(caption, handler, opt_styleClass) {
  window.accountchooser.param.notEmpty(caption, "caption");
  window.accountchooser.param.notEmpty(handler, "handler");
  var btn = jQuery("<a>").addClass("widget-link").html(caption);
  opt_styleClass && btn.addClass(opt_styleClass);
  var self = this;
  btn.click(function() {
    self[handler].call(self);
    return!1
  });
  return btn
};
window.accountchooser.Page.prototype.createRenderedButton = function(caption, handler, opt_styleClass) {
  window.accountchooser.param.notEmpty(caption, "caption");
  window.accountchooser.param.notEmpty(handler, "handler");
  var link = jQuery("<a>").html(caption).addClass("widget-button-link");
  var table = this.createTable("widget-button");
  opt_styleClass && table.addClass(opt_styleClass);
  var btnLine = jQuery("<tr>").appendTo(table);
  jQuery("<td>").addClass("widget-button-left").appendTo(btnLine);
  jQuery("<td>").addClass("widget-button-middle").append(link).appendTo(btnLine);
  jQuery("<td>").addClass("widget-button-right").appendTo(btnLine);
  var self = this;
  jQuery(table).click(function() {
    self[handler].call(self);
    return!1
  });
  return table
};
window.accountchooser.Page.prototype.createTextBox = function(inputClass, isPassword, opt_handler) {
  window.accountchooser.param.notEmpty(inputClass, "inputClass");
  var type = isPassword ? "password" : "text";
  var textBox = jQuery("<input type=" + type + ">");
  textBox.addClass(inputClass);
  if(opt_handler) {
    var self = this;
    textBox.keypress(function(origianlEvent) {
      self[opt_handler].call(self, origianlEvent)
    })
  }
  return textBox
};
window.accountchooser.Page.prototype.createCheckbox = function(labelHtml, checked, opt_styleClass) {
  window.accountchooser.param.notNull(labelHtml, "labelHtml");
  var checkBox = jQuery("<input type=checkbox>").attr("checked", !!checked);
  var label = jQuery("<label>").addClass("widget-checkbox-text").append(checkBox).append(labelHtml);
  var div = jQuery("<div>").addClass("widget-checkbox").append(label);
  opt_styleClass && div.addClass(opt_styleClass);
  return div
};
window.accountchooser.Page.prototype.createChoiceLink = function(caption, handler) {
  window.accountchooser.param.notEmpty(caption, "caption");
  window.accountchooser.param.notEmpty(handler, "handler");
  var div = jQuery("<div>").addClass("widget-choice-link");
  this.createLinkButton(caption, handler).appendTo(div);
  return div
};
window.accountchooser.Page.prototype.createInfoLinkSection = function(infoHtml, linkHtml, handler, styleClass) {
  window.accountchooser.param.notEmpty(infoHtml, "infoHtml");
  window.accountchooser.param.notEmpty(linkHtml, "linkHtml");
  window.accountchooser.param.notEmpty(handler, "handler");
  window.accountchooser.param.notEmpty(styleClass, "styleClass");
  var link = jQuery("<a>").html(linkHtml);
  var div = jQuery("<div>").addClass(styleClass).append(infoHtml).append(link);
  var self = this;
  link.click(function() {
    self[handler].call(self);
    return!1
  });
  return div
};
window.accountchooser.Page.prototype.createInfoLink = function(infoHtml, linkHtml, linkUrl, styleClass, opt_target) {
  window.accountchooser.param.notEmpty(linkHtml, "linkHtml");
  window.accountchooser.param.notEmpty(linkUrl, "linkUrl");
  window.accountchooser.param.notEmpty(styleClass, "styleClass");
  var link = jQuery("<a>").html(linkHtml).attr("href", linkUrl).attr("target", opt_target || "_blank");
  var div = jQuery("<div>").addClass(styleClass);
  infoHtml && div.append(infoHtml);
  div.append(link);
  return div
};
window.accountchooser.Page.prototype.createNascarLink_ = function(idp, idpId, handler) {
  window.accountchooser.param.notEmpty(idp, "idp");
  window.accountchooser.param.notEmpty(idpId, "idpId");
  window.accountchooser.param.notEmpty(handler, "handler");
  var idpDiv = jQuery("<div>").addClass("widget-idp");
  var idpLink = jQuery("<a>").attr("href", "javascript: void(0)").appendTo(idpDiv);
  var table = this.createTable("widget-idp-link").appendTo(idpLink);
  var idpTableLine = jQuery("<tr>").appendTo(table);
  idpTableLine.append(jQuery("<td>").append(jQuery("<img>").attr("src", idp.image).addClass("widget-idp-icon")));
  idpTableLine.append(jQuery("<td>").append(idp.label));
  var self = this;
  idpLink.click(function() {
    self[handler].call(self, idpId);
    return!1
  });
  return idpDiv
};
window.accountchooser.Page.prototype.createNascarList = function(idps, nascarIdpList, handler) {
  window.accountchooser.param.notEmpty(idps, "idps");
  window.accountchooser.param.notEmptyArray(nascarIdpList, "nascarIdpList");
  window.accountchooser.param.notEmpty(handler, "handler");
  var nascar = jQuery("<div>").addClass("widget-nascar-list");
  for(var i = 0;i < nascarIdpList.length;i++) {
    var idpId = nascarIdpList[i];
    this.createNascarLink_(idps[idpId], idpId, handler).appendTo(nascar)
  }
  return nascar
};
window.accountchooser.Page.prototype.createNascarSection = function(label, idps, nascarIdpList, handler) {
  window.accountchooser.param.notNull(label, "label");
  window.accountchooser.param.notEmpty(idps, "idps");
  window.accountchooser.param.notEmptyArray(nascarIdpList, "nascarIdpList");
  window.accountchooser.param.notEmpty(handler, "handler");
  var nascarSection = jQuery("<p>").append(label);
  this.createNascarList(idps, nascarIdpList, handler).appendTo(nascarSection);
  return nascarSection
};
window.accountchooser.Page.prototype.createHeader = function(title, opt_showCloseIcon, opt_closeIcon, opt_handler, opt_closeTitle) {
  window.accountchooser.param.notNull(title, "title");
  var headerBar = jQuery("<div>").addClass("widget-header-bar");
  this.header = jQuery("<div>").html(title).addClass("widget-header").appendTo(headerBar);
  if(opt_showCloseIcon) {
    window.accountchooser.param.notEmpty(opt_closeIcon, "opt_closeIcon");
    window.accountchooser.param.notEmpty(opt_handler, "opt_handler");
    var closeIcon = jQuery("<img>").attr("src", opt_closeIcon).addClass("widget-close-icon").appendTo(headerBar);
    opt_closeTitle && closeIcon.attr("title", opt_closeTitle);
    var self = this;
    closeIcon.click(function() {
      self[opt_handler].call(self)
    })
  }
  headerBar.append(jQuery("<div>").css("clear", "both"));
  return headerBar
};
window.accountchooser.Page.prototype.appendLabelledTextBox = function(parent, label, inputClass, isPassword, opt_handler) {
  window.accountchooser.param.notNull(parent, "parent");
  window.accountchooser.param.notNull(label, "label");
  window.accountchooser.param.notEmpty(inputClass, "inputClass");
  label && parent.append(label).append("<br>");
  parent.append(this.createTextBox(inputClass, isPassword, opt_handler))
};
window.accountchooser.Page.prototype.appendErrorDiv = function(parent) {
  window.accountchooser.param.notNull(parent, "parent");
  var errorDiv = jQuery("<div>").addClass("widget-error").appendTo(parent);
  return errorDiv
};
window.accountchooser.Page.prototype.appendMessageDiv = function(parent) {
  window.accountchooser.param.notNull(parent, "parent");
  var message = jQuery("<div>").addClass("widget-message").appendTo(parent).hide();
  return message
};
window.accountchooser.Page.prototype.appendClearDiv = function(parent) {
  window.accountchooser.param.notNull(parent, "parent");
  jQuery("<div>").addClass("cl").appendTo(parent)
};
window.accountchooser.Page.prototype.putCenter = function(opt_child, opt_parent) {
  var center = jQuery("<center>");
  opt_child && center.append(opt_child);
  opt_parent && center.appendTo(opt_parent);
  return center
};
window.accountchooser.Page.prototype.createIconButton = function(icon, handler, opt_param, opt_styleClass) {
  var buttonDiv = jQuery("<div>").addClass("wizard-idp");
  opt_styleClass && buttonDiv.addClass(opt_styleClass);
  var buttonLink = jQuery("<a>").attr("href", "javascript: void(0)");
  buttonLink.append(jQuery("<img>").attr("src", icon));
  var self = this;
  buttonDiv.click(function() {
    self[handler].call(self, opt_param);
    return!1
  });
  buttonLink.appendTo(buttonDiv);
  return buttonDiv
};
window.accountchooser.Page.prototype.createNascarLink_ = function(idp, idpId, handler) {
  window.accountchooser.param.notEmpty(idp, "idp");
  window.accountchooser.param.notEmpty(idpId, "idpId");
  window.accountchooser.param.notEmpty(handler, "handler");
  var li = jQuery("<li>").css("backgroundImage", 'url("' + idp.image + '")').addClass("widget-idp");
  var idpLink = jQuery("<a>").attr("href", "javascript: void(0)").append(jQuery("<span>").html(idp.label)).appendTo(li);
  var self = this;
  idpLink.click(function() {
    self[handler].call(self, idpId);
    return!1
  });
  return li
};
window.accountchooser.Page.prototype.createNascarList = function(idps, nascarIdpList, handler) {
  window.accountchooser.param.notEmpty(idps, "idps");
  window.accountchooser.param.notEmptyArray(nascarIdpList, "nascarIdpList");
  window.accountchooser.param.notEmpty(handler, "handler");
  var nascar = jQuery("<ol>");
  for(var i = 0;i < nascarIdpList.length;i++) {
    var idpId = nascarIdpList[i];
    this.createNascarLink_(idps[idpId], idpId, handler).appendTo(nascar)
  }
  return nascar
};
window.accountchooser.Page.prototype.createNascarSection = function(label, idps, nascarIdpList, handler) {
  window.accountchooser.param.notEmpty(idps, "idps");
  window.accountchooser.param.notEmptyArray(nascarIdpList, "nascarIdpList");
  window.accountchooser.param.notEmpty(handler, "handler");
  var nascarSection = jQuery("<div>").addClass("widget-nascar-list").append(jQuery("<h2>").html(label));
  this.createNascarList(idps, nascarIdpList, handler).appendTo(nascarSection);
  return nascarSection
};
window.accountchooser.Page.prototype.createHeader = function(title, opt_showCloseIcon, opt_closeIcon, opt_handler, opt_closeTitle, opt_styleClass) {
  window.accountchooser.param.notNull(title, "title");
  var headerBar = jQuery("<div>").addClass("widget-header").append(jQuery("<h1>").html(title));
  opt_styleClass && headerBar.addClass(opt_styleClass);
  if(opt_showCloseIcon) {
    window.accountchooser.param.notEmpty(opt_handler, "opt_handler");
    var closeIcon = jQuery("<span>").addClass("widget-close-icon").appendTo(headerBar);
    opt_closeTitle && closeIcon.attr("title", opt_closeTitle);
    var self = this;
    closeIcon.click(function() {
      self[opt_handler].call(self)
    })
  }
  return headerBar
};
window.accountchooser.Page.prototype.createAccountBox = function(email, legacy, displayName, photoUrl, handler, removeIconUrl, removeHandler, removeTitle, opt_providerId) {
  window.accountchooser.param.notEmpty(email, "email");
  window.accountchooser.param.notNull(legacy, "legacy");
  window.accountchooser.param.notEmpty(photoUrl, "photoUrl");
  window.accountchooser.param.notEmpty(handler, "handler");
  window.accountchooser.param.notEmpty(removeHandler, "removeHandler");
  window.accountchooser.param.notEmpty(removeTitle, "removeTitle");
  var li = jQuery("<li>").addClass("widget-account");
  jQuery("<img>").attr("src", photoUrl).addClass("widget-account-photo").appendTo(li);
  var account = jQuery("<p>").appendTo(li);
  displayName ? account.append(jQuery("<strong>").addClass("widget-account-name").html(displayName)) : account.addClass("widget-email-only");
  account.append(jQuery("<span>").addClass("widget-account-email").html(email));
  var removeLink = jQuery("<a>").addClass("widget-account-remove").attr("title", removeTitle).attr("href", "javascript: void(0)").appendTo(li);
  removeLink.append(jQuery("<img>").attr("src", removeIconUrl));
  var self = this;
  li.click(function() {
    self[handler].call(self, {email:email, displayName:displayName, legacy:!!legacy, photoUrl:photoUrl, providerId:opt_providerId});
    return!1
  });
  removeLink.click(function() {
    self[removeHandler].call(self, {email:email, displayName:displayName, legacy:!!legacy, photoUrl:photoUrl, providerId:opt_providerId});
    return!1
  });
  return li
};
window.accountchooser.Page.prototype.createPopupIndicator = function(busyIcon, busyLabel, handler) {
  window.accountchooser.param.notEmpty(busyIcon, "busyIcon");
  window.accountchooser.param.notEmpty(busyLabel, "busyLabel");
  window.accountchooser.param.notEmpty(handler, "handler");
  var main = jQuery("<div>").addClass("widget-main");
  var loading = jQuery("<div>").addClass("widget-loading").appendTo(main);
  loading.append(jQuery("<img>").attr("src", busyIcon));
  loading.append(jQuery("<p>").html(busyLabel));
  var self = this;
  main.click(function() {
    self[handler].call(self);
    return!1
  });
  return main
};
window.accountchooser.Page.prototype.createLegacyAccountSignInBox = function(email, displayName, photoUrl, opt_styleClass) {
  window.accountchooser.param.notEmpty(email, "email");
  window.accountchooser.param.notEmpty(photoUrl, "photoUrl");
  var li = jQuery("<li>").addClass("widget-account");
  opt_styleClass && li.addClass(opt_styleClass);
  jQuery("<img>").attr("src", photoUrl).addClass("widget-account-photo").appendTo(li);
  var account = jQuery("<p>").appendTo(li);
  displayName ? account.append(jQuery("<strong>").addClass("widget-account-name").html(displayName)) : account.addClass("widget-email-only");
  account.append(jQuery("<span>").addClass("widget-account-email").html(email));
  return li
};
window.accountchooser.Page.prototype.createKeyholeButton = function(keyholeUrl, caption, handler, opt_styleClass) {
  window.accountchooser.param.notEmpty(keyholeUrl, "keyholeUrl");
  window.accountchooser.param.notEmpty(caption, "caption");
  window.accountchooser.param.notEmpty(handler, "handler");
  var button = jQuery("<a>").attr("href", "javascript: void(0)").addClass("widget-keyhole-button");
  opt_styleClass && button.addClass(opt_styleClass);
  jQuery("<img>").attr("src", keyholeUrl).appendTo(button);
  button.append(caption);
  var self = this;
  button.click(function() {
    self[handler].call(self);
    return!1
  });
  return button
};
window.accountchooser.Page.prototype.createRenderedButton = function(caption, handler, opt_styleClass) {
  window.accountchooser.param.notEmpty(caption, "caption");
  window.accountchooser.param.notEmpty(handler, "handler");
  var button = jQuery("<a>").attr("href", "javascript: void(0)").addClass("widget-keyhole-button");
  opt_styleClass && button.addClass(opt_styleClass);
  button.append(caption);
  var self = this;
  button.click(function() {
    self[handler].call(self);
    return!1
  });
  return button
};
window.accountchooser.Page.prototype.appendErrorDiv = function(parent) {
  window.accountchooser.param.notNull(parent, "parent");
  var errorDiv = jQuery("<div>").addClass("widget-error").append(jQuery("<p>")).appendTo(parent);
  return errorDiv
};
window.accountchooser.Page.prototype.createAccountBox_ = function(account, defaultPhotoUrl, mode, opt_handler) {
  window.accountchooser.param.notNull(account, "account");
  window.accountchooser.param.notEmpty(account.email, "account.email");
  window.accountchooser.param.notEmpty(defaultPhotoUrl, "defaultPhotoUrl");
  window.accountchooser.param.notEmpty(mode, "mode");
  var title = account.email;
  account.providerId && (title += " (" + account.providerId + ")");
  var li = jQuery("<li>").attr("title", title);
  var photoUrl;
  /^https?:\/\//i.test(account.photoUrl) && (photoUrl = account.photoUrl);
  var img = jQuery("<img>").attr("src", photoUrl || defaultPhotoUrl).addClass("widget-account-photo").appendTo(li);
  img.error(function() {
    img.attr("src", defaultPhotoUrl)
  });
  var accountInfo = jQuery("<p>").appendTo(li);
  account.displayName ? accountInfo.append(jQuery("<strong>").addClass("widget-account-name").text(account.displayName)) : accountInfo.addClass("widget-email-only");
  var emailLine = jQuery("<span>").addClass("widget-account-email").text(account.email).appendTo(accountInfo);
  if(account.providerId) {
    var idpLine = jQuery("<span>").addClass("widget-account-idp").text(account.providerId).appendTo(accountInfo);
    var faviconUrl = "http://" + account.providerId + "/favicon.ico";
    var favicon = jQuery("<img>").attr("src", faviconUrl).attr("title", account.providerId).attr("alt", account.providerId);
    favicon.load(function() {
      idpLine.hide();
      emailLine.prepend(favicon)
    })
  }
  "removable" == mode ? (jQuery("<span>").addClass("widget-account-remove").appendTo(li), li.addClass("widget-selectable-account")) : "selectable" == mode ? (jQuery("<span>").addClass("widget-account-select").appendTo(li), li.addClass("widget-selectable-account")) : "disabled" == mode && li.addClass("widget-disabled-account");
  if(opt_handler && "disabled" != mode) {
    var self = this;
    li.click(function() {
      self[opt_handler].call(self, account);
      return!1
    })
  }
  return li
};
window.accountchooser.Page.prototype.createSelectableAccountBox = function(account, defaultPhotoUrl, handler) {
  window.accountchooser.param.notEmpty(handler, "handler");
  return this.createAccountBox_(account, defaultPhotoUrl, "selectable", handler)
};
window.accountchooser.Page.prototype.createRemovableAccountBox = function(account, defaultPhotoUrl, handler) {
  window.accountchooser.param.notEmpty(handler, "handler");
  return this.createAccountBox_(account, defaultPhotoUrl, "removable", handler)
};
window.accountchooser.Page.prototype.createDisabledAccountBox = function(account, defaultPhotoUrl) {
  return this.createAccountBox_(account, defaultPhotoUrl, "disabled")
};
window.accountchooser.Page.prototype.createAccountBox = function(account, defaultPhotoUrl) {
  return this.createAccountBox_(account, defaultPhotoUrl, "readonly")
};
window.accountchooser.Page.prototype.createLearnMoreLink = function(text, url, opt_Language) {
  opt_Language && (url = 0 > url.indexOf("?") ? url + ("?lang=" + opt_Language) : url + ("&lang=" + opt_Language));
  return jQuery("<a>").attr("href", url).attr("target", "_blank").html(text)
};
window.accountchooser.Page.prototype.createHeader = function(title, opt_subTitle, opt_showCloseIcon, opt_closeIcon, opt_handler, opt_closeTitle, opt_styleClass) {
  window.accountchooser.param.notNull(title, "title");
  var headerBar = jQuery("<div>").addClass("widget-header").append(jQuery("<h1>").html(title));
  opt_subTitle && (jQuery("<h2>").html(opt_subTitle).appendTo(headerBar), headerBar.addClass("widget-header-with-sub"));
  opt_styleClass && headerBar.addClass(opt_styleClass);
  if(opt_showCloseIcon) {
    window.accountchooser.param.notEmpty(opt_handler, "opt_handler");
    var closeIcon = jQuery("<span>").addClass("widget-close-icon").appendTo(headerBar);
    opt_closeTitle && closeIcon.attr("title", opt_closeTitle);
    var self = this;
    closeIcon.click(function() {
      self[opt_handler].call(self)
    })
  }
  return headerBar
};
window.accountchooser.Page.prototype.clearError = function() {
  jQuery(".widget-error", this.container_).hide();
  this.getErrorElement().empty()
};
window.accountchooser.Page.prototype.isShowingError = function() {
  return"none" != jQuery(".widget-error", this.container_).css("display")
};
window.accountchooser.Page.prototype.setError = function(errorHtml) {
  jQuery(".widget-error", this.container_).show();
  this.getErrorElement().html(errorHtml)
};
window.accountchooser.Page.prototype.getErrorElement = function() {
  return jQuery(".widget-error p", this.container_)
};
window.accountchooser.Page.prototype.getAccountElements = function() {
  return jQuery("li", this.container_)
};
window.accountchooser.Page.prototype.getAccountElement = function(index) {
  window.accountchooser.param.notNull(index, "index");
  return jQuery("li:eq(" + index + ")", this.container_)
};
window.accountchooser.Page.prototype.getConfirmElement = function() {
  return jQuery(".widget-footer a.widget-keyhole-button", this.container_)
};
window.accountchooser.Page.prototype.getCancelElement = function() {
  return jQuery(".widget-footer a.widget-button-skip", this.container_)
};
window.accountchooser.Page.prototype.getAddAccountElement = function() {
  return jQuery(".widget-footer a.widget-account-add", this.container_)
};
window.accountchooser.Page.prototype.createSigninBar = function(photoUrl, label, handler, opt_styleClass) {
  window.accountchooser.param.notEmpty(photoUrl, "photoUrl");
  window.accountchooser.param.notEmpty(label, "label");
  window.accountchooser.param.notEmpty(handler, "handler");
  return this.createKeyholeButton(photoUrl, label, handler, opt_styleClass)
};
window.accountchooser.Page.prototype.createNavBar = function(photoUrl, label, handler, arrowUrl, opt_styleClass) {
  window.accountchooser.param.notEmpty(photoUrl, "photoUrl");
  window.accountchooser.param.notEmpty(label, "label");
  window.accountchooser.param.notEmpty(handler, "handler");
  window.accountchooser.param.notEmpty(arrowUrl, "arrowUrl");
  var button = jQuery("<a>").attr("href", "javascript: void(0)").addClass("widget-keyhole-button");
  opt_styleClass && button.addClass(opt_styleClass);
  jQuery("<img>").attr("src", photoUrl).appendTo(button);
  button.append(jQuery("<span>").html(label));
  jQuery("<img>").addClass("widget-navbar-arrow").attr("src", arrowUrl).appendTo(button);
  var self = this;
  button.click(function() {
    self[handler].call(self);
    return!1
  });
  return button
};
window.accountchooser.Page.prototype.createDropMenu = function(menuArray) {
  window.accountchooser.param.notEmpty(menuArray, "menuArray");
  var menu = jQuery("<ol>").addClass("widget-navbar-menu");
  for(var i = 0;i < menuArray.length;i++) {
    var item = menuArray[i];
    item && (item.label && (item.url || item.handler)) && menu.append(this.createMenuItem_(item.label, item.url, item.handler, item.opt_styleClass))
  }
  return menu
};
window.accountchooser.Page.prototype.createMenuItem_ = function(label, url, handler, opt_styleClass) {
  window.accountchooser.param.notEmpty(label, "label");
  window.accountchooser.param.notEmpty(url || handler, "url or handler");
  var item = jQuery("<li>").addClass("widget-navbar-menuitem");
  opt_styleClass && item.addClass(opt_styleClass);
  var link = jQuery("<a>").append(jQuery("<nobr>").html(label)).appendTo(item);
  var self = this;
  link.click(function() {
    jQuery.isFunction(handler) ? handler.call(self) : handler ? self[handler].call(self) : window.location.href = url;
    return!1
  });
  return item
};
window.accountchooser.page = window.accountchooser.page || {};
window.accountchooser.page.EmptyRequestPage = function() {
};
window.accountchooser.page.EmptyRequestPage.inheritsFrom(window.accountchooser.Page);
window.accountchooser.page.EmptyRequestPage.prototype.render = function(container, opt_clientDomain, opt_resource) {
  this.clientDomain_ = opt_clientDomain;
  var resource = opt_resource || window.accountchooser.labels.emptyRequestPage;
  this.parentClass.render.call(this, container, resource, !1);
  this.render_()
};
window.accountchooser.page.EmptyRequestPage.prototype.render_ = function() {
  this.createHeader(this.resource_.title, this.showCloseIcon_, this.resource_.closeIcon, "onCloseIconClicked", this.resource_.close).appendTo(this.container_);
  var main = jQuery("<div>").addClass("widget-empty-request widget-main").appendTo(this.container_);
  this.appendErrorDiv(main).html(this.resource_.msg);
  var action = jQuery("<div>").appendTo(main);
  this.clientDomain_ ? action.html(this.resource_.actionWithDomain.replace(/\%\%domain\%\%/g, this.clientDomain_)) : action.html(this.resource_.action);
  var footer = jQuery("<div>").addClass("widget-footer").appendTo(this.container_);
  jQuery("<a>").attr("href", this.resource_.acSiteUrl).attr("target", "_blank").html(this.resource_.acSiteText).appendTo(footer)
};
window.accountchooser.page.ShareAccountPage = function() {
};
window.accountchooser.page.ShareAccountPage.inheritsFrom(window.accountchooser.Page);
window.accountchooser.page.ShareAccountPage.prototype.render = function(container, accounts, opt_resource) {
  this.accounts_ = accounts;
  var resource = opt_resource;
  resource || (resource = window.accountchooser.labels.shareAccountPage);
  this.parentClass.render.call(this, container, resource, !1);
  this.render_()
};
window.accountchooser.page.ShareAccountPage.prototype.render_ = function() {
  var title = 1 >= this.accounts_.length ? this.resource_.title : this.resource_.titleMultiple;
  this.createHeader(title, null, this.showCloseIcon_, this.resource_.closeIcon, "onCloseIconClicked", this.resource_.close).appendTo(this.container_);
  var main = jQuery("<div>").addClass("widget-accounts widget-main").appendTo(this.container_);
  var defaultPhotoUrl = window.accountchooser.images.noPhoto;
  if(this.accounts_.length) {
    var accounts = jQuery("<ol>").appendTo(main);
    for(var index = 0;index < this.accounts_.length;index++) {
      var account = this.accounts_[index];
      account && this.createAccountBox(account, defaultPhotoUrl).appendTo(accounts)
    }
  }
  var footer = jQuery("<div>").addClass("widget-footer").appendTo(this.container_);
  var confirm = 1 >= this.accounts_.length ? this.resource_.confirm : this.resource_.confirmMultiple;
  this.createRenderedButton(confirm, "onShareConfirmedClicked").appendTo(footer);
  this.createLinkButton(this.resource_.cancel, "onShareCancelClicked", "widget-button-skip").appendTo(footer)
};
window.accountchooser.page.ShareAccountPage.prototype.onShareConfirmedClicked = function() {
};
window.accountchooser.page.ShareAccountPage.prototype.onShareCancelClicked = function() {
};
window.accountchooser.page.SelectAccountPage = function() {
};
window.accountchooser.page.SelectAccountPage.inheritsFrom(window.accountchooser.Page);
window.accountchooser.page.SelectAccountPage.prototype.render = function(container, accounts, opt_otherAccounts, opt_domain, opt_resource) {
  this.accounts_ = accounts || [];
  this.otherAccounts_ = opt_otherAccounts || [];
  var resource = opt_resource;
  resource || (resource = window.accountchooser.labels.selectAccountPage);
  this.parentClass.render.call(this, container, resource, !1);
  this.siteDomain_ = opt_domain || "";
  this.render_()
};
window.accountchooser.page.SelectAccountPage.prototype.render_ = function() {
  this.createHeader(this.resource_.title, this.siteDomain_, this.showCloseIcon_, this.resource_.closeIcon, "onCloseIconClicked", this.resource_.close).appendTo(this.container_);
  var main = jQuery("<div>").addClass("widget-accounts widget-main").appendTo(this.container_);
  var defaultPhotoUrl = window.accountchooser.images.noPhoto;
  var accounts = jQuery("<ol>").appendTo(main);
  for(var i = 0;i < this.accounts_.length;i++) {
    var account = this.accounts_[i];
    account && account.email && this.createSelectableAccountBox(account, defaultPhotoUrl, "onAccountClicked").appendTo(accounts)
  }
  if(this.otherAccounts_.length) {
    var moreLink = jQuery("<div>").addClass("widget-more-accounts-button").appendTo(main);
    jQuery("<a>").attr("href", "javascript:void(0);").text(this.resource_.seeMoreAccounts).appendTo(moreLink);
    jQuery("<span>").addClass("widget-more-accounts-indicator").appendTo(moreLink);
    var moreAccounts = jQuery("<div>").addClass("widget-more-accounts").appendTo(main).hide();
    jQuery("<h2>").text(this.resource_.notUsable).appendTo(moreAccounts);
    accounts = jQuery("<ol>").appendTo(moreAccounts);
    for(i = 0;i < this.otherAccounts_.length;i++) {
      account = this.otherAccounts_[i], account && account.email && this.createDisabledAccountBox(account, defaultPhotoUrl).appendTo(accounts)
    }
    moreLink.click(function() {
      jQuery(moreLink).toggleClass("widget-more-accounts-expanded");
      moreAccounts.toggle()
    })
  }
  var footer = jQuery("<div>").addClass("widget-footer").appendTo(this.container_);
  this.createLinkButton(this.resource_.addAccount, "onAddAccountClicked", "widget-account-add").appendTo(footer)
};
window.accountchooser.page.SelectAccountPage.prototype.onAccountClicked = function() {
};
window.accountchooser.page.SelectAccountPage.prototype.onAddAccountClicked = function() {
};
window.accountchooser.Page.prototype.getAccountElements = function() {
  return jQuery("li:visible", this.container_)
};
window.accountchooser.Page.prototype.getAccountElement = function(index) {
  window.accountchooser.param.notNull(index, "index");
  return jQuery("li:visible:eq(" + index + ")", this.container_)
};
window.accountchooser.Page.prototype.getHiddenAccountElements = function() {
  return jQuery("li:hidden", this.container_)
};
window.accountchooser.Page.prototype.getHiddenAccountElement = function(index) {
  window.accountchooser.param.notNull(index, "index");
  return jQuery("li:hidden:eq(" + index + ")", this.container_)
};
window.accountchooser.Page.prototype.getSeeMoreAccountsElement = function() {
  return jQuery(".widget-more-accounts-button", this.container_)
};
window.accountchooser.page.UpdateAccountPage = function() {
};
window.accountchooser.page.UpdateAccountPage.inheritsFrom(window.accountchooser.Page);
window.accountchooser.page.UpdateAccountPage.prototype.render = function(container, account, opt_language, opt_resource) {
  this.account_ = account;
  var resource = opt_resource;
  resource || (resource = window.accountchooser.labels.updateAccountPage);
  this.parentClass.render.call(this, container, resource, !1);
  this.language = opt_language;
  this.render_()
};
window.accountchooser.page.UpdateAccountPage.prototype.render_ = function() {
  this.createHeader(this.resource_.title, null, this.showCloseIcon_, this.resource_.closeIcon, "onCloseIconClicked", this.resource_.close).appendTo(this.container_);
  var main = jQuery("<div>").addClass("widget-accounts widget-main").appendTo(this.container_);
  var updateAccount = jQuery("<ol>").appendTo(main);
  var defaultPhotoUrl = window.accountchooser.images.noPhoto;
  this.createAccountBox(this.account_, defaultPhotoUrl).appendTo(updateAccount);
  var footer = jQuery("<div>").addClass("widget-footer").appendTo(this.container_);
  this.createRenderedButton(this.resource_.confirm, "onUpdateConfirmedClicked").appendTo(footer);
  this.createLinkButton(this.resource_.cancel, "onUpdateCancelClicked", "widget-button-skip").appendTo(footer)
};
window.accountchooser.page.UpdateAccountPage.prototype.onUpdateConfirmedClicked = function() {
};
window.accountchooser.page.UpdateAccountPage.prototype.onUpdateCancelClicked = function() {
};
window.accountchooser.page.ManageAccountPage = function() {
};
window.accountchooser.page.ManageAccountPage.inheritsFrom(window.accountchooser.Page);
window.accountchooser.page.ManageAccountPage.prototype.render = function(container, opt_accounts, opt_language, opt_resource) {
  this.accounts_ = opt_accounts || [];
  var resource = opt_resource || window.accountchooser.labels.manageAccountPage;
  this.parentClass.render.call(this, container, resource, !1);
  this.language = opt_language;
  this.render_()
};
window.accountchooser.page.ManageAccountPage.prototype.render_ = function() {
  this.createHeader(this.resource_.title, null, this.showCloseIcon_, this.resource_.closeIcon, "onCloseIconClicked", this.resource_.close).appendTo(this.container_);
  var main = jQuery("<div>").addClass("widget-accounts widget-main").appendTo(this.container_);
  this.appendErrorDiv(main).hide();
  var defaultPhotoUrl = window.accountchooser.images.noPhoto;
  if(this.accounts_.length) {
    var accounts = jQuery("<ol>").appendTo(main);
    for(var i = 0;i < this.accounts_.length;++i) {
      var account = this.accounts_[i];
      account && account.email && this.createRemovableAccountBox(account, defaultPhotoUrl, "onAccountClicked").appendTo(accounts)
    }
  }
};
window.accountchooser.page.ManageAccountPage.prototype.onAccountClicked = function() {
};
window.accountchooser.Service = function() {
};
window.accountchooser.Service.prototype.setCdsConfig = function(cdsConfig) {
  this.cdsConfig_ = cdsConfig
};
window.accountchooser.Service.prototype.setContainer = function(container) {
  this.container_ = container
};
window.accountchooser.Service.prototype.checkRequestType_ = function(expectType, opt_notToClient) {
  var error = null;
  !this.request_ instanceof window.accountchooser.rpc.Request ? error = {code:-32600, message:"Invalid Request", data:"Parameter must be a Request type."} : !this.request_ instanceof expectType && (error = {code:-32600, message:"Invalid Request", data:"Error request type: expect type is {" + expectType + "}."});
  return error ? (this.sendErrorResponse_(error, opt_notToClient), !1) : !0
};
window.accountchooser.Service.prototype.executeRequest = function(request, clientDomain) {
  request ? (this.request_ = request, this.clientDomain_ = clientDomain, window.accountchooser.util.browserconfig.isDisabled() && !(this instanceof window.accountchooser.ManageService) && !(this instanceof window.accountchooser.AboutService) ? this.sendDisabledErrorResponse_() : this.execute()) : window.accountchooser.util.log("Empty request received, ignored.")
};
window.accountchooser.Service.prototype.execute = function() {
  var error = {code:-32601, message:"Method not found", data:"Unimplemented 'execute' method!"};
  this.sendErrorResponse_(error)
};
window.accountchooser.Service.prototype.sendResponse_ = function(response, opt_notToClient) {
  window.accountchooser.rpc.callClient(response);
  opt_notToClient || this.goToClient()
};
window.accountchooser.Service.prototype.sendErrorResponse_ = function(error, opt_notToClient) {
  var response = new window.accountchooser.rpc.Response(this.request_.getId(), void 0, error);
  this.sendResponse_(response, opt_notToClient)
};
window.accountchooser.Service.prototype.sendDisabledErrorResponse_ = function(opt_notToClient) {
  var error = {code:-32601, message:"Method not found", data:"Service is disabled. Method is not available."};
  this.sendErrorResponse_(error, opt_notToClient)
};
window.accountchooser.Service.prototype.sendDoneResponse_ = function(result, opt_notToClient) {
  var response = new window.accountchooser.rpc.Response(this.request_.getId(), result);
  this.sendResponse_(response, opt_notToClient)
};
window.accountchooser.Service.prototype.sendStoreResponse = function(stored, opt_notToClient) {
  var positiveCallbackUrl = this.getClientConfigValue("positiveCallbackUrl");
  var negativeCallbackUrl = this.getClientConfigValue("negativeCallbackUrl");
  stored && positiveCallbackUrl ? window.location.replace(positiveCallbackUrl) : !stored && negativeCallbackUrl ? window.location.replace(negativeCallbackUrl) : this.sendDoneResponse_({stored:stored}, opt_notToClient)
};
window.accountchooser.Service.prototype.sendSelectResponse = function(account, opt_idpAssertion, opt_notToClient) {
  this.sendDoneResponse_({account:account, idpAssertion:opt_idpAssertion}, opt_notToClient)
};
window.accountchooser.Service.prototype.sendAddAccountResponse = function(opt_notToClient) {
  this.sendDoneResponse_({addAccount:!0}, opt_notToClient)
};
window.accountchooser.Service.prototype.sendUpdateResponse = function(updated, opt_notToClient) {
  var positiveCallbackUrl = this.getClientConfigValue("positiveCallbackUrl");
  var negativeCallbackUrl = this.getClientConfigValue("negativeCallbackUrl");
  updated && positiveCallbackUrl ? window.location.replace(positiveCallbackUrl) : !updated && negativeCallbackUrl ? window.location.replace(negativeCallbackUrl) : this.sendDoneResponse_({updated:updated}, opt_notToClient)
};
window.accountchooser.Service.prototype.goToClient = function() {
  var request = this.request_;
  this.request_ = null;
  this.clientDomain_ = null;
  this.cdsConfig_.popupMode ? request.params_.clientConfig.keepPopup || window.close() : window.location = request.params_.clientConfig.clientCallbackUrl
};
window.accountchooser.Service.prototype.getClientConfigValue = function(config) {
  return config && this.request_ && this.request_.params_ && this.request_.params_.clientConfig && this.request_.params_.clientConfig[config]
};
window.accountchooser.ServiceType = {MANAGE:"manage", SELECT:"select", STORE:"store", UPDATE:"update", ABOUT:"about"};
window.accountchooser.ManageService = function() {
};
window.accountchooser.ManageService.inheritsFrom(window.accountchooser.Service);
window.accountchooser.ManageService.prototype.execute = function() {
  if(this.checkRequestType_(window.accountchooser.rpc.ManageRequest)) {
    var accounts = window.accountchooser.util.accountstorage.readAccounts();
    this.showManageAccountPage_(accounts)
  }
};
window.accountchooser.ManageService.prototype.showManageAccountPage_ = function(accounts$$0) {
  this.container_.empty();
  this.page_ = new window.accountchooser.page.ManageAccountPage;
  var self = this;
  this.page_.onAccountClicked = function(account) {
    window.accountchooser.util.accountstorage.removeAccount(account);
    var accounts = window.accountchooser.util.accountstorage.readAccounts();
    self.showManageAccountPage_(accounts);
    self.page_.setError(window.accountchooser.labels.manageAccountPage.deleteReminder)
  };
  this.page_.render(this.container_, accounts$$0, void 0, void 0, !1)
};
window.accountchooser.StoreService = function() {
};
window.accountchooser.StoreService.inheritsFrom(window.accountchooser.Service);
window.accountchooser.StoreService.prototype.execute = function() {
  if(this.checkRequestType_(window.accountchooser.rpc.StoreRequest)) {
    var cdsAccounts = window.accountchooser.util.accountstorage.readAccounts();
    var accounts = window.accountchooser.util.sanitizeAccounts(this.request_.params_.accounts || [], window.accountchooser.util.accountSanitizer);
    this.accounts_ = [];
    var i = 0;
    for(var length = accounts.length;i < length;i++) {
      var account = accounts[i];
      var stored = !1;
      for(var j = 0;j < cdsAccounts.length;j++) {
        if(window.accountchooser.util.accountstorage.matchAccount(cdsAccounts[j], account)) {
          stored = !0;
          break
        }
      }
      stored || this.accounts_.push(account)
    }
    0 == this.accounts_.length ? this.sendStoreResponse(!0) : this.showShareAccountPage_()
  }
};
window.accountchooser.StoreService.prototype.showShareAccountPage_ = function() {
  this.container_.empty().addClass("widget-panel-chooser");
  var self = this;
  this.page_ = new window.accountchooser.page.ShareAccountPage;
  this.page_.onShareConfirmedClicked = function() {
    for(var i = 0;i < self.accounts_.length;i++) {
      window.accountchooser.util.accountstorage.addAccount(self.accounts_[i])
    }
    self.sendStoreResponse(!0)
  };
  this.page_.onShareCancelClicked = function() {
    self.sendStoreResponse(!1)
  };
  this.page_.render(this.container_, this.accounts_, void 0, !1)
};
window.accountchooser.SelectService = function() {
};
window.accountchooser.SelectService.inheritsFrom(window.accountchooser.Service);
window.accountchooser.SelectService.prototype.execute = function() {
  if(this.checkRequestType_(window.accountchooser.rpc.SelectRequest)) {
    var showAll = this.getClientConfigValue("showAll");
    this.filter = {withEmail:!showAll, idpList:this.getClientConfigValue("idpFilter")};
    var cdsAccounts = window.accountchooser.util.accountstorage.readAccounts(this.filter) || [];
    var localAccounts = window.accountchooser.util.sanitizeAccounts(this.request_.params_.localAccounts || [], window.accountchooser.util.accountSanitizer);
    var accounts = this.removeDuplicatedAccount_(localAccounts.concat(cdsAccounts));
    var result = this.filterAccountByProviders_(accounts, this.getClientConfigValue("providers") || []);
    var qualified = result.qualified;
    var rest = result.rest;
    this.getClientConfigValue("showAll") || (qualified = this.removeUsernameOnlyAccount_(qualified), rest = this.removeUsernameOnlyAccount_(rest));
    qualified.length ? (this.getClientConfigValue("language"), this.showSelectAccountPage_(qualified, rest)) : this.sendAddAccountResponse()
  }
};
window.accountchooser.SelectService.prototype.getAssertion_ = function(account) {
  var idp = window.accountchooser.rpc.isSupportedIdp(account);
  if(idp) {
    var self = this;
    var callback = function(response) {
      response && response.getResult() ? self.sendSelectResponse(account, response.getResult().idpAssertion) : self.sendSelectResponse(account)
    };
    var timeout = function() {
      self.sendSelectResponse(account)
    };
    var request = new window.accountchooser.rpc.IdpAuthRequest(account, {clientCallbackUrl:this.getClientConfigValue("clientCallbackUrl")});
    window.accountchooser.rpc.callIdp(idp, request, callback, timeout)
  }else {
    this.sendSelectResponse(account)
  }
};
window.accountchooser.SelectService.prototype.showSelectAccountPage_ = function(accounts, otherAccounts) {
  this.container_.empty().addClass("widget-panel-chooser");
  var self = this;
  this.page_ = new window.accountchooser.page.SelectAccountPage;
  this.page_.onAccountClicked = function(account) {
    account.synthesized || window.accountchooser.util.accountstorage.addAccount(account);
    delete account.synthesized;
    self.getAssertion_(account)
  };
  this.page_.onAddAccountClicked = function() {
    self.sendAddAccountResponse()
  };
  var callbackDomain = this.request_.params_.clientConfig.clientCallbackUrl && window.accountchooser.util.getDomainFromUrl(this.request_.params_.clientConfig.clientCallbackUrl);
  this.page_.render(this.container_, accounts, otherAccounts, callbackDomain, void 0, !1)
};
window.accountchooser.SelectService.prototype.removeDuplicatedAccount_ = function(accounts) {
  var result = [];
  var i = 0;
  for(var length = accounts.length;i < length;i++) {
    0 > window.accountchooser.util.accountstorage.inAccountList(accounts[i], result) && result.push(accounts[i])
  }
  return result
};
window.accountchooser.SelectService.prototype.removeUsernameOnlyAccount_ = function(accounts) {
  var result = [];
  var i = 0;
  for(var length = accounts.length;i < length;i++) {
    var account = accounts[i];
    (window.accountchooser.util.isValidEmail(account.email) || account.providerId) && result.push(account)
  }
  return result
};
window.accountchooser.SelectService.prototype.filterAccountByProviders_ = function(accounts, providers) {
  var qualified = [];
  var rest = [];
  var qualifiedEmail = {};
  var i = 0;
  for(var length = accounts.length;i < length;i++) {
    var account = accounts[i];
    !account.providerId || 0 <= window.accountchooser.util.indexOf(account.providerId, providers) ? (qualified.push(account), qualifiedEmail[account.email] = !0) : rest.push(account)
  }
  qualified = qualified.concat(this.synthesizeAccounts_(rest, qualifiedEmail));
  return{qualified:qualified, rest:rest}
};
window.accountchooser.SelectService.prototype.synthesizeAccounts_ = function(accounts, excluded) {
  var result = [];
  var emailIndex = {};
  var i = 0;
  for(var length = accounts.length;i < length;i++) {
    var email = accounts[i].email;
    if(!excluded[email]) {
      var index = emailIndex[email];
      if("undefined" == typeof index) {
        var account = jQuery.extend({synthesized:!0}, accounts[i]);
        delete account.providerId;
        result.push(account);
        emailIndex[email] = result.length - 1
      }else {
        account = result[index], account.displayName = account.displayName || accounts[i].displayName, account.photoUrl = account.photoUrl || accounts[i].photoUrl
      }
    }
  }
  return result
};
window.accountchooser.UpdateService = function() {
};
window.accountchooser.UpdateService.inheritsFrom(window.accountchooser.Service);
window.accountchooser.UpdateService.prototype.execute = function() {
  if(this.checkRequestType_(window.accountchooser.rpc.UpdateRequest)) {
    var account = window.accountchooser.util.sanitizeAccount(this.request_.params_.account, window.accountchooser.util.accountSanitizer);
    var cdsAccounts = window.accountchooser.util.accountstorage.readAccounts() || [];
    var found = !1;
    for(var i = 0;i < cdsAccounts.length;i++) {
      var other = cdsAccounts[i];
      if(window.accountchooser.util.accountstorage.matchAccount(account, other)) {
        window.accountchooser.util.accountstorage.checkCompatible(account, other) && (account.displayName = account.displayName || other.displayName, account.photoUrl = account.photoUrl || other.photoUrl);
        found = !0;
        break
      }
    }
    if(found) {
      var language = this.getClientConfigValue("language");
      this.showUpdateAccountPage_(account, language)
    }else {
      this.sendUpdateResponse(!1)
    }
  }
};
window.accountchooser.UpdateService.prototype.showUpdateAccountPage_ = function(account, opt_language) {
  this.container_.empty().addClass("widget-panel-chooser");
  var self = this;
  this.page_ = new window.accountchooser.page.UpdateAccountPage;
  this.page_.onUpdateConfirmedClicked = function() {
    window.accountchooser.util.accountstorage.refreshAccount(account);
    self.sendUpdateResponse(!0)
  };
  this.page_.onUpdateCancelClicked = function() {
    self.sendUpdateResponse(!1)
  };
  this.page_.render(this.container_, account, opt_language, void 0, !1)
};
window.accountchooser.AboutService = function() {
};
window.accountchooser.AboutService.inheritsFrom(window.accountchooser.Service);
window.accountchooser.AboutService.prototype.execute = function() {
};
})()
