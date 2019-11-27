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
/* Common imports */
/* Common demo imports */
/* Imports for this component */
/* Demo DOM module */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-demo/px-demo-header.js';
import 'px-demo/px-demo-api-viewer.js';
import 'px-demo/px-demo-footer.js';
import 'px-demo/px-demo-configs.js';
import 'px-demo/px-demo-props.js';
import 'px-demo/px-demo-interactive.js';
import 'px-demo/px-demo-code-editor.js';
import 'px-demo/px-demo-component-snippet.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '../px-timeline.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <!-- Header -->
    <px-demo-header module-name="px-timeline" description="The px-timeline is a flexible interactive timeline component for visualizing a time based series of events and documenting details relevant to each event respectively." mobile="" tablet="" desktop="">
    </px-demo-header>

    <!-- Interactive -->
    <px-demo-interactive>
      <!-- Configs -->
      <px-demo-configs slot="px-demo-configs" configs="[[configs]]" props="{{props}}" chosen-config="{{chosenConfig}}"></px-demo-configs>

      <!-- Props -->
      <px-demo-props slot="px-demo-props" props="{{props}}" config="[[chosenConfig]]"></px-demo-props>

      <px-demo-code-editor slot="px-demo-code-editor" props="{{props}}"></px-demo-code-editor>

      <!-- Component ---------------------------------------------------------->
      <px-demo-component slot="px-demo-component">
        <div>
          <px-timeline show-time-groups="[[props.timeGroups.value]]" show-node-content="{{props.showNodeContent.value}}" timeline-data="{{props.timelineData.value}}" enhanced="{{props.enhanced.value}}" editable="[[props.editable.value]]" date-format="{{props.dateFormat.value}}" compact-editor-info="[[props.compactEditorInfo.value]]">
          </px-timeline>
        </div>
      </px-demo-component>
      <!-- END Component ------------------------------------------------------>

      <px-demo-component-snippet slot="px-demo-component-snippet" element-properties="{{props}}" element-name="px-timeline" links-includes="[[linksIncludes]]">
      </px-demo-component-snippet>
    </px-demo-interactive>

    <!-- API Viewer -->
    <px-demo-api-viewer source="px-timeline"></px-demo-api-viewer>

    <!-- Footer -->
    <px-demo-footer></px-demo-footer>
`,

  is: 'px-timeline-demo',

  properties: {
    ajaxUrl: {
      type: Object,
      computed: '_computerDemoDataURL(_demoDataURL)'
    },
    _demoDataURL: {
      type: String,
      value: "data/industrial-data.json"
    },
    /**
     * @property demoProps
     * @type {Object}
     */
    props: {
      type: Object,
      value: function(){ return this.demoProps; }
    },

    /**
     * @property demoProps
     * @type {Array}
     */
    configs: {
      type: Array,
      value: function(){
        return [
            {
              configName: "Simple"
            }
        ];
      }
    }
  },

  listeners: {
    'px-timeline-edit' : '_editTimeline'
  },

  demoProps: {
    timelineData: {
      type: Object,
      inputType:"code:JSON",
      defaultValue: []
    },
    dateFormat: {
      type: String,
      inputType: "text",
      defaultValue: "MMM D, YYYY HH:MM"
    },
    timeGroups: {
      type: Boolean,
      inputType: "toggle",
      defaultValue: false
    },
    editable: {
      type: Boolean,
      inputType: "toggle",
      defaultValue: false
    },
    enhanced: {
      type: Boolean,
      inputType: "toggle",
      defaultValue: false
    },
    showNodeContent: {
      type: Boolean,
      inputType: "toggle",
      defaultValue: false,
      inputHelpText: 'Only applies to "enhanced"'
    },
    compactEditorInfo: {
      type: Boolean,
      inputType: "toggle",
      defaultValue: false,
      inputHelpText: 'Only applies to "enhanced"'
    }
  },

  ready: function() {
    this._makeAjaxRequest(this.ajaxUrl.Simple);
  },

  _makeAjaxRequest: function(url) {
    var ironAjaxEl = document.createElement('iron-ajax'),
    nodes;

    ironAjaxEl.handleAs = "json";
    ironAjaxEl.url = url;
    ironAjaxEl.addEventListener('response', function(evt) {
      nodes = evt.detail.response;
      this.set('props.timelineData.value', nodes);
    }.bind(this));
    ironAjaxEl.generateRequest();
  },

  _computerDemoDataURL: function(){
    var importPath = this.importPath;
    importPath = importPath.substr(0,importPath.indexOf('demo/'));
    return {'Simple': importPath + this._demoDataURL};
  },

  _editTimeline: function(evt){
    alert("Clicked on timeline node index " +evt.detail);
  }
});
