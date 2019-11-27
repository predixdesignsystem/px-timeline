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
    <div class="text__comment">
      <svg width="56px" height="47px" viewBox="0 0 56 47" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch -->
          <title>Fill 16</title>
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g id="Dashboard-Anatomy" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Timeline---On-Simple-Page" transform="translate(-569.000000, -349.000000)" fill="currentColor">
                  <g id="#1" transform="translate(318.000000, 256.000000)">
                      <path d="M282.5526,122.0052 C282.5526,113.6212 284.5796,107.0572 288.6336,102.3132 C292.6886,97.5692 298.3836,94.4522 305.7196,92.9632 L305.7196,101.5682 C300.1486,103.2782 296.3976,106.3672 294.4676,110.8352 C293.3636,113.2072 292.9226,115.4972 293.1436,117.7022 L306.1336,117.7022 L306.1336,139.4632 L282.5526,139.4632 L282.5526,122.0052 Z M251.8066,122.0052 C251.8066,113.7312 253.7776,107.1942 257.7216,102.3952 C261.6656,97.5962 267.4156,94.4522 274.9736,92.9632 L274.9736,101.5682 C269.3476,103.3342 265.5686,106.3672 263.6376,110.6692 C262.6456,112.9322 262.2316,115.2762 262.3966,117.7022 L275.3876,117.7022 L275.3876,139.4632 L251.8066,139.4632 L251.8066,122.0052 Z" id="Fill-16"></path>
                  </g>
              </g>
          </g>
      </svg>
    </div>
`,

  is: 'px-timeline-node-comment-svg',

  properties: {

  },

  ready: function() {
  }
});
