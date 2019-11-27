/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* import polymer library */
/* declare DOM module */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import './css/px-timeline-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style include="px-timeline-styles"></style>
    <table class="table">
      <tbody>
        <tr>
          <template is="dom-repeat" items="[[keys]]">
            <th>{{item}}</th>
          </template>
        </tr>
        <template is="dom-repeat" items="{{contentBodyTable}}" as="row">
          <tr>
            <template is="dom-repeat" items="{{keys}}" as="key">
              <td>{{_getValue(row, key)}}</td>
            </template>
          </tr>
        </template>
      </tbody>
    </table>
`,

  is: 'px-timeline-node-table',

  properties: {
    keys: {
      type: Array
    }
  },

  ready : function(){
    var col = [];
    for (var i = 0; i < this.contentBodyTable.length; i++) {
      for (var key in this.contentBodyTable[i]) {
        if (col.indexOf(key) === -1) {
            col.push(key);
        }
      }
    }
    this.set("keys", col);
  },

  _getValue: function(row, key){
    return row[key];
  }
});
