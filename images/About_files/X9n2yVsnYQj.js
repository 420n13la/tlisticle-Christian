if (self.CavalryLogger) { CavalryLogger.start_js(["d14wS"]); }

__d("BoostedActionStatsCategory",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({DAILY_BUDGET:"daily_budget",LIFETIME_BUDGET:"lifetime_budget",DURATION:"duration",LEAD:"lead",LIKE:"like",LINK_CLICK:"link_click",PAGE_VIEW:"page_view",REACH:"reach",RSVP:"rsvp",SPENT:"spent",STATUS:"ad_status",VIDEO_VIEW:"video_view",ENGAGEMENT:"engagement",LOCAL_ENGAGEMENT:"local_engagement",OFFSITE_CONVERSION:"offsite_conversion",OFFSITE_CONVERSION_FB_PIXEL_ADD_TO_CART:"offsite_conversion.fb_pixel_add_to_cart",OFFSITE_CONVERSION_FB_PIXEL_VIEW_CONTENT:"offsite_conversion.fb_pixel_view_content",OFFSITE_CONVERSION_FB_PIXEL_PURCHASE:"offsite_conversion.fb_pixel_purchase",ONSITE_CONVERSION_FLOW_COMPLETE:"onsite_conversion_flow_complete",ONSITE_CONVERSION_PURCHASE:"onsite_conversion_purchase",LOCAL_IMPRESSIONS:"local_impressions",UNIQUE_CLICK:"unique_click",CTA_GET_DIRECTIONS_CLICK:"cta_get_directions_click",CTA_CALL_NOW_CLICK:"cta_call_now_click",CTA_MESSAGE_PAGE_CLICK:"cta_message_page_click",CTA_MESSAGING_REPLY:"cta_messaging_reply",CTA_LEARN_MORE_CLICK:"cta_learn_more_click",CTA_SAVE_CLICK:"cta_save_click",CTA_MESSAGING_REPLY_THREADS:"cta_messaging_reply_threads",MULTIPLE_CTA_CLICK:"multiple_cta_click",INSTALLS:"installs",NO_OBJECTIVE:"no_objective",LEADGEN_OTHER:"actions:leadgen.other",POST_ENGAGEMENT:"actions:post_engagement",MOBILE_APP_INSTALL:"actions:mobile_app_install",APP_INSTALL:"actions:app_install",OMNI_PURCHASE:"actions:omni_purchase",ONSITE_CONVERSION_MESSAGING_REPLY:"actions:onsite_conversion.messaging_reply",VIDEO_3_SEC_VIEWS:"actions:video_view",ACTIONS_RSVP:"actions:rsvp",ACTIONS_LINK_CLICK:"actions:link_click",ACTIONS_LIKES:"actions:like",ACTIONS_PIXEL_PURCHASE:"actions:offsite_conversion.fb_pixel_purchase",ACTIONS_ONSITE_PURCHASES:"actions:onsite_conversion.purchase",ACTIONS_ADD_TO_CART:"actions:offsite_conversion.fb_pixel_add_to_cart",ACTIONS_MESSAGING_CONVERSATION:"actions:onsite_conversion.messaging_conversation_started_7d",ACTIONS_LANDING_PAGE:"actions:landing_page_view",ACTIONS_ONSITE_CONVERSION_FLOW_COMPLETE:"actions:onsite_conversion.flow_complete",ACTIONS_ONSITE_CONVERSION_SUBMIT_APPLICATION:"actions:onsite_conversion.submit_application",ONSITE_CONVERSION_SERVICE_BOOKING_REQUEST:"actions:onsite_conversion.service_booking_request",VIDEO_2_SEC_WATCHED_ACTIONS:"video_continuous_2_sec_watched_actions",VIDEO_2_SEC_WATCHED_ACTIONS_VIDEO_VIEW:"video_continuous_2_sec_watched_actions:video_view",VIDEO_10_SEC_WATCHED_ACTIONS:"video_10_sec_watched_actions",VIDEO_10_SEC_WATCHED_ACTIONS_VIDEO_VIEW:"video_10_sec_watched_actions:video_view",VIDEO_THRUPLAY_WATCHED_ACTIONS_VIDEO_VIEW:"video_thruplay_watched_actions:video_view",VIDEO_THRUPLAY_WATCHED_ACTIONS:"video_thruplay_watched_actions",ESTIMATED_AD_RECALLERS:"estimated_ad_recallers",ACTIONS_RECEIVE_OFFER:"actions:receive_offer",ACTIONS_OFFSITE_CONVERSIONS_PIXEL_LEAD:"actions:offsite_conversion.fb_pixel_lead",ACTIONS_OFFSITE_CONVERSIONS_PIXEL_VIEW_CONTENT:"actions:offsite_conversion.fb_pixel_view_content",ACTIONS_OFFSITE_CONVERSIONS_INITIATE_CHECKOUT:"actions:offsite_conversion.fb_pixel_initiate_checkout",UNKNOWN:"unknown"})}),null);
__d("AdsLWIInsightsStrings",["fbt","AdsInsightsMetricNames","BoostedActionStatsCategory","FBLogger","strictGetKeyByValue"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a){a=b("strictGetKeyByValue")(b("BoostedActionStatsCategory"),a);return a!=null?b("BoostedActionStatsCategory")[a]:null}function a(a){if(a===null)return g._("Results");else if(a==="reach")return g._("People Reached");a=i(a);return b("AdsInsightsMetricNames")[a]}function i(a){var b=h(a);switch(b){case"video_continuous_2_sec_watched_actions":return"video_continuous_2_sec_watched_actions:video_view";case"video_10_sec_watched_actions":return"video_10_sec_watched_actions:video_view";case"video_thruplay_watched_actions":return"video_thruplay_watched_actions:video_view";default:break}return a}function c(a,c){__p&&__p();var d=h(c);switch(a){case 14:return g._("Cost per Post Engagement");case 8:return g._("Cost per Page Like");case 39:switch(d){case"actions:onsite_conversion.messaging_reply":return g._("Cost Per Messaging Reply");case"actions:onsite_conversion.messaging_conversation_started_7d":return g._("Cost Per Messaging Conversation Started");default:break}break;case 31:return g._("Cost per Lead (Form)");case 26:case 36:return g._("Cost per 1,000 impressions");case 12:return g._("Cost per Event Response");case 15:switch(d){case"actions:onsite_conversion.purchase":case"actions:omni_purchase":return g._("Cost per Purchase");case"actions:offsite_conversion.fb_pixel_purchase":case"offsite_conversion.fb_pixel_purchase":return g._("Cost per Website Purchase");case"offsite_conversion.fb_pixel_add_to_cart":return g._("Cost per Add to Cart");case"offsite_conversion.fb_pixel_view_content":return g._("Cost per View Content");case"actions:onsite_conversion.flow_complete":return g._("Cost per On-Facebook Workflow Completion");case"actions:onsite_conversion.submit_application":return g._("Cost per Application Submitted");default:break}break;case 19:return g._("Cost per Link Click");case 24:d=i(c);switch(d){case"video_continuous_2_sec_watched_actions:video_view":return g._("Cost per 2-Second Continuous Video View");case"video_10_sec_watched_actions:video_view":return g._("Cost per 10-Second Video View");case"video_thruplay_watched_actions:video_view":default:return g._("Cost per ThruPlay")}case 17:return g._("Cost per Mobile App Install");case 37:return g._("Cost per Desktop App Install");default:break}b("FBLogger")("boosted_component").warn("No cost per result label shown for objective: %s and conversion type: %s",a,c);return null}e.exports={getCostPerResultLabel:c,getPerformanceIndicatorName:a}}),null);
__d("BoostedComponentDialogButtonV2Wrapper.react",["AdsLWIProductUtils","AsyncRequest","FBLogger","FDSSpinner.react","JSResource","React","XBoostedComponentFetchButtonDataController","lazyLoadComponent","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("AdsLWIProductUtils").convertAppIDToProduct,h=b("lazyLoadComponent")(b("JSResource")("AdsLWIDialogButtonContainer.react").__setRef("BoostedComponentDialogButtonV2Wrapper.react"));a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){var c;c=a.call(this,b)||this;c.state={buttonData:null};c.$1(b);return c}var d=c.prototype;d.componentDidUpdate=function(a){(a.targetID!==this.props.targetID||a.product!==this.props.product)&&this.$1(this.props)};d.$1=function(a){__p&&__p();var c=this,d;this.state.buttonData&&this.setState({buttonData:null});var e=a.appID,f=a.onButtonDataLoaded;e=e!=null&&g(e);d=b("nullthrows")((d=a.product)!=null?d:e);e=b("XBoostedComponentFetchButtonDataController").getURIBuilder().setEnum("product",d).setInt("page_id",a.pageID).setInt("post_id",a.targetID).setString("ref",a.placement).setBool("permanent_create_mode",a.permanentCreateMode).setFBID("boost_id",a.boostID).setString("entry_point_details",a.entryPointDetails).getURI();new(b("AsyncRequest"))(e).setHandler(function(a){c.setState({buttonData:a.payload}),f&&f(a.payload)}).setErrorHandler(function(a){a=a.getErrorSummary();b("FBLogger")("boosted_component").mustfix("Unable to fetch button data: %s",a!=null?a.toString():"Empty")}).send()};d.render=function(){var a;a=(a=this.props.loadingComponent)!=null?a:b("React").jsx(b("FDSSpinner.react"),{size:"small"});var c=this.state.buttonData;return!c?a:b("React").jsx(b("React").Suspense,{fallback:a,children:b("React").jsx(h,{autoOpenDialog:this.props.autoOpenDialog,buttonLabel:this.props.buttonLabel,buttonUse:this.props.buttonUse,configData:c.configData,customComponent:this.props.customComponent,inline:this.props.inline,instanceData:c.instanceData,instanceID:this.props.instanceID||c.instanceID,permanentCreateMode:this.props.permanentCreateMode,size:this.props.buttonSize,stopPropagation:this.props.stopPropagation})})};return c}(b("React").PureComponent);e.exports=a}),null);
__d("BoostedPostStrings",["fbt"],(function(a,b,c,d,e,f,g){a={DEFAULT_BUTTON_LABEL:g._("Boost Post"),JOB_OPENING_DIALOG_TITLE:g._("Boost Job Post"),PROMOTE_GROUP_DIALOG_TITLE:g._("Promote Group"),SHARE_AND_BOOST_TITLE:g._("Share and Boost Post"),DIRECT_BOOST_TITLE:g._("Boost Post"),EVENT_BUTTON_LABEL:g._("Boost Event"),GROUP_BUTTON_LABEL:g._("Promote Group"),TARGETING_LABELS:{LOCATION:g._("Location"),AGE:g._("Age"),GENDER:g._("Gender"),LANGUAGES:g._("Languages"),INTERESTS:g._("Interests"),ADD_REGION_PLACEHOLDER:g._("Add states\/provinces..."),ADD_CITY_PLACEHOLDER:g._("Add cities..."),COUNTRY:g._("Country")}};e.exports=a}),null);
__d("PagesCalloutDispatcher",["ExplicitRegistrationReactDispatcher"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(b){b=a.call(this,b)||this;babelHelpers.assertThisInitialized(b).dispatch=b.dispatch.bind(babelHelpers.assertThisInitialized(b));return b}return b}(b("ExplicitRegistrationReactDispatcher"));e.exports=new a({strict:!0})}),null);
__d("PagesCalloutStore",["FluxReduceStore","PagesCalloutDispatcher"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.getInitialState=function(){return{channelID:null,eligible:{},pageID:null,showing:[],surface:"unknown"}};c.reduce=function(a,b){__p&&__p();var c=babelHelpers["extends"]({},a);switch(b.type){case"init_surface":return{channelID:b.data.channelID,eligible:{},pageID:b.data.pageID,showing:[],surface:b.data.surface};case"register_callout":if(!b.data.tip_id||b.data.tip_id==="")break;c.eligible=babelHelpers["extends"]({},a.eligible);c.eligible[b.data.tip_id]=babelHelpers["extends"]({},b.data);break;case"show_callout":c.showing.push(b.data.tip_id);break;case"dismiss_callout":a=c.showing.indexOf(b.data.tip_id);a!=null&&c.showing.splice(a,1);break}return c};return b}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=new a(b("PagesCalloutDispatcher"))}),null);
__d("XPageCalloutAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/callout/",{pageid:{type:"Int",required:!0},tip_ids:{type:"IntVector"}})}),null);
__d("PagesCalloutHelper",["AsyncRequest","AYMTClientSideLogging","BasicFBNux","PagesCalloutDispatcher","PagesCalloutStore","Run","XPageCalloutAsyncController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={_initSurface:function(a,c,d){b("PagesCalloutDispatcher").dispatch({data:{surface:d,pageID:a,channelID:c},type:"init_surface"})},registerNux:function(a,c,d){var e=this;if(a.length===0)return;var f=function(){return e._showCalloutAndListenToClose(a,c,!0)};d=d?{tip_id:a,showCallback:f,nux_id:d}:{tip_id:a,showCallback:f};b("PagesCalloutDispatcher").dispatch({type:"register_callout",data:d})},registerCallout:function(a,c,d){var e=this;if(a.length===0)return;var f=function(){return e._showCalloutAndListenToClose(a,c,!1)};d=d?{tip_id:a,showCallback:f,nux_id:d}:{tip_id:a,showCallback:f};b("PagesCalloutDispatcher").dispatch({type:"register_callout",data:d})},showCalloutAfterLoading:function(a,c,d){var e=this;b("PagesCalloutDispatcher").explicitlyRegisterStore(b("PagesCalloutStore"));this._initSurface(a,c,d);b("Run").onAfterLoad(function(){return e._pickAndShowCallout()})},logClick:function(a){b("AYMTClientSideLogging").logClick(a,b("PagesCalloutStore").getState().channelID)},logXout:function(a){b("AYMTClientSideLogging").logXout(a,b("PagesCalloutStore").getState().channelID);a=b("PagesCalloutStore").getState().eligible[a];a&&a.nux_id&&b("BasicFBNux").onDismiss(a.nux_id)},_pickAndShowCallout:function(){var a=this,c=b("PagesCalloutStore").getState();if(c.showing.length>0)return;c=b("XPageCalloutAsyncController").getURIBuilder().setInt("pageid",c.pageID).setIntVector("tip_ids",Object.keys(c.eligible)).getURI();new(b("AsyncRequest"))().setHandler(function(b){a._showCalloutAndLog(b.payload)}).setURI(c).send()},_showCalloutAndLog:function(a){__p&&__p();if(!a)return;var c=b("PagesCalloutStore").getState().eligible[a];if(!c)return;var d=c.showCallback;if(!d)return;var e=b("PagesCalloutStore").getState();if(e.showing.length>0)return;d.apply();b("AYMTClientSideLogging").logImpression(a,e.channelID);c.nux_id&&b("BasicFBNux").onView(c.nux_id)},_showCalloutAndListenToClose:function(a,c,d){var e=this;c.isShown()||(c.show(),b("PagesCalloutDispatcher").dispatch({type:"show_callout",data:{tip_id:a}}),c.subscribe("hide",function(){b("PagesCalloutDispatcher").dispatch({type:"dismiss_callout",data:{tip_id:a}}),e.logXout(a)}))}};e.exports=a}),null);
__d("ServicesDurationUnit",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirror")({SECONDS:null,MINUTES:null,HOURS:null,DAYS:null,WEEKS:null,MONTHS:null,YEARS:null});e.exports=a}),null);
__d("ServicesTimeDurationSelector.react",["fbt","DateConsts","React","ServicesDurationUnit","XUISingleSelector.react","XUITextInput.react","isNumberLike"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("XUISingleSelector.react").Option,i={SECONDS:1,MINUTES:(a=b("DateConsts")).SEC_PER_MIN,HOURS:a.SEC_PER_HOUR,DAYS:a.SEC_PER_DAY,WEEKS:a.SEC_PER_WEEK,MONTHS:30*a.SEC_PER_DAY,YEARS:365*a.SEC_PER_DAY};c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;d=a.call(this,c)||this;d.onChange=function(){d.props.onChange(d.getScheduleInSecond())};d.onTextChange=function(a){__p&&__p();if(a.target instanceof HTMLInputElement){a=a.target.value;if(a===null||!d.props.allowZero&&a==="0")return;if(!b("isNumberLike")(a)&&a!=="")return;if(d.allowFloatInput()){var c=!(parseFloat(a)*100%1);if(!c)return;c=a}else c=a?String(parseInt(a,10)):null;d.setState({quantity:c!=null&&c!==""?c:null},d.onChange)}};d.onUnitChange=function(a){var b=d.state.quantity;d.allowFloatInput()&&(b=b!=null&&b!==""?String(parseInt(b,10))||null:null);d.setState({quantity:b,unit:a.value},d.onChange)};d.state=d.initState(c);return d}var d=c.prototype;d.UNSAFE_componentWillReceiveProps=function(a){this.props.value===null&&a.value!==null&&this.setState(this.initState(a))};d.initState=function(a){__p&&__p();var b,c=a.value,d=this.getUnits(),e=c;b=((b=this)!=null?(b=b.state)!=null?b.unit:b:b)||d[0];c!=null&&c>0?(d=d.slice().sort(function(a,b){return i[b]-i[a]}),d.some(function(a){if(c%i[a]===0){e=c/i[a];b=a;return!0}return!1}),e=String(e)):c===0&&a.allowZero?e="0":e=null;return{quantity:e,unit:b}};d.allowFloatInput=function(){return this.props.allowDecimals&&this.state.unit===b("ServicesDurationUnit").HOURS};d.getScheduleInSecond=function(){var a=this.state,b=a.quantity;a=a.unit;return b==null?null:Math.round(parseFloat(b)*i[a])};d.componentDidMount=function(){this.props.onChange(this.getScheduleInSecond())};d.getUnits=function(){var a=this.props.durationUnits||[b("ServicesDurationUnit").SECONDS,b("ServicesDurationUnit").MINUTES,b("ServicesDurationUnit").HOURS,b("ServicesDurationUnit").DAYS,b("ServicesDurationUnit").WEEKS,b("ServicesDurationUnit").MONTHS,b("ServicesDurationUnit").YEARS];return a.length>0?a:[b("ServicesDurationUnit").SECONDS]};d.getUnitLabels=function(a,c){__p&&__p();return a.map(function(a){__p&&__p();if(a===b("ServicesDurationUnit").SECONDS)return g._({"*":"seconds","_1":" second"},[g._plural(c)]);else if(a===b("ServicesDurationUnit").MINUTES)return g._({"*":"minutes","_1":" minute"},[g._plural(c)]);else if(a===b("ServicesDurationUnit").HOURS)return g._({"*":"hours","_1":" hour"},[g._plural(c)]);else if(a===b("ServicesDurationUnit").DAYS)return g._({"*":"days","_1":" day"},[g._plural(c)]);else if(a===b("ServicesDurationUnit").WEEKS)return g._({"*":"weeks","_1":" week"},[g._plural(c)]);else if(a===b("ServicesDurationUnit").MONTHS)return g._({"*":"months","_1":" month"},[g._plural(c)]);else if(a===b("ServicesDurationUnit").YEARS)return g._({"*":"years","_1":" year"},[g._plural(c)]);return""})};d.render=function(){var a=this.state.quantity,c=this.getUnits(),d=this.getUnitLabels(c,parseFloat(a)||0);return b("React").jsx("div",{className:this.props.className,children:g._("{The duration value input} {The duration unit selector}",[g._param("The duration value input",b("React").jsx(b("XUITextInput.react"),{maxLength:5,onBlur:this.props.onBlur,onChange:this.onTextChange,size:"7",value:a===null?"":a,xuiError:this.props.errorMsg})),g._param("The duration unit selector",b("React").jsx(b("XUISingleSelector.react"),{name:"unit",onChange:this.onUnitChange,value:this.state.unit,children:c.map(function(a,c){return b("React").jsx(h,{value:a,children:d[c]},c)})}))])})};return c}(b("React").Component);c.defaultProps={allowDecimals:!0,allowZero:!1};e.exports=c}),null);