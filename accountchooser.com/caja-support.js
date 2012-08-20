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

/**
 * @fileoverview Shows customized UI according to client configuration.
 * @author guibinkong@google.com (Guibin Kong)
 */

/**
 * Simple URL Regex with following rules:<br/>
 * 1) Only allow HTTP/HTTPS schema.
 * 2) Must be an absolute URL (starting with 'http' or 'https').
 * 3) No hash part.
 */
var VALID_URL_REGEX =
    /^http(s)?:\/\/(localhost|([a-z0-9]([-a-z0-9]*[a-z0-9])?\.)+[a-z0-9]+)(\:\d+)?(\/([^?#]*))?(\?([^#]*))?$/i;

/**
 * Displays the hidden elements on the page after successfully loading
 * customized UI.
 * @param {object} uiParts Whether to show each UI part. Example:
 * <pre>
 *   {
 *     header: true/false,
 *     main: true/false,
 *     footer: true/false
 *   }
 * </pre>
 * .
 */
function showClientContent(uiParts) {
  if (!uiParts) {
    return;
  }
  if (uiParts.header) {
    document.getElementById('cds-header').style.display = '';
  }
  if (uiParts.footer) {
    document.getElementById('cds-footer').style.display = '';
    document.getElementById('cds-footer-line').style.display = '';
  }
  if (uiParts.main) {
    var w = document.getElementById('cds');
    document.getElementById('cds-container').appendChild(
        w.parentNode.removeChild(w));
    document.getElementById('cds-main').style.display = '';
  }
  jQuery('select#AC_LANGUAGE_LIST').change(function() {
    var url = jQuery(this).val();
    if (url && VALID_URL_REGEX.exec(url)) {
      window.top.location.href = url;
    }
  });
}

/**
 * Changes the favicon of the page.
 * @param {string} iconURL The URL of the new icon.
 */
function changeFavicon(iconURL) {
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
  link.href = iconURL;
  head.appendChild(link);
}

/**
 * Handles the request to show customized UI.
 * @param {object} config The configuration for customized UI. Example:
 * <pre>
 *   {
 *     favicon: '',          // URL of the favicon.
 *     title: '',            // The window title.
 *     header: ''            // URL of the header HTML.
 *     main: {
 *       url: '',            // URL of the main HTML.
 *       method: ''          // Methods for the main HTML: sanitize | cajole.
 *       enableOnMobile:     // Forces the main part show on mobile device.
 *     },
 *     footer: ''            // URL of the footer HTML.
 *   }
 * </pre>
 * .
 */
function uiHandler(config) {
  if (!config) {
    return;
  }
  if (config.favicon && VALID_URL_REGEX.exec(config.favicon)) {
    changeFavicon(config.favicon);
  }
  if (config.title) {
    document.title = config.title;
  }

  var uiParts = {};
  var semaphore = new window.accountchooser.util.Semaphore(
      function() {
    showClientContent(uiParts);
  });
  var decreaseSemaphore = jQuery.proxy(semaphore.decrease, semaphore);
  if (config.main && config.main.url && VALID_URL_REGEX.exec(config.main.url) &&
      (config.main.enableOnMobile || !window.accountchooser.
      util.isMobileAgent(navigator.userAgent))) {
    semaphore.increase();
    uiParts.main = true;
    if (config.main.method == 'cajole') {
      window.accountchooser.caja.cajoleHtml('cds-market',
          config.main.url, decreaseSemaphore);
    } else {
      window.accountchooser.caja.sanitizeHtml(config.main.url,
          function(html) {
        document.getElementById('cds-market').innerHTML = html;
        decreaseSemaphore();
      });
    }
  }
  if (config.header && VALID_URL_REGEX.exec(config.header)) {
    semaphore.increase();
    uiParts.header = true;
    window.accountchooser.caja.sanitizeHtml(config.header,
        function(html) {
      document.getElementById('cds-header').innerHTML = html;
      decreaseSemaphore();
    });
  }
  if (config.footer && VALID_URL_REGEX.exec(config.footer)) {
    semaphore.increase();
    uiParts.footer = true;
    window.accountchooser.caja.sanitizeHtml(config.footer,
        function(html) {
      document.getElementById('cds-footer').innerHTML = html;
      decreaseSemaphore();
    });
  }
  if (semaphore.getValue() > 0) {
    semaphore.start();
  }
}
