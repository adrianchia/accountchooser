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
 * The configuration of the CDS.
 */
window.accountchooser.CDS_CONFIG = {
  Uiloader: new window.accountchooser.UrlTemplateUiLoader(
  'https://ssl.gstatic.com/cds/8/{language}/{baseFilename}.js'),
  services: {
    web: {
      store: {baseFilename: 'ac-ui',
          name: 'window.accountchooser.StoreService'},
      select: {baseFilename: 'ac-ui',
          name: 'window.accountchooser.SelectService'},
      update: {baseFilename: 'ac-ui',
          name: 'window.accountchooser.UpdateService'},
      manage: {baseFilename: 'ac-ui',
          name: 'window.accountchooser.ManageService'}
    }
  }
};
