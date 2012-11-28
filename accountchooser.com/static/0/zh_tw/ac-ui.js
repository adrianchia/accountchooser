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
  return beginLink + ("\u77ad\u89e3\u5982\u4f55\u90e8\u7f72\u5e33\u6236\u9078\u64c7\u5de5\u5177" + endLink)
};
window.accountchooser.images = jQuery.extend(window.accountchooser.images || {}, {noPhoto:"static/image/generic_avatar.png", manHome:"static/image/man-personal.jpg", manWork:"static/image/man-professional.jpg", womanHome:"static/image/woman-personal.jpg", womanWork:"static/image/woman-professional.jpg"});
window.accountchooser.labels = jQuery.extend(window.accountchooser.labels || {}, {shareAccountPage:{title:"\u65b0\u589e\u5e33\u6236", titleMultiple:"\u65b0\u589e\u5e33\u6236", confirm:"\u8a18\u4f4f\u9019\u500b\u5e33\u6236", confirmMultiple:"\u8a18\u4f4f\u9019\u4e9b\u5e33\u6236", cancel:"\u7565\u904e\u9019\u500b\u5e33\u6236"}, updateAccountPage:{title:"\u66f4\u65b0\u5e33\u6236", confirm:"\u66f4\u65b0\u5e33\u6236", cancel:"\u53d6\u6d88"}, selectAccountPage:{title:"\u767b\u5165", seeMoreAccounts:"\u67e5\u770b\u66f4\u591a", 
notUsable:"\u4e0d\u9069\u7528\u65bc\u9019\u500b\u7db2\u7ad9", addAccount:"\u65b0\u589e\u5e33\u6236"}, manageAccountPage:{title:"\u7ba1\u7406\u5e33\u6236", deleteReminder:"\u5e33\u6236\u5df2\u79fb\u9664\u3002\u67d0\u4e9b\u7db2\u7ad9\u53ef\u80fd\u4ecd\u6703\u81ea\u52d5\u5c07\u60a8\u767b\u5165\u9019\u500b\u5e33\u6236\uff0c\u6216\u662f\u4fdd\u5b58\u904e\u53bb\u60a8\u4f7f\u7528\u9019\u500b\u5e33\u6236\u7684\u7d00\u9304\u3002"}, manageContainer:{header:"\u60a8\u7684\u5e33\u6236", description:"\u9ede\u9078\u4efb\u4e00\u5e33\u6236\u5373\u53ef\u5c07\u8a72\u5e33\u6236\u5f9e\u5e33\u6236\u9078\u64c7\u5de5\u5177\u4e2d\u79fb\u9664"}, 
selectContainer:{header:"\u9078\u53d6\u8981\u767b\u5165\u7684\u5e33\u6236"}, storeContainer:{header:"\u5c07\u60a8\u7684\u5e33\u6236\u65b0\u589e\u5230\u9019\u53f0\u88dd\u7f6e", headerMultiple:"\u5c07\u60a8\u7684\u5e33\u6236\u65b0\u589e\u5230\u9019\u53f0\u88dd\u7f6e", description:"\u5c0d\u983b\u7e41\u7684\u767b\u5165\u52d5\u4f5c\u611f\u5230\u53ad\u7169\u4e86\u55ce\uff1f\u5feb\u5728\u9019\u88e1\u65b0\u589e\u60a8\u7684\u5e33\u6236\uff01\u5373\u4f7f\u662f\u65b0\u7684\u61c9\u7528\u7a0b\u5f0f (\u4f8b\u5982\u8cfc\u7269\u7db2\u7ad9)\uff0c\u60a8\u53ea\u8981\u6309\u4e00\u4e0b\u5e33\u6236\u6216\u8f38\u5165\u5bc6\u78bc\u5373\u53ef\u8f15\u9b06\u767b\u5165\u3002", 
descriptionMultiple:"\u5c0d\u983b\u7e41\u7684\u767b\u5165\u52d5\u4f5c\u611f\u5230\u53ad\u7169\u4e86\u55ce\uff1f\u5728\u9019\u88e1\u52a0\u5165\u60a8\u7684\u5e33\u6236\u5427\uff01\u4f7f\u7528\u67d0\u4e9b\u65b0\u578b\u61c9\u7528\u7a0b\u5f0f (\u4f8b\u5982\u8cfc\u7269\u7db2\u7ad9\u7684\u7a0b\u5f0f) \u6642\uff0c\u60a8\u751a\u81f3\u53ea\u8981\u6309\u4e00\u4e0b\u5e33\u6236\u6216\u8f38\u5165\u5bc6\u78bc\u5373\u53ef\u8f15\u9b06\u767b\u5165\u3002", benefits:["\u4e00\u65e6\u5c07\u5e33\u6236\u65b0\u589e\u5230\u9019\u53f0\u88dd\u7f6e\uff0c\u4ee5\u5f8c\u6bcf\u7576\u51fa\u73fe\u767b\u5165\u63d0\u793a\u6642\uff0c\u60a8\u518d\u4e5f\u4e0d\u5fc5\u8f38\u5165\u96fb\u5b50\u90f5\u4ef6\u5730\u5740\u3002\u53ea\u8981\u5f9e\u6e05\u55ae\u4e2d\u9078\u53d6\u60f3\u8981\u4f7f\u7528\u7684\u5e33\u6236\u5373\u53ef\u3002", 
"\u67d0\u4e9b\u7db2\u9801\u9084\u662f\u6703\u8981\u6c42\u60a8\u8f38\u5165\u5bc6\u78bc\uff0c\u4e0d\u904e\u5176\u4ed6\u7db2\u9801\u5247\u6703\u5728\u60a8\u9ede\u9078\u5e33\u6236\u540d\u7a31\u5f8c\u81ea\u52d5\u8b93\u60a8\u767b\u5165\u3002"]}, updateContainer:{header:"\u66f4\u65b0\u5e33\u6236\u8a73\u7d30\u8cc7\u6599", description:"\u4ee5\u5f8c\u9019\u4e9b\u8cc7\u8a0a\u6703\u51fa\u73fe\u5728\u60a8\u7684\u5e33\u6236\u9078\u64c7\u5de5\u5177\u4e2d\uff0c\u8acb\u78ba\u8a8d\u60a8\u7684\u5e33\u6236\u8cc7\u8a0a\u662f\u5426\u6b63\u78ba\u3002"}, 
aboutContainer:{title:"\u95dc\u65bc\u5e33\u6236\u9078\u64c7\u5de5\u5177", header:"\u95dc\u65bc\u5e33\u6236\u9078\u64c7\u5de5\u5177", sec1Par1:"\u8d8a\u4f86\u8d8a\u591a\u7684\u7db2\u7ad9\u4ee5\u5e33\u6236\u9078\u64c7\u5de5\u5177\u53d6\u4ee3\u50b3\u7d71\u7684\u767b\u5165\u65b9\u584a\uff0c\u76ee\u7684\u662f\u8b93\u7db2\u7ad9\u66f4\u5b89\u5168\u4e14\u66f4\u5bb9\u6613\u4f7f\u7528\u3002\u7576\u60a8\u5617\u8a66\u767b\u5165\u9019\u985e\u7db2\u7ad9\u6642\uff0c\u5c07\u6703\u770b\u5230\u7db2\u9801\u4e0a\u986f\u793a\u5e33\u6236\u6e05\u55ae\uff0c\u5217\u51fa\u60a8\u5728\u9019\u53f0\u96fb\u8166\u4e0a\u6700\u5e38\u4f7f\u7528\u7684\u5e33\u6236\u3002", 
subHeader1:"\u4f7f\u7528\u8005\uff1a\u57fa\u672c\u8aaa\u660e", sec2Par1:"\u4e00\u65e6\u5c07\u5e33\u6236\u65b0\u589e\u5230\u9019\u53f0\u88dd\u7f6e\uff0c\u4ee5\u5f8c\u6bcf\u7576\u51fa\u73fe\u767b\u5165\u63d0\u793a\u6642\uff0c\u60a8\u518d\u4e5f\u4e0d\u5fc5\u8f38\u5165\u96fb\u5b50\u90f5\u4ef6\u5730\u5740\u3002\u53ea\u8981\u5f9e\u6e05\u55ae\u4e2d\u9078\u53d6\u60f3\u8981\u4f7f\u7528\u7684\u5e33\u6236\u5373\u53ef\u3002", sec2Par2:"\u67d0\u4e9b\u7db2\u9801\u9084\u662f\u6703\u8981\u6c42\u60a8\u8f38\u5165\u5bc6\u78bc\uff0c\u4e0d\u904e\u5176\u4ed6\u7db2\u9801\u5247\u6703\u5728\u60a8\u9ede\u9078\u5e33\u6236\u540d\u7a31\u5f8c\u81ea\u52d5\u8b93\u60a8\u767b\u5165\u3002", 
subHeader2:"\u7db2\u7ad9\u64c1\u6709\u8005\uff1a\u77ad\u89e3\u5982\u4f55\u5347\u7d1a\u60a8\u7684\u7db2\u7ad9", sec3Par1:"\u5347\u7d1a\u60a8\u7684\u7db2\u7ad9\u5373\u53ef\u4f7f\u7528\u5e33\u6236\u9078\u64c7\u5de5\u5177\uff0c\u512a\u9ede\u5982\u4e0b\uff1a", sec3Par1List1:"\u63d0\u9ad8\u7db2\u7ad9\u7684\u767b\u5165\u7387\u8207\u8a3b\u518a\u7387", sec3Par1List2:"\u8b93\u60a8\u7684\u7db2\u7ad9\u65e5\u5f8c\u66f4\u5bb9\u6613\u652f\u63f4\u8eab\u5206\u9a57\u8b49\u670d\u52d9", sec3Par1List3:"\u53ea\u9700\u7a0d\u7a0d\u4fee\u6539\u7db2\u7ad9\u8a2d\u8a08", 
deployButton:MSG_CONTAINER_ABOUT_DEPLOY_BUTTON('<a href="http://accountchooser.net/owners">', "</a>"), accountManHome:{email:"john.garcia@gmail.com", displayName:"John Garcia", photoUrl:window.accountchooser.images.manHome}, accountManWork:{email:"jgarcia@summitmedgroup.com", displayName:"John Garcia", photoUrl:window.accountchooser.images.manWork}, accountWomanHome:{email:"sara_corlett@yahoo.com", displayName:"Sara Corlett", photoUrl:window.accountchooser.images.womanHome}, accountWomanWork:{email:"corlett@alertblue.com", 
displayName:"Mrs. Corlett", photoUrl:window.accountchooser.images.womanWork}}, footerContainer:{copyright:"Copyright 2012 OpenID Foundation.", learnMore:"\u95dc\u65bc\u5e33\u6236\u9078\u64c7\u5de5\u5177", learnMoreLink:"/learnmore.html"}});
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
