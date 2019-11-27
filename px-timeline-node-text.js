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

import './px-timeline-node-comment-svg.js';
import './css/px-timeline-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style include="px-timeline-styles"></style>
    <div class="text__box flex">
      <template is="dom-if" if="{{comment}}">
        <px-timeline-node-comment-svg> </px-timeline-node-comment-svg>
        <div class="text--spacer flex">
        </div>
      </template>
      <div class="text">
        <span> {{contentBodyText.text}} </span>
      </div>
    </div>
`,

  is: 'px-timeline-node-text',

  properties: {

  },

  ready: function() {
    if (this.contentBodyText.isComment) {
      this.comment = true;
    }
  }
});