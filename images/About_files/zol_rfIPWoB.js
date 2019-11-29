if (self.CavalryLogger) { CavalryLogger.start_js(["oaySQ"]); }

__d("EventDashboardURISetter",["Event","PageTransitions"],(function(a,b,c,d,e,f){__p&&__p();a={_handler:null,setURIWithLink:function(a){window.history.pushState({subpath:a},document.title,a)},setURI:function(a,b,c){var d="/events/";b&&b!="all"?(a=="subscribed"&&b!=a&&(d+=a+"/"),d+=b):d+=a;c?window.history.pushState({subpath:d,filter:a,tab:b},document.title,d):window.location.pathname!=d&&window.history.replaceState({subpath:d,filter:a},document.title,d)},initAndSetNewContentURI:function(a,b){this.initHandler(),this.setNewContentURI(a,b)},setNewContentURI:function(a,b,c){var d="/events/";a&&a!=="home"&&(d+=a+"/",b&&b!=="upcoming"&&(d+=b+"/"));c?window.history.pushState({subpath:d,key:a,focus:b},document.title,d):window.history.replaceState({subpath:d,key:a,focus:b},document.title,d)},initHandler:function(){var a=this;this._handler||(this._handler=b("Event").listen(window,"popstate",function(a){a.state&&a.state.subpath&&b("PageTransitions").go(a.state.subpath,!0)}),b("Event").listen(window,"unload",function(b){a._handler.remove()}))}};e.exports=a}),null);
__d("XEventTagsBootstrapController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/event/typeahead/tags_bootstrap/",{})}),null);
__d("EventDiscoverCategoryTypeahead.react",["React","WebAsyncSearchSource","XEventTagsBootstrapController","XUITypeahead.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(){return new(b("WebAsyncSearchSource"))({bootstrapRequests:[{uri:b("XEventTagsBootstrapController").getURIBuilder().getURI()}]})}a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={showTypeahead:!1,queryString:"",searchSource:g()},c.$2=function(a){c.setState({queryString:a.target.value})},c.$3=function(a){c.props.onSelectAttempt&&c.props.onSelectAttempt(a),c.setState({queryString:""})},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.$1=function(){this.setState({showTypeahead:!0}),this.refs.typeahead&&this.refs.typeahead.focusInput()};d.render=function(){var a=this;return this.state.showTypeahead?b("React").jsx(b("XUITypeahead.react"),babelHelpers["extends"]({},this.props,{onChange:this.$2,onSelectAttempt:this.$3,queryString:this.state.queryString,searchSource:this.state.searchSource})):b("React").jsx("div",{onClick:function(){return a.$1()},role:"presentation",children:this.props.content})};return c}(b("React").PureComponent);e.exports=a}),null);
__d("EventDiscoverTimeRangeSelector.react",["cx","invariant","BUIDateRangeLayer.react","ContextualLayer.react","ContextualLayerAutoFlip","ContextualLayerUpdateOnScroll","LayerAutoFocus","LayerHideOnEscape","LayerRefocusOnHide","LayerTabIsolation","LocalDateInterval","React","ReactDOM","ShimButton.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("React").PropTypes;var i={ContextualLayerAutoFlip:b("ContextualLayerAutoFlip"),ContextualLayerUpdateOnScroll:b("ContextualLayerUpdateOnScroll"),LayerAutoFocus:b("LayerAutoFocus"),LayerHideOnEscape:b("LayerHideOnEscape"),LayerRefocusOnHide:b("LayerRefocusOnHide"),LayerTabIsolation:b("LayerTabIsolation")};c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=null,d.$2=function(a){return{value:"value"in a?a.value:a.defaultValue}},d.$3=function(){d.setState({showLayer:!0})},d.$4=function(){d.setState({showLayer:!1})},d.$5=function(a){d.setState({value:a}),d.props.onChange&&d.props.onChange(a.interval)},d.$6=function(a){d.setState({showLayer:a})},d.$7=function(){var a=d.$1;a||h(0,496);return a},d.$8=function(a){d.$1=b("ReactDOM").findDOMNode(a)},d.state=babelHelpers["extends"]({showLayer:!1},d.$2(d.props)),c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.UNSAFE_componentWillReceiveProps=function(a){"value"in a&&a.value!==this.props.value&&this.setState(this.$2(a))};d.renderLayers=function(){return b("React").jsx(b("ContextualLayer.react"),{behaviors:i,contextRef:this.$7,onBlur:this.$4,onToggle:this.$6,position:"below",shouldSetARIAProperties:!1,shown:this.state.showLayer,children:b("React").jsx(b("BUIDateRangeLayer.react"),{className:"_5mwk",dateRestraints:this.props.dateRestraints,value:this.state.value,limitPagerToRestraints:this.props.limitPagerToRestraints,onCancel:this.$4,onChange:this.$5,onConfirm:this.$4,options:this.props.options,timezoneID:this.props.timezoneID,timezoneLabel:this.props.timezoneLabel,updateButtonLabel:this.props.updateButtonLabel})},"layer")};d.render=function(){return b("React").jsxs("span",{children:[b("React").jsx(b("ShimButton.react"),{onClick:this.$3,ref:this.$8,role:"button",tabIndex:"0",children:this.props.content}),this.renderLayers()]})};return c}(b("React").PureComponent);c.propTypes={content:function(a,c){if(b("React").Children.count(a[c])!==1)return new Error("must have the content")},dateRestraints:a.arrayOf(a.func),defaultValue:a.instanceOf(b("LocalDateInterval")),limitPagerToRestraints:a.bool,onChange:a.func,options:a.arrayOf(a.shape({calculateInterval:a.func.isRequired,calculateIntervalIncludingToday:a.func,disableComparison:a.bool,disableComparisonMessage:a.shape({content:a.string.isRequired,title:a.string}),text:a.any.isRequired,value:a.string.isRequired})).isRequired,timezoneID:a.number.isRequired,timezoneLabel:a.string,value:a.instanceOf(b("LocalDateInterval"))};c.defaultProps={options:b("BUIDateRangeLayer.react").defaultProps.options};e.exports=c}),null);
__d("XEventsAdminToolEventsDashboardController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/events/ajax/dashboard/admined_pages/",{acontext:{type:"String",required:!0},cursor:{type:"String"},first:{type:"Int",required:!0},is_events_host_page:{type:"Bool",defaultValue:!1},event_id:{type:"FBID"},exclude_page_id:{type:"FBID"}})}),null);
__d("XUISubNavigation.react",["ix","cx","fbt","Image.react","React","ReactDOM","XUISubNavigation","fbglyph"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=b("React").Children.toArray(this.props.children),c=this.props,d=c.maxVisible,e=c.selected;e&&(a=a.map(function(a){a.props.itemKey===e&&(a=b("React").cloneElement(a,{selected:!0}));return a}));c=null;if(d&&a.length>d){var f=b("React").jsxs("a",{className:"_1fsj",href:"#",ref:"overflowLink",children:[b("React").jsx(b("Image.react"),{className:"_s6o",src:g("125305")}),i._("See more")]},"overflowLink");c=b("React").jsxs("div",{className:"_1fsh",children:[a.slice(d),f]});a=a.slice(0,d)}return b("React").jsxs("div",{className:"_2fvv",children:[a,c]})};d.componentDidMount=function(){var a=b("ReactDOM").findDOMNode(this);if(a instanceof HTMLElement){var c=b("ReactDOM").findDOMNode(this.refs.overflowLink);this.$1=new(b("XUISubNavigation"))(a,c instanceof HTMLElement?c:null)}};d.componentWillUnmount=function(){this.$1.destroy()};return c}(b("React").Component);e.exports=a}),null);
__d("XUISubNavigationItem.react",["ix","cx","fbt","Image.react","Link.react","PopoverMenu.react","React","XUISpinner.react","fbglyph","joinClasses"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=b("React").Children.toArray(this.props.children),c=this.props,d=c.endpoint,e=c.icon;c=c.menu;c&&(c=b("React").jsx(b("PopoverMenu.react"),{alignh:"left",alignv:"middle",autoflip:!0,className:"_2yax",dynamicoffsety:!0,hasarrow:!0,menu:c,position:"right",children:b("React").jsx(b("Link.react"),{className:"_5n0n",role:"button",children:b("React").jsx(b("Image.react"),{alt:i._("Open"),src:g("123797")})})}));e!=null&&(e=b("React").isValidElement(e)?b("React").jsx(b("React").Fragment,{children:e}):b("React").jsx(b("Image.react"),{className:"_2yaw",height:"16",src:e,width:"16"}));var f=null;d&&(f=b("React").jsx(b("XUISpinner.react"),{className:"_2wwb"}));var h="false";this.props.selected&&(h="page");var j=this.props.className;if(this.props.disabled)return b("React").jsx("div",{className:b("joinClasses")(j,"_2yaa"),children:b("React").jsxs("span",{className:"_2yau _2528",children:[e,b("React").jsx("span",{className:"_2yav",children:a[0]}),this.props.accessory]})});d=b("React").jsxs("a",{className:"_2yau","data-endpoint":d,href:this.props.href,rel:this.props.rel,"aria-current":h,onClick:this.props.onClick,children:[e,b("React").jsx("span",{className:"_2yav",children:a[0]}),f,this.props.accessory]});h="_2yaa"+(c?" _5n0o":"");if(a.length===1){this.props.selected&&(j=b("joinClasses")(j,"_2yap"));return b("React").jsxs("div",{className:b("joinClasses")(j,h),children:[d,c]})}return b("React").jsxs("div",{className:j,children:[b("React").jsxs("div",{className:h,children:[d,c]}),b("React").jsx("div",{className:"_3o_h",children:a[a.length-1]})]})};return c}(b("React").Component);e.exports=a}),null);
__d("EventsAdminToolEventsDashboardEntryPoints.react",["ix","cx","fbt","AsyncRequest","FDSText.react","FlexLayout.react","Image.react","Link.react","React","ScaledImage.react","XEventsAdminToolEventsDashboardController","XUISubNavigation.react","XUISubNavigationItem.react","asset","cxMargin"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();function j(a){var c;return(c=b("React")).jsx(b("Link.react"),{className:"_73cv",onClick:a.onSeeMoreClicked,children:c.jsxs(b("FlexLayout.react"),{direction:"horizontal",align:"center",children:[c.jsx(b("Image.react"),{src:g("512979")}),c.jsx(b("FDSText.react"),{margin:"_3-9a",color:"blueLink",children:i._("See More")})]})})}a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={eventsAdminToolPageItemList:c.props.eventsAdminToolPageItems,cursor:c.props.cursor,isEventsHostPage:c.props.isEventsHostPage,isLoading:!1,hasMore:c.props.hasMore},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a=this;if(this.state.eventsAdminToolPageItemList.length===0)return null;var c=b("React").jsx("div",{className:"_73cw",children:i._("Manage Page Events")}),d=b("React").jsx("div",{className:"_73cx",children:b("React").jsx(b("XUISubNavigation.react"),{children:this.state.eventsAdminToolPageItemList.map(function(b){return a.$1(b)})})}),e=this.state.hasMore&&b("React").jsx(j,{onSeeMoreClicked:function(){return a.$2(10)}});return b("React").jsxs(b("FlexLayout.react"),{direction:"vertical",align:"start",className:"_73cy",children:[c,d,e]})};d.$1=function(a){var c,d=(c=b("React")).jsx("div",{className:"_73cz",children:c.jsx(b("ScaledImage.react"),{className:"_73c-",height:16,width:16,imageSize:{height:a.profilePicture.height,width:a.profilePicture.width},src:a.profilePicture.uri})});return c.jsx(b("XUISubNavigationItem.react"),{href:a.uri,itemKey:a.id,icon:d,className:"_73c_",children:c.jsx(b("FDSText.react"),{display:"truncate",children:a.name})},a.id)};d.$2=function(a){var c=this;if(!this.state.hasMore||this.state.isLoading)return;this.setState({isLoading:!0});a=b("XEventsAdminToolEventsDashboardController").getURIBuilder().setString("acontext",this.props.acontext).setString("cursor",this.state.cursor).setInt("first",a).setBool("is_events_host_page",this.state.isEventsHostPage).setFBID("event_id",this.props.eventID).getRequest_LEGACY_UNTYPED(new(b("AsyncRequest"))());a.setPayloadHandler(function(a){a?c.setState(function(b){return{isLoading:!1,hasMore:a.hasMore,isEventsHostPage:a.isEventsHostPage,cursor:a.cursor,eventsAdminToolPageItemList:b.eventsAdminToolPageItemList.concat(a.eventsAdminToolPageItems)}}):c.setState({isLoading:!1,hasMore:!1})}).setErrorHandler(function(a){return c.setState({isLoading:!1,hasMore:!1})}).send()};return c}(b("React").Component);e.exports=a}),null);
__d("XEventsDashboardDiscoveryController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/events/discovery/",{acontext:{type:"String"},focus:{type:"Enum",enumType:1},last_bucket:{type:"String"},view:{type:"Enum",defaultValue:"discovery",enumType:1},extra_data:{type:"StringToStringMap"},resetnux:{type:"Bool",defaultValue:!1},adjusted_ts:{type:"String"},event_creation_suggestion:{type:"String"},suggestion_token:{type:"String"},cursor:{type:"String"},city_id:{type:"String"}})}),null);
__d("XGroupsCreateGroupGetDialogAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/groups/create_get/",{appid:{type:"String"},members:{type:"FBIDKeyset"},name:{type:"String"},description:{type:"String"},parent_id:{type:"FBID"},source_group_id:{type:"FBID"},role:{type:"String"},ref:{type:"String",required:!0},suggestion_category:{type:"String"},suggestion_id:{type:"FBID"},message_thread_fbid:{type:"FBID"},add_top_fans:{type:"Bool",defaultValue:!0},__asyncDialog:{type:"Int"}})}),null);