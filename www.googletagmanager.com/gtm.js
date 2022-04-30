// Copyright 2012 Google Inc. All rights reserved.
(function(w, g) {
    w[g] = w[g] || {};
    w[g].e = function(s) {
        return eval(s);
    };
})(window, 'google_tag_manager');
(function() {

    var data = {
        "resource": {
            "version": "1331",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "OnetrustActiveGroups"
            }, {
                "function": "__u",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "sp_gaid"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return function(c){try{var h=[{name:\"EMAIL\",regex:\/[^\\\/]{4}(@|%40)(?!spotify-international\\.sheerid.\\.com)[^\\\/]{4}\/gi,group:\"\"},{name:\"SELF-EMAIL\",regex:\/[^\\\/]{4}(@|%40)(?=spotify-international\\.sheerid.\\.com)[^\\\/]{4}\/gi,group:\"\"},{name:\"TEL\",regex:\/((tel=)|(telephone=)|(phone=)|(mobile=)|(mob=)|(tel%C3%A9fono_10_d%C3%ADgitos=))[\\d\\+\\s][^\u0026\\\/\\?]+\/gi,group:\"$1\"},{name:\"NAME\",regex:\/((firstname=)|(lastname=)|(surname=)|(prenom=)|(nombre=)|(apellido=))[^\u0026\\\/\\?]+\/gi,group:\"$1\"},{name:\"PASSWORD\",\nregex:\/((password=)|(passwd=)|(pass=))[^\u0026\\\/\\?]+\/gi,group:\"$1\"},{name:\"ZIP\",regex:\/((postcode=)|(zipcode=)|(zip=))[^\u0026\\\/\\?]+\/gi,group:\"$1\"}],k=c.get(\"sendHitTask\"),e,b;c.set(\"sendHitTask\",function(d){e=c.get(\"hitPayload\");b=e.replace(\/(^\\?)\/,\"\").split(\"\\x26\").map(function(a){return a=a.split(\"\\x3d\"),this[a[0]]=a[1],this}.bind({}))[0];for(var f in b)h.forEach(function(a){var g=decodeURIComponent(b[f]);g.match(a.regex)\u0026\u0026(b[f]=encodeURIComponent(g.replace(a.regex,a.group+\"[REDACTED \"+a.name+\"]\")))});d.set(\"hitPayload\",\nObject.keys(b).map(function(a){return a+\"\\x3d\"+b[a]}).join(\"\\x26\"),!0);k(d)})}catch(d){}}})();"]
            }, {
                "function": "__k",
                "convert_case_to": 1,
                "vtp_decodeCookie": false,
                "vtp_name": "_ga"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var k=69;return function(d){var e=\"_\"+d.get(\"trackingId\")+\"_sendHitTask\",f=window[e]=window[e]||d.get(\"sendHitTask\");d.set(\"sendHitTask\",function(a){try{var l=a.get(\"hitPayload\"),b=a.get(\"hitPayload\"),c=\"\\x26cd\"+k;if(-1\u003Cb.indexOf(c+\"\\x3d\"))console.log(\"Google Analytics error: tried to send hit payload length in an already assigned Custom Dimension\");else{b+=c+\"\\x3d\";if(0\u003C", ["escape", ["macro", 5], 8, 16], ".indexOf(\"mobile-web-player\")){c=\"_ga\";var g=\"\/\",h=\".spotify.com\";document.cookie=c+\"\\x3d\"+(g?\n\"; path\\x3d\"+g:\"\")+(h?\"; domain\\x3d\"+h:\"\")+\";expires\\x3dThu, 01 Jan 1970 00:00:01 GMT\";b+=\"True\"}else b+=\"False\";a.set(\"hitPayload\",b,!0)}f(a)}catch(m){console.error(\"Error sending hit payload length to Google Analytics\"),a.set(\"hitPayload\",l,!0),f(a)}})}})();"]
            }, {
                "function": "__jsm",
                "convert_case_to": 1,
                "vtp_javascript": ["template", "(function(){var a=window.location.href.split(\"\/\");if(\"www\"==a[2].split(\".\")[0]){if(\"www.spotify.com\"===a[2]){a.splice(0,3);var b=a.splice(0,1).toString();b=b.substring(0,2)}else\"www.spotifypremium.jp\"===a[2]\u0026\u0026(b=\"jp\");return b}a=document.getElementsByTagName(\"body\")[0].getAttribute(\"class\");return a?(a=a.match(\/m-([\\w]{2})\/))\u0026\u00261\u003Ca.length\u0026\u00262==a[1].length?a[1].toLowerCase():\"\":\"\"})();"]
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "sp_trk"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "sp_ab"
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "forward_url",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "creation_flow",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "sp_t"
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "orderReference",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "loggedIn"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=navigator.doNotTrack||window.doNotTrack||navigator.msDoNotTrack;return!a||\"yes\"!=a\u0026\u0026\"1\"!=a?!1:!0})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "userCountry"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "successesInSession"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "abbaFlag"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "sp_adid"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "cookieNotice"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=new Date,c=-a.getTimezoneOffset(),d=0\u003C=c?\"+\":\"-\",b=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"0\":\"\")+a};return a.getFullYear()+\"-\"+b(a.getMonth()+1)+\"-\"+b(a.getDate())+\"T\"+b(a.getHours())+\":\"+b(a.getMinutes())+\":\"+b(a.getSeconds())+\".\"+b(a.getMilliseconds())+d+b(c\/60)+\":\"+b(c%60)})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){if(window.location.hash)return window.location.hash})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "optimizeRedirectParams"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "excludeFromOptimize"
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "experimentId"
            }, {
                "function": "__v",
                "convert_null_to": "none",
                "convert_undefined_to": "none",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "none",
                "vtp_name": "variantId"
            }, {
                "function": "__k",
                "vtp_decodeCookie": true,
                "vtp_name": "sp_last_utm"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 28], 8, 16], ";if(a\u0026\u0026(a=JSON.parse(a),a.utm_campaign))return a.utm_campaign})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 28], 8, 16], ";if(a\u0026\u0026(a=JSON.parse(a),a.utm_source))return a.utm_source})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 28], 8, 16], ";if(a\u0026\u0026(a=JSON.parse(a),a.utm_medium))return a.utm_medium})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 28], 8, 16], ";if(a\u0026\u0026(a=JSON.parse(a),a.utm_content))return a.utm_content})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 28], 8, 16], ";if(a\u0026\u0026(a=JSON.parse(a),a.utm_term))return a.utm_term})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return window.navigator.userAgent})();"]
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "ref",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "language"
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 37],
                "vtp_defaultValue": "UA-5784146-31",
                "vtp_map": ["list", ["map", "key", "www.spotify.com", "value", "UA-5784146-31"],
                    ["map", "key", "play.spotify.com", "value", "UA-5784146-31"],
                    ["map", "key", "open.spotify.com", "value", "UA-5784146-31"],
                    ["map", "key", "embed.spotify.com", "value", "UA-5784146-31"],
                    ["map", "key", "support.spotify.com", "value", "UA-5784146-31"],
                    ["map", "key", "www-testing.spotify.net", "value", "UA-5784146-61"]
                ]
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_useEcommerceDataLayer": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "anonymizeIp", "value", "true"],
                    ["map", "fieldName", "userId", "value", ["macro", 3]],
                    ["map", "fieldName", "customTask", "value", ["macro", 4]],
                    ["map", "fieldName", "customTask", "value", ["macro", 6]]
                ],
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": true,
                "vtp_dimension": ["list", ["map", "index", "1", "dimension", ["macro", 7]],
                    ["map", "index", "4", "dimension", ["macro", 8]],
                    ["map", "index", "7", "dimension", ["macro", 9]],
                    ["map", "index", "25", "dimension", ["macro", 10]],
                    ["map", "index", "2", "dimension", ["macro", 11]],
                    ["map", "index", "26", "dimension", ["macro", 12]],
                    ["map", "index", "27", "dimension", ["macro", 13]],
                    ["map", "index", "9", "dimension", ["macro", 14]],
                    ["map", "index", "30", "dimension", ["macro", 15]],
                    ["map", "index", "31", "dimension", ["macro", 16]],
                    ["map", "index", "32", "dimension", ["macro", 3]],
                    ["map", "index", "34", "dimension", ["macro", 17]],
                    ["map", "index", "40", "dimension", ["macro", 18]],
                    ["map", "index", "41", "dimension", ["macro", 19]],
                    ["map", "index", "10", "dimension", ["macro", 20]],
                    ["map", "index", "48", "dimension", ["macro", 21]],
                    ["map", "index", "49", "dimension", ["macro", 22]],
                    ["map", "index", "35", "dimension", ["macro", 23]],
                    ["map", "index", "36", "dimension", ["macro", 24]],
                    ["map", "index", "51", "dimension", ["macro", 25]],
                    ["map", "index", "52", "dimension", ["template", ["macro", 26], " - ", ["macro", 27]]],
                    ["map", "index", "53", "dimension", ["macro", 29]],
                    ["map", "index", "54", "dimension", ["macro", 30]],
                    ["map", "index", "55", "dimension", ["macro", 31]],
                    ["map", "index", "56", "dimension", ["macro", 32]],
                    ["map", "index", "57", "dimension", ["macro", 33]],
                    ["map", "index", "29", "dimension", ["macro", 34]],
                    ["map", "index", "64", "dimension", ["macro", 35]],
                    ["map", "index", "66", "dimension", ["macro", 36]],
                    ["map", "index", "14", "dimension", ["macro", 5]]
                ],
                "vtp_enableEcommerce": true,
                "vtp_trackingId": ["macro", 38],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_ecommerceIsEnabled": true,
                "vtp_enableGA4Schema": false
            }, {
                "function": "__r"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "pageCategory"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "product"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 7], 8, 16], ".match(\"at|be|bg|hr|cy|cz|dk|ee|fi|fr|de|gr|hu|it|lv|lt|lu|mt|nl|pl|pt|ro|sk|si|ie|es|se|uk|no|is|li\")?\"1\":\"0\"})();"]
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__c",
                "vtp_value": "nvo5k"
            }, {
                "function": "__aev",
                "vtp_setDefaultValue": false,
                "vtp_stripWww": false,
                "vtp_varType": "URL",
                "vtp_component": "HOST"
            }, {
                "function": "__v",
                "vtp_name": "gtm.triggers",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ""
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__jsm",
                "convert_case_to": 1,
                "vtp_javascript": ["template", "(function(){if(document.location.pathname.split(\"\/\").includes(\"chase\",3))return document.location.pathname.split(\"\/\")[3]})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){function l(){g||(g=!0,window.CS_CONF\u0026\u0026(CS_CONF.integrations=CS_CONF.integrations||[],CS_CONF.integrations.push(\"Google Analytics - v\"+m)))}function h(b){if(b)d=b;else{d=Math.random()+\"_\"+Date.now();b=0;for(var a=document.domain,e=a.split(\".\"),f=\"_cs_tld\"+(new Date).getTime();b\u003Ce.length-1\u0026\u0026-1==document.cookie.indexOf(f+\"\\x3d\"+f);)a=e.slice(-1-++b).join(\".\"),document.cookie=f+\"\\x3d\"+f+\";domain\\x3d\"+a+\";SameSite\\x3dNone;Secure\";document.cookie=f+\"\\x3d;expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;domain\\x3d\"+\na+\";\";b=a;a=new Date;e=a.getTime();e+=18E5;a.setTime(e);document.cookie=k+\"\\x3d\"+d+\"; expires\\x3d\"+a.toUTCString()+\";path\\x3d\/;domain\\x3d\"+b+\";SameSite\\x3dNone;Secure\"}_uxa.push([\"trackDynamicVariable\",{key:\"csMatchingKey\",value:d}])}var m=\"1.13.0\",g=!1;window._uxa=window._uxa||[];_uxa.push([\"afterPageView\",l]);var d=null,k=\"_cs_mk_ga\",c=\"; \"+document.cookie;c\u0026\u0026(c=c.split(\"; \"+k+\"\\x3d\"),1==c.length?h():(c=c[1].split(\";\")[0],h(c)));return d})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventCategory"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventAction"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventLabel"
            }, {
                "function": "__v",
                "convert_undefined_to": "false",
                "convert_true_to": "true",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "false",
                "vtp_name": "isInOptimizeExperiment"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 37],
                "vtp_defaultValue": "444446",
                "vtp_map": ["list", ["map", "key", "www.spotify.com", "value", "444446"],
                    ["map", "key", "www.spotifypremium.co", "value", "848736"],
                    ["map", "key", "spotifypremium.co", "value", "848736"]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "200",
                "vtp_name": "statusCode"
            }, {
                "function": "__c",
                "vtp_value": "15654041"
            }, {
                "function": "__c",
                "vtp_value": "4721227"
            }, {
                "function": "__c",
                "vtp_value": "nz9p8"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 44],
                "vtp_map": ["list", ["map", "key", "\/us\/student\/", "value", "stude0"],
                    ["map", "key", "\/uk\/student\/", "value", "stude0"],
                    ["map", "key", "\/ca\/student\/", "value", "stude0"],
                    ["map", "key", "\/br\/student\/", "value", "stude0"],
                    ["map", "key", "\/de\/student\/", "value", "stude0"],
                    ["map", "key", "\/mx\/student\/", "value", "stude0"],
                    ["map", "key", "\/fr\/student\/", "value", "stude0"],
                    ["map", "key", "\/au\/student\/", "value", "stude0"],
                    ["map", "key", "\/nz\/student\/", "value", "stude0"],
                    ["map", "key", "\/es\/student\/", "value", "stude0"],
                    ["map", "key", "\/it\/student\/", "value", "stude0"],
                    ["map", "key", "\/nl\/student\/", "value", "stude0"],
                    ["map", "key", "\/pl\/student\/", "value", "stude0"],
                    ["map", "key", "\/tr\/student\/", "value", "stude0"],
                    ["map", "key", "\/co\/student\/", "value", "stude0"],
                    ["map", "key", "\/cl\/student\/", "value", "stude0"],
                    ["map", "key", "\/cl\/student\/", "value", "stude0"],
                    ["map", "key", "\/ec\/student\/", "value", "stude0"],
                    ["map", "key", "\/ie\/student\/", "value", "stude0"],
                    ["map", "key", "\/ca-fr\/student\/", "value", "stude0"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 44],
                "vtp_map": ["list", ["map", "key", "\/us\/student\/", "value", "spoti003"],
                    ["map", "key", "\/uk\/student\/", "value", "spoti003"],
                    ["map", "key", "\/ca\/student\/", "value", "spoti003"],
                    ["map", "key", "\/br\/student\/", "value", "spoti003"],
                    ["map", "key", "\/de\/student\/", "value", "spoti003"],
                    ["map", "key", "\/mx\/student\/", "value", "spoti003"],
                    ["map", "key", "\/fr\/student\/", "value", "spoti003"],
                    ["map", "key", "\/au\/student\/", "value", "spoti003"],
                    ["map", "key", "\/nz\/student\/", "value", "spoti003"],
                    ["map", "key", "\/es\/student\/", "value", "spoti003"],
                    ["map", "key", "\/it\/student\/", "value", "spoti003"],
                    ["map", "key", "\/nl\/student\/", "value", "spoti003"],
                    ["map", "key", "\/pl\/student\/", "value", "spoti003"],
                    ["map", "key", "\/tr\/student\/", "value", "spoti003"],
                    ["map", "key", "\/co\/student\/", "value", "spoti003"],
                    ["map", "key", "\/cl\/student\/", "value", "spoti003"],
                    ["map", "key", "\/dk\/student\/", "value", "spoti003"],
                    ["map", "key", "\/ec\/student\/", "value", "spoti003"],
                    ["map", "key", "\/ie\/student\/", "value", "spoti003"]
                ]
            }, {
                "function": "__c",
                "vtp_value": "spotify.com, spotifyartists.com, sheerid.com, spotifyforbrands.com, spotifyjobs.com, spotifypremium.jp"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "true",
                "vtp_name": "eventNonInteractive"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventValue"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "ppid"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=window.location.href.split(\/[?#]\/)[0];return a})();"]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 67],
                "vtp_map": ["list", ["map", "key", "https:\/\/www.spotifypremium.co\/th-th.html", "value", "\/th-th\/premium-localized\/"],
                    ["map", "key", "https:\/\/www.spotifypremium.co\/th-en.html", "value", "\/th-en\/premium-localized\/"],
                    ["map", "key", "https:\/\/www.spotifypremium.jp\/", "value", "\/jp\/premium-localized\/"],
                    ["map", "key", "https:\/\/spotifypremium.jp\/", "value", "\/jp\/premium-localized\/"],
                    ["map", "key", "https:\/\/www.spotifypremium.co\/th-th", "value", "\/th-th\/premium-localized\/"],
                    ["map", "key", "https:\/\/www.spotifypremium.co\/th-en", "value", "\/th-en\/premium-localized\/"],
                    ["map", "key", "https:\/\/www.spotifypremium.co\/ph-en.html", "value", "\/ph-en\/premium-localized\/"],
                    ["map", "key", "https:\/\/www.spotifypremium.co\/ph-en", "value", "\/ph-en\/premium-localized\/"]
                ]
            }, {
                "function": "__c",
                "vtp_value": "nz9p8"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.products"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){", ["escape", ["macro", 70], 8, 16], "\u0026\u0026(m=\"true\");return m})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.revenue"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.currencyCode"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__aev",
                "vtp_setDefaultValue": false,
                "vtp_varType": "ID"
            }, {
                "function": "__aev",
                "vtp_setDefaultValue": false,
                "vtp_varType": "URL",
                "vtp_component": "URL"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var b={keyName:\"_transaction_ids\",cookieExpiresDays:365},n=function(a){if(window.Storage)return window.localStorage.getItem(a);var d=\"; \"+document.cookie;a=d.split(\"; \"+a+\"\\x3d\");if(2===a.length)return a.pop().split(\";\").shift()},e=\"_ga_originalSendHitTask\";return function(a){window[e]=window[e]||a.get(\"sendHitTask\");a.set(\"sendHitTask\",function(a){var d=a,h=window[e],k=!0;try{if(\"object\"===typeof b\u0026\u0026b.hasOwnProperty(\"keyName\")\u0026\u0026b.hasOwnProperty(\"cookieExpiresDays\")\u0026\u0026\"undefined\"!==typeof a.get(\"\\x26ti\")){var f=\na.get(\"\\x26ti\");var c=JSON.parse(n(b.keyName)||\"[]\");if(-1\u003Cc.indexOf(f)\u0026\u0026-1===[\"transaction\",\"item\"].indexOf(a.get(\"hitType\")))k=!1;else if(-1===c.indexOf(f)){c.push(f);var l=b.keyName,m=JSON.stringify(c),p=b.cookieExpiresDays;if(window.Storage)window.localStorage.setItem(l,m);else{var g=new Date;g.setDate(g.getDate()+p);document.cookie=l+\"\\x3d\"+m+\";expires\\x3d\"+g.toUTCString()}}}k\u0026\u0026(dataLayer.push({event:\"purchase_success\"}),h(a))}catch(q){h(d)}})}})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){if(window.performance\u0026\u0026window.performance.getEntriesByType)for(var a=performance.getEntriesByType(\"navigation\"),b=0;b\u003Ca.length;)return Math.round(a[b].domContentLoadedEventEnd)})();"]
            }, {
                "function": "__jsm",
                "convert_case_to": 1,
                "vtp_javascript": ["template", "(function(){x=document.querySelectorAll(\".muted\")[0].textContent.split(\" \")[6];return x.substring(0,x.length-1)})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 28], 8, 16], ";if(a\u0026\u0026(a=JSON.parse(a),a.utm_content))return a.utm_content})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "market"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "nonIdleTimeElapsed"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 84], 8, 16], "\/1E3})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=\"", ["escape", ["macro", 5], 7], "\";a=a.substring(a.length-2,a.length);return parseInt(a)})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "optimizeLoadedWithinTimeout"
            }, {
                "function": "__jsm",
                "convert_case_to": 1,
                "vtp_javascript": ["template", "(function(){var a=window.location.host+\"\/\"+window.location.pathname.split(\"\/\").slice(2).join(\"\/\");return a})();"]
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "qualResponse"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 88],
                "vtp_map": ["list", ["map", "key", "www.spotify.com\/purchase\/success\/trial_1_month\/", "value", "spoti0"],
                    ["map", "key", "www.spotify.com\/student\/success\/student_hulu_showtime_trial_1_month\/", "value", "spoti000"],
                    ["map", "key", "www.spotify.com\/purchase\/success\/student_trial_1_month\/", "value", "spoti00"],
                    ["map", "key", "www.spotify.com\/purchase\/success\/family_trial_1_month\/", "value", "spoti002"],
                    ["map", "key", "www.spotify.com\/purchase\/success\/duo_trial_1_month\/", "value", "spoti001"]
                ]
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 88],
                "vtp_map": ["list", ["map", "key", "www.spotify.com\/purchase\/success\/duo_trial_1_month\/", "value", "1monthfree_duo_subscription_submission"],
                    ["map", "key", "www.spotify.com\/purchase\/success\/family_trial_1_month\/", "value", "1monthfree_family_subscription"],
                    ["map", "key", "www.spotify.com\/purchase\/success\/duo\/", "value", "duo_subscription_submission"],
                    ["map", "key", "www.spotify.com\/purchase\/success\/trial_1_month\/", "value", "1monthfree_subscription_submission"],
                    ["map", "key", "www.spotify.com\/purchase\/success\/student_trial_1_month\/", "value", "1monthfree_student_subscription_submission"],
                    ["map", "key", "www.spotify.com\/purchase\/success\/family\/", "value", "family_subscription_submission"],
                    ["map", "key", "www.spotify.com\/purchase\/success\/comeback\/", "value", "winback_subscription_submission"],
                    ["map", "key", "www.spotify.com\/purchase\/success\/premium\/", "value", "premium_subscription_submission"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 7],
                "vtp_defaultValue": "student_subscription",
                "vtp_map": ["list", ["map", "key", "us", "value", "1monthfree_US_student_subscription2"]]
            }, {
                "function": "__v",
                "vtp_name": "gtm.errorMessage",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.errorLineNumber",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.errorUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.impressions"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 7],
                "vtp_map": ["list", ["map", "key", "us", "value", "t2_2acrmfhv"],
                    ["map", "key", "uk", "value", "t2_5059sant"],
                    ["map", "key", "de", "value", "t2_51lbh87i"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 7],
                "vtp_map": ["list", ["map", "key", "us", "value", "o0dij"],
                    ["map", "key", "uk", "value", "o0fpx"],
                    ["map", "key", "fr", "value", "o2qpi"],
                    ["map", "key", "es", "value", "o3y4n"],
                    ["map", "key", "de", "value", "o0k16"],
                    ["map", "key", "ca-en", "value", "o0jws"],
                    ["map", "key", "au", "value", "o3oaq"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 7],
                "vtp_map": ["list", ["map", "key", "au", "value", "spoti008"],
                    ["map", "key", "ca-en", "value", "spoti007"],
                    ["map", "key", "ca-fr", "value", "spoti006"],
                    ["map", "key", "de", "value", "spoti005"],
                    ["map", "key", "es", "value", "spoti004"],
                    ["map", "key", "fr", "value", "spoti003"],
                    ["map", "key", "it", "value", "spoti002"],
                    ["map", "key", "tr", "value", "spoti001"],
                    ["map", "key", "uk", "value", "spoti000"],
                    ["map", "key", "us", "value", "spoti00"]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "experiments"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.promoView.promotions"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return Array.isArray(", ["escape", ["macro", 103], 8, 16], ")?(promotions=", ["escape", ["macro", 103], 8, 16], ",promoname=promotions[0].name):\"\"})();"]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 7],
                "vtp_map": ["list", ["map", "key", "pl", "value", "spoti00c"],
                    ["map", "key", "tr", "value", "spoti00d"]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "currentPlan"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "accountAgeDays"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "daysLeft"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "isRecurring"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "isSubAccount"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "isTrialUser"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 7],
                "vtp_map": ["list", ["map", "key", "uk", "value", "o0fpx"],
                    ["map", "key", "us", "value", "o0dij"]
                ]
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "clicked-offer",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "current-plan"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "error"
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollThreshold",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 83],
                "vtp_map": ["list", ["map", "key", "ru-ru", "value", "o624n"],
                    ["map", "key", "us", "value", "o0dij"],
                    ["map", "key", "ca-en", "value", "o0jws"],
                    ["map", "key", "au", "value", "o3oaq"],
                    ["map", "key", "uk", "value", "o0fpx"],
                    ["map", "key", "de", "value", "o0k16"],
                    ["map", "key", "fr", "value", "o2qpi"],
                    ["map", "key", "es", "value", "o3y4n"],
                    ["map", "key", "mx", "value", "o0fpw"],
                    ["map", "key", "co", "value", "o4tu1"],
                    ["map", "key", "ar", "value", "o4tu2"],
                    ["map", "key", "in-en", "value", "o1zcg"],
                    ["map", "key", "id", "value", "o04nx"],
                    ["map", "key", "jp", "value", "o3mrb"],
                    ["map", "key", "ph-en", "value", "o0ddl"],
                    ["map", "key", "th-en", "value", "o04o0"],
                    ["map", "key", "sa-en", "value", "o4tbw"],
                    ["map", "key", "ca-fr", "value", "o0jws"],
                    ["map", "key", "in-hi", "value", "o1zcg"],
                    ["map", "key", "ph-tl", "value", "o0ddl"],
                    ["map", "key", "th-th", "value", "o04o0"],
                    ["map", "key", "sa-ar", "value", "o4tbw"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 83],
                "vtp_map": ["list", ["map", "key", "dk-en", "value", "072e7749-abc6-457d-b69d-6eb6749d0df7"],
                    ["map", "key", "us", "value", "fff7f198-e6aa-4833-b900-92d3854473b2"],
                    ["map", "key", "de", "value", "072e7749-abc6-457d-b69d-6eb6749d0df7"],
                    ["map", "key", "uk", "value", "38d8444a-feca-4a00-8ce8-24c20d195d67"],
                    ["map", "key", "sa", "value", "072e7749-abc6-457d-b69d-6eb6749d0df7"],
                    ["map", "key", "eg", "value", "072e7749-abc6-457d-b69d-6eb6749d0df7"],
                    ["map", "key", "ca", "value", "b6325cc9-e6bb-42e0-807d-bc81ff670975"],
                    ["map", "key", "dk-da", "value", "072e7749-abc6-457d-b69d-6eb6749d0df7"],
                    ["map", "key", "sa-en", "value", "072e7749-abc6-457d-b69d-6eb6749d0df7"],
                    ["map", "key", "sa-ar", "value", "072e7749-abc6-457d-b69d-6eb6749d0df7"],
                    ["map", "key", "eg-en", "value", "072e7749-abc6-457d-b69d-6eb6749d0df7"],
                    ["map", "key", "eg-ar", "value", "072e7749-abc6-457d-b69d-6eb6749d0df7"],
                    ["map", "key", "ca-en", "value", "b6325cc9-e6bb-42e0-807d-bc81ff670975"],
                    ["map", "key", "ca-fr", "value", "b6325cc9-e6bb-42e0-807d-bc81ff670975"],
                    ["map", "key", "in-en", "value", "3039cd0a-b192-48da-8998-1ba48c75028f"],
                    ["map", "key", "in-hi", "value", "3039cd0a-b192-48da-8998-1ba48c75028f"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 83],
                "vtp_map": ["list", ["map", "key", "us", "value", "2617608197512"],
                    ["map", "key", "uk", "value", "2613898645044"],
                    ["map", "key", "it", "value", "2613215288319"],
                    ["map", "key", "fr", "value", "2613215288319"],
                    ["map", "key", "es", "value", "2613215288319"],
                    ["map", "key", "de", "value", "2613215288319"],
                    ["map", "key", "ca", "value", "2612810699919"],
                    ["map", "key", "au", "value", "2613763147290"],
                    ["map", "key", "ca-en", "value", "2612810699919"],
                    ["map", "key", "ca-fr", "value", "2612810699919"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 83],
                "vtp_map": ["list", ["map", "key", "uk", "value", "t2_5059sant"],
                    ["map", "key", "de", "value", "t2_51lbh87i"]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.promoView.promotions"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return Array.isArray(", ["escape", ["macro", 121], 8, 16], ")?(promotions=", ["escape", ["macro", 121], 8, 16], ",promoname=promotions[0].name):\"\"})();"]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 83],
                "vtp_map": ["list", ["map", "key", "au", "value", "C2RH55KAPG3T0TSIFP8G"],
                    ["map", "key", "us", "value", "BRFSQC0UB1J677QTT9E0"],
                    ["map", "key", "uk", "value", "C2EKV9AQV140ORDIO0AG"],
                    ["map", "key", "de", "value", "C2EL0TFMU8Q03RAJ1DEG"],
                    ["map", "key", "eg-en", "value", "C2EL1G7MU8Q03RAJ1DHG"],
                    ["map", "key", "ca-en", "value", "C2SJ8TJMHA6F7R4GUBR0"],
                    ["map", "key", "ca-fr", "value", "C2SJAHBMHA6F7R4GUC00"]
                ]
            }, {
                "function": "__jsm",
                "convert_case_to": 1,
                "vtp_javascript": ["template", "(function(){var a=window.getComputedStyle(document.querySelector(\"#plans article div:nth-child(4) div:first-child\"),\":before\").content;return a})();"]
            }, {
                "function": "__jsm",
                "convert_null_to": "not Premium",
                "convert_undefined_to": "not Premium",
                "vtp_javascript": ["template", "(function(){var a=document.querySelector(\"#plans article div:nth-child(4) div:first-child h3\").innerText;return a})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "translationLanguage"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "translationService"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 44],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "(.*)\\\/account\\\/overview\\\/(.*)", "value", "Cancellation Step 1"],
                    ["map", "key", "(.*)\\\/account\\\/subscription\/change\\\/(.*)", "value", "Cancellation Step 2"],
                    ["map", "key", "(.*)\\\/account\\\/cancel\\\/$", "value", "Cancellation Step 3"],
                    ["map", "key", "(.*)\\\/account\\\/cancel\\\/plans\\\/(.*)", "value", "Cancellation Step 4"],
                    ["map", "key", "(.*)\\\/account\\\/cancel\\\/benefits\\\/(.*)", "value", "Cancellation Step 5"]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.promoClick.promotions"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.checkout.products"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.checkout.actionField.option"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.formattedPrice"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.add.products"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "product"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 26],
                "vtp_defaultValue": "false",
                "vtp_map": ["list", ["map", "key", "Cuv6S5n-Q4CfxhH7lrK2eA", "value", "true"]]
            }, {
                "function": "__jsm",
                "convert_case_to": 1,
                "vtp_javascript": ["template", "(function(){return navigator.language||navigator.userLanguage})();"]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 44],
                "vtp_map": ["list", ["map", "key", "\/jp\/purchase\/success\/trial_3_months\/", "value", "150"],
                    ["map", "key", "\/jp\/purchase\/success\/student_trial_1_month\/", "value", "151"],
                    ["map", "key", "\/jp\/purchase\/success\/family_trial_1_month\/", "value", "152"],
                    ["map", "key", "\/jp\/purchase\/success\/duo_trial_1_month\/", "value", "153"],
                    ["map", "key", "\/jp\/purchase\/success\/payg_12_month\/", "value", "154"]
                ]
            }, {
                "function": "__t"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "gtm.element.dataset.eventName"
            }, {
                "function": "__jsm",
                "convert_null_to": "s00",
                "convert_undefined_to": "s00",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 1], 8, 16], ";0\u003C=a.indexOf(\",s00,f00,m00,t00,\")\u00260\u003Ea.indexOf(\"i00\")\u0026\u0026(a=a.concat(\"i00,tp1\"));return a})();"]
            }, {
                "function": "__k",
                "convert_case_to": 1,
                "vtp_decodeCookie": true,
                "vtp_name": "sp_consent"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "ecommerce.impressions.length"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.impressions"
            }, {
                "function": "__k",
                "vtp_decodeCookie": true,
                "vtp_name": "sp_tpc"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "optanonAction"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 7],
                "vtp_map": ["list", ["map", "key", "uk", "value", "2613898645044"],
                    ["map", "key", "us", "value", "2617608197512"]
                ]
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "storefront-error",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-5784146-87",
                "vtp_transportUrl": "https:\/\/gmarketing-external-mightyhive.ew.r.appspot.com",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": false
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return window.localStorage?window.localStorage.getItem(\"change_plan\"):\"False\"})();"]
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__ctv"
            }, {
                "function": "__cid"
            }],
            "tags": [{
                "function": "__ua",
                "priority": 999,
                "metadata": ["map", "name", "Google Analytics Standard Pageview"],
                "once_per_load": true,
                "vtp_overrideGaSettings": true,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 39],
                "vtp_dimension": ["list", ["map", "index", "68", "dimension", ["macro", 50]]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 1128
            }, {
                "function": "__ua",
                "priority": 999,
                "metadata": ["map", "name", "UA Pageview -- External Premium Pages"],
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "page", "value", ["macro", 68]]],
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 39],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 1254
            }, {
                "function": "__ua",
                "priority": 999,
                "metadata": ["map", "name", "UA Pageview -- SUCCESS"],
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "customTask", "value", ["macro", 79]]],
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 39],
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 1384
            }, {
                "function": "__html",
                "priority": 100,
                "metadata": ["map", "name", "Script -- Push Experiment Info to DL"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Efunction gtag(){dataLayer.push(arguments)}gtag(\"event\",\"optimize.callback\",{callback:function(a,b){return window.dataLayer.push({event:\"optimizeBucketEvent\",isInOptimizeExperiment:!0,experimentId:b,variantId:a})}});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1363
            }, {
                "function": "__html",
                "priority": 10,
                "metadata": ["map", "name", "Spotify Advertising Pixel"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript id=\"cidsyncjs\" data-gtmsrc=\"https:\/\/pixel-static.spotify.com\/sync.min.js\" async type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n    \u003Cimg id=\"cidmgmt\" src=\"https:\/\/pixel.spotify.com\/v1\/sync?nojs=1\" style=\"display: none;\" width=\"0\" height=\"0\"\u003E\n\u003C\/noscript\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1288
            }, {
                "function": "__pntr",
                "priority": 2,
                "metadata": ["map", "name", "Pinterest - All Pages"],
                "once_per_load": true,
                "vtp_tagId": "2613216299153",
                "vtp_aem_enabled": "no",
                "vtp_eventName": "",
                "vtp_md_scraping_enabled": true,
                "tag_id": 1420
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "Google Adwords MCC - Registration"],
                "vtp_enableConversionLinker": true,
                "vtp_conversionValue": "0",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "948779824",
                "vtp_conversionLabel": "DKB0CIC5hAcQsPa0xAM",
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 40
            }, {
                "function": "__ua",
                "metadata": ["map", "name", "UA Event -- registration complete"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "registration",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": "complete",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 307
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "UM -- Registration -- Floodlight"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_groupTag": "regis0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "regis0",
                "vtp_ordinalType": "STANDARD",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 476
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "Google AdWords MCC - 3-for-X receipt"],
                "vtp_enableConversionLinker": true,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "948779824",
                "vtp_conversionLabel": "6YM5CLiU_AcQsPa0xAM",
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 490
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "Google AdWords MCC - 30dt receipt"],
                "vtp_enableConversionLinker": true,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "948779824",
                "vtp_conversionLabel": "54d-CPi5hAcQsPa0xAM",
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 491
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "Google AdWords MCC - Premium receipt"],
                "vtp_enableConversionLinker": true,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "948779824",
                "vtp_conversionLabel": "EoGJCPC6hAcQsPa0xAM",
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 492
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "Google AdWords MCC - Student Premium receipt"],
                "vtp_enableConversionLinker": true,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "948779824",
                "vtp_conversionLabel": "zsWWCOjV1wcQsPa0xAM",
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 493
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "Google AdWords MCC - Family Plan receipt"],
                "vtp_enableConversionLinker": true,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "948779824",
                "vtp_conversionLabel": "eqG9CNDH8FcQsPa0xAM",
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 494
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "Google AdWords GDN - Subscriptions All event"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "987666141",
                "vtp_conversionLabel": "pU2oCI-GyFwQ3a361gM",
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 519
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "Google AdWords GDN - Subscriptions All receipt"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "987666141",
                "vtp_conversionLabel": "JD8xCPiDyFwQ3a361gM",
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 520
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "Google AdWords MCC - 2-for-X receipt"],
                "vtp_enableConversionLinker": true,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "948779824",
                "vtp_conversionLabel": "MUgcCM_191wQsPa0xAM",
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 533
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "Google AdWords MCC - 3-for-1 Winback receipt"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "948779824",
                "vtp_conversionLabel": "xUZSCPDCh2IQsPa0xAM",
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 578
            }, {
                "function": "__cvt_154771_1782",
                "metadata": ["map", "name", "Facebook -- PM - USD - Master Pixel"],
                "once_per_load": true,
                "vtp_disablePushState": false,
                "vtp_dpoCountry": "0",
                "vtp_pixelId": "1483047915331997",
                "vtp_standardEventName": "PageView",
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": true,
                "vtp_eventName": "standard",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "vtp_dpoState": "0",
                "tag_id": 647
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "Spotify - DCM UID Collection AllPages"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u2", "value", ["macro", 12]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "uidfq0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti0",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 674
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "Google AdWords GDN - Subs_Family"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "987666141",
                "vtp_conversionLabel": "uD3PCNHI1moQ3a361gM",
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 680
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "Google AdWords GDN - Subs_Premium"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "987666141",
                "vtp_conversionLabel": "7kpeCNe66moQ3a361gM",
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 681
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "Google AdWords GDN - Subs_30dt"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "987666141",
                "vtp_conversionLabel": "YZEdCLic72oQ3a361gM",
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 682
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "Google AdWords GDN - Subs_Student"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "987666141",
                "vtp_conversionLabel": "2ORnCPid72oQ3a361gM",
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 683
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "Google AdWords GDN - Subs_Intro"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "987666141",
                "vtp_conversionLabel": "dV2yCKKe72oQ3a361gM",
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 684
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "Google AdWords GDN - Subs_Headspace"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "987666141",
                "vtp_conversionLabel": "knb9CLLqtGsQ3a361gM",
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 706
            }, {
                "function": "__twitter_website_tag",
                "metadata": ["map", "name", "Twitter Universal Website Tag - SpotifyJP"],
                "once_per_load": true,
                "vtp_event_type": "Purchase",
                "vtp_twitter_pixel_id": "nvo5k",
                "tag_id": 708
            }, {
                "function": "__twitter_website_tag",
                "metadata": ["map", "name", "Twitter - SpotifyJP - New Universal Tag - All Pages"],
                "once_per_event": true,
                "vtp_event_type": "PageView",
                "vtp_twitter_pixel_id": ["macro", 45],
                "tag_id": 710
            }, {
                "function": "__ua",
                "metadata": ["map", "name", "UA Event – Outbound Link Click"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Outbound clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": ["macro", 25],
                "vtp_eventLabel": ["macro", 48],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 713
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "Google AdWords GDN - Subs_Prepaid"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "987666141",
                "vtp_conversionLabel": "YKkHCJiN-WsQ3a361gM",
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 734
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "Google AdWords GDN - Subs_PAYG"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "987666141",
                "vtp_conversionLabel": "FcE-CJX0kWwQ3a361gM",
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 735
            }, {
                "function": "__ua",
                "metadata": ["map", "name", "UA Event -- GAEventMorpheus"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["macro", 51],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": ["macro", 52],
                "vtp_eventLabel": ["macro", 53],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 38],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 1146
            }, {
                "function": "__hjtc",
                "metadata": ["map", "name", "Hotjar | Optimize Only"],
                "once_per_load": true,
                "vtp_hotjar_site_id": ["macro", 55],
                "tag_id": 1158
            }, {
                "function": "__ua",
                "metadata": ["map", "name", "UA Event -- Error"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "error",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": "pageview",
                "vtp_eventLabel": ["macro", 56],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 1162
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "Student Premium Floodlight Tag"],
                "once_per_load": true,
                "vtp_groupTag": "huluc0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "hulup0",
                "vtp_ordinalType": "STANDARD",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1178
            }, {
                "function": "__csm",
                "metadata": ["map", "name", "comScore Tag for AdSales"],
                "once_per_load": true,
                "vtp_clientId": ["macro", 57],
                "tag_id": 1179
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_Hulu_Landing_Page"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "huluc0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "landi0",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1180
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_student_subscription_submission"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "submi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti000",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1182
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_winback_subscription_submission"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "submi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti004",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1183
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_premium_subscription_submission"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "submi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti003",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1184
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_family_subscription_submission"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "submi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti002",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1185
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_60DT_subscription_submission"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "submi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti001",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1186
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_all_subs_subscription_submission"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "submi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti0",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1188
            }, {
                "function": "__ua",
                "metadata": ["map", "name", "UA Event -- GAEventOrbit"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["macro", 51],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": ["macro", 52],
                "vtp_eventLabel": ["macro", 53],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 38],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 1189
            }, {
                "function": "__twitter_website_tag",
                "metadata": ["map", "name", "Twitter Unified Tracking"],
                "once_per_load": true,
                "vtp_event_type": "PageView",
                "vtp_twitter_pixel_id": ["macro", 59],
                "tag_id": 1193
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "um_student_landing_page"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": ["macro", 60],
                "vtp_useImageTag": false,
                "vtp_activityTag": ["macro", 61],
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1194
            }, {
                "function": "__cvt_154771_1782",
                "metadata": ["map", "name", "Dentsu -- JP Info - Facebook"],
                "once_per_event": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": "618725568309316",
                "vtp_standardEventName": "PageView",
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 1201
            }, {
                "function": "__twitter_website_tag",
                "metadata": ["map", "name", "Dentsu -- JP Info -- Twitter"],
                "once_per_event": true,
                "vtp_event_type": "PageView",
                "vtp_twitter_pixel_id": "ny5a0",
                "tag_id": 1203
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_intro_subscription_submission"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "intro0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1211
            }, {
                "function": "__img",
                "metadata": ["map", "name", "holiday_UM_campaignsubscriptionconfirmation"],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "\/\/magnetic.t.domdex.com\/49876\/pix.gif?t=c\u0026for=Spotify",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 40],
                "tag_id": 1217
            }, {
                "function": "__gclidw",
                "metadata": ["map", "name", "Conversion Linker"],
                "once_per_load": true,
                "vtp_enableCrossDomain": true,
                "vtp_acceptIncoming": true,
                "vtp_linkerDomains": ["macro", 62],
                "vtp_enableCookieOverrides": false,
                "vtp_formDecoration": true,
                "vtp_urlPosition": "query",
                "vtp_enableCrossDomainFeature": true,
                "vtp_enableCookieFlagsFeature": true,
                "tag_id": 1222
            }, {
                "function": "__img",
                "metadata": ["map", "name", "Adobe - Reg Event"],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "https:\/\/spotify.demdex.net\/event?d_sid=9152385",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 40],
                "tag_id": 1227
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "Spotify_UM_Premium_Landing Page"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "30dt70",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti000",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1230
            }, {
                "function": "__ua",
                "metadata": ["map", "name", "UA Event - GAEvent"],
                "once_per_event": true,
                "vtp_nonInteraction": ["macro", 63],
                "vtp_overrideGaSettings": false,
                "vtp_eventValue": ["macro", 64],
                "vtp_eventCategory": ["macro", 51],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": ["macro", 52],
                "vtp_eventLabel": ["macro", 53],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 1233
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_signup_page"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "sefl",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti0",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1234
            }, {
                "function": "__img",
                "metadata": ["map", "name", "Adobe - Cookie Sync"],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": ["template", "https:\/\/spotify.demdex.net\/event?d_cid=194233%01", ["escape", ["macro", 12], 12], "\u0026d_sid=9578376"],
                "vtp_cacheBusterQueryParam": "cb",
                "vtp_randomNumber": ["macro", 40],
                "tag_id": 1237
            }, {
                "function": "__ua",
                "metadata": ["map", "name", "UA Event -- GANonInteractiveEventOrbit"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": ["macro", 51],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": ["macro", 52],
                "vtp_eventLabel": ["macro", 53],
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 38],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 1238
            }, {
                "function": "__img",
                "metadata": ["map", "name", "Adobe - CREAM Ad User ID Sync"],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": ["template", "https:\/\/spotify.demdex.net\/event?d_cid=157615%01", ["escape", ["macro", 65], 12], "\u0026d_sid=9578354"],
                "vtp_cacheBusterQueryParam": "cb",
                "vtp_randomNumber": ["macro", 40],
                "tag_id": 1240
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_newoffer_subscription_2for1"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "submi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti008",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1241
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_newoffer_subscription_daily"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "submi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti006",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1242
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_newoffer_subscription_weekly"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "submi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti007",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1243
            }, {
                "function": "__img",
                "metadata": ["map", "name", "ACME - JP - Conversion tracking"],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "https:\/\/cm-12769.csolution.jp\/a.neo?c=12769\u0026s=1\u0026u=\u0026q=1\u0026p=0",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 40],
                "tag_id": 1245
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_student-landing-page-signup_button"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "stude0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti005",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1247
            }, {
                "function": "__cvt_154771_1782",
                "metadata": ["map", "name", "FB - Student landing page - BR"],
                "once_per_event": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": "324181868092160",
                "vtp_standardEventName": "PageView",
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 1251
            }, {
                "function": "__ua",
                "metadata": ["map", "name", "UA Event -- Promo vs Premium tab"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Spotifypremium.co",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": "Click",
                "vtp_eventLabel": ["macro", 66],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 1253
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_homepage_landingpage"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "pagev",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti0",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1255
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_appstore_button"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "button",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti0",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1256
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_playstore_button"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "button",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1257
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "OPT - JP - ADWORDS - Conversion - thank you Page"],
                "once_per_load": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "814846465",
                "vtp_conversionLabel": "Jo1cCNmBpX4QgaTGhAM",
                "vtp_rdp": false,
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 1258
            }, {
                "function": "__sp",
                "metadata": ["map", "name", "OPT - JP - ADWORDS - Remarketing - Premium page"],
                "once_per_load": true,
                "vtp_enableDynamicRemarketing": false,
                "vtp_conversionId": "814846465",
                "vtp_customParamsFormat": "NONE",
                "vtp_rdp": false,
                "vtp_enableOgtRmktParams": true,
                "vtp_enableUserId": true,
                "vtp_url": ["macro", 2],
                "vtp_enableRdpCheckbox": true,
                "tag_id": 1261
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_60dt_Landing page"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "60dtj0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti000",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1263
            }, {
                "function": "__twitter_website_tag",
                "metadata": ["map", "name", "Twitter - OneSocial - Universal Tag"],
                "once_per_load": true,
                "vtp_event_type": "PageView",
                "vtp_twitter_pixel_id": ["macro", 69],
                "tag_id": 1270
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_hulu mass market_subscription_submission"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "submi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00a",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1272
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_hulu upgrade_subscription_submission"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "submi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00c",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1281
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "spotify_um_all_adwords-subscriptions_submissions"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "938675917",
                "vtp_conversionLabel": "dTZ8CJ37_GkQzZ3MvwM",
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 1286
            }, {
                "function": "__cvt_154771_2180",
                "metadata": ["map", "name", "Snapchat - All Subs"],
                "once_per_load": true,
                "vtp_transaction_id": ["macro", 72],
                "vtp_event_type": "PURCHASE",
                "vtp_price": ["macro", 73],
                "vtp_currency": ["macro", 74],
                "vtp_pixel_id": "03e794ae-eeea-4c1a-bdb0-ee8e60c6150f",
                "vtp_page_url": ["macro", 2],
                "tag_id": 1289
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_nft_download_now_button"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "nftsz0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1290
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_nft_landing_page"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "nftsz0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti0",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1291
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_nft_upgrade_button"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "nftsz0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti000",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1292
            }, {
                "function": "__img",
                "metadata": ["map", "name", "spotify_um_nft-ttd-conversion_landing_page"],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "\/\/insight.adsrvr.org\/track\/conv\/?adv=3ysyqec\u0026ct=0:5y4n6iu\u0026fmt=3",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 40],
                "tag_id": 1293
            }, {
                "function": "__img",
                "metadata": ["map", "name", "spotify_um_nft-ttd-retargeting_landing_page"],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "\/\/insight.adsrvr.org\/track\/conv\/?adv=3ysyqec\u0026ct=0:hifp4te\u0026fmt=3",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 40],
                "tag_id": 1294
            }, {
                "function": "__img",
                "metadata": ["map", "name", "spotify_um_nft-ttd-conversion_download_now_button"],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "\/\/insight.adsrvr.org\/track\/conv\/?adv=3ysyqec\u0026ct=0:ocdrnzp\u0026fmt=3",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 40],
                "tag_id": 1295
            }, {
                "function": "__img",
                "metadata": ["map", "name", "spotify_um_nft-ttd-retargeting_download_now_button"],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "\/\/insight.adsrvr.org\/track\/conv\/?adv=3ysyqec\u0026ct=0:jt9epmw\u0026fmt=3",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 40],
                "tag_id": 1296
            }, {
                "function": "__img",
                "metadata": ["map", "name", "spotify_um_nft-ttd-conversion_upgrade_button"],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "\/\/insight.adsrvr.org\/track\/conv\/?adv=3ysyqec\u0026ct=0:9mt5yon\u0026fmt=3",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 40],
                "tag_id": 1297
            }, {
                "function": "__img",
                "metadata": ["map", "name", "spotify_um_nft-ttd-retargeting_upgrade_button"],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "\/\/insight.adsrvr.org\/track\/conv\/?adv=3ysyqec\u0026ct=0:3y3rka9\u0026fmt=3",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 40],
                "tag_id": 1298
            }, {
                "function": "__img",
                "metadata": ["map", "name", "spotify_um_student_landing_page"],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "\/\/insight.adsrvr.org\/track\/conv\/?adv=3ysyqec\u0026ct=0:h6dcdcp\u0026fmt=3",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 40],
                "tag_id": 1309
            }, {
                "function": "__cvt_154771_2180",
                "metadata": ["map", "name", "Snapchat | All Student Purchase"],
                "once_per_event": true,
                "vtp_event_type": "CUSTOM_EVENT_1",
                "vtp_pixel_id": "03e794ae-eeea-4c1a-bdb0-ee8e60c6150f",
                "vtp_page_url": ["macro", 2],
                "tag_id": 1310
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_hulumassmarket_intro_subscription_submission"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "submi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00e",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1323
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "Spotify_um_hulustudent_intro_subscription_submission"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "submi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00d",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1325
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_student_btsintro_subscription_submission"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "submi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00f",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1328
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_paulmccartney60dt_landingpage"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "60dtj0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti005",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1329
            }, {
                "function": "__img",
                "metadata": ["map", "name", "spotify_um_bts-adotmob_fr-student_landing page"],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "https:\/\/5ba8a455f0e0b2001552843d.tracker.adotmob.com\/pixel\/visite?d=5000\u0026r=https%3A%2F%2F5ba8a455f0e0b2001552843d.tracker.adotmob.com%2Fpixel%2Fvisite5s",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 40],
                "tag_id": 1331
            }, {
                "function": "__img",
                "metadata": ["map", "name", "spotify_um_bts-ttd_fr-student_landing page"],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "\/\/insight.adsrvr.org\/track\/conv\/?adv=5rzpili\u0026ct=0:zp3qxnt\u0026fmt=3",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 40],
                "tag_id": 1335
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_familypage_us_landingpage"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "famil0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti002",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1342
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_familypage_us_getstarted_button"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "famil0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti003",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1343
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_googlehome_confirmation_page"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "regis0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti001",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1347
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_googlehome_redemption_page"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "regis0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti002",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1350
            }, {
                "function": "__img",
                "metadata": ["map", "name", "Bandsintown"],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "https:\/\/secure.adnxs.com\/px?id=1093196\u0026t=1",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 40],
                "tag_id": 1359
            }, {
                "function": "__ua",
                "metadata": ["map", "name", "UA Event -- Why-not-available"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Why Not Available",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": "Sign Up",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 1365
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_why not available page"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "landi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti0",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": ["macro", 58],
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1368
            }, {
                "function": "__cvt_154771_2180",
                "metadata": ["map", "name", "Spotify_UM_Snapchat_All_PageView"],
                "once_per_load": true,
                "vtp_event_type": "PAGE_VIEW",
                "vtp_pixel_id": "03e794ae-eeea-4c1a-bdb0-ee8e60c6150f",
                "vtp_page_url": ["macro", 2],
                "tag_id": 1383
            }, {
                "function": "__ua",
                "metadata": ["map", "name", "UA Event -- Page Loading Time for Optimize Experiments"],
                "once_per_event": true,
                "vtp_overrideGaSettings": false,
                "vtp_trackType": "TRACK_TIMING",
                "vtp_timingLabel": ["template", ["macro", 26], ":", ["macro", 27]],
                "vtp_timingCategory": "Optimize",
                "vtp_gaSettings": ["macro", 39],
                "vtp_timingVar": "domContentLoadedEventEnd",
                "vtp_timingValue": ["macro", 80],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsTiming": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 1385
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "MY_Spotify Premium_Promo_PL"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "spoti00",
                "vtp_useImageTag": false,
                "vtp_activityTag": "my_sp0",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1386
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_duo_subscription_submission"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "submi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00g",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1397
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_duo_landingpage"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "duocv0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti0",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1398
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_newoffer_subscription_monthly"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "submi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00h",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1399
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_fullpricepremium_subscription_submission"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "submi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00i",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1403
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_google_home_registration_page"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "googl0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti000",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1404
            }, {
                "function": "__cvt_154771_1782",
                "metadata": ["map", "name", "Facebook – Base Code"],
                "once_per_event": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": "1471934486270761",
                "vtp_standardEventName": "PageView",
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 1408
            }, {
                "function": "__cvt_154771_2180",
                "metadata": ["map", "name", "Snapchat – FR Base Code"],
                "once_per_event": true,
                "vtp_event_type": "PAGE_VIEW",
                "vtp_pixel_id": "072e7749-abc6-457d-b69d-6eb6749d0df7",
                "vtp_page_url": ["macro", 2],
                "tag_id": 1413
            }, {
                "function": "__pntr",
                "metadata": ["map", "name", "Pinterest - Sign Up"],
                "setup_tags": ["list", ["tag", 5, 0]],
                "once_per_load": true,
                "vtp_setCustomParams": false,
                "vtp_tagId": "2613216299153",
                "vtp_em": ["macro", 81],
                "vtp_eventName": "signup",
                "tag_id": 1418
            }, {
                "function": "__img",
                "metadata": ["map", "name", "JP-Referral Program Pixel"],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": ["template", "https:\/\/www.spotifypremium.jp\/api\/premium.php?utm_content=", ["escape", ["macro", 82], 12]],
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 40],
                "tag_id": 1421
            }, {
                "function": "__ua",
                "metadata": ["map", "name", "UA Event -- Signup Facebook Click"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Optimize",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": "select-button-signup-fb",
                "vtp_eventLabel": "Facebook",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 1423
            }, {
                "function": "__baut",
                "metadata": ["map", "name", "Bing-Success-All Pages"],
                "once_per_load": true,
                "vtp_tagId": "11009504",
                "vtp_uetqName": "uetq",
                "vtp_eventType": "PAGE_LOAD",
                "tag_id": 1430
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_student_sign_up_button"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 83]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "stude0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti006",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1431
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_premiumintro_subscription_submission"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 83]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "submi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00j",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1432
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_duointro_subscription_submission"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 83]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "submi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00k",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1433
            }, {
                "function": "__ua",
                "metadata": ["map", "name", "UA Event -- Activity Engagement"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": true,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "transport", "value", "beacon"]],
                "vtp_eventCategory": "Engaged Time",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_metric": ["list", ["map", "index", "1", "metric", ["macro", 85]]],
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": ["macro", 44],
                "vtp_eventLabel": ["macro", 85],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 1439
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_familyintro_subscription_submission"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "submi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00l",
                "vtp_userVariable": ["macro", 7],
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1440
            }, {
                "function": "__ua",
                "metadata": ["map", "name", "UA Event -- Google Optimize Timeout"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Optimize",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": "optimizeLoadedWithinTimeout",
                "vtp_eventLabel": ["macro", 87],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 1441
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_premiumstudent_id_pageland"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "premi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti0",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1442
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_premiumstudent_ph_pageland"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "premi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1443
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_premiumstudentpaymentstart_id_pageland"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "premi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti000",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1446
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_premiumstudentpaymentstart_ph_pageland"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "premi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti001",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1448
            }, {
                "function": "__gaawc",
                "metadata": ["map", "name", "GA4 | Global | Config"],
                "once_per_load": true,
                "vtp_fieldsToSet": ["list", ["map", "name", "user_id", "value", ["macro", 3]],
                    ["map", "name", "country", "value", ["macro", 7]],
                    ["map", "name", "userCountry", "value", ["macro", 16]],
                    ["map", "name", "pagePath", "value", ["macro", 88]]
                ],
                "vtp_sendPageView": true,
                "vtp_enableSendToServerContainer": false,
                "vtp_measurementId": "G-S35RN5WNT2",
                "vtp_enableUserProperties": true,
                "vtp_enableEuid": false,
                "vtp_enableSendFirstPartyUserDataForSgtm": true,
                "tag_id": 1450
            }, {
                "function": "__gaawe",
                "metadata": ["map", "name", "GA4 | Purchase"],
                "once_per_load": true,
                "vtp_eventName": "purchase",
                "vtp_eventParameters": ["list", ["map", "name", "transaction_id", "value", ["macro", 72]],
                    ["map", "name", "value", "value", ["macro", 73]],
                    ["map", "name", "currency", "value", ["macro", 74]],
                    ["map", "name", "items", "value", ["macro", 70]]
                ],
                "vtp_measurementId": "G-S35RN5WNT2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": false,
                "vtp_enableEuid": false,
                "tag_id": 1451
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_kids_landing page"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "kidsj0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti0",
                "vtp_userVariable": ["macro", 7],
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1453
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 1454
            }, {
                "function": "__gaawe",
                "metadata": ["map", "name", "GA4 | Generic | Events"],
                "once_per_event": true,
                "vtp_eventName": ["macro", 89],
                "vtp_eventParameters": ["list", ["map", "name", "Event Category", "value", ["macro", 51]],
                    ["map", "name", "Event Action", "value", ["macro", 52]],
                    ["map", "name", "Event Label", "value", ["macro", 53]]
                ],
                "vtp_measurementId": "G-S35RN5WNT2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": false,
                "vtp_enableEuid": false,
                "tag_id": 1455
            }, {
                "function": "__cvt_154771_1782",
                "metadata": ["map", "name", "Fb Pixel-UK Student Full Purchase"],
                "once_per_load": true,
                "vtp_pixelId": "1483047915331997",
                "vtp_disableAutoConfig": false,
                "vtp_eventName": "InitiateCheckout",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_advancedMatching": false,
                "vtp_consent": true,
                "tag_id": 1456
            }, {
                "function": "__gaawe",
                "metadata": ["map", "name", "App+Web -- GA-Event"],
                "once_per_event": true,
                "vtp_eventName": ["template", "GA -", ["macro", 52]],
                "vtp_eventParameters": ["list", ["map", "name", "eventAction", "value", ["macro", 52]],
                    ["map", "name", "eventCategory", "value", ["macro", 51]],
                    ["map", "name", "eventLabel", "value", ["macro", 53]]
                ],
                "vtp_measurementId": "G-S35RN5WNT2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": false,
                "vtp_enableEuid": false,
                "tag_id": 1458
            }, {
                "function": "__cvt_154771_1782",
                "metadata": ["map", "name", "FB Pixel JP All Pages"],
                "once_per_event": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": "169928840607661",
                "vtp_standardEventName": "PageView",
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 1492
            }, {
                "function": "__twitter_website_tag",
                "metadata": ["map", "name", "Twitter Pixel JP All Pages"],
                "once_per_event": true,
                "vtp_event_type": "PageView",
                "vtp_twitter_pixel_id": "o0xah",
                "tag_id": 1493
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "Google Ads JP Standard"],
                "once_per_load": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "814846465",
                "vtp_conversionLabel": "pJvBCJWN9LQBEIGkxoQD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 1503
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "Google Ads Student Conv"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "814846465",
                "vtp_conversionLabel": "pN3CCK2W9LQBEIGkxoQD",
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 1504
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "Google Ads Family Conv"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "814846465",
                "vtp_conversionLabel": "m2uqCJHf-LQBEIGkxoQD",
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 1505
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "Google Ads Prepaid Conv"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "814846465",
                "vtp_conversionLabel": "dnpYCNPi-LQBEIGkxoQD",
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 1506
            }, {
                "function": "__ua",
                "metadata": ["map", "name", "UA Event -- Qualaroo Response"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Qualaroo",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": "User Response - Duo",
                "vtp_eventLabel": "Qualaroo User Response",
                "vtp_dimension": ["list", ["map", "index", "37", "dimension", ["macro", 90]]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 1511
            }, {
                "function": "__cvt_154771_1782",
                "metadata": ["map", "name", "Facebook Pixel"],
                "once_per_event": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": "537637730345290",
                "vtp_standardEventName": "PageView",
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 1519
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_1monthfree_subscription_submission"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "subsc00",
                "vtp_useImageTag": false,
                "vtp_activityTag": ["macro", 91],
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 1531
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "Google Ads | JP | Duo Success"],
                "once_per_load": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "814846465",
                "vtp_conversionLabel": "nZXGCM6mgMMBEIGkxoQD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 1996
            }, {
                "function": "__ua",
                "metadata": ["map", "name", "UA Pageview -- chase"],
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "campaignName", "value", ["macro", 49]],
                    ["map", "fieldName", "campaignMedium", "value", "Web"],
                    ["map", "fieldName", "campaignSource", "value", ["macro", 92]]
                ],
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 39],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 1999
            }, {
                "function": "__img",
                "metadata": ["map", "name", "Spotify_UM_Premium_Landing Page_TTD Pixel"],
                "once_per_load": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "\/\/insight.adsrvr.org\/track\/pxl\/?adv=3ysyqec\u0026ct=0:od26mcl\u0026fmt=3",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 40],
                "tag_id": 2000
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_stations_landingpage"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "stati0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti0",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2006
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "Spotify_um_familyplan_landingpage"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "famil0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti004",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2009
            }, {
                "function": "__img",
                "metadata": ["map", "name", "UM_1MF_verizon_pixel"],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": ["template", "https:\/\/sp.analytics.yahoo.com\/spp.pl?a=10000\u0026.yp=10100340\u0026ec=", ["escape", ["macro", 93], 12]],
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 40],
                "tag_id": 2063
            }, {
                "function": "__img",
                "metadata": ["map", "name", "Spotify_UID_Collection_AllPages_PageLoad_VerizonPixel"],
                "once_per_load": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "https:\/\/sp.analytics.yahoo.com\/spp.pl?a=10000\u0026.yp=10100341\u0026ec=UID_Collection_AllPages_PageLoad",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 40],
                "tag_id": 2069
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "UM India Google Ads TrueView Conversion Pixel | Global | All Subs"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "769935171",
                "vtp_conversionLabel": "zrDPCPG5y8oBEMOOke8C",
                "vtp_rdp": false,
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 2079
            }, {
                "function": "__img",
                "metadata": ["map", "name", "Spotify_um_Premium_LandingPage_VerizonPixel"],
                "once_per_load": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "https:\/\/sp.analytics.yahoo.com\/spp.pl?a=10000\u0026.yp=10100341\u0026ec=LandingPage",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 40],
                "tag_id": 2080
            }, {
                "function": "__img",
                "metadata": ["map", "name", "spotify_um_all_subs_subscription_submission_VerizonPixel"],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": "https:\/\/sp.analytics.yahoo.com\/spp.pl?a=10000\u0026.yp=10100340\u0026ec=subs_subscription_submission",
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 40],
                "tag_id": 2082
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "Spotify_um_carrierbillingintro_2for1_subscription_submission"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "subsc00",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti003",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2083
            }, {
                "function": "__img",
                "metadata": ["map", "name", "UM_1MF_verizon_pixel_Student"],
                "once_per_event": true,
                "vtp_useCacheBuster": true,
                "vtp_url": ["template", "https:\/\/sp.analytics.yahoo.com\/spp.pl?a=10000\u0026.yp=10100340\u0026ec=", ["escape", ["macro", 94], 12]],
                "vtp_cacheBusterQueryParam": "gtmcb",
                "vtp_randomNumber": ["macro", 40],
                "tag_id": 2089
            }, {
                "function": "__ua",
                "metadata": ["map", "name", "UA Pageview -- Manual pageview"],
                "once_per_event": true,
                "vtp_overrideGaSettings": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 39],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 2093
            }, {
                "function": "__ua",
                "metadata": ["map", "name", "UA Event -- Transaction Debug"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": ["macro", 51],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": ["macro", 52],
                "vtp_eventLabel": ["macro", 53],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 2105
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "spotify_um_in_12f6_subscription_submission | Global | Submission"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "submi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00m",
                "vtp_userVariable": ["macro", 7],
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2106
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "listenlocal | AU | Homepage pageload"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "landi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti009",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2109
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "JP | GDN | 3 Month Trial"],
                "once_per_load": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "814846465",
                "vtp_conversionLabel": "nZXGCM6mgMMBEIGkxoQD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 2112
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "Listenlocal | AU | Connectwithspotify_button"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "button",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti005",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2120
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "Listenlocal | AU | Google Code Pageload"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "810577315",
                "vtp_conversionLabel": "jkhuCNSH-9ABEKPbwYID",
                "vtp_rdp": false,
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 2122
            }, {
                "function": "__ua",
                "metadata": ["map", "name", "UA Event -- JS Error Tracking"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "JavaScript Error",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": ["macro", 95],
                "vtp_eventLabel": ["template", ["macro", 96], " : ", ["macro", 97]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 2125
            }, {
                "function": "__paused",
                "vtp_originalTagType": "cvt_154771_2136",
                "tag_id": 2138
            }, {
                "function": "__gaawe",
                "metadata": ["map", "name", "GA4 | Impressions"],
                "unlimited": true,
                "vtp_eventName": "view_item_list",
                "vtp_eventParameters": ["list", ["map", "name", "items", "value", ["macro", 98]]],
                "vtp_measurementId": "G-S35RN5WNT2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": false,
                "vtp_enableEuid": false,
                "tag_id": 2151
            }, {
                "function": "__cvt_154771_2180",
                "metadata": ["map", "name", "Snap | US | Spotify Duo"],
                "once_per_event": true,
                "vtp_event_type": "PAGE_VIEW",
                "vtp_pixel_id": "fff7f198-e6aa-4833-b900-92d3854473b2",
                "vtp_page_url": ["macro", 2],
                "tag_id": 2181
            }, {
                "function": "__cvt_154771_2182",
                "metadata": ["map", "name", "Reddit | US-UK-DE | Spotify Duo"],
                "once_per_event": true,
                "vtp_enableFirstPartyCookies": true,
                "vtp_id": ["macro", 99],
                "vtp_eventType": "PageVisit",
                "tag_id": 2190
            }, {
                "function": "__twitter_website_tag",
                "metadata": ["map", "name", "Twitter | US-UK-FR-ES-DE-CA-AU | Spotify Duo"],
                "once_per_event": true,
                "vtp_event_type": "PageView",
                "vtp_twitter_pixel_id": ["macro", 100],
                "tag_id": 2192
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "YouTube Conversion | MENA | Landing page"],
                "once_per_load": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "770253179",
                "vtp_conversionLabel": "PgzHCKHi_dMBEPvCpO8C",
                "vtp_rdp": false,
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 2193
            }, {
                "function": "__cvt_154771_2114",
                "metadata": ["map", "name", "Qualaroo | Success Pages"],
                "once_per_event": true,
                "vtp_identifyViaDataLayer": false,
                "vtp_jsUrl": "https:\/\/cl.qualaroo.com\/ki.js\/51746\/b0R.js",
                "tag_id": 2198
            }, {
                "function": "__twitter_website_tag",
                "metadata": ["map", "name", "Twitter@Spotify | US | Homepage"],
                "once_per_event": true,
                "vtp_event_type": "PageView",
                "vtp_twitter_pixel_id": "o0dij",
                "tag_id": 2200
            }, {
                "function": "__cvt_154771_2180",
                "metadata": ["map", "name", "Snap | US | Homepage"],
                "once_per_load": true,
                "vtp_event_type": "PAGE_VIEW",
                "vtp_pixel_id": "fff7f198-e6aa-4833-b900-92d3854473b2",
                "vtp_page_url": ["macro", 2],
                "tag_id": 2201
            }, {
                "function": "__cvt_154771_2182",
                "metadata": ["map", "name", "Reddit | US | Homepage"],
                "once_per_event": true,
                "vtp_enableFirstPartyCookies": true,
                "vtp_id": "t2_2acrmfhv",
                "vtp_eventType": "PageVisit",
                "tag_id": 2202
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "CM Floodlights | AU-CA-EN-CA-FR-DE-ES-FR-IT-TR-UK-US | Spotify Duo"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "duocv0",
                "vtp_useImageTag": false,
                "vtp_activityTag": ["macro", 101],
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2208
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "JP | GDN | Payg 12 Month Success"],
                "once_per_load": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "814846465",
                "vtp_conversionLabel": "SC2KCIm9jtUBEIGkxoQD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 2215
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "CM Floodlights | Global | Duo Carrier Billing"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "subsc00",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti004",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2241
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "CM Floodlight | Global | Family Carrier Billing"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "subsc00",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti005",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2243
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "CM Floodlight | Global | Duo 2 Month Trial Subscription"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "subsc00",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti008",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2252
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "CM Floodlight | Global | Family 2 Month Trial Subscription"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "subsc00",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti007",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2253
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "CM Floodlight | Global | Premium 2 Month Trial Subscription"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "subsc00",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti006",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2254
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "CM Floodlight | Global | Student 2 Month Trial Subscription"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "subsc00",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti009",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2255
            }, {
                "function": "__ua",
                "metadata": ["map", "name", "GA | Exp variable setting"],
                "setup_tags": ["list", ["tag", 0, 0]],
                "once_per_load": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": true,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "exp", "value", ["macro", 102]]],
                "vtp_eventCategory": "Optimize",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": "Experiment Data Push",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 2261
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "CM Floodlight | US | Premium Promo Page"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "landi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00a",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2264
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "CM Floodlight | US | Promo End of Summer"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "landi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00b",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2266
            }, {
                "function": "__ua",
                "metadata": ["map", "name", "GA | Enhanced Ecommerce | Promo View"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_eventCategory": "Ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": "PromoView",
                "vtp_eventLabel": ["macro", 104],
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 2270
            }, {
                "function": "__ua",
                "metadata": ["map", "name", "GA | Enhanced Ecommerce | Promo Click"],
                "setup_tags": ["list", ["tag", 0, 0]],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_eventCategory": "Ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": "PromoClick",
                "vtp_eventLabel": ["macro", 104],
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 2273
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "CM Floodlights | PL and TR | Intro Page"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "landi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": ["macro", 105],
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2281
            }, {
                "function": "__ua",
                "metadata": ["map", "name", "GA | Event | Checkout Data"],
                "once_per_load": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Account Info Push",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": "Account Section",
                "vtp_dimension": ["list", ["map", "index", "58", "dimension", ["macro", 106]],
                    ["map", "index", "59", "dimension", ["macro", 107]],
                    ["map", "index", "60", "dimension", ["macro", 108]],
                    ["map", "index", "61", "dimension", ["macro", 109]],
                    ["map", "index", "62", "dimension", ["macro", 110]],
                    ["map", "index", "63", "dimension", ["macro", 111]]
                ],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 2305
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "CM Floodlight | FR-CA-DE-UK-US | Family Homepage"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "spoti001",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti0",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2313
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "CM Floodlight | FR-CA-DE-UK-US | Kids Page"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "spoti003",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti0",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2314
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "CM Floodlights | FR-CA-DE-UK-US | Family Page"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "spoti002",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti0",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2315
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "CM Floodlights | FR-CA-DE-UK-US | Kids Page"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 7]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "spoti004",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti0",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2317
            }, {
                "function": "__cvt_154771_2180",
                "metadata": ["map", "name", "Snapchat | All Duo Purchase"],
                "once_per_event": true,
                "vtp_event_type": "CUSTOM_EVENT_2",
                "vtp_pixel_id": "03e794ae-eeea-4c1a-bdb0-ee8e60c6150f",
                "vtp_page_url": ["macro", 2],
                "tag_id": 2318
            }, {
                "function": "__cvt_154771_2180",
                "metadata": ["map", "name", "Snapchat | All Family Purchase"],
                "once_per_load": true,
                "vtp_event_type": "CUSTOM_EVENT_3",
                "vtp_pixel_id": "03e794ae-eeea-4c1a-bdb0-ee8e60c6150f",
                "vtp_page_url": ["macro", 2],
                "tag_id": 2319
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "YouTube conversion Pixel | Student_subscription | Subscription page"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "837940844",
                "vtp_conversionLabel": "IL_pCNznyd8BEOzsx48D",
                "vtp_rdp": false,
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 2322
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "YouTube conversion Pixel |family_subscription_submission | Subscription page"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "837940844",
                "vtp_conversionLabel": "Ppy3COXnyd8BEOzsx48D",
                "vtp_rdp": false,
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 2323
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "YouTube conversion Pixel | All_subs_subscription | Subscription page"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "837940844",
                "vtp_conversionLabel": "cx16CO7nyd8BEOzsx48D",
                "vtp_rdp": false,
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 2324
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "YouTube conversion Pixel |premium_subscription_submission| subscription page"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "837940844",
                "vtp_conversionLabel": "nMdOCN7pyd8BEOzsx48D",
                "vtp_rdp": false,
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 2325
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "YouTube conversion Pixel | Duo_subscription_submission| Subscription page"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "837940844",
                "vtp_conversionLabel": "77e-CLqNyt8BEOzsx48D",
                "vtp_rdp": false,
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 2326
            }, {
                "function": "__flc",
                "metadata": ["map", "name", "CM Floodlight | Global | premium_bts_3MF_Success"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "subsc00",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00-",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2329
            }, {
                "function": "__cvt_154771_1782",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": "728273314570725",
                "vtp_standardEventName": "PageView",
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 2332
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "JP | GDN | 1 Month Trial"],
                "once_per_load": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "814846465",
                "vtp_conversionLabel": "0hAFCOv2sN8BEIGkxoQD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 2342
            }, {
                "function": "__twitter_website_tag",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_event_type": "PageView",
                "vtp_twitter_pixel_id": ["macro", 112],
                "tag_id": 2347
            }, {
                "function": "__ua",
                "metadata": ["map", "name", "GA | Events | Flavour Pages"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": ["macro", 51],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": ["macro", 52],
                "vtp_eventLabel": ["macro", 53],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 2364
            }, {
                "function": "__twitter_website_tag",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_event_type": "PageView",
                "vtp_twitter_pixel_id": "o0dij",
                "tag_id": 2382
            }, {
                "function": "__pntr",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_tagId": "2617608197512",
                "vtp_aem_enabled": "no",
                "vtp_eventName": "",
                "vtp_md_scraping_enabled": true,
                "tag_id": 2383
            }, {
                "function": "__twitter_website_tag",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_event_type": "PageView",
                "vtp_twitter_pixel_id": "o4uow",
                "tag_id": 2397
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "JP | GDN | Click | Create Playlist"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "814846465",
                "vtp_conversionLabel": "_3yKCITIhuUBEIGkxoQD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 2400
            }, {
                "function": "__awct",
                "metadata": ["map", "name", "JP | GDN | Campaign | Create Playlist"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "814846465",
                "vtp_conversionLabel": "TRNoCNWA9eQBEIGkxoQD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 2416
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "938675917",
                "vtp_conversionLabel": "Conversion",
                "vtp_rdp": false,
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 2422
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "landi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00t",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2433
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "938675917",
                "vtp_conversionLabel": "eYcuCOS1wegBEM2dzL8D",
                "vtp_rdp": false,
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 2434
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Storefront Ineligibility",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": ["macro", 113],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 2451
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Plan Sensitive Storefront Load",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": ["macro", 114],
                "vtp_eventLabel": ["macro", 115],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 2452
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 16]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "landi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti014",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2460
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 16]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "landi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti015",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2462
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 16]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "subsc00",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00b",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2464
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 16]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "subsc00",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00a",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2466
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 16]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "subsc00",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00d",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2468
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 16]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "subsc00",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00c",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2470
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_eventCategory": "Enhanced  Ecommerce : Checkout",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": ["macro", 89],
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 2486
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "transport", "value", "'beacon'"]],
                "vtp_eventCategory": "Enhanced  Ecommerce : Cart Remove",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": ["macro", 89],
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 2489
            }, {
                "function": "__cvt_154771_2204",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_id": "BRFSQC0UB1J677QTT9E0",
                "tag_id": 2491
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 16]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "landi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti016",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2499
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 2508
            }, {
                "function": "__twitter_website_tag",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_event_type": "PageView",
                "vtp_twitter_pixel_id": "o5ekw",
                "tag_id": 2510
            }, {
                "function": "__hjtc",
                "metadata": ["map", "name", "Hotjar | Mini and SK"],
                "once_per_load": true,
                "vtp_hotjar_site_id": ["macro", 55],
                "tag_id": 2518
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "premi00",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti0",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2523
            }, {
                "function": "__ua",
                "metadata": ["map", "name", "GA | Event | Scroll | KR"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Home-Scroll",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": ["macro", 88],
                "vtp_eventLabel": ["macro", 116],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 2531
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "780906389",
                "vtp_conversionLabel": "qktfCOLFqfUBEJXfrvQC",
                "vtp_rdp": false,
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 2536
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "landi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti01-",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2539
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "landi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti01a",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2542
            }, {
                "function": "__sp",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableDynamicRemarketing": false,
                "vtp_conversionId": "814846465",
                "vtp_customParamsFormat": "NONE",
                "vtp_rdp": false,
                "vtp_enableOgtRmktParams": true,
                "vtp_enableUserId": true,
                "vtp_url": ["macro", 2],
                "vtp_enableRdpCheckbox": true,
                "tag_id": 2548
            }, {
                "function": "__sp",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableDynamicRemarketing": false,
                "vtp_conversionId": "814846465",
                "vtp_customParamsFormat": "NONE",
                "vtp_conversionLabel": "uDPCCMPZ9PgBEIGkxoQD",
                "vtp_rdp": false,
                "vtp_enableOgtRmktParams": true,
                "vtp_enableUserId": true,
                "vtp_url": ["macro", 2],
                "vtp_enableRdpCheckbox": true,
                "tag_id": 2550
            }, {
                "function": "__sp",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableDynamicRemarketing": false,
                "vtp_conversionId": "814846465",
                "vtp_customParamsFormat": "NONE",
                "vtp_conversionLabel": "l_9sCJrclfkBEIGkxoQD",
                "vtp_rdp": false,
                "vtp_enableOgtRmktParams": true,
                "vtp_enableUserId": true,
                "vtp_url": ["macro", 2],
                "vtp_enableRdpCheckbox": true,
                "tag_id": 2551
            }, {
                "function": "__gclidw",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableCrossDomain": false,
                "vtp_enableUrlPassthrough": false,
                "vtp_enableCookieOverrides": false,
                "vtp_enableCrossDomainFeature": true,
                "vtp_enableCookieFlagsFeature": true,
                "tag_id": 2553
            }, {
                "function": "__sp",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableDynamicRemarketing": false,
                "vtp_conversionId": "814846465",
                "vtp_customParamsFormat": "NONE",
                "vtp_conversionLabel": "glKaCOKfifkBEIGkxoQD",
                "vtp_rdp": false,
                "vtp_enableOgtRmktParams": true,
                "vtp_enableUserId": true,
                "vtp_url": ["macro", 2],
                "vtp_enableRdpCheckbox": true,
                "tag_id": 2554
            }, {
                "function": "__cvt_154771_2204",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_id": "C1IUVO9T0U322RQPVJ10",
                "tag_id": 2558
            }, {
                "function": "__cvt_154771_1782",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": "201917444717963",
                "vtp_standardEventName": "PageView",
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 2567
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "388516921",
                "vtp_conversionLabel": "KvLwCOWgi4ACELmYobkB",
                "vtp_rdp": false,
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 2570
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "landi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti01c",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2574
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "landi0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti01b",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2576
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "subsc00",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00e",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2578
            }, {
                "function": "__sp",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableDynamicRemarketing": false,
                "vtp_conversionId": "388516921",
                "vtp_customParamsFormat": "NONE",
                "vtp_rdp": false,
                "vtp_enableOgtRmktParams": true,
                "vtp_enableUserId": true,
                "vtp_url": ["macro", 2],
                "vtp_enableRdpCheckbox": true,
                "tag_id": 2583
            }, {
                "function": "__twitter_website_tag",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_event_type": "PageView",
                "vtp_twitter_pixel_id": "o3mrb",
                "tag_id": 2589
            }, {
                "function": "__twitter_website_tag",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_event_type": "PageView",
                "vtp_twitter_pixel_id": "o3mrb",
                "tag_id": 2593
            }, {
                "function": "__cvt_154771_1782",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": "201917444717963",
                "vtp_standardEventName": "PageView",
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 2594
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "388516921",
                "vtp_conversionLabel": "MIO8CPWugYECELmYobkB",
                "vtp_rdp": false,
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 2596
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "conf0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti003",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "10844531",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2600
            }, {
                "function": "__cvt_154771_1782",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": "1483047915331997",
                "vtp_standardEventName": "PageView",
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 2602
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 83]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "onlyyou0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti0",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2609
            }, {
                "function": "__cvt_154771_1782",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": "1483047915331997",
                "vtp_standardEventName": "PageView",
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_objectPropertiesFromVariable": ["macro", 7],
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 2613
            }, {
                "function": "__twitter_website_tag",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_event_type": "PageView",
                "vtp_twitter_pixel_id": ["macro", 117],
                "tag_id": 2614
            }, {
                "function": "__cvt_154771_2180",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_event_type": "PAGE_VIEW",
                "vtp_pixel_id": ["macro", 118],
                "vtp_page_url": ["macro", 2],
                "tag_id": 2616
            }, {
                "function": "__pntr",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_setCustomParams": false,
                "vtp_tagId": ["macro", 119],
                "vtp_eventName": "pagevisit",
                "tag_id": 2618
            }, {
                "function": "__cvt_154771_2182",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableFirstPartyCookies": true,
                "vtp_id": ["macro", 120],
                "vtp_eventType": "PageVisit",
                "tag_id": 2619
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "premium0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti0",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2622
            }, {
                "function": "__ua",
                "metadata": ["map", "name", "GA | Enhanced Ecommerce | Product Click"],
                "setup_tags": ["list", ["tag", 0, 0]],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_eventCategory": "Ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": "Product Click",
                "vtp_eventLabel": ["macro", 122],
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 2625
            }, {
                "function": "__cvt_154771_2204",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_id": ["macro", 123],
                "tag_id": 2630
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "jp3mt0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti0",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2633
            }, {
                "function": "__cvt_154771_1782",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": "148951497268301",
                "vtp_standardEventName": "PageView",
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 2638
            }, {
                "function": "__cvt_154771_1782",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": "148951497268301",
                "vtp_standardEventName": "Subscribe",
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 2639
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "357320074",
                "vtp_conversionLabel": "ZA6DCJPavb8CEIqLsaoB",
                "vtp_rdp": false,
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 2649
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "premium0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2651
            }, {
                "function": "__cvt_154771_1782",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": "1483047915331997",
                "vtp_standardEventName": "PageView",
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 2655
            }, {
                "function": "__cvt_154771_2180",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_event_type": "PAGE_VIEW",
                "vtp_pixel_id": "fff7f198-e6aa-4833-b900-92d3854473b2",
                "vtp_page_url": ["macro", 2],
                "tag_id": 2660
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "premi001",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti001",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2662
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "premi001",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2664
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "premi001",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti000",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2666
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "premi001",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti0",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2670
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "subsc00",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00f",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2673
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "388516921",
                "vtp_conversionLabel": "FVjUCMLs8twCELmYobkB",
                "vtp_rdp": false,
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 2686
            }, {
                "function": "__cvt_154771_1782",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": "201917444717963",
                "vtp_standardEventName": "PageView",
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 2687
            }, {
                "function": "__twitter_website_tag",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_event_type": "PageView",
                "vtp_twitter_pixel_id": "o3mrb",
                "tag_id": 2690
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "388516921",
                "vtp_conversionLabel": "63j7CKu789wCELmYobkB",
                "vtp_rdp": false,
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": true,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 2694
            }, {
                "function": "__sp",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableDynamicRemarketing": false,
                "vtp_conversionId": "388516921",
                "vtp_customParamsFormat": "NONE",
                "vtp_rdp": false,
                "vtp_enableOgtRmktParams": true,
                "vtp_enableUserId": true,
                "vtp_url": ["macro", 2],
                "vtp_enableRdpCheckbox": true,
                "tag_id": 2695
            }, {
                "function": "__cvt_154771_1782",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": "148951497268301",
                "vtp_standardEventName": "PageView",
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 2700
            }, {
                "function": "__cvt_154771_1782",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": "148951497268301",
                "vtp_standardEventName": "Subscribe",
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 2702
            }, {
                "function": "__cvt_154771_1782",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": "201917444717963",
                "vtp_standardEventName": "PageView",
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 2704
            }, {
                "function": "__twitter_website_tag",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_event_type": "PageView",
                "vtp_twitter_pixel_id": "o3mrb",
                "tag_id": 2705
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "subsc00",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00g",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2709
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "subsc00",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00h",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2711
            }, {
                "function": "__cvt_154771_1782",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": "1483047915331997",
                "vtp_standardEventName": "PageView",
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 2713
            }, {
                "function": "__cvt_154771_2180",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_event_type": "PAGE_VIEW",
                "vtp_pixel_id": ["macro", 118],
                "vtp_page_url": ["macro", 2],
                "tag_id": 2720
            }, {
                "function": "__cvt_154771_2180",
                "metadata": ["map", "name", "Snap | IN | Mini 1 day Purchase"],
                "once_per_load": true,
                "vtp_event_type": "CUSTOM_EVENT_3",
                "vtp_pixel_id": ["macro", 118],
                "vtp_page_url": ["macro", 2],
                "tag_id": 2723
            }, {
                "function": "__cvt_154771_2180",
                "metadata": ["map", "name", "Snap | IN | Mini 7 days Purchase"],
                "once_per_load": true,
                "vtp_event_type": "CUSTOM_EVENT_2",
                "vtp_pixel_id": ["macro", 118],
                "vtp_page_url": ["macro", 2],
                "tag_id": 2726
            }, {
                "function": "__cvt_154771_2180",
                "metadata": ["map", "name", "Snap | IN | Payg Purchase"],
                "once_per_load": true,
                "vtp_event_type": "CUSTOM_EVENT_5",
                "vtp_pixel_id": ["macro", 118],
                "vtp_page_url": ["macro", 2],
                "tag_id": 2728
            }, {
                "function": "__cvt_154771_2180",
                "metadata": ["map", "name", "Snap | IN | Individual Prepaid Purchase"],
                "once_per_load": true,
                "vtp_event_type": "CUSTOM_EVENT_4",
                "vtp_pixel_id": ["macro", 118],
                "vtp_page_url": ["macro", 2],
                "tag_id": 2730
            }, {
                "function": "__cvt_154771_2180",
                "metadata": ["map", "name", "Snap | IN | Mini All Purchase"],
                "once_per_load": true,
                "vtp_event_type": "CUSTOM_EVENT_1",
                "vtp_pixel_id": ["macro", 118],
                "vtp_page_url": ["macro", 2],
                "tag_id": 2731
            }, {
                "function": "__cvt_154771_2180",
                "metadata": ["map", "name", "Snap| IN | All Subs"],
                "once_per_load": true,
                "vtp_transaction_id": ["macro", 72],
                "vtp_event_type": "PURCHASE",
                "vtp_price": ["macro", 73],
                "vtp_currency": ["macro", 74],
                "vtp_pixel_id": ["macro", 118],
                "vtp_page_url": ["macro", 2],
                "tag_id": 2735
            }, {
                "function": "__cvt_154771_2767",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 482, 0]],
                "once_per_load": true,
                "vtp_cvars": ["list", ["map", "slot", "1", "name", "market", "value", ["macro", 83]],
                    ["map", "slot", "2", "name", "loggedIn", "value", ["macro", 14]],
                    ["map", "slot", "3", "name", "language", "value", ["macro", 36]]
                ],
                "vtp_TagId": "22f14577e19f3",
                "tag_id": 2769
            }, {
                "function": "__cvt_154771_2770",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 287, 0]],
                "once_per_event": true,
                "vtp_transactionCurrency": ["macro", 74],
                "vtp_transactionRevenue": ["macro", 73],
                "vtp_transactionID": ["macro", 72],
                "tag_id": 2771
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "premi00",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2777
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "premi00",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti000",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2778
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "premi00",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti001",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2779
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "premi00",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti002",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2780
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Download",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": "Click",
                "vtp_eventLabel": ["macro", 25],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 2827
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "pgload",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti0",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2830
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Other External Links",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": "Inquiry Button 1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 2831
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Other External Links",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": "Inquiry Completed 1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 2832
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Other External Links",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": "Inquiry Completed 2",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 2833
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Referral Program",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": ["macro", 89],
                "vtp_eventLabel": ["macro", 7],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 2836
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "premium0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti000",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2838
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Checkout Error",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": ["macro", 89],
                "vtp_eventLabel": ["macro", 53],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 2854
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 2855
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 2859
            }, {
                "function": "__ua",
                "metadata": ["map", "name", "GA | Enhanced Ecommerce | Impressions"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_eventCategory": "Ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": "Storefront Impressions",
                "vtp_dimension": ["list", ["map", "index", "58", "dimension", ["macro", 125]]],
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 2862
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Page Translation",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": ["macro", 126],
                "vtp_eventLabel": ["macro", 127],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 2868
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "subsc00",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00i",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2872
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "premi00",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti003",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2883
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Checkout",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": "Checkbox Ticked",
                "vtp_eventLabel": ["macro", 7],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 2886
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 83]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "subsc00",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00j",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2891
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 83]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "subsc00",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00l",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2893
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 83]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "subsc00",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00k",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2895
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 83]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "subsc00",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00m",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2897
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 83]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "lp0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti0",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2899
            }, {
                "function": "__cvt_154771_2182",
                "metadata": ["map", "name", "Reddit - PM - Subs"],
                "once_per_load": true,
                "vtp_enableFirstPartyCookies": true,
                "vtp_id": "t2_2acrmfhv",
                "vtp_eventType": "Purchase",
                "tag_id": 2900
            }, {
                "function": "__cvt_154771_2182",
                "metadata": ["map", "name", "Reddit - PM - Checkout"],
                "once_per_load": true,
                "vtp_enableFirstPartyCookies": true,
                "vtp_id": "t2_2acrmfhv",
                "vtp_eventType": "AddToCart",
                "tag_id": 2903
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 83]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "subs0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "10844531",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2905
            }, {
                "function": "__twitter_website_tag",
                "metadata": ["map", "name", "Twitter - OneSocial - All Subs"],
                "once_per_load": true,
                "vtp_event_type": "Purchase",
                "vtp_twitter_pixel_id": ["macro", 69],
                "tag_id": 2910
            }, {
                "function": "__twitter_website_tag",
                "metadata": ["map", "name", "Twitter - OneSocial - All Student"],
                "once_per_load": true,
                "vtp_event_type": "Purchase",
                "vtp_twitter_pixel_id": ["macro", 69],
                "tag_id": 2911
            }, {
                "function": "__twitter_website_tag",
                "metadata": ["map", "name", "Twitter - OneSocial - Family"],
                "once_per_load": true,
                "vtp_event_type": "Purchase",
                "vtp_twitter_pixel_id": ["macro", 69],
                "tag_id": 2912
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 2914
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Cancellation",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 39],
                "vtp_eventAction": ["macro", 128],
                "vtp_eventLabel": ["macro", 83],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 2921
            }, {
                "function": "__cvt_154771_1782",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": "1483047915331997",
                "vtp_standardEventName": "PageView",
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 2929
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_customVariable": ["list", ["map", "key", "u1", "value", ["macro", 83]]],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "lp0",
                "vtp_useImageTag": false,
                "vtp_activityTag": "spoti00",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "4721227",
                "vtp_ordinalStandard": ["macro", 40],
                "vtp_url": ["macro", 2],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 2933
            }, {
                "function": "__gaawe",
                "metadata": ["map", "name", "GA4 | Promo Impressions"],
                "unlimited": true,
                "vtp_eventName": "view_promotion",
                "vtp_eventParameters": ["list", ["map", "name", "items", "value", ["macro", 103]]],
                "vtp_measurementId": "G-S35RN5WNT2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": false,
                "vtp_enableEuid": false,
                "tag_id": 2940
            }, {
                "function": "__gaawe",
                "metadata": ["map", "name", "GA4 | Promo Clicks"],
                "unlimited": true,
                "vtp_eventName": "select_promotion",
                "vtp_eventParameters": ["list", ["map", "name", "items", "value", ["macro", 129]]],
                "vtp_measurementId": "G-S35RN5WNT2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": false,
                "vtp_enableEuid": false,
                "tag_id": 2941
            }, {
                "function": "__gaawe",
                "metadata": ["map", "name", "GA4 | Begin Checkout"],
                "unlimited": true,
                "vtp_eventName": "begin_checkout",
                "vtp_eventParameters": ["list", ["map", "name", "items", "value", ["macro", 130]]],
                "vtp_measurementId": "G-S35RN5WNT2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": false,
                "vtp_enableEuid": false,
                "tag_id": 2945
            }, {
                "function": "__gaawe",
                "metadata": ["map", "name", "GA4 | Add Payment Info"],
                "unlimited": true,
                "vtp_eventName": "add_payment_info",
                "vtp_eventParameters": ["list", ["map", "name", "items", "value", ["macro", 130]],
                    ["map", "name", "payment_type", "value", ["macro", 131]],
                    ["map", "name", "value", "value", ["macro", 132]],
                    ["map", "name", "currency", "value", ["macro", 74]]
                ],
                "vtp_measurementId": "G-S35RN5WNT2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": false,
                "vtp_enableEuid": false,
                "tag_id": 2947
            }, {
                "function": "__gaawe",
                "metadata": ["map", "name", "GA4 | Add to Cart"],
                "unlimited": true,
                "vtp_eventName": "add_to_cart",
                "vtp_eventParameters": ["list", ["map", "name", "items", "value", ["macro", 133]]],
                "vtp_measurementId": "G-S35RN5WNT2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": false,
                "vtp_enableEuid": false,
                "tag_id": 2952
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "154771_454",
                "tag_id": 2953
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "154771_1231",
                "tag_id": 2954
            }, {
                "function": "__cl",
                "tag_id": 2955
            }, {
                "function": "__cl",
                "tag_id": 2956
            }, {
                "function": "__cl",
                "tag_id": 2957
            }, {
                "function": "__cl",
                "tag_id": 2958
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "154771_1490",
                "tag_id": 2959
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "154771_1541",
                "tag_id": 2960
            }, {
                "function": "__cl",
                "tag_id": 2961
            }, {
                "function": "__cl",
                "tag_id": 2962
            }, {
                "function": "__cl",
                "tag_id": 2963
            }, {
                "function": "__cl",
                "tag_id": 2964
            }, {
                "function": "__tg",
                "vtp_triggerIds": ["list", "154771_1815_1731"],
                "vtp_uniqueTriggerId": "154771_1815",
                "tag_id": 2965
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "154771_1815_1731",
                "tag_id": 2966
            }, {
                "function": "__cl",
                "tag_id": 2967
            }, {
                "function": "__jel",
                "tag_id": 2968
            }, {
                "function": "__tg",
                "vtp_triggerIds": ["list", "154771_2155_340", "154771_2155_2154"],
                "vtp_uniqueTriggerId": "154771_2155",
                "tag_id": 2969
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "154771_2155_340",
                "tag_id": 2970
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "154771_2155_2154",
                "tag_id": 2972
            }, {
                "function": "__cl",
                "tag_id": 2973
            }, {
                "function": "__sdl",
                "vtp_verticalThresholdUnits": "PERCENT",
                "vtp_verticalThresholdsPercent": "25,50,75,100",
                "vtp_verticalThresholdOn": true,
                "vtp_triggerStartOption": "WINDOW_LOAD",
                "vtp_horizontalThresholdOn": false,
                "vtp_uniqueTriggerId": "154771_2530",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 2974
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "154771_2543",
                "tag_id": 2975
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "154771_2545",
                "tag_id": 2976
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "154771_2547",
                "tag_id": 2977
            }, {
                "function": "__tg",
                "vtp_triggerIds": ["list", "154771_2736_2154", "154771_2736_2737"],
                "vtp_uniqueTriggerId": "154771_2736",
                "tag_id": 2978
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "154771_2736_2154",
                "tag_id": 2979
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "154771_2736_2737",
                "tag_id": 2981
            }, {
                "function": "__cl",
                "tag_id": 2982
            }, {
                "function": "__cl",
                "tag_id": 2983
            }, {
                "function": "__cl",
                "tag_id": 2984
            }, {
                "function": "__cl",
                "tag_id": 2985
            }, {
                "function": "__cl",
                "tag_id": 2986
            }, {
                "function": "__cl",
                "tag_id": 2987
            }, {
                "function": "__cl",
                "tag_id": 2988
            }, {
                "function": "__cl",
                "tag_id": 2989
            }, {
                "function": "__cl",
                "tag_id": 2990
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Spotify - all - signup success"],
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=new Date;a.setTime(a.getTime()+3E4);window.document.cookie=\"justRegistered\\x3d1;path\\x3d\/;domain\\x3d.spotify.com\"})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 101
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Facebook -- PM - USD - Registration Pixel"],
                "setup_tags": ["list", ["tag", 18, 0]],
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"CompleteRegistration\",{value:0,currency:\"USD\",country:", ["escape", ["macro", 7], 8, 16], "});\u003C\/script\u003E\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 142
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Twitter - Registration"],
                "vtp_html": "\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"l471b\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 172
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Twitter - Family Plan receipt"],
                "vtp_html": "\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"l56xu\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 502
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Twitter - 3-for-X receipt"],
                "vtp_html": "\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"l60fz\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 503
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Twitter - 30dt receipt"],
                "vtp_html": "\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"l4ayr\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 504
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Twitter - Premium receipt"],
                "vtp_html": "\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"l4ayq\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 505
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Twitter - Student Premium receipt"],
                "vtp_html": "\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"l4euk\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 506
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Twitter - remarketing - homepage"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"l61bk\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 507
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Twitter - remarketing - Premium LP"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"l61cu\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 508
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Twitter - 2-for-XX receipt"],
                "vtp_html": "\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"l6721\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 535
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Twitter - 3-for-1 Winback receipt"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"nty6i\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 579
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Twitter - New Universal Tag - All Pages"],
                "once_per_load": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nvi9b\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 665
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Twitter - SpotifyJP - All Subs"],
                "once_per_load": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nvo5k\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 707
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Pinterest - Subscriptions - Family Plan"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E!function(b){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var a=window.pintrk;a.queue=[];a.version=\"3.0\";a=document.createElement(\"script\");a.async=!0;a.src=b;b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}}(\"https:\/\/s.pinimg.com\/ct\/core.js\");pintrk(\"load\",\"2617608197512\");pintrk(\"page\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/ct.pinterest.com\/v3\/?tid=2617608197512\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Epintrk(\"track\",\"ViewCategory\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 931
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Dentsu -- JP Info - AdWords"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=872694060,google_custom_params=window.google_tag_params,google_remarketing_only=!0;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1200
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Dentsu -- JP Info - STADIA"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar __pParams=__pParams||[];__pParams.push({client_id:60});\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/cdn.d2-apps.net\/js\/tr.js\" async\u003E\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1202
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Dentsu -- JP Info -- YouTube Masthead"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=872694060,google_conversion_label=\"sL2cCOGul3UQrIKRoAM\",google_custom_params=window.google_tag_params,google_remarketing_only=!0;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1204
            }, {
                "function": "__html",
                "metadata": ["map", "name", "TTD as service universal pixel"],
                "once_per_load": true,
                "vtp_html": "\u003Cdiv id=\"ttdUniversalPixelTag1dfda5e8d7794c54abf4a4ce7c009256\" style=\"display:none\"\u003E\n\t\u003Cscript data-gtmsrc=\"https:\/\/js.adsrvr.org\/up_loader.1.1.0.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\t\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){\"function\"===typeof TTDUniversalPixelApi\u0026\u0026(a=new TTDUniversalPixelApi,a.init(\"7avchlk\",[\"abcf6bj\"],\"https:\/\/insight.adsrvr.org\/track\/up\",\"ttdUniversalPixelTag1dfda5e8d7794c54abf4a4ce7c009256\"))})(this);\u003C\/script\u003E\n\u003C\/div\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1214
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Adobe - Premium Sub"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cimg src=\"http:\/\/spotify.demdex.net\/event?d_sid=9152408\u0026amp;c_subscriptionproduct=", ["escape", ["macro", 134], 12], "\" width=\"1\" height=\"1\" border=\"0\"\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1228
            }, {
                "function": "__html",
                "metadata": ["map", "name", "ASP - JP - Conversion tracking"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"“https:\/\/cm-12769.csolution.jp\/ajs.neo?c=12769\u0026amp;s=1\u0026amp;u=\u0026amp;q=1\u0026amp;p=0”\"\u003E\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1244
            }, {
                "function": "__html",
                "metadata": ["map", "name", "OPT - JP - YAHOO - Conversion - thank you Page"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\" language=\"javascript\"\u003Evar yahoo_ydn_conv_io=\"gPQQy74OLDXMpsdaCpWw\",yahoo_ydn_conv_label=\"OAEPSR0H12ZDI9VLIZM442021\",yahoo_ydn_conv_transaction_id=\"\",yahoo_ydn_conv_amount=\"1\";\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" language=\"javascript\" charset=\"UTF-8\" data-gtmsrc=\"https:\/\/b90.yahoo.co.jp\/conv.js\"\u003E\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1259
            }, {
                "function": "__html",
                "metadata": ["map", "name", "OPT - JP - APPLOVIN - Conversion - thank you Page"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003EAppLovinSdkConfig={sdk_key:\"KB3ZzQaxScXu7-NByeINCT32gSUNzGkIRnsOCRKf2sXArwLnTd9l6ConeH9cXuvzfmMsBgWEX2OMyl8UNHETT1\",pn:\"spotify_premium\",event:\"postinstall\",sub_event:\"premium\"};\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/assets.applovin.com\/jp\/js\/applovin-conv-2.0-min.js\"\u003E\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1260
            }, {
                "function": "__html",
                "metadata": ["map", "name", "OPT - JP - YAHOO - Remarketing - Premium page"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\" language=\"javascript\"\u003Evar yahoo_retargeting_id=\"KCKVEWA1J7\",yahoo_retargeting_label=\"\",yahoo_retargeting_page_type=\"\",yahoo_retargeting_items=[{item_id:\"\",category_id:\"\",price:\"\",quantity:\"\"}];\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" language=\"javascript\" data-gtmsrc=\"https:\/\/b92.yahoo.co.jp\/js\/s_retargeting.js\"\u003E\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1262
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Script -- Track No Successes in Session"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){if(\"undefined\"!==typeof Storage){var a=\"sp_successes\";var b=null!==sessionStorage.getItem(a)?parseInt(sessionStorage.getItem(a))+1:1;sessionStorage.setItem(a,b);window.dataLayer=window.dataLayer||[];dataLayer.push({successesInSession:b})}})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1267
            }, {
                "function": "__html",
                "metadata": ["map", "name", "spotify_um_nft_trueview_download_now_button"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=837940844,google_conversion_label=\"WGzrCPvR1oIBEOzsx48D\",google_remarketing_only=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1300
            }, {
                "function": "__html",
                "metadata": ["map", "name", "spotify_um_nft_trueview_landing_page"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=837940844,google_conversion_label=\"nGZhCI7T1oIBEOzsx48D\",google_remarketing_only=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1301
            }, {
                "function": "__html",
                "metadata": ["map", "name", "spotify_um_nft_trueview_upgrade_button"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=837940844,google_conversion_label=\"y3lSCOyl7oIBEOzsx48D\",google_remarketing_only=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1302
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Retargeting for iOS -- JP"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/jp\/gtag\/js?id=AW-814846465\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"AW-814846465\");\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" language=\"javascript\"\u003Evar yahoo_retargeting_id=\"KCKVEWA1J7\",yahoo_retargeting_label=\"\",yahoo_retargeting_page_type=\"\",yahoo_retargeting_items=[{item_id:\"\",category_id:\"\",price:\"\",quantity:\"\"}];\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" language=\"javascript\" data-gtmsrc=\"https:\/\/b92.yahoo.co.jp\/js\/s_retargeting.js\"\u003E\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1305
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Pixel Server -- All Premium -- Receipt"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,a){var f=[],h=function(){for(var e=arguments.length,g=Array(e),c=0;c\u003Ce;c++)g[c]=arguments[c];return b.spotAds.conv.q.push(g)},k=\"script\",d=a.getElementsByTagName(k);d=d[d.length-1];a=a.createElement(k);a.async=!0;a.id=\"spotevents\";a.src=\"https:\/\/pixel-static.spotify.com\/conversion.min.js\";try{b.spotAds?!b.spotAds.conv\u0026\u0026(b.spotAds.conv={q:f,sdk:h}):b.spotAds={conv:{q:f,sdk:h}},d.parentNode.appendChild(a)}catch(e){}})(window,document);window.spotAds.conv.sdk(\"init\",\"27991251\");\nwindow.spotAds.conv.sdk(\"track\",\"CHECKOUT\");\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1320
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Pixel Server - Premium Landing Pages Tag"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,a){var f=[],h=function(){for(var e=arguments.length,g=Array(e),c=0;c\u003Ce;c++)g[c]=arguments[c];return b.spotAds.conv.q.push(g)},k=\"script\",d=a.getElementsByTagName(k);d=d[d.length-1];a=a.createElement(k);a.async=!0;a.id=\"spotevents\";a.src=\"https:\/\/pixel-static.spotify.com\/conversion.min.js\";try{b.spotAds?!b.spotAds.conv\u0026\u0026(b.spotAds.conv={q:f,sdk:h}):b.spotAds={conv:{q:f,sdk:h}},d.parentNode.appendChild(a)}catch(e){}})(window,document);window.spotAds.conv.sdk(\"init\",\"27991251\");\nwindow.spotAds.conv.sdk(\"track\",\"PAGE_VIEW\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1321
            }, {
                "function": "__html",
                "metadata": ["map", "name", "spotify_um_bts-singlespot-mm052_fr-student_landing page"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/javascript\"\u003E(function(){var a=\"\";try{var b=window.location.href,c=b.indexOf(\"msck\"),d=-1!=c?b.substring(c):\"MSCLICKID\",e=d.indexOf(\"\\x26\");-1!=e\u0026\u0026(d=d.substring(0,e));a=\"https:\/\/urldefense.proofpoint.com\/v2\/url?u\\x3dhttps-3A__ads.mediasmart.es_m_open-3Fid-3Dsinglespot-2Dqbwq5fd60xikv4qtmdwxnzgho7rfnb3g-26ms-5Fevent-5Fnum-3D1-26udid-3D\\x26d\\x3dDwIGAg\\x26c\\x3dFtw_YSVcGmqQBvrGwAZugGylNRkk-uER0-5bY94tjsc\\x26r\\x3dioX6rZqP556OC8YhEqnwKjftd1hPR2T3Hirpb6U91MQ\\x26m\\x3dxl8F9YB8ES6vtJ6S8MY0W2CuhwfAs425b-lqQ3EBBuA\\x26s\\x3dTnHVAkLGgq17DcoWxEyccm45sf0FPWuU_ZeMwE0jY_0\\x26e\\x3d\"+\nencodeURIComponent(d)}catch(f){}a||(a=\"https:\/\/urldefense.proofpoint.com\/v2\/url?u\\x3dhttps-3A__ads.mediasmart.es_m_open-3Fid-3Dsinglespot-2Dqbwq5fd60xikv4qtmdwxnzgho7rfnb3g-26ms-5Fevent-5Fnum-3D1\\x26d\\x3dDwIGAg\\x26c\\x3dFtw_YSVcGmqQBvrGwAZugGylNRkk-uER0-5bY94tjsc\\x26r\\x3dioX6rZqP556OC8YhEqnwKjftd1hPR2T3Hirpb6U91MQ\\x26m\\x3dxl8F9YB8ES6vtJ6S8MY0W2CuhwfAs425b-lqQ3EBBuA\\x26s\\x3dXEcdAAX0xDV8oI-HT_Q1UnGjSSBk_PYZ-ezPQeej5vc\\x26e\\x3d\");a=a+\"\\x26burst\\x3d\"+(new Date).getTime();b=document.createElement(\"img\");\nb.style.display=\"none\";b.src=a;(c=document.getElementsByTagName(\"body\")[0]||document.body)?c.appendChild(b):document.write('\\x3cimg style\\x3d\"display: none;\" src\\x3d\"'+a+'\"\/\\x3e')})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 1332
            }, {
                "function": "__html",
                "metadata": ["map", "name", "spotify_um_facebook-viewevent_landingpage"],
                "setup_tags": ["list", ["tag", 18, 1]],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1340
            }, {
                "function": "__html",
                "metadata": ["map", "name", "spotify_um_facebook-purchaseevent_landingpage"],
                "setup_tags": ["list", ["tag", 18, 0]],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1341
            }, {
                "function": "__html",
                "metadata": ["map", "name", "spotify_um_facebook-nft-viewevent_pl"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1354
            }, {
                "function": "__html",
                "metadata": ["map", "name", "spotify_um_facebook-nft-lead_signup-page"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Lead\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1355
            }, {
                "function": "__html",
                "metadata": ["map", "name", "spotify_um_facebook-nft-registration_thankyou-page"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"CompleteRegistration\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1356
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Accessmill"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript id=\"_lognos_script_2760_\" type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/img.macromill.com\/js\/us001562ykt\/1000027604-1f\/lognos.js\"\u003E\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1357
            }, {
                "function": "__html",
                "metadata": ["map", "name", "People"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar __pParams=__pParams||[];__pParams.push({client_id:\"60\",c_1:\"spotify\",c_2:\"ClientSite\"});\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/cdn.d2-apps.net\/js\/tr.js\" async\u003E\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1358
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Script -- Auto Tag Hotjar Recordings with Optimize Info"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};var tags=[\"", ["escape", ["macro", 26], 7], "\",\"", ["escape", ["macro", 26], 7], "-", ["escape", ["macro", 27], 7], "\"],variant=\"", ["escape", ["macro", 27], 7], "\";\"none\"===variant\u0026\u0026(tags=[\"", ["escape", ["macro", 26], 7], "\"]);hj(\"trigger\",\"", ["escape", ["macro", 26], 7], "-", ["escape", ["macro", 27], 7], "\");\"true\"===", ["escape", ["macro", 135], 8, 16], "\u0026\u0026(hj(\"trigger\",\"startExpRecording\"),hj(\"tagRecording\",tags));\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1362
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Tik Tok - JP - Conversion tracking"],
                "once_per_event": true,
                "vtp_html": "\u0026quot;\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a._tt_config=!0;a._taq=a._taq||[];a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=document.location.protocol+\"\/\/static.bytedance.com\/pixel\/sdk.js?sdkid\\x3dBFUDD652G42P4VA6TNMG\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})(window);\u003C\/script\u003E\u0026quot;",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1367
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Spotify_UM_Premium_Landing Page_DBM Event Snippet"],
                "once_per_load": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003Egtag(\"event\",\"conversion\",{allow_custom_scripts:!0,send_to:\"DC-8872062\/invmedia\/spoti000+standard\"});\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1372
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Twitter – ID Pixel"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"o04nx\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1409
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Twitter – PH Pixel"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"o0ddl\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1410
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Twitter TH Pixel"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"o04o0\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1411
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Twitter BR Pixel"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"o1s64\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1412
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Twitter_Free_All Page"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"o1qsx\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1414
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Script -- Activity Engagement"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Etry{(function(){var a=(new Date).getTime(),b=0,k=0,d=!0,h=!1,l=function(){k=(new Date).getTime();b+=k-a;d=!0},f=function(c){d\u0026\u0026(d=!1,a=(new Date).getTime(),h=!1);window.clearTimeout(m);m=window.setTimeout(l,5E3)},e=function(c,n){window.addEventListener?window.addEventListener(c,n):window.attachEvent\u0026\u0026window.attachEvent(\"on\"+c,n)},g=function(c){d||(b+=(new Date).getTime()-a);!h\u0026\u00260\u003Cb\u0026\u002636E5\u003Eb\u0026\u0026window.dataLayer.push({event:\"nonIdle\",nonIdleTimeElapsed:b});d\u0026\u0026(h=!0);c\u0026\u0026\"beforeunload\"===c.type\u0026\u0026window.removeEventListener(\"beforeunload\",\ng);b=0;a=(new Date).getTime();window.setTimeout(g,15E3)};e(\"mousedown\",f);e(\"keydown\",f);e(\"scroll\",f);e(\"mousemove\",f);e(\"beforeunload\",g);var m=window.setTimeout(l,5E3);window.setTimeout(g,15E3)})()}catch(a){console.error(a)};\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1438
            }, {
                "function": "__html",
                "metadata": ["map", "name", "TTD_spotify_um_premiumstudent_id_pageland"],
                "once_per_event": true,
                "vtp_html": "\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/insight.adsrvr.org\/track\/pxl\/?adv=whupmjq\u0026amp;ct=0:gqycsxn\u0026amp;fmt=3\"\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1444
            }, {
                "function": "__html",
                "metadata": ["map", "name", "TTD_spotify_um_premiumstudentpaymentstart_id_pageland"],
                "once_per_event": true,
                "vtp_html": "\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/insight.adsrvr.org\/track\/pxl\/?adv=whupmjq\u0026amp;ct=0:t7q2bty\u0026amp;fmt=3\"\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1447
            }, {
                "function": "__html",
                "metadata": ["map", "name", "TTD_spotify_um_premiumstudentpaymentstart_ph_pageland"],
                "once_per_event": true,
                "vtp_html": "\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/insight.adsrvr.org\/track\/pxl\/?adv=whupmjq\u0026amp;ct=0:qwvfptg\u0026amp;fmt=3\"\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1449
            }, {
                "function": "__html",
                "metadata": ["map", "name", "TTD_Spotify_um_premiumstudent_ph_pageland"],
                "once_per_event": true,
                "vtp_html": "\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/insight.adsrvr.org\/track\/pxl\/?adv=whupmjq\u0026amp;ct=0:4o42xfb\u0026amp;fmt=3\"\u003E;",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1452
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Yahoo JP Standard Conv"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript async data-gtmsrc=\"https:\/\/s.yimg.jp\/images\/listing\/tool\/cv\/ytag.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.yjDataLayer=window.yjDataLayer||[];function ytag(){yjDataLayer.push(arguments)}ytag({type:\"ycl_cookie\"});\u003C\/script\u003E\n\u003Cscript async type=\"text\/gtmscript\"\u003Eytag({type:\"yjad_conversion\",config:{yahoo_ydn_conv_io:\"gPQQy74OLDXMpsdaCpWw\",yahoo_ydn_conv_label:\"6PYK0FQRON73WOANEOB656248\",yahoo_ydn_conv_transaction_id:\"\",yahoo_ydn_conv_value:\"1\"}});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1499
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Yahoo JP Student Conv"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript async data-gtmsrc=\"https:\/\/s.yimg.jp\/images\/listing\/tool\/cv\/ytag.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.yjDataLayer=window.yjDataLayer||[];function ytag(){yjDataLayer.push(arguments)}ytag({type:\"ycl_cookie\"});\u003C\/script\u003E\n\u003Cscript async type=\"text\/gtmscript\"\u003Eytag({type:\"yjad_conversion\",config:{yahoo_ydn_conv_io:\"gPQQy74OLDXMpsdaCpWw\",yahoo_ydn_conv_label:\"7KD328IFP09C4K4NG4Q656249\",yahoo_ydn_conv_transaction_id:\"\",yahoo_ydn_conv_value:\"1\"}});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1500
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Yahoo JP Family Conv"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript async data-gtmsrc=\"https:\/\/s.yimg.jp\/images\/listing\/tool\/cv\/ytag.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.yjDataLayer=window.yjDataLayer||[];function ytag(){yjDataLayer.push(arguments)}ytag({type:\"ycl_cookie\"});\u003C\/script\u003E\n\u003Cscript async type=\"text\/gtmscript\"\u003Eytag({type:\"yjad_conversion\",config:{yahoo_ydn_conv_io:\"gPQQy74OLDXMpsdaCpWw\",yahoo_ydn_conv_label:\"O6CFY8SKQYKMQJTBK6I656251\",yahoo_ydn_conv_transaction_id:\"\",yahoo_ydn_conv_value:\"1\"}});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1501
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Yahoo JP Prepaid Conv"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript async data-gtmsrc=\"https:\/\/s.yimg.jp\/images\/listing\/tool\/cv\/ytag.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.yjDataLayer=window.yjDataLayer||[];function ytag(){yjDataLayer.push(arguments)}ytag({type:\"ycl_cookie\"});\u003C\/script\u003E\n\u003Cscript async type=\"text\/gtmscript\"\u003Eytag({type:\"yjad_conversion\",config:{yahoo_ydn_conv_io:\"gPQQy74OLDXMpsdaCpWw\",yahoo_ydn_conv_label:\"UZIVMN7U1NEET6BLKV8656252\",yahoo_ydn_conv_transaction_id:\"\",yahoo_ydn_conv_value:\"1\"}});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1502
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Qualaroo - Premium Duo - En-Es Markets"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar _kiq=_kiq||[];(function(){setTimeout(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/s3.amazonaws.com\/ki.js\/51746\/b0R.js\";b.parentNode.insertBefore(a,b)},1)})();_kiq.push([\"eventHandler\",\"submit\",function(a,b,c){window.dataLayer.push({event:\"qualarooResponse\",qualResponse:\"Survey #\"+b+\" - \"+a[0].question+\" \"+a[0].answer})}]);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1510
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Line | JP | All Pages"],
                "once_per_load": true,
                "vtp_html": " \u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,d){a._ltq=a._ltq||[];a._lt=a._lt||function(){a._ltq.push(arguments)};var e=\"https:\"===location.protocol?\"https:\/\/d.line-scdn.net\":\"http:\/\/d.line-cdn.net\",c=b.createElement(\"script\");c.async=1;c.src=d||e+\"\/n\/line_tag\/public\/release\/v1\/lt.js\";b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(c,b)})(window,document);_lt(\"init\",{customerType:\"lap\",tagId:\"21f70de1-e530-4284-a126-4a1fcabb4652\"});_lt(\"send\",\"pv\",[\"21f70de1-e530-4284-a126-4a1fcabb4652\"]);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1994
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Yahoo | JP | Duo Success"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript async data-gtmsrc=\"https:\/\/s.yimg.jp\/images\/listing\/tool\/cv\/ytag.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n \u003Cscript type=\"text\/gtmscript\"\u003Ewindow.yjDataLayer=window.yjDataLayer||[];function ytag(){yjDataLayer.push(arguments)}ytag({type:\"ycl_cookie\"});\u003C\/script\u003E\n \u003Cscript async type=\"text\/gtmscript\"\u003Eytag({type:\"yjad_conversion\",config:{yahoo_ydn_conv_io:\"gPQQy74OLDXMpsdaCpWw\",yahoo_ydn_conv_label:\"OYUXWECN3DMYETLG7PR682055\",yahoo_ydn_conv_transaction_id:\"\",yahoo_ydn_conv_value:\"1\"}});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1995
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Line | JP | Success"],
                "setup_tags": ["list", ["tag", 421, 0]],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E_lt(\"send\",\"cv\",{type:\"Conversion\"},[\"21f70de1-e530-4284-a126-4a1fcabb4652\"]);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2074
            }, {
                "function": "__html",
                "metadata": ["map", "name", "JP | Line | 3 Month Trial"],
                "setup_tags": ["list", ["tag", 421, 0]],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E_lt(\"send\",\"cv\",{type:\"Conversion\"},[\"21f70de1-e530-4284-a126-4a1fcabb4652\"]);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2111
            }, {
                "function": "__html",
                "metadata": ["map", "name", "JP | Yahoo | 3 Month Trial"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript async data-gtmsrc=\"https:\/\/s.yimg.jp\/images\/listing\/tool\/cv\/ytag.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n \u003Cscript type=\"text\/gtmscript\"\u003Ewindow.yjDataLayer=window.yjDataLayer||[];function ytag(){yjDataLayer.push(arguments)}ytag({type:\"ycl_cookie\"});\u003C\/script\u003E\n \u003Cscript async type=\"text\/gtmscript\"\u003Eytag({type:\"yjad_conversion\",config:{yahoo_ydn_conv_io:\"gPQQy74OLDXMpsdaCpWw\",yahoo_ydn_conv_label:\"OYUXWECN3DMYETLG7PR682055\",yahoo_ydn_conv_transaction_id:\"\",yahoo_ydn_conv_value:\"1\"}});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2113
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Pinterest | US-UK-DE-ES-FR-IT-CA-AU | Spotify Duo"],
                "setup_tags": ["list", ["tag", 5, 0]],
                "once_per_load": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Epintrk(\"load\",", ["escape", ["macro", 119], 8, 16], ");pintrk(\"page\");\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2188
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Pinterest | US | Homepage"],
                "setup_tags": ["list", ["tag", 5, 0]],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Epintrk(\"load\",\"2617608197512\");pintrk(\"page\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2203
            }, {
                "function": "__html",
                "metadata": ["map", "name", "TTD | AU-CA-EN-CA-FR-DE-ES-FR-IT-TR-UK-US | Spotify Duo"],
                "once_per_event": true,
                "vtp_html": "\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"https:\/\/insight.adsrvr.org\/track\/pxl\/?adv=3ysyqec\u0026amp;ct=0:56qma0i\u0026amp;fmt=3\"\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2211
            }, {
                "function": "__html",
                "metadata": ["map", "name", "Yahoo | JP | Payg 12 Month"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript async data-gtmsrc=\"https:\/\/s.yimg.jp\/images\/listing\/tool\/cv\/ytag.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n \u003Cscript type=\"text\/gtmscript\"\u003Ewindow.yjDataLayer=window.yjDataLayer||[];function ytag(){yjDataLayer.push(arguments)}ytag({type:\"ycl_cookie\"});\u003C\/script\u003E\n \u003Cscript async type=\"text\/gtmscript\"\u003Eytag({type:\"yjad_conversion\",config:{yahoo_ydn_conv_io:\"gPQQy74OLDXMpsdaCpWw\",yahoo_ydn_conv_label:\"BMQQCYKWJDQR3LYYPYF716814\",yahoo_ydn_conv_transaction_id:\"\",yahoo_ydn_conv_value:\"1\"}});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2214
            }, {
                "function": "__html",
                "metadata": ["map", "name", "All Pages | US-TR-JP-DE | TikTok"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/analytics.tiktok.com\/i18n\/pixel\/sdk.js?sdkid\\x3dBSFT81IHO5CA4NQ7A400\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n  ",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2234
            }, {
                "function": "__html",
                "metadata": ["map", "name", "AfterLoad | Global"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{window.setTimeout(function(){dataLayer.push({event:\"afterLoad\"})},1500)}catch(a){}})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2244
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"o0k16\");twq(\"track\",\"PageView\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 2337
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript\u003E!function(b){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var a=window.pintrk;a.queue=[];a.version=\"3.0\";a=document.createElement(\"script\");a.async=!0;a.src=b;b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}}(\"https:\/\/s.pinimg.com\/ct\/core.js\");pintrk(\"load\",\"2612810699919\",{em:\"\\x3cuser_email_address\\x3e\"});pintrk(\"page\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/ct.pinterest.com\/v3\/?event=init\u0026amp;tid=2612810699919\u0026amp;pd[em]=\u0026lt;hashed_email_address\u0026gt;\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 2340
            }, {
                "function": "__html",
                "metadata": ["map", "name", "JP | Yahoo | 1 Month Trial"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript async data-gtmsrc=\"https:\/\/s.yimg.jp\/images\/listing\/tool\/cv\/ytag.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.yjDataLayer=window.yjDataLayer||[];function ytag(){yjDataLayer.push(arguments)}ytag({type:\"ycl_cookie\"});\u003C\/script\u003E\n\u003Cscript async type=\"text\/gtmscript\"\u003Eytag({type:\"yjad_conversion\",config:{yahoo_ydn_conv_io:\"gPQQy74OLDXMpsdaCpWw\",yahoo_ydn_conv_label:\"2T5SB7IX2IXKAMEAE12737532\",yahoo_ydn_conv_transaction_id:\"\",yahoo_ydn_conv_value:\"1\"}});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2343
            }, {
                "function": "__html",
                "metadata": ["map", "name", "JP | Line | 1 Month Trial"],
                "setup_tags": ["list", ["tag", 421, 0]],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E_lt(\"send\",\"cv\",{type:\"Conversion\"},[\"21f70de1-e530-4284-a126-4a1fcabb4652\"]);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2344
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,b){if(!a.rdt){var c=a.rdt=function(){c.sendEvent?c.sendEvent.apply(c,arguments):c.callQueue.push(arguments)};c.callQueue=[];a=b.createElement(\"script\");a.src=\"https:\/\/www.redditstatic.com\/ads\/pixel.js\";a.async=!0;b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}}(window,document);rdt(\"init\",\"t2_5059sant\");rdt(\"track\",\"PageVisit\");\u003C\/script\u003E\n\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2361
            }, {
                "function": "__html",
                "metadata": ["map", "name", "JP | Line | Click | Create Playlist"],
                "unlimited": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E_lt(\"send\",\"cv\",{type:\"PlayList\"},[\"21f70de1-e530-4284-a126-4a1fcabb4652\"]);\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2399
            }, {
                "function": "__html",
                "metadata": ["map", "name", "JP | FB | Click | Create Playlist"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackSingle\",\"169928840607661\",\"PlayList\",{value:1});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2401
            }, {
                "function": "__html",
                "metadata": ["map", "name", "JP | Line | Basecode | Create Playlist"],
                "once_per_load": true,
                "vtp_html": "\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,d){a._ltq=a._ltq||[];a._lt=a._lt||function(){a._ltq.push(arguments)};var e=\"https:\"===location.protocol?\"https:\/\/d.line-scdn.net\":\"http:\/\/d.line-cdn.net\",c=b.createElement(\"script\");c.async=1;c.src=d||e+\"\/n\/line_tag\/public\/release\/v1\/lt.js\";b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(c,b)})(window,document);_lt(\"init\",{customerType:\"lap\",tagId:\"21f70de1-e530-4284-a126-4a1fcabb4652\"});_lt(\"send\",\"pv\",[\"21f70de1-e530-4284-a126-4a1fcabb4652\"]);\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E_lt(\"send\",\"cv\",{type:\"PlayList_LP\"},[\"21f70de1-e530-4284-a126-4a1fcabb4652\"]);\u003C\/script\u003E\n\n\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2415
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript defer data-gtmsrc=\"https:\/\/www.fastly-insights.com\/insights.js?k=040e3997-282c-4275-ba9b-a406ce78b133\u0026amp;dnt=1\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2457
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": ["template", "\u003Cscript data-gtmsrc=\"https:\/\/sync.relaido.jp\/qc.js?tagid=", ["escape", ["macro", 137], 12], "\" type=\"text\/gtmscript\" charset=\"UTF-8\"\u003E\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2471
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript async data-gtmsrc=\"https:\/\/s.yimg.jp\/images\/listing\/tool\/cv\/ytag.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.yjDataLayer=window.yjDataLayer||[];function ytag(){yjDataLayer.push(arguments)}ytag({type:\"ycl_cookie\",config:{ycl_use_non_cookie_storage:!0}});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2474
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"https:\/\/insight.adsrvr.org\/track\/pxl\/?adv=whupmjq\u0026amp;ct=0:rw5yloh\u0026amp;fmt=3\"\u003E",
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 2521
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o5laq\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o5laq\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o5laq\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2544
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o5lar\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o5lar\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o5lar\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2546
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"o0xah\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2549
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o5lap\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o5lap\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o5lap\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2552
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._pop=window._pop||[];window._pop.push([\"_set_conversion_id\",\"Spotify_opt\"]);window._pop.push([\"_set_action\",\"cv\"]);(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"api.popin.cc\/conversion2.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2559
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackSingle\",\"169928840607661\",\"MusicCulturePremium\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2560
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackSingle\",\"169928840607661\",\"MusicCulturePresent\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2561
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackSingle\",\"169928840607661\",\"MusicCultureTwitter\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2562
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,d){a._ltq=a._ltq||[];a._lt=a._lt||function(){a._ltq.push(arguments)};var e=\"https:\"===location.protocol?\"https:\/\/d.line-scdn.net\":\"http:\/\/d.line-cdn.net\",c=b.createElement(\"script\");c.async=1;c.src=d||e+\"\/n\/line_tag\/public\/release\/v1\/lt.js\";b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(c,b)})(window,document);_lt(\"init\",{customerType:\"lap\",tagId:\"b9b96f99-13f2-46e1-b53a-15b6e0f9a987\"});_lt(\"send\",\"pv\",[\"b9b96f99-13f2-46e1-b53a-15b6e0f9a987\"]);\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2585
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,d){a._ltq=a._ltq||[];a._lt=a._lt||function(){a._ltq.push(arguments)};var e=\"https:\"===location.protocol?\"https:\/\/d.line-scdn.net\":\"http:\/\/d.line-cdn.net\",c=b.createElement(\"script\");c.async=1;c.src=d||e+\"\/n\/line_tag\/public\/release\/v1\/lt.js\";b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(c,b)})(window,document);_lt(\"init\",{customerType:\"lap\",tagId:\"b9b96f99-13f2-46e1-b53a-15b6e0f9a987\"});_lt(\"send\",\"pv\",[\"b9b96f99-13f2-46e1-b53a-15b6e0f9a987\"]);\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E_lt(\"send\",\"cv\",{type:\"0419spotify\"},[\"b9b96f99-13f2-46e1-b53a-15b6e0f9a987\"]);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2586
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript\u003E(function(a,c,e){var b=\"microAdUniverseTracker\";a[b]=a[b]||{};a[b].track=a[b].track||function(){(a[b].queue=a[b].queue||[]).push(arguments)};var d=c.createElement(\"script\");d.async=!0;d.src=e;c=c.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(d,c)})(window,document,\"https:\/\/cdn.microad.jp\/js\/track.js\");microAdUniverseTracker.track({service_id:2508});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 2590
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,c,e){var b=\"microAdUniverseTracker\";a[b]=a[b]||{};a[b].track=a[b].track||function(){(a[b].queue=a[b].queue||[]).push(arguments)};var d=c.createElement(\"script\");d.async=!0;d.src=e;c=c.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(d,c)})(window,document,\"https:\/\/cdn.microad.jp\/js\/track.js\");microAdUniverseTracker.track({service_id:2508});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2595
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,d){a._ltq=a._ltq||[];a._lt=a._lt||function(){a._ltq.push(arguments)};var e=\"https:\"===location.protocol?\"https:\/\/d.line-scdn.net\":\"http:\/\/d.line-cdn.net\",c=b.createElement(\"script\");c.async=1;c.src=d||e+\"\/n\/line_tag\/public\/release\/v1\/lt.js\";b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(c,b)})(window,document);_lt(\"init\",{customerType:\"lap\",tagId:\"b9b96f99-13f2-46e1-b53a-15b6e0f9a987\"});_lt(\"send\",\"pv\",[\"b9b96f99-13f2-46e1-b53a-15b6e0f9a987\"]);\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E_lt(\"send\",\"cv\",{type:\"0426spotify\"},[\"b9b96f99-13f2-46e1-b53a-15b6e0f9a987\"]);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2597
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"https:\/\/insight.adsrvr.org\/track\/pxl\/?adv=3ysyqec\u0026amp;ct=0:zv7nwhz\u0026amp;fmt=3\"\u003E",
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 2610
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(c,d){try{var b=document.getElementsByTagName(\"head\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=1;a.crossOrigin=\"anonymous\";a.src=\"\/\/d2c7xlmseob604.cloudfront.net\/tracker.min.js\";a.onload=function(){c.SmartlingContextTracker.init({orgId:d,requestTimeout:5E3,snapshotSizeLimitBytes:9E6,resourceFetchLimit:50,instrumentationProcessingEnabled:!0,overrideContextOlderThanDays:1,clearInputFields:!0})};b.insertBefore(a,b.firstChild)}catch(e){}})(window,\"LWHwtkRdbL5n7kzkE3mslw\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2643
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "  \u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,f,d,l,g,h,k,c,e){if(!a[d]||!a[d]._q){for(;k\u003Ch.length;)l(g,h[k++]);c=b.createElement(f);c.async=1;c.src=\"https:\/\/cdn.branch.io\/branch-latest.min.js\";e=b.getElementsByTagName(f)[0];e.parentNode.insertBefore(c,e);a[d]=g}})(window,document,\"script\",\"branch\",function(a,b){a[b]=function(){a._q.push([b,arguments])}},{_q:[],_v:1},\"addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent logEvent disableTracking\".split(\" \"),\n0);branch.init(\"key_live_pfaVQo61xda7Zq1zC1ca3igayxarnljw\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2656
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Ebranch.logEvent(\"COMPLETE_REGISTRATION\",{},{},\"Spotify Registration\",function(a){console.log(a)});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2667
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": " \u003Cscript type=\"text\/gtmscript\"\u003Ebranch.logEvent(\"SUBSCRIBE\",{},{},\"Spotify Subscription\",function(a){console.log(a)});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2668
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,c,e){var b=\"microAdUniverseTracker\";a[b]=a[b]||{};a[b].track=a[b].track||function(){(a[b].queue=a[b].queue||[]).push(arguments)};var d=c.createElement(\"script\");d.async=!0;d.src=e;c=c.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(d,c)})(window,document,\"https:\/\/cdn.microad.jp\/js\/track.js\");microAdUniverseTracker.track({service_id:2973});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2676
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,c,e){var b=\"microAdUniverseTracker\";a[b]=a[b]||{};a[b].track=a[b].track||function(){(a[b].queue=a[b].queue||[]).push(arguments)};var d=c.createElement(\"script\");d.async=!0;d.src=e;c=c.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(d,c)})(window,document,\"https:\/\/cdn.microad.jp\/js\/track.js\");microAdUniverseTracker.track({service_id:2973,property_id:[743]});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2678
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,c,e){var b=\"microAdUniverseTracker\";a[b]=a[b]||{};a[b].track=a[b].track||function(){(a[b].queue=a[b].queue||[]).push(arguments)};var d=c.createElement(\"script\");d.async=!0;d.src=e;c=c.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(d,c)})(window,document,\"https:\/\/cdn.microad.jp\/js\/track.js\");microAdUniverseTracker.track({service_id:2972});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2682
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,c,e){var b=\"microAdUniverseTracker\";a[b]=a[b]||{};a[b].track=a[b].track||function(){(a[b].queue=a[b].queue||[]).push(arguments)};var d=c.createElement(\"script\");d.async=!0;d.src=e;c=c.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(d,c)})(window,document,\"https:\/\/cdn.microad.jp\/js\/track.js\");microAdUniverseTracker.track({service_id:2972,property_id:[742]});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2684
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar fringe81tag=fringe81tag||{};fringe81tag.cvTag=fringe81tag.cvTag||[];fringe81tag.cvTag.push({clientId:\"ijzkUzZuuOiT\",cvTagId:\"2qEwSz7Pcs2z\"});(function(){var c=\"https:\"==location.protocol?\"https:\":\"http:\",b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.src=c+\"\/\/cdn.adnwif.smt.docomo.ne.jp\/scripts\/conv\/conversion.js?\"+(+new Date+\"\").slice(0,-8);a.type=\"text\/javascript\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2688
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,d){a._ltq=a._ltq||[];a._lt=a._lt||function(){a._ltq.push(arguments)};var e=\"https:\"===location.protocol?\"https:\/\/d.line-scdn.net\":\"http:\/\/d.line-cdn.net\",c=b.createElement(\"script\");c.async=1;c.src=d||e+\"\/n\/line_tag\/public\/release\/v1\/lt.js\";b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(c,b)})(window,document);_lt(\"init\",{customerType:\"lap\",tagId:\"b9b96f99-13f2-46e1-b53a-15b6e0f9a987\"});_lt(\"send\",\"pv\",[\"b9b96f99-13f2-46e1-b53a-15b6e0f9a987\"]);\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/tr.line.me\/tag.gif?c_t=lap\u0026amp;t_id=b9b96f99-13f2-46e1-b53a-15b6e0f9a987\u0026amp;e=pv\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E_lt(\"send\",\"cv\",{type:\"0806spotifyduo\"},[\"b9b96f99-13f2-46e1-b53a-15b6e0f9a987\"]);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2689
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript data-gtmsrc=\"https:\/\/js.adsrvr.org\/up_loader.1.1.0.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n        \u003Cscript type=\"text\/gtmscript\"\u003Ettd_dom_ready(function(){if(\"function\"===typeof TTDUniversalPixelApi){var a=new TTDUniversalPixelApi;a.init(\"ohcui0o\",[\"3skd98f\"],\"https:\/\/insight.adsrvr.org\/track\/up\")}});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2691
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar fringe81tag=fringe81tag||{};fringe81tag.cvTag=fringe81tag.cvTag||[];fringe81tag.cvTag.push({clientId:\"rjJay5W7gygc\",cvTagId:\"RkVMusUVr.wd\"});(function(){var c=\"https:\"==location.protocol?\"https:\":\"http:\",b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.src=c+\"\/\/cdn.adnwif.smt.docomo.ne.jp\/scripts\/conv\/conversion.js?\"+(+new Date+\"\").slice(0,-8);a.type=\"text\/javascript\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2692
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,d){a._ltq=a._ltq||[];a._lt=a._lt||function(){a._ltq.push(arguments)};var e=\"https:\"===location.protocol?\"https:\/\/d.line-scdn.net\":\"http:\/\/d.line-cdn.net\",c=b.createElement(\"script\");c.async=1;c.src=d||e+\"\/n\/line_tag\/public\/release\/v1\/lt.js\";b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(c,b)})(window,document);_lt(\"init\",{customerType:\"lap\",tagId:\"b9b96f99-13f2-46e1-b53a-15b6e0f9a987\"});_lt(\"send\",\"pv\",[\"b9b96f99-13f2-46e1-b53a-15b6e0f9a987\"]);\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/tr.line.me\/tag.gif?c_t=lap\u0026amp;t_id=b9b96f99-13f2-46e1-b53a-15b6e0f9a987\u0026amp;e=pv\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E_lt(\"send\",\"cv\",{type:\"0806spotifyfamily\"},[\"b9b96f99-13f2-46e1-b53a-15b6e0f9a987\"]);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2703
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript data-gtmsrc=\"https:\/\/js.adsrvr.org\/up_loader.1.1.0.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n        \u003Cscript type=\"text\/gtmscript\"\u003Ettd_dom_ready(function(){if(\"function\"===typeof TTDUniversalPixelApi){var a=new TTDUniversalPixelApi;a.init(\"ohcui0o\",[\"3skd98f\"],\"https:\/\/insight.adsrvr.org\/track\/up\")}});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2706
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods=\"page track identify instances debug on off once ready alias group enableCookie disableCookie\".split(\" \");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d\u003Ca.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c\u003Ca.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=function(b,c){var f=\"https:\/\/analytics.tiktok.com\/i18n\/pixel\/events.js\";\na._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement(\"script\");c.type=\"text\/javascript\";c.async=!0;c.src=f+\"?sdkid\\x3d\"+b+\"\\x26lib\\x3d\"+e;b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(c,b)};a.load(\"C4LTLTT1KC6QQ9D157OG\");a.page();a.track(\"Subscribe\")}(window,document,\"ttq\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2747
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods=\"page track identify instances debug on off once ready alias group enableCookie disableCookie\".split(\" \");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d\u003Ca.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c\u003Ca.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=function(b,c){var f=\"https:\/\/analytics.tiktok.com\/i18n\/pixel\/events.js\";\na._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement(\"script\");c.type=\"text\/javascript\";c.async=!0;c.src=f+\"?sdkid\\x3d\"+b+\"\\x26lib\\x3d\"+e;b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(c,b)};a.load(\"C4LTLTT1KC6QQ9D157OG\");a.page();a.track(\"ViewContent\")}(window,document,\"ttq\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2751
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"https:\/\/insight.adsrvr.org\/track\/pxl\/?adv=whupmjq\u0026amp;ct=0:s588rt3\u0026amp;fmt=3\"\u003E\n\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2791
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"https:\/\/insight.adsrvr.org\/track\/pxl\/?adv=whupmjq\u0026amp;ct=0:2ebbwq0\u0026amp;fmt=3\/\"\u003E\n\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2792
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"https:\/\/insight.adsrvr.org\/track\/pxl\/?adv=whupmjq\u0026amp;ct=0:sa5207z\u0026amp;fmt=3\"\u003E\n\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2793
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"https:\/\/insight.adsrvr.org\/track\/pxl\/?adv=whupmjq\u0026amp;ct=0:lz1e84c\u0026amp;fmt=3\"\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2794
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=780888544,google_conversion_label=\"-AnOCPzrhIADEODTrfQC\",google_remarketing_only=!1,google_allow_ad_personalization_signals=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cdiv style=\"display:inline;\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/www.googleadservices.com\/pagead\/conversion\/780888544\/?label=-AnOCPzrhIADEODTrfQC\u0026amp;guid=ON\u0026amp;script=0\u0026amp;npa=1\"\u003E\n\u003C\/div\u003E\n\u003C\/noscript\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2795
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=780906377,google_conversion_label=\"DbdrCJvehIADEInfrvQC\",google_remarketing_only=!1,google_allow_ad_personalization_signals=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cdiv style=\"display:inline;\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/www.googleadservices.com\/pagead\/conversion\/780906377\/?label=DbdrCJvehIADEInfrvQC\u0026amp;guid=ON\u0026amp;script=0\u0026amp;npa=1\"\u003E\n\u003C\/div\u003E\n\u003C\/noscript\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2796
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=780892638,google_conversion_label=\"6WvxCPKD_v8CEN7zrfQC\",google_remarketing_only=!1,google_allow_ad_personalization_signals=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cdiv style=\"display:inline;\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/www.googleadservices.com\/pagead\/conversion\/780892638\/?label=6WvxCPKD_v8CEN7zrfQC\u0026amp;guid=ON\u0026amp;script=0\u0026amp;npa=1\"\u003E\n\u003C\/div\u003E\n\u003C\/noscript\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2797
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=780911164,google_conversion_label=\"sMGMCJyH_v8CELyEr_QC\",google_remarketing_only=!1,google_allow_ad_personalization_signals=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cdiv style=\"display:inline;\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/www.googleadservices.com\/pagead\/conversion\/780911164\/?label=sMGMCJyH_v8CELyEr_QC\u0026amp;guid=ON\u0026amp;script=0\u0026amp;npa=1\"\u003E\n\u003C\/div\u003E\n\u003C\/noscript\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2798
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003EpiiObject={PIISelectors:[\"#address-street,#address-city,#address-state,#address-postal_code_short,#cardnumber,#expiry-date,#security-code,.ProfileSection__StyledValue-sc-ze17mo-2.jhZqKU\"],Attributes:[{selector:\"[data-hj-suppress]\",attrName:\"td\"}]};window._uxa=window._uxa||[];window._uxa.push([\"setPIISelectors\",piiObject]);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2849
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function c(a){a=a.replace(\/[\\[]\/,\"\\\\[\").replace(\/[\\]]\/,\"\\\\]\");a=new RegExp(\"[\\\\?\\x26]\"+a+\"\\x3d([^\\x26#]*)\");a=a.exec(location.search);return null===a?\"\":decodeURIComponent(a[1].replace(\/\\+\/g,\" \"))}if(window.MutationObserver){var f=new MutationObserver(function(a){a.forEach(function(b){var d=b.oldValue,e=b.target.className;-1===d.indexOf(\"translated-\")\u0026\u0026-1\u003Ce.indexOf(\"translated-\")\u0026\u0026window.dataLayer.push({event:\"pageTranslated\",translationLanguage:b.target.lang||document.getElementsByTagName(\"html\")[0].getAttribute(\"xml:lang\"),\ntranslationService:\"on-page google translate\"})})}),g=document.querySelector(\"html\");f.observe(g,{attributes:!0,attributeOldValue:!0,attributeFilter:[\"class\"]})}-1\u003Cwindow.location.href.indexOf(\"translate.googleusercontent.com\")\u0026\u0026window.dataLayer.push({event:\"pageTranslated\",translationLanguage:c(\"tl\"),translationService:\"google translate website\"});-1\u003Cwindow.location.href.indexOf(\"translatoruser-int.com\")\u0026\u0026window.dataLayer.push({event:\"pageTranslated\",translationLanguage:c(\"to\"),translationService:\"bing translator website\"})})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2864
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 287, 0]],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._uxa.push([\"trackEventTriggerRecording\",\"@ETS@vocSubmit\"]);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2876
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 287, 0]],
                "once_per_load": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._uxa.push([\"trackEventTriggerRecording\",\"@ETS@vocSubmit\"]);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2877
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"https:\/\/insight.adsrvr.org\/track\/pxl\/?adv=whupmjq\u0026amp;ct=0:jns1au9\u0026amp;fmt=3\/\"\u003E\n\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2906
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=780906389,google_conversion_label=\"9aiUCPb0x6EDEJXfrvQC\",google_remarketing_only=!1,google_allow_ad_personalization_signals=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cdiv style=\"display:inline;\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/www.googleadservices.com\/pagead\/conversion\/780906389\/?label=9aiUCPb0x6EDEJXfrvQC\u0026amp;guid=ON\u0026amp;script=0\u0026amp;npa=1\"\u003E\n\u003C\/div\u003E\n\u003C\/noscript\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2907
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"https:\/\/insight.adsrvr.org\/track\/pxl\/?adv=whupmjq\u0026amp;ct=0:s588rt3\u0026amp;fmt=3\/\"\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2908
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=780888544,google_conversion_label=\"auFCCNeezqEDEODTrfQC\",google_remarketing_only=!1,google_allow_ad_personalization_signals=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cdiv style=\"display:inline;\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/www.googleadservices.com\/pagead\/conversion\/780888544\/?label=auFCCNeezqEDEODTrfQC\u0026amp;guid=ON\u0026amp;script=0\u0026amp;npa=1\"\u003E\n\u003C\/div\u003E\n\u003C\/noscript\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2909
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods=\"page track identify instances debug on off once ready alias group enableCookie disableCookie\".split(\" \");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d\u003Ca.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c\u003Ca.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=function(b,c){var f=\"https:\/\/analytics.tiktok.com\/i18n\/pixel\/events.js\";\na._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement(\"script\");c.type=\"text\/javascript\";c.async=!0;c.src=f+\"?sdkid\\x3d\"+b+\"\\x26lib\\x3d\"+e;b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(c,b)};a.load(\"C8C90TD9481MCTU3L610\");a.page()}(window,document,\"ttq\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2925
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "registration_success"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": ",m00,"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": ".*"
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "\\\/purchase\\\/success\\\/three_for_x\\\/",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "OneTrustGroupsUpdated"
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": ".*\\\/purchase\\\/success\\\/trial_30_days\\\/.*",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": ".*\\\/purchase\\\/success\\\/premium\\\/.*",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "(.*\\\/purchase\\\/success\\\/(student_discount|student|student-intro|headspace-student|carrier_student_discount|hulu-showtime-student|hulu-showtime-student-intro|student_trial_3_months)\\\/)|(.*\\\/student\\\/success\\\/.*)",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "(.*\\\/purchase\\\/success\\\/family.*)",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 41],
                "arg1": "receipt"
            }, {
                "function": "_eq",
                "arg0": ["macro", 42],
                "arg1": "premium"
            }, {
                "function": "_eq",
                "arg0": ["macro", 42],
                "arg1": "three_for_x"
            }, {
                "function": "_eq",
                "arg0": ["macro", 42],
                "arg1": "trial_30_days"
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "(.*\\\/purchase\\\/success\\\/comeback\\\/.*)|(.*\\\/purchase\\\/success\\\/come-back\\\/.*)",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "\\\/purchase\\\/success\\\/two_for_x",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "afterLoad"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": ",i00,"
            }, {
                "function": "_cn",
                "arg0": ["macro", 37],
                "arg1": "www-testing.spotify.net"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "purchase"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "success"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "premium"
            }, {
                "function": "_cn",
                "arg0": ["macro", 43],
                "arg1": "0"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "trial_"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "(.*\\\/purchase\\\/success\\\/intro\\\/.*)|(.*\\\/purchase\\\/success\\\/three_for_x\\\/.*)|(.*spotify\\.com\\\/(.*)\\\/purchase\\\/success\\\/3m-for-cheap.*)",
                "ignore_case": true
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "headspace"
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "((.*\\\/student\\\/success\\\/.*)|(.*\\\/purchase\\\/success\\\/.*))"
            }, {
                "function": "_re",
                "arg0": ["macro", 37],
                "arg1": "www-(staging|local|testing).spotify.(com|net)"
            }, {
                "function": "_eq",
                "arg0": ["macro", 7],
                "arg1": "jp"
            }, {
                "function": "_cn",
                "arg0": ["macro", 46],
                "arg1": "spotify.com"
            }, {
                "function": "_cn",
                "arg0": ["macro", 46],
                "arg1": "download.scdn.co"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.linkClick"
            }, {
                "function": "_re",
                "arg0": ["macro", 47],
                "arg1": "(^$|((^|,)154771_454($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "prepaid-offer"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "payg_"
            }, {
                "function": "_cn",
                "arg0": ["macro", 37],
                "arg1": "spotifypremium.jp"
            }, {
                "function": "_cn",
                "arg0": ["macro", 37],
                "arg1": "spotifypremium.co"
            }, {
                "function": "_re",
                "arg0": ["macro", 37],
                "arg1": "www-(testing|staging).spotify.(com|net)"
            }, {
                "function": "_cn",
                "arg0": ["macro", 49],
                "arg1": "chase"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "GAEventMorpheus"
            }, {
                "function": "_eq",
                "arg0": ["macro", 54],
                "arg1": "true"
            }, {
                "function": "_re",
                "arg0": ["macro", 56],
                "arg1": "((5|4)\\d{2})"
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "spotify\\.com\\\/[a-zA-Z]{2}\\\/(student\\\/)|(student\\\/\\?.*$)",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/.*\/student(|\/)$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/(\\w{2}|\\w{2}-\\w{2})\/purchase\/success\/hulu-showtime-student$",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 37],
                "arg1": "www.spotify.com"
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "(.*\\\/(purchase|student)\\\/success\\\/(student_discount|student|headspace-student|carrier_student_discount|hulu-showtime-student|carrier_payg_student_1_month|payg_student_1_month)\\\/)",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "purchase.*success.*comeback|(.*spotify\\.com\\\/(.*)\\\/purchase\\\/success\\\/winback-3m-for-1.*)",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "(.*\\\/purchase\\\/success\\\/(family|familyplan6|familyplan2)\\\/)",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": ".*\\\/purchase\\\/success\\\/trial_60_days\\\/.*",
                "ignore_case": true
            }, {
                "function": "_cn",
                "arg0": ["macro", 51],
                "arg1": "Account Pages"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "GAEvent"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "\\\/jp\\\/info",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 7],
                "arg1": "us"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": ".*\/premium\/$",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "GAEvent"
            }, {
                "function": "_re",
                "arg0": ["macro", 37],
                "arg1": "www.spotify.com|open.spotify.com",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/.*\/signup\/$",
                "ignore_case": true
            }, {
                "function": "_sw",
                "arg0": ["macro", 44],
                "arg1": "\/us\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "GANonInteractiveEvent"
            }, {
                "function": "_eq",
                "arg0": ["macro", 65],
                "arg1": "undefined"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": ".*\/purchase\/success\/2_for_1(|\/)$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": ".*\/purchase\/success\/payg_1_day(|\/)$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": ".*\/purchase\/success\/payg_7_day(|\/)$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": ".*\/student(\/|)$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "student_get_premium_button|student_get_hulu_button"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "\/br\/student"
            }, {
                "function": "_re",
                "arg0": ["macro", 66],
                "arg1": "(promo|premium)\\-tab",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 47],
                "arg1": "(^$|((^|,)154771_1231($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\\\/[\\w]{2}-?[\\w]{0,2}\\\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 48],
                "arg1": ".*badges\/apple.*png",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.click"
            }, {
                "function": "_re",
                "arg0": ["macro", 48],
                "arg1": ".*badges\/google.*png",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "(.*\\\/purchase\\\/success\\\/student\\_trial\\_3_months.*)",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "(.*\\\/purchase\\\/success\\\/trial\\_3\\_months.*)",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "spotify\\.com\\\/jp\\\/(premium\\\/)|(premium\\\/\\?.*$)"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "\\\/promo\\\/60dt\\\/",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "(.*\\\/student\\\/success\\\/hulu-showtime-student\\\/.*)",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "(.*\\\/(purchase|success)\\\/hulu-showtime-student-trial\\\/.*)",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "(.*\\\/(student|purchase)\\\/success\\\/(student-intro.*|student_trial.*|student_hulu_showtime_trial_3_months))",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "(.*\\\/purchase\\\/success\\\/hulu-premium\\\/.*)",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "(.*\\\/purchase\\\/success\\\/hulu-premium-30-day-trial\\\/.*)",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "\/.*\/purchase\/success\/hulu\/$",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 71],
                "arg1": "true"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.triggerGroup"
            }, {
                "function": "_re",
                "arg0": ["macro", 47],
                "arg1": "(^$|((^|,)154771_2155($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/.*\/free\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 66],
                "arg1": "^free-download-app$|^nav-link-download$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 66],
                "arg1": "^nav-link-upgrade$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": ".*\\\/(student|purchase)\\\/success\\\/(student-intro|student_trial|student-3m-for-cheap).*",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "(^\/(\\w{2}|\\w{2}-\\w{2})\\\/purchase\\\/success\\\/hulu-intro-2-month\\\/?$)",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/(us|uk|br|mx|cl)\/promo\/paulmccartney(|\/)$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/fr\/student(|\/)$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "spotify\\.com\\\/[a-zA-Z]{2}\\\/(family\\\/)|(family\\\/\\?.*$)"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/(\\w{2}|\\w{2}-\\w{2})\/family(|\/)$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "spotify\\.com\\\/[a-zA-Z]{2}\\\/(family\\\/)|(family\\\/\\?.*$)",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 75],
                "arg1": "^btn btn-white btn-cta $",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 76],
                "arg1": "^GET STARTED$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 47],
                "arg1": "(^$|((^|,)154771_1490($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "(.*\\\/googlehome\\\/redeem\\\/.*)",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/(\\w{2}|\\w{2}-\\w{2})\/google-home\/success\/(|\/)$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "\\\/jp\\\/(purchase|student)\\\/success"
            }, {
                "function": "_eq",
                "arg0": ["macro", 77],
                "arg1": "signup"
            }, {
                "function": "_cn",
                "arg0": ["macro", 78],
                "arg1": "why-not-available"
            }, {
                "function": "_re",
                "arg0": ["macro", 47],
                "arg1": "(^$|((^|,)154771_1541($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/(\\w{3}|\\w{2}|\\w{2}-\\w{2})\/why-not-available(|\/)$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/my-en\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "(.*\\\/purchase\\\/success\\\/duo\\\/.*)",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "spotify\\.com\\\/(.{2,5})\\\/duo\\\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "(.*\\\/purchase\\\/success\\\/payg_1_month\\\/.*)",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/ca-en\/purchase\/success\/full-price-premium(|\/)$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/ca-en\/googlehome\/register(|\/)$",
                "ignore_case": true
            }, {
                "function": "_cn",
                "arg0": ["macro", 44],
                "arg1": "free"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/fr\/free\/$"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/us\/promo\/philly\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "\\\/jp\\\/(purchase|student)\\\/success\\\/trial\\_60\\_days\\\/"
            }, {
                "function": "_eq",
                "arg0": ["macro", 77],
                "arg1": "select-button-signup-fb"
            }, {
                "function": "_sw",
                "arg0": ["macro", 25],
                "arg1": "https:\/\/www.spotify.com"
            }, {
                "function": "_ew",
                "arg0": ["macro", 25],
                "arg1": "student\/"
            }, {
                "function": "_eq",
                "arg0": ["macro", 76],
                "arg1": "Sign up"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "(.*\\\/purchase\\\/success\\\/trial_3_month)"
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "(.*\\\/purchase\\\/success\\\/duo_trial_3_months)"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "nonIdle"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "(.*\\\/purchase\\\/success\\\/family-intro.*)",
                "ignore_case": true
            }, {
                "function": "_gt",
                "arg0": ["macro", 86],
                "arg1": "0"
            }, {
                "function": "_lt",
                "arg0": ["macro", 86],
                "arg1": "20"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "optimize"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/id\/student\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/(ph|ph-en)\/student\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 76],
                "arg1": "^DAPATKAN PREMIUM$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 76],
                "arg1": "^GET PREMIUM$",
                "ignore_case": true
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "https:\/\/www.spotify.com\/ie\/kids\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "^apw.*"
            }, {
                "function": "_eq",
                "arg0": ["macro", 7],
                "arg1": "uk"
            }, {
                "function": "_re",
                "arg0": ["macro", 47],
                "arg1": "(^$|((^|,)154771_1815($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "qualarooResponse"
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "\\\/lite\\\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 67],
                "arg1": ".*\\\/(purchase|student)\\\/success\\\/.*trial_1_month\\\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": ",t00,"
            }, {
                "function": "_cn",
                "arg0": ["macro", 44],
                "arg1": "\/stations\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 93],
                "arg1": "subscription"
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "(.*\\\/purchase\\\/success\\\/trial_1_month_carrier_billing.*)",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "manualPageview"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "apw-Repetitive Purchase page load|apw-Different products on same browser|Localstorage Error"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "\/purchase\/success\/payg_12_month"
            }, {
                "function": "_eq",
                "arg0": ["macro", 25],
                "arg1": "https:\/\/listenlocal.byspotify.com\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "\\\/jp\\\/(purchase|student)\\\/success\\\/(.*trial_3_months|family-intro)"
            }, {
                "function": "_eq",
                "arg0": ["macro", 76],
                "arg1": "Connect with Spotify"
            }, {
                "function": "_ge",
                "arg0": ["macro", 86],
                "arg1": "0"
            }, {
                "function": "_lt",
                "arg0": ["macro", 86],
                "arg1": "5"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.pageError"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "eec.impressionView"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\\\/us\\\/duo\\\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\\\/(de|uk|us)\\\/duo\\\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\\\/(fr|ca\\-en|de|us|au|uk|es)\\\/duo\\\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "(.{2,5})\\\/purchase\\\/success",
                "ignore_case": true
            }, {
                "function": "_le",
                "arg0": ["macro", 86],
                "arg1": "50"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\\\/us\\\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\\\/(fr|(it|ca)\\-en|de|tr|it|us|au|uk|ca\\-fr|es)\\\/duo\\\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\\\/jp\\\/purchase\\\/success\\\/payg_12_month\\\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\\\/([a-zA-Z]+)\\\/purchase\\\/success\\\/duo_master_2m_for_1_carrier_billing\\\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\\\/([a-zA-Z]+)\\\/purchase\\\/success\\\/new_family_master_2m_for_1_carrier_billing\\\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\\\/([a-zA-Z]+)\\\/purchase\\\/success\\\/duo_trial_2_month\\\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\\\/([a-zA-Z]+)\\\/purchase\\\/success\\\/family_trial_2_month\\\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\\\/([a-zA-Z]+)\\\/purchase\\\/success\\\/trial_2_month\\\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\\\/([a-zA-Z]+)\\\/purchase\\\/success\\\/student_trial_2_month\\\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 102],
                "arg1": "^(undefined|null|0|false|NaN|)$",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "OneTrustLoaded"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\\\/us\\\/premium\\\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\\\/us\\\/promo\\\/endofsummer\\\/$",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "promoView"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "ecc.promotionView|eec.promotionView"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "promoClick|eec.promotionClick"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\\\/tr\\\/promo\\\/summer\\\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\\\/pl\\\/promo\\\/summerpoland\\\/$",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "accountInfoPush"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\\\/(fr|de|ca\\-en|us|uk)\\\/family\\\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\\\/(fr|de|ca\\-en|us|uk)\\\/kids\\\/$",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 89],
                "arg1": "productClick"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "productClick"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "(.*\\\/purchase\\\/success\\\/bts_student_trial_3_months\\\/.*)"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/.*\/family\/$",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.dom"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/.*\/kids\/?$",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.load"
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "\\\/jp\\\/(purchase|student)\\\/success\\\/(.*trial_1_month)"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/(us|uk)\\\/(family|kids)\/?$",
                "ignore_case": true
            }, {
                "function": "_cn",
                "arg0": ["macro", 51],
                "arg1": "Interaction"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.event"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "www.spotifypremium.jp\/campusplaylist\/"
            }, {
                "function": "_eq",
                "arg0": ["macro", 76],
                "arg1": "投票"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "spotifypremium.jp\/campusplaylist\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "purchase\/success\/payg_12_month\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 44],
                "arg1": "promo\/philly"
            }, {
                "function": "_cn",
                "arg0": ["macro", 113],
                "arg1": "undefined"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "plan-sensitive-storefront-load"
            }, {
                "function": "_eq",
                "arg0": ["macro", 44],
                "arg1": "\/id\/promo\/mini-indonesia\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "\/(in|in-en)\/promo\/mini-india\/",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "https:\/\/www.spotify.com\/(in|in-en)\/purchase\/success\/premium_mini_7d\/",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "https:\/\/www.spotify.com\/(in|in-en)\/purchase\/success\/premium_mini_1d\/",
                "ignore_case": true
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "https:\/\/www.spotify.com\/id\/purchase\/success\/premium_mini_7d\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "https:\/\/www.spotify.com\/id\/purchase\/success\/premium_mini_1d\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "eec.checkout.*"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "eec.remove"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "https:\/\/www.spotify.com\/us\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 44],
                "arg1": "\/promo\/roddyricch\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 83],
                "arg1": "uk|ca-en|au|br|mx",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/(.*)\/duo\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 7],
                "arg1": "mx|us|br",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "blockPageview"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "(\\\/(uk|se|no|nl|fi|dk)\\\/headspace\\\/)|((uk|is|ie)\\\/premium\\\/)|((no)\\\/$)",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "https:\/\/www.spotify.com\/kr-(ko|en)\/purchase\/success\/trial_3_months\/",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "https:\/\/www.spotify.com\/kr-(ko|en)\/purchase\/success\/duo_trial_3_months\/",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "https:\/\/www.spotify.com\/kr-(ko|en)\/purchase\/success\/(premium|duo)?\/",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "(kr-en|kr-ko|in|id)\\\/(premium|promo\\\/mini-india|promo\\\/mini-indonesia)\\\/|\\\/referral\\\/",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "(\\\/(kr-ko|kr-en)\\\/$)"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.scrollDepth"
            }, {
                "function": "_re",
                "arg0": ["macro", 47],
                "arg1": "(^$|((^|,)154771_2530($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 44],
                "arg1": "\/in-en\/promo\/affiliate12month\/"
            }, {
                "function": "_eq",
                "arg0": ["macro", 44],
                "arg1": "\/pl\/promo\/winterawakening\/"
            }, {
                "function": "_eq",
                "arg0": ["macro", 37],
                "arg1": "www.spotifypremium.jp"
            }, {
                "function": "_cn",
                "arg0": ["macro", 44],
                "arg1": "\/music_culture\/"
            }, {
                "function": "_eq",
                "arg0": ["macro", 48],
                "arg1": "https:\/\/www.spotify.com\/jp\/premium\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 47],
                "arg1": "(^$|((^|,)154771_2547($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 75],
                "arg1": "btn-tweet"
            }, {
                "function": "_cn",
                "arg0": ["macro", 48],
                "arg1": "https:\/\/twitter.com\/intent\/tweet"
            }, {
                "function": "_re",
                "arg0": ["macro", 47],
                "arg1": "(^$|((^|,)154771_2543($|,)))"
            }, {
                "function": "_sw",
                "arg0": ["macro", 48],
                "arg1": "https:\/\/www.spotifypremium.jp\/music_culture\/entry\/?postid"
            }, {
                "function": "_re",
                "arg0": ["macro", 47],
                "arg1": "(^$|((^|,)154771_2545($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "\/student.html",
                "ignore_case": true
            }, {
                "function": "_cn",
                "arg0": ["macro", 44],
                "arg1": "\/music_student_id\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 44],
                "arg1": "\/music_student_id\/input1\/"
            }, {
                "function": "_eq",
                "arg0": ["macro", 44],
                "arg1": "\/us\/promo\/atlanta\/"
            }, {
                "function": "_eq",
                "arg0": ["macro", 44],
                "arg1": "\/us\/promo\/chicago\/"
            }, {
                "function": "_eq",
                "arg0": ["macro", 44],
                "arg1": "\/us\/purchase\/success\/lpa-trial-2m\/"
            }, {
                "function": "_eq",
                "arg0": ["macro", 44],
                "arg1": "\/jp\/student\/success\/student_trial_1_month\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/(id|ph-en|th-th)\/promo\/day6\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/(.*)\/onlyyou\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/(us|uk|de|ca-(en|fr))\/onlyyou\/$",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 44],
                "arg1": "\/"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "eec.productClick"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "(\\\/jp\\\/purchase\\\/success\\\/trial\\_3\\_months.*)",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 44],
                "arg1": "\/in-en\/plan\/mini\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 7],
                "arg1": "in",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 44],
                "arg1": "\/jp\/premium\/"
            }, {
                "function": "_eq",
                "arg0": ["macro", 44],
                "arg1": "\/brand\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "\/(ph-en|id|th-th)\/promo\/twice\/",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "\/(ph-en|id|th-th)\/promo\/seventeen\/",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 44],
                "arg1": "\/us\/student\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 44],
                "arg1": "\/purchase\/success\/payg_3_month\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 83],
                "arg1": "jp",
                "ignore_case": true
            }, {
                "function": "_cn",
                "arg0": ["macro", 44],
                "arg1": "\/purchase\/success\/payg_6_month\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 44],
                "arg1": "household"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "\/(.*)\/purchase\/success\/spotify-plus\/",
                "ignore_case": true
            }, {
                "function": "_cn",
                "arg0": ["macro", 44],
                "arg1": "\/success\/duo_trial_1_month\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 7],
                "arg1": "jp",
                "ignore_case": true
            }, {
                "function": "_cn",
                "arg0": ["macro", 44],
                "arg1": "\/success\/family_trial_1_month\/"
            }, {
                "function": "_eq",
                "arg0": ["macro", 44],
                "arg1": "\/in-en\/premium\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 44],
                "arg1": "purchase\/success\/payg"
            }, {
                "function": "_eq",
                "arg0": ["macro", 7],
                "arg1": "in"
            }, {
                "function": "_cn",
                "arg0": ["macro", 44],
                "arg1": "purchase\/success\/premium_mini_1d\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 44],
                "arg1": "\/purchase\/success\/premium_mini_7d\/"
            }, {
                "function": "_eq",
                "arg0": ["macro", 44],
                "arg1": "\/ph-en\/promo\/sb19\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "(.*\\\/purchase\\\/success\\\/individual-prepaid\\\/.*)",
                "ignore_case": true
            }, {
                "function": "_cn",
                "arg0": ["macro", 44],
                "arg1": "\/mini\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 83],
                "arg1": "^(ph-en)|(ph-tl)$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 83],
                "arg1": "^(th-th)|(th-en)$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 83],
                "arg1": "^(vn-vi)|(vn-en)$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 83],
                "arg1": "^(my-en)|(my-ms)$",
                "ignore_case": true
            }, {
                "function": "_cn",
                "arg0": ["macro", 76],
                "arg1": "Download"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "\/download\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 44],
                "arg1": "\/promo\/eve"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "OneTrustGroupsUpdated"
            }, {
                "function": "_eq",
                "arg0": ["macro", 76],
                "arg1": "Premium"
            }, {
                "function": "_eq",
                "arg0": ["macro", 83],
                "arg1": "jp"
            }, {
                "function": "_eq",
                "arg0": ["macro", 76],
                "arg1": "GET 3 MONTHS FREE"
            }, {
                "function": "_eq",
                "arg0": ["macro", 76],
                "arg1": "START 3 MONTHS FREE"
            }, {
                "function": "_cn",
                "arg0": ["macro", 44],
                "arg1": "referral"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "createReferralCTA|productClick|referralError"
            }, {
                "function": "_cn",
                "arg0": ["macro", 44],
                "arg1": "\/success\/trial_3_months\/"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "fieldValidationError"
            }, {
                "function": "_cn",
                "arg0": ["macro", 124],
                "arg1": "your current plan"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "pageTranslated"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "\/(bd-bn|bd-en)\/purchase\/success\/student_1_month_carrier_billing\/",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/id\/mini\/$",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "checkboxticked"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": ".*\\\/purchase\\\/success\\\/trial_1_month\\\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 83],
                "arg1": "us",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "\/purchase\/success\/duo_trial_1_month\/",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "\/purchase\/success\/family_trial_1_month\/",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "\/student\/success\/student_hulu_showtime_trial_1_month\/",
                "ignore_case": true
            }, {
                "function": "_cn",
                "arg0": ["macro", 44],
                "arg1": "promo\/premium1mes"
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "(.*\\\/purchase\\\/success\\\/redeem\\\/.*)"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "(\\\/purchase\\\/offer\\\/)",
                "ignore_case": true
            }, {
                "function": "_cn",
                "arg0": ["macro", 44],
                "arg1": "account\/overview"
            }, {
                "function": "_cn",
                "arg0": ["macro", 106],
                "arg1": "premium"
            }, {
                "function": "_cn",
                "arg0": ["macro", 48],
                "arg1": "account\/subscription\/change"
            }, {
                "function": "_cn",
                "arg0": ["macro", 44],
                "arg1": "account\/subscription\/change"
            }, {
                "function": "_cn",
                "arg0": ["macro", 48],
                "arg1": "account\/subscription\/change\/intent"
            }, {
                "function": "_cn",
                "arg0": ["macro", 75],
                "arg1": "Button"
            }, {
                "function": "_cn",
                "arg0": ["macro", 92],
                "arg1": "account\/subscription\/change"
            }, {
                "function": "_cn",
                "arg0": ["macro", 44],
                "arg1": "account\/cancel"
            }, {
                "function": "_cn",
                "arg0": ["macro", 75],
                "arg1": "ButtonInner-sc"
            }, {
                "function": "_cn",
                "arg0": ["macro", 44],
                "arg1": "account\/cancel\/plans"
            }, {
                "function": "_cn",
                "arg0": ["macro", 75],
                "arg1": "ButtonInner-sc-"
            }, {
                "function": "_cn",
                "arg0": ["macro", 44],
                "arg1": "account\/cancel\/benefits"
            }, {
                "function": "_cn",
                "arg0": ["macro", 44],
                "arg1": "\/keikonecesario"
            }, {
                "function": "_re",
                "arg0": ["macro", 83],
                "arg1": "^sg$",
                "ignore_case": true
            }, {
                "function": "_cn",
                "arg0": ["macro", 44],
                "arg1": "\/mahalini"
            }, {
                "function": "_cn",
                "arg0": ["macro", 44],
                "arg1": "\/urboytj"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "\/de\/promo\/audiobookde\/?",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "eec.checkout.step1"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "eec.checkout.step3"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "eec.addToCart"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "purchase_success"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "purchase\/success"
            }, {
                "function": "_sw",
                "arg0": ["macro", 44],
                "arg1": "\/jp\/watch-now\/learn-more"
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "\\\/premium|\\\/student|\\\/family|\\\/hulu",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 37],
                "arg1": "^promo.spotify.com$|^www.spotify.com$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": ".*(th-th|th|id|my-en|my|ph|ph-en).*",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/tw(|\/).*",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/tw\/signup(|\/)$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 27],
                "arg1": "^(?!\\s*$).+"
            }, {
                "function": "_re",
                "arg0": ["macro", 26],
                "arg1": "^(?!\\s*$).+"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "optimizeBucketEvent"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/id\/free\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/(ph|ph-en)\/free\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/th-th\/free\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/br\/free\/$",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 26],
                "arg1": "undefined"
            }, {
                "function": "_re",
                "arg0": ["macro", 136],
                "arg1": "en|es",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "\\\/jp\\\/(purchase|student)\\\/success\\\/(trial_1_month|premium|student_trial_1_months|student_discount|carrier_student_discount|family_trial_1_month|family*|payg_12_month|duo*)"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\\\/(fr|(it|ca)-en|de|it|us|au|uk|es)\\\/duo\\\/$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 7],
                "arg1": "us|tr|de|jp"
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/de\/family\/?$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/de\/kids\/?$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/ca-(en|fr)\\\/(family|kids)\/?$",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 44],
                "arg1": "^\/uk\/(kids|family)\/?$",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 83],
                "arg1": "us"
            }, {
                "function": "_re",
                "arg0": ["macro", 7],
                "arg1": "us|mx"
            }, {
                "function": "_cn",
                "arg0": ["macro", 83],
                "arg1": "jp"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 6, 7, 8, 245, 364, 365, 366, 400, 460]
                ],
                [
                    ["if", 3, 4],
                    ["add", 9, 15, 368]
                ],
                [
                    ["if", 4, 5],
                    ["add", 10, 369]
                ],
                [
                    ["if", 4, 6],
                    ["add", 11, 15, 39, 61, 68, 133, 147, 194, 370, 384, 385, 386, 416]
                ],
                [
                    ["if", 4, 7],
                    ["add", 12, 15, 23, 34, 61, 68, 86, 134, 151, 317, 371, 384, 385, 386, 417],
                    ["block", 71]
                ],
                [
                    ["if", 4, 8],
                    ["add", 13, 15, 20, 61, 68, 135, 190, 318, 367, 378, 384, 385, 386, 418],
                    ["block", 71]
                ],
                [
                    ["if", 4, 9, 10],
                    ["add", 14]
                ],
                [
                    ["if", 4, 9, 11],
                    ["add", 14]
                ],
                [
                    ["if", 4, 9, 12],
                    ["add", 14]
                ],
                [
                    ["if", 4, 13],
                    ["add", 15, 17, 375]
                ],
                [
                    ["if", 4, 14],
                    ["add", 15, 16, 374]
                ],
                [
                    ["if", 4],
                    ["add", 18, 19, 0, 35, 44, 50, 71, 100, 124, 146, 287, 301, 316, 317, 318, 372, 376, 382, 4, 3, 459, 482]
                ],
                [
                    ["if", 15],
                    ["add", 18]
                ],
                [
                    ["if", 18],
                    ["add", 19, 0, 35, 44, 50, 71, 100, 5, 124, 146, 372, 376, 382, 459, 229, 232, 287, 301, 4, 3, 440, 446, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 342, 343, 344, 347, 349, 350, 351, 352, 355, 356, 357, 358, 359, 360, 361, 362, 363]
                ],
                [
                    ["if", 4, 19, 20, 21, 22],
                    ["add", 21]
                ],
                [
                    ["if", 4, 19, 20, 22, 23],
                    ["add", 22]
                ],
                [
                    ["if", 4, 24],
                    ["add", 24, 48, 49, 68, 385, 386]
                ],
                [
                    ["if", 4, 19, 20, 22, 25],
                    ["add", 25]
                ],
                [
                    ["if", 15, 26],
                    ["add", 26, 42, 74, 110, 113, 149, 193, 288, 313, 315, 316, 345, 377, 393, 397, 461, 472],
                    ["block", 71, 100, 473]
                ],
                [
                    ["if", 18, 28],
                    ["add", 27, 131, 132, 421, 442]
                ],
                [
                    ["if", 31, 32],
                    ["unless", 29, 30],
                    ["add", 28]
                ],
                [
                    ["if", 4, 19, 20, 22, 33],
                    ["add", 29]
                ],
                [
                    ["if", 4, 19, 20, 34],
                    ["add", 30, 136, 419]
                ],
                [
                    ["if", 39],
                    ["add", 31]
                ],
                [
                    ["if", 4, 40],
                    ["add", 32, 101]
                ],
                [
                    ["if", 4, 41],
                    ["add", 33]
                ],
                [
                    ["if", 4, 42],
                    ["add", 36, 45, 85]
                ],
                [
                    ["if", 4, 43],
                    ["add", 36, 45, 85, 36, 45, 85]
                ],
                [
                    ["if", 4, 44, 45],
                    ["add", 37, 191]
                ],
                [
                    ["if", 4, 46],
                    ["add", 37, 191, 341]
                ],
                [
                    ["if", 4, 47],
                    ["add", 38]
                ],
                [
                    ["if", 4, 48],
                    ["add", 40, 192]
                ],
                [
                    ["if", 4, 49],
                    ["add", 41]
                ],
                [
                    ["if", 4, 22, 44, 45],
                    ["add", 42, 149, 193, 315]
                ],
                [
                    ["if", 50, 51],
                    ["add", 43]
                ],
                [
                    ["if", 4, 52],
                    ["add", 46, 47, 379, 380, 381]
                ],
                [
                    ["if", 0, 53],
                    ["add", 51]
                ],
                [
                    ["if", 4, 54],
                    ["add", 52, 142, 148, 165, 405, 52, 142, 165, 373, 394, 405]
                ],
                [
                    ["if", 55],
                    ["add", 53, 130]
                ],
                [
                    ["if", 4, 56, 57],
                    ["add", 54]
                ],
                [
                    ["if", 18, 58],
                    ["add", 55]
                ],
                [
                    ["if", 50, 59],
                    ["add", 56]
                ],
                [
                    ["if", 18],
                    ["unless", 60],
                    ["add", 57]
                ],
                [
                    ["if", 4, 56, 61],
                    ["add", 58]
                ],
                [
                    ["if", 4, 56, 62],
                    ["add", 59]
                ],
                [
                    ["if", 4, 56, 63],
                    ["add", 60]
                ],
                [
                    ["if", 56, 64, 65],
                    ["add", 62]
                ],
                [
                    ["if", 18, 66],
                    ["add", 63]
                ],
                [
                    ["if", 31, 67, 68],
                    ["add", 64]
                ],
                [
                    ["if", 4, 35],
                    ["add", 1],
                    ["block", 0, 221]
                ],
                [
                    ["if", 4, 36],
                    ["add", 1],
                    ["block", 0, 221]
                ],
                [
                    ["if", 4, 22, 69],
                    ["add", 65]
                ],
                [
                    ["if", 56, 70, 71],
                    ["add", 66]
                ],
                [
                    ["if", 56, 71, 72],
                    ["add", 67]
                ],
                [
                    ["if", 4, 73],
                    ["add", 68, 385, 386, 417]
                ],
                [
                    ["if", 4, 74],
                    ["add", 68, 385, 386]
                ],
                [
                    ["if", 4, 75],
                    ["add", 69, 373, 387, 473]
                ],
                [
                    ["if", 4, 76],
                    ["add", 70]
                ],
                [
                    ["if", 4, 80],
                    ["add", 72]
                ],
                [
                    ["if", 4, 81],
                    ["add", 72]
                ],
                [
                    ["if", 4, 56, 82],
                    ["add", 73]
                ],
                [
                    ["if", 83, 84, 85],
                    ["add", 75, 286]
                ],
                [
                    ["if", 71, 86, 87],
                    ["add", 76, 81, 82, 389]
                ],
                [
                    ["if", 4, 86],
                    ["add", 77, 79, 80, 390]
                ],
                [
                    ["if", 71, 86, 88],
                    ["add", 78, 83, 84, 391]
                ],
                [
                    ["if", 4, 89],
                    ["add", 86, 134, 317]
                ],
                [
                    ["if", 4, 78],
                    ["add", 86, 88, 317],
                    ["block", 71]
                ],
                [
                    ["if", 4, 77],
                    ["add", 86, 317],
                    ["block", 71]
                ],
                [
                    ["if", 4, 45, 90],
                    ["add", 87]
                ],
                [
                    ["if", 4, 79],
                    ["add", 89],
                    ["block", 71]
                ],
                [
                    ["if", 4, 45, 91],
                    ["add", 90]
                ],
                [
                    ["if", 18, 45, 92],
                    ["add", 91, 92, 395]
                ],
                [
                    ["if", 4, 93],
                    ["add", 93, 144]
                ],
                [
                    ["if", 4, 94],
                    ["add", 93]
                ],
                [
                    ["if", 4, 95],
                    ["add", 93]
                ],
                [
                    ["if", 31, 94, 96, 97, 98],
                    ["add", 94]
                ],
                [
                    ["if", 4, 99],
                    ["add", 95, 96]
                ],
                [
                    ["if", 4, 100],
                    ["add", 95]
                ],
                [
                    ["if", 18, 101],
                    ["add", 97, 401, 402, 404, 441]
                ],
                [
                    ["if", 31, 102, 103, 104],
                    ["add", 98]
                ],
                [
                    ["if", 4, 45, 105],
                    ["add", 99]
                ],
                [
                    ["if", 4, 26],
                    ["add", 2, 125, 127, 388],
                    ["block", 0, 221]
                ],
                [
                    ["if", 4, 106],
                    ["add", 102]
                ],
                [
                    ["if", 4, 107],
                    ["add", 103, 140, 189, 195, 422]
                ],
                [
                    ["if", 4, 108],
                    ["add", 104, 420]
                ],
                [
                    ["if", 4, 109],
                    ["add", 105]
                ],
                [
                    ["if", 4, 110],
                    ["add", 106]
                ],
                [
                    ["if", 4, 111],
                    ["add", 107]
                ],
                [
                    ["if", 18, 112],
                    ["add", 108, 410]
                ],
                [
                    ["if", 18, 113],
                    ["add", 109]
                ],
                [
                    ["if", 18, 115],
                    ["add", 111]
                ],
                [
                    ["if", 71, 116],
                    ["add", 112]
                ],
                [
                    ["if", 71, 117, 118, 119],
                    ["add", 114]
                ],
                [
                    ["if", 4, 120],
                    ["add", 115, 133, 416]
                ],
                [
                    ["if", 4, 121],
                    ["add", 116, 189]
                ],
                [
                    ["if", 122],
                    ["add", 117]
                ],
                [
                    ["if", 4, 123],
                    ["add", 118, 135, 190, 418]
                ],
                [
                    ["if", 124, 125, 126],
                    ["add", 119]
                ],
                [
                    ["if", 4, 127],
                    ["add", 120, 412]
                ],
                [
                    ["if", 4, 128],
                    ["add", 121, 415]
                ],
                [
                    ["if", 71, 127, 129],
                    ["add", 122, 413]
                ],
                [
                    ["if", 71, 128, 130],
                    ["add", 123, 414]
                ],
                [
                    ["if", 4, 131],
                    ["add", 126]
                ],
                [
                    ["if", 132],
                    ["add", 128]
                ],
                [
                    ["if", 84, 133, 134],
                    ["add", 129]
                ],
                [
                    ["if", 135],
                    ["add", 137]
                ],
                [
                    ["if", 18, 136],
                    ["add", 138]
                ],
                [
                    ["if", 4, 137],
                    ["add", 139]
                ],
                [
                    ["if", 4, 38],
                    ["add", 141],
                    ["block", 0, 221]
                ],
                [
                    ["if", 4, 139],
                    ["add", 143]
                ],
                [
                    ["if", 18, 140],
                    ["add", 145]
                ],
                [
                    ["if", 4, 141],
                    ["add", 150]
                ],
                [
                    ["if", 142],
                    ["add", 152]
                ],
                [
                    ["if", 143],
                    ["add", 153]
                ],
                [
                    ["if", 4, 144],
                    ["add", 154, 208]
                ],
                [
                    ["if", 4, 145],
                    ["add", 155, 158]
                ],
                [
                    ["if", 4, 146],
                    ["add", 156, 424, 425, 490],
                    ["block", 423]
                ],
                [
                    ["if", 71, 145, 147],
                    ["add", 157]
                ],
                [
                    ["if", 148, 149, 150],
                    ["add", 159]
                ],
                [
                    ["if", 2],
                    ["add", 160]
                ],
                [
                    ["if", 151],
                    ["add", 161, 303]
                ],
                [
                    ["if", 18, 152],
                    ["add", 162]
                ],
                [
                    ["if", 18, 153],
                    ["add", 163]
                ],
                [
                    ["if", 4, 154],
                    ["add", 164]
                ],
                [
                    ["if", 18, 148, 155, 156],
                    ["add", 166]
                ],
                [
                    ["if", 4, 157],
                    ["add", 167, 168, 169, 427]
                ],
                [
                    ["if", 4, 158],
                    ["add", 170, 428]
                ],
                [
                    ["if", 4, 159],
                    ["add", 171, 263, 429]
                ],
                [
                    ["if", 4, 160],
                    ["add", 172]
                ],
                [
                    ["if", 4, 161],
                    ["add", 173]
                ],
                [
                    ["if", 4, 162],
                    ["add", 174]
                ],
                [
                    ["if", 4, 163],
                    ["add", 175]
                ],
                [
                    ["if", 4, 164],
                    ["add", 176]
                ],
                [
                    ["if", 4, 165],
                    ["add", 177]
                ],
                [
                    ["if", 167],
                    ["unless", 166],
                    ["add", 178]
                ],
                [
                    ["if", 4, 168],
                    ["add", 179]
                ],
                [
                    ["if", 4, 169],
                    ["add", 180]
                ],
                [
                    ["if", 170],
                    ["add", 181, 323]
                ],
                [
                    ["if", 171],
                    ["add", 181, 323]
                ],
                [
                    ["if", 172],
                    ["add", 182, 324]
                ],
                [
                    ["if", 4, 173],
                    ["add", 183]
                ],
                [
                    ["if", 4, 174],
                    ["add", 183]
                ],
                [
                    ["if", 175],
                    ["add", 184]
                ],
                [
                    ["if", 4, 176],
                    ["add", 185]
                ],
                [
                    ["if", 4, 177],
                    ["add", 186]
                ],
                [
                    ["if", 176, 178, 179],
                    ["add", 187]
                ],
                [
                    ["if", 177, 178, 179],
                    ["add", 188]
                ],
                [
                    ["if", 4, 180],
                    ["add", 196]
                ],
                [
                    ["if", 181, 182],
                    ["add", 197]
                ],
                [
                    ["if", 183, 184],
                    ["add", 197]
                ],
                [
                    ["if", 4, 185],
                    ["add", 198, 434, 435, 490]
                ],
                [
                    ["if", 184, 186],
                    ["add", 199]
                ],
                [
                    ["if", 187, 188],
                    ["add", 200]
                ],
                [
                    ["if", 4, 114],
                    ["add", 201, 202],
                    ["block", 5]
                ],
                [
                    ["if", 71, 189, 190],
                    ["add", 203, 204, 437, 438]
                ],
                [
                    ["if", 18, 191],
                    ["add", 205, 439]
                ],
                [
                    ["if", 4, 192],
                    ["add", 206]
                ],
                [
                    ["if", 4, 193],
                    ["add", 207]
                ],
                [
                    ["if", 4],
                    ["unless", 194],
                    ["add", 209]
                ],
                [
                    ["if", 195],
                    ["add", 210]
                ],
                [
                    ["if", 4, 196],
                    ["add", 211, 224, 226, 443]
                ],
                [
                    ["if", 4, 197],
                    ["add", 212]
                ],
                [
                    ["if", 4, 198],
                    ["add", 213, 282, 285]
                ],
                [
                    ["if", 4, 199],
                    ["add", 214, 281, 285]
                ],
                [
                    ["if", 4, 200],
                    ["add", 215]
                ],
                [
                    ["if", 4, 201],
                    ["add", 216]
                ],
                [
                    ["if", 202],
                    ["add", 217]
                ],
                [
                    ["if", 203],
                    ["add", 218]
                ],
                [
                    ["if", 4, 204],
                    ["add", 219, 234]
                ],
                [
                    ["if", 4, 205, 206],
                    ["add", 219]
                ],
                [
                    ["if", 4, 207],
                    ["add", 220]
                ],
                [
                    ["if", 4, 208],
                    ["add", 221]
                ],
                [
                    ["if", 18, 208],
                    ["add", 221]
                ],
                [
                    ["if", 4, 211],
                    ["add", 222]
                ],
                [
                    ["if", 4, 212],
                    ["add", 222]
                ],
                [
                    ["if", 4, 213],
                    ["add", 222]
                ],
                [
                    ["if", 4, 214],
                    ["add", 223]
                ],
                [
                    ["if", 215, 216, 217],
                    ["add", 225]
                ],
                [
                    ["if", 4, 218],
                    ["add", 227]
                ],
                [
                    ["if", 4, 219],
                    ["add", 228]
                ],
                [
                    ["if", 31, 220, 221, 222, 223],
                    ["add", 230, 447, 448, 449]
                ],
                [
                    ["if", 31, 220, 221, 224, 225, 226],
                    ["add", 231, 444, 451]
                ],
                [
                    ["if", 31, 220, 221, 227, 228],
                    ["add", 233, 445, 450]
                ],
                [
                    ["if", 18, 229],
                    ["add", 235, 241, 454]
                ],
                [
                    ["if", 18, 220, 230],
                    ["add", 235, 240, 241, 452, 454]
                ],
                [
                    ["if", 18, 220, 231],
                    ["add", 236, 453]
                ],
                [
                    ["if", 4, 232],
                    ["add", 237]
                ],
                [
                    ["if", 4, 233],
                    ["add", 238]
                ],
                [
                    ["if", 4, 234],
                    ["add", 239]
                ],
                [
                    ["if", 4, 235],
                    ["add", 242, 243, 244, 455, 456]
                ],
                [
                    ["if", 4, 236],
                    ["add", 246]
                ],
                [
                    ["if", 4, 237],
                    ["add", 247, 248, 249, 250, 255, 457]
                ],
                [
                    ["if", 4, 238],
                    ["add", 251, 252]
                ],
                [
                    ["if", 18, 220, 239],
                    ["add", 253]
                ],
                [
                    ["if", 240],
                    ["add", 254]
                ],
                [
                    ["if", 4, 241],
                    ["add", 256]
                ],
                [
                    ["if", 4, 242],
                    ["add", 257]
                ],
                [
                    ["if", 4, 63, 243],
                    ["add", 258]
                ],
                [
                    ["if", 4, 62, 243],
                    ["add", 258]
                ],
                [
                    ["if", 4, 244],
                    ["add", 259]
                ],
                [
                    ["if", 18, 220, 245],
                    ["add", 260]
                ],
                [
                    ["if", 4, 246],
                    ["add", 261]
                ],
                [
                    ["if", 4, 247],
                    ["add", 261]
                ],
                [
                    ["if", 4, 248],
                    ["add", 262]
                ],
                [
                    ["if", 4, 249, 250],
                    ["add", 264]
                ],
                [
                    ["if", 4, 250, 251],
                    ["add", 265]
                ],
                [
                    ["if", 18, 220, 252],
                    ["add", 266, 269, 270, 272, 462, 464, 468]
                ],
                [
                    ["if", 4, 253],
                    ["add", 267]
                ],
                [
                    ["if", 4, 254, 255],
                    ["add", 268, 275, 276, 465, 467, 469, 471]
                ],
                [
                    ["if", 4, 255, 256],
                    ["add", 271, 275, 276, 463, 466, 470, 471]
                ],
                [
                    ["if", 4, 257],
                    ["add", 273]
                ],
                [
                    ["if", 4, 258, 259],
                    ["add", 274, 283]
                ],
                [
                    ["if", 4, 260],
                    ["add", 277]
                ],
                [
                    ["if", 4, 261],
                    ["add", 278]
                ],
                [
                    ["if", 4, 262],
                    ["add", 279]
                ],
                [
                    ["if", 4, 259],
                    ["add", 280]
                ],
                [
                    ["if", 4, 259, 263],
                    ["add", 284]
                ],
                [
                    ["if", 4, 264, 265],
                    ["add", 289, 474, 478, 488, 489]
                ],
                [
                    ["if", 4, 264, 266],
                    ["add", 290, 475, 479]
                ],
                [
                    ["if", 4, 264, 267],
                    ["add", 291, 476, 480]
                ],
                [
                    ["if", 4, 264, 268],
                    ["add", 292, 477, 481]
                ],
                [
                    ["if", 71, 269, 270],
                    ["add", 293]
                ],
                [
                    ["if", 250, 271, 272],
                    ["add", 294]
                ],
                [
                    ["if", 71, 271, 273, 274],
                    ["add", 295]
                ],
                [
                    ["if", 71, 271, 274, 275],
                    ["add", 296]
                ],
                [
                    ["if", 71, 271, 274, 276],
                    ["add", 297]
                ],
                [
                    ["if", 277, 278],
                    ["add", 298]
                ],
                [
                    ["if", 250, 272, 279],
                    ["add", 299]
                ],
                [
                    ["if", 280],
                    ["add", 300]
                ],
                [
                    ["if", 184, 281],
                    ["add", 302]
                ],
                [
                    ["if", 282],
                    ["add", 304]
                ],
                [
                    ["if", 4, 283],
                    ["add", 305]
                ],
                [
                    ["if", 272, 284],
                    ["add", 306, 486, 487]
                ],
                [
                    ["if", 285],
                    ["add", 307]
                ],
                [
                    ["if", 4, 286, 287],
                    ["add", 308]
                ],
                [
                    ["if", 4, 287, 288],
                    ["add", 309]
                ],
                [
                    ["if", 4, 287, 289],
                    ["add", 310]
                ],
                [
                    ["if", 4, 287, 290],
                    ["add", 311]
                ],
                [
                    ["if", 4, 287, 291],
                    ["add", 312]
                ],
                [
                    ["if", 15, 293],
                    ["add", 314, 319]
                ],
                [
                    ["if", 71, 294, 295, 296],
                    ["add", 320]
                ],
                [
                    ["if", 71, 295, 297, 298, 299],
                    ["add", 320]
                ],
                [
                    ["if", 71, 295, 300, 301, 302],
                    ["add", 320]
                ],
                [
                    ["if", 71, 295, 299, 303],
                    ["add", 320]
                ],
                [
                    ["if", 71, 295, 304, 305],
                    ["add", 320]
                ],
                [
                    ["if", 272, 306, 307],
                    ["add", 321]
                ],
                [
                    ["if", 272, 307, 308],
                    ["add", 321]
                ],
                [
                    ["if", 272, 307, 309],
                    ["add", 321]
                ],
                [
                    ["if", 4, 310],
                    ["add", 322]
                ],
                [
                    ["if", 311],
                    ["add", 325]
                ],
                [
                    ["if", 312],
                    ["add", 326]
                ],
                [
                    ["if", 313],
                    ["add", 327]
                ],
                [
                    ["if", 314],
                    ["add", 346, 353]
                ],
                [
                    ["if", 184],
                    ["add", 348, 431]
                ],
                [
                    ["if", 15, 26, 259],
                    ["add", 354]
                ],
                [
                    ["if", 182, 315],
                    ["add", 383]
                ],
                [
                    ["if", 18, 316],
                    ["add", 392]
                ],
                [
                    ["if", 18, 317],
                    ["add", 394]
                ],
                [
                    ["if", 15, 318, 319],
                    ["add", 396]
                ],
                [
                    ["if", 15, 45, 320],
                    ["unless", 321],
                    ["add", 398]
                ],
                [
                    ["if", 15, 45, 321],
                    ["add", 399]
                ],
                [
                    ["if", 322, 323, 324],
                    ["add", 403]
                ],
                [
                    ["if", 18, 325],
                    ["add", 406]
                ],
                [
                    ["if", 18, 326],
                    ["add", 407]
                ],
                [
                    ["if", 18, 327],
                    ["add", 408]
                ],
                [
                    ["if", 18, 328],
                    ["add", 409]
                ],
                [
                    ["if", 126],
                    ["unless", 329],
                    ["add", 411, 485]
                ],
                [
                    ["if", 18, 331],
                    ["add", 423]
                ],
                [
                    ["if", 18, 332],
                    ["add", 426]
                ],
                [
                    ["if", 18, 333],
                    ["add", 430]
                ],
                [
                    ["if", 182, 334],
                    ["add", 432]
                ],
                [
                    ["if", 182, 335],
                    ["add", 432]
                ],
                [
                    ["if", 184, 336],
                    ["add", 433]
                ],
                [
                    ["if", 182, 337],
                    ["add", 436]
                ],
                [
                    ["if", 18, 27],
                    ["add", 458],
                    ["block", 26, 61, 74, 75, 86, 110, 113, 129, 149, 286, 313, 314, 317, 364, 365, 366, 383, 385, 386, 388, 393, 404]
                ],
                [
                    ["if", 4, 339],
                    ["add", 483]
                ],
                [
                    ["if", 4, 293],
                    ["add", 484]
                ],
                [
                    ["if", 240, 340],
                    ["add", 490]
                ],
                [
                    ["if", 2],
                    ["unless", 1],
                    ["block", 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 28, 29, 30, 0, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 48, 50, 52, 53, 54, 56, 58, 59, 60, 62, 64, 1, 65, 66, 67, 68, 69, 70, 72, 73, 74, 76, 77, 78, 85, 87, 88, 89, 90, 93, 94, 95, 96, 98, 99, 100, 2, 101, 102, 103, 104, 105, 106, 107, 112, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 128, 130, 133, 134, 135, 136, 137, 139, 140, 141, 143, 144, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 161, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 185, 186, 187, 188, 194, 196, 198, 200, 206, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 220, 221, 224, 225, 226, 227, 228, 234, 237, 238, 239, 242, 243, 244, 246, 247, 248, 249, 250, 251, 252, 254, 255, 256, 257, 258, 259, 261, 262, 263, 264, 265, 267, 268, 271, 273, 274, 275, 276, 277, 278, 279, 280, 289, 290, 291, 292, 293, 294, 295, 296, 297, 299, 301, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 315, 321, 322, 383, 388, 397, 3, 405, 430, 436, 443, 455, 456, 457, 459, 460, 461, 463, 465, 466, 467, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 483, 486, 487, 488, 489]
                ],
                [
                    ["if", 2],
                    ["unless", 16, 17],
                    ["block", 18, 26, 27, 32, 44, 47, 55, 71, 75, 86, 110, 5, 113, 132, 145, 164, 165, 167, 168, 169, 189, 190, 191, 192, 193, 195, 197, 199, 219, 222, 223, 229, 232, 281, 282, 283, 284, 285, 286, 287, 288, 298, 300, 313, 314, 316, 317, 318, 323, 324, 325, 326, 327, 372, 373, 376, 377, 385, 387, 416, 417, 418, 419, 421, 422, 425, 427, 429, 432, 433, 434, 440, 446, 482, 484, 485, 490]
                ],
                [
                    ["if", 18, 37],
                    ["block", 0, 221]
                ],
                [
                    ["if", 18],
                    ["unless", 28],
                    ["block", 61, 384, 385, 386, 387, 404, 416, 417, 418, 419, 422]
                ],
                [
                    ["if", 2],
                    ["unless", 138],
                    ["block", 142, 382, 393, 394]
                ],
                [
                    ["if", 209],
                    ["block", 221]
                ],
                [
                    ["if", 2, 210],
                    ["block", 221]
                ],
                [
                    ["if", 15, 292],
                    ["block", 313, 316, 317, 318, 397, 472]
                ],
                [
                    ["if", 18],
                    ["unless", 330],
                    ["block", 420]
                ],
                [
                    ["if", 18],
                    ["unless", 338],
                    ["block", 458]
                ]
            ]
        },
        "runtime": [
            [50, "__cvt_154771_1782", [46, "a"],
                [52, "b", ["require", "createQueue"]],
                [52, "c", ["require", "callInWindow"]],
                [52, "d", ["require", "aliasInWindow"]],
                [52, "e", ["require", "copyFromWindow"]],
                [52, "f", ["require", "setInWindow"]],
                [52, "g", ["require", "injectScript"]],
                [52, "h", ["require", "makeTableMap"]],
                [52, "i", ["require", "makeNumber"]],
                [52, "j", ["require", "getType"]],
                [52, "k", ["require", "copyFromDataLayer"]],
                [52, "l", ["require", "Math"]],
                [52, "m", ["require", "logToConsole"]],
                [52, "n", [30, ["e", "_fbq_gtm_ids"],
                    [7]
                ]],
                [52, "o", [17, [15, "a"], "pixelId"]],
                [52, "p", [7, "AddPaymentInfo", "AddToCart", "AddToWishlist", "CompleteRegistration", "Contact", "CustomizeProduct", "Donate", "FindLocation", "InitiateCheckout", "Lead", "PageView", "Purchase", "Schedule", "Search", "StartTrial", "SubmitApplication", "Subscribe", "ViewContent"]],
                [52, "q", ["k", "ecommerce", 1]],
                [52, "r", [51, "", [7, "bg"],
                    ["m", [15, "bg"]],
                    [2, [15, "a"], "gtmOnFailure", [7]]
                ]],
                [52, "s", [51, "", [7, "bg", "bh"],
                    [55, "bi", [15, "bh"],
                        [46, [22, [2, [15, "bh"], "hasOwnProperty", [7, [15, "bi"]]],
                            [46, [43, [15, "bg"],
                                [15, "bi"],
                                [16, [15, "bh"],
                                    [15, "bi"]
                                ]
                            ]]
                        ]]
                    ],
                    [36, [15, "bg"]]
                ]],
                [52, "t", [51, "", [7, "bg"],
                    [36, [8, "id", [17, [15, "bg"], "id"], "quantity", [17, [15, "bg"], "quantity"]]]
                ]],
                [41, "u", "v", "w"],
                [22, [17, [15, "a"], "enhancedEcommerce"],
                    [46, [22, [28, [15, "q"]],
                            [46, [36, ["r", "Facebook Pixel: No valid \"ecommerce\" object found in dataLayer"]]]
                        ],
                        [22, [17, [15, "q"], "detail"],
                            [46, [3, "u", "ViewContent"],
                                [3, "v", "detail"]
                            ],
                            [46, [22, [17, [15, "q"], "add"],
                                [46, [3, "u", "AddToCart"],
                                    [3, "v", "add"]
                                ],
                                [46, [22, [17, [15, "q"], "checkout"],
                                    [46, [3, "u", "InitiateCheckout"],
                                        [3, "v", "checkout"]
                                    ],
                                    [46, [22, [17, [15, "q"], "purchase"],
                                        [46, [3, "u", "Purchase"],
                                            [3, "v", "purchase"]
                                        ],
                                        [46, [36, ["r", "Facebook Pixel: Most recently pushed \"ecommerce\" object must be one of types \"detail\", \"add\", \"checkout\" or \"purchase\"."]]]
                                    ]]
                                ]]
                            ]]
                        ],
                        [22, [30, [28, [17, [16, [15, "q"],
                                    [15, "v"]
                                ], "products"]],
                                [21, ["j", [17, [16, [15, "q"],
                                    [15, "v"]
                                ], "products"]], "array"]
                            ],
                            [46, [36, ["r", "Facebook pixel: Most recently pushed \"ecommerce\" object did not have a valid \"products\" array."]]]
                        ],
                        [3, "w", [8, "content_type", "product", "contents", [2, [17, [16, [15, "q"],
                            [15, "v"]
                        ], "products"], "map", [7, [15, "t"]]], "value", [2, [17, [16, [15, "q"],
                            [15, "v"]
                        ], "products"], "reduce", [7, [51, "", [7, "bg", "bh"],
                            [52, "bi", [10, [2, [15, "l"], "round", [7, [26, [26, ["i", [30, [17, [15, "bh"], "price"], 0]],
                                [30, [17, [15, "bh"], "quantity"], 1]
                            ], 100]]], 100]],
                            [36, [0, [15, "bg"],
                                [15, "bi"]
                            ]]
                        ], 0]], "currency", [30, [17, [15, "q"], "currencyCode"], "USD"]]],
                        [22, [18, [2, [7, "InitiateCheckout", "Purchase"], "indexOf", [7, [15, "u"]]],
                                [27, 1]
                            ],
                            [46, [43, [15, "w"], "num_items", [2, [17, [16, [15, "q"],
                                [15, "v"]
                            ], "products"], "reduce", [7, [51, "", [7, "bg", "bh"],
                                [36, [0, [15, "bg"],
                                    ["i", [30, [17, [15, "bh"], "quantity"], 1]]
                                ]]
                            ], 0]]]]
                        ]
                    ]
                ],
                [52, "x", [39, [1, [17, [15, "a"], "advancedMatchingList"],
                        [17, [17, [15, "a"], "advancedMatchingList"], "length"]
                    ],
                    ["h", [17, [15, "a"], "advancedMatchingList"], "name", "value"],
                    [8]
                ]],
                [52, "y", [39, [1, [17, [15, "a"], "objectPropertyList"],
                        [17, [17, [15, "a"], "objectPropertyList"], "length"]
                    ],
                    ["h", [17, [15, "a"], "objectPropertyList"], "name", "value"],
                    [8]
                ]],
                [52, "z", [39, [20, ["j", [17, [15, "a"], "objectPropertiesFromVariable"]], "object"],
                    [17, [15, "a"], "objectPropertiesFromVariable"],
                    [8]
                ]],
                [52, "ba", ["s", [15, "z"],
                    [15, "y"]
                ]],
                [52, "bb", ["s", [30, [15, "w"],
                        [8]
                    ],
                    [15, "ba"]
                ]],
                [3, "u", [30, [15, "u"],
                    [39, [20, [17, [15, "a"], "eventName"], "custom"],
                        [17, [15, "a"], "customEventName"],
                        [39, [20, [17, [15, "a"], "eventName"], "variable"],
                            [17, [15, "a"], "variableEventName"],
                            [17, [15, "a"], "standardEventName"]
                        ]
                    ]
                ]],
                [52, "bc", [39, [20, [2, [15, "p"], "indexOf", [7, [15, "u"]]],
                    [27, 1]
                ], "trackSingleCustom", "trackSingle"]],
                [52, "bd", [39, [20, [17, [15, "a"], "consent"], false], "revoke", "grant"]],
                [52, "be", [51, "", [7],
                    [41, "bg"],
                    [3, "bg", ["e", "fbq"]],
                    [22, [15, "bg"],
                        [46, [36, [15, "bg"]]]
                    ],
                    ["f", "fbq", [51, "", [7],
                        [52, "bh", ["e", "fbq.callMethod.apply"]],
                        [22, [15, "bh"],
                            [46, ["c", "fbq.callMethod.apply", [45],
                                [15, "arguments"]
                            ]],
                            [46, ["c", "fbq.queue.push", [15, "arguments"]]]
                        ]
                    ]],
                    ["d", "_fbq", "fbq"],
                    ["b", "fbq.queue"],
                    [36, ["e", "fbq"]]
                ]],
                [52, "bf", ["be"]],
                ["bf", "consent", [15, "bd"]],
                [22, [17, [15, "a"], "dpoLDU"],
                    [46, ["bf", "dataProcessingOptions", [7, "LDU"],
                        ["i", [17, [15, "a"], "dpoCountry"]],
                        ["i", [17, [15, "a"], "dpoState"]]
                    ]]
                ],
                [2, [2, [15, "o"], "split", [7, ","]], "forEach", [7, [51, "", [7, "bg"],
                    [22, [20, [2, [15, "n"], "indexOf", [7, [15, "bg"]]],
                            [27, 1]
                        ],
                        [46, [22, [17, [15, "a"], "disableAutoConfig"],
                                [46, ["bf", "set", "autoConfig", false, [15, "bg"]]]
                            ],
                            [22, [17, [15, "a"], "disablePushState"],
                                [46, ["f", "fbq.disablePushState", true]]
                            ],
                            ["bf", "init", [15, "bg"],
                                [15, "x"]
                            ],
                            ["bf", "set", "agent", "tmSimo-GTM-WebTemplate", [15, "bg"]],
                            [2, [15, "n"], "push", [7, [15, "bg"]]],
                            ["f", "_fbq_gtm_ids", [15, "n"], true]
                        ]
                    ],
                    [22, [17, [15, "a"], "eventId"],
                        [46, ["bf", [15, "bc"],
                            [15, "bg"],
                            [15, "u"],
                            [15, "bb"],
                            [8, "eventID", [17, [15, "a"], "eventId"]]
                        ]],
                        [46, ["bf", [15, "bc"],
                            [15, "bg"],
                            [15, "u"],
                            [15, "bb"]
                        ]]
                    ]
                ]]],
                ["g", "https://connect.facebook.net/en_US/fbevents.js", [17, [15, "a"], "gtmOnSuccess"],
                    [17, [15, "a"], "gtmOnFailure"], "fbPixel"
                ]
            ],
            [50, "__cvt_154771_2114", [46, "a"],
                [52, "b", ["require", "logToConsole"]],
                [52, "c", ["require", "queryPermission"]],
                [52, "d", ["require", "injectScript"]],
                [52, "e", ["require", "copyFromDataLayer"]],
                [52, "f", ["require", "createQueue"]],
                [52, "g", ["c", "access_globals", "readwrite", "_kiq"]],
                [52, "h", ["f", "_kiq"]],
                [52, "i", [51, "", [7],
                    [22, [17, [15, "a"], "identifyViaDataLayer"],
                        [46, [53, [52, "l", ["c", "read_data_layer", [17, [15, "a"], "dataLayerVariable"]]],
                            [52, "m", ["e", [17, [15, "a"], "dataLayerVariable"]]],
                            [22, [12, [15, "m"],
                                    [44]
                                ],
                                [46, ["b", "Qualaroo: Identity recognition failed due to missing identifier."],
                                    [36]
                                ]
                            ],
                            [22, [1, [15, "l"],
                                    [15, "m"]
                                ],
                                [46, ["h", [7, "identify", [15, "m"]]]],
                                [46, ["b", "Qualaroo: Identity recognition failed due to permissions mismatch."]]
                            ]
                        ]]
                    ]
                ]],
                [52, "j", [51, "", [7],
                    ["b", "Qualaroo: Script loaded successfully."],
                    ["i"],
                    [2, [15, "a"], "gtmOnSuccess", [7]]
                ]],
                [52, "k", [51, "", [7],
                    ["b", "Qualaroo: Script load failed."],
                    [2, [15, "a"], "gtmOnFailure", [7]]
                ]],
                [22, ["c", "inject_script", [17, [15, "a"], "jsUrl"]],
                    [46, ["d", [17, [15, "a"], "jsUrl"],
                        [15, "j"],
                        [15, "k"]
                    ]],
                    [46, ["b", "Qualaroo: Script load failed due to permissions mismatch."],
                        [2, [15, "a"], "gtmOnFailure", [7]]
                    ]
                ]
            ],
            [50, "__cvt_154771_2180", [46, "a"],
                [41, "b", "c", "d", "e", "f", "g", "h", "i", "j"],
                [50, "k", [46],
                    [41, "n", "o", "p"],
                    [3, "n", [8]],
                    [3, "o", 0],
                    [42, [23, [15, "o"],
                            [17, [15, "arguments"], "length"]
                        ],
                        [35, [3, "o", [0, [15, "o"], 1]]], false, [46, [47, "p", [16, [15, "arguments"],
                                [15, "o"]
                            ],
                            [46, [43, [15, "n"],
                                [15, "p"],
                                [16, [16, [15, "arguments"],
                                        [15, "o"]
                                    ],
                                    [15, "p"]
                                ]
                            ]]
                        ]]
                    ],
                    [36, [15, "n"]]
                ],
                [50, "l", [46],
                    [41, "n"],
                    [3, "n", ["e", "snaptr"]],
                    [22, [15, "n"],
                        [46, [36, [15, "n"]]]
                    ],
                    ["j", "snaptr", [51, "", [7],
                        [41, "o"],
                        [3, "o", ["e", "snaptr.handleRequest"]],
                        [22, [15, "o"],
                            [46, ["c", "snaptr.handleRequest.apply", [45],
                                [15, "arguments"]
                            ]],
                            [46, ["c", "snaptr.queue.push", [15, "arguments"]]]
                        ]
                    ]],
                    [36, ["e", "snaptr"]]
                ],
                [50, "m", [46],
                    [41, "n", "o", "p", "q"],
                    [3, "n", ["l"]],
                    ["f", "snaptr.queue"],
                    ["j", "snaptr.sendPixelByGTM", [15, "i"], true],
                    [43, [15, "a"], "integration", "gtm"],
                    ["b", "data = ", [15, "a"]],
                    [3, "o", [39, [17, [15, "a"], "additional_init_data"],
                        ["h", [17, [15, "a"], "additional_init_data"], "key", "value"],
                        [8]
                    ]],
                    [3, "p", ["k", [15, "a"],
                        [15, "o"]
                    ]],
                    ["b", "initData = ", [15, "p"]],
                    ["n", "init", [17, [15, "p"], "pixel_id"],
                        [15, "p"]
                    ],
                    ["n", "track", [17, [15, "p"], "pixel_id"],
                        [17, [15, "p"], "event_type"],
                        [15, "a"]
                    ],
                    [3, "q", "https://sc-static.net/scevent.min.js"],
                    ["g", [15, "q"],
                        [17, [15, "a"], "gtmOnSuccess"],
                        [17, [15, "a"], "gtmOnFailure"],
                        [15, "q"]
                    ]
                ],
                [3, "b", ["require", "logToConsole"]],
                [3, "c", ["require", "callInWindow"]],
                [3, "d", ["require", "callLater"]],
                [3, "e", ["require", "copyFromWindow"]],
                [3, "f", ["require", "createQueue"]],
                [3, "g", ["require", "injectScript"]],
                [3, "h", ["require", "makeTableMap"]],
                [3, "i", ["require", "sendPixel"]],
                [3, "j", ["require", "setInWindow"]],
                ["m"]
            ],
            [50, "__cvt_154771_2182", [46, "a"],
                [41, "b", "c", "d", "e", "f", "g", "h"],
                [3, "b", ["require", "injectScript"]],
                [3, "c", ["require", "copyFromWindow"]],
                [3, "d", ["require", "setInWindow"]],
                [3, "e", ["require", "callInWindow"]],
                [3, "f", ["require", "createQueue"]],
                [3, "g", [51, "", [7],
                    [41, "i", "j"],
                    [3, "i", ["c", "rdt"]],
                    [22, [15, "i"],
                        [46, [36, [15, "i"]]]
                    ],
                    ["d", "rdt", [51, "", [7],
                        [41, "k"],
                        [3, "k", ["c", "rdt.sendEvent"]],
                        [22, [15, "k"],
                            [46, ["e", "rdt.sendEvent.apply", [15, "i"],
                                [15, "arguments"]
                            ]],
                            [46, ["j", [15, "arguments"]]]
                        ]
                    ]],
                    [3, "j", ["f", "rdt.callQueue"]],
                    [36, ["c", "rdt"]]
                ]],
                [3, "h", ["g"]],
                [22, [28, [17, [15, "h"], "advertiserId"]],
                    [46, ["h", "init", [17, [15, "a"], "id"]]]
                ],
                [22, [28, [17, [15, "a"], "enableFirstPartyCookies"]],
                    [46, ["h", "disableFirstPartyCookies"]]
                ],
                ["h", "track", [17, [15, "a"], "eventType"]],
                ["b", "https://www.redditstatic.com/ads/pixel.js", [17, [15, "a"], "gtmOnSuccess"],
                    [17, [15, "a"], "gtmOnFailure"], "rdtPixel"
                ]
            ],
            [50, "__cvt_154771_2204", [46, "a"],
                [52, "b", ["require", "injectScript"]],
                [52, "c", ["require", "encodeUriComponent"]],
                [52, "d", ["c", [17, [15, "a"], "id"]]],
                [52, "e", [0, "https://analytics.tiktok.com/i18n/pixel/sdk.js?sdkid=", [15, "d"]]],
                ["b", [15, "e"],
                    [17, [15, "a"], "gtmOnSuccess"],
                    [17, [15, "a"], "gtmOnFailure"]
                ]
            ],
            [50, "__cvt_154771_2767", [46, "a"],
                [41, "q", "r", "s", "t"],
                [52, "b", ["require", "copyFromWindow"]],
                [52, "c", ["require", "injectScript"]],
                [52, "d", ["require", "getUrl"]],
                [52, "e", ["require", "getQueryParameters"]],
                [52, "f", ["require", "encodeUriComponent"]],
                [52, "g", ["require", "createQueue"]],
                [41, "h"],
                [3, "h", ["g", "_uxa"]],
                [41, "i"],
                [3, "i", ["b", "CS_CONF"]],
                [41, "j"],
                [3, "j", ["d", "path"]],
                [41, "k"],
                [3, "k", ["d", "fragment"]],
                [41, "l"],
                [3, "l", [0, [0, "https://t.contentsquare.net/uxa/", ["f", [17, [15, "a"], "TagId"]]], ".js"]],
                [41, "m"],
                [3, "m", ["e", "utm_medium"]],
                [41, "n"],
                [3, "n", ["e", "utm_source"]],
                [41, "o"],
                [3, "o", ["e", "utm_campaign"]],
                [41, "p"],
                [3, "p", ["e", "gclid"]],
                [22, [1, [21, [15, "m"], ""],
                        [21, [40, [15, "m"]], "undefined"]
                    ],
                    [46, ["h", [7, "trackDynamicVariable", [8, "key", "Medium", "value", [2, [15, "m"], "toLowerCase", [7]]]]]]
                ],
                [22, [1, [21, [15, "n"], ""],
                        [21, [40, [15, "n"]], "undefined"]
                    ],
                    [46, ["h", [7, "trackDynamicVariable", [8, "key", "Source", "value", [2, [15, "n"], "toLowerCase", [7]]]]]]
                ],
                [22, [1, [21, [15, "o"], ""],
                        [21, [40, [15, "o"]], "undefined"]
                    ],
                    [46, ["h", [7, "trackDynamicVariable", [8, "key", "Campaign", "value", [2, [15, "o"], "toLowerCase", [7]]]]]]
                ],
                [22, [1, [21, [15, "p"], ""],
                        [21, [40, [15, "p"]], "undefined"]
                    ],
                    [46, ["h", [7, "trackDynamicVariable", [8, "key", "Gclid", "value", "true"]]]]
                ],
                [22, [2, [15, "a"], "hasOwnProperty", [7, "cvars"]],
                    [46, [3, "q", 0],
                        [42, [23, [15, "q"],
                                [17, [17, [15, "a"], "cvars"], "length"]
                            ],
                            [33, [15, "q"],
                                [3, "q", [0, [15, "q"], 1]]
                            ], false, [46, ["h", [7, "setCustomVariable", [17, [16, [17, [15, "a"], "cvars"],
                                    [15, "q"]
                                ], "slot"],
                                [17, [16, [17, [15, "a"], "cvars"],
                                    [15, "q"]
                                ], "name"],
                                [17, [16, [17, [15, "a"], "cvars"],
                                    [15, "q"]
                                ], "value"], 3
                            ]]]
                        ]
                    ]
                ],
                [3, "r", false],
                [3, "s", [8]],
                [22, [17, [15, "a"], "piiselectors"],
                    [46, [43, [15, "s"], "PIISelectors", [7, [17, [15, "a"], "piiselectors"]]],
                        [22, [17, [15, "s"], "PIISelectors"],
                            [46, [3, "r", true]]
                        ]
                    ]
                ],
                [22, [17, [15, "a"], "attributeselectors"],
                    [46, [43, [15, "s"], "Attributes", [7]],
                        [3, "q", 0],
                        [42, [23, [15, "q"],
                                [17, [17, [15, "a"], "attributeselectors"], "length"]
                            ],
                            [33, [15, "q"],
                                [3, "q", [0, [15, "q"], 1]]
                            ], false, [46, [2, [17, [15, "s"], "Attributes"], "push", [7, [8, "selector", [17, [16, [17, [15, "a"], "attributeselectors"],
                                [15, "q"]
                            ], "selectors"], "attrName", [17, [16, [17, [15, "a"], "attributeselectors"],
                                [15, "q"]
                            ], "attributes"]]]]]
                        ],
                        [22, [17, [17, [15, "s"], "Attributes"], "length"],
                            [46, [3, "r", true]]
                        ]
                    ]
                ],
                [22, [15, "r"],
                    [46, ["h", [7, "setPIISelectors", [15, "s"]]]]
                ],
                [22, [20, [40, [15, "i"]], "undefined"],
                    [46, [22, [21, [15, "k"], ""],
                            [46, ["h", [7, "setPath", [0, [0, [15, "j"], "?__"],
                                [15, "k"]
                            ]]]]
                        ],
                        ["c", [15, "l"],
                            [17, [15, "a"], "gtmOnSuccess"],
                            [17, [15, "a"], "gtmOnFailure"]
                        ]
                    ],
                    [46, [3, "t", [15, "j"]],
                        [22, [21, [15, "k"], ""],
                            [46, [3, "t", [0, [0, [15, "j"], "?__"],
                                [15, "k"]
                            ]]]
                        ],
                        ["h", [7, "trackPageview", [15, "t"]]],
                        [2, [15, "a"], "gtmOnSuccess", [7]]
                    ]
                ]
            ],
            [50, "__cvt_154771_2770", [46, "a"],
                [52, "b", ["require", "copyFromWindow"]],
                [52, "c", ["require", "setInWindow"]],
                [52, "d", ["require", "createQueue"]],
                [41, "e"],
                [3, "e", ["d", "_uxa"]],
                ["e", [7, "ec:transaction:create", [8, "id", [17, [15, "a"], "transactionID"], "revenue", [17, [15, "a"], "transactionRevenue"], "shipping", [17, [15, "a"], "transactionShipping"], "tax", [17, [15, "a"], "transactionTax"], "currency", [17, [15, "a"], "transactionCurrency"]]]],
                ["e", [7, "ec:transaction:send"]],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__twitter_website_tag", [46, "a"],
                [50, "h", [46],
                    [41, "k"],
                    [3, "k", ["c", "twq"]],
                    [22, [15, "k"],
                        [46, [36, [15, "k"]]]
                    ],
                    ["g", "twq", [51, "", [7],
                        [52, "m", ["c", "twq.exe.apply"]],
                        [22, [15, "m"],
                            [46, ["b", "twq.exe.apply", [45],
                                [15, "arguments"]
                            ]],
                            [46, ["b", "twq.queue.push", [15, "arguments"]]]
                        ]
                    ], true],
                    ["g", "twq.version", "1", true],
                    ["g", "twq.queue", [7], true],
                    [52, "l", [51, "", [7]]],
                    ["d", "https://static.ads-twitter.com/uwt.js", [15, "l"],
                        [15, "l"], "twitter_website_tag"
                    ],
                    [36, ["c", "twq"]]
                ],
                [52, "b", ["require", "callInWindow"]],
                [52, "c", ["require", "copyFromWindow"]],
                [52, "d", ["require", "injectScript"]],
                [52, "e", ["require", "makeString"]],
                [52, "f", ["require", "makeTableMap"]],
                [52, "g", ["require", "setInWindow"]],
                [41, "i"],
                [3, "i", ["h"]],
                ["i", "init", ["e", [17, [15, "a"], "twitter_pixel_id"]]],
                [52, "j", ["f", [30, [17, [15, "a"], "event_parameters"],
                    [7]
                ], "param_table_key_column", "param_table_value_column"]],
                [22, [1, [15, "j"],
                        [2, [15, "j"], "hasOwnProperty", [7, "content_ids"]]
                    ],
                    [46, [53, [41, "k"],
                        [3, "k", [16, [15, "j"], "content_ids"]],
                        [3, "k", [2, [2, [15, "k"], "split", [7, "\""]], "join", [7, "'"]]],
                        [41, "l"],
                        [3, "l", [2, [2, [15, "k"], "slice", [7, [2, [15, "k"], "indexOf", [7, "["]],
                            [2, [15, "k"], "indexOf", [7, "]"]]
                        ]], "split", [7, ","]]],
                        [3, "l", [2, [15, "l"], "map", [7, [51, "", [7, "m"],
                            [36, [30, [16, [2, [15, "m"], "split", [7, "'"]], 1], ""]]
                        ]]]],
                        [43, [15, "j"], "content_ids", [15, "l"]]
                    ]]
                ],
                ["i", "track", ["e", [17, [15, "a"], "event_type"]],
                    [15, "j"]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__csm", [46, "a"],
                [41, "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "o"],
                [50, "l", [46, "p", "q"],
                    [41, "r", "s", "t", "u"],
                    [3, "r", ["f"]],
                    [3, "s", [2, [30, [15, "q"], ""], "split", [7, "&"]]],
                    [3, "q", ""],
                    [3, "t", 0],
                    [42, [23, [15, "t"],
                            [17, [15, "s"], "length"]
                        ],
                        [33, [15, "t"],
                            [3, "t", [0, [15, "t"], 1]]
                        ], false, [46, [22, [16, [15, "s"],
                                [15, "t"]
                            ],
                            [46, [3, "u", [2, [16, [15, "s"],
                                    [15, "t"]
                                ], "split", [7, "="]]],
                                [22, [16, [15, "u"], 0],
                                    [46, [3, "q", [0, [15, "q"],
                                        [0, [0, [0, "&", ["c", [16, [15, "u"], 0]]], "="],
                                            [39, [16, [15, "u"], 1],
                                                ["c", [16, [15, "u"], 1]], ""
                                            ]
                                        ]
                                    ]]]
                                ]
                            ]
                        ]]
                    ],
                    [36, [0, [0, [0, [0, [0, [0, [0, [0, [0, [0, [0, [0, "https://sb.scorecardresearch.com/b?c1=2&c2=", ["c", [15, "p"]]], "&ns__t="],
                                            [15, "r"]
                                        ], "&ns_c="],
                                        [30, ["i"], ""]
                                    ], "&c8="],
                                    ["c", [30, ["j"], ""]]
                                ],
                                [15, "q"]
                            ], "&c7="],
                            ["c", ["g"]]
                        ], "&c9="],
                        ["c", ["e"]]
                    ]]
                ],
                [50, "m", [46, "p"],
                    [41, "q"],
                    [22, [18, [17, [15, "p"], "length"], 2048],
                        [46, [3, "q", [2, [2, [15, "p"], "substring", [7, 0, 2040]], "lastIndexOf", [7, "&"]]],
                            [3, "p", [0, [0, [2, [15, "p"], "substring", [7, 0, [15, "q"]]], "&ns_cut="],
                                ["c", [2, [15, "p"], "substring", [7, [0, [15, "q"], 1]]]]
                            ]],
                            [3, "p", [2, [15, "p"], "substring", [7, 0, 2048]]]
                        ]
                    ],
                    [36, [15, "p"]]
                ],
                [50, "n", [46],
                    [41, "p"],
                    [3, "p", [0, [0, "https://sb.scorecardresearch.com/c2/", ["c", [17, [15, "a"], "clientId"]]], "/cs.js"]],
                    ["h", [15, "p"],
                        [17, [15, "a"], "gtmOnSuccess"],
                        [17, [15, "a"], "gtmOnFailure"]
                    ]
                ],
                [3, "b", ["require", "callOnWindowLoad"]],
                [3, "c", ["require", "encodeUriComponent"]],
                [3, "d", ["require", "getCookieValues"]],
                [3, "e", ["require", "getReferrerUrl"]],
                [3, "f", ["require", "getTimestampMillis"]],
                [3, "g", ["require", "getUrl"]],
                [3, "h", ["require", "injectScript"]],
                [3, "i", ["require", "readCharacterSet"]],
                [3, "j", ["require", "readTitle"]],
                [3, "k", ["require", "sendPixel"]],
                [3, "o", [2, ["d", "comScore", true], "join", [7, "&"]]],
                ["k", ["m", ["l", [17, [15, "a"], "clientId"],
                    [15, "o"]
                ]]],
                ["b", [15, "n"]]
            ],
            [50, "__hjtc", [46, "a"],
                [52, "b", ["require", "createArgumentsQueue"]],
                [52, "c", ["require", "encodeUriComponent"]],
                [52, "d", ["require", "injectScript"]],
                [52, "e", ["require", "makeString"]],
                [52, "f", ["require", "setInWindow"]],
                ["b", "hj", "hj.q"],
                [52, "g", [17, [15, "a"], "hotjar_site_id"]],
                ["f", "_hjSettings", [8, "hjid", [15, "g"], "hjsv", 7, "scriptSource", "gtm"]],
                ["d", [0, [0, "https://static.hotjar.com/c/hotjar-", ["c", ["e", [15, "g"]]]], ".js?sv=7"],
                    [17, [15, "a"], "gtmOnSuccess"],
                    [17, [15, "a"], "gtmOnFailure"]
                ]
            ],
            [50, "__baut", [46, "a"],
                [52, "b", ["require", "injectScript"]],
                [52, "c", ["require", "callInWindow"]],
                [52, "d", ["require", "makeTableMap"]],
                [38, [17, [15, "a"], "eventType"],
                    [46, "PAGE_LOAD", "VARIABLE_REVENUE", "CUSTOM"],
                    [46, [5, [46, [43, [15, "a"], "eventType", "pageView"],
                            [4]
                        ]],
                        [5, [46, [43, [15, "a"], "eventType", "variableRevenue"],
                            [4]
                        ]],
                        [5, [46, [43, [15, "a"], "eventType", "custom"]]]
                    ]
                ],
                [22, [17, [15, "a"], "eventCategory"],
                    [46, [43, [15, "a"], "p_event_category", [17, [15, "a"], "eventCategory"]]]
                ],
                [22, [17, [15, "a"], "eventLabel"],
                    [46, [43, [15, "a"], "p_event_label", [17, [15, "a"], "eventLabel"]]]
                ],
                [22, [17, [15, "a"], "eventValue"],
                    [46, [43, [15, "a"], "p_event_value", [17, [15, "a"], "eventValue"]]]
                ],
                [22, [17, [15, "a"], "goalValue"],
                    [46, [43, [15, "a"], "p_revenue_value", [17, [15, "a"], "goalValue"]]]
                ],
                [52, "e", [51, "", [7],
                    [52, "i", [39, [30, [20, [17, [15, "a"], "eventType"], "pageView"],
                            [28, [17, [15, "a"], "customParamTable"]]
                        ],
                        [8],
                        ["d", [17, [15, "a"], "customParamTable"], "customParamName", "customParamValue"]
                    ]],
                    [52, "j", [8, "pageViewSpa", [7, "page_path", "page_title"], "variableRevenue", [7, "currency", "revenue_value"], "custom", [7, "event_category", "event_label", "event_value", "currency", "revenue_value"], "ecommerce", [7, "ecomm_prodid", "ecomm_pagetype", "ecomm_totalvalue", "ecomm_category"], "hotel", [7, "currency", "hct_base_price", "hct_booking_xref", "hct_checkin_date", "hct_checkout_date", "hct_length_of_stay", "hct_partner_hotel_id", "hct_total_price", "hct_pagetype"], "travel", [7, "travel_destid", "travel_originid", "travel_pagetype", "travel_startdate", "travel_enddate", "travel_totalvalue"]]],
                    [65, "k", [30, [16, [15, "j"],
                                [17, [15, "a"], "eventType"]
                            ],
                            [7]
                        ],
                        [46, [43, [15, "i"],
                            [15, "k"],
                            [30, [16, [15, "i"],
                                    [15, "k"]
                                ],
                                [16, [15, "a"],
                                    [0, "p_", [15, "k"]]
                                ]
                            ]
                        ]]
                    ],
                    [43, [15, "i"], "tpp", "1"],
                    [36, [15, "i"]]
                ]],
                [52, "f", [51, "", [7],
                    [52, "i", [39, [28, [17, [15, "a"], "customConfigTable"]],
                        [8],
                        ["d", [17, [15, "a"], "customConfigTable"], "customConfigName", "customConfigValue"]
                    ]],
                    [54, "k", [15, "i"],
                        [46, [22, [20, [16, [15, "i"],
                                [15, "k"]
                            ], "true"],
                            [46, [43, [15, "i"],
                                [15, "k"], true
                            ]],
                            [46, [22, [20, [16, [15, "i"],
                                    [15, "k"]
                                ], "false"],
                                [46, [43, [15, "i"],
                                    [15, "k"], false
                                ]]
                            ]]
                        ]]
                    ],
                    [52, "j", [7, "navTimingApi", "storeConvTrackCookies", "removeQueryFromUrls", "disableAutoPageView"]],
                    [65, "k", [15, "j"],
                        [46, [43, [15, "i"],
                            [15, "k"],
                            [30, [16, [15, "i"],
                                    [15, "k"]
                                ],
                                [16, [15, "a"],
                                    [0, "c_", [15, "k"]]
                                ]
                            ]
                        ]]
                    ],
                    [43, [15, "i"], "ti", [17, [15, "a"], "tagId"]],
                    [43, [15, "i"], "tm", "gtm002"],
                    [36, [15, "i"]]
                ]],
                [52, "g", [51, "", [7],
                    [22, [20, [17, [15, "a"], "eventType"], "pageView"],
                        [46, [53, [52, "i", ["f"]],
                            ["c", "UET_init", [17, [15, "a"], "uetqName"],
                                [15, "i"]
                            ],
                            ["c", "UET_push", [17, [15, "a"], "uetqName"], "pageLoad"]
                        ]],
                        [46, [53, [52, "i", ["e"]],
                            [22, [20, [17, [15, "a"], "eventType"], "pageViewSpa"],
                                [46, ["c", "UET_push", [17, [15, "a"], "uetqName"], "event", "page_view", [15, "i"]]],
                                [46, [53, [52, "j", [30, [30, [17, [15, "a"], "customEventAction"],
                                        [17, [15, "a"], "eventAction"]
                                    ], ""]],
                                    ["c", "UET_push", [17, [15, "a"], "uetqName"], "event", [15, "j"],
                                        [15, "i"]
                                    ]
                                ]]
                            ]
                        ]]
                    ],
                    [2, [15, "a"], "gtmOnSuccess", [7]]
                ]],
                [52, "h", "https://bat.bing.com/bat.js"],
                ["b", [15, "h"],
                    [15, "g"],
                    [17, [15, "a"], "gtmOnFailure"],
                    [15, "h"]
                ]
            ],
            [50, "__pntr", [46, "a"],
                [52, "b", ["require", "copyFromWindow"]],
                [52, "c", ["require", "createArgumentsQueue"]],
                [52, "d", ["require", "injectScript"]],
                [52, "e", ["require", "logToConsole"]],
                [52, "f", ["require", "makeTableMap"]],
                ["e", [0, "GTM PTag v1.4; tagId: ", [17, [15, "a"], "tagId"]]],
                [52, "g", [28, ["b", "pintrk"]]],
                [52, "h", ["c", "pintrk", "pintrk.queue"]],
                [22, [15, "g"],
                    [46, [53, [52, "k", [8, "np", "gtm"]],
                        [22, [17, [15, "a"], "em"],
                            [46, [43, [15, "k"], "em", [17, [15, "a"], "em"]]]
                        ],
                        [22, [2, [15, "a"], "hasOwnProperty", [7, "aem_enabled"]],
                            [46, [43, [15, "k"], "aem_enabled", [20, [17, [15, "a"], "aem_enabled"], "yes"]],
                                [43, [15, "k"], "gtm_aem_configs", [7]],
                                [22, [17, [15, "k"], "aem_enabled"],
                                    [46, [2, [17, [15, "k"], "gtm_aem_configs"], "push", [7, "em"]]]
                                ]
                            ]
                        ],
                        [22, [2, [15, "a"], "hasOwnProperty", [7, "md_scraping_enabled"]],
                            [46, [43, [15, "k"], "md_frequency", [39, [17, [15, "a"], "md_scraping_enabled"], 1, 0]]]
                        ],
                        ["h", "load", [2, [17, [15, "a"], "tagId"], "toString", [7]],
                            [15, "k"]
                        ],
                        ["h", "page"]
                    ]],
                    [46, [22, [17, [15, "a"], "em"],
                        [46, [53, [52, "k", [8, "em", [17, [15, "a"], "em"]]],
                            ["h", "set", [15, "k"]]
                        ]]
                    ]]
                ],
                [22, [20, [17, [15, "a"], "eventName"], ""],
                    [46, [53, [52, "k", [8]],
                        [22, [2, [15, "a"], "hasOwnProperty", [7, "aem_enabled"]],
                            [46, [43, [15, "k"], "aem_enabled", [20, [17, [15, "a"], "aem_enabled"], "yes"]],
                                [43, [15, "k"], "gtm_aem_configs", [7]],
                                [22, [17, [15, "k"], "aem_enabled"],
                                    [46, [2, [17, [15, "k"], "gtm_aem_configs"], "push", [7, "em"]]]
                                ]
                            ]
                        ],
                        ["h", "set", [15, "k"]]
                    ]]
                ],
                [52, "i", [51, "", [7],
                    [41, "k"],
                    [3, "k", [8]],
                    [22, [17, [15, "a"], "setCustomParams"],
                        [46, [3, "k", ["f", [17, [15, "a"], "values"], "name", "value"]]]
                    ],
                    [43, [15, "k"], "np", "gtm"],
                    [52, "l", [51, "", [7, "n"],
                        [22, [21, [16, [15, "a"],
                                    [15, "n"]
                                ],
                                [44]
                            ],
                            [46, [43, [15, "k"],
                                [15, "n"],
                                [16, [15, "a"],
                                    [15, "n"]
                                ]
                            ]]
                        ]
                    ]],
                    [52, "m", [51, "", [7, "n"],
                        [22, [21, [16, [15, "a"],
                                    [15, "n"]
                                ],
                                [44]
                            ],
                            [46, [22, [20, [17, [15, "k"], "line_items"],
                                        [44]
                                    ],
                                    [46, [43, [15, "k"], "line_items", [7, [8]]]]
                                ],
                                [43, [16, [17, [15, "k"], "line_items"], 0],
                                    [15, "n"],
                                    [16, [15, "a"],
                                        [15, "n"]
                                    ]
                                ]
                            ]
                        ]
                    ]],
                    [38, [17, [15, "a"], "eventName"],
                        [46, "watchvideo", "viewcategory", "custom", "signup", "lead", "search", "addtocart", "checkout", "pagevisit"],
                        [46, [5, [46]],
                            [5, [46]],
                            [5, [46, [4]]],
                            [5, [46]],
                            [5, [46, ["l", "lead_type"],
                                [4]
                            ]],
                            [5, [46, ["l", "search_query"],
                                [4]
                            ]],
                            [5, [46]],
                            [5, [46, ["l", "order_id"],
                                ["l", "order_quantity"],
                                ["l", "value"],
                                ["l", "currency"]
                            ]],
                            [5, [46, ["m", "product_id"],
                                ["m", "product_category"],
                                [4]
                            ]],
                            [9, [46, [4]]]
                        ]
                    ],
                    [22, [21, [17, [15, "a"], "eventName"], ""],
                        [46, ["e", [0, "Firing Pinterest event: ", [17, [15, "a"], "eventName"]]],
                            ["e", "Event Data:"],
                            ["e", [15, "k"]],
                            ["h", "track", [17, [15, "a"], "eventName"],
                                [15, "k"]
                            ]
                        ]
                    ],
                    [2, [15, "a"], "gtmOnSuccess", [7]]
                ]],
                [52, "j", [51, "", [7],
                    ["e", "Pinterest Error: Loading JS failed!"],
                    [2, [15, "a"], "gtmOnFailure", [7]]
                ]],
                ["d", "https://s.pinimg.com/ct/core.js", [15, "i"],
                    [15, "j"], "PinterestJS"
                ]
            ]
        ],
        "permissions": {
            "__cvt_154771_1782": {
                "access_globals": {
                    "keys": [{
                        "key": "fbq",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "_fbq_gtm",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "_fbq",
                        "read": false,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "_fbq_gtm_ids",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "fbq.callMethod.apply",
                        "read": true,
                        "write": false,
                        "execute": true
                    }, {
                        "key": "fbq.queue.push",
                        "read": false,
                        "write": false,
                        "execute": true
                    }, {
                        "key": "fbq.queue",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "fbq.disablePushState",
                        "read": true,
                        "write": true,
                        "execute": false
                    }]
                },
                "inject_script": {
                    "urls": ["https:\/\/connect.facebook.net\/en_US\/fbevents.js"]
                },
                "logging": {
                    "environments": "debug"
                },
                "read_data_layer": {
                    "keyPatterns": ["ecommerce"]
                }
            },
            "__cvt_154771_2114": {
                "logging": {
                    "environments": "debug"
                },
                "inject_script": {
                    "urls": ["https:\/\/*.qualaroo.com\/*"]
                },
                "read_data_layer": {
                    "keyPatterns": ["qualaroo.*"]
                },
                "access_globals": {
                    "keys": [{
                        "key": "_kiq",
                        "read": true,
                        "write": true,
                        "execute": false
                    }]
                }
            },
            "__cvt_154771_2180": {
                "inject_script": {
                    "urls": ["https:\/\/sc-static.net\/*", "https:\/\/tr.snapchat.com\/*"]
                },
                "logging": {
                    "environments": "debug"
                },
                "access_globals": {
                    "keys": [{
                        "key": "snaptr",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "snaptr.handleRequest",
                        "read": true,
                        "write": false,
                        "execute": true
                    }, {
                        "key": "snaptr.handleRequest.apply",
                        "read": true,
                        "write": false,
                        "execute": true
                    }, {
                        "key": "snaptr.queue",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "snaptr.queue.push",
                        "read": true,
                        "write": false,
                        "execute": true
                    }, {
                        "key": "snaptr.sendPixelByGTM",
                        "read": true,
                        "write": true,
                        "execute": true
                    }]
                },
                "send_pixel": {
                    "allowedUrls": "specific",
                    "urls": ["https:\/\/tr.snapchat.com\/*"]
                }
            },
            "__cvt_154771_2182": {
                "inject_script": {
                    "urls": ["https:\/\/www.redditstatic.com\/ads\/pixel.js"]
                },
                "access_globals": {
                    "keys": [{
                        "key": "rdt",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "rdt.callQueue",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "rdt.sendEvent.apply",
                        "read": true,
                        "write": false,
                        "execute": true
                    }, {
                        "key": "rdt.callQueue.push",
                        "read": false,
                        "write": false,
                        "execute": true
                    }, {
                        "key": "rdt.sendEvent",
                        "read": true,
                        "write": false,
                        "execute": false
                    }, {
                        "key": "rdt.advertiserId",
                        "read": true,
                        "write": false,
                        "execute": false
                    }]
                }
            },
            "__cvt_154771_2204": {
                "inject_script": {
                    "urls": ["https:\/\/analytics.tiktok.com\/"]
                }
            },
            "__cvt_154771_2767": {
                "access_globals": {
                    "keys": [{
                        "key": "_uxa",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "CS_CONF",
                        "read": true,
                        "write": true,
                        "execute": true
                    }]
                },
                "inject_script": {
                    "urls": ["https:\/\/t.contentsquare.net\/*"]
                },
                "get_url": {
                    "queriesAllowed": "specific",
                    "urlParts": "specific",
                    "path": true,
                    "fragment": true,
                    "queryKeys": ["utm_medium", "utm_source", "utm_campaign", "gclid"],
                    "query": true
                }
            },
            "__cvt_154771_2770": {
                "access_globals": {
                    "keys": [{
                        "key": "_uxa",
                        "read": true,
                        "write": true,
                        "execute": true
                    }]
                }
            },
            "__twitter_website_tag": {
                "access_globals": {
                    "keys": [{
                        "key": "twq",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "twq.exe",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "twq.queue",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "twq.queue.push",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "twq.version",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "twq.exe.apply",
                        "read": true,
                        "write": true,
                        "execute": true
                    }]
                },
                "inject_script": {
                    "urls": ["https:\/\/static.ads-twitter.com\/uwt.js"]
                }
            },
            "__csm": {
                "send_pixel": {
                    "urls": ["https:\/\/sb.scorecardresearch.com\/b?*"]
                },
                "inject_script": {
                    "urls": ["https:\/\/sb.scorecardresearch.com\/c2\/*"]
                },
                "get_cookies": {
                    "cookieAccess": "any"
                },
                "get_url": {
                    "urlParts": "any"
                },
                "get_referrer": {
                    "urlParts": "any"
                },
                "read_character_set": {},
                "read_title": {},
                "process_dom_events": {
                    "targets": [{
                        "targetType": "window",
                        "eventName": "load"
                    }]
                }
            },
            "__hjtc": {
                "access_globals": {
                    "keys": [{
                        "key": "hj",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "hj.q",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "_hjSettings",
                        "read": true,
                        "write": true,
                        "execute": false
                    }]
                },
                "inject_script": {
                    "urls": ["https:\/\/static.hotjar.com\/c\/hotjar-*"]
                }
            },
            "__baut": {
                "inject_script": {
                    "urls": ["https:\/\/bat.bing.com\/bat.js"]
                },
                "access_globals": {
                    "keys": [{
                        "key": "UET_push",
                        "read": false,
                        "write": false,
                        "execute": true
                    }, {
                        "key": "UET_init",
                        "read": false,
                        "write": false,
                        "execute": true
                    }]
                }
            },
            "__pntr": {
                "access_globals": {
                    "keys": [{
                        "key": "pintrk",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "pintrk.queue",
                        "read": true,
                        "write": true,
                        "execute": true
                    }]
                },
                "logging": {
                    "environments": "debug"
                },
                "inject_script": {
                    "urls": ["https:\/\/s.pinimg.com\/ct\/core.js"]
                }
            }
        },
        "sandboxed_scripts": ["__cvt_154771_1782", "__cvt_154771_2114", "__cvt_154771_2180", "__cvt_154771_2182", "__cvt_154771_2204", "__cvt_154771_2767", "__cvt_154771_2770"],
        "security_groups": {
            "nonGoogleScripts": ["__twitter_website_tag", "__csm", "__hjtc", "__baut", "__pntr"]
        }

    };

    (function() {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        var C = this || self,
            D = function(n, v) {
                var w = n.split("."),
                    q = C;
                w[0] in q || "undefined" == typeof q.execScript || q.execScript("var " + w[0]);
                for (var t; w.length && (t = w.shift());) w.length || void 0 === v ? q = q[t] && q[t] !== Object.prototype[t] ? q[t] : q[t] = {} : q[t] = v
            };
        /*
         Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
        var E, F = function() {};
        (function() {
            function n(h, m) {
                h = h || "";
                m = m || {};
                for (var y in v) v.hasOwnProperty(y) && (m.N && (m["fix_" + y] = !0), m.G = m.G || m["fix_" + y]);
                var z = {
                        comment: /^\x3c!--/,
                        endTag: /^<\//,
                        atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                        startTag: /^</,
                        chars: /^[^<]/
                    },
                    e = {
                        comment: function() {
                            var a = h.indexOf("--\x3e");
                            if (0 <= a) return {
                                content: h.substr(4, a),
                                length: a + 3
                            }
                        },
                        endTag: function() {
                            var a = h.match(q);
                            if (a) return {
                                tagName: a[1],
                                length: a[0].length
                            }
                        },
                        atomicTag: function() {
                            var a = e.startTag();
                            if (a) {
                                var b = h.slice(a.length);
                                if (b.match(new RegExp("</\\s*" + a.tagName + "\\s*>", "i"))) {
                                    var c = b.match(new RegExp("([\\s\\S]*?)</\\s*" + a.tagName + "\\s*>", "i"));
                                    if (c) return {
                                        tagName: a.tagName,
                                        g: a.g,
                                        content: c[1],
                                        length: c[0].length + a.length
                                    }
                                }
                            }
                        },
                        startTag: function() {
                            var a = h.match(w);
                            if (a) {
                                var b = {};
                                a[2].replace(t, function(c, d, k, g, r) {
                                    var u = k || g || r || B.test(d) && d || null,
                                        l = document.createElement("div");
                                    l.innerHTML = u;
                                    b[d] = l.textContent || l.innerText || u
                                });
                                return {
                                    tagName: a[1],
                                    g: b,
                                    s: !!a[3],
                                    length: a[0].length
                                }
                            }
                        },
                        chars: function() {
                            var a = h.indexOf("<");
                            return {
                                length: 0 <= a ? a : h.length
                            }
                        }
                    },
                    f = function() {
                        for (var a in z)
                            if (z[a].test(h)) {
                                var b = e[a]();
                                return b ? (b.type = b.type || a, b.text = h.substr(0, b.length), h = h.slice(b.length), b) : null
                            }
                    };
                m.G && function() {
                    var a = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                        b = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,
                        c = [];
                    c.H = function() {
                        return this[this.length - 1]
                    };
                    c.v = function(l) {
                        var p = this.H();
                        return p && p.tagName && p.tagName.toUpperCase() === l.toUpperCase()
                    };
                    c.V = function(l) {
                        for (var p =
                                0, x; x = this[p]; p++)
                            if (x.tagName === l) return !0;
                        return !1
                    };
                    var d = function(l) {
                            l && "startTag" === l.type && (l.s = a.test(l.tagName) || l.s);
                            return l
                        },
                        k = f,
                        g = function() {
                            h = "</" + c.pop().tagName + ">" + h
                        },
                        r = {
                            startTag: function(l) {
                                var p = l.tagName;
                                "TR" === p.toUpperCase() && c.v("TABLE") ? (h = "<TBODY>" + h, u()) : m.na && b.test(p) && c.V(p) ? c.v(p) ? g() : (h = "</" + l.tagName + ">" + h, u()) : l.s || c.push(l)
                            },
                            endTag: function(l) {
                                c.H() ? m.W && !c.v(l.tagName) ? g() : c.pop() : m.W && (k(), u())
                            }
                        },
                        u = function() {
                            var l = h,
                                p = d(k());
                            h = l;
                            if (p && r[p.type]) r[p.type](p)
                        };
                    f = function() {
                        u();
                        return d(k())
                    }
                }();
                return {
                    append: function(a) {
                        h += a
                    },
                    da: f,
                    ra: function(a) {
                        for (var b;
                            (b = f()) && (!a[b.type] || !1 !== a[b.type](b)););
                    },
                    clear: function() {
                        var a = h;
                        h = "";
                        return a
                    },
                    sa: function() {
                        return h
                    },
                    stack: []
                }
            }
            var v = function() {
                    var h = {},
                        m = this.document.createElement("div");
                    m.innerHTML = "<P><I></P></I>";
                    h.ua = "<P><I></P></I>" !== m.innerHTML;
                    m.innerHTML = "<P><i><P></P></i></P>";
                    h.ta = 2 === m.childNodes.length;
                    return h
                }(),
                w = /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                q = /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                t = /([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
                B = /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;
            n.supports = v;
            for (var A in v);
            E = n
        })();
        (function() {
            function n() {}

            function v(e) {
                return void 0 !== e && null !== e
            }

            function w(e, f, a) {
                var b, c = e && e.length || 0;
                for (b = 0; b < c; b++) f.call(a, e[b], b)
            }

            function q(e, f, a) {
                for (var b in e) e.hasOwnProperty(b) && f.call(a, b, e[b])
            }

            function t(e, f) {
                q(f, function(a, b) {
                    e[a] = b
                });
                return e
            }

            function B(e, f) {
                e = e || {};
                q(f, function(a, b) {
                    v(e[a]) || (e[a] = b)
                });
                return e
            }

            function A(e) {
                try {
                    return y.call(e)
                } catch (a) {
                    var f = [];
                    w(e, function(b) {
                        f.push(b)
                    });
                    return f
                }
            }
            var h = {
                    J: n,
                    K: n,
                    L: n,
                    M: n,
                    O: n,
                    P: function(e) {
                        return e
                    },
                    done: n,
                    error: function(e) {
                        throw e;
                    },
                    ea: !1
                },
                m = this;
            if (!m.postscribe) {
                var y = Array.prototype.slice,
                    z = function() {
                        function e(a, b, c) {
                            var d = "data-ps-" + b;
                            if (2 === arguments.length) {
                                var k = a.getAttribute(d);
                                return v(k) ? String(k) : k
                            }
                            v(c) && "" !== c ? a.setAttribute(d, c) : a.removeAttribute(d)
                        }

                        function f(a, b) {
                            var c = a.ownerDocument;
                            t(this, {
                                root: a,
                                options: b,
                                l: c.defaultView || c.parentWindow,
                                i: c,
                                o: E("", {
                                    N: !0
                                }),
                                u: [a],
                                B: "",
                                C: c.createElement(a.nodeName),
                                j: [],
                                h: []
                            });
                            e(this.C, "proxyof", 0)
                        }
                        f.prototype.write = function() {
                            [].push.apply(this.h, arguments);
                            for (var a; !this.m &&
                                this.h.length;) a = this.h.shift(), "function" === typeof a ? this.U(a) : this.D(a)
                        };
                        f.prototype.U = function(a) {
                            var b = {
                                type: "function",
                                value: a.name || a.toString()
                            };
                            this.A(b);
                            a.call(this.l, this.i);
                            this.I(b)
                        };
                        f.prototype.D = function(a) {
                            this.o.append(a);
                            for (var b, c = [], d, k;
                                (b = this.o.da()) && !(d = b && "tagName" in b ? !!~b.tagName.toLowerCase().indexOf("script") : !1) && !(k = b && "tagName" in b ? !!~b.tagName.toLowerCase().indexOf("style") : !1);) c.push(b);
                            this.ja(c);
                            d && this.X(b);
                            k && this.Y(b)
                        };
                        f.prototype.ja = function(a) {
                            var b = this.R(a);
                            b.F && (b.Z = this.B + b.F, this.B += b.proxy, this.C.innerHTML = b.Z, this.ha())
                        };
                        f.prototype.R = function(a) {
                            var b = this.u.length,
                                c = [],
                                d = [],
                                k = [];
                            w(a, function(g) {
                                c.push(g.text);
                                if (g.g) {
                                    if (!/^noscript$/i.test(g.tagName)) {
                                        var r = b++;
                                        d.push(g.text.replace(/(\/?>)/, " data-ps-id=" + r + " $1"));
                                        "ps-script" !== g.g.id && "ps-style" !== g.g.id && k.push("atomicTag" === g.type ? "" : "<" + g.tagName + " data-ps-proxyof=" + r + (g.s ? " />" : ">"))
                                    }
                                } else d.push(g.text), k.push("endTag" === g.type ? g.text : "")
                            });
                            return {
                                va: a,
                                raw: c.join(""),
                                F: d.join(""),
                                proxy: k.join("")
                            }
                        };
                        f.prototype.ha = function() {
                            for (var a, b = [this.C]; v(a = b.shift());) {
                                var c = 1 === a.nodeType;
                                if (!c || !e(a, "proxyof")) {
                                    c && (this.u[e(a, "id")] = a, e(a, "id", null));
                                    var d = a.parentNode && e(a.parentNode, "proxyof");
                                    d && this.u[d].appendChild(a)
                                }
                                b.unshift.apply(b, A(a.childNodes))
                            }
                        };
                        f.prototype.X = function(a) {
                            var b = this.o.clear();
                            b && this.h.unshift(b);
                            a.src = a.g.src || a.g.la;
                            a.src && this.j.length ? this.m = a : this.A(a);
                            var c = this;
                            this.ia(a, function() {
                                c.I(a)
                            })
                        };
                        f.prototype.Y = function(a) {
                            var b = this.o.clear();
                            b && this.h.unshift(b);
                            a.type =
                                a.g.type || a.g.TYPE || "text/css";
                            this.ka(a);
                            b && this.write()
                        };
                        f.prototype.ka = function(a) {
                            var b = this.T(a);
                            this.aa(b);
                            a.content && (b.styleSheet && !b.sheet ? b.styleSheet.cssText = a.content : b.appendChild(this.i.createTextNode(a.content)))
                        };
                        f.prototype.T = function(a) {
                            var b = this.i.createElement(a.tagName);
                            b.setAttribute("type", a.type);
                            q(a.g, function(c, d) {
                                b.setAttribute(c, d)
                            });
                            return b
                        };
                        f.prototype.aa = function(a) {
                            this.D('<span id="ps-style"/>');
                            var b = this.i.getElementById("ps-style");
                            b.parentNode.replaceChild(a,
                                b)
                        };
                        f.prototype.A = function(a) {
                            a.ba = this.h;
                            this.h = [];
                            this.j.unshift(a)
                        };
                        f.prototype.I = function(a) {
                            a !== this.j[0] ? this.options.error({
                                message: "Bad script nesting or script finished twice"
                            }) : (this.j.shift(), this.write.apply(this, a.ba), !this.j.length && this.m && (this.A(this.m), this.m = null))
                        };
                        f.prototype.ia = function(a, b) {
                            var c = this.S(a),
                                d = this.ga(c),
                                k = this.options.J;
                            a.src && (c.src = a.src, this.fa(c, d ? k : function() {
                                b();
                                k()
                            }));
                            try {
                                this.$(c), a.src && !d || b()
                            } catch (g) {
                                this.options.error(g), b()
                            }
                        };
                        f.prototype.S = function(a) {
                            var b =
                                this.i.createElement(a.tagName);
                            q(a.g, function(c, d) {
                                b.setAttribute(c, d)
                            });
                            a.content && (b.text = a.content);
                            return b
                        };
                        f.prototype.$ = function(a) {
                            this.D('<span id="ps-script"/>');
                            var b = this.i.getElementById("ps-script");
                            b.parentNode.replaceChild(a, b)
                        };
                        f.prototype.fa = function(a, b) {
                            function c() {
                                a = a.onload = a.onreadystatechange = a.onerror = null
                            }
                            var d = this.options.error;
                            t(a, {
                                onload: function() {
                                    c();
                                    b()
                                },
                                onreadystatechange: function() {
                                    /^(loaded|complete)$/.test(a.readyState) && (c(), b())
                                },
                                onerror: function() {
                                    var k = {
                                        message: "remote script failed " +
                                            a.src
                                    };
                                    c();
                                    d(k);
                                    b()
                                }
                            })
                        };
                        f.prototype.ga = function(a) {
                            return !/^script$/i.test(a.nodeName) || !!(this.options.ea && a.src && a.hasAttribute("async"))
                        };
                        return f
                    }();
                m.postscribe = function() {
                    function e() {
                        var d = b.shift(),
                            k;
                        d && (k = d[d.length - 1], k.K(), d.stream = f.apply(null, d), k.L())
                    }

                    function f(d, k, g) {
                        function r(x) {
                            x = g.P(x);
                            c.write(x);
                            g.M(x)
                        }
                        c = new z(d, g);
                        c.id = a++;
                        c.name = g.name || c.id;
                        var u = d.ownerDocument,
                            l = {
                                close: u.close,
                                open: u.open,
                                write: u.write,
                                writeln: u.writeln
                            };
                        t(u, {
                            close: n,
                            open: n,
                            write: function() {
                                return r(A(arguments).join(""))
                            },
                            writeln: function() {
                                return r(A(arguments).join("") + "\n")
                            }
                        });
                        var p = c.l.onerror || n;
                        c.l.onerror = function(x, G, H) {
                            g.error({
                                pa: x + " - " + G + ":" + H
                            });
                            p.apply(c.l, arguments)
                        };
                        c.write(k, function() {
                            t(u, l);
                            c.l.onerror = p;
                            g.done();
                            c = null;
                            e()
                        });
                        return c
                    }
                    var a = 0,
                        b = [],
                        c = null;
                    return t(function(d, k, g) {
                        "function" === typeof g && (g = {
                            done: g
                        });
                        g = B(g, h);
                        d = /^#/.test(d) ? m.document.getElementById(d.substr(1)) : d.oa ? d[0] : d;
                        var r = [d, k, g];
                        d.ca = {
                            cancel: function() {
                                r.stream ? r.stream.abort() : r[1] = n
                            }
                        };
                        g.O(r);
                        b.push(r);
                        c || e();
                        return d.ca
                    }, {
                        streams: {},
                        qa: b,
                        ma: z
                    })
                }();
                F = m.postscribe
            }
        })();
        D("google_tag_manager_external.postscribe.installPostscribe", function() {
            var n = window.google_tag_manager;
            n && (n.postscribe || (n.postscribe = window.postscribe || F))
        });
        D("google_tag_manager_external.postscribe.getPostscribe", function() {
            return window.google_tag_manager.postscribe
        });
    }).call(this);
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var l, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ca = function(a) {
            return a.raw = a
        },
        da = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        ea = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        fa;
    if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
    else {
        var ha;
        a: {
            var ia = {
                    a: !0
                },
                ja = {};
            try {
                ja.__proto__ = ia;
                ha = ja.a;
                break a
            } catch (a) {}
            ha = !1
        }
        fa = ha ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ka = fa,
        la = function(a, b) {
            a.prototype = ea(b.prototype);
            a.prototype.constructor = a;
            if (ka) ka(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.al = b.prototype
        },
        ma = this || self,
        na = function(a) {
            return a
        };
    var oa = function(a, b) {
        this.g = a;
        this.o = b
    };
    var pa = function(a) {
            return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
        },
        ra = function() {
            this.C = {};
            this.s = !1;
            this.I = {}
        },
        sa = function(a, b) {
            var c = [],
                d;
            for (d in a.C)
                if (a.C.hasOwnProperty(d)) switch (d = d.substr(5), b) {
                    case 1:
                        c.push(d);
                        break;
                    case 2:
                        c.push(a.get(d));
                        break;
                    case 3:
                        c.push([d, a.get(d)])
                }
            return c
        };
    ra.prototype.get = function(a) {
        return this.C["dust." + a]
    };
    ra.prototype.set = function(a, b) {
        this.s || (a = "dust." + a, this.I.hasOwnProperty(a) || (this.C[a] = b))
    };
    ra.prototype.has = function(a) {
        return this.C.hasOwnProperty("dust." + a)
    };
    var ta = function(a, b) {
        b = "dust." + b;
        a.s || a.I.hasOwnProperty(b) || delete a.C[b]
    };
    ra.prototype.Lb = function() {
        this.s = !0
    };
    var ua = function(a) {
        this.o = new ra;
        this.g = [];
        this.s = !1;
        a = a || [];
        for (var b in a) a.hasOwnProperty(b) && (pa(b) ? this.g[Number(b)] = a[Number(b)] : this.o.set(b, a[b]))
    };
    l = ua.prototype;
    l.toString = function(a) {
        if (a && 0 <= a.indexOf(this)) return "";
        for (var b = [], c = 0; c < this.g.length; c++) {
            var d = this.g[c];
            null === d || void 0 === d ? b.push("") : d instanceof ua ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(d.toString())
        }
        return b.join(",")
    };
    l.set = function(a, b) {
        if (!this.s)
            if ("length" === a) {
                if (!pa(b)) throw Error("RangeError: Length property must be a valid integer.");
                this.g.length = Number(b)
            } else pa(a) ? this.g[Number(a)] = b : this.o.set(a, b)
    };
    l.get = function(a) {
        return "length" === a ? this.length() : pa(a) ? this.g[Number(a)] : this.o.get(a)
    };
    l.length = function() {
        return this.g.length
    };
    l.Kb = function() {
        for (var a = sa(this.o, 1), b = 0; b < this.g.length; b++) a.push(b + "");
        return new ua(a)
    };
    var va = function(a, b) {
        pa(b) ? delete a.g[Number(b)] : ta(a.o, b)
    };
    l = ua.prototype;
    l.pop = function() {
        return this.g.pop()
    };
    l.push = function(a) {
        return this.g.push.apply(this.g, Array.prototype.slice.call(arguments))
    };
    l.shift = function() {
        return this.g.shift()
    };
    l.splice = function(a, b, c) {
        return new ua(this.g.splice.apply(this.g, arguments))
    };
    l.unshift = function(a) {
        return this.g.unshift.apply(this.g, Array.prototype.slice.call(arguments))
    };
    l.has = function(a) {
        return pa(a) && this.g.hasOwnProperty(a) || this.o.has(a)
    };
    l.Lb = function() {
        this.s = !0;
        Object.freeze(this.g);
        this.o.Lb()
    };
    var wa = function() {
        function a(f, g) {
            if (b[f]) {
                if (b[f].fe + g > b[f].max) throw Error("Quota exceeded");
                b[f].fe += g
            }
        }
        var b = {},
            c = void 0,
            d = void 0,
            e = {
                $j: function(f) {
                    c = f
                },
                hh: function() {
                    c && a(c, 1)
                },
                ck: function(f) {
                    d = f
                },
                Mb: function(f) {
                    d && a(d, f)
                },
                Ck: function(f, g) {
                    b[f] = b[f] || {
                        fe: 0
                    };
                    b[f].max = g
                },
                zj: function(f) {
                    return b[f] && b[f].fe || 0
                },
                reset: function() {
                    b = {}
                },
                kj: a
            };
        e.onFnConsume = e.$j;
        e.consumeFn = e.hh;
        e.onStorageConsume = e.ck;
        e.consumeStorage = e.Mb;
        e.setMax = e.Ck;
        e.getConsumed = e.zj;
        e.reset = e.reset;
        e.consume = e.kj;
        return e
    };
    var xa = function(a, b) {
        this.s = a;
        this.R = function(c, d, e) {
            return c.apply(d, e)
        };
        this.C = b;
        this.o = new ra;
        this.g = this.I = void 0
    };
    xa.prototype.add = function(a, b) {
        ya(this, a, b, !1)
    };
    var ya = function(a, b, c, d) {
        if (!a.o.s)
            if (a.s.Mb(("string" === typeof b ? b.length : 1) + ("string" === typeof c ? c.length : 1)), d) {
                var e = a.o;
                e.set(b, c);
                e.I["dust." + b] = !0
            } else a.o.set(b, c)
    };
    xa.prototype.set = function(a, b) {
        this.o.s || (!this.o.has(a) && this.C && this.C.has(a) ? this.C.set(a, b) : (this.s.Mb(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)), this.o.set(a, b)))
    };
    xa.prototype.get = function(a) {
        return this.o.has(a) ? this.o.get(a) : this.C ? this.C.get(a) : void 0
    };
    xa.prototype.has = function(a) {
        return !!this.o.has(a) || !(!this.C || !this.C.has(a))
    };
    var za = function(a) {
        var b = new xa(a.s, a);
        a.I && (b.I = a.I);
        b.R = a.R;
        b.g = a.g;
        return b
    };
    var Aa = function() {},
        Ca = function(a) {
            return "function" === typeof a
        },
        m = function(a) {
            return "string" === typeof a
        },
        Da = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        Ea = Array.isArray,
        Ga = function(a, b) {
            if (a && Ea(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        Ha = function(a, b) {
            if (!Da(a) || !Da(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        Ka = function(a, b) {
            for (var c = new Ja, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        La = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Ma = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Na = function(a) {
            return Math.round(Number(a)) || 0
        },
        Oa = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Pa = function(a) {
            var b = [];
            if (Ea(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Ra = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Sa = function() {
            return new Date(Date.now())
        },
        Ta = function() {
            return Sa().getTime()
        },
        Ja = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    Ja.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    Ja.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Ua = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Va = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Wa = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Xa = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Ya = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Za = function(a, b) {
            var c = z;
            b = b || [];
            for (var d = c, e = 0; e < a.length - 1; e++) {
                if (!d.hasOwnProperty(a[e])) return;
                d = d[a[e]];
                if (0 <=
                    b.indexOf(d)) return
            }
            return d
        },
        $a = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        ab = /^\w{1,9}$/,
        bb = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            La(a, function(d, e) {
                ab.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        cb = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };
    var db = function(a, b) {
        ra.call(this);
        this.R = a;
        this.eb = b
    };
    la(db, ra);
    db.prototype.toString = function() {
        return this.R
    };
    db.prototype.Kb = function() {
        return new ua(sa(this, 1))
    };
    db.prototype.g = function(a, b) {
        a.s.hh();
        return this.eb.apply(new eb(this, a), Array.prototype.slice.call(arguments, 1))
    };
    db.prototype.o = function(a, b) {
        try {
            return this.g.apply(this, Array.prototype.slice.call(arguments, 0))
        } catch (c) {}
    };
    var gb = function(a, b) {
            for (var c, d = 0; d < b.length && !(c = fb(a, b[d]), c instanceof oa); d++);
            return c
        },
        fb = function(a, b) {
            try {
                var c = a.get(String(b[0]));
                if (!(c && c instanceof db)) throw Error("Attempting to execute non-function " + b[0] + ".");
                return c.g.apply(c, [a].concat(b.slice(1)))
            } catch (e) {
                var d = a.I;
                d && d(e, b.context ? {
                    id: b[0],
                    line: b.context.line
                } : null);
                throw e;
            }
        },
        eb = function(a, b) {
            this.o = a;
            this.g = b
        },
        G = function(a, b) {
            return Ea(b) ? fb(a.g, b) : b
        },
        H = function(a) {
            return a.o.R
        };
    var hb = function() {
        ra.call(this)
    };
    la(hb, ra);
    hb.prototype.Kb = function() {
        return new ua(sa(this, 1))
    };
    var ib = {
        control: function(a, b) {
            return new oa(a, G(this, b))
        },
        fn: function(a, b, c) {
            var d = this.g,
                e = G(this, b);
            if (!(e instanceof ua)) throw Error("Error: non-List value given for Fn argument names.");
            var f = Array.prototype.slice.call(arguments, 2);
            this.g.s.Mb(a.length + f.length);
            return new db(a, function() {
                return function(g) {
                    var h = za(d);
                    void 0 === h.g && (h.g = this.g.g);
                    for (var k = Array.prototype.slice.call(arguments, 0), n = 0; n < k.length; n++)
                        if (k[n] = G(this, k[n]), k[n] instanceof oa) return k[n];
                    for (var p = e.get("length"), q =
                            0; q < p; q++) q < k.length ? h.add(e.get(q), k[q]) : h.add(e.get(q), void 0);
                    h.add("arguments", new ua(k));
                    var r = gb(h, f);
                    if (r instanceof oa) return "return" === r.g ? r.o : r
                }
            }())
        },
        list: function(a) {
            var b = this.g.s;
            b.Mb(arguments.length);
            for (var c = new ua, d = 0; d < arguments.length; d++) {
                var e = G(this, arguments[d]);
                "string" === typeof e && b.Mb(e.length ? e.length - 1 : 0);
                c.push(e)
            }
            return c
        },
        map: function(a) {
            for (var b = this.g.s, c = new hb, d = 0; d < arguments.length - 1; d += 2) {
                var e = G(this, arguments[d]) + "",
                    f = G(this, arguments[d + 1]),
                    g = e.length;
                g += "string" ===
                    typeof f ? f.length : 1;
                b.Mb(g);
                c.set(e, f)
            }
            return c
        },
        undefined: function() {}
    };
    var jb = function() {
            this.s = wa();
            this.g = new xa(this.s)
        },
        kb = function(a, b, c) {
            var d = new db(b, c);
            d.Lb();
            a.g.set(b, d)
        },
        lb = function(a, b, c) {
            ib.hasOwnProperty(b) && kb(a, c || b, ib[b])
        };
    jb.prototype.execute = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 0);
        return this.o(c)
    };
    jb.prototype.o = function(a) {
        for (var b, c = 0; c < arguments.length; c++) b = fb(this.g, arguments[c]);
        return b
    };
    jb.prototype.C = function(a, b) {
        var c = za(this.g);
        c.g = a;
        for (var d, e = 1; e < arguments.length; e++) d = d = fb(c, arguments[e]);
        return d
    };
    var mb, nb = function() {
        if (void 0 === mb) {
            var a = null,
                b = ma.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: na,
                        createScript: na,
                        createScriptURL: na
                    })
                } catch (c) {
                    ma.console && ma.console.error(c.message)
                }
                mb = a
            } else mb = a
        }
        return mb
    };
    var pb = function(a, b) {
        this.g = b === ob ? a : ""
    };
    pb.prototype.toString = function() {
        return this.g + ""
    };
    var qb = function(a) {
            return a instanceof pb && a.constructor === pb ? a.g : "type_error:TrustedResourceUrl"
        },
        ob = {},
        rb = function(a) {
            var b = nb(),
                c = b ? b.createScriptURL(a) : a;
            return new pb(c, ob)
        };
    var sb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function tb() {
        var a = ma.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }

    function ub(a) {
        return -1 != tb().indexOf(a)
    };
    var vb = {},
        wb = function(a, b, c) {
            this.g = c === vb ? a : ""
        };
    wb.prototype.toString = function() {
        return this.g.toString()
    };
    var xb = function(a) {
            return a instanceof wb && a.constructor === wb ? a.g : "type_error:SafeHtml"
        },
        yb = function(a) {
            var b = nb(),
                c = b ? b.createHTML(a) : a;
            return new wb(c, null, vb)
        };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var zb = {};
    var Ab = function() {},
        Bb = function(a) {
            this.g = a
        };
    la(Bb, Ab);
    Bb.prototype.toString = function() {
        return this.g
    };

    function Cb(a, b) {
        var c = [new Bb(Db[0].toLowerCase(), zb)];
        if (0 === c.length) throw Error("No prefixes are provided");
        var d = c.map(function(f) {
                var g;
                if (f instanceof Bb) g = f.g;
                else throw Error("");
                return g
            }),
            e = b.toLowerCase();
        if (d.every(function(f) {
                return 0 !== e.indexOf(f)
            })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    }

    function Eb(a) {
        if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
        if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
    };
    var z = window,
        I = document,
        Fb = navigator,
        Gb = I.currentScript && I.currentScript.src,
        Hb = function(a, b) {
            var c = z[a];
            z[a] = void 0 === c ? b : c;
            return z[a]
        },
        Ib = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Jb = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        Kb = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function Lb(a, b, c) {
        b && La(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Mb = function(a, b, c, d) {
            var e = I.createElement("script");
            Lb(e, d, Jb);
            e.type = "text/javascript";
            e.async = !0;
            var f = rb(a);
            e.src = qb(f);
            var g, h, k, n = null == (k = (h = (e.ownerDocument && e.ownerDocument.defaultView || window).document).querySelector) ? void 0 : k.call(h, "script[nonce]");
            (g = n ? n.nonce || n.getAttribute("nonce") || "" : "") && e.setAttribute("nonce", g);
            Ib(e, b);
            c && (e.onerror = c);
            var p = I.getElementsByTagName("script")[0] || I.body || I.head;
            p.parentNode.insertBefore(e, p);
            return e
        },
        Nb = function() {
            if (Gb) {
                var a = Gb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Ob = function(a, b, c, d, e) {
            var f = e,
                g = !1;
            f || (f = I.createElement("iframe"), g = !0);
            Lb(f, c, Kb);
            d && La(d, function(k, n) {
                f.dataset[k] = n
            });
            f.height = "0";
            f.width = "0";
            f.style.display = "none";
            f.style.visibility = "hidden";
            if (g) {
                var h = I.body && I.body.lastChild || I.body || I.head;
                h.parentNode.insertBefore(f, h)
            }
            Ib(f, b);
            void 0 !== a && (f.src = a);
            return f
        },
        Pb = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror =
                function() {
                    d.onerror = null;
                    c && c()
                };
            d.src = a;
            return d
        },
        Qb = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Rb = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        K = function(a) {
            z.setTimeout(a, 0)
        },
        Sb = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        Tb = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b &&
                (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Ub = function(a) {
            var b = I.createElement("div"),
                c = b,
                d = yb("A<div>" + a + "</div>");
            void 0 !== c.tagName && Eb(c);
            c.innerHTML = xb(d);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        Vb = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Wb = function(a) {
            var b;
            try {
                b = Fb.sendBeacon && Fb.sendBeacon(a)
            } catch (c) {}
            b ||
                Pb(a)
        },
        Yb = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        Zb = function(a) {
            var b = I.featurePolicy;
            return b && Ca(b.allowsFeature) ? b.allowsFeature(a) : !1
        };
    var $b = function(a, b) {
            return G(this, a) && G(this, b)
        },
        ac = function(a, b) {
            return G(this, a) === G(this, b)
        },
        bc = function(a, b) {
            return G(this, a) || G(this, b)
        },
        cc = function(a, b) {
            a = G(this, a);
            b = G(this, b);
            return -1 < String(a).indexOf(String(b))
        },
        dc = function(a, b) {
            a = String(G(this, a));
            b = String(G(this, b));
            return a.substring(0, b.length) === b
        },
        ec = function(a, b) {
            a = G(this, a);
            b = G(this, b);
            switch (a) {
                case "pageLocation":
                    var c = z.location.href;
                    b instanceof hb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
                    return c
            }
        };
    var gc = function() {
        this.g = new jb;
        fc(this)
    };
    gc.prototype.execute = function(a) {
        return this.g.o(a)
    };
    var fc = function(a) {
        lb(a.g, "map");
        var b = function(c, d) {
            kb(a.g, c, d)
        };
        b("and", $b);
        b("contains", cc);
        b("equals", ac);
        b("or", bc);
        b("startsWith", dc);
        b("variable", ec)
    };
    var hc = function(a) {
        if (a instanceof hc) return a;
        this.jb = a
    };
    hc.prototype.toString = function() {
        return String(this.jb)
    };
    var jc = function(a) {
        ra.call(this);
        this.g = a;
        this.set("then", ic(this));
        this.set("catch", ic(this, !0));
        this.set("finally", ic(this, !1, !0))
    };
    la(jc, hb);
    var ic = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c;
        return new db("", function(d, e) {
            b && (e = d, d = void 0);
            c && (e = d);
            d instanceof db || (d = void 0);
            e instanceof db || (e = void 0);
            var f = za(this.g),
                g = function(k) {
                    return function(n) {
                        return c ? (k.g(f), a.g) : k.g(f, n)
                    }
                },
                h = a.g.then(d && g(d), e && g(e));
            return new jc(h)
        })
    };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var kc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        lc = function(a) {
            if (null == a) return String(a);
            var b = kc.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        mc = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        nc = function(a) {
            if (!a || "object" != lc(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !mc(a, "constructor") && !mc(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || mc(a, b)
        },
        oc = function(a, b) {
            var c = b || ("array" == lc(a) ? [] : {}),
                d;
            for (d in a)
                if (mc(a, d)) {
                    var e = a[d];
                    "array" == lc(e) ? ("array" != lc(c[d]) && (c[d] = []), c[d] = oc(e, c[d])) : nc(e) ? (nc(c[d]) || (c[d] = {}), c[d] = oc(e, c[d])) : c[d] = e
                }
            return c
        };
    var qc = function(a, b, c) {
            var d = [],
                e = [],
                f = function(h, k) {
                    for (var n = sa(h, 1), p = 0; p < n.length; p++) k[n[p]] = g(h.get(n[p]))
                },
                g = function(h) {
                    var k = d.indexOf(h);
                    if (-1 < k) return e[k];
                    if (h instanceof ua) {
                        var n = [];
                        d.push(h);
                        e.push(n);
                        for (var p = h.Kb(), q = 0; q < p.length(); q++) n[p.get(q)] = g(h.get(p.get(q)));
                        return n
                    }
                    if (h instanceof jc) return h.g;
                    if (h instanceof hb) {
                        var r = {};
                        d.push(h);
                        e.push(r);
                        f(h, r);
                        return r
                    }
                    if (h instanceof db) {
                        var u = function() {
                            for (var v = Array.prototype.slice.call(arguments, 0), x = 0; x < v.length; x++) v[x] = pc(v[x],
                                b, c);
                            var y = b ? b.s : wa(),
                                w = new xa(y);
                            b && (w.g = b.g);
                            return g(h.g.apply(h, [w].concat(v)))
                        };
                        d.push(h);
                        e.push(u);
                        f(h, u);
                        return u
                    }
                    var t = !1;
                    switch (c) {
                        case 1:
                            t = !0;
                            break;
                        case 2:
                            t = !1;
                            break;
                        case 3:
                            t = !1;
                            break;
                        default:
                    }
                    if (h instanceof hc && t) return h.jb;
                    switch (typeof h) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                            return h;
                        case "object":
                            if (null === h) return null
                    }
                };
            return g(a)
        },
        pc = function(a,
            b, c) {
            var d = [],
                e = [],
                f = function(h, k) {
                    for (var n in h) h.hasOwnProperty(n) && k.set(n, g(h[n]))
                },
                g = function(h) {
                    var k = d.indexOf(h);
                    if (-1 < k) return e[k];
                    if (Ea(h) || Ma(h)) {
                        var n = new ua([]);
                        d.push(h);
                        e.push(n);
                        for (var p in h) h.hasOwnProperty(p) && n.set(p, g(h[p]));
                        return n
                    }
                    if (nc(h)) {
                        var q = new hb;
                        d.push(h);
                        e.push(q);
                        f(h, q);
                        return q
                    }
                    if ("function" === typeof h) {
                        var r = new db("", function(w) {
                            for (var A = Array.prototype.slice.call(arguments, 0), B = 0; B < A.length; B++) A[B] = qc(G(this, A[B]), b, c);
                            return g((0, this.g.R)(h, h, A))
                        });
                        d.push(h);
                        e.push(r);
                        f(h, r);
                        return r
                    }
                    var x = typeof h;
                    if (null === h || "string" === x || "number" === x || "boolean" === x) return h;
                    var y = !1;
                    switch (c) {
                        case 1:
                            y = !0;
                            break;
                        case 2:
                            y = !1;
                            break;
                        default:
                    }
                    if (void 0 !== h && y) return new hc(h)
                };
            return g(a)
        };
    var rc = function(a) {
            for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
            return b
        },
        sc = function(a) {
            if (void 0 === a || Ea(a) || nc(a)) return !0;
            switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                    return !0
            }
            return !1
        };
    var tc = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e] instanceof ua)
                    for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g));
                else c.push(arguments[e]);
            return new ua(c)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
                d < c; d++)
                if (this.has(d) && !b.g(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.g(a, this.get(e), e, this) && d.push(this.get(e));
            return new ua(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.g(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length(),
                e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++)
                if (this.has(f) &&
                    this.get(f) === b) return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length(),
                e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.g(a, this.get(e), e, this));
            return new ua(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a, b) {
            return this.push.apply(this,
                Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) {
            var d = this.length(),
                e, f = 0;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d) throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var h = f; h < d; h++) this.has(h) && (e = b.g(a, e, this.get(h), h, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(),
                e, f = d - 1;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var h = f; 0 <= h; h--) this.has(h) && (e = b.g(a, e, this.get(h), h, this));
            return e
        },
        reverse: function() {
            for (var a = rc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : va(this, c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ?
                Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new ua(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.g(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function(a, b) {
            var c = rc(this);
            void 0 === b ? c.sort() : c.sort(function(e, f) {
                return Number(b.g(a, e, f))
            });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : va(this, d);
            return this
        },
        splice: function(a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments,
                1, arguments.length - 1))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a, b) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var uc = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),
        vc = new oa("break"),
        wc = new oa("continue"),
        xc = function(a, b) {
            return G(this, a) + G(this, b)
        },
        yc = function(a, b) {
            return G(this, a) && G(this, b)
        },
        zc = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            if (!(c instanceof ua)) throw Error("Error: Non-List argument given to Apply instruction.");
            if (null === a || void 0 === a) throw Error("TypeError: Can't read property " +
                b + " of " + a + ".");
            var d = "number" === typeof a;
            if ("boolean" === typeof a || d) {
                if ("toString" === b) {
                    if (d && c.length()) {
                        var e = qc(c.get(0));
                        try {
                            return a.toString(e)
                        } catch (q) {}
                    }
                    return a.toString()
                }
                throw Error("TypeError: " + a + "." + b + " is not a function.");
            }
            if ("string" === typeof a) {
                if (0 <= uc.indexOf(b)) {
                    var f = qc(c);
                    return pc(a[b].apply(a, f), this.g)
                }
                throw Error("TypeError: " + b + " is not a function");
            }
            if (a instanceof ua) {
                if (a.has(b)) {
                    var g = a.get(b);
                    if (g instanceof db) {
                        var h = rc(c);
                        h.unshift(this.g);
                        return g.g.apply(g, h)
                    }
                    throw Error("TypeError: " +
                        b + " is not a function");
                }
                if (0 <= tc.supportedMethods.indexOf(b)) {
                    var k = rc(c);
                    k.unshift(this.g);
                    return tc[b].apply(a, k)
                }
            }
            if (a instanceof db || a instanceof hb) {
                if (a.has(b)) {
                    var n = a.get(b);
                    if (n instanceof db) {
                        var p = rc(c);
                        p.unshift(this.g);
                        return n.g.apply(n, p)
                    }
                    throw Error("TypeError: " + b + " is not a function");
                }
                if ("toString" === b) return a instanceof db ? a.R : a.toString();
                if ("hasOwnProperty" === b) return a.has.apply(a, rc(c))
            }
            if (a instanceof hc && "toString" === b) return a.toString();
            throw Error("TypeError: Object has no '" +
                b + "' property.");
        },
        Ac = function(a, b) {
            a = G(this, a);
            if ("string" !== typeof a) throw Error("Invalid key name given for assignment.");
            var c = this.g;
            if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
            var d = G(this, b);
            c.set(a, d);
            return d
        },
        Dc = function(a) {
            var b = za(this.g),
                c = gb(b, Array.prototype.slice.apply(arguments));
            if (c instanceof oa) return c
        },
        Ec = function() {
            return vc
        },
        Fc = function(a) {
            for (var b = G(this, a), c = 0; c < b.length; c++) {
                var d = G(this, b[c]);
                if (d instanceof oa) return d
            }
        },
        Gc = function(a) {
            for (var b =
                    this.g, c = 0; c < arguments.length - 1; c += 2) {
                var d = arguments[c];
                if ("string" === typeof d) {
                    var e = G(this, arguments[c + 1]);
                    ya(b, d, e, !0)
                }
            }
        },
        Hc = function() {
            return wc
        },
        Ic = function(a, b, c) {
            var d = new ua;
            b = G(this, b);
            for (var e = 0; e < b.length; e++) d.push(b[e]);
            var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
            this.g.add(a, G(this, f))
        },
        Jc = function(a, b) {
            return G(this, a) / G(this, b)
        },
        Kc = function(a, b) {
            a = G(this, a);
            b = G(this, b);
            var c = a instanceof hc,
                d = b instanceof hc;
            return c || d ? c && d ? a.jb == b.jb : !1 : a ==
                b
        },
        Lc = function(a) {
            for (var b, c = 0; c < arguments.length; c++) b = G(this, arguments[c]);
            return b
        };

    function Mc(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e)),
                g = gb(f, d);
            if (g instanceof oa) {
                if ("break" === g.g) break;
                if ("return" === g.g) return g
            }
        }
    }

    function Nc(a, b, c) {
        if ("string" === typeof b) return Mc(a, function() {
            return b.length
        }, function(f) {
            return f
        }, c);
        if (b instanceof hb || b instanceof ua || b instanceof db) {
            var d = b.Kb(),
                e = d.length();
            return Mc(a, function() {
                return e
            }, function(f) {
                return d.get(f)
            }, c)
        }
    }
    var Oc = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return Nc(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        Pc = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return Nc(function(e) {
                var f = za(d);
                ya(f, a, e, !0);
                return f
            }, b, c)
        },
        Qc = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return Nc(function(e) {
                var f = za(d);
                f.add(a, e);
                return f
            }, b, c)
        },
        Sc = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return Rc(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        Tc =
        function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return Rc(function(e) {
                var f = za(d);
                ya(f, a, e, !0);
                return f
            }, b, c)
        },
        Uc = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return Rc(function(e) {
                var f = za(d);
                f.add(a, e);
                return f
            }, b, c)
        };

    function Rc(a, b, c) {
        if ("string" === typeof b) return Mc(a, function() {
            return b.length
        }, function(d) {
            return b[d]
        }, c);
        if (b instanceof ua) return Mc(a, function() {
            return b.length()
        }, function(d) {
            return b.get(d)
        }, c);
        throw new TypeError("The value is not iterable.");
    }
    var Vc = function(a, b, c, d) {
            function e(p, q) {
                for (var r = 0; r < f.length(); r++) {
                    var u = f.get(r);
                    q.add(u, p.get(u))
                }
            }
            var f = G(this, a);
            if (!(f instanceof ua)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
            var g = this.g;
            d = G(this, d);
            var h = za(g);
            for (e(g, h); fb(h, b);) {
                var k = gb(h, d);
                if (k instanceof oa) {
                    if ("break" === k.g) break;
                    if ("return" === k.g) return k
                }
                var n = za(g);
                e(h, n);
                fb(n, c);
                h = n
            }
        },
        Wc = function(a) {
            a = G(this, a);
            var b = this.g,
                c = !1;
            if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
            return b.get(a)
        },
        Xc = function(a, b) {
            var c;
            a = G(this, a);
            b = G(this, b);
            if (void 0 === a || null === a) throw Error("TypeError: cannot access property of " + a + ".");
            if (a instanceof hb || a instanceof ua || a instanceof db) c = a.get(b);
            else if ("string" === typeof a) "length" === b ? c = a.length : pa(b) && (c = a[b]);
            else if (a instanceof hc) return;
            return c
        },
        Yc = function(a, b) {
            return G(this, a) > G(this,
                b)
        },
        Zc = function(a, b) {
            return G(this, a) >= G(this, b)
        },
        $c = function(a, b) {
            a = G(this, a);
            b = G(this, b);
            a instanceof hc && (a = a.jb);
            b instanceof hc && (b = b.jb);
            return a === b
        },
        ad = function(a, b) {
            return !$c.call(this, a, b)
        },
        bd = function(a, b, c) {
            var d = [];
            G(this, a) ? d = G(this, b) : c && (d = G(this, c));
            var e = gb(this.g, d);
            if (e instanceof oa) return e
        },
        dd = function(a, b) {
            return G(this, a) < G(this, b)
        },
        ed = function(a, b) {
            return G(this, a) <= G(this, b)
        },
        fd = function(a, b) {
            return G(this, a) % G(this, b)
        },
        gd = function(a, b) {
            return G(this, a) * G(this, b)
        },
        hd = function(a) {
            return -G(this,
                a)
        },
        id = function(a) {
            return !G(this, a)
        },
        jd = function(a, b) {
            return !Kc.call(this, a, b)
        },
        kd = function() {
            return null
        },
        ld = function(a, b) {
            return G(this, a) || G(this, b)
        },
        md = function(a, b) {
            var c = G(this, a);
            G(this, b);
            return c
        },
        nd = function(a) {
            return G(this, a)
        },
        od = function(a) {
            return Array.prototype.slice.apply(arguments)
        },
        pd = function(a) {
            return new oa("return", G(this, a))
        },
        qd = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            if (null === a || void 0 === a) throw Error("TypeError: Can't set property " + b + " of " + a + ".");
            (a instanceof db || a instanceof ua || a instanceof hb) && a.set(b, c);
            return c
        },
        rd = function(a, b) {
            return G(this, a) - G(this, b)
        },
        sd = function(a, b, c) {
            a = G(this, a);
            var d = G(this, b),
                e = G(this, c);
            if (!Ea(d) || !Ea(e)) throw Error("Error: Malformed switch instruction.");
            for (var f, g = !1, h = 0; h < d.length; h++)
                if (g || a === G(this, d[h]))
                    if (f = G(this, e[h]), f instanceof oa) {
                        var k = f.g;
                        if ("break" === k) return;
                        if ("return" === k || "continue" === k) return f
                    } else g = !0;
            if (e.length === d.length + 1 && (f = G(this, e[e.length - 1]), f instanceof oa && ("return" === f.g || "continue" ===
                    f.g))) return f
        },
        td = function(a, b, c) {
            return G(this, a) ? G(this, b) : G(this, c)
        },
        ud = function(a) {
            a = G(this, a);
            return a instanceof db ? "function" : typeof a
        },
        vd = function(a) {
            for (var b = this.g, c = 0; c < arguments.length; c++) {
                var d = arguments[c];
                "string" !== typeof d || b.add(d, void 0)
            }
        },
        wd = function(a, b, c, d) {
            var e = G(this, d);
            if (G(this, c)) {
                var f = gb(this.g, e);
                if (f instanceof oa) {
                    if ("break" === f.g) return;
                    if ("return" === f.g) return f
                }
            }
            for (; G(this, a);) {
                var g = gb(this.g, e);
                if (g instanceof oa) {
                    if ("break" === g.g) break;
                    if ("return" === g.g) return g
                }
                G(this,
                    b)
            }
        },
        xd = function(a) {
            return ~Number(G(this, a))
        },
        yd = function(a, b) {
            return Number(G(this, a)) << Number(G(this, b))
        },
        Bd = function(a, b) {
            return Number(G(this, a)) >> Number(G(this, b))
        },
        Cd = function(a, b) {
            return Number(G(this, a)) >>> Number(G(this, b))
        },
        Dd = function(a, b) {
            return Number(G(this, a)) & Number(G(this, b))
        },
        Ed = function(a, b) {
            return Number(G(this, a)) ^ Number(G(this, b))
        },
        Fd = function(a, b) {
            return Number(G(this, a)) | Number(G(this, b))
        };
    var Hd = function() {
        this.g = new jb;
        Gd(this)
    };
    Hd.prototype.execute = function(a) {
        return Id(this.g.o(a))
    };
    var Jd = function(a, b, c) {
            return Id(a.g.C(b, c))
        },
        Gd = function(a) {
            var b = function(d, e) {
                lb(a.g, d, String(e))
            };
            b("control", 49);
            b("fn", 51);
            b("list", 7);
            b("map", 8);
            b("undefined", 44);
            var c = function(d, e) {
                kb(a.g, String(d), e)
            };
            c(0, xc);
            c(1, yc);
            c(2, zc);
            c(3, Ac);
            c(53, Dc);
            c(4, Ec);
            c(5, Fc);
            c(52, Gc);
            c(6, Hc);
            c(9, Fc);
            c(50, Ic);
            c(10, Jc);
            c(12, Kc);
            c(13, Lc);
            c(47, Oc);
            c(54, Pc);
            c(55, Qc);
            c(63, Vc);
            c(64, Sc);
            c(65, Tc);
            c(66, Uc);
            c(15, Wc);
            c(16, Xc);
            c(17, Xc);
            c(18, Yc);
            c(19, Zc);
            c(20, $c);
            c(21, ad);
            c(22, bd);
            c(23, dd);
            c(24, ed);
            c(25, fd);
            c(26, gd);
            c(27,
                hd);
            c(28, id);
            c(29, jd);
            c(45, kd);
            c(30, ld);
            c(32, md);
            c(33, md);
            c(34, nd);
            c(35, nd);
            c(46, od);
            c(36, pd);
            c(43, qd);
            c(37, rd);
            c(38, sd);
            c(39, td);
            c(40, ud);
            c(41, vd);
            c(42, wd);
            c(58, xd);
            c(57, yd);
            c(60, Bd);
            c(61, Cd);
            c(56, Dd);
            c(62, Ed);
            c(59, Fd)
        };

    function Id(a) {
        if (a instanceof oa || a instanceof db || a instanceof ua || a instanceof hb || a instanceof hc || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a
    };
    var Kd = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            ai: a("consent"),
            Be: a("consent_always_fire"),
            cg: a("convert_case_to"),
            dg: a("convert_false_to"),
            eg: a("convert_null_to"),
            fg: a("convert_true_to"),
            gg: a("convert_undefined_to"),
            Mk: a("debug_mode_metadata"),
            Jb: a("function"),
            hf: a("instance_name"),
            Pi: a("live_only"),
            Qi: a("malware_disabled"),
            Ri: a("metadata"),
            Wi: a("original_activity_id"),
            Rk: a("original_vendor_template_id"),
            Qk: a("once_on_load"),
            Vi: a("once_per_event"),
            Mg: a("once_per_load"),
            Tk: a("priority_override"),
            Uk: a("respected_consent_types"),
            Sg: a("setup_tags"),
            Ug: a("tag_id"),
            Vg: a("teardown_tags")
        }
    }();
    var Ld = [],
        Md = {
            "\x00": "&#0;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\v": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            "-": "&#45;",
            "/": "&#47;",
            "=": "&#61;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        },
        Nd = function(a) {
            return Md[a]
        },
        Od = /[\x00\x22\x26\x27\x3c\x3e]/g;
    var Sd = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
        Td = {
            "\x00": "\\x00",
            "\b": "\\x08",
            "\t": "\\t",
            "\n": "\\n",
            "\v": "\\x0b",
            "\f": "\\f",
            "\r": "\\r",
            '"': "\\x22",
            "&": "\\x26",
            "'": "\\x27",
            "/": "\\/",
            "<": "\\x3c",
            "=": "\\x3d",
            ">": "\\x3e",
            "\\": "\\\\",
            "\u0085": "\\x85",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029",
            $: "\\x24",
            "(": "\\x28",
            ")": "\\x29",
            "*": "\\x2a",
            "+": "\\x2b",
            ",": "\\x2c",
            "-": "\\x2d",
            ".": "\\x2e",
            ":": "\\x3a",
            "?": "\\x3f",
            "[": "\\x5b",
            "]": "\\x5d",
            "^": "\\x5e",
            "{": "\\x7b",
            "|": "\\x7c",
            "}": "\\x7d"
        },
        Ud = function(a) {
            return Td[a]
        };
    Ld[7] = function(a) {
        return String(a).replace(Sd, Ud)
    };
    Ld[8] = function(a) {
        if (null == a) return " null ";
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(Sd, Ud) + "'"
        }
    };
    var $d = /['()]/g,
        ae = function(a) {
            return "%" + a.charCodeAt(0).toString(16)
        };
    Ld[12] = function(a) {
        var b =
            encodeURIComponent(String(a));
        $d.lastIndex = 0;
        return $d.test(b) ? b.replace($d, ae) : b
    };
    var be = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        ce = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\v": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD"
        },
        de = function(a) {
            return ce[a]
        };
    Ld[16] = function(a) {
        return a
    };
    var fe;
    var ge = [],
        he = [],
        ie = [],
        je = [],
        ke = [],
        le = {},
        me, ne, qe, re = function(a, b) {
            var c = {};
            c["function"] = "__" + a;
            for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        },
        se = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = le[c],
                f = {},
                g;
            for (g in a)
                if (a.hasOwnProperty(g))
                    if (0 === g.indexOf("vtp_")) e && d && d.gh && d.gh(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g];
                    else if (g === Kd.Be.toString() && a[g]) {}
            e && d && d.fh && (f.vtp_gtmCachedValues = d.fh);
            if (b) {
                if (null == b.name) {
                    var h;
                    a: {
                        var k = b.index;
                        if (null == k) h = "";
                        else {
                            var n;
                            switch (b.type) {
                                case 2:
                                    n = ge[k];
                                    break;
                                case 1:
                                    n = je[k];
                                    break;
                                default:
                                    h = "";
                                    break a
                            }
                            var p = n && n[Kd.hf];
                            h = p ? String(p) : ""
                        }
                    }
                    b.name = h
                }
                e && (f.vtp_gtmEntityIndex = b.index, f.vtp_gtmEntityName = b.name)
            }
            return void 0 !== e ? e(f) : fe(c, f, b)
        },
        ue = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = te(a[e], b, c));
            return d
        },
        te = function(a,
            b, c) {
            if (Ea(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(te(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = ge[f];
                        if (!g || b.If(g)) return;
                        c[f] = !0;
                        var h = String(g[Kd.hf]);
                        try {
                            var k = ue(g, b, c);
                            k.vtp_gtmEventId = b.id;
                            b.priorityId && (k.vtp_gtmPriorityId = b.priorityId);
                            d = se(k, {
                                event: b,
                                index: f,
                                type: 2,
                                name: h
                            });
                            qe && (d = qe.lj(d, k))
                        } catch (w) {
                            b.zh && b.zh(w, Number(f), h), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[te(a[n],
                            b, c)] = te(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = te(a[q], b, c);
                            ne && (p = p || r === ne.Ud);
                            d.push(r)
                        }
                        return ne && p ? ne.pj(d) : d.join("");
                    case "escape":
                        d = te(a[1], b, c);
                        if (ne && Ea(a[1]) && "macro" === a[1][0] && ne.Mj(a)) return ne.ik(d);
                        d = String(d);
                        for (var u = 2; u < a.length; u++) Ld[a[u]] && (d = Ld[a[u]](d));
                        return d;
                    case "tag":
                        var t = a[1];
                        if (!je[t]) throw Error("Unable to resolve tag reference " + t + ".");
                        return d = {
                            oh: a[2],
                            index: t
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v["function"] =
                            a[1];
                        var x = ve(v, b, c),
                            y = !!a[4];
                        return y || 2 !== x ? y !== (1 === x) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        ve = function(a, b, c) {
            try {
                return me(ue(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var we = function(a, b, c) {
        var d;
        d = Error.call(this);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.o = a;
        this.g = c
    };
    la(we, Error);

    function xe(a, b) {
        if (Ea(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++) xe(a[c], b[c])
        }
    };
    var ye = function(a, b) {
        var c;
        c = Error.call(this);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.dk = a;
        this.o = b;
        this.g = []
    };
    la(ye, Error);
    var Ae = function() {
        return function(a, b) {
            a instanceof ye || (a = new ye(a, ze));
            b && a.g.push(b);
            throw a;
        }
    };

    function ze(a) {
        if (!a.length) return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; 0 < b; b--) Da(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    };
    var De = function(a) {
            function b(r) {
                for (var u = 0; u < r.length; u++) d[r[u]] = !0
            }
            for (var c = [], d = [], e = Be(a), f = 0; f < he.length; f++) {
                var g = he[f],
                    h = Ce(g, e);
                if (h) {
                    for (var k = g.add || [], n = 0; n < k.length; n++) c[k[n]] = !0;
                    b(g.block || [])
                } else null === h && b(g.block || []);
            }
            for (var p = [], q = 0; q < je.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        Ce = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var h = b(f[g]);
                if (2 === h) return null;
                if (1 === h) return !1
            }
            return !0
        },
        Be = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = ve(ie[c], a));
                return b[c]
            }
        };
    var Ee = {
        lj: function(a, b) {
            b[Kd.cg] && "string" === typeof a && (a = 1 == b[Kd.cg] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Kd.eg) && null === a && (a = b[Kd.eg]);
            b.hasOwnProperty(Kd.gg) && void 0 === a && (a = b[Kd.gg]);
            b.hasOwnProperty(Kd.fg) && !0 === a && (a = b[Kd.fg]);
            b.hasOwnProperty(Kd.dg) && !1 === a && (a = b[Kd.dg]);
            return a
        }
    };
    var Fe = function() {
        this.g = {}
    };

    function Ge(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0,
                    g = "A policy function denied the permission request";
                try {
                    f = a[e].call(void 0, b, c, d), g += "."
                } catch (h) {
                    g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
                }
                if (!f) throw new we(c, d, g);
            }
    }

    function He(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.g[d],
                    f = a.g.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    Ge(e, b, d, g);
                    Ge(f, b, d, g)
                }
            }
        }
    };
    var Le = function() {
            var a = data.permissions || {},
                b = Ie.J,
                c = this;
            this.o = new Fe;
            this.g = {};
            var d = {},
                e = He(this.o, b, function() {
                    var f = arguments[0];
                    return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
                });
            La(a, function(f, g) {
                var h = {};
                La(g, function(k, n) {
                    var p = Je(k, n);
                    h[k] = p.assert;
                    d[k] || (d[k] = p.W)
                });
                c.g[f] = function(k, n) {
                    var p = h[k];
                    if (!p) throw Ke(k, {}, "The requested permission " + k + " is not configured.");
                    var q = Array.prototype.slice.call(arguments, 0);
                    p.apply(void 0, q);
                    e.apply(void 0, q)
                }
            })
        },
        Ne =
        function(a) {
            return Me.g[a] || function() {}
        };

    function Je(a, b) {
        var c = re(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Ke;
        try {
            return se(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new we(e, {}, "Permission " + e + " is unknown.");
                },
                W: function() {
                    for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f];
                    return e
                }
            }
        }
    }

    function Ke(a, b, c) {
        return new we(a, b, c)
    };
    var Oe = !1;
    var Pe = {};
    Pe.Lk = Oa('');
    Pe.sj = Oa('');
    var Qe = Oe,
        Re = Pe.sj,
        Se = Pe.Lk;
    var ef = /^[a-z$_][\w$]*$/i,
        ff = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i,
        gf = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = a,
                    e = b[c];
                if (!ff.exec(e)) throw Error("Invalid key wildcard");
                var f = e.indexOf(".*"),
                    g = -1 !== f && f === e.length - 2,
                    h = g ? e.slice(0, e.length - 2) : e,
                    k;
                a: if (0 === d.length) k = !1;
                    else {
                        for (var n = d.split("."), p = 0; p < n.length; p++)
                            if (!ef.exec(n[p])) {
                                k = !1;
                                break a
                            }
                        k = !0
                    }
                if (!k || h.length > d.length || !g && d.length != e.length ? 0 : g ? 0 === d.indexOf(h) && (d === h || "." == d.charAt(h.length)) : d === h) return !0
            }
            return !1
        };

    var hf = function(a, b) {
            return a.length && b.length && a.lastIndexOf(b) === a.length - b.length
        },
        jf = function(a, b) {
            var c = "*" === b.charAt(b.length - 1) || "/" === b || "/*" === b;
            hf(b, "/*") && (b = b.slice(0, -2));
            hf(b, "?") && (b = b.slice(0, -1));
            var d = b.split("*");
            if (!c && 1 === d.length) return a === d[0];
            for (var e = -1, f = 0; f < d.length; f++) {
                var g = d[f];
                if (g) {
                    e = a.indexOf(g, e);
                    if (-1 === e || 0 === f && 0 !== e) return !1;
                    e += g.length
                }
            }
            if (c || e === a.length) return !0;
            var h = d[d.length - 1];
            return a.lastIndexOf(h) === a.length - h.length
        },
        kf = /^[a-z0-9-]+$/i,
        lf = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
        nf = function(a, b) {
            var c;
            if (!(c = !mf(a))) {
                var d;
                a: {
                    var e = a.hostname.split(".");
                    if (2 > e.length) d = !1;
                    else {
                        for (var f = 0; f < e.length; f++)
                            if (!kf.exec(e[f])) {
                                d = !1;
                                break a
                            }
                        d = !0
                    }
                }
                c = !d
            }
            if (c) return !1;
            for (var g = 0; g < b.length; g++) {
                var h;
                var k = a,
                    n = b[g];
                if (!lf.exec(n)) throw Error("Invalid Wildcard");
                var p = n.slice(8),
                    q = p.slice(0, p.indexOf("/")),
                    r;
                var u = k.hostname,
                    t = q;
                if (0 !== t.indexOf("*.")) r = u.toLowerCase() === t.toLowerCase();
                else {
                    t = t.slice(2);
                    var v = u.toLowerCase().indexOf(t.toLowerCase());
                    r = -1 === v ? !1 : u.length === t.length ?
                        !0 : u.length !== t.length + v ? !1 : "." === u[v - 1]
                }
                if (r) {
                    var x = p.slice(p.indexOf("/"));
                    h = jf(k.pathname + k.search, x) ? !0 : !1
                } else h = !1;
                if (h) return !0
            }
            return !1
        },
        mf = function(a) {
            return "https:" === a.protocol && (!a.port || "443" === a.port)
        };
    var of = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i, pf = {
        Fn: "function",
        DustMap: "Object",
        List: "Array"
    }, M = function(a, b, c) {
        for (var d = 0; d < b.length; d++) {
            var e = of .exec(b[d]);
            if (!e) throw Error("Internal Error in " + a);
            var f = e[1],
                g = "!" === e[2],
                h = e[3],
                k = c[d];
            if (null == k) {
                if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
            } else if ("*" !== h) {
                var n = typeof k;
                k instanceof db ? n = "Fn" : k instanceof ua ? n = "List" : k instanceof hb ? n = "DustMap" : k instanceof hc && (n = "OpaqueValue");
                if (n != h) throw Error("Error in " + a + ". Argument " + f + " has type " + (pf[n] || n) + ", which does not match required type " + (pf[h] || h) + ".");
            }
        }
    };

    function qf(a) {
        return "" + a
    }

    function rf(a, b) {
        var c = [];
        return c
    };
    var sf = function(a, b) {
            var c = new db(a, function() {
                for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = G(this, d[e]);
                return b.apply(this, d)
            });
            c.Lb();
            return c
        },
        tf = function(a, b) {
            var c = new hb,
                d;
            for (d in b)
                if (b.hasOwnProperty(d)) {
                    var e = b[d];
                    Ca(e) ? c.set(d, sf(a + "_" + d, e)) : (Da(e) || m(e) || "boolean" === typeof e) && c.set(d, e)
                }
            c.Lb();
            return c
        };
    var uf = function(a, b) {
        M(H(this), ["apiName:!string", "message:?string"], arguments);
        var c = {},
            d = new hb;
        return d = tf("AssertApiSubject", c)
    };
    var vf = function(a, b) {
        M(H(this), ["actual:?*", "message:?string"], arguments);
        if (a instanceof jc) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
        var c = {},
            d = new hb;
        return d = tf("AssertThatSubject", c)
    };

    function zf(a) {
        return function() {
            for (var b = [], c = this.g, d = 0; d < arguments.length; ++d) b.push(qc(arguments[d], c));
            return pc(a.apply(null, b))
        }
    }
    var Bf = function() {
        for (var a = Math, b = Af, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = zf(a[e].bind(a)))
        }
        return c
    };
    var Cf = function(a) {
        var b;
        return b
    };
    var Df = function(a) {
        var b;
        return b
    };
    var Ef = function(a) {
        return encodeURI(a)
    };
    var Ff = function(a) {
        return encodeURIComponent(a)
    };
    var Gf = function(a) {
        M(H(this), ["message:?string"], arguments);
    };
    var Hf = function(a, b) {
        M(H(this), ["min:!number", "max:!number"], arguments);
        return Ha(a, b)
    };
    var N = function(a, b, c) {
        var d = a.g.g;
        if (!d) throw Error("Missing program state.");
        d.fj.apply(null, Array.prototype.slice.call(arguments, 1))
    };
    var If = function() {
        N(this, "read_container_data");
        var a = new hb;
        a.set("containerId", 'GTM-7BJJ');
        a.set("version", '1331');
        a.set("environmentName", '');
        a.set("debugMode", Qe);
        a.set("previewMode", Se);
        a.set("environmentMode", Re);
        a.Lb();
        return a
    };
    var Jf = {};
    Jf.sstECEnableData = !0;
    Jf.enableAdsEc = !0;
    Jf.sstFFConversionEnabled = !0;
    Jf.sstEnableAuid = !0;
    Jf.enableGbraidUpdate = !0;
    Jf.enable1pScripts = !0;
    Jf.enableGlobalEventDeveloperIds = !1;
    Jf.enableGa4OnoRemarketing = !1;
    Jf.omitAuidIfWbraidPresent = !1;
    Jf.sstEnableDclid = !0;
    Jf.reconcileCampaignFields = !1;
    Jf.reconcileCampaignFields = !0;
    Jf.enableEmFormCcd = !1;
    Jf.enableEmFormCcdPart2 = !1;
    Jf.enableUrlPassthrough = !0;
    Jf.enableLandingPageDeduplication = !0;
    Jf.enableGtagDestinationFps = !0;
    Jf.enableFloodlightPrerenderingBypass = !1;
    Jf.enableHashTempClientId = !0;
    Jf.enableTranslateUAParamsToClassic = !0;
    Jf.analyticsPrivateParamsExcluded = !1;
    Jf.enableEmptyDestLists = !1;
    Jf.enableAdsHistoryChangeEvents = !1;
    Jf.requireGtagUserDataTos = !0;
    Jf.sendBeaconEnableExperimentPercentage = Number('0') || 0;

    function Kf() {
        return pc(Jf)
    };
    var Lf = function() {
        return (new Date).getTime()
    };
    var Mf = function(a) {
        if (null === a) return "null";
        if (a instanceof ua) return "array";
        if (a instanceof db) return "function";
        if (a instanceof hc) {
            a = a.jb;
            if (void 0 === a.constructor || void 0 === a.constructor.name) {
                var b = String(a);
                return b.substring(8, b.length - 1)
            }
            return String(a.constructor.name)
        }
        return typeof a
    };
    var Nf = function(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (Qe || Se) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return pc(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(qc(c))
            })
        }
    };
    var Of = function(a) {
        return Na(qc(a, this.g))
    };
    var Pf = function(a) {
        return Number(qc(a, this.g))
    };
    var Qf = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
    };
    var Rf = function(a, b, c) {
        var d = null,
            e = !1;
        M(H(this), ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"], arguments);
        d = new hb;
        for (var f = 0; f < a.length(); f++) {
            var g = a.get(f);
            g instanceof hb && g.has(b) && g.has(c) && (d.set(g.get(b), g.get(c)), e = !0)
        }
        return e ? d : null
    };
    var Af = "floor ceil round max min abs pow sqrt".split(" ");
    var Sf = function() {
            var a = {};
            return {
                Bj: function(b) {
                    return a.hasOwnProperty(b) ? a[b] : void 0
                },
                Dk: function(b, c) {
                    a[b] = c
                },
                reset: function() {
                    a = {}
                }
            }
        },
        Tf = function(a, b) {
            return function() {
                var c = Array.prototype.slice.call(arguments, 0);
                c.unshift(b);
                return db.prototype.g.apply(a, c)
            }
        },
        Uf = function(a, b) {
            M(H(this), ["apiName:!string", "mock:?*"], arguments);
        };
    var Vf = {};
    Vf.keys = function(a) {
        return new ua
    };
    Vf.values = function(a) {
        return new ua
    };
    Vf.entries = function(a) {
        return new ua
    };
    Vf.freeze = function(a) {
        return a
    };
    Vf.delete = function(a, b) {
        return !1
    };
    var Xf = function() {
        this.g = {};
        this.o = {};
    };
    Xf.prototype.get = function(a, b) {
        var c = this.g.hasOwnProperty(a) ? this.g[a] : void 0;
        return c
    };
    Xf.prototype.add = function(a, b, c) {
        if (this.g.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + ".";
        if (this.o.hasOwnProperty(a)) throw "Attempting to add an API with an existing private API name: " + a + ".";
        this.g[a] = c ? void 0 : Ca(b) ? sf(a, b) : tf(a, b)
    };
    var Zf = function(a, b, c) {
        if (a.o.hasOwnProperty(b)) throw "Attempting to add a private function which already exists: " + b + ".";
        if (a.g.hasOwnProperty(b)) throw "Attempting to add a private function with an existing API name: " + b + ".";
        a.o[b] = Ca(c) ? sf(b, c) : tf(b, c)
    };

    function Yf(a, b) {
        var c = void 0;
        return c
    };

    function $f() {
        var a = {};
        return a
    };
    var S = {
        Ib: "_ee",
        oc: "_syn_or_mod",
        Bb: "_def",
        Vk: "_uei",
        Wk: "_upi",
        kc: "_eu",
        Sk: "_pci",
        Jg: "_is_passthrough_cid",
        Ig: "_is_linker_valid",
        nf: "_ntg",
        Vd: "_nge",
        fc: "event_callback",
        Kd: "event_timeout",
        La: "gtag.config",
        Sa: "gtag.get",
        Aa: "purchase",
        ac: "refund",
        Cb: "begin_checkout",
        Yb: "add_to_cart",
        Zb: "remove_from_cart",
        ji: "view_cart",
        ig: "add_to_wishlist",
        Ba: "view_item",
        $b: "view_promotion",
        Ge: "select_promotion",
        Fe: "select_item",
        Db: "view_item_list",
        hg: "add_payment_info",
        ii: "add_shipping_info",
        hb: "value_key",
        rb: "value_callback",
        da: "allow_ad_personalization_signals",
        Xc: "restricted_data_processing",
        Jc: "allow_google_signals",
        Ea: "cookie_expires",
        cc: "cookie_update",
        Yc: "session_duration",
        Pd: "session_engaged_time",
        Id: "engagement_time_msec",
        Oa: "user_properties",
        ba: "transport_url",
        ka: "ads_data_redaction",
        Ga: "user_data",
        Sc: "first_party_collection",
        H: "ad_storage",
        T: "analytics_storage",
        Ce: "region",
        bg: "wait_for_update",
        Da: "conversion_linker",
        Ta: "conversion_cookie_prefix",
        oa: "value",
        ma: "currency",
        Dg: "trip_type",
        fa: "items",
        ug: "passengers",
        Je: "allow_custom_scripts",
        Hb: "session_id",
        zg: "quantity",
        ub: "transaction_id",
        tb: "language",
        Hd: "country",
        Gd: "allow_enhanced_conversions",
        Oe: "aw_merchant_id",
        Me: "aw_feed_country",
        Ne: "aw_feed_language",
        Le: "discount",
        aa: "developer_id",
        qg: "global_developer_id_string",
        og: "event_developer_id_string",
        Qd: "delivery_postal_code",
        Ue: "estimated_delivery_date",
        Se: "shipping",
        Ye: "new_customer",
        Pe: "customer_lifetime_value",
        Te: "enhanced_conversions",
        Ic: "page_view",
        va: "linker",
        U: "domains",
        ic: "decorate_forms",
        ng: "enhanced_conversions_automatic_settings",
        si: "auto_detection_enabled",
        We: "ga_temp_client_id",
        He: "user_engagement",
        di: "app_remove",
        ei: "app_store_refund",
        fi: "app_store_subscription_cancel",
        gi: "app_store_subscription_convert",
        hi: "app_store_subscription_renew",
        ki: "first_open",
        li: "first_visit",
        mi: "in_app_purchase",
        ni: "session_start",
        oi: "allow_display_features",
        fb: "campaign",
        Kc: "campaign_content",
        Lc: "campaign_id",
        Mc: "campaign_medium",
        Nc: "campaign_name",
        Oc: "campaign_source",
        Pc: "campaign_term",
        ra: "client_id",
        sa: "cookie_domain",
        bc: "cookie_name",
        pb: "cookie_path",
        Ua: "cookie_flags",
        Qc: "custom_map",
        Nd: "groups",
        sg: "non_interaction",
        ib: "page_location",
        Ze: "page_path",
        Va: "page_referrer",
        Wc: "page_title",
        Fa: "send_page_view",
        Gb: "send_to",
        Zc: "session_engaged",
        Rc: "euid_logged_in_state",
        $c: "session_number",
        Ji: "tracking_id",
        vb: "url_passthrough",
        hc: "accept_incoming",
        Vc: "url_position",
        xg: "phone_conversion_number",
        vg: "phone_conversion_callback",
        wg: "phone_conversion_css_class",
        yg: "phone_conversion_options",
        Ei: "phone_conversion_ids",
        Di: "phone_conversion_country_code",
        Eb: "aw_remarketing",
        Ke: "aw_remarketing_only",
        Ie: "gclid",
        ri: "auid",
        yi: "affiliation",
        mg: "tax",
        Re: "list_name",
        lg: "checkout_step",
        kg: "checkout_option",
        zi: "coupon",
        Ai: "promotions",
        Na: "user_id",
        Hi: "retoken",
        Ma: "cookie_prefix",
        jg: "disable_merchant_reported_purchases",
        xi: "dc_natural_search",
        wi: "dc_custom_params",
        rg: "method",
        Ii: "search_term",
        vi: "content_type",
        Ci: "optimize_id",
        Bi: "experiments",
        sb: "google_signals"
    };
    S.Md = "google_tld";
    S.Sd = "update";
    S.Ve = "firebase_id";
    S.Tc = "ga_restrict_domain";
    S.Jd = "event_settings";
    S.Qe = "dynamic_event_settings";
    S.jc = "user_data_settings";
    S.Bg = "screen_name";
    S.af = "screen_resolution";
    S.Fb = "_x_19";
    S.qb = "enhanced_client_id";
    S.Ld = "_x_20";
    S.Xe = "internal_traffic_results";
    S.Rd = "traffic_type";
    S.Od = "referral_exclusion_definition";
    S.Uc = "ignore_referrer";
    S.ui = "content_group";
    S.Ca = "allow_interest_groups";
    S.$e = "redact_device_info", S.pg = "geo_granularity";
    var cg = {};
    S.Gg = Object.freeze((cg[S.hg] = 1, cg[S.ii] = 1, cg[S.Yb] = 1, cg[S.Zb] = 1, cg[S.ji] = 1, cg[S.Cb] = 1, cg[S.Fe] = 1, cg[S.Db] = 1, cg[S.Ge] = 1, cg[S.$b] = 1, cg[S.Aa] = 1, cg[S.ac] = 1, cg[S.Ba] = 1, cg[S.ig] = 1, cg));
    S.cf = Object.freeze([S.da, S.Jc, S.cc]);
    S.Ti = Object.freeze([].concat(S.cf));
    S.df = Object.freeze([S.Ea, S.Kd, S.Yc, S.Pd, S.Id]);
    S.Ui = Object.freeze([].concat(S.df));
    var dg = {};
    S.De = (dg[S.H] = "1", dg[S.T] = "2", dg);
    var eg = {};
    S.ag = Object.freeze((eg[S.da] = 1, eg[S.Gd] = 1, eg[S.Ca] = 1, eg[S.Eb] = 1, eg[S.Ke] = 1, eg[S.Le] = 1, eg[S.Me] = 1, eg[S.Ne] = 1, eg[S.fa] = 1, eg[S.Oe] = 1, eg[S.Ta] = 1, eg[S.Da] = 1, eg[S.sa] = 1, eg[S.Ea] = 1, eg[S.Ua] = 1, eg[S.Ma] = 1, eg[S.ma] = 1, eg[S.Pe] = 1, eg[S.aa] = 1, eg[S.jg] = 1, eg[S.Te] = 1, eg[S.Ue] = 1, eg[S.Ve] = 1, eg[S.Sc] = 1, eg[S.tb] = 1, eg[S.Ye] = 1, eg[S.ib] = 1, eg[S.Va] = 1, eg[S.vg] = 1, eg[S.wg] = 1, eg[S.xg] = 1, eg[S.yg] = 1, eg[S.Xc] = 1, eg[S.Fa] = 1, eg[S.Gb] = 1, eg[S.Qd] = 1, eg[S.ub] = 1, eg[S.ba] = 1, eg[S.Sd] = 1, eg[S.vb] = 1, eg[S.Ga] = 1, eg[S.Na] = 1, eg[S.oa] =
        1, eg));
    var fg = {
        jh: "IN",
        Ih: "IN-WB"
    };
    var gg = {},
        hg = function(a, b) {
            gg[a] = gg[a] || [];
            gg[a][b] = !0
        },
        ig = function(a) {
            for (var b = [], c = gg[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
            for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
            return b.join("")
        },
        jg = function() {
            for (var a = [], b = gg.GA4_EVENT || [], c = 0; c < b.length; c++) b[c] && a.push(c);
            return 0 < a.length ? a : void 0
        };
    var kg = function(a) {
        hg("GTM", a)
    };
    var lg = new function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var ng = function() {
        var a = mg,
            b = "Gf";
        if (a.Gf && a.hasOwnProperty(b)) return a.Gf;
        var c = new a;
        a.Gf = c;
        a.hasOwnProperty(b);
        return c
    };
    var mg = function() {
        var a = {};
        this.g = function() {
            var b = lg.g,
                c = lg.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.o = function() {
            a[lg.g] = !0
        }
    };
    var og = [];

    function pg() {
        var a = Hb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: qg,
            update: rg,
            addListener: sg,
            notifyListeners: tg,
            active: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function qg(a, b, c, d, e, f) {
        var g = pg();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var h = g.entries,
                k = h[a] || {},
                n = k.region,
                p = c && m(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === k.update),
                    r = {
                        region: p,
                        initial: "granted" === b,
                        update: k.update,
                        quiet: q
                    };
                if ("" !== d || !1 !== k.initial) h[a] = r;
                q && z.setTimeout(function() {
                    h[a] === r && r.quiet && (r.quiet = !1, ug(a), tg(), hg("TAGGING",
                        2))
                }, f)
            }
        }
    }

    function rg(a, b) {
        var c = pg();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = vg(c, a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = vg(c, a);
            f.quiet ? (f.quiet = !1, ug(a)) : g !== d && ug(a)
        }
    }

    function sg(a, b) {
        og.push({
            xf: a,
            wj: b
        })
    }

    function ug(a) {
        for (var b = 0; b < og.length; ++b) {
            var c = og[b];
            Ea(c.xf) && -1 !== c.xf.indexOf(a) && (c.Eh = !0)
        }
    }

    function tg(a, b) {
        for (var c = 0; c < og.length; ++c) {
            var d = og[c];
            if (d.Eh) {
                d.Eh = !1;
                try {
                    d.wj({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }

    function vg(a, b) {
        var c = a.entries[b] || {};
        return void 0 !== c.update ? c.update : c.initial
    }
    var wg = function(a) {
            var b = pg();
            b.accessedAny = !0;
            return vg(b, a)
        },
        xg = function(a) {
            var b = pg();
            b.accessedDefault = !0;
            return (b.entries[a] || {}).initial
        },
        yg = function(a) {
            var b = pg();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        zg = function() {
            if (!ng().g()) return !1;
            var a = pg();
            a.accessedAny = !0;
            return a.active
        },
        Ag = function() {
            var a = pg();
            a.accessedDefault = !0;
            return a.usedDefault
        },
        Bg = function(a, b) {
            pg().addListener(a, b)
        },
        Cg = function(a, b) {
            pg().notifyListeners(a, b)
        },
        Dg = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!yg(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Bg(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        Eg = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var h = d[g];
                    !1 === wg(h) || e[h] || (f.push(h), e[h] = !0)
                }
                return f
            }
            var d = m(b) ? [b] : b,
                e = {};
            c().length !== d.length && Bg(d, function(f) {
                var g = c();
                0 < g.length && (f.xf = g, a(f))
            })
        };

    function Fg() {}

    function Gg() {};

    function Hg(a) {
        for (var b = [], c = 0; c < Ig.length; c++) {
            var d = a(Ig[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var Ig = [S.H, S.T],
        Jg = function(a) {
            var b = a[S.Ce];
            b && kg(40);
            var c = a[S.bg];
            c && kg(41);
            for (var d = Ea(b) ? b : [b], e = {
                    Cc: 0
                }; e.Cc < d.length; e = {
                    Cc: e.Cc
                }, ++e.Cc) La(a, function(f) {
                return function(g, h) {
                    if (g !== S.Ce && g !== S.bg) {
                        var k = d[f.Cc],
                            n = fg.jh,
                            p = fg.Ih;
                        pg().set(g, h, k, n, p, c)
                    }
                }
            }(e))
        },
        Kg = 0,
        Lg = function(a, b) {
            La(a, function(e, f) {
                pg().update(e, f)
            });
            Cg(b.eventId, b.priorityId);
            var c = Ta(),
                d = c - Kg;
            Kg && 0 <= d && 1E3 > d && kg(66);
            Kg = c
        },
        Mg = function(a) {
            var b = wg(a);
            return void 0 != b ? b : !0
        },
        Ng = function() {
            return "G1" + Hg(wg)
        },
        Og = function(a, b) {
            Bg(a,
                b)
        },
        Pg = function(a, b) {
            Eg(a, b)
        },
        Qg = function(a, b) {
            Dg(a, b)
        };
    var Sg = function(a) {
            return Rg ? I.querySelectorAll(a) : null
        },
        Tg = function(a, b) {
            if (!Rg) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!I.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        Ug = !1;
    if (I.querySelectorAll) try {
        var Vg = I.querySelectorAll(":root");
        Vg && 1 == Vg.length && Vg[0] == I.documentElement && (Ug = !0)
    } catch (a) {}
    var Rg = Ug;
    var Wg = function(a) {
            return null == a ? "" : m(a) ? Ra(String(a)) : "e0"
        },
        Yg = function(a) {
            return a.replace(Xg, "")
        },
        $g = function(a) {
            return Zg(a.replace(/\s/g, ""))
        },
        Zg = function(a) {
            return Ra(a.replace(ah, "").toLowerCase())
        },
        ch = function(a) {
            a = a.replace(/[\s-()/.]/g, "");
            "+" !== a.charAt(0) && (a = "+" + a);
            return bh.test(a) ? a : "e0"
        },
        eh = function(a) {
            var b = a.toLowerCase().split("@");
            if (2 == b.length) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (dh.test(c)) return c
            }
            return "e0"
        },
        hh = function(a,
            b) {
            window.Promise || b([]);
            Promise.all(a.map(function(c) {
                return c.value && -1 !== fh.indexOf(c.name) ? gh(c.value).then(function(d) {
                    c.value = d
                }) : Promise.resolve()
            })).then(function() {
                b(a)
            }).catch(function() {
                b([])
            })
        },
        gh = function(a) {
            if ("" === a || "e0" === a) return Promise.resolve(a);
            if (z.crypto && z.crypto.subtle) try {
                var b = ih(a);
                return z.crypto.subtle.digest("SHA-256", b).then(function(c) {
                    var d = Array.from(new Uint8Array(c)).map(function(e) {
                        return String.fromCharCode(e)
                    }).join("");
                    return z.btoa(d).replace(/\+/g, "-").replace(/\//g,
                        "_").replace(/=+$/, "")
                }).catch(function() {
                    return "e2"
                })
            } catch (c) {
                return Promise.resolve("e2")
            } else return Promise.resolve("e1")
        },
        ih = function(a) {
            var b;
            if (z.TextEncoder) b = (new z.TextEncoder("utf-8")).encode(a);
            else {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63))
                }
                b = new Uint8Array(c)
            }
            return b
        },
        ah = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        dh = /^\S+@\S+\.\S+$/,
        bh = /^\+\d{10,15}$/,
        Xg = /[.~]/g,
        jh = {},
        kh = (jh.email = "em", jh.phone_number = "pn", jh.first_name = "fn", jh.last_name = "ln", jh.street = "sa", jh.city = "ct", jh.region = "rg", jh.country = "co", jh.postal_code = "pc", jh.error_code = "ec", jh),
        lh = function(a, b) {
            function c(n, p, q) {
                var r = n[p];
                Ea(r) || (r = [r]);
                for (var u = 0; u < r.length; ++u) {
                    var t = Wg(r[u]);
                    "" !== t && f.push({
                        name: p,
                        value: q(t),
                        index: void 0
                    })
                }
            }

            function d(n, p, q, r) {
                var u = Wg(n[p]);
                "" !== u && f.push({
                    name: p,
                    value: q(u),
                    index: r
                })
            }

            function e(n) {
                return function(p) {
                    kg(64);
                    return n(p)
                }
            }
            var f = [];
            if ("https:" === z.location.protocol) {
                c(a, "email", eh);
                c(a, "phone_number", ch);
                c(a, "first_name", e($g));
                c(a, "last_name", e($g));
                var g = a.home_address || {};
                c(g, "street", e(Zg));
                c(g, "city", e(Zg));
                c(g, "postal_code", e(Yg));
                c(g, "region", e(Zg));
                c(g, "country", e(Yg));
                var h = a.address || {};
                Ea(h) || (h = [h]);
                for (var k = 0; k < h.length; k++) d(h[k], "first_name", $g, k), d(h[k], "last_name", $g, k), d(h[k], "street", Zg, k), d(h[k], "city", Zg, k), d(h[k], "postal_code", Yg, k), d(h[k],
                    "region", Zg, k), d(h[k], "country", Yg, k);
                hh(f, b)
            } else f.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }), b(f)
        },
        mh = function(a, b) {
            lh(a, function(c) {
                for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                    var g = c[f].name,
                        h = c[f].value,
                        k = c[f].index,
                        n = kh[g];
                    n && h && (-1 === fh.indexOf(g) || /^e\d+$/.test(h) || /^[0-9A-Za-z_-]{43}$/.test(h)) && (void 0 !== k && (n += k), d.push(n + "." + h), e++)
                }
                1 === c.length && "error_code" === c[0].name && (e = 0);
                b(encodeURIComponent(d.join("~")), e)
            })
        },
        nh = function(a) {
            if (z.Promise) try {
                return new Promise(function(b) {
                    mh(a,
                        function(c, d) {
                            b({
                                te: c,
                                $k: d
                            })
                        })
                })
            } catch (b) {}
        },
        fh = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var oh = {},
        T = z.google_tag_manager = z.google_tag_manager || {},
        ph = Math.random();
    oh.Zd = "4r0";
    oh.ca = "dataLayer";
    oh.ci = "ChAI8LyzkwYQoOHC1rj0s5s+EiEAVRPJzFJLTSYsFyhfV9mjysHDl6pyNnH6ncGD9WYA95YaAnQl";
    var qh = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0
        },
        rh = {
            __paused: !0,
            __tg: !0
        },
        sh;
    for (sh in qh) qh.hasOwnProperty(sh) && (rh[sh] = !0);
    oh.Hc = "www.googletagmanager.com";
    var th, uh = oh.Hc + "/gtm.js";
    th = uh;
    var vh = Oa(""),
        wh = null,
        xh = null,
        yh = {},
        Gh = {},
        Hh = function() {
            var a = T.sequence || 1;
            T.sequence = a + 1;
            return a
        };
    oh.bi = "";
    var Ih = "";
    oh.$d = Ih;
    var Jh = new Ja,
        Kh = {},
        Lh = {},
        Oh = {
            name: oh.ca,
            set: function(a, b) {
                oc($a(a, b), Kh);
                Mh()
            },
            get: function(a) {
                return Nh(a, 2)
            },
            reset: function() {
                Jh = new Ja;
                Kh = {};
                Mh()
            }
        },
        Nh = function(a, b) {
            return 2 != b ? Jh.get(a) : Ph(a)
        },
        Ph = function(a, b) {
            var c = a.split(".");
            b = b || [];
            for (var d = Kh, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        Qh = function(a, b) {
            Lh.hasOwnProperty(a) || (Jh.set(a, b), oc($a(a, b), Kh), Mh())
        },
        Rh = function() {
            for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist",
                    "gtm.blacklist", "tagTypeBlacklist"
                ], b = 0; b < a.length; b++) {
                var c = a[b],
                    d = Nh(c, 1);
                if (Ea(d) || nc(d)) d = oc(d);
                Lh[c] = d
            }
        },
        Mh = function(a) {
            La(Lh, function(b, c) {
                Jh.set(b, c);
                oc($a(b), Kh);
                oc($a(b, c), Kh);
                a && delete Lh[b]
            })
        },
        Sh = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? Ph(a) : Jh.get(a);
            "array" === lc(d) || "object" === lc(d) ? c = oc(d) : c = d;
            return c
        };
    var Th, Uh = !1;

    function Vh() {
        Uh = !0;
        Th = Th || {}
    }
    var Wh = function(a) {
        Uh || Vh();
        return Th[a]
    };
    var Xh = function(a) {
        if (I.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle) return !0;
        var c = z.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var h = g.indexOf("opacity(");
                0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = z.getComputedStyle(d,
                null))
        }
        return !1
    };
    var Yh = function() {
            var a = I.body,
                b = I.documentElement || a && a.parentElement,
                c, d;
            if (I.compatMode && "BackCompat" !== I.compatMode) c = b ? b.clientHeight : 0, d = b ? b.clientWidth : 0;
            else {
                var e = function(f, g) {
                    return f && g ? Math.min(f, g) : Math.max(f, g)
                };
                kg(7);
                c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
                d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0)
            }
            return {
                width: d,
                height: c
            }
        },
        Zh = function(a) {
            var b = Yh(),
                c = b.height,
                d = b.width,
                e = a.getBoundingClientRect(),
                f = e.bottom - e.top,
                g = e.right - e.left;
            return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right -
                d, 0)) / g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0
        };
    var fi = /:[0-9]+$/,
        gi = function(a, b, c, d) {
            for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
                var h = f[g].split("=");
                if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
                    var k = h.slice(1).join("=");
                    if (!c) return d ? k : decodeURIComponent(k).replace(/\+/g, " ");
                    e.push(d ? k : decodeURIComponent(k).replace(/\+/g, " "))
                }
            }
            return c ? e : void 0
        },
        ji = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = hi(a.protocol) || hi(z.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port :
                z.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(fi, "").toLowerCase());
            return ii(a, b, c, d, e)
        },
        ii = function(a, b, c, d, e) {
            var f, g = hi(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = ki(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(fi, "").toLowerCase();
                    if (c) {
                        var h = /^www\d*\./.exec(f);
                        h && h[0] && (f = f.substr(h[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" ===
                        g ? 80 : "https" === g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || hg("TAGGING", 1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var k = f.split("/");
                    0 <= (d || []).indexOf(k[k.length - 1]) && (k[k.length - 1] = "");
                    f = k.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = gi(f, e, !1));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        hi = function(a) {
            return a ? a.replace(":",
                "").toLowerCase() : ""
        },
        ki = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        li = function(a) {
            var b = I.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || hg("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(fi, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        mi = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !==
                        p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = li(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                h = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === h[0] && (h = h.substring(1));
            g = c(g);
            h = c(h);
            "" !== g && (g = "?" + g);
            "" !== h && (h = "#" + h);
            var k = "" + f + g + h;
            "/" === k[k.length - 1] && (k = k.substring(0, k.length - 1));
            return k
        };
    var ni = {};
    var pi = function(a, b, c) {
            if (a) {
                var d = a.element,
                    e = {
                        ab: a.ab,
                        tagName: d.tagName,
                        type: 1
                    };
                b && (e.querySelector = oi(d));
                c && (e.isVisible = !Xh(d));
                return e
            }
        },
        si = function(a) {
            if (0 != a.length) {
                var b;
                b = qi(a, function(c) {
                    return !ri.test(c.ab)
                });
                b = qi(b, function(c) {
                    return "INPUT" === c.element.tagName.toUpperCase()
                });
                b = qi(b, function(c) {
                    return !Xh(c.element)
                });
                return b[0]
            }
        },
        qi = function(a, b) {
            if (1 >= a.length) return a;
            var c = a.filter(b);
            return 0 == c.length ? a : c
        },
        oi = function(a) {
            var b;
            if (a === I.body) b = "body";
            else {
                var c;
                if (a.id) c = "#" + a.id;
                else {
                    var d;
                    if (a.parentElement) {
                        var e;
                        a: {
                            var f = a.parentElement;
                            if (f) {
                                for (var g = 0; g < f.childElementCount; g++)
                                    if (f.children[g] === a) {
                                        e = g + 1;
                                        break a
                                    }
                                e = -1
                            } else e = 1
                        }
                        d = oi(a.parentElement) + ">:nth-child(" + e + ")"
                    } else d = "";
                    c = d
                }
                b = c
            }
            return b
        },
        ti = !0,
        ui = !1;
    ni.Zh = "true";
    var vi = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
        wi = new RegExp(/@(gmail|googlemail)\./i),
        ri = new RegExp(/support|noreply/i),
        xi = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT".split(" "),
        yi = ["BR"],
        zi = {},
        Ai = function(a) {
            a = a || {
                yc: !0,
                zc: !0
            };
            a.yb = a.yb || {
                email: !0,
                phone: !0,
                bh: !0
            };
            var b, c = a,
                d = !!c.yc + "." + !!c.zc;
            c && c.fd && c.fd.length && (d += "." + c.fd.join("."));
            c && c.yb && (d += "." + c.yb.email + "." + c.yb.phone + "." + c.yb.bh);
            b = d;
            var e = zi[b];
            if (e && 200 > Ta() - e.timestamp) return e.result;
            var f;
            var g = [],
                h = I.body;
            if (h) {
                for (var k =
                        h.querySelectorAll("*"), n = 0; n < k.length && 1E4 > n; n++) {
                    var p = k[n];
                    if (!(0 <= xi.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
                        for (var q = !1, r = 0; r < p.childElementCount && 1E4 > r; r++)
                            if (!(0 <= yi.indexOf(p.children[r].tagName.toUpperCase()))) {
                                q = !0;
                                break
                            }
                        q || g.push(p)
                    }
                }
                f = {
                    elements: g,
                    status: 1E4 < k.length ? "2" : "1"
                }
            } else f = {
                elements: g,
                status: "4"
            };
            var u = f,
                t = u.status,
                v = [],
                x;
            if (a.yb && a.yb.email) {
                for (var y = u.elements, w = [], A = 0; A < y.length; A++) {
                    var B = y[A],
                        E = B.textContent;
                    "INPUT" === B.tagName.toUpperCase() &&
                        B.value && (E = B.value);
                    if (E) {
                        var C = E.match(vi);
                        if (C) {
                            var D = C[0],
                                F;
                            if (z.location) {
                                var R = ii(z.location, "host", !0);
                                F = 0 <= D.toLowerCase().indexOf(R)
                            } else F = !1;
                            F || w.push({
                                element: B,
                                ab: D
                            })
                        }
                    }
                }
                var J = a && a.fd;
                if (J && 0 !== J.length) {
                    for (var Q = [], O = 0; O < w.length; O++) {
                        for (var P = !0, L = 0; L < J.length; L++) {
                            var Z = J[L];
                            if (Z && Tg(w[O].element, Z)) {
                                P = !1;
                                break
                            }
                        }
                        P && Q.push(w[O])
                    }
                    v = Q
                } else v = w;
                x = si(v);
                10 < w.length && (t = "3")
            }
            var ba = [];
            !a.wk && x && (v = [x]);
            for (var U = 0; U < v.length; U++) ba.push(pi(v[U], a.yc, a.zc));
            var qa = {
                elements: ba.slice(0, 10),
                hk: pi(x, a.yc, a.zc),
                status: t
            };
            zi[b] = {
                timestamp: Ta(),
                result: qa
            };
            return qa
        },
        Bi = function(a) {
            return a.tagName + ":" + a.isVisible + ":" + a.ab.length + ":" + wi.test(a.ab)
        };
    var Ci = function(a, b, c) {
            if (c) {
                var d = c.selector_type,
                    e = String(c.value),
                    f;
                if ("js_variable" === d) {
                    e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                    for (var g = e.split(","), h = 0; h < g.length; h++) {
                        var k = g[h].trim();
                        if (k) {
                            if (0 === k.indexOf("dataLayer.")) f = Nh(k.substring(10));
                            else {
                                var n = k.split(".");
                                f = z[n.shift()];
                                for (var p = 0; p < n.length; p++) f = f && f[n[p]]
                            }
                            if (void 0 !== f) break
                        }
                    }
                } else if ("css_selector" === d && Rg) {
                    var q = Sg(e);
                    if (q && 0 < q.length) {
                        f = [];
                        for (var r = 0; r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1); r++) f.push(Tb(q[r]) ||
                            Ra(q[r].value));
                        f = 1 === f.length ? f[0] : f
                    }
                }
                f && (a[b] = f)
            }
        },
        Di = function(a) {
            if (a) {
                var b = {};
                Ci(b, "email", a.email);
                Ci(b, "phone_number", a.phone);
                b.address = [];
                for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
                    var e = {};
                    Ci(e, "first_name", c[d].first_name);
                    Ci(e, "last_name", c[d].last_name);
                    Ci(e, "street", c[d].street);
                    Ci(e, "city", c[d].city);
                    Ci(e, "region", c[d].region);
                    Ci(e, "country", c[d].country);
                    Ci(e, "postal_code", c[d].postal_code);
                    b.address.push(e)
                }
                return b
            }
        },
        Ei = function(a) {
            if (a) switch (a.mode) {
                case "selectors":
                    return Di(a.selectors);
                case "auto_detect":
                    var b;
                    var c = a.auto_detect;
                    if (c) {
                        var d = Ai({
                                yc: !1,
                                zc: !1,
                                fd: c.exclude_element_selectors,
                                yb: {
                                    email: !!c.email,
                                    phone: !!c.phone,
                                    bh: !!c.address
                                }
                            }).elements,
                            e = {};
                        if (0 < d.length)
                            for (var f = 0; f < d.length; f++) {
                                var g = d[f];
                                if (1 === g.type) {
                                    e.email = g.ab;
                                    break
                                }
                            }
                        b = e
                    } else b = void 0;
                    return b
            }
        },
        Fi = function(a) {
            switch (a.enhanced_conversions_mode) {
                case "manual":
                    var b = a.enhanced_conversions_manual_var;
                    return void 0 !== b ? b : z.enhanced_conversion_data;
                case "automatic":
                    return Di(a[S.ng])
            }
        };
    var Gi = {},
        Hi = function(a, b) {
            if (z._gtmexpgrp && z._gtmexpgrp.hasOwnProperty(a)) return z._gtmexpgrp[a];
            void 0 === Gi[a] && (Gi[a] = Math.floor(Math.random() * b));
            return Gi[a]
        };
    var Ii = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var Ji = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                h = g[0].replace(/^\s*|\s*$/g, "");
            if (h && h == a) {
                var k = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                k && c && (k = decodeURIComponent(k));
                d.push(k)
            }
        }
        return d
    };
    var Ki = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        Li = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };

    function Mi(a) {
        return "null" !== a.origin
    };
    var Pi = function(a, b, c, d) {
            return Ni(d) ? Ji(a, String(b || Oi()), c) : []
        },
        Si = function(a, b, c, d, e) {
            if (Ni(e)) {
                var f = Qi(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Ri(f, function(g) {
                        return g.je
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = Ri(f, function(g) {
                        return g.pd
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Ti(a, b, c, d) {
        var e = Oi(),
            f = window;
        Mi(f) && (f.document.cookie = a);
        var g = Oi();
        return e != g || void 0 != c && 0 <= Pi(b, g, !1, d).indexOf(c)
    }
    var Xi = function(a, b, c, d) {
            function e(x, y, w) {
                if (null == w) return delete h[y], x;
                h[y] = w;
                return x + "; " + y + "=" + w
            }

            function f(x, y) {
                if (null == y) return delete h[y], x;
                h[y] = !0;
                return x + "; " + y
            }
            if (!Ni(c.lb)) return 2;
            var g;
            void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Ui(b), g = a + "=" + b);
            var h = {};
            g = e(g, "path", c.path);
            var k;
            c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
            g = e(g, "expires", k);
            g = e(g, "max-age", c.Xj);
            g = e(g, "samesite",
                c.tk);
            c.vk && (g = f(g, "secure"));
            var n = c.domain;
            if (n && "auto" === n.toLowerCase()) {
                for (var p = Vi(), q = void 0, r = !1, u = 0; u < p.length; ++u) {
                    var t = "none" !== p[u] ? p[u] : void 0,
                        v = e(g, "domain", t);
                    v = f(v, c.flags);
                    try {
                        d && d(a, h)
                    } catch (x) {
                        q = x;
                        continue
                    }
                    r = !0;
                    if (!Wi(t, c.path) && Ti(v, a, b, c.lb)) return 0
                }
                if (q && !r) throw q;
                return 1
            }
            n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
            g = f(g, c.flags);
            d && d(a, h);
            return Wi(n, c.path) ? 1 : Ti(g, a, b, c.lb) ? 0 : 1
        },
        Yi = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Xi(a,
                b, c)
        };

    function Ri(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var h = a[g],
                k = b(h);
            k === c ? d.push(h) : void 0 === f || k < f ? (e = [h], f = k) : k === f && e.push(h)
        }
        return 0 < d.length ? d : e
    }

    function Qi(a, b, c) {
        for (var d = [], e = Pi(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var k = g.shift();
                k && (k = k.split("-"), d.push({
                    id: g.join("."),
                    je: 1 * k[0] || 1,
                    pd: 1 * k[1] || 1
                }))
            }
        }
        return d
    }
    var Ui = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        Zi = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        $i = /(^|\.)doubleclick\.net$/i,
        Wi = function(a, b) {
            return $i.test(window.document.location.hostname) || "/" === b && Zi.test(a)
        },
        Oi = function() {
            return Mi(window) ? window.document.cookie : ""
        },
        Vi = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            $i.test(e) || Zi.test(e) || a.push("none");
            return a
        },
        Ni = function(a) {
            if (!ng().g() || !a || !zg()) return !0;
            if (!yg(a)) return !1;
            var b = wg(a);
            return null == b ? !0 : !!b
        };
    var aj = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ Ii(a) & 2147483647) : String(b)
        },
        bj = function(a) {
            return [aj(a), Math.round(Ta() / 1E3)].join(".")
        },
        ej = function(a, b, c, d, e) {
            var f = cj(b);
            return Si(a, f, dj(c), d, e)
        },
        fj = function(a, b, c, d) {
            var e = "" + cj(c),
                f = dj(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        cj = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        dj = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };

    function gj(a, b, c) {
        var d, e = Number(null != a.Sb ? a.Sb : void 0);
        0 !== e && (d = new Date((b || Ta()) + 1E3 * (e || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: d
        }
    };
    var hj = ["1"],
        ij = {},
        jj = {},
        nj = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = kj(a.prefix);
            if (!ij[c] && !lj(c, a.path, a.domain) && b) {
                var d = kj(a.prefix),
                    e = bj();
                if (0 === mj(d, e, a)) {
                    var f = Hb("google_tag_data", {});
                    f._gcl_au ? hg("GTM", 57) : f._gcl_au = e
                }
                lj(c, a.path, a.domain)
            }
        };

    function mj(a, b, c, d) {
        var e = fj(b, "1", c.domain, c.path),
            f = gj(c, d);
        f.lb = "ad_storage";
        return Yi(a, e, f)
    }

    function lj(a, b, c) {
        var d = ej(a, b, c, hj, "ad_storage");
        if (!d) return !1;
        var e = d.split(".");
        5 === e.length ? (ij[a] = e.slice(0, 2).join("."), jj[a] = {
            id: e.slice(2, 4).join("."),
            xh: Number(e[4]) || 0
        }) : 3 === e.length ? jj[a] = {
            id: e.slice(0, 2).join("."),
            xh: Number(e[2]) || 0
        } : ij[a] = d;
        return !0
    }

    function kj(a) {
        return (a || "_gcl") + "_au"
    };
    var oj = function(a) {
        for (var b = [], c = I.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                $f: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, h) {
            return h.timestamp - g.timestamp
        });
        return b
    };

    function pj(a, b) {
        var c = oj(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].$f] || (d[c[e].$f] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    Ha: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].$f].push(g)
            }
        }
        return d
    };

    function qj() {
        for (var a = rj, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function sj() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var rj, tj;

    function uj(a) {
        function b(k) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = tj[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return k
        }
        rj = rj || sj();
        tj = tj || qj();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                h = b(64);
            if (64 === h && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
        }
    };
    var vj;
    var zj = function() {
            var a = wj,
                b = xj,
                c = yj(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                Qb(I, "mousedown", d);
                Qb(I, "keyup", d);
                Qb(I, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Aj = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            yj().decorators.push(f)
        },
        Bj = function(a, b, c) {
            for (var d = yj().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    h;
                if (h = !c || g.forms) a: {
                    var k = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (k && (p || n !== I.location.hostname))
                        for (var q = 0; q < k.length; q++)
                            if (k[q] instanceof RegExp) {
                                if (k[q].test(n)) {
                                    h = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(k[q]) || p && 0 <= k[q].indexOf(n)) {
                        h = !0;
                        break a
                    }
                    h = !1
                }
                if (h) {
                    var r = g.placement;
                    void 0 == r && (r = g.fragment ? 2 : 1);
                    r === b && Wa(e, g.callback())
                }
            }
            return e
        };

    function yj() {
        var a = Hb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Cj = /(.*?)\*(.*?)\*(.*)/,
        Dj = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Ej = /^(?:www\.|m\.|amp\.)+/,
        Fj = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Gj(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var Ij = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
                    b.push(c);
                    var e = b,
                        f = e.push,
                        g, h = String(d);
                    rj = rj || sj();
                    tj = tj || qj();
                    for (var k = [], n = 0; n < h.length; n += 3) {
                        var p = n + 1 < h.length,
                            q = n + 2 < h.length,
                            r = h.charCodeAt(n),
                            u = p ? h.charCodeAt(n + 1) : 0,
                            t = q ? h.charCodeAt(n + 2) : 0,
                            v = r >> 2,
                            x = (r & 3) << 4 | u >> 4,
                            y = (u & 15) << 2 | t >> 6,
                            w = t & 63;
                        q || (w = 64, p || (y = 64));
                        k.push(rj[v], rj[x], rj[y], rj[w])
                    }
                    g = k.join("");
                    f.call(e, g)
                }
            }
        var A = b.join("*");
        return ["1", Hj(A),
            A
        ].join("*")
    };

    function Hj(a, b) {
        var c = [z.navigator.userAgent, (new Date).getTimezoneOffset(), Fb.userLanguage || Fb.language, Math.floor(Ta() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = vj)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, h = 0; 8 > h; h++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        vj = d;
        for (var k = 4294967295, n = 0; n < c.length; n++) k = k >>> 8 ^ vj[(k ^ c.charCodeAt(n)) & 255];
        return ((k ^ -1) >>> 0).toString(36)
    }

    function Jj() {
        return function(a) {
            var b = li(z.location.href),
                c = b.search.replace("?", ""),
                d = gi(c, "_gl", !1, !0) || "";
            a.query = Kj(d) || {};
            var e = ji(b, "fragment").match(Gj("_gl"));
            a.fragment = Kj(e && e[3] || "") || {}
        }
    }

    function Lj(a, b) {
        var c = Gj(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var Mj = function(a, b) {
            b || (b = "_gl");
            var c = Fj.exec(a);
            if (!c) return "";
            var d = c[1],
                e = Lj(b, (c[2] || "").slice(1)),
                f = Lj(b, (c[3] || "").slice(1));
            e.length && (e = "?" + e);
            f.length && (f = "#" + f);
            return "" + d + e + f
        },
        Nj = function(a) {
            var b = Jj(),
                c = yj();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Wa(d, e.query), a && Wa(d, e.fragment));
            return d
        },
        Kj = function(a) {
            try {
                var b = Oj(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            g = uj(d[e + 1]);
                        c[f] = g
                    }
                    hg("TAGGING", 6);
                    return c
                }
            } catch (h) {
                hg("TAGGING",
                    8)
            }
        };

    function Oj(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = Cj.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var h = g[3],
                    k;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === Hj(h, p)) {
                            k = !0;
                            break a
                        }
                    k = !1
                }
                if (k) return h;
                hg("TAGGING", 7)
            }
        }
    }

    function Pj(a, b, c, d) {
        function e(p) {
            p = Lj(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = Fj.exec(c);
        if (!f) return "";
        var g = f[1],
            h = f[2] || "",
            k = f[3] || "",
            n = a + "=" + b;
        d ? k = "#" + e(k.substring(1)) : h = "?" + e(h.substring(1));
        return "" + g + h + k
    }

    function Qj(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = Bj(b, 1, c),
            e = Bj(b, 2, c),
            f = Bj(b, 3, c);
        if (Xa(d)) {
            var g = Ij(d);
            c ? Rj("_gl", g, a) : Sj("_gl", g, a, !1)
        }
        if (!c && Xa(e)) {
            var h = Ij(e);
            Sj("_gl", h, a, !0)
        }
        for (var k in f)
            if (f.hasOwnProperty(k)) a: {
                var n = k,
                    p = f[k],
                    q = a;
                if (q.tagName) {
                    if ("a" === q.tagName.toLowerCase()) {
                        Sj(n, p, q);
                        break a
                    }
                    if ("form" === q.tagName.toLowerCase()) {
                        Rj(n, p, q);
                        break a
                    }
                }
                "string" == typeof q && Pj(n, p, q)
            }
    }

    function Sj(a, b, c, d) {
        if (c.href) {
            var e = Pj(a, b, c.href, void 0 === d ? !1 : d);
            sb.test(e) && (c.href = e)
        }
    }

    function Rj(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var h = e[g];
                    if (h.name === a) {
                        h.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var k = I.createElement("input");
                    k.setAttribute("type", "hidden");
                    k.setAttribute("name", a);
                    k.setAttribute("value", b);
                    c.appendChild(k)
                }
            } else if ("post" === d) {
                var n = Pj(a, b, c.action);
                sb.test(n) && (c.action = n)
            }
        }
    }

    function wj(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || Qj(e, e.hostname)
            }
        } catch (g) {}
    }

    function xj(a) {
        try {
            if (a.action) {
                var b = ji(li(a.action), "host");
                Qj(a, b)
            }
        } catch (c) {}
    }
    var Tj = function(a, b, c, d) {
            zj();
            Aj(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        Uj = function(a, b) {
            zj();
            Aj(a, [ii(z.location, "host", !0)], b, !0, !0)
        },
        Vj = function() {
            var a = I.location.hostname,
                b = Dj.exec(I.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var h = a.replace(Ej, ""),
                k = e.replace(Ej, ""),
                n;
            if (!(n = h === k)) {
                var p = "." + k;
                n = h.substring(h.length - p.length,
                    h.length) === p
            }
            return n
        },
        Wj = function(a, b) {
            return !1 === a ? !1 : a || b || Vj()
        };
    var Xj = {};
    var Yj = /^\w+$/,
        Zj = /^[\w-]+$/,
        ak = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        bk = function() {
            if (!ng().g() || !zg()) return !0;
            var a = wg("ad_storage");
            return null == a ? !0 : !!a
        },
        ck = function(a, b) {
            yg("ad_storage") ? bk() ? a() : Eg(a, "ad_storage") : b ? hg("TAGGING", 3) : Dg(function() {
                ck(a, !0)
            }, ["ad_storage"])
        },
        ek = function(a) {
            return dk(a).map(function(b) {
                return b.Ha
            })
        },
        dk = function(a) {
            var b = [];
            if (!Mi(z) || !I.cookie) return b;
            var c = Pi(a, I.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    Cd: d.Cd
                }, e++) {
                var f = fk(c[e]);
                if (null != f) {
                    var g = f,
                        h = g.version;
                    d.Cd = g.Ha;
                    var k = g.timestamp,
                        n = g.labels,
                        p = Ga(b, function(q) {
                            return function(r) {
                                return r.Ha === q.Cd
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, k), p.labels = gk(p.labels, n || [])) : b.push({
                        version: h,
                        Ha: d.Cd,
                        timestamp: k,
                        labels: n
                    })
                }
            }
            b.sort(function(q, r) {
                return r.timestamp - q.timestamp
            });
            return hk(b)
        };

    function gk(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function ik(a) {
        return a && "string" == typeof a && a.match(Yj) ? a : "_gcl"
    }
    var kk = function() {
            var a = li(z.location.href),
                b = ji(a, "query", !1, void 0, "gclid"),
                c = ji(a, "query", !1, void 0, "gclsrc"),
                d = ji(a, "query", !1, void 0, "wbraid"),
                e = ji(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || gi(f, "gclid", !1);
                c = c || gi(f, "gclsrc", !1);
                d = d || gi(f, "wbraid", !1)
            }
            return jk(b, c, e, d)
        },
        jk = function(a, b, c, d) {
            var e = {},
                f = function(g, h) {
                    e[h] || (e[h] = []);
                    e[h].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && Zj.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(Zj)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        mk = function(a) {
            var b = kk();
            ck(function() {
                lk(b, !1, a)
            })
        };

    function lk(a, b, c, d, e) {
        function f(x, y) {
            var w = nk(x, g);
            w && (Yi(w, y, h), k = !0)
        }
        c = c || {};
        e = e || [];
        var g = ik(c.prefix);
        d = d || Ta();
        var h = gj(c, d, !0);
        h.lb = "ad_storage";
        var k = !1,
            n = Math.round(d / 1E3),
            p = function(x) {
                var y = ["GCL", n, x];
                0 < e.length && y.push(e.join("."));
                return y.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == Xj.enable_gbraid_cookie_write ? 0 : Xj.enable_gbraid_cookie_write) && !k && a.gb) {
            var q = a.gb[0],
                r = nk("gb",
                    g),
                u = !1;
            if (!b)
                for (var t = dk(r), v = 0; v < t.length; v++) t[v].Ha === q && t[v].labels && 0 < t[v].labels.length && (u = !0);
            u || f("gb", p(q))
        }
    }
    var pk = function(a, b) {
            var c = Nj(!0);
            ck(function() {
                for (var d = ik(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== ak[f]) {
                        var g = nk(f, d),
                            h = c[g];
                        if (h) {
                            var k = Math.min(ok(h), Ta()),
                                n;
                            b: {
                                var p = k;
                                if (Mi(z))
                                    for (var q = Pi(g, I.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                        if (ok(q[r]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var u = gj(b, k, !0);
                                u.lb = "ad_storage";
                                Yi(g, h, u)
                            }
                        }
                    }
                }
                lk(jk(c.gclid, c.gclsrc), !1, b)
            })
        },
        nk = function(a, b) {
            var c = ak[a];
            if (void 0 !== c) return b + c
        },
        ok = function(a) {
            return 0 !== qk(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function fk(a) {
        var b = qk(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            Ha: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function qk(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Zj.test(a[2]) ? [] : a
    }
    var rk = function(a, b, c, d, e) {
            if (Ea(b) && Mi(z)) {
                var f = ik(e),
                    g = function() {
                        for (var h = {}, k = 0; k < a.length; ++k) {
                            var n = nk(a[k], f);
                            if (n) {
                                var p = Pi(n, I.cookie, void 0, "ad_storage");
                                p.length && (h[n] = p.sort()[p.length - 1])
                            }
                        }
                        return h
                    };
                ck(function() {
                    Tj(g, b, c, d)
                })
            }
        },
        hk = function(a) {
            return a.filter(function(b) {
                return Zj.test(b.Ha)
            })
        },
        sk = function(a, b) {
            if (Mi(z)) {
                for (var c = ik(b.prefix), d = {}, e = 0; e < a.length; e++) ak[a[e]] && (d[a[e]] = ak[a[e]]);
                ck(function() {
                    La(d, function(f, g) {
                        var h = Pi(c + g, I.cookie, void 0, "ad_storage");
                        h.sort(function(u,
                            t) {
                            return ok(t) - ok(u)
                        });
                        if (h.length) {
                            var k = h[0],
                                n = ok(k),
                                p = 0 !== qk(k.split(".")).length ? k.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== qk(k.split(".")).length ? k.split(".")[2] : void 0;
                            q[f] = [r];
                            lk(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function tk(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var uk = function(a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }
        if (zg()) {
            var c = kk();
            if (tk(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                Uj(function() {
                    return d
                }, 3);
                Uj(function() {
                    var e = {};
                    return e._up = "1", e
                }, 1)
            }
        }
    };

    function vk(a, b) {
        var c = ik(b),
            d = nk(a, c);
        if (!d) return 0;
        for (var e = dk(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function wk(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    };
    var xk = function(a) {
            var b = [];
            La(a, function(c, d) {
                d = hk(d);
                for (var e = [], f = 0; f < d.length; f++) e.push(d[f].Ha);
                e.length && b.push(c + ":" + e.join(","))
            });
            return b.join(";")
        },
        zk = function(a, b, c) {
            if ("aw" === a || "dc" === a || "gb" === a) {
                var d = yk("gcl" + a);
                if (d) return d.split(".")
            }
            var e = ik(b);
            if ("_gcl" == e) {
                c = void 0 === c ? !0 : c;
                var f = !Mg(S.H) && c,
                    g;
                g = kk()[a] || [];
                if (0 < g.length) return f ? ["0"] : g
            }
            var h = nk(a, e);
            return h ? ek(h) : []
        },
        yk = function(a) {
            var b = li(z.location.href),
                c = ji(b, "host", !1);
            if (c && c.match(Ak)) {
                var d = ji(b, "path").split(a +
                    "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        },
        Bk = function(a, b) {
            yg(S.H) ? Mg(S.H) ? a() : Eg(a, S.H) : b ? kg(42) : Qg(function() {
                Bk(a, !0)
            }, [S.H])
        },
        Ak = /^\d+\.fls\.doubleclick\.net$/,
        Ck = !1;
    var Dk = function(a, b) {
            return zk("aw", a, b)
        },
        Ek = function(a, b) {
            return zk("dc", a, b)
        },
        Fk = function(a) {
            var b = yk("gac");
            return b ? !Mg(S.H) && a ? "0" : decodeURIComponent(b) : xk(bk() ? pj() : {})
        },
        Gk = function(a) {
            var b = yk("gacgb");
            return b ?
                !Mg(S.H) && a ? "0" : decodeURIComponent(b) : xk(bk() ? pj("_gac_gb", !0) : {})
        },
        Hk = function(a) {
            var b = kk(),
                c = [],
                d = b.gclid,
                e = b.dclid,
                f = b.gclsrc || "aw";
            !d || "aw.ds" !== f && "aw" !== f && "ds" !== f || c.push({
                Ha: d,
                Df: f
            });
            e && c.push({
                Ha: e,
                Df: "ds"
            });
            if (!Ck) {}
            Bk(function() {
                nj(a);
                var g = ij[kj(a.prefix)];
                if (g && 0 < c.length)
                    for (var h = T.joined_auid = T.joined_auid || {}, k = 0; k < c.length; k++) {
                        var n =
                            c[k],
                            p = n.Ha,
                            q = n.Df,
                            r = (a.prefix || "_gcl") + "." + q + "." + p;
                        if (!h[r]) {
                            var u = "https://adservice.google.com/pagead/regclk";
                            u = "gb" === q ? u + "?gbraid=" + p + "&auid=" + g : u + "?gclid=" + p + "&auid=" + g + "&gclsrc=" + q;
                            Wb(u);
                            h[r] = !0
                        }
                    }
            })
        },
        Ik = function(a) {
            var b;
            if (yk("gclaw") || yk("gac") || 0 < (kk().aw || []).length) b = !1;
            else {
                var c;
                if (0 < (kk().gb || []).length) c = !0;
                else {
                    var d = Math.max(vk("aw", a), wk(bk() ? pj() : {}));
                    c = Math.max(vk("gb", a), wk(bk() ? pj("_gac_gb", !0) : {})) > d
                }
                b = c
            }
            return b
        };
    var Jk = function(a) {
        var b = Fb && Fb.userAgent || "";
        if (0 > b.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(b)) return !1;
        var c = (/Version\/([\d\.]+)/.exec(b) || [])[1] || "";
        if ("" === c) return !1;
        for (var d = a.split("."), e = c.split("."), f = 0; f < e.length; f++) {
            if (void 0 === d[f]) return !0;
            if (e[f] != d[f]) return Number(e[f]) > Number(d[f])
        }
        return e.length >= d.length
    };
    var Lk = function(a) {
            var b = a ? Fi(a) : z.enhanced_conversion_data,
                c = (a || {}).enhanced_conversions_mode,
                d = void 0;
            if ("manual" === c && b) switch (b._tag_mode) {
                case "CODE":
                    d = "c";
                    break;
                case "AUTO":
                    d = "a";
                    break;
                case "MANUAL":
                    d = "m";
                    break;
                default:
                    d = "c"
            } else d = "automatic" === c ? Kk(a) ? "a" : "m" : "c";
            if (z.Promise) try {
                return b ? nh(b).then(function(e) {
                    e.nh = d;
                    return e
                }) : Promise.resolve({
                    te: "",
                    nh: void 0
                })
            } catch (e) {}
        },
        Kk = function(a) {
            var b = a && a[S.ng];
            return b && b[S.si]
        },
        Mk = function(a) {
            if (Mg(S.H)) return a;
            a = a.replace(/&url=([^&#]+)/,
                function(b, c) {
                    var d = mi(decodeURIComponent(c));
                    return "&url=" + encodeURIComponent(d)
                });
            return a = a.replace(/&ref=([^&#]+)/, function(b, c) {
                var d = mi(decodeURIComponent(c));
                return "&ref=" + encodeURIComponent(d)
            })
        },
        Nk = function() {
            if (vh || !0 !== z._gtmdgs && !Jk("11")) return -1;
            var a = Na('1');
            return Hi(1, 100) < a ? Hi(2, 2) : -1
        },
        Ok = function() {
            return -1 !== Fb.userAgent.toLowerCase().indexOf("firefox")
        },
        Pk = function(a) {
            if (a && a.length) {
                for (var b = [], c = 0; c < a.length; ++c) {
                    var d = a[c];
                    d && d.estimated_delivery_date ? b.push("" + d.estimated_delivery_date) : b.push("")
                }
                return b.join(",")
            }
        };
    var Qk = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Rk = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Sk = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Tk = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var Uk = function() {
            var a = !1;
            return a
        },
        Wk = function(a) {
            var b = Nh("gtm.allowlist") || Nh("gtm.whitelist");
            b && kg(9);
            Uk() && (b = ["google", "gtagfl", "lcl", "zone"]);
            var c = b && Ya(Pa(b), Rk),
                d = Nh("gtm.blocklist") ||
                Nh("gtm.blacklist");
            d || (d = Nh("tagTypeBlacklist")) && kg(3);
            d ? kg(8) : d = [];
            Vk() && (d = Pa(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Pa(d).indexOf("google") && kg(2);
            var e = d && Ya(Pa(d), Sk),
                f = {};
            return function(g) {
                var h = g && g[Kd.Jb];
                if (!h || "string" != typeof h) return !0;
                h = h.replace(/^_*/, "");
                if (void 0 !== f[h]) return f[h];
                var k = Gh[h] || [],
                    n = a(h, k);
                if (b) {
                    var p;
                    if (p = n) a: {
                        if (0 > c.indexOf(h))
                            if (k && 0 < k.length)
                                for (var q = 0; q < k.length; q++) {
                                    if (0 > c.indexOf(k[q])) {
                                        kg(11);
                                        p = !1;
                                        break a
                                    }
                                } else {
                                    p = !1;
                                    break a
                                }
                        p = !0
                    }
                    n = p
                }
                var r = !1;
                if (d) {
                    var u = 0 <= e.indexOf(h);
                    if (u) r = u;
                    else {
                        var t = Ka(e, k || []);
                        t && kg(10);
                        r = t
                    }
                }
                var v = !n || r;
                v || !(0 <= k.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = Ka(e, Tk));
                return f[h] = v
            }
        },
        Vk = function() {
            return Qk.test(z.location && z.location.hostname)
        };
    var Ie = {
            J: "GTM-7BJJ",
            Gc: ""
        },
        Xk = {
            Ch: "GTM-7BJJ",
            Dh: "GTM-7BJJ"
        },
        Yk = function() {
            var a = [Ie.J];
            return a
        },
        Zk = function() {
            var a = [Ie.J];
            return a
        },
        $k = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {}
        },
        bl = function(a) {
            return al().container.hasOwnProperty(a)
        };

    function al() {
        var a = T.tidr;
        a || (a = new $k, T.tidr = a);
        return a
    }
    var el = function(a) {
            var b = cl[a];
            if (b) return "&et=" + dl.filter(function(c) {
                return void 0 !== b[c]
            }).map(function(c) {
                return c + Math.floor(b[c])
            }).join(".");
        },
        il = function(a) {
            if (!fl && Object.keys(gl).length === hl.length) return a && (fl = !0), "&l=" + hl.map(function(b) {
                return b + Math.floor(gl[b])
            }).join(".");
        },
        jl =
        function() {
            return "&tc=" + je.filter(function(a) {
                return a
            }).length
        },
        Cl = function() {
            2022 <= kl().length && Bl()
        },
        Dl = function(a) {
            return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*"
        },
        Fl = function() {
            El || (El = z.setTimeout(Bl, 500))
        },
        Bl = function() {
            El && (z.clearTimeout(El), El = void 0);
            if (void 0 !== Gl && (!Hl[Gl] || Il || Jl))
                if (Kl[Gl] || Ll.Oj() || 0 >= Ml--) kg(1), Kl[Gl] = !0;
                else {
                    Ll.nk();
                    var a = kl(!0);
                    Pb(a);
                    Hl[Gl] = !0;
                    Ol = Nl = Ql = Rl = Sl = Jl = Il = "";
                    Pl = []
                }
        },
        kl = function(a) {
            var b = Gl;
            if (void 0 === b) return "";
            var c = ig("GTM"),
                d = ig("TAGGING");
            return [Tl, Hl[b] ? "" : "&es=1", Ul[b], el(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", jl(), Il, Jl, Sl, Rl, il(a), Ql, Nl, Ol ? "&dl=" + encodeURIComponent(Ol) : "", 0 < Pl.length ? "&tdp=" + Pl.join(".") : "", "&z=0"].join("")
        },
        Wl = function() {
            Tl = Vl()
        },
        Vl = function() {
            return [Xl,
                "&v=3&t=t", "&pid=" + Ha(), "&rv=" + oh.Zd
            ].join("")
        },
        hl = ["L", "S", "Y"],
        dl = ["S", "E"],
        Yl = {
            sampleRate: "0.005000",
            Wh: "",
            Vh: Number("5")
        },
        Zl = 0 <= I.location.search.indexOf("?gtm_latency=") || 0 <= I.location.search.indexOf("&gtm_latency="),
        $l;
    if (!($l = Zl)) {
        var am = Math.random(),
            bm = Yl.sampleRate;
        $l = am < bm
    }
    var cm = $l,
        Xl = "https://www.googletagmanager.com/a?id=" + Ie.J + "&cv=1331",
        dm = {
            label: Ie.J + " Container",
            children: [{
                label: "Initialization",
                children: []
            }]
        },
        Tl = Vl(),
        Hl = {},
        Il = "",
        Jl = "",
        Ql = "",
        Rl = "",
        Nl = "",
        Pl = [],
        Ol = "",
        gl = {},
        fl = !1,
        cl = {},
        em = {},
        Sl = "",
        Gl = void 0,
        Ul = {},
        Kl = {},
        El = void 0,
        fm = 5;
    0 < Yl.Vh && (fm = Yl.Vh);
    var Ll = function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                Oj: function() {
                    return c < a ? !1 : Ta() - d[c % a] < b
                },
                nk: function() {
                    var f = c++ % a;
                    d[f] = Ta()
                }
            }
        }(fm, 1E3),
        Ml = 1E3,
        hm = function(a, b) {
            if (cm && !Kl[a] &&
                Gl !== a) {
                Bl();
                Gl = a;
                Ql = Il = "";
                Ul[a] = "&e=" + Dl(b) + "&eid=" + a;
                Fl();
                if (Zl && dm) {
                    var c = {
                        label: "[Event] " + b,
                        children: []
                    };
                    em[a] = c;
                    dm.children.push(c);
                    "gtm.load" === b && z.setTimeout(function() {
                        dm && (gm(dm), dm = void 0)
                    }, 1E3)
                }
            }
        },
        im = function(a, b, c, d) {
            if (cm && b) {
                var e, f = String(b[Kd.Jb] || "").replace(/_/g, "");
                0 === f.indexOf("cvt") && (f = "cvt");
                e = f;
                var g = c + e;
                if (void 0 !== d) {
                    switch (c) {
                        case "7":
                        case "6":
                        case "5":
                            g += "/" + Math.floor(d)
                    }
                    Zl && dm && em[a].children.push({
                        label: "[Tag] " + ("cvt" === e ? "Custom Template" : e) + " Time",
                        time: d
                    })
                }
                if (!Kl[a]) {
                    a !== Gl && (Bl(), Gl = a);
                    Il = Il ? Il + "." + g : "&tr=" + g;
                    var h = b["function"];
                    if (!h) throw Error("Error: No function name given for function call.");
                    var k = (le[h] ? "1" : "2") + e;
                    Ql = Ql ? Ql + "." + k : "&ti=" + k;
                    Fl();
                    Cl()
                }
            }
        };
    var gm = function(a) {
            var b =
                a.label;
            100 < b.length && (b = b.substring(0, 99) + "\u2026");
            var c = null == a.time ? b : b + ": " + Math.round(a.time) + "ms";
            if (a.children && 0 < a.children.length) {
                console.group(c);
                for (var d = 0; d < a.children.length; ++d) gm(a.children[d]);
                console.groupEnd()
            } else console.log(c)
        },
        jm = {},
        km = (jm.L = "Load", jm.S = "Setup", jm.Y = "Yield", jm),
        lm = {},
        mm = (lm.S = "Setup", lm.E = "Elapsed", lm),
        nm = function(a, b) {
            if (cm && void 0 !== b && void 0 === gl[a] && (gl[a] = b, Zl && dm)) {
                var c = {
                        label: "Container " + km[a],
                        time: b
                    },
                    d = dm.children[0];
                d.children.push(c);
                d.time = (d.time ||
                    0) + c.time
            }
        },
        om = function(a, b, c) {
            if (cm && void 0 !== c) {
                var d = cl[a];
                d || (cl[a] = d = {});
                d[b] = c;
                if (Zl && dm) {
                    var e = {
                            label: mm[b] + " Time",
                            time: c
                        },
                        f = em[a];
                    f.children.push(e);
                    f.time = (f.time || 0) + e.time
                }
            }
        };
    var pm = function(a, b, c) {
            if (cm && !Kl[a]) {
                a !== Gl && (Bl(), Gl = a);
                var d = c + b;
                Jl = Jl ? Jl + "." + d : "&epr=" + d;
                Fl();
                Cl()
            }
        },
        qm = function(a, b, c) {};
    var rm = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        sm = {},
        tm = Object.freeze((sm[S.Ib] = !0, sm[S.oc] = !0, sm)),
        um = {},
        vm = Object.freeze((um[S.Fa] = !0, um)),
        wm = 0 <= I.location.search.indexOf("?gtm_diagnostics=") || 0 <= I.location.search.indexOf("&gtm_diagnostics="),
        ym = function(a, b, c) {};

    function zm(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function xm(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, r) {
                var u = r[q];
                return void 0 === u ? vm[q] : u
            },
            f;
        for (f in zm(a, b))
            if (!tm[f]) {
                var g = (d ? d + "." : "") + f,
                    h = e(f, a),
                    k = e(f, b),
                    n = "object" === lc(h) || "array" === lc(h),
                    p = "object" === lc(k) || "array" === lc(k);
                if (n && p) xm(h, k, c, g);
                else if (n || p || h !== k) c[g] = !0
            }
        return Object.keys(c)
    };
    var Am = !1,
        Bm = 0,
        Cm = [];

    function Dm(a) {
        if (!Am) {
            var b = I.createEventObject,
                c = "complete" == I.readyState,
                d = "interactive" == I.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Am = !0;
                for (var e = 0; e < Cm.length; e++) K(Cm[e])
            }
            Cm.push = function() {
                for (var f = 0; f < arguments.length; f++) K(arguments[f]);
                return 0
            }
        }
    }

    function Em() {
        if (!Am && 140 > Bm) {
            Bm++;
            try {
                I.documentElement.doScroll("left"), Dm()
            } catch (a) {
                z.setTimeout(Em, 50)
            }
        }
    }
    var Fm = function(a) {
        Am ? a() : Cm.push(a)
    };
    var Hm = function(a, b, c) {
        return {
            entityType: a,
            indexInOriginContainer: b,
            nameInOriginContainer: c,
            originContainerId: Ie.J
        }
    };
    var Jm = function(a, b) {
            this.g = !1;
            this.C = [];
            this.I = {
                tags: []
            };
            this.R = !1;
            this.o = this.s = 0;
            Im(this, a, b)
        },
        Km = function(a, b, c, d) {
            if (rh.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            nc(d) && (e = oc(d, e));
            e.id = c;
            e.status = "timeout";
            return a.I.tags.push(e) - 1
        },
        Lm = function(a, b, c, d) {
            var e = a.I.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        Mm = function(a) {
            if (!a.g) {
                for (var b = a.C, c = 0; c < b.length; c++) b[c]();
                a.g = !0;
                a.C.length = 0
            }
        },
        Im = function(a, b, c) {
            void 0 !== b && a.ce(b);
            c && z.setTimeout(function() {
                return Mm(a)
            }, Number(c))
        };
    Jm.prototype.ce = function(a) {
        var b = this,
            c = Va(function() {
                return K(function() {
                    a(Ie.J, b.I)
                })
            });
        this.g ? c() : this.C.push(c)
    };
    var Nm = function(a) {
            a.s++;
            return Va(function() {
                a.o++;
                a.R && a.o >= a.s && Mm(a)
            })
        },
        Om = function(a) {
            a.R = !0;
            a.o >= a.s && Mm(a)
        };
    var Pm = function() {
            function a(d) {
                return !Da(d) || 0 > d ? 0 : d
            }
            if (!T._li && z.performance && z.performance.timing) {
                var b = z.performance.timing.navigationStart,
                    c = Da(Oh.get("gtm.start")) ? Oh.get("gtm.start") : 0;
                T._li = {
                    cst: a(c - b),
                    cbt: a(xh - b)
                }
            }
        },
        Qm = function(a) {
            z.performance && z.performance.mark(Ie.J + "_" + a + "_start")
        },
        Rm = function(a) {
            if (z.performance) {
                var b = Ie.J + "_" + a + "_start",
                    c = Ie.J + "_" + a + "_duration";
                z.performance.measure(c, b);
                var d = z.performance.getEntriesByName(c)[0];
                z.performance.clearMarks(b);
                z.performance.clearMeasures(c);
                var e = T._p || {};
                void 0 === e[a] && (e[a] = d.duration, T._p = e);
                return d.duration
            }
        },
        Sm = function() {
            if (z.performance && z.performance.now) {
                var a = T._p || {};
                a.PAGEVIEW = z.performance.now();
                T._p = a
            }
        };
    var Tm = {},
        Um = function() {
            return z.GoogleAnalyticsObject && z[z.GoogleAnalyticsObject]
        },
        Vm = !1;
    var Wm = function(a) {
            z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || "ga");
            var b = z.GoogleAnalyticsObject;
            if (z[b]) z.hasOwnProperty(b) || kg(12);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(Sa());
                z[b] = c
            }
            Pm();
            return z[b]
        },
        Xm = function(a) {
            if (zg()) {
                var b = Um();
                b(a + "require", "linker");
                b(a + "linker:passthrough", !0)
            }
        };

    function Ym() {
        return z.GoogleAnalyticsObject || "ga"
    }
    var Zm = function(a) {},
        $m = function(a, b) {
            return function() {
                var c = Um(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            h = f.get("hitCallback"),
                            k = 0 > g.indexOf("&tid=" + b);
                        k && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        k && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", h, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };

    function en(a, b, c, d) {
        var e = je[a],
            f = fn(a, b, c, d);
        if (!f) return null;
        var g = te(e[Kd.Sg], c, []);
        if (g && g.length) {
            var h = g[0];
            f = en(h.index, {
                onSuccess: f,
                onFailure: 1 === h.oh ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function fn(a, b, c, d) {
        function e() {
            if (f[Kd.Qi]) h();
            else {
                var x = ue(f, c, []);
                var y = x[Kd.ai];
                if (null != y)
                    for (var w = 0; w < y.length; w++)
                        if (!Mg(y[w])) {
                            h();
                            return
                        }
                var A = Km(c.xb, String(f[Kd.Jb]), Number(f[Kd.Ug]), x[Kd.Ri]),
                    B = !1;
                x.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var D = Ta() - C;
                        im(c.id, je[a], "5", D);
                        Lm(c.xb, A, "success",
                            D);
                        g()
                    }
                };
                x.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var D = Ta() - C;
                        im(c.id, je[a], "6", D);
                        Lm(c.xb, A, "failure", D);
                        h()
                    }
                };
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
                im(c.id, f, "1");
                var E = function() {
                    var D = Ta() - C;
                    im(c.id, f, "7", D);
                    Lm(c.xb, A, "exception",
                        D);
                    B || (B = !0, h())
                };
                var C = Ta();
                try {
                    se(x, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (D) {
                    E(D)
                }
            }
        }
        var f = je[a],
            g = b.onSuccess,
            h = b.onFailure,
            k = b.terminate;
        if (c.If(f)) return null;
        var n = te(f[Kd.Vg], c, []);
        if (n && n.length) {
            var p = n[0],
                q = en(p.index, {
                    onSuccess: g,
                    onFailure: h,
                    terminate: k
                }, c, d);
            if (!q) return null;
            g = q;
            h = 2 === p.oh ? k : q
        }
        if (f[Kd.Mg] || f[Kd.Vi]) {
            var r = f[Kd.Mg] ? ke : c.Ek,
                u = g,
                t = h;
            if (!r[a]) {
                e = Va(e);
                var v = gn(a, r, e);
                g = v.onSuccess;
                h = v.onFailure
            }
            return function() {
                r[a](u, t)
            }
        }
        return e
    }

    function gn(a, b, c) {
        var d = [],
            e = [];
        b[a] = hn(d, e, c);
        return {
            onSuccess: function() {
                b[a] = jn;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = kn;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function hn(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function jn(a) {
        a()
    }

    function kn(a, b) {
        b()
    };

    function ln(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return li("" + c + b).href
        }
    }

    function mn(a, b) {
        return nn() ? ln(a, b) : void 0
    }

    function nn() {
        var a = !1;
        return a
    }

    function on() {
        return !!oh.$d && "SGTM_TOKEN" !== oh.$d.replaceAll("@@", "")
    };
    var pn = function() {
        var a = !1;
        return a
    };
    var rn = function(a, b, c, d) {
            return (2 === qn() || d || "http:" != z.location.protocol ? a : b) + c
        },
        qn = function() {
            var a = Nb(),
                b;
            if (1 === a) a: {
                var c = th;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, g = I.getElementsByTagName("script"), h = 0; h < g.length && 100 > h; h++) {
                    var k = g[h].src;
                    if (k) {
                        k = k.toLowerCase();
                        if (0 === k.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === f && 0 === k.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
            else b = a;
            return b
        };
    var sn = !1;
    var un = function(a, b, c) {
            if (!tn() && !bl(a)) {
                var d = c ? "/gtag/js" : "/gtm.js",
                    e = "?id=" + encodeURIComponent(a) + "&l=" + oh.ca,
                    f = 0 === a.indexOf("GTM-");
                f || (e += "&cx=c");
                var g = on();
                g && (e += "&sign=" + oh.$d);
                var h = mn(b, d + e);
                if (!h) {
                    var k = oh.Hc + d;
                    g && Gb && f && (k = Gb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    h = rn("https://", "http://", k + e)
                }
                al().container[a] = !0;
                Mb(h)
            }
        },
        vn = function(a, b) {
            if (sn) {
                var c;
                if (c = !tn()) c = !al().destination.hasOwnProperty(a);
                if (c) {
                    var d = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + oh.ca + "&cx=c";
                    on() && (d += "&sign=" + oh.$d);
                    var e = mn(b, d);
                    e || (e = rn("https://", "http://", oh.Hc + d));
                    al().destination[a] = !0;
                    Mb(e)
                }
            } else un(a, b, !0)
        };

    function tn() {
        if (pn()) {
            return !0
        }
        return !1
    }
    var wn = function() {
            this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.globalConfig = {};
            this.dataLayerConfig = {};
            this.remoteConfig = {};
            this.onSuccess = function() {};
            this.onFailure = function() {};
            this.setContainerTypeLoaded = function() {};
            this.getContainerTypeLoaded = function() {};
            this.priorityId = this.eventId = void 0;
            this.isGtmEvent = !1
        },
        xn = function(a) {
            var b = new wn;
            b.eventModel = a;
            return b
        },
        yn = function(a, b) {
            a.targetConfig = b;
            return a
        },
        zn = function(a, b) {
            a.containerConfig = b;
            return a
        },
        An = function(a, b) {
            a.globalConfig =
                b;
            return a
        },
        Bn = function(a, b) {
            a.dataLayerConfig = b;
            return a
        },
        Cn = function(a, b) {
            a.remoteConfig = b;
            return a
        },
        Dn = function(a, b) {
            a.onSuccess = b;
            return a
        },
        En = function(a, b) {
            a.setContainerTypeLoaded = b;
            return a
        },
        Fn = function(a, b) {
            a.getContainerTypeLoaded = b;
            return a
        },
        Gn = function(a, b) {
            a.onFailure = b;
            return a
        };
    l = wn.prototype;
    l.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a]) return this.eventModel[a];
        if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
        Hn(this, this.globalConfig[a], this.dataLayerConfig[a]) && kg(71);
        if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
        if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a]
    };
    l.getTopLevelKeys = function() {
        function a(f) {
            for (var g = Object.keys(f), h = 0; h < g.length; ++h) b[g[h]] = 1
        }
        var b = {};
        a(this.eventModel);
        a(this.targetConfig);
        a(this.containerConfig);
        a(this.globalConfig);
        for (var c = Object.keys(this.dataLayerConfig), d = 0; d < c.length; d++) {
            var e = c[d];
            if ("event" !== e && "gtm" !== e && "tagTypeBlacklist" !== e && !b.hasOwnProperty(e)) {
                kg(71);
                break
            }
        }
        return Object.keys(b)
    };
    l.getMergedValues = function(a, b) {
        function c(h) {
            nc(h) && La(h, function(k, n) {
                e = !0;
                d[k] = n
            })
        }
        var d = {},
            e = !1;
        b && 1 !== b || (c(this.remoteConfig[a]), c(this.globalConfig[a]), c(this.containerConfig[a]), c(this.targetConfig[a]));
        b && 2 !== b || c(this.eventModel[a]);
        var f = e,
            g = d;
        d = {};
        e = !1;
        b && 1 !== b || (c(this.remoteConfig[a]), c(this.dataLayerConfig[a]), c(this.containerConfig[a]), c(this.targetConfig[a]));
        b && 2 !== b || c(this.eventModel[a]);
        (e !== f || Hn(this, d, g)) && kg(71);
        e = f;
        d = g;
        return e ? d : void 0
    };
    l.getKeysFromFirstOfAnyScope = function(a) {
        var b = {},
            c = !1,
            d = function(g) {
                for (var h = 0; h < a.length; h++) void 0 !== g[a[h]] && (b[a[h]] = g[a[h]], c = !0);
                return c
            };
        if (d(this.eventModel) || d(this.targetConfig) || d(this.containerConfig)) return b;
        d(this.globalConfig);
        var e = b,
            f = c;
        b = {};
        c = !1;
        d(this.dataLayerConfig);
        Hn(this, b, e) && kg(71);
        b = e;
        c = f;
        if (c) return b;
        d(this.remoteConfig);
        return b
    };
    l.getEventModelKeys = function() {
        var a = [],
            b;
        for (b in this.eventModel) b !== S.Ib && this.eventModel.hasOwnProperty(b) && void 0 !== this.eventModel[b] && a.push(b);
        return a
    };
    var Hn = function(a, b, c) {
        try {
            if (b === c) return !1;
            var d = lc(b);
            if (d !== lc(c) || !(nc(b) && nc(c) || "array" === d)) return !0;
            if ("array" === d) {
                if (b.length !== c.length) return !0;
                for (var e = 0; e < b.length; e++)
                    if (Hn(a, b[e], c[e])) return !0
            } else {
                for (var f in c)
                    if (!b.hasOwnProperty(f)) return !0;
                for (var g in b)
                    if (!c.hasOwnProperty(g) || Hn(a, b[g], c[g])) return !0
            }
        } catch (h) {
            kg(72)
        }
        return !1
    };
    var In = function() {
        T.dedupe_gclid || (T.dedupe_gclid = "" + bj());
        return T.dedupe_gclid
    };
    var Jn;
    if (3 === oh.Zd.length) Jn = "g";
    else {
        var Kn = "G";
        Jn = Kn
    }
    var Ln = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            HA: "h",
            GTM: Jn,
            OPT: "o"
        },
        Mn = function(a) {
            var b = Ie.J.split("-"),
                c = b[0].toUpperCase(),
                d = Ln[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f;
            if (3 === oh.Zd.length) {
                var g = "w";
                f = "2" + g
            } else f = "";
            return f + d + oh.Zd + e
        };

    function Nn(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var On = function(a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1)
    };

    function Pn() {
        return ub("iPhone") && !ub("iPod") && !ub("iPad")
    };
    ub("Opera");
    ub("Trident") || ub("MSIE");
    ub("Edge");
    !ub("Gecko") || -1 != tb().toLowerCase().indexOf("webkit") && !ub("Edge") || ub("Trident") || ub("MSIE") || ub("Edge"); - 1 != tb().toLowerCase().indexOf("webkit") && !ub("Edge") && ub("Mobile");
    ub("Macintosh");
    ub("Windows");
    ub("Linux") || ub("CrOS");
    var Qn = ma.navigator || null;
    Qn && (Qn.appVersion || "").indexOf("X11");
    ub("Android");
    Pn();
    ub("iPad");
    ub("iPod");
    Pn() || ub("iPad") || ub("iPod");
    tb().toLowerCase().indexOf("kaios");
    var Rn = function(a) {
        if (!a || !I.head) return null;
        var b, c;
        c = void 0 === c ? document : c;
        b = c.createElement("meta");
        I.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    };
    var Sn = function() {};
    var Tn = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Un = function(a, b) {
            this.o = a;
            this.g = null;
            this.C = {};
            this.R = 0;
            this.I = void 0 === b ? 500 : b;
            this.s = null
        };
    la(Un, Sn);
    Un.prototype.addEventListener = function(a) {
        var b = {},
            c = Li(function() {
                return a(b)
            }),
            d = 0; - 1 !== this.I && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.I));
        var e = function(f, g) {
            clearTimeout(d);
            f ? (b = f, b.internalErrorState = Tn(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
            a(b)
        };
        try {
            Vn(this, "addEventListener", e)
        } catch (f) {
            b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
                d = 0), c()
        }
    };
    Un.prototype.removeEventListener = function(a) {
        a && a.listenerId && Vn(this, "removeEventListener", null, a.listenerId)
    };
    var Xn = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var h = c;
            2 === c ? (h = 0, 2 === g && (h = 1)) : 3 === c && (h = 1, 1 === g && (h = 0));
            var k;
            if (0 === h)
                if (a.purpose && a.vendor) {
                    var n = Wn(a.vendor.consents, void 0 === d ? "755" : d);
                    k = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Wn(a.purpose.consents, b)
                } else k = !0;
            else k = 1 === h ? a.purpose && a.vendor ? Wn(a.purpose.legitimateInterests,
                b) && Wn(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return k
        },
        Wn = function(a, b) {
            return !(!a || !a[b])
        },
        Vn = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.o.__tcfapi) {
                var e = a.o.__tcfapi;
                e(b, 2, c, d)
            } else if (Yn(a)) {
                Zn(a);
                var f = ++a.R;
                a.C[f] = c;
                if (a.g) {
                    var g = {};
                    a.g.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        Yn = function(a) {
            if (a.g) return a.g;
            var b;
            a: {
                for (var c = a.o, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (h) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (h) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.g = b;
            return a.g
        },
        Zn = function(a) {
            a.s || (a.s = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.C[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, On(a.o, a.s))
        };
    var $n = !0;
    $n = !1;
    var ao = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        bo = Nn("", 550),
        co = Nn("", 500);

    function eo() {
        var a = T.tcf || {};
        return T.tcf = a
    }
    var jo = function() {
        var a = eo(),
            b = new Un(z, $n ? 3E3 : -1);
        if (!0 === z.gtag_enable_tcf_support && !a.active && ("function" === typeof z.__tcfapi || "function" === typeof b.o.__tcfapi || null != Yn(b))) {
            a.active = !0;
            a.ud = {};
            fo();
            var c = null;
            $n ? c = z.setTimeout(function() {
                go(a);
                ho(a);
                c = null
            }, co) : a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(d) {
                    c && (clearTimeout(c), c = null);
                    if (0 !== d.internalErrorState) go(a), ho(a);
                    else {
                        var e;
                        a.gdprApplies = d.gdprApplies;
                        if (!1 === d.gdprApplies) e = io(), b.removeEventListener(d);
                        else if ("tcloaded" ===
                            d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) {
                            var f = {},
                                g;
                            for (g in ao)
                                if (ao.hasOwnProperty(g))
                                    if ("1" === g) {
                                        var h = d,
                                            k = !0;
                                        k = void 0 === k ? !1 : k;
                                        var n;
                                        var p = h;
                                        !1 === p.gdprApplies ? n = !0 : (void 0 === p.internalErrorState && (p.internalErrorState = Tn(p)), n = "error" === p.cmpStatus || 0 !== p.internalErrorState || "loaded" === p.cmpStatus && ("tcloaded" === p.eventStatus || "useractioncomplete" === p.eventStatus) ? !0 : !1);
                                        f["1"] = n ? !1 === h.gdprApplies || "tcunavailable" === h.tcString || void 0 === h.gdprApplies &&
                                            !k || "string" !== typeof h.tcString || !h.tcString.length ? !0 : Xn(h, "1", 0) : !1
                                    } else f[g] = Xn(d, g, ao[g]);
                            e = f
                        }
                        e && (a.tcString = d.tcString || "tcempty", a.ud = e, ho(a))
                    }
                })
            } catch (d) {
                c && (clearTimeout(c), c = null), go(a), ho(a)
            }
        }
    };

    function go(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        $n && (a.ud = io())
    }

    function fo() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = bo, a);
        Jg(b)
    }

    function io() {
        var a = {},
            b;
        for (b in ao) ao.hasOwnProperty(b) && (a[b] = !0);
        return a
    }

    function ho(a) {
        var b = {},
            c = (b.ad_storage = a.ud["1"] ? "granted" : "denied", b);
        Lg(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: ko()
        })
    }
    var ko = function() {
            var a = eo();
            return a.active ? a.tcString || "" : ""
        },
        lo = function() {
            var a = eo();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        mo = function(a) {
            if (!ao.hasOwnProperty(String(a))) return !0;
            var b = eo();
            return b.active && b.ud ? !!b.ud[String(a)] : !0
        };
    var no = function(a, b) {
            var c = a && !Mg(S.H);
            return b && c ? "0" : b
        },
        ro = function(a) {
            function b(t) {
                var v;
                T.reported_gclid || (T.reported_gclid = {});
                v = T.reported_gclid;
                var x, y = g;
                x = !g || zg() && !Mg(S.H) ? k + (t ? "gcu" : "gcs") : k + "." + (f.prefix || "_gcl") + (t ? "gcu" : "gcs");
                if (!v[x]) {
                    v[x] = !0;
                    var w = [],
                        A = {},
                        B = function(Q, O) {
                            O && (w.push(Q + "=" + encodeURIComponent(O)), A[Q] = !0)
                        },
                        E = "https://www.google.com";
                    if (zg()) {
                        var C = Mg(S.H);
                        B("gcs", Ng());
                        t && B("gcu", "1");
                        Ag() && B("gcd", "G1" + Hg(xg));
                        B("rnd", In());
                        if ((!k || n && "aw.ds" !== n) && Mg(S.H)) {
                            var D = ek("_gcl_aw");
                            B("gclaw", D.join("."))
                        }
                        B("url", String(z.location).split(/[?#]/)[0]);
                        B("dclid", no(d, p));
                        var F = !1;
                        F = !0;
                        C || !d && !F || (E = "https://pagead2.googlesyndication.com")
                    }
                    B("gdpr_consent", ko());
                    B("gdpr", lo());
                    "1" === Nj(!1)._up && B("gtm_up", "1");
                    B("gclid", no(d, k));
                    B("gclsrc", n);
                    if (!(A.gclid || A.dclid || A.gclaw) && (B("gbraid", no(d, q)), A.gbraid && po && (y = !1), !A.gbraid && zg() && Mg(S.H))) {
                        var R = ek("_gcl_gb");
                        0 < R.length && (B("gclgb", R.join(".")), po && (y = !1))
                    }
                    B("gtm", Mn(!e));
                    g && Mg(S.H) && (nj(f || {}), y && B("auid", ij[kj(f.prefix)] || ""));
                    qo || a.ie && B("did", a.ie), a.wc && B("gdid", a.wc), a.vc && B("edid", a.vc);
                    var J = E + "/pagead/landing?" + w.join("&");
                    Wb(J)
                }
            }
            var c = !!a.wf,
                d = !!a.Za,
                e = a.X,
                f = void 0 ===
                a.Nb ? {} : a.Nb,
                g = void 0 === a.se ? !0 : a.se,
                h = kk(),
                k = h.gclid || "",
                n = h.gclsrc,
                p = h.dclid || "",
                q = h.gbraid || "",
                r = !c && ((!k || n && "aw.ds" !== n ? !1 : !0) || q),
                u = zg();
            if (r || u) u ? Qg(function() {
                b();
                Mg(S.H) || Pg(function(t) {
                    return b(!0, t.consentEventId, t.consentPriorityId)
                }, S.H)
            }, [S.H]) : b()
        },
        oo = function(a) {
            var b = String(z.location).split(/[?#]/)[0],
                c = oh.ci || z._CONSENT_MODE_SALT;
            return a ? c ? String(Ii(b + a + c)) : "0" : ""
        },
        qo = !1;
    var po = !1;
    var so = function(a) {
        if (!zg() || wg(S.H)) {
            a = a || {};
            nj(a, !1);
            var b = jj[kj(ik(a.prefix))];
            if (b && !(18E5 < Ta() - 1E3 * b.xh)) {
                var c = b.id,
                    d = c.split(".");
                if (2 === d.length && !(864E5 < Ta() - 1E3 * (Number(d[1]) || 0))) return c
            }
        }
    };
    var to = !1;
    var uo = function() {
            this.g = {}
        },
        vo = function(a, b, c) {
            null != c && (a.g[b] = c)
        },
        wo = function(a) {
            return Object.keys(a.g).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.g[b])
            }).join("&")
        },
        yo = function(a, b, c, d, e) {
            if (!zg()) {
                xo(a, b, c, d, e);
                return
            }
            Qg(function() {
                Mg(S.H) ? xo(a, b, c, d, e) : d && d()
            }, [S.H]);
        };

    var zo = function(a, b, c) {
            c = void 0 === c ? !0 : c;
            var d = {
                    gclgb: function() {
                        return zk("gb", b, c).join(".")
                    },
                    gacgb: function() {
                        return Gk(c)
                    },
                    gclaw: function() {
                        return Dk(b, c).join(".")
                    },
                    gac: function() {
                        return Fk(c)
                    }
                },
                e = Ik(b);
            to && (e = !1);
            var f = e ? "gclgb" : "gclaw",
                g = e ? "gacgb" : "gac",
                h = d[g],
                k = (0, d[f])(),
                n = "_gcl" !== b ? "" : h();
            k && vo(a, f, k);
            n && vo(a, g, n)
        },
        xo = function(a, b, c, d, e) {
            c = c || {};
            var f = c.Nb || {},
                g = new uo;
            mh(b, function(h, k) {
                vo(g, "em", h);
                vo(g, "gtm", Mn());
                zg() && (vo(g, "gcs", Ng()), vo(g, "gcd", "G1" + Hg(xg)));
                zo(g, ik(f.prefix), c.Za);
                vo(g, "auid", ij[kj(f.prefix)]);
                e && e.oe && vo(g, "gdid", e.oe);
                e && e.ke && vo(g, "edid", e.ke);
                var A = wo(g);
                Wb("https://google.com/pagead/form-data/" + a + "?" + A);
                d && d()
            })
        };
    var Ao = /[A-Z]+/,
        Bo = /\s/,
        Co = function(a) {
            if (m(a)) {
                a = Ra(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (Ao.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e] || Bo.test(d[e]) && ("AW" !== c || 1 !== e)) return;
                        return {
                            id: a,
                            prefix: c,
                            containerId: c + "-" + d[0],
                            P: d
                        }
                    }
                }
            }
        },
        Eo = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = Co(a[c]);
                d && (b[d.id] = d)
            }
            Do(b);
            var e = [];
            La(b, function(f, g) {
                e.push(g)
            });
            return e
        };

    function Do(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.P[1] && b.push(d.containerId)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var Go = function(a, b, c) {
            if (z[a.functionName]) return b.Pf && K(b.Pf), z[a.functionName];
            var d = Fo();
            z[a.functionName] = d;
            if (a.de)
                for (var e = 0; e < a.de.length; e++) z[a.de[e]] = z[a.de[e]] || Fo();
            a.qe && void 0 === z[a.qe] && (z[a.qe] = c);
            Mb(rn("https://", "http://", a.Yf), b.Pf, b.bk);
            return d
        },
        Fo = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        Ho = {
            functionName: "_googWcmImpl",
            qe: "_googWcmAk",
            Yf: "www.gstatic.com/wcm/loader.js"
        },
        Io = {
            functionName: "_gaPhoneImpl",
            qe: "ga_wpid",
            Yf: "www.gstatic.com/gaphone/loader.js"
        },
        Jo = {
            $h: "",
            Xi: "5"
        },
        Ko = {
            functionName: "_googCallTrackingImpl",
            de: [Io.functionName, Ho.functionName],
            Yf: "www.gstatic.com/call-tracking/call-tracking_" + (Jo.$h || Jo.Xi) + ".js"
        },
        Lo = {},
        Mo = function(a, b, c, d) {
            kg(22);
            if (c) {
                d = d || {};
                var e = Go(Ho, d, a),
                    f = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.kb && (f.autoreplace = c);
                e(2, d.kb, f, c, 0, Sa(), d.options)
            }
        },
        No = function(a, b, c, d) {
            kg(21);
            if (b && c) {
                d = d || {};
                for (var e = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: Sa()
                    }, f = 0; f < a.length; f++) {
                    var g = a[f];
                    Lo[g.id] ||
                        (g && "AW" === g.prefix && !e.adData && 2 <= g.P.length ? (e.adData = {
                            ak: g.P[0],
                            cl: g.P[1]
                        }, Lo[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
                            gaWpid: g.containerId
                        }, Lo[g.id] = !0))
                }(e.gaData || e.adData) && Go(Ko, d)(d.kb, e, d.options)
            }
        },
        Oo = function() {
            var a = !1;
            return a
        },
        Po = function(a, b) {
            if (a)
                if (pn()) {} else {
                    if (m(a)) {
                        var c =
                            Co(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = b.getWithConfig(S.Ei);
                    if (f && Ea(f)) {
                        d = [];
                        for (var g = 0; g < f.length; g++) {
                            var h = Co(f[g]);
                            h && (d.push(h), (a.id === h.id || a.id === a.containerId && a.containerId === h.containerId) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var k = b.getWithConfig(S.xg),
                            n;
                        if (k) {
                            Ea(k) ? n = k : n = [k];
                            var p = b.getWithConfig(S.vg),
                                q = b.getWithConfig(S.wg),
                                r = b.getWithConfig(S.yg),
                                u = b.getWithConfig(S.Di),
                                t = p || q,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var x = 0; x < n.length; x++)
                                if (x < v)
                                    if (d) No(d, n[x], u, {
                                        kb: t,
                                        options: r
                                    });
                                    else if ("AW" === a.prefix &&
                                a.P[1]) Oo() ? No([a], n[x], u || "US", {
                                kb: t,
                                options: r
                            }) : Mo(a.P[0], a.P[1], n[x], {
                                kb: t,
                                options: r
                            });
                            else if ("UA" === a.prefix)
                                if (Oo()) No([a], n[x], u || "US", {
                                    kb: t
                                });
                                else {
                                    var y = a.containerId,
                                        w = n[x],
                                        A = {
                                            kb: t
                                        };
                                    kg(23);
                                    if (w) {
                                        A = A || {};
                                        var B = Go(Io, A, y),
                                            E = {};
                                        void 0 !== A.kb ? E.receiver = A.kb : E.replace = w;
                                        E.ga_wpid = y;
                                        E.destination = w;
                                        B(2, Sa(), E)
                                    }
                                }
                        }
                    }
                }
        };
    var Ro = function() {
            var a = T.floc;
            if (a) {
                var b = a.ts,
                    c = a.floc;
                if (b && c && 1E3 > Ta() - b) return Promise.resolve(c)
            }
            var d = void 0;
            try {
                d = Promise.race([I.interestCohort().then(function(e) {
                    T.floc = {
                        ts: Ta(),
                        floc: e
                    };
                    return e
                }), new Promise(function(e) {
                    z.setTimeout(function() {
                        return e()
                    }, Qo)
                })]).catch(function() {})
            } catch (e) {
                return
            }
            return d
        },
        To = function() {
            if (!z.Promise) return !1;
            Ca(I.interestCohort) || So || (So = !0, Rn("A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"));
            return Ca(I.interestCohort)
        },
        So = !1,
        Qo = Number("200");
    var Vo = function(a, b) {
            var c = a.yh,
                d = a.Sh;
            a.he && (Wj(c[S.hc], !!c[S.U]) && pk(Uo, b), mk(b), sk(Uo, b), Hk(b));
            c[S.U] && rk(Uo, c[S.U], c[S.Vc], !!c[S.ic], b.prefix);
            d && uk(["aw", "dc", "gb"])
        },
        Wo = function(a, b, c, d) {
            var e = a.Uh,
                f = a.callback,
                g = a.Ah;
            if ("function" === typeof f)
                if (e === S.Ie && void 0 === g) {
                    var h = d(b.prefix, c);
                    0 === h.length ? f(void 0) : 1 === h.length ? f(h[0]) : f(h)
                } else e === S.ri ? (kg(65), nj(b, !1), f(ij[kj(b.prefix)])) : f(g)
        },
        Uo = ["aw", "dc", "gb"];
    var Xo = !1;

    function Yo() {
        if (Ca(Fb.joinAdInterestGroup)) return !0;
        Xo || (Rn(''), Xo = !0);
        return Ca(Fb.joinAdInterestGroup)
    }

    function Zo(a, b) {
        var c = void 0;
        try {
            c = I.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Ta() - d) {
                hg("TAGGING", 9);
                return
            }
        } else try {
            if (50 <= I.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                hg("TAGGING", 10);
                return
            }
        } catch (e) {}
        Ob(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Ta()
        }, c)
    };
    var $o = function(a, b, c, d, e) {
            var f;
            if (f = !b && !a.g) {
                var g;
                if (g = !a.isGtmEvent) {
                    var h = a.s.remoteConfig[S.jc];
                    g = h ? "auto_detect" === h.mode || "selectors" === h.mode || "code" === h.mode : !1
                }
                f = g
            }
            if (f) {
                var k = a.N(S.Ga);
                if (null !== k) {
                    var n;
                    k && nc(k) ? n = k : n = Ei(a.getRemoteConfig(S.jc));
                    n && yo(a.I, n, {
                        Nb: e,
                        Za: c
                    }, void 0, d)
                }
            }
        },
        ap = function(a, b) {},
        bp = function(a, b) {
            a.wa("google_gtm_url_processor", function(c) {
                b && (c = Mk(c));
                var d = c;
                return c = d
            })
        },
        cp = function(a, b) {
            a.sc("gdpr_consent",
                ko());
            a.sc("gdpr", lo());
            zg() && a.g && (a.Z("gcs", Ng()), Ag() && a.Z("gcd", "G1" + Hg(xg)), b && a.Z("gcu", "1"))
        },
        ep = function(a, b) {
            var c;
            if (!(c = b))
                if ("false" !== ni.Zh && ti)
                    if (ui) c = !0;
                    else {
                        var d = Wh("AW-" + a.I);
                        c = !!d && !!d.preAutoPii
                    }
            else c = !1;
            if (c) {
                var e = Ta(),
                    f = Ai({
                        yc: !0,
                        zc: !0,
                        wk: dp
                    });
                if (0 !== f.elements.length) {
                    var g = [];
                    var n = f.hk;
                    n && (a.Z("ec_sel", n.querySelector), a.Z("ec_meta", Bi(n)));
                    a.Z("ec_lat", String(Ta() - e));
                    a.Z("ec_s", f.status)
                }
            }
        },
        fp = function(a) {
            if (!a.g) a.N(S.fa) && a.wa("google_gtag_event_data", {
                items: a.N(S.fa)
            });
            else if (a.eventName == S.Aa) {
                a.bd({
                    google_conversion_merchant_id: a.N(S.Oe),
                    google_basket_feed_country: a.N(S.Me),
                    google_basket_feed_language: a.N(S.Ne),
                    google_basket_discount: a.N(S.Le),
                    google_basket_transaction_type: a.eventName,
                    google_disable_merchant_reported_conversions: !0 === a.N(S.jg)
                });
                pn() && a.wa("google_disable_merchant_reported_conversions", !0);
                var b;
                var c = a.N(S.fa);
                if (c) {
                    for (var d = [], e = 0; e < c.length; ++e) {
                        var f = c[e];
                        f && d.push({
                            item_id: f.id,
                            quantity: f.quantity,
                            value: f.price,
                            start_date: f.start_date,
                            end_date: f.end_date
                        })
                    }
                    b = d
                } else b = void 0;
                var g = b;
                g && a.wa("google_conversion_items", g)
            }
        },
        gp = function(a) {
            var b;
            var c = {};
            a.isGtmEvent ? !a.g && a.eventName && (c.event = a.eventName) : c.event = a.eventName;
            var d = a.s.eventModel;
            if (d) {
                oc(d, c);
                for (var e in c) c.hasOwnProperty(e) && S.ag[e.split(".")[0]] && delete c[e];
                b = c
            } else b = null;
            var f = b;
            f && a.wa("google_custom_params",
                f)
        },
        hp = function(a) {
            pn() && (a.wa("opt_image_generator", function() {
                return new Image
            }), a.wa("google_enable_display_cookie_match", !1))
        },
        ip = function(a) {
            var b, c = !1;
            c = !0 === z._gtmpcm ? !0 : Jk("14.1.1");
            (b = c) && a.uc("apcm");
            if (!a.isGtmEvent) {
                var d = Nk();
                0 === d ? a.sc("dg", "c") : 1 === d && a.sc("dg", "e")
            }
        },
        jp = function(a, b) {
            var c = mn(a, "/pagead/conversion_async.js");
            if (c) return c;
            var d = rn("https://", "http://", "www.googleadservices.com"),
                e = !b.isGtmEvent && 1 === Nk();
            if (Ok() || e) d = "https://www.google.com";
            return d + "/pagead/conversion_async.js"
        },
        kp = !1,
        lp = !1;
    var mp = !1;
    var np = !1;
    var dp = !1;
    var op = [],
        pp = function(a) {
            var b = z.google_trackConversion,
                c = a.o.gtm_onFailure;
            "function" == typeof b ? b(a.o) || c() : c()
        },
        qp = function() {
            for (; 0 < op.length;) pp(op.shift())
        },
        rp = function(a, b) {
            var c = kp;
            lp && (c = b.getContainerTypeLoaded("AW"));
            if (!c) {
                kp = !0;
                Pm();
                var d = function() {
                    lp && b.setContainerTypeLoaded("AW", !0);
                    qp();
                    op = {
                        push: pp
                    }
                };
                pn() ? d() : Mb(a, d, function() {
                    qp();
                    kp = !1;
                    lp && b.setContainerTypeLoaded("AW", !1)
                })
            }
        },
        sp = function(a, b, c) {
            var d = Co(a);
            !d && c.isGtmEvent && (d = this.gk(a));
            this.X = a;
            this.I = d.P[0] || "";
            this.R = d.containerId === d.id;
            this.C = d.P[1];
            this.g = void 0 !== this.C;
            this.eventName = b;
            this.isGtmEvent =
                c.isGtmEvent;
            this.s = c;
            this.o = {
                google_conversion_id: this.I,
                google_conversion_label: this.C,
                google_conversion_format: "3",
                google_conversion_color: "ffffff",
                google_conversion_domain: "",
                google_gtm: Mn()
            }
        };
    l = sp.prototype;
    l.gk = function(a) {
        var b = a.indexOf("/"),
            c = 3 <= b,
            d = a.substring(3, c ? b : a.length);
        return {
            id: a,
            prefix: "AW",
            containerId: "AW-" + d,
            P: [d, c ? a.substring(b + 1) : void 0]
        }
    };
    l.wa = function(a, b) {
        this.o[a] = b
    };
    l.rk = function() {
        delete this.o.google_transport_url
    };
    l.bd = function(a) {
        for (var b in a) a.hasOwnProperty(b) &&
            (this.o[b] = a[b])
    };
    l.Z = function(a, b) {
        void 0 != b && "" !== b && (this.o.google_additional_conversion_params = this.o.google_additional_conversion_params || {}, this.o.google_additional_conversion_params[a] = b)
    };
    l.sc = function(a, b) {
        void 0 != b && "" !== b && (this.o.google_additional_params = this.o.google_additional_params || {}, this.o.google_additional_params[a] = b)
    };
    l.uc = function(a) {
        this.o.google_gtm_experiments = this.o.google_gtm_experiments || {};
        this.o.google_gtm_experiments[a] = !0
    };
    l.N = function(a) {
        return this.s.getWithConfig(a)
    };
    l.getRemoteConfig = function(a) {
        return this.s.remoteConfig[a]
    };
    var vp = function(a, b, c, d) {
        function e(F, R) {
            function J() {
                op.push(F);
                lp && d.getContainerTypeLoaded("AW") && qp()
            }
            var Q = [];
            if (R) {
                F.g && k && (nj(A), F.Z("auid", ij[kj(n)]));
                var L = (g(S.Te) || {})[F.C];
                ep(F, Kk(L));
                var Z = !0 === g(S.Gd) || L;
                if (F.g && Z && (!np || !Ik())) {
                    var ba = Lk(L);
                    ba && Q.push(ba.then(function(U) {
                        F.Z("em", U.te);
                        F.Z("ec_mode", U.nh)
                    }))
                }
            }
            if (Q.length) try {
                Promise.all(Q).then(function() {
                    J()
                });
                return
            } catch (U) {}
            J()
        }
        var f = new sp(a, b, d),
            g = function(F) {
                return d.getWithConfig(F)
            },
            h = void 0 != g(S.ka) &&
            !1 !== g(S.ka),
            k = !1 !== g(S.Da),
            n = g(S.Ta) || g(S.Ma),
            p = g(S.sa),
            q = g(S.Ea),
            r = g(S.Ua),
            u = {};
        if (!mp) {
            var t = d.getMergedValues(S.aa);
            u.mh = bb(nc(t) ? t : {})
        }
        var v = d.getMergedValues(S.aa, 1),
            x = d.getMergedValues(S.aa, 2);
        u.oe = bb(nc(v) ? v : {}, ".");
        u.ke = bb(nc(x) ? x : {}, ".");
        var y = g(S.ba),
            w = jp(y, f);
        rp(w, d);
        var A = {
                prefix: n,
                domain: p,
                Sb: q,
                flags: r
            },
            B = b == S.La;
        var D = !1 === g(S.Eb) || !1 === g(S.Fa);
        if (!B || !f.g && !D)
            if (!0 === g(S.Ke) && (f.g = !1), !1 !== g(S.da) || f.g) {
                f.bd({
                    google_remarketing_only: !f.g,
                    google_conversion_language: f.N(S.tb),
                    google_conversion_value: f.N(S.oa),
                    google_conversion_currency: f.N(S.ma),
                    google_conversion_order_id: f.N(S.ub),
                    google_user_id: f.N(S.Na),
                    google_conversion_page_url: f.N(S.ib),
                    google_conversion_referrer_url: f.N(S.Va)
                });
                f.bd({
                    onload_callback: f.s.onSuccess,
                    gtm_onFailure: f.s.onFailure
                });
                ip(f);
                f.g && f.wa("google_transport_url", ln(f.N(S.ba), "/"));
                f.wa("google_restricted_data_processing", f.N(S.Xc));
                hp(f);
                !1 === f.N(S.da) && f.wa("google_allow_ad_personalization_signals", !1);
                k ? f.bd({
                    google_gcl_cookie_prefix: A.prefix,
                    google_gcl_cookie_domain: A.domain,
                    google_gcl_cookie_max_age_seconds: A.Sb,
                    google_gcl_cookie_flags: A.flags
                }) : f.wa("google_read_gcl_cookie_opt_out", !0);
                gp(f);
                fp(f);
                "1" === Nj(!1)._up && f.Z("gtm_up", "1");
                f.g && (f.Z("vdnc", f.N(S.Ye)), f.Z("vdltv", f.N(S.Pe)));
                cp(f);
                f.g && (f.Z("delopc", f.N(S.Qd)), f.Z("oedeld", f.N(S.Ue)), f.Z("delc", f.N(S.Hd)), f.Z("shf", f.N(S.Se)), f.Z("iedeld", Pk(f.N(S.fa))));
                mp || f.Z("did", u.mh), f.Z("gdid", u.oe), f.Z("edid", u.ke);
                bp(f, h);
                ap(f, A);
                $o(f, B, h, u, A);
                zg() ? Qg(function() {
                    cp(f);
                    var F = Mg(S.H);
                    if (f.g) {
                        var R = !1;
                        R = !0;
                        F || y || !h && !R || f.wa("google_transport_url", "https://pagead2.googlesyndication.com/");
                        e(f, F)
                    } else if (F) {
                        e(f, F);
                        return
                    }
                    F || Pg(function() {
                        var J = new sp(a, f.eventName, d);
                        J.g = f.g;
                        J.bd(oc(f.o));
                        bp(J, h);
                        !y && J.o.google_transport_url && J.rk();
                        cp(J, !0);
                        e(J, !0)
                    }, S.H)
                }, [S.H]) : e(f, !0)
            }
    };
    var xp = function() {
            return !1
        },
        zp = function(a, b) {
            var c;
            if (2 === b.Xa) return a("ord", Ha(1E11, 1E13)), !0;
            if (3 ===
                b.Xa) return a("ord", "1"), a("num", Ha(1E11, 1E13)), !0;
            if (4 === b.Xa) return yp(b.sessionId) && a("ord", b.sessionId), !0;
            if (5 === b.Xa) c = "1";
            else if (6 === b.Xa) c = b.mk;
            else return !1;
            yp(c) && a("qty", c);
            yp(b.ih) && a("cost", b.ih);
            yp(b.transactionId) && a("ord", b.transactionId);
            return !0
        },
        Bp = function(a, b) {
            function c(O, P, L) {
                t.hasOwnProperty(O) || (P = String(P), u.push(";" + O + "=" + (L ? P : encodeURIComponent(P))))
            }

            function d(O, P) {
                P && c(O, P)
            }

            function e() {
                if (yp(a.Bh)) {
                    var O = a.Bh || "";
                    p || k || !a.Za || (O = mi(O));
                    c("~oref", O)
                }
                var P = h + u.join("") +
                    "?";
                g ? Ob(P, a.onSuccess) : Pb(P, a.onSuccess, a.onFailure);
                F && Pb("https://" + f + ".fls.doubleclick.net/activityi;register_conversion=1" + u.join("") + "?");
            }
            var f = a.qh,
                g = a.xk,
                h = a.protocol,
                k = a.Hj,
                n = [],
                p = Mg(S.H);
            h += g ? "//" + f + ".fls.doubleclick.net/activityi" : "//ad.doubleclick.net/activity";
            var q = ";",
                r = !1;
            r = !0;
            Mg(S.H) || k || !a.Za && !r || (h = "https://ade.googlesyndication.com/ddm/activity", q = "/", g = !1);
            var u = [q, "src=" + encodeURIComponent(f), ";type=" + encodeURIComponent(a.th), ";cat=" + encodeURIComponent(a.be)],
                t = a.qj || {};
            La(t, function(O, P) {
                u.push(";" +
                    encodeURIComponent(O) + "=" + encodeURIComponent(P + ""))
            });
            if (zp(c, a)) {
                yp(a.Rh) && c("u", a.Rh);
                yp(a.Qh) && c("tran", a.Qh);
                c("gtm", Mn());
                zg() && !k && (c("gcs", Ng()), b && c("gcu", "1"));
                d("gdpr_consent", ko());
                d("gdpr", lo());
                "1" === Nj(!1)._up && c("gtm_up", "1");
                !1 === a.dh && c("npa", "1");
                if (a.he) {
                    var v = void 0 === a.Za ? !0 : !!a.Za,
                        x = Ek(a.Ob, v),
                        y = !1;
                    x && x.length && (c("gcldc", x.join(".")), y = !0);
                    if (g) {
                        var w = "_gcl" !== ik(a.Ob);
                        if (y || !Ik(a.Ob)) {
                            var A = Dk(a.Ob, v);
                            A && A.length && (c("gclaw", A.join(".")), kg(59));
                            var B = Fk(v);
                            B && (w ? (kg(60), Ap ||
                                c("gac", B)) : c("gac", B))
                        } else {
                            var E = zk("gb", a.Ob, v);
                            E.length && c("gclgb", E.join("."));
                            if (!w || !Ap) {
                                var C = Gk(v);
                                C && c("gacgb", C)
                            }
                        }
                    }
                    nj({
                        prefix: a.Ob,
                        Sb: a.nj,
                        domain: a.mj,
                        flags: a.Xk
                    });
                    var D = ij[kj(a.Ob)];
                    D && c("auiddc", D)
                }
                yp(a.Gh) && c("prd", a.Gh, !0);
                La(a.Kk, function(O, P) {
                    c(O, P)
                });
                u.push("");
                yp(a.wc) && c("gdid", a.wc);
                yp(a.vc) && c("edid", a.vc);
                var F = xp();
                F && u.push(";ps=1");
                var R = !1;
                if (R && a.ab) {
                    var J = nh(a.ab);
                    J && (J = J.then(function(O) {
                        yp(O.te) && c("em", O.te, !0)
                    }), n.push(J))
                }
                if (n.length) try {
                    Promise.all(n).then(function() {
                        e()
                    });
                    return
                } catch (O) {}
                e()
            } else K(a.onFailure)
        },
        Cp = function(a, b, c, d) {
            function e() {
                var f = {
                    config: a,
                    gtm: Mn()
                };
                c && (nj(d), f.auiddc = ij[kj(d.prefix)]);
                b && (f.loadInsecure = b);
                void 0 === z.__dc_ns_processor && (z.__dc_ns_processor = []);
                z.__dc_ns_processor.push(f);
                Mb((b ? "http" : "https") + "://www.googletagmanager.com/dclk/ns/v1.js")
            }
            Mg(S.H) ? e() : Eg(e, S.H)
        },
        yp = function(a) {
            return !(void 0 === a || 0 === (a + "").length)
        },
        Dp = function(a) {
            var b = /^u([1-9]\d?|100)$/,
                c = a.getWithConfig(S.Qc) || {},
                d = a.getTopLevelKeys(),
                e = {},
                f = {};
            if (nc(c))
                for (var g in c)
                    if (c.hasOwnProperty(g) && b.test(g)) {
                        var h = c[g];
                        m(h) && (e[g] = h)
                    }
            for (var k = 0; k < d.length; k++) {
                var n =
                    d[k];
                b.test(n) && (e[n] = n)
            }
            for (var p in e) e.hasOwnProperty(p) && (f[p] = a.getWithConfig(e[p]));
            return f
        },
        Ep = function(a, b) {
            function c(k, n, p) {
                yp(p) && d.push(k + n + ":" + encodeURIComponent(p + ""))
            }
            var d = [],
                e = a(S.fa) || [];
            if (Ea(e))
                for (var f = 0; f < e.length; f++) {
                    var g = e[f],
                        h = f + 1;
                    c("i", h, g.id);
                    c("p", h, g.price);
                    c("q", h, g.quantity);
                    c("c", h, b ? g[S.Hd] : a(S.Hd));
                    c("l", h, b ? g[S.tb] : a(S.tb));
                    b && c("a", h, g.accountId)
                }
            return d.join("|")
        },
        Fp = function(a) {
            var b = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a);
            if (b) {
                var c = {
                    standard: 2,
                    unique: 3,
                    per_session: 4,
                    transactions: 5,
                    items_sold: 6,
                    "": 1
                }[(b[5] || "").toLowerCase()];
                if (c) return {
                    containerId: "DC-" + b[1],
                    X: b[3] ? a : "",
                    aj: b[1],
                    $i: b[3] || "",
                    be: b[4] || "",
                    Xa: c
                }
            }
        },
        Hp = function(a, b, c, d) {
            var e = Fp(a);
            if (e) {
                var f = function(P) {
                        return d.getWithConfig(P)
                    },
                    g = !1 !== f(S.Da),
                    h = f(S.Ta) || f(S.Ma),
                    k = f(S.sa),
                    n = f(S.Ea),
                    p = f(S.Ua),
                    q = {
                        prefix: h,
                        domain: k,
                        Sb: n,
                        flags: p
                    },
                    r = f(S.xi),
                    u = void 0 != f(S.ka) && !1 !== f(S.ka) && (!d.isGtmEvent || !Mg(S.H)),
                    t = 3 === qn();
                var B = {},
                    E = f(S.wi);
                if (nc(E))
                    for (var C in E)
                        if (E.hasOwnProperty(C)) {
                            var D = E[C];
                            null != D && (B[C] = D)
                        }
                var F = "";
                if (5 === e.Xa || 6 === e.Xa) F = Ep(f, d.isGtmEvent);
                var R = Dp(d),
                    J = !0 === f(S.Je);
                if (pn() && J) {
                    J = !1
                }
                var Q = d.isGtmEvent ? "" : t ? "http:" : "https:",
                    O = {
                        be: e.be,
                        he: g,
                        mj: k,
                        nj: n,
                        Ob: h,
                        ih: f(S.oa),
                        Xa: e.Xa,
                        qj: B,
                        vc: bb(d.getMergedValues(S.aa,
                            2), "."),
                        qh: e.aj,
                        wc: bb(d.getMergedValues(S.aa, 1), "."),
                        th: e.$i,
                        onFailure: d.onFailure,
                        onSuccess: d.onSuccess,
                        Bh: d.isGtmEvent ? f("oref") : ki(li(z.location.href)),
                        Gh: F,
                        protocol: Q,
                        mk: f(S.zg),
                        xk: J,
                        sessionId: f(S.Hb),
                        Qh: d.isGtmEvent ? f("tran") : void 0,
                        transactionId: f(S.ub),
                        Rh: d.isGtmEvent ? f("u") : void 0,
                        ab: d.isGtmEvent ? f(S.Ga) : void 0,
                        Kk: R,
                        dh: !1 !== f(S.da),
                        eventId: d.eventId,
                        priorityId: d.priorityId,
                        Za: u
                    };
                Gp(O)
            } else K(d.onFailure)
        },
        Ap = !1;
    var wp = !1,
        Gp = function(a) {
            !zg() || a.Hj ? Bp(a) : Qg(function() {
                Bp(a);
                Mg(S.H) || Pg(function() {
                    Bp(a, !0)
                }, S.H)
            }, [S.H])
        };
    var Ip = function(a, b, c) {
            this.xa = a;
            this.eventName = b;
            this.D = c;
            this.F = {};
            this.metadata = {};
            this.Ia = !1
        },
        Jp = function(a, b, c) {
            var d = a.D.getWithConfig(b);
            void 0 !== d ? a.F[b] = d : void 0 !== c && (a.F[b] = c)
        },
        Kp = function(a, b, c) {
            var d = Wh(a.xa);
            return d && d.hasOwnProperty(b) ? d[b] : c
        };

    function Lp(a) {
        return {
            getDestinationId: function() {
                return a.xa
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                return void(a.eventName = b)
            },
            getHitData: function(b) {
                return a.F[b]
            },
            setHitData: function(b, c) {
                return void(a.F[b] = c)
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.F[b] && (a.F[b] = c)
            },
            copyToHitData: function(b, c) {
                Jp(a, b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                return void(a.metadata[b] = c)
            },
            abort: function() {
                return void(a.Ia = !0)
            },
            getProcessedEvent: function() {
                return a
            }
        }
    };
    var bq = function() {
            var a = !0;
            mo(7) && mo(9) && mo(10) || (a = !1);
            return a
        },
        cq = function() {
            var a = !0;
            mo(3) && mo(4) || (a = !1);
            return a
        };
    var gq = function(a, b) {},
        hq = function(a, b) {
            var c = a[S.Vc],
                d = b + ".",
                e = a[S.U] || "",
                f = void 0 === c ? !!a.use_anchor : "fragment" ===
                c,
                g = !!a[S.ic];
            e = String(e).replace(/\s+/g, "").split(",");
            var h = Um();
            h(d + "require", "linker");
            h(d + "linker:autoLink", e, f, g)
        },
        lq = function(a, b, c) {
            if (zg() && (!c.isGtmEvent || !iq[a])) {
                var d = !Mg(S.T),
                    e = function(f) {
                        var g, h, k = Um(),
                            n = jq(b, "", c),
                            p, q = n.createOnlyFields._useUp;
                        if (c.isGtmEvent || kq(b, n.createOnlyFields)) {
                            c.isGtmEvent && (g = "gtm" + Hh(), h = n.createOnlyFields, n.gtmTrackerName && (h.name = g));
                            k(function() {
                                var u = k.getByName(b);
                                u && (p = u.get("clientId"));
                                c.isGtmEvent || k.remove(b)
                            });
                            k("create", a, c.isGtmEvent ? h : n.createOnlyFields);
                            d && Mg(S.T) && (d = !1, k(function() {
                                var u = Um().getByName(c.isGtmEvent ? g : b);
                                !u || u.get("clientId") == p && q || (c.isGtmEvent ? (n.fieldsToSet["&gcu"] = "1", n.fieldsToSet["&gcut"] = S.De[f]) : (n.fieldsToSend["&gcu"] = "1", n.fieldsToSend["&gcut"] = S.De[f]), u.set(n.fieldsToSet), c.isGtmEvent ? u.send("pageview") : u.send("pageview", n.fieldsToSend))
                            }));
                            c.isGtmEvent && k(function() {
                                k.remove(g)
                            })
                        }
                    };
                Pg(function() {
                    return e(S.T)
                }, S.T);
                Pg(function() {
                    return e(S.H)
                }, S.H);
                c.isGtmEvent && (iq[a] = !0)
            }
        },
        mq = function(a, b) {
            on() && b && (a[S.Fb] = b)
        },
        vq = function(a, b, c) {
            function d() {
                var J = c.getWithConfig(S.Qc);
                h(function() {
                    if (!c.isGtmEvent && nc(J)) {
                        var Q = t.fieldsToSend,
                            O = k().getByName(n),
                            P;
                        for (P in J)
                            if (J.hasOwnProperty(P) && /^(dimension|metric)\d+$/.test(P) && void 0 != J[P]) {
                                var L = O.get(fq(J[P]));
                                nq(Q, P, L)
                            }
                    }
                })
            }

            function e() {
                if (t.displayfeatures) {
                    var J = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g,
                        "");
                    p("require", "displayfeatures", void 0, {
                        cookieName: J
                    })
                }
            }
            var f = a,
                g = "https://www.google-analytics.com/analytics.js",
                h = c.isGtmEvent ? Wm(c.getWithConfig("gaFunctionName")) : Wm();
            if (Ca(h)) {
                var k = Um,
                    n;
                c.isGtmEvent ? n = c.getWithConfig("name") || c.getWithConfig("gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
                var p = function(J) {
                        var Q = [].slice.call(arguments, 0);
                        Q[0] = n ? n + "." + Q[0] : "" + Q[0];
                        h.apply(window, Q)
                    },
                    q = function(J) {
                        var Q = function(U, qa) {
                                for (var Fa = 0; qa && Fa < qa.length; Fa++) p(U, qa[Fa])
                            },
                            O = c.isGtmEvent,
                            P = O ? oq(t) :
                            pq(b, c);
                        if (P) {
                            var L = {};
                            mq(L, J);
                            p("require", "ec", "ec.js", L);
                            O && P.yf && p("set", "&cu", P.yf);
                            var Z = P.action;
                            if (O || "impressions" === Z)
                                if (Q("ec:addImpression", P.wh), !O) return;
                            if ("promo_click" === Z || "promo_view" === Z || O && P.sd) {
                                var ba = P.sd;
                                Q("ec:addPromo", ba);
                                if (ba && 0 < ba.length && "promo_click" === Z) {
                                    O ? p("ec:setAction", Z, P.wb) : p("ec:setAction", Z);
                                    return
                                }
                                if (!O) return
                            }
                            "promo_view" !== Z && "impressions" !== Z && (Q("ec:addProduct", P.Tb), p("ec:setAction", Z, P.wb))
                        }
                    },
                    r = function(J) {
                        if (J) {
                            var Q = {};
                            if (nc(J))
                                for (var O in qq) qq.hasOwnProperty(O) &&
                                    rq(qq[O], O, J[O], Q);
                            mq(Q, y);
                            p("require", "linkid", Q)
                        }
                    },
                    u = function() {
                        if (pn()) {} else {
                            var J = c.getWithConfig(S.Ci);
                            J && (p("require", J, {
                                dataLayer: oh.ca
                            }), p("require", "render"))
                        }
                    },
                    t = jq(n, b, c),
                    v = function(J, Q, O) {
                        O && (Q = "" + Q);
                        t.fieldsToSend[J] = Q
                    };
                !c.isGtmEvent && kq(n, t.createOnlyFields) && (h(function() {
                    k() && k().remove(n)
                }), sq[n] = !1);
                h("create", f, t.createOnlyFields);
                if (t.createOnlyFields[S.Fb] && !c.isGtmEvent) {
                    var x = mn(t.createOnlyFields[S.Fb],
                        "/analytics.js");
                    x && (g = x)
                }
                var y = c.isGtmEvent ? t.fieldsToSet[S.Fb] : t.createOnlyFields[S.Fb];
                if (y) {
                    var w = c.isGtmEvent ? t.fieldsToSet[S.Ld] : t.createOnlyFields[S.Ld];
                    w && !sq[n] && (sq[n] = !0, h($m(n, w)))
                }
                c.isGtmEvent ? t.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(), r(t.linkAttribution));
                var A = t[S.va];
                A && A[S.U] && hq(A, n);
                p("set", t.fieldsToSet);
                if (c.isGtmEvent) {
                    if (t.enableLinkId) {
                        var B = {};
                        mq(B, y);
                        p("require", "linkid", "linkid.js", B)
                    }
                    zg() && lq(f, n, c)
                }
                if (b === S.Ic)
                    if (c.isGtmEvent) {
                        e();
                        if (t.remarketingLists) {
                            var E =
                                "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                            p("require", "adfeatures", {
                                cookieName: E
                            })
                        }
                        q(y);
                        p("send", "pageview");
                        t.createOnlyFields._useUp && Xm(n + ".")
                    } else u(), p("send", "pageview", t.fieldsToSend);
                else b === S.La ? (u(), Po(f, c), c.getWithConfig(S.vb) && (uk(["aw", "dc"]), Xm(n + ".")), 0 != t.sendPageView && p("send", "pageview", t.fieldsToSend), lq(f, n, c), !c.isGtmEvent && 0 < c.getEventModelKeys().length && (kg(68), 1 < T.configCount && kg(69))) : b === S.Sa ? gq(n, c) : "screen_view" === b ? p("send", "screenview", t.fieldsToSend) : "timing_complete" ===
                    b ? (t.fieldsToSend.hitType = "timing", v("timingCategory", t.eventCategory, !0), c.isGtmEvent ? v("timingVar", t.timingVar, !0) : v("timingVar", t.name, !0), v("timingValue", Na(t.value)), void 0 !== t.eventLabel && v("timingLabel", t.eventLabel, !0), p("send", t.fieldsToSend)) : "exception" === b ? p("send", "exception", t.fieldsToSend) : "" === b && c.isGtmEvent || ("track_social" === b && c.isGtmEvent ? (t.fieldsToSend.hitType = "social", v("socialNetwork", t.socialNetwork, !0), v("socialAction", t.socialAction, !0), v("socialTarget", t.socialTarget, !0)) : ((c.isGtmEvent || tq[b]) && q(y), c.isGtmEvent && e(), t.fieldsToSend.hitType = "event", v("eventCategory", t.eventCategory, !0), v("eventAction", t.eventAction || b, !0), void 0 !== t.eventLabel && v("eventLabel", t.eventLabel, !0), void 0 !== t.value && v("eventValue", Na(t.value))), p("send", t.fieldsToSend));
                var C = !1;
                var D = uq;
                C && (D = c.getContainerTypeLoaded("UA"));
                if (!D &&
                    !c.isGtmEvent) {
                    uq = !0;
                    C && c.setContainerTypeLoaded("UA", !0);
                    Pm();
                    var F = function() {
                            C && c.setContainerTypeLoaded("UA", !1);
                            c.onFailure()
                        },
                        R = function() {
                            k().loaded || F()
                        };
                    pn() ? K(R) : Mb(g, R, F)
                }
            } else K(c.onFailure)
        },
        wq = function(a, b, c, d) {
            Qg(function() {
                vq(a, b, d)
            }, [S.T, S.H])
        },
        yq = function(a, b) {
            function c(f) {
                function g(p, q) {
                    for (var r = 0; r < q.length; r++) {
                        var u = q[r];
                        if (f[u]) {
                            k[p] = f[u];
                            break
                        }
                    }
                }

                function h() {
                    if (f.category) k.category = f.category;
                    else {
                        for (var p = "", q = 0; q < xq.length; q++) void 0 !== f[xq[q]] && (p && (p += "/"), p += f[xq[q]]);
                        p && (k.category = p)
                    }
                }
                var k = oc(f),
                    n = !1;
                if (n || b) g("id", ["id", "item_id", "promotion_id"]), g("name", ["name", "item_name", "promotion_name"]), g("brand", ["brand", "item_brand"]), g("variant", ["variant", "item_variant"]), g("list", ["list_name", "item_list_name"]), g("position", ["list_position", "creative_slot", "index"]), h();
                g("listPosition", ["list_position"]);
                g("creative", ["creative_name"]);
                g("list", ["list_name"]);
                g("position", ["list_position", "creative_slot"]);
                return k
            }
            b = void 0 === b ? !1 : b;
            for (var d = [], e = 0; a && e < a.length; e++) a[e] && nc(a[e]) && d.push(c(a[e]));
            return d.length ? d : void 0
        },
        zq = function(a) {
            return Mg(a)
        },
        Aq = !1;
    var uq, sq = {},
        iq = {},
        Bq = {},
        dq = Object.freeze((Bq.client_storage = "storage", Bq.sample_rate = 1, Bq.site_speed_sample_rate = 1, Bq.store_gac = 1, Bq.use_amp_client_id = 1, Bq[S.ra] = 1, Bq[S.Da] =
            "storeGac", Bq[S.sa] = 1, Bq[S.Ea] = 1, Bq[S.Ua] = 1, Bq[S.bc] = 1, Bq[S.pb] = 1, Bq[S.cc] = 1, Bq)),
        Cq = {},
        Dq = Object.freeze((Cq._cs = 1, Cq._useUp = 1, Cq.allowAnchor = 1, Cq.allowLinker = 1, Cq.alwaysSendReferrer = 1, Cq.clientId = 1, Cq.cookieDomain = 1, Cq.cookieExpires = 1, Cq.cookieFlags = 1, Cq.cookieName = 1, Cq.cookiePath = 1, Cq.cookieUpdate = 1, Cq.legacyCookieDomain = 1, Cq.legacyHistoryImport = 1, Cq.name = 1, Cq.sampleRate = 1, Cq.siteSpeedSampleRate = 1, Cq.storage = 1, Cq.storeGac = 1, Cq.useAmpClientId = 1, Cq._cd2l = 1, Cq)),
        Eq = Object.freeze({
            anonymize_ip: 1
        }),
        Fq = {},
        eq = Object.freeze((Fq.campaign = {
            content: "campaignContent",
            id: "campaignId",
            medium: "campaignMedium",
            name: "campaignName",
            source: "campaignSource",
            term: "campaignKeyword"
        }, Fq.app_id = 1, Fq.app_installer_id = 1, Fq.app_name = 1, Fq.app_version = 1, Fq.description = "exDescription", Fq.fatal = "exFatal", Fq.language = 1, Fq.page_hostname = "hostname", Fq.transport_type = "transport", Fq[S.ma] = "currencyCode", Fq[S.sg] = 1, Fq[S.ib] = "location", Fq[S.Ze] = "page", Fq[S.Va] = "referrer", Fq[S.Wc] = "title", Fq[S.Bg] = 1, Fq[S.Na] = 1, Fq)),
        Gq = {},
        Hq =
        Object.freeze((Gq.content_id = 1, Gq.event_action = 1, Gq.event_category = 1, Gq.event_label = 1, Gq.link_attribution = 1, Gq.name = 1, Gq[S.va] = 1, Gq[S.rg] = 1, Gq[S.Fa] = 1, Gq[S.oa] = 1, Gq)),
        Iq = Object.freeze({
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1
        }),
        xq = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4",
            "item_category5"
        ]),
        Jq = {},
        qq = Object.freeze((Jq.levels = 1, Jq[S.Ea] = "duration", Jq[S.bc] = 1, Jq)),
        Kq = {},
        Lq = Object.freeze((Kq.anonymize_ip = 1, Kq.fatal = 1, Kq.send_page_view = 1, Kq.store_gac = 1, Kq.use_amp_client_id = 1, Kq[S.Da] = 1, Kq[S.sg] = 1, Kq)),
        rq = function(a, b, c, d) {
            if (void 0 !== c)
                if (Lq[b] && (c = Oa(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[fq(b)] = c;
                else if (m(a)) d[a] = c;
            else
                for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        },
        fq = function(a) {
            return a && m(a) ? a.replace(/(_[a-z])/g, function(b) {
                    return b[1].toUpperCase()
                }) :
                a
        },
        Mq = {},
        tq = Object.freeze((Mq.checkout_progress = 1, Mq.select_content = 1, Mq.set_checkout_option = 1, Mq[S.Yb] = 1, Mq[S.Zb] = 1, Mq[S.Cb] = 1, Mq[S.Db] = 1, Mq[S.$b] = 1, Mq[S.Aa] = 1, Mq[S.ac] = 1, Mq[S.Ba] = 1, Mq)),
        Nq = {},
        Oq = Object.freeze((Nq.checkout_progress = 1, Nq.set_checkout_option = 1, Nq[S.hg] = 1, Nq[S.Yb] = 1, Nq[S.Zb] = 1, Nq[S.Cb] = 1, Nq[S.Aa] = 1, Nq[S.ac] = 1, Nq[S.ig] = 1, Nq)),
        Pq = {},
        Qq = Object.freeze((Pq.generate_lead = 1, Pq.login = 1, Pq.search = 1, Pq.select_content = 1, Pq.share = 1, Pq.sign_up = 1, Pq.view_search_results = 1, Pq[S.Db] = 1, Pq[S.$b] = 1, Pq[S.Ba] =
            1, Pq)),
        Rq = function(a) {
            var b = "general";
            Oq[a] ? b = "ecommerce" : Qq[a] ? b = "engagement" : "exception" === a && (b = "error");
            return b
        },
        Sq = {},
        Tq = Object.freeze((Sq.view_search_results = 1, Sq[S.Db] = 1, Sq[S.$b] = 1, Sq[S.Ba] = 1, Sq)),
        nq = function(a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c)
        },
        Uq = function(a) {
            if (Ea(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e = d.id,
                            f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        },
        jq = function(a, b, c) {
            var d = function(R) {
                    return c.getWithConfig(R)
                },
                e = {},
                f = {},
                g = {},
                h = {},
                k = Uq(d(S.Bi));
            !c.isGtmEvent && k && nq(f, "exp", k);
            g["&gtm"] = Mn(!0);
            zg() && (h._cs = zq);
            var n = d(S.Qc);
            if (!c.isGtmEvent && nc(n))
                for (var p in n)
                    if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
                        var q = d(String(n[p]));
                        void 0 !== q && nq(f, p, q)
                    }
            for (var r = c.getTopLevelKeys(), u = 0; u < r.length; ++u) {
                var t = r[u];
                if (c.isGtmEvent) {
                    var v = d(t);
                    Iq.hasOwnProperty(t) ? e[t] = v : Dq.hasOwnProperty(t) ? h[t] = v : g[t] = v
                } else {
                    var x = void 0;
                    x = t !== S.aa ? d(t) : c.getMergedValues(t);
                    if (Hq.hasOwnProperty(t)) rq(Hq[t],
                        t, x, e);
                    else if (Eq.hasOwnProperty(t)) rq(Eq[t], t, x, g);
                    else if (eq.hasOwnProperty(t)) rq(eq[t], t, x, f);
                    else if (dq.hasOwnProperty(t)) rq(dq[t], t, x, h);
                    else if (/^(dimension|metric|content_group)\d+$/.test(t)) rq(1, t, x, f);
                    else if (t === S.aa) {
                        if (!Aq) {
                            var y = bb(x);
                            y && (f["&did"] = y)
                        }
                        var w = void 0,
                            A = void 0;
                        b === S.La ? w = bb(c.getMergedValues(t), ".") : (w = bb(c.getMergedValues(t, 1), "."), A = bb(c.getMergedValues(t, 2), "."));
                        w && (f["&gdid"] = w);
                        A && (f["&edid"] = A)
                    } else t === S.Ma && 0 > r.indexOf(S.bc) && (h.cookieName = x + "_ga")
                }
            }!1 !== d(S.oi) &&
                !1 !== d(S.Jc) && bq() || (g.allowAdFeatures = !1);
            !1 !== d(S.da) && cq() || (g.allowAdPersonalizationSignals = !1);
            !c.isGtmEvent && d(S.vb) && (h._useUp = !0);
            if (c.isGtmEvent) {
                h.name = h.name || e.gtmTrackerName;
                var B = g.hitCallback;
                g.hitCallback = function() {
                    Ca(B) && B();
                    c.onSuccess()
                }
            } else {
                nq(h, "cookieDomain", "auto");
                nq(g, "forceSSL", !0);
                nq(e, "eventCategory", Rq(b));
                Tq[b] && nq(f, "nonInteraction", !0);
                "login" === b || "sign_up" === b || "share" === b ? nq(e, "eventLabel", d(S.rg)) : "search" === b || "view_search_results" === b ? nq(e, "eventLabel", d(S.Ii)) :
                    "select_content" === b && nq(e, "eventLabel", d(S.vi));
                var E = e[S.va] || {},
                    C = E[S.hc];
                C || 0 != C && E[S.U] ? h.allowLinker = !0 : !1 === C && nq(h, "useAmpClientId", !1);
                f.hitCallback = c.onSuccess;
                h.name = a
            }
            zg() && (g["&gcs"] = Ng(), Mg(S.T) || (h.storage = "none"), Mg(S.H) || (g.allowAdFeatures = !1, h.storeGac = !1));
            var D = d(S.ba) || d(S.Fb),
                F = d(S.Ld);
            D && (c.isGtmEvent || (h[S.Fb] = D), h._cd2l = !0);
            F && !c.isGtmEvent && (h[S.Ld] = F);
            e.fieldsToSend = f;
            e.fieldsToSet = g;
            e.createOnlyFields = h;
            return e
        },
        oq = function(a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.yf = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.wh = "impressions" === b.translateIfKeyEquals ? yq(d, !0) : d
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.sd = "promoView" === b.translateIfKeyEquals ? yq(e, !0) : e
            }
            if (b.promoClick) {
                c.action = "promo_click";
                var f = b.promoClick.promotions;
                c.sd = "promoClick" === b.translateIfKeyEquals ? yq(f, !0) : f;
                c.wb = b.promoClick.actionField;
                return c
            }
            for (var g in b)
                if (b.hasOwnProperty(g) && "translateIfKeyEquals" !==
                    g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
                    c.action = g;
                    var h = b[g].products;
                    c.Tb = "products" === b.translateIfKeyEquals ? yq(h, !0) : h;
                    c.wb = b[g].actionField;
                    break
                }
            return Object.keys(c).length ? c : null
        },
        pq = function(a, b) {
            function c(u) {
                return {
                    id: d(S.ub),
                    affiliation: d(S.yi),
                    revenue: d(S.oa),
                    tax: d(S.mg),
                    shipping: d(S.Se),
                    coupon: d(S.zi),
                    list: d(S.Re) || u
                }
            }
            for (var d = function(u) {
                    return b.getWithConfig(u)
                }, e = d(S.fa), f, g = 0; e && g < e.length && !(f = e[g][S.Re]); g++);
            var h = d(S.Qc);
            if (nc(h))
                for (var k =
                        0; e && k < e.length; ++k) {
                    var n = e[k],
                        p;
                    for (p in h) h.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != h[p] && nq(n, p, n[h[p]])
                }
            var q = null,
                r = d(S.Ai);
            a === S.Aa || a === S.ac ? q = {
                    action: a,
                    wb: c(),
                    Tb: yq(e)
                } : a === S.Yb ? q = {
                    action: "add",
                    Tb: yq(e)
                } : a === S.Zb ? q = {
                    action: "remove",
                    Tb: yq(e)
                } : a === S.Ba ? q = {
                    action: "detail",
                    wb: c(f),
                    Tb: yq(e)
                } : a === S.Db ? q = {
                    action: "impressions",
                    wh: yq(e)
                } : "view_promotion" === a ? q = {
                    action: "promo_view",
                    sd: yq(r)
                } : "select_content" === a && r && 0 < r.length ? q = {
                    action: "promo_click",
                    sd: yq(r)
                } : "select_content" ===
                a ? q = {
                    action: "click",
                    wb: {
                        list: d(S.Re) || f
                    },
                    Tb: yq(e)
                } : a === S.Cb || "checkout_progress" === a ? q = {
                    action: "checkout",
                    Tb: yq(e),
                    wb: {
                        step: a === S.Cb ? 1 : d(S.lg),
                        option: d(S.kg)
                    }
                } : "set_checkout_option" === a && (q = {
                    action: "checkout_option",
                    wb: {
                        step: d(S.lg),
                        option: d(S.kg)
                    }
                });
            q && (q.yf = d(S.ma));
            return q
        },
        Vq = {},
        kq = function(a, b) {
            var c = Vq[a];
            Vq[a] = oc(b);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1
        };
    var Wq = null,
        Xq = !1;

    function Yq(a) {
        return Xq && !a ? Wq = Wq || new Zq : T.gcq = T.gcq || new Zq
    }
    var $q = function(a, b, c) {
            Yq().register(a, b, c)
        },
        ar = function(a, b, c, d) {
            Yq().push("event", [b, a], c, d)
        },
        br = function(a, b, c) {
            Yq().insert("event", [b, a], c)
        },
        cr = function(a, b) {
            Yq().push("config", [a], b)
        },
        dr = function(a, b, c, d) {
            Yq().push("get", [a, b], c, d)
        },
        er = function(a) {
            return Yq().getRemoteConfig(a)
        },
        fr = function() {
            var a = S.ba;
            return Yq().getGlobalConfigValue && Yq().getGlobalConfigValue(a)
        },
        gr = {},
        hr = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.remoteConfig = {};
            this.o = {};
            this.s = null;
            this.claimed =
                this.g = !1
        },
        ir = function(a, b, c, d, e) {
            this.type = a;
            this.s = b;
            this.X = c || "";
            this.g = d;
            this.o = e
        },
        Zq = function() {
            this.o = {};
            this.s = {};
            this.g = [];
            this.C = {
                AW: !1,
                UA: !1
            }
        },
        jr = function(a, b) {
            var c = Co(b);
            return a.o[c.containerId] = a.o[c.containerId] || new hr
        },
        kr = function(a, b, c, d) {
            if (b) {
                var e = Co(b);
                if (e && 1 === jr(a, b).status) {
                    jr(a, b).status = 2;
                    var f = {};
                    cm && (f.timeoutId = z.setTimeout(function() {
                        kg(38);
                        Fl()
                    }, 3E3));
                    a.push("require", [f], e.containerId);
                    gr[e.containerId] = Ta();
                    if (pn()) {} else 2 === d ? vn(e.containerId, c) : un(e.containerId, c, !0)
                }
            }
        },
        lr = function(a, b, c, d) {
            if (d.X) {
                var e = jr(a, d.X),
                    f = e.s;
                if (f) {
                    var g = oc(c),
                        h = oc(e.targetConfig[d.X]),
                        k = oc(e.containerConfig),
                        n = oc(e.remoteConfig),
                        p = oc(a.s),
                        q = {};
                    try {
                        q = oc(Kh)
                    } catch (x) {
                        kg(72)
                    }
                    var r = Nh("gtm.uniqueEventId"),
                        u = Co(d.X).prefix,
                        t = Va(function() {
                            var x = g[S.fc];
                            x && K(x)
                        }),
                        v = Fn(En(Gn(Dn(Bn(An(Cn(zn(yn(xn(g), h), k), n), p), q), function() {
                            pm(r, u, "2");
                            t()
                        }), function() {
                            pm(r, u, "3");
                            t()
                        }), function(x, y) {
                            a.C[x] = y
                        }), function(x) {
                            return a.C[x]
                        });
                    try {
                        pm(r, u, "1"), ym(d.type, d.X, v);
                        f(d.X, b, d.s, v)
                    } catch (x) {
                        pm(r, u, "4");
                    }
                }
            }
        };
    l = Zq.prototype;
    l.register = function(a, b, c) {
        var d = jr(this, a);
        if (3 !== d.status) {
            d.s = b;
            d.status = 3;
            c && (oc(d.remoteConfig, c), d.remoteConfig = c);
            var e = Co(a),
                f = gr[e.containerId];
            if (void 0 !== f) {
                var g = T[e.containerId].bootstrap,
                    h = e.prefix.toUpperCase();
                T[e.containerId]._spx && (h = h.toLowerCase());
                var k = Nh("gtm.uniqueEventId"),
                    n = h,
                    p = Ta() - g;
                if (cm && !Kl[k]) {
                    k !== Gl && (Bl(), Gl = k);
                    var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    Rl = Rl ? Rl + "," + q : "&cl=" + q
                }
                delete gr[e.containerId]
            }
            this.flush()
        }
    };
    l.notifyContainerLoaded = function(a, b) {
        var c = this,
            d = function(f) {
                if (Co(f)) {
                    var g = jr(c, f);
                    g.status = 3;
                    g.claimed = !0
                }
            };
        d(a);
        for (var e = 0; e < b.length; e++) d(b[e]);
        this.flush()
    };
    l.push = function(a, b, c, d) {
        if (void 0 !== c) {
            if (!Co(c)) return;
            kr(this, c, b[0][S.ba] || this.s[S.ba], "event" === a ? 2 : 1);
            jr(this, c).g && (d = !1)
        }
        this.g.push(new ir(a, Math.floor(Ta() / 1E3), c, b, d));
        d || this.flush()
    };
    l.insert = function(a, b, c) {
        var d = Math.floor(Ta() / 1E3);
        0 < this.g.length ? this.g.splice(1, 0, new ir(a, d, c, b, !1)) : this.g.push(new ir(a, d, c, b, !1))
    };
    l.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.g.length;) {
            var f = this.g[0];
            if (f.o) !f.X || jr(this, f.X).g ? (f.o = !1, this.g.push(f)) : c.push(f), this.g.shift();
            else {
                var g = void 0;
                switch (f.type) {
                    case "require":
                        g = jr(this, f.X);
                        if (3 !== g.status && !a) {
                            this.g.push.apply(this.g, c);
                            return
                        }
                        cm && z.clearTimeout(f.g[0].timeoutId);
                        break;
                    case "set":
                        La(f.g[0], function(r, u) {
                            oc($a(r, u), b.s)
                        });
                        break;
                    case "config":
                        g = jr(this, f.X);
                        if (g.claimed) break;
                        e.cb = {};
                        La(f.g[0], function(r) {
                            return function(u, t) {
                                oc($a(u, t), r.cb)
                            }
                        }(e));
                        var h = !!e.cb[S.Sd];
                        delete e.cb[S.Sd];
                        var k = Co(f.X),
                            n = k.containerId === k.id;
                        h || (n ? g.containerConfig = {} : g.targetConfig[f.X] = {});
                        g.g && h || lr(this, S.La, e.cb, f);
                        g.g = !0;
                        delete e.cb[S.Ib];
                        n ? oc(e.cb, g.containerConfig) : (oc(e.cb, g.targetConfig[f.X]), kg(70));
                        d = !0;
                        break;
                    case "event":
                        g = jr(this, f.X);
                        if (g.claimed) break;
                        e.Bd = {};
                        La(f.g[0], function(r) {
                            return function(u, t) {
                                oc($a(u, t), r.Bd)
                            }
                        }(e));
                        lr(this, f.g[1], e.Bd, f);
                        break;
                    case "get":
                        if (g = jr(this, f.X), !g.claimed) {
                            var p = {},
                                q = (p[S.hb] = f.g[0], p[S.rb] = f.g[1], p);
                            lr(this,
                                S.Sa, q, f)
                        }
                }
                this.g.shift();
                mr(this, f)
            }
            e = {
                cb: e.cb,
                Bd: e.Bd
            }
        }
        this.g.push.apply(this.g, c);
        d && this.flush()
    };
    var mr = function(a, b) {
        if ("require" !== b.type)
            if (b.X)
                for (var c = a.getCommandListeners(b.X)[b.type] || [], d = 0; d < c.length; d++) c[d]();
            else
                for (var e in a.o)
                    if (a.o.hasOwnProperty(e)) {
                        var f = a.o[e];
                        if (f && f.o)
                            for (var g = f.o[b.type] || [], h = 0; h < g.length; h++) g[h]()
                    }
    };
    Zq.prototype.getRemoteConfig = function(a) {
        return jr(this, a).remoteConfig
    };
    Zq.prototype.getCommandListeners = function(a) {
        return jr(this, a).o
    };
    Zq.prototype.getGlobalConfigValue = function(a) {
        return this.s[a]
    };
    var nr = [S.Bb, S.kc, S.Vd],
        pr = function(a, b) {
            return 1 === arguments.length ? or("set", a) : or("set", a, b)
        },
        qr = function(a, b) {
            return 1 === arguments.length ? or("config", a) : or("config", a, b)
        },
        rr = function(a, b, c) {
            c = c || {};
            c[S.Gb] = a;
            if ("G" === a.split("-")[0])
                for (var d in c) "_" === d[0] && -1 === nr.indexOf(d) && delete c[d];
            return or("event", b, c)
        };

    function or(a) {
        return arguments
    }
    var tr = function(a) {
        if (sr(a)) return a;
        this.g = a
    };
    tr.prototype.getUntrustedMessageValue = function() {
        return this.g
    };
    var sr = function(a) {
            return !a || "object" !== lc(a) || nc(a) ? !1 : "getUntrustedMessageValue" in a
        },
        ur = function(a) {
            if (sr(a)) return a.getUntrustedMessageValue()
        };
    tr.prototype.getUntrustedMessageValue = tr.prototype.getUntrustedMessageValue;
    var vr = function() {
        this.g = [];
        this.o = []
    };
    vr.prototype.push = function(a, b, c) {
        var d = this.g.length + 1;
        sr(a) && (a = ur(a) || a);
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        a = new tr(a);
        var e = {
            debugContext: c,
            message: a,
            notBeforeEventId: b,
            priorityId: d
        };
        this.g.push(e);
        for (var f = 0; f < this.o.length; f++) try {
            this.o[f](e)
        } catch (g) {}
    };
    vr.prototype.listen = function(a) {
        this.o.push(a)
    };
    vr.prototype.get = function() {
        for (var a = {}, b = 0; b < this.g.length; b++) {
            var c = this.g[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    var xr = function(a, b, c) {
            wr().push(a, b, c)
        },
        zr = function() {
            var a = yr;
            wr().listen(a)
        },
        Ar = function(a, b) {
            return a.notBeforeEventId - b.notBeforeEventId || a.priorityId - b.priorityId
        };

    function wr() {
        var a = T.mb;
        a || (a = new vr, T.mb = a);
        return a
    }
    var Br = !1;
    var Cr = !1;
    var Dr = function(a, b) {
        T.addDestinationToContainer ? T.addDestinationToContainer(a, b) : (T.pendingDestinationIds = T.pendingDestinationIds || [], T.pendingDestinationIds.push([a, b]))
    };
    var Wr = function(a) {
            var b = T.zones;
            return b ? b.getIsAllowedFn(Yk(), a) : function() {
                return !0
            }
        },
        Xr = function(a) {
            var b = T.zones;
            return b ? b.isActive(Yk(), a) : !0
        };
    var $r = function(a, b) {
        for (var c = [], d = 0; d < je.length; d++)
            if (a[d]) {
                var e = je[d];
                var f = Nm(b.xb);
                try {
                    var g = en(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var h = c,
                            k = h.push,
                            n = d,
                            p = e["function"];
                        if (!p) throw "Error: No function name given for function call.";
                        var q = le[p];
                        k.call(h, {
                            Oh: n,
                            Fh: q ? q.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else Yr(d, b), f()
                } catch (u) {
                    f()
                }
            }
        c.sort(Zr);
        for (var r = 0; r < c.length; r++) c[r].execute();
        return 0 <
            c.length
    };

    function Zr(a, b) {
        var c, d = b.Fh,
            e = a.Fh;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.Oh,
                h = b.Oh;
            f = g > h ? 1 : g < h ? -1 : 0
        }
        return f
    }

    function Yr(a, b) {
        if (!cm) return;
        var c = function(d) {
            var e = b.If(je[d]) ? "3" : "4",
                f = te(je[d][Kd.Sg], b, []);
            f && f.length && c(f[0].index);
            im(b.id, je[d], e);
            var g = te(je[d][Kd.Vg], b, []);
            g && g.length && c(g[0].index)
        };
        c(a);
    }
    var cs = !1,
        as;
    var is = function(a) {
        var b = Ta(),
            c = a["gtm.uniqueEventId"],
            d = a["gtm.priorityId"],
            e = a.event;
        if ("gtm.js" === e) {
            if (cs) return !1;
            cs = !0;
            var f = 0,
                g = a["gtm.start"];
            "number" === typeof g && 0 < g && isFinite(g) && (f = xh - g);
            nm("L", f);
        }
        var h, k = !1;
        if (Xr(c)) h = Wr(c);
        else {
            if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e) return !1;
            k = !0;
            h = Wr(Number.MAX_SAFE_INTEGER)
        }
        hm(c, e);
        var n = a.eventCallback,
            p = a.eventTimeout,
            q = n;
        q = function() {
            om(c, "E", Ta() - b);
            n && n()
        };
        var r = {
                id: c,
                priorityId: d,
                name: e,
                If: Wk(h),
                Ek: [],
                zh: function() {
                    kg(6)
                },
                fh: es(),
                gh: fs(c),
                xb: new Jm(q, p)
            },
            u = De(r);
        k && (u = gs(u));
        om(c, "S", Ta() - b);
        var t = $r(u, r),
            v = !1;
        Om(r.xb);
        "gtm.js" !== e && "gtm.sync" !== e || Zm(Ie.J);
        return hs(u, t) || v
    };

    function fs(a) {
        return function(b) {
            cm && (sc(b) || qm(a, "input", b))
        }
    }

    function es() {
        var a = {};
        a.event = Sh("event", 1);
        a.ecommerce = Sh("ecommerce", 1);
        a.gtm = Sh("gtm");
        a.eventModel = Sh("eventModel");
        return a
    }

    function gs(a) {
        for (var b = [], c = 0; c < a.length; c++) a[c] && (qh[String(je[c][Kd.Jb])] && (b[c] = !0), void 0 !== je[c][Kd.Wi] && (b[c] = !0));
        return b
    }

    function hs(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && je[c] && !rh[String(je[c][Kd.Jb])]) return !0;
        return !1
    }
    var Me;
    var js = !1;
    var ks = "HA GF G UA AW DC".split(" "),
        ls = !1,
        ms = !1,
        ns = 0;

    function os(a) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Hh()
        });
        return a["gtm.uniqueEventId"]
    }

    function ps(a) {
        delete a[S.Vd];
        delete a[S.Bb];
    }

    function qs() {
        return ls
    }
    var rs = {
            config: function(a) {
                os(a);
            },
            consent: function(a) {
                if (3 === a.length) {
                    kg(39);
                    var b = {
                            eventId: os(a),
                            priorityId: a["gtm.priorityId"]
                        },
                        c = a[1];
                    "default" === c ? Jg(a[2]) : "update" === c && Lg(a[2], b)
                }
            },
            event: function(a, b, c) {
                c = void 0 === c ? !1 : c;
                var d = a[1];
                if (!(2 > a.length) && m(d)) {
                    var e;
                    if (2 < a.length) {
                        if (!nc(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        e = a[2]
                    }
                    var f = e,
                        g = {},
                        h = (g.event = d, g);
                    f && (h.eventModel = oc(f), f[S.fc] && (h.eventCallback = f[S.fc]), f[S.Kd] && (h.eventTimeout = f[S.Kd]));
                    var k = !1,
                        n = !1;
                    if (e) {
                        e[S.Vd] && 0 === Ie.J.indexOf("GTM") && (k = !0);
                        e[S.Bb] && (n = !0);
                        ps(h.eventModel)
                    }
                    var p = os(a),
                        q = a["gtm.priorityId"];
                    h["gtm.uniqueEventId"] = p;
                    q && (h["gtm.priorityId"] = q);
                    return k ? void 0 : h
                }
            },
            get: function(a) {},
            js: function(a) {
                if (2 == a.length && a[1].getTime) {
                    ms = !0;
                    qs();
                    var b = {};
                    return b.event = "gtm.js", b["gtm.start"] = a[1].getTime(), b["gtm.uniqueEventId"] = os(a), b
                }
            },
            policy: function(a) {
                if (3 === a.length && m(a[1]) && Ca(a[2])) {
                    var b = a[1],
                        c = a[2],
                        d = Me.o;
                    d.g[b] ? d.g[b].push(c) : d.g[b] = [c];
                    if (kg(74), "all" === a[1]) {
                        kg(75);
                        var e = !1;
                        try {
                            e = a[2](Ie.J, "unknown", {})
                        } catch (f) {}
                        e ||
                            kg(76)
                    }
                } else {
                    kg(73);
                }
            },
            set: function(a) {
                var b;
                2 == a.length && nc(a[1]) ? b = oc(a[1]) : 3 == a.length && m(a[1]) && (b = {}, nc(a[2]) || Ea(a[2]) ? b[a[1]] = oc(a[2]) : b[a[1]] = a[2]);
                if (b) {
                    var c = os(a),
                        d = a["gtm.priorityId"];
                    b._clear = !0;
                    return b
                }
            }
        },
        ss = {
            policy: !0
        };
    var ts = function(a) {
            var b = z[oh.ca].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        us = function(a) {
            var b = z[oh.ca],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var vs = !1,
        ws = [];

    function xs() {
        if (!vs) {
            vs = !0;
            for (var a = 0; a < ws.length; a++) K(ws[a])
        }
    }
    var ys = function(a) {
        vs ? K(a) : ws.push(a)
    };
    var Os = 0,
        Ps = {},
        Qs = [],
        Rs = [],
        Ss = !1,
        Ts = !1,
        Us = function(a) {
            return z[oh.ca].push(a)
        },
        Vs = function(a, b, c) {
            a.eventCallback = b;
            c && (a.eventTimeout = c);
            return Us(a)
        },
        Ws = function(a, b) {
            var c = T[oh.ca],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = z.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {
                ++e === d && (g && (z.clearTimeout(g), g = void 0), f || (a(), f = !0))
            }
        };

    function Xs(a) {
        var b = a._clear;
        La(a, function(d, e) {
            "_clear" !== d && (b && Qh(d), Qh(d, e))
        });
        wh || (wh = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        c || (c = Hh(), a["gtm.uniqueEventId"] = c, Qh("gtm.uniqueEventId", c));
        return is(a)
    }

    function Ys(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Ma(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b) return !0
        }
        return !1
    }

    function Zs() {
        for (var a = !1; !Ts && (0 < Qs.length || 0 < Rs.length);) {
            if (!Ss && Ys(Qs[0])) {
                var b = {},
                    c = (b.event = "gtm.init_consent", b),
                    d = {},
                    e = (d.event = "gtm.init", d),
                    f = Qs[0]["gtm.uniqueEventId"];
                f && (c["gtm.uniqueEventId"] = f - 2, e["gtm.uniqueEventId"] = f - 1);
                Qs.unshift(c, e);
                Ss = !0;
            }
            Ts = !0;
            delete Kh.eventModel;
            Mh();
            var p = null,
                q = void 0,
                r = void 0;
            if (Rs.length) {
                var u = Rs.shift();
                p = u.message;
                q = u.debugContext;
                r = !0
            }
            null == p && (p = Qs.shift());
            if (null != p) {
                var t = sr(p);
                t && (p = ur(p), Rh());
                try {
                    if (Ca(p)) try {
                        p.call(Oh)
                    } catch (C) {} else if (Ea(p)) {
                        var v =
                            p;
                        if (m(v[0])) {
                            var x = v[0].split("."),
                                y = x.pop(),
                                w = v.slice(1),
                                A = Nh(x.join("."), 2);
                            if (null != A) try {
                                A[y].apply(A, w)
                            } catch (C) {}
                        }
                    } else {
                        if (Ma(p)) {
                            a: {
                                if (p.length && m(p[0])) {
                                    var B = rs[p[0]];
                                    if (B && (!t || !ss[p[0]])) {
                                        p = B(p, q, r);
                                        break a
                                    }
                                }
                                p = void 0
                            }
                            if (!p) {
                                Ts = !1;
                                continue
                            }
                        }
                        a = Xs(p) || a;
                        if (Ys(p)) {
                            var E = p["gtm.uniqueEventId"];
                            void 0 !== E && ($s(E), Os = E)
                        }
                    }
                } finally {
                    t && Mh(!0)
                }
            }
            Ts = !1
        }
        return !a
    }

    function at() {
        var a = bt() ? Rm("processUpdatesInitially_yield") : 0;
        nm("Y", a);
        var b = Zs();
        try {
            ts(Ie.J)
        } catch (c) {}
        return b
    }

    function yr(a) {
        var b = a.notBeforeEventId;
        Os < b ? (Ps[String(b)] = Ps[String(b)] || [], Ps[String(b)].push(a)) : (Rs.push(a), Rs.sort(Ar), K(function() {
            Ts || Zs()
        }))
    }

    function $s(a) {
        for (var b = Ps[String(a)] || [], c = 0; c < b.length; c++) Rs.push(b[c]);
        b.length && Rs.sort(Ar);
        delete Ps[String(a)]
    }
    var ct = function() {
            var a = Hb(oh.ca, []),
                b = Hb("google_tag_manager", {});
            Ps = wr().get();
            $s(0);
            zr();
            b = b[oh.ca] = b[oh.ca] || {};
            Fm(function() {
                if (!b.gtmDom) {
                    b.gtmDom = !0;
                    var e = {};
                    a.push((e.event = "gtm.dom", e))
                }
            });
            ys(function() {
                if (!b.gtmLoad) {
                    b.gtmLoad = !0;
                    var e = {};
                    a.push((e.event = "gtm.load", e))
                }
            });
            b.subscribers = (b.subscribers || 0) + 1;
            var c = a.push;
            a.push = function() {
                var e;
                if (0 < T.SANDBOXED_JS_SEMAPHORE) {
                    e = [];
                    for (var f = 0; f < arguments.length; f++) e[f] = new tr(arguments[f])
                } else e = [].slice.call(arguments, 0);
                Qs.push.apply(Qs,
                    e);
                var g = c.apply(a, e);
                if (300 < this.length)
                    for (kg(4); 300 < this.length;) this.shift();
                var h = "boolean" !== typeof g || g;
                return Zs() && h
            };
            var d = a.slice(0);
            Qs.push.apply(Qs, d);
            if (bt()) {
                Qm("processUpdatesInitially_yield");
                K(at)
            }
        },
        bt = function() {
            var a = !0;
            return a
        };

    function dt(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = Ta();
        return b < c + 3E5 && b > c - 9E5
    };
    var et = {};
    et.Ud = new String("undefined");
    var ft = function(a) {
        this.g = function(b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === et.Ud ? b : a[d]);
            return c.join("")
        }
    };
    ft.prototype.toString = function() {
        return this.g("undefined")
    };
    ft.prototype.valueOf = ft.prototype.toString;
    et.Yi = ft;
    et.pf = {};
    et.pj = function(a) {
        return new ft(a)
    };
    var gt = {};
    et.pk = function(a, b) {
        var c = Hh();
        gt[c] = [a, b];
        return c
    };
    et.kh = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = gt[c];
            if (d && "function" === typeof d[b]) d[b]();
            gt[c] = void 0
        }
    };
    et.Mj = function(a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++) b =
            b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    et.ik = function(a) {
        if (a === et.Ud) return a;
        var b = Hh();
        et.pf[b] = a;
        return 'google_tag_manager["' + Ie.J + '"].macro(' + b + ")"
    };
    et.Yj = function(a, b, c) {
        a instanceof et.Yi && (a = a.g(et.pk(b, c)), b = Aa);
        return {
            Jj: a,
            onSuccess: b
        }
    };
    var ht = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": Yb(a, "className"),
                "gtm.elementId": a["for"] || Sb(a, "id") || "",
                "gtm.elementTarget": a.formTarget || Yb(a, "target") || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || Yb(a, "href") || a.src || a.code || a.codebase || "";
            return d
        },
        it = function(a) {
            T.hasOwnProperty("autoEventsSettings") || (T.autoEventsSettings = {});
            var b = T.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        jt = function(a, b, c) {
            it(a)[b] = c
        },
        kt = function(a, b, c, d) {
            var e = it(a),
                f = Ua(e, b, d);
            e[b] = c(f)
        },
        lt = function(a, b, c) {
            var d = it(a);
            return Ua(d, b, c)
        },
        mt = function(a) {
            return "string" === typeof a ? a : String(Hh())
        };
    var Zt = z.clearTimeout,
        $t = z.setTimeout,
        V = function(a, b, c, d) {
            if (pn()) {
                b && K(b)
            } else return Mb(a, b, c, d)
        },
        au = function() {
            return new Date
        },
        bu = function() {
            return z.location.href
        },
        cu = function(a) {
            return ji(li(a), "fragment")
        },
        du = function(a) {
            return ki(li(a))
        },
        eu = function(a, b) {
            return Nh(a, b || 2)
        },
        fu = function(a, b, c) {
            return b ? Vs(a, b, c) : Us(a)
        },
        gu = function(a, b) {
            z[a] = b
        },
        W = function(a, b, c) {
            b && (void 0 === z[a] || c && !z[a]) && (z[a] = b);
            return z[a]
        },
        hu = function(a, b, c) {
            return Pi(a, b, void 0 === c ? !0 : !!c)
        },
        iu = function(a, b, c) {
            return 0 === Yi(a, b, c)
        },
        ju = function(a, b) {
            if (pn()) {
                b && K(b)
            } else Ob(a, b)
        },
        ku = function(a) {
            return !!lt(a, "init", !1)
        },
        lu = function(a) {
            jt(a, "init", !0)
        },
        mu = function(a, b, c) {
            cm && (sc(a) || qm(c, b, a))
        };

    var nu = et.Yj;
    var Ku = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function Lu(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var Mu = new Ja;

    function Nu(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = Mu.get(e);
            f || (f = new RegExp(b, d), Mu.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function Ou(a, b) {
        function c(g) {
            var h = li(g),
                k = ji(h, "protocol"),
                n = ji(h, "host", !0),
                p = ji(h, "port"),
                q = ji(h, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === k || "http" === k && "80" === p || "https" === k && "443" === p) k = "web", p = "default";
            return [k, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Pu(a) {
        return Qu(a) ? 1 : 0
    }

    function Qu(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = oc(a, {});
                oc({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Pu(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < Ku.length; g++) {
                            var h = Ku[g];
                            if (b[h]) {
                                f = b[h](c);
                                break a
                            }
                        }
                    } catch (k) {}
                    f = !1
                }
                return f;
            case "_ew":
                return Lu(b, c);
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return Nu(b, c, a.ignore_case);
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return Ou(b, c)
        }
        return !1
    };

    function Ru(a, b) {
        var c = this;
    }
    Ru.K = "addConsentListener";
    var Su;
    var Tu = function(a) {
        for (var b = 0; b < a.length; ++b)
            if (Su) try {
                a[b]()
            } catch (c) {
                kg(77)
            } else a[b]()
    };

    function Uu(a, b, c) {
        var d = this,
            e;
        return e
    }
    Uu.M = "internal.addDataLayerEventListener";

    function Vu(a, b, c) {}
    Vu.K = "addDocumentEventListener";

    function Wu(a, b, c, d) {}
    Wu.K = "addElementEventListener";

    function Xu(a) {}
    Xu.K = "addEventCallback";

    function av(a) {}
    av.M = "internal.addFormAbandonmentListener";
    var bv = {},
        cv = [],
        dv = {},
        ev = 0,
        fv = 0;

    function mv(a, b) {}
    mv.M = "internal.addFormInteractionListener";

    function tv(a, b) {}
    tv.M = "internal.addFormSubmitListener";

    function yv(a) {}
    yv.M = "internal.addGaSendListener";
    var zv = {},
        Av = [];
    var Hv = function(a, b) {};
    Hv.M = "internal.addHistoryChangeListener";

    function Iv(a, b, c) {}
    Iv.K = "addWindowEventListener";

    function Jv(a, b) {
        M(H(this), ["toPath:!string", "fromPath:!string"], arguments);
        N(this, "access_globals", "write", a);
        N(this, "access_globals", "read", b);
        var c = a.split("."),
            d = b.split("."),
            e = [z, I],
            f = Za(c, e),
            g = Za(d, e);
        if (void 0 === f || void 0 === g) return !1;
        f[c[c.length - 1]] = g[d[d.length - 1]];
        return !0
    }
    Jv.K = "aliasInWindow";

    function Kv(a, b, c) {}
    Kv.M = "internal.appendRemoteConfigParameter";

    function Lv() {
        var a = 2;
        return a
    };

    function Mv(a, b) {
        var c;
        M(H(this), ["path:!string"], [a]);
        N(this, "access_globals", "execute", a);
        for (var d = a.split("."), e = z, f = e[d[0]], g = 1; f && g < d.length; g++)
            if (e = f, f = f[d[g]], e === z || e === I) return;
        if ("function" !== lc(f)) return;
        for (var h = Lv(), k = [], n = 1; n < arguments.length; n++) k.push(qc(arguments[n], this.g, h));
        var p = (0, this.g.R)(f, e, k);
        c = pc(p, this.g, h);
        void 0 === c && void 0 !== p && kg(45);
        return c
    }
    Mv.K = "callInWindow";

    function Nv(a) {
        M(H(this), ["fn:!Fn"], arguments);
        var b = this.g;
        K(function() {
            a instanceof db && a.o(b)
        });
    }
    Nv.K = "callLater";

    function Ov(a) {}
    Ov.M = "callOnDomReady";

    function Pv(a) {
        M(H(this), ["listener:!Fn"], arguments);
        N(this, "process_dom_events", "window", "load");
        ys(qc(a))
    }
    Pv.M = "callOnWindowLoad";

    function Qv(a) {
        var b;
        return b
    }
    Qv.M = "internal.computeGtmParameter";

    function Rv(a, b) {
        var c;
        M(H(this), ["key:!string", "dataLayerVersion:?number"], arguments), N(this, "read_data_layer", a), c = 2 !== (b || 2) ? Nh(a, 1) : Ph(a, [z, I]);
        var d = pc(c, this.g, Lv());
        void 0 === d && void 0 !== c && kg(45);
        return d
    }
    Rv.K = "copyFromDataLayer";

    function Sv(a) {
        var b;
        M(H(this), ["path:!string"], arguments);
        N(this, "access_globals", "read", a);
        var c = a.split("."),
            d = Za(c, [z, I]);
        if (!d) return;
        var e = d[c[c.length - 1]];
        b = pc(e, this.g, Lv());
        void 0 === b && void 0 !== e && kg(45);
        return b
    }
    Sv.K = "copyFromWindow";

    function Tv(a, b) {
        var c;
        return c
    }
    Tv.M = "internal.copyPreHit";

    function Uv(a, b) {
        var c = null,
            d = Lv();
        M(H(this), ["functionPath:!string", "arrayPath:!string"], arguments);
        N(this, "access_globals", "readwrite", a);
        N(this, "access_globals", "readwrite", b);
        var e = [z, I],
            f = a.split("."),
            g = Za(f, e),
            h = f[f.length - 1];
        if (void 0 === g) throw Error("Path " + a + " does not exist.");
        var k = g[h];
        if (k && !Ca(k)) return null;
        if (k) return pc(k, this.g, d);
        var n;
        k = function() {
            if (!Ca(n.push)) throw Error("Object at " + b + " in window is not an array.");
            n.push.call(n, arguments)
        };
        g[h] = k;
        var p = b.split("."),
            q = Za(p, e),
            r = p[p.length - 1];
        if (void 0 === q) throw Error("Path " + p + " does not exist.");
        n = q[r];
        void 0 === n && (n = [], q[r] = n);
        c = function() {
            k.apply(k, Array.prototype.slice.call(arguments, 0))
        };
        return pc(c, this.g, d)
    }
    Uv.K = "createArgumentsQueue";

    function Vv(a) {
        var b;
        M(H(this), ["path:!string"], arguments);
        N(this, "access_globals", "readwrite", a);
        var c = a.split("."),
            d = Za(c, [z, I]),
            e = c[c.length - 1];
        if (void 0 === d) throw Error("Path " + a + " does not exist.");
        var f = d[e];
        void 0 === f && (f = [], d[e] = f);
        b = function() {
            if (!Ca(f.push)) throw Error("Object at " + a + " in window is not an array.");
            f.push.apply(f, Array.prototype.slice.call(arguments, 0))
        };
        return pc(b, this.g,
            Lv())
    }
    Vv.K = "createQueue";
    var Wv = {},
        Xv = [],
        Yv = {},
        Zv = 0,
        $v = 0;

    function fw(a, b) {
        var c = this;
        return b
    }
    fw.M = "internal.enableAutoEventOnFormInteraction";

    function kw(a, b) {
        var c = this;
        return b
    }
    kw.M = "internal.enableAutoEventOnFormSubmit";

    function pw() {
        var a = this;
    }
    pw.M = "internal.enableAutoEventOnGaSend";
    var qw = {},
        rw = [];

    function yw(a, b) {
        var c = this;
        return b
    }
    yw.M = "internal.enableAutoEventOnHistoryChange";

    function Cw(a, b) {
        var c = this;
        return b
    }
    Cw.M = "internal.enableAutoEventOnLinkClick";
    var Dw, Ew;

    function Nw(a, b) {
        var c = this;
        return b
    }
    Nw.M = "internal.enableAutoEventOnScroll";
    var Db = ca(["data-gtm-yt-inspected-"]),
        Ow = ["www.youtube.com", "www.youtube-nocookie.com"],
        Pw, Qw = !1;

    function $w(a, b) {
        var c = this;
        return b
    }
    $w.M = "internal.enableAutoEventOnYouTubeActivity";

    function ax(a) {
        return !1
    }
    ax.M = "internal.evaluateFilteringRules";
    var bx;

    function cx(a) {
        var b = !1;
        return b
    }
    cx.M = "internal.evaluateMatchingRules";

    function ix(a, b) {
        var c = !1;
        return c
    }
    ix.M = "internal.evaluatePredicates";
    var jx = function(a) {
        var b;
        return b
    };

    function kx(a, b) {
        b = void 0 === b ? !0 : b;
        var c;
        M(H(this), ["name:!string", "decode:?boolean"], arguments), N(this, "get_cookies", a), c = pc(Pi(a, void 0, !!b), this.g);
        return c
    }
    kx.K = "getCookieValues";

    function lx() {
        return fg.jh
    }
    lx.M = "internal.getCountryCode";

    function mx() {
        var a = [];
        return pc(a)
    }
    mx.M = "internal.getDestinationIds";

    function nx(a) {
        var b = null;
        return b
    }
    nx.K = "getElementById";

    function ox(a, b) {
        var c;
        return c
    }
    ox.M = "internal.getProductSettingsParameter";

    function px(a, b) {
        var c;
        M(H(this), ["queryKey:!string", "retrieveAll:?boolean"], arguments);
        N(this, "get_url", "query", a);
        var d = ji(li(z.location.href), "query"),
            e = gi(d, a, b);
        c = pc(e, this.g);
        return c
    }
    px.K = "getQueryParameters";

    function qx(a, b) {
        var c;
        return c
    }
    qx.K = "getReferrerQueryParameters";

    function rx(a) {
        var b = "";
        M(H(this), ["component:?string"], arguments), N(this, "get_referrer", a), b = ii(li(I.referrer), a);
        return b
    }
    rx.K = "getReferrerUrl";

    function sx() {
        return fg.Ih
    }
    sx.M = "internal.getRegionCode";

    function tx(a, b) {
        var c;
        return c
    }
    tx.M = "internal.getRemoteConfigParameter";

    function ux(a) {
        var b = "";
        M(H(this), ["component:?string"], arguments), N(this, "get_url", a), b = ji(li(z.location.href), a);
        return b
    }
    ux.K = "getUrl";

    function vx() {
        N(this, "get_user_agent");
        return z.navigator.userAgent
    }
    vx.K = "getUserAgent";

    function wx(a) {
        if (!a) return {};
        var b = a.vj;
        return Hm(b.type, b.index, b.name)
    };

    function yx(a, b) {}
    yx.K = "gtagSet";

    function zx(a, b) {}
    zx.K = "injectHiddenIframe";
    var Ax = {};

    function Bx(a, b, c, d, e, f) {
        f ? e[f] ? (e[f][0].push(c), e[f][1].push(d)) : (e[f] = [
            [c],
            [d]
        ], Mb(a, function() {
            for (var g = e[f][0], h = 0; h < g.length; h++) K(g[h]);
            g.push = function(k) {
                K(k);
                return 0
            }
        }, function() {
            for (var g = e[f][1], h = 0; h < g.length; h++) K(g[h]);
            e[f] = null
        }, b)) : Mb(a, c, d, b)
    }

    function Cx(a, b, c, d) {
        M(H(this), ["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"], arguments);
        N(this, "inject_script", a);
        var e = this.g;
        Bx(a, void 0, function() {
            b && b.o(e)
        }, function() {
            c && c.o(e)
        }, Ax, d);
    }
    var Dx = Object.freeze({
            dl: 1,
            id: 1
        }),
        Ex = {};

    function Fx(a, b, c, d) {}
    Cx.K = "injectScript";
    Fx.M = "internal.injectScript";

    function Gx(a) {
        var b = !0;
        return b
    }
    Gx.K = "isConsentGranted";
    var Hx = function() {
            return !1
        },
        Ix = {
            getItem: function(a) {
                var b = null;
                return b
            },
            setItem: function(a,
                b) {
                return !1
            },
            removeItem: function(a) {}
        };
    var Jx = ["textContent", "value", "tagName", "children", "childElementCount"];

    function Kx(a) {
        var b;
        return b
    }
    Kx.M = "internal.locateUserData";

    function Lx() {
        try {
            N(this, "logging")
        } catch (c) {
            return
        }
        if (!console) return;
        for (var a = Array.prototype.slice.call(arguments, 0), b = 0; b < a.length; b++) a[b] = qc(a[b], this.g);
        console.log.apply(console, a);
    }
    Lx.K = "logToConsole";

    function Mx(a, b) {
        var c;
        return c
    }
    Mx.M = "internal.newInWindow";

    function Nx(a) {
        var b = void 0;
        return b
    }
    Nx.K = "parseUrl";

    function Ox(a) {}
    Ox.M = "internal.processAsNewEvent";

    function Px(a, b) {
        var c = !1;
        M(H(this), ["permission:!string"], [a]);
        for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; ++e) d[e] = qc(d[e], this.g);
        d.unshift(this);
        try {
            N.apply(null, d), c = !0
        } catch (f) {
            return !1
        }
        return c
    }
    Px.K = "queryPermission";

    function Qx() {
        var a = "";
        N(this, "read_character_set"), a = I.characterSet || "";
        return a
    }
    Qx.K = "readCharacterSet";

    function Rx() {
        var a = "";
        N(this, "read_title"), a = I.title || "";
        return a
    }
    Rx.K = "readTitle";

    function Sx(a, b) {
        var c = this;
    }
    Sx.M = "internal.registerCcdCallback";
    var Tx = Object.freeze(["config", "event", "get", "set"]);

    function Ux(a, b, c) {}
    Ux.M = "internal.registerGtagCommandListener";

    function Vx(a, b) {
        var c = !1;
        return c
    }
    Vx.M = "internal.removeDataLayerEventListener";

    function Wx() {}
    Wx.K = "resetDataLayer";
    var Xx = function(a, b, c) {
        for (var d = 0; d < b.length; d++) a.hasOwnProperty(b[d]) && (a[b[d]] = c(a[b[d]]))
    };
    var Yx = !1;

    function Zx(a, b, c, d) {
        d = void 0 === d ? !1 : d;
    }
    Zx.M = "internal.sendGtagEvent";

    function $x(a, b, c) {
        M(H(this), ["url:!string", "onSuccess:?Fn", "onFailure:?Fn"], arguments);
        N(this, "send_pixel", a);
        var d = this.g;
        Pb(a, function() {
            b instanceof db && b.o(d)
        }, function() {
            c instanceof db && c.o(d)
        });
    }
    $x.K = "sendPixel";

    function ay(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !0 : d;
        var f = !1;
        return f
    }
    ay.K = "setCookie";
    var by = !1;
    by = !0;

    function cy(a) {
        M(H(this), ["consentSettings:!DustMap"], arguments);
        for (var b = a.Kb(), c = b.length(), d = 0; d < c; d++) {
            var e = b.get(d);
            e !== S.Ce && N(this, "access_consent", e, "write")
        }
        var f = this.g.g,
            g = f.eventId,
            h = wx(f);
        if (by) {
            var k = or("consent", "default", qc(a));
            xr(k, g, h)
        } else Jg(qc(a))
    }
    cy.K = "setDefaultConsentState";

    function dy(a, b, c) {
        M(H(this), ["path:!string", "value:?*", "overrideExisting:?boolean"], arguments);
        N(this, "access_globals", "readwrite", a);
        var d = a.split("."),
            e = Za(d, [z, I]),
            f = d.pop();
        if (e && (void 0 === e[f] || c)) return e[f] = qc(b, this.g, Lv()), !0;
        return !1
    }
    dy.K = "setInWindow";

    function ey(a, b, c) {}
    ey.M = "internal.setProductSettingsParameter";

    function fy(a, b, c) {}
    fy.M = "internal.setRemoteConfigParameter";
    var gy = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };

    function hy(a, b, c, d) {
        var e = this;
    }
    hy.K = "sha256";

    function iy(a, b, c) {}
    iy.M = "internal.sortRemoteConfigParameters";
    var jy = {},
        ky = {};
    jy.K = "templateStorage";
    jy.getItem = function(a) {
        var b = null;
        return b
    };
    jy.setItem = function(a, b) {};
    jy.removeItem = function(a) {};
    jy.clear = function() {};
    var ly = function(a) {
        var b;
        return b
    };
    var my = !1;
    my = !0;

    function ny(a) {
        M(H(this), ["consentSettings:!DustMap"], arguments);
        var b = qc(a),
            c;
        for (c in b) b.hasOwnProperty(c) && N(this, "access_consent", c, "write");
        var d = this.g.g,
            e = d.eventId,
            f = wx(d);
        my ? xr(or("consent", "update", b), e, f) : Lg(b, {
            eventId: e
        })
    }
    ny.K = "updateConsentState";
    var oy = function() {
        var a = new Xf,
            b = function(e) {
                return Zf(a, e.M, e)
            },
            c = function(e) {
                return a.add(e.K, e)
            };
        pn() ? (a.add(zx.K, Aa), a.add(Cx.K, Aa)) : (c(zx), c(Cx));
        var d = $x;
        c(Ru);
        c(Xu);
        c(Jv);
        c(Mv);
        c(Nv);
        c(Rv);
        c(Sv);
        c(Uv);
        c(Vv);
        c(kx);
        c(px);
        c(qx);
        c(rx);
        c(ux);
        c(Gx);
        c(Lx);
        c(Nx);
        c(Px);
        c(Qx);
        c(Rx);
        c(ay);
        c(cy);
        c(dy);
        c(hy);
        c(jy);
        c(ny);
        a.add("Math", Bf());
        a.add("Object", Vf);
        a.add("TestHelper", $f());
        a.add("assertApi", uf);
        a.add("assertThat", vf);
        a.add("decodeUri", Cf);
        a.add("decodeUriComponent", Df);
        a.add("encodeUri", Ef);
        a.add("encodeUriComponent", Ff);
        a.add("fail", Gf);
        a.add("generateRandom", Hf);
        a.add("getContainerVersion", If);
        a.add("getTimestamp", Lf);
        a.add("getTimestampMillis", Lf);
        a.add("getType", Mf);
        a.add("makeInteger", Of);
        a.add("makeNumber", Pf);
        a.add("makeString", Qf);
        a.add("makeTableMap", Rf);
        a.add("mock", Uf);
        a.add("fromBase64", jx, !("atob" in
            z));
        a.add("localStorage", Ix, !Hx());
        a.add($x.K, d);
        a.add("toBase64", ly, !("btoa" in z));
        b(mv);
        b(tv);
        b(yv);
        b(Hv);
        b(Pv);
        b(ax);
        b(cx);
        b(mx);
        b(Kx);
        b(Ux);
        b(Zx);
        Zf(a, "internal.getFlags", Kf);
        a.add("JSON", Nf(function(e) {
            var f = this.g.g;
            f && f.log.call(this, "error", e)
        }));
        c(yx);
        pn() ? Zf(a, Fx.M, Aa) : b(Fx);
        b(kw);
        b(fw);
        b(yw);
        b(Uu);
        b($w);
        b(Vx);
        b(pw);
        b(Cw);
        b(Nw);
        b(lx);
        b(sx);
        return function(e) {
            var f;
            if (a.g.hasOwnProperty(e)) f = a.get(e, this);
            else {
                var g;
                if (g =
                    a.o.hasOwnProperty(e)) {
                    var h = !1,
                        k = this.g.g;
                    if (k) {
                        var n = k.kd();
                        if (n) {
                            0 !== n.indexOf("__cvt_") && (h = !0);
                        }
                    }
                    g = h
                }
                if (g) {
                    var p = a.o.hasOwnProperty(e) ? a.o[e] : void 0;
                    f = p
                } else throw Error(e + " is not a valid API name.");
            }
            return f
        }
    };
    var py = function() {
            return !1
        },
        qy = function() {
            var a = {};
            return function(b, c, d) {}
        };
    var ry;

    function sy() {
        var a = ry;
        return function(b, c, d) {
            var e = d && d.event;
            ty(c);
            var f = new hb;
            La(c, function(q, r) {
                var u = pc(r);
                void 0 === u && void 0 !== r && kg(44);
                f.set(q, u)
            });
            a.g.g.I = Ae();
            var g = {
                fj: Ne(b),
                eventId: void 0 !== e ? e.id : void 0,
                priorityId: void 0 !== e ? e.priorityId : void 0,
                ce: void 0 !== e ? function(q) {
                    return e.xb.ce(q)
                } : void 0,
                kd: function() {
                    return b
                },
                log: function() {},
                vj: {
                    index: d && d.index,
                    type: d && d.type,
                    name: d && d.name
                }
            };
            if (py()) {
                var h = qy(),
                    k = void 0,
                    n = void 0;
                g.Ra = {
                    Zf: [],
                    cd: {},
                    Ya: function(q, r, u) {
                        1 === r && (k = q);
                        7 === r && (n = u);
                        h(q, r, u)
                    },
                    Nf: Sf()
                };
                g.log = function(q, r) {
                    if (k) {
                        var u = Array.prototype.slice.call(arguments, 1);
                        h(k, 4, {
                            level: q,
                            source: n,
                            message: u
                        })
                    }
                }
            }
            var p = Jd(a, g, [b, f]);
            a.g.g.I = void 0;
            p instanceof oa && "return" === p.g && (p = p.o);
            return qc(p)
        }
    }

    function ty(a) {
        var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        Ca(b) && (a.gtmOnSuccess = function() {
            K(b)
        });
        Ca(c) && (a.gtmOnFailure = function() {
            K(c)
        })
    }

    function uy() {
        ry.g.g.R = function(a, b, c) {
            T.SANDBOXED_JS_SEMAPHORE = T.SANDBOXED_JS_SEMAPHORE || 0;
            T.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                T.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }

    function vy(a) {
        void 0 !== a && La(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                Gh[e] = Gh[e] || [];
                Gh[e].push(b)
            }
        })
    };
    var wy = encodeURI,
        X = encodeURIComponent,
        xy = Pb;
    var yy = function(a, b) {
            if (!a) return !1;
            var c = ji(li(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        zy = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };

    function $z() {
        return z.gaGlobal = z.gaGlobal || {}
    }
    var aA = function() {
            var a = $z();
            a.hid = a.hid || Ha();
            return a.hid
        },
        bA = function(a, b) {
            var c = $z();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var JA = function() {
        if (Ca(z.__uspapi)) {
            var a = "";
            try {
                z.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var qB = window,
        rB = document,
        sB = function(a) {
            var b = qB._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === qB["ga-disable-" + a]) return !0;
            try {
                var c = qB.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = Ji("AMP_TOKEN", String(rB.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return rB.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var tB = {};

    function EB(a) {
        delete a.eventModel[S.Ib];
        LB(a.eventModel)
    }
    var LB = function(a) {
        La(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[S.Oa] || {};
        La(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var UB = function(a, b, c) {
            ar(b, c, a)
        },
        VB = function(a, b, c) {
            ar(b, c, a, !0)
        },
        XB = function(a, b) {};

    function WB(a, b) {}
    var Y = {
        h: {}
    };
    Y.h.gaawc = ["google"],
        function() {
            var a = !1;
            (function(b) {
                Y.__gaawc = b;
                Y.__gaawc.m = "gaawc";
                Y.__gaawc.isVendorTemplate = !0;
                Y.__gaawc.priorityOverride = 10
            })(function(b) {
                var c = String(b.vtp_measurementId);
                if (m(c) && 0 === c.indexOf("G-")) {
                    var d = zy(b.vtp_fieldsToSet, "name", "value") || {};
                    if (d.hasOwnProperty(S.Oa) || b.vtp_userProperties) {
                        var e = d[S.Oa] || {};
                        oc(zy(b.vtp_userProperties,
                            "name", "value"), e);
                        d[S.Oa] = e
                    }
                    b.vtp_enableSendToServerContainer && b.vtp_serverContainerUrl && (d[S.ba] = b.vtp_serverContainerUrl, d[S.Sc] = !0);
                    var f = b.vtp_userDataVariable;
                    f && (d[S.Ga] = f);
                    Xx(d, S.cf, function(h) {
                        return Oa(h)
                    });
                    Xx(d, S.df, function(h) {
                        return Number(h)
                    });
                    d.send_page_view = b.vtp_sendPageView;
                    if (a) {
                        var g = d[S.ba] || eu(S.ba, 2);
                        un(c, g, !0);
                        d[S.nf] = !0;
                        xr(qr(c, d), b.vtp_gtmEventId, Hm(1, b.vtp_gtmEntityIndex, b.vtp_gtmEntityName))
                    } else cr(d, c);
                    K(b.vtp_gtmOnSuccess)
                } else K(b.vtp_gtmOnFailure)
            });
        }();
    Y.h.gaawe = ["google"],
        function() {
            function a(e, f, g) {
                for (var h = 0; h < f.length; h++) e.hasOwnProperty(f[h]) && (e[f[h]] = g(e[f[h]]))
            }

            function b(e, f, g) {
                var h = {
                        id: "transaction_id",
                        revenue: "value",
                        list: "item_list_name"
                    },
                    k = {
                        click: S.Fe,
                        detail: S.Ba,
                        add: S.Yb,
                        remove: S.Zb,
                        checkout: S.Cb,
                        checkout_option: "checkout_option",
                        purchase: S.Aa,
                        refund: S.ac
                    },
                    n = {},
                    p = function(t, v) {
                        n[t] = n[t] || v
                    },
                    q = function(t, v, x) {
                        x = void 0 === x ? !1 : x;
                        d.push(6);
                        if (t) {
                            n.items = n.items || [];
                            for (var y = {}, w = 0; w < t.length; y = {
                                    Vb: y.Vb
                                }, w++) y.Vb = {}, La(t[w], function(B) {
                                return function(E,
                                    C) {
                                    x && "id" === E ? B.Vb.promotion_id = C : x && "name" === E ? B.Vb.promotion_name = C : B.Vb[E] = C
                                }
                            }(y)), n.items.push(y.Vb)
                        }
                        if (v)
                            for (var A in v) h.hasOwnProperty(A) ? p(h[A], v[A]) : p(A, v[A])
                    },
                    r;
                "dataLayer" === e.vtp_getEcommerceDataFrom ? (r = e.vtp_gtmCachedValues.eventModel) || (r = e.vtp_gtmCachedValues.ecommerce) : r = e.vtp_ecommerceMacroData;
                if (nc(r)) {
                    d.push(5);
                    for (var u in r) r.hasOwnProperty(u) && ("currencyCode" === u ? p("currency", r.currencyCode) : "impressions" === u && f === S.Db ? q(r.impressions, null) : "promoClick" === u && f === S.Ge ? q(r.promoClick.promotions,
                        r.promoClick.actionField, !0) : "promoView" === u && f === S.$b ? q(r.promoView.promotions, r.promoView.actionField, !0) : k.hasOwnProperty(u) ? f === k[u] && q(r[u].products, r[u].actionField) : n[u] = r[u]);
                    oc(n, g)
                }
            }
            var c = !1;
            var d = [];
            (function(e) {
                Y.__gaawe = e;
                Y.__gaawe.m = "gaawe";
                Y.__gaawe.isVendorTemplate = !0;
                Y.__gaawe.priorityOverride = 0
            })(function(e) {
                var f = String(e.vtp_measurementIdOverride ||
                    e.vtp_measurementId);
                if (m(f) && 0 === f.indexOf("G-")) {
                    var g = String(e.vtp_eventName);
                    if ("_" === g.charAt(0)) K(e.vtp_gtmOnFailure);
                    else {
                        var h = {};
                        d = [];
                        e.vtp_sendEcommerceData && (S.Gg.hasOwnProperty(g) || "checkout_option" === g) && b(e, g, h);
                        var k = zy(e.vtp_eventParameters, "name", "value"),
                            n;
                        for (n in k) k.hasOwnProperty(n) && (h[n] = k[n]);
                        var p = e.vtp_userDataVariable;
                        p && (h[S.Ga] = p);
                        if (h.hasOwnProperty(S.Oa) || e.vtp_userProperties) {
                            var q = h[S.Oa] || {};
                            oc(zy(e.vtp_userProperties, "name", "value"), q);
                            h[S.Oa] = q
                        }
                        LB(h);
                        0 < d.length &&
                            (h[S.kc] = d);
                        a(h, S.cf, function(t) {
                            return Oa(t)
                        });
                        a(h, S.df, function(t) {
                            return Number(t)
                        });
                        if (c) {
                            h[S.Vd] = !0;
                            var r = h[S.ba] || eu(S.ba, 2);
                            vn(f, r);
                            var u = e.vtp_gtmEventId;
                            xr(rr(f, g, h), u, Hm(1, e.vtp_gtmEntityIndex, e.vtp_gtmEntityName))
                        } else ar(g, h, f);
                        K(e.vtp_gtmOnSuccess)
                    }
                } else K(e.vtp_gtmOnFailure)
            });
        }();

    Y.h.ctv = ["google"],
        function() {
            (function(a) {
                Y.__ctv = a;
                Y.__ctv.m = "ctv";
                Y.__ctv.isVendorTemplate = !0;
                Y.__ctv.priorityOverride = 0
            })(function() {
                return "1331"
            })
        }();
    Y.h.send_pixel = ["google"],
        function() {
            function a(b, c) {
                return {
                    url: c
                }
            }(function(b) {
                Y.__send_pixel = b;
                Y.__send_pixel.m = "send_pixel";
                Y.__send_pixel.isVendorTemplate = !0;
                Y.__send_pixel.priorityOverride = 0
            })(function(b) {
                var c = b.vtp_allowedUrls || "specific",
                    d = b.vtp_urls || [],
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f, g) {
                        if (!m(g)) throw e(f, {}, "URL must be a string.");
                        try {
                            if ("any" === c && mf(li(g)) || "specific" === c && nf(li(g), d)) return
                        } catch (h) {
                            throw e(f, {}, "Invalid URL filter.");
                        }
                        throw e(f, {}, "Prohibited URL: " +
                            g + ".");
                    },
                    W: a
                }
            })
        }();
    Y.h.sdl = ["google"],
        function() {
            function a() {
                return !!(Object.keys(k("horiz.pix")).length || Object.keys(k("horiz.pct")).length || Object.keys(k("vert.pix")).length || Object.keys(k("vert.pct")).length)
            }

            function b(w) {
                for (var A = [], B = w.split(","), E = 0; E < B.length; E++) {
                    var C = Number(B[E]);
                    if (isNaN(C)) return [];
                    p.test(B[E]) || A.push(C)
                }
                return A
            }

            function c() {
                var w = 0,
                    A = 0;
                return function() {
                    var B = Yh(),
                        E = B.height;
                    w = Math.max(v.scrollLeft + B.width, w);
                    A = Math.max(v.scrollTop + E, A);
                    return {
                        zf: w,
                        Af: A
                    }
                }
            }

            function d() {
                u = W("self");
                t = u.document;
                v = t.scrollingElement || t.body && t.body.parentNode;
                y = c()
            }

            function e(w, A, B, E) {
                var C = k(A),
                    D = {},
                    F;
                for (F in C) {
                    D.Xb = F;
                    if (C.hasOwnProperty(D.Xb)) {
                        var R = Number(D.Xb);
                        w < R || (fu({
                            event: "gtm.scrollDepth",
                            "gtm.scrollThreshold": R,
                            "gtm.scrollUnits": B.toLowerCase(),
                            "gtm.scrollDirection": E,
                            "gtm.triggers": C[D.Xb].join(",")
                        }), kt("sdl", A, function(J) {
                            return function(Q) {
                                delete Q[J.Xb];
                                return Q
                            }
                        }(D), {}))
                    }
                    D = {
                        Xb: D.Xb
                    }
                }
            }

            function f() {
                var w = y(),
                    A = w.zf,
                    B = w.Af,
                    E = A / v.scrollWidth * 100,
                    C = B / v.scrollHeight * 100;
                e(A, "horiz.pix",
                    q.Xd, r.Hg);
                e(E, "horiz.pct", q.Wd, r.Hg);
                e(B, "vert.pix", q.Xd, r.Yg);
                e(C, "vert.pct", q.Wd, r.Yg);
                jt("sdl", "pending", !1)
            }

            function g() {
                var w = 250,
                    A = !1;
                t.scrollingElement && t.documentElement && u.addEventListener && (w = 50, A = !0);
                var B = 0,
                    E = !1,
                    C = function() {
                        E ? B = $t(C, w) : (B = 0, f(), ku("sdl") && !a() && (Rb(u, "scroll", D), Rb(u, "resize", D), jt("sdl", "init", !1)));
                        E = !1
                    },
                    D = function() {
                        A && y();
                        B ? E = !0 : (B = $t(C, w), jt("sdl", "pending", !0))
                    };
                return D
            }

            function h(w, A, B) {
                if (A) {
                    var E = b(String(w));
                    kt("sdl", B, function(C) {
                        for (var D = 0; D < E.length; D++) {
                            var F =
                                String(E[D]);
                            C.hasOwnProperty(F) || (C[F] = []);
                            C[F].push(A)
                        }
                        return C
                    }, {})
                }
            }

            function k(w) {
                return lt("sdl", w, {})
            }

            function n(w) {
                K(w.vtp_gtmOnSuccess);
                var A = w.vtp_uniqueTriggerId,
                    B = w.vtp_horizontalThresholdsPixels,
                    E = w.vtp_horizontalThresholdsPercent,
                    C = w.vtp_verticalThresholdUnits,
                    D = w.vtp_verticalThresholdsPixels,
                    F = w.vtp_verticalThresholdsPercent;
                switch (w.vtp_horizontalThresholdUnits) {
                    case q.Xd:
                        h(B, A, "horiz.pix");
                        break;
                    case q.Wd:
                        h(E, A, "horiz.pct")
                }
                switch (C) {
                    case q.Xd:
                        h(D, A, "vert.pix");
                        break;
                    case q.Wd:
                        h(F,
                            A, "vert.pct")
                }
                ku("sdl") ? lt("sdl", "pending") || (x || (d(), x = !0), K(function() {
                    return f()
                })) : (d(), x = !0, v && (lu("sdl"), jt("sdl", "pending", !0), K(function() {
                    f();
                    if (a()) {
                        var R = g();
                        Qb(u, "scroll", R);
                        Qb(u, "resize", R)
                    } else jt("sdl", "init", !1)
                })))
            }
            var p = /^\s*$/,
                q = {
                    Wd: "PERCENT",
                    Xd: "PIXELS"
                },
                r = {
                    Yg: "vertical",
                    Hg: "horizontal"
                },
                u, t, v, x = !1,
                y;
            (function(w) {
                Y.__sdl = w;
                Y.__sdl.m = "sdl";
                Y.__sdl.isVendorTemplate = !0;
                Y.__sdl.priorityOverride = 0
            })(function(w) {
                w.vtp_triggerStartOption ? n(w) : ys(function() {
                    n(w)
                })
            })
        }();


    Y.h.jsm = ["customScripts"],
        function() {
            (function(a) {
                Y.__jsm = a;
                Y.__jsm.m = "jsm";
                Y.__jsm.isVendorTemplate = !0;
                Y.__jsm.priorityOverride = 0
            })(function(a) {
                if (void 0 !== a.vtp_javascript) {
                    var b = a.vtp_javascript;
                    try {
                        var c = W("google_tag_manager");
                        var d = c && c.e && c.e(b);
                        mu(d, "jsm", a.vtp_gtmEventId);
                        return d
                    } catch (e) {}
                }
            })
        }();

    Y.h.flc = [],
        function() {
            (function(a) {
                Y.__flc = a;
                Y.__flc.m = "flc";
                Y.__flc.isVendorTemplate = !0;
                Y.__flc.priorityOverride = 0
            })(function(a) {
                var b = !a.hasOwnProperty("vtp_enableConversionLinker") || !!a.vtp_enableConversionLinker,
                    c = zy(a.vtp_customVariable || [], "key", "value") || {},
                    d = {},
                    e = (d[S.ka] = eu(S.ka), d[S.Je] = !0 === a.vtp_useImageTag ? !1 : !0, d[S.Ta] = a.vtp_conversionCookiePrefix || void 0, d[S.Da] = b, d[S.Hb] = a.vtp_sessionId, d.oref = a.vtp_useImageTag ? void 0 : a.vtp_url, d.tran = a.vtp_transactionVariable, d.u = a.vtp_userVariable,
                        d[S.Ga] = a.vtp_userDataVariable, d);
                for (var f in c) c.hasOwnProperty(f) && (e[f] = c[f]);
                var g = "DC-" + a.vtp_advertiserId + "/" + a.vtp_groupTag + "/" + (a.vtp_activityTag + "+" + ({
                        UNIQUE: "unique",
                        SESSION: "per_session"
                    }[a.vtp_ordinalType] || "standard")),
                    h = Gn(Dn(xn(e), a.vtp_gtmOnSuccess), a.vtp_gtmOnFailure);
                h.isGtmEvent = !0;
                Hp(g, "", Date.now(), h)
            })
        }();
    Y.h.sp = ["google"],
        function() {
            (function(a) {
                Y.__sp = a;
                Y.__sp.m = "sp";
                Y.__sp.isVendorTemplate = !0;
                Y.__sp.priorityOverride = 0
            })(function(a) {
                var b, c = {};
                "DATA_LAYER" == a.vtp_customParamsFormat ? c = a.vtp_dataLayerVariable : "USER_SPECIFIED" == a.vtp_customParamsFormat && (c = zy(a.vtp_customParams, "key", "value"));
                b = nc(c) ? c : {};
                b[S.Ke] = !0;
                a.vtp_enableDynamicRemarketing && (a.vtp_eventValue && (b[S.oa] = a.vtp_eventValue), a.vtp_eventItems && (b[S.fa] = a.vtp_eventItems));
                a.vtp_rdp && (b[S.Xc] = !0);
                a.vtp_userId && (b[S.Na] = a.vtp_userId);
                var d = Gn(Dn(xn(b), a.vtp_gtmOnSuccess), a.vtp_gtmOnFailure);
                d.isGtmEvent = !0;
                var e = "AW-" + a.vtp_conversionId;
                a.vtp_conversionLabel && (e += "/" + a.vtp_conversionLabel);
                vp(e, a.vtp_eventName || "", Date.now(), d)
            })
        }();
    Y.h.c = ["google"],
        function() {
            (function(a) {
                Y.__c = a;
                Y.__c.m = "c";
                Y.__c.isVendorTemplate = !0;
                Y.__c.priorityOverride = 0
            })(function(a) {
                mu(a.vtp_value, "c", a.vtp_gtmEventId);
                return a.vtp_value
            })
        }();
    Y.h.e = ["google"],
        function() {
            (function(a) {
                Y.__e = a;
                Y.__e.m = "e";
                Y.__e.isVendorTemplate = !0;
                Y.__e.priorityOverride = 0
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();
    Y.h.f = ["google"],
        function() {
            (function(a) {
                Y.__f = a;
                Y.__f.m = "f";
                Y.__f.isVendorTemplate = !0;
                Y.__f.priorityOverride = 0
            })(function(a) {
                var b = eu("gtm.referrer", 1) || I.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? ji(li(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : du(String(b)) : String(b)
            })
        }();
    Y.h.cl = ["google"],
        function() {
            function a(b) {
                var c = b.target;
                if (c) {
                    var d = ht(c, "gtm.click");
                    fu(d)
                }
            }(function(b) {
                Y.__cl = b;
                Y.__cl.m = "cl";
                Y.__cl.isVendorTemplate = !0;
                Y.__cl.priorityOverride = 0
            })(function(b) {
                if (!ku("cl")) {
                    var c = W("document");
                    Qb(c, "click", a, !0);
                    lu("cl")
                }
                K(b.vtp_gtmOnSuccess)
            })
        }();
    Y.h.k = ["google"],
        function() {
            (function(a) {
                Y.__k = a;
                Y.__k.m = "k";
                Y.__k.isVendorTemplate = !0;
                Y.__k.priorityOverride = 0
            })(function(a) {
                return hu(a.vtp_name, eu("gtm.cookie", 1), !!a.vtp_decodeCookie)[0]
            })
        }();

    Y.h.access_globals = ["google"],
        function() {
            function a(b, c, d) {
                var e = {
                    key: d,
                    read: !1,
                    write: !1,
                    execute: !1
                };
                switch (c) {
                    case "read":
                        e.read = !0;
                        break;
                    case "write":
                        e.write = !0;
                        break;
                    case "readwrite":
                        e.read = e.write = !0;
                        break;
                    case "execute":
                        e.execute = !0;
                        break;
                    default:
                        throw Error("Invalid " + b + " request " + c);
                }
                return e
            }(function(b) {
                Y.__access_globals = b;
                Y.__access_globals.m = "access_globals";
                Y.__access_globals.isVendorTemplate = !0;
                Y.__access_globals.priorityOverride = 0
            })(function(b) {
                for (var c = b.vtp_keys || [], d = b.vtp_createPermissionError,
                        e = [], f = [], g = [], h = 0; h < c.length; h++) {
                    var k = c[h],
                        n = k.key;
                    k.read && e.push(n);
                    k.write && f.push(n);
                    k.execute && g.push(n)
                }
                return {
                    assert: function(p, q, r) {
                        if (!m(r)) throw d(p, {}, "Key must be a string.");
                        if ("read" === q) {
                            if (-1 < e.indexOf(r)) return
                        } else if ("write" === q) {
                            if (-1 < f.indexOf(r)) return
                        } else if ("readwrite" === q) {
                            if (-1 < f.indexOf(r) && -1 < e.indexOf(r)) return
                        } else if ("execute" === q) {
                            if (-1 < g.indexOf(r)) return
                        } else throw d(p, {}, "Operation must be either 'read', 'write', or 'execute', was " + q);
                        throw d(p, {}, "Prohibited " +
                            q + " on global variable: " + r + ".");
                    },
                    W: a
                }
            })
        }();
    Y.h.r = ["google"],
        function() {
            (function(a) {
                Y.__r = a;
                Y.__r.m = "r";
                Y.__r.isVendorTemplate = !0;
                Y.__r.priorityOverride = 0
            })(function(a) {
                return Ha(a.vtp_min, a.vtp_max)
            })
        }();
    Y.h.tg = ["google"],
        function() {
            function a(g) {
                f.push(g);
                1 < f.length || K(function() {
                    var h = f.join(",");
                    f = [];
                    fu({
                        event: "gtm.triggerGroup",
                        "gtm.triggers": h
                    })
                })
            }

            function b(g, h) {
                var k = c[h],
                    n = k.indexOf(g); - 1 !== n && (k.splice(n, 1), k.length || a(h))
            }
            var c = {},
                d = {},
                e = [],
                f = [];
            (function(g) {
                Y.__tg = g;
                Y.__tg.m = "tg";
                Y.__tg.isVendorTemplate = !0;
                Y.__tg.priorityOverride = 0
            })(function(g) {
                K(g.vtp_gtmOnSuccess);
                var h = g.vtp_uniqueTriggerId,
                    k = g.vtp_triggerIds,
                    n =
                    g.vtp_firingId;
                if (g.vtp_isListeningTag) {
                    var p = d[n];
                    p ? b(n, p) : e.push(n)
                } else {
                    c[h] = k;
                    for (var q = 0, r; r = k[q]; q++) d[r] = h;
                    for (var u = 0; u < e.length; u++) b(e[u], h)
                }
            })
        }();
    Y.h.t = ["google"],
        function() {
            (function(a) {
                Y.__t = a;
                Y.__t.m = "t";
                Y.__t.isVendorTemplate = !0;
                Y.__t.priorityOverride = 0
            })(function() {
                return au().getTime()
            })
        }();
    Y.h.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Y.__u = b;
                Y.__u.m = "u";
                Y.__u.isVendorTemplate = !0;
                Y.__u.priorityOverride = 0
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : eu("gtm.url", 1)) || bu();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return du(String(c));
                var e = li(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        h = b[a("vtp_queryKey").toString()] || "",
                        k = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;g ? Ea(h) ?
                    n = h : n = String(h).replace(/\s+/g, "").split(",") : n = [String(h)];
                    for (var p = 0; p < n.length; p++) {
                        var q = ji(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!k || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = ji(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();
    Y.h.v = ["google"],
        function() {
            (function(a) {
                Y.__v = a;
                Y.__v.m = "v";
                Y.__v.isVendorTemplate = !0;
                Y.__v.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = eu(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                mu(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();
    Y.h.ua = ["google"],
        function() {
            function a(k, n) {
                for (var p in k)
                    if (!h[p] && k.hasOwnProperty(p)) {
                        var q = g[p] ? Oa(k[p]) : k[p];
                        "anonymizeIp" != p || q || (q = void 0);
                        n[p] = q
                    }
            }

            function b(k) {
                var n = {};
                k.vtp_gaSettings && oc(zy(k.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), n);
                oc(zy(k.vtp_fieldsToSet, "fieldName", "value"), n);
                Oa(n.urlPassthrough) && (n._useUp = !0);
                k.vtp_transportUrl && (n._x_19 = k.vtp_transportUrl);
                return n
            }

            function c(k, n) {
                return void 0 === n ? n : k(n)
            }

            function d(k, n, p) {
                var q = function(O, P, L) {
                        for (var Z in O)
                            if (r.hasOwnProperty(Z)) {
                                var ba = L[P] || {};
                                ba.actionField = ba.actionField || {};
                                ba.actionField[r[Z]] = O[Z];
                                L[P] = ba
                            }
                    },
                    r = {
                        transaction_id: "id",
                        affiliation: "affiliation",
                        value: "revenue",
                        tax: "tax",
                        shipping: "shipping",
                        coupon: "coupon",
                        item_list_name: "list"
                    },
                    u = {},
                    t = (u[S.Fe] = "click", u[S.Ba] = "detail", u[S.Yb] = "add", u[S.Zb] = "remove", u[S.Cb] = "checkout", u[S.Aa] = "purchase", u[S.ac] = "refund", u),
                    v;
                if (k.vtp_useEcommerceDataLayer) {
                    var x = !1;
                    k.vtp_useGA4SchemaForEcommerce && (v = k.vtp_gtmCachedValues.eventModel,
                        x = !!v);
                    x || (v = eu("ecommerce", 1))
                } else k.vtp_ecommerceMacroData && (v = k.vtp_ecommerceMacroData.ecommerce, !v && k.vtp_useGA4SchemaForEcommerce && (v = k.vtp_ecommerceMacroData));
                if (!nc(v)) return;
                v = Object(v);
                var y = {},
                    w = v.currencyCode;
                k.vtp_useGA4SchemaForEcommerce && (w = w || v.currency);
                var A = Ua(n, "currencyCode", w);
                A && (y.currencyCode = A);
                v.impressions &&
                    (y.impressions = v.impressions);
                v.promoView && (y.promoView = v.promoView);
                if (k.vtp_useGA4SchemaForEcommerce) {
                    if (p === S.Db && !v.impressions) v.items && (y.impressions = v.items, y.translateIfKeyEquals = "impressions");
                    else if (p === S.$b && !v.promoView) v.promoView = {}, v.items && (y.promoView = {}, y.promoView.promotions = v.items, y.translateIfKeyEquals = "promoView");
                    else if (p === S.Ge && !v.promoClick) v.promoClick = {}, v.items && (y.promoClick = {}, y.promoClick.promotions = v.items, y.translateIfKeyEquals = "promoClick", q(v, "promoClick", y));
                    else if (t.hasOwnProperty(p)) {
                        var B = t[p];
                        !v[B] && v.items && (y[B] = {}, y[B].products = v.items, y.translateIfKeyEquals = "products", q(v, B, y))
                    }
                    var E = y.translateIfKeyEquals;
                    if ("promoClick" === E || "products" === E) return y
                }
                if (v.promoClick) return y.promoClick = v.promoClick, y;
                for (var C = "detail checkout checkout_option click add remove purchase refund".split(" "), D = "refund purchase remove checkout checkout_option add click detail".split(" "), F = 0; F < C.length; F++) {
                    var R = v[C[F]];
                    if (R) {
                        y[C[F]] = R;
                        if (cm)
                            for (var J = 0; J < D.length; J++) {
                                var Q =
                                    v[D[J]];
                                if (Q) {
                                    Q !== R && kg(13);
                                    break
                                }
                            }
                        return y
                    }
                }
                k.vtp_useGA4SchemaForEcommerce && t.hasOwnProperty(p) && q(v, t[p], y);
                return y;
            }

            function e(k, n) {
                if (!f) {
                    var p = k.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                    k.vtp_useInternalVersion && !k.vtp_useDebugVersion && (p = "internal/" + p);
                    f = !0;
                    var q = k.vtp_gtmOnFailure,
                        r = mn(n._x_19, "/analytics.js"),
                        u = rn("https:", "http:", "//www.google-analytics.com/" + p, n && !!n.forceSSL);
                    V("analytics.js" === p && r ? r :
                        u,
                        function() {
                            var t = Um();
                            t && t.loaded || q();
                        }, q)
                }
            }
            var f, g = {
                    allowAnchor: !0,
                    allowLinker: !0,
                    alwaysSendReferrer: !0,
                    anonymizeIp: !0,
                    cookieUpdate: !0,
                    exFatal: !0,
                    forceSSL: !0,
                    javaEnabled: !0,
                    legacyHistoryImport: !0,
                    nonInteraction: !0,
                    useAmpClientId: !0,
                    useBeacon: !0,
                    storeGac: !0,
                    allowAdFeatures: !0,
                    allowAdPersonalizationSignals: !0,
                    _cd2l: !0
                },
                h = {
                    urlPassthrough: !0
                };
            (function(k) {
                Y.__ua =
                    k;
                Y.__ua.m = "ua";
                Y.__ua.isVendorTemplate = !0;
                Y.__ua.priorityOverride = 0
            })(function(k) {
                function n() {
                    if (k.vtp_doubleClick || "DISPLAY_FEATURES" == k.vtp_advertisingFeaturesType) v.displayfeatures = !0
                }
                var p = {},
                    q = {},
                    r = {};
                if (k.vtp_gaSettings) {
                    var u = k.vtp_gaSettings;
                    oc(zy(u.vtp_contentGroup, "index", "group"), p);
                    oc(zy(u.vtp_dimension, "index", "dimension"), q);
                    oc(zy(u.vtp_metric, "index", "metric"), r);
                    var t = oc(u);
                    t.vtp_fieldsToSet = void 0;
                    t.vtp_contentGroup = void 0;
                    t.vtp_dimension = void 0;
                    t.vtp_metric = void 0;
                    k = oc(k, t)
                }
                oc(zy(k.vtp_contentGroup,
                    "index", "group"), p);
                oc(zy(k.vtp_dimension, "index", "dimension"), q);
                oc(zy(k.vtp_metric, "index", "metric"), r);
                var v = b(k),
                    x = String(k.vtp_trackingId || ""),
                    y = "",
                    w = "",
                    A = "";
                k.vtp_setTrackerName && "string" == typeof k.vtp_trackerName ? "" !== k.vtp_trackerName && (A = k.vtp_trackerName, w = A + ".") : (A = "gtm" + Hh(), w = A + ".");
                var B = function(ba, U) {
                    for (var qa in U) U.hasOwnProperty(qa) && (v[ba + qa] = U[qa])
                };
                B("contentGroup", p);
                B("dimension", q);
                B("metric", r);
                k.vtp_enableEcommerce && (y = k.vtp_gtmCachedValues.event, v.gtmEcommerceData = d(k,
                    v, y));
                if ("TRACK_EVENT" === k.vtp_trackType) y = "track_event", n(), v.eventCategory = String(k.vtp_eventCategory), v.eventAction = String(k.vtp_eventAction), v.eventLabel = c(String, k.vtp_eventLabel), v.value = c(Na, k.vtp_eventValue);
                else if ("TRACK_PAGEVIEW" == k.vtp_trackType) {
                    if (y = S.Ic, n(), "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == k.vtp_advertisingFeaturesType && (v.remarketingLists = !0), k.vtp_autoLinkDomains) {
                        var E = {};
                        E[S.U] = k.vtp_autoLinkDomains;
                        E.use_anchor = k.vtp_useHashAutoLink;
                        E[S.ic] = k.vtp_decorateFormsAutoLink;
                        v[S.va] = E
                    }
                } else "TRACK_SOCIAL" === k.vtp_trackType ? (y = "track_social", v.socialNetwork = String(k.vtp_socialNetwork), v.socialAction = String(k.vtp_socialAction), v.socialTarget = String(k.vtp_socialActionTarget)) : "TRACK_TIMING" == k.vtp_trackType && (y = "timing_complete", v.eventCategory = String(k.vtp_timingCategory), v.timingVar = String(k.vtp_timingVar), v.value = Na(k.vtp_timingValue), v.eventLabel = c(String, k.vtp_timingLabel));
                k.vtp_enableRecaptcha && (v.enableRecaptcha = !0);
                k.vtp_enableLinkId && (v.enableLinkId = !0);
                var C = {};
                a(v, C);
                v.name || (C.gtmTrackerName = A);
                C.gaFunctionName = k.vtp_functionName;
                void 0 !== k.vtp_nonInteraction && (C.nonInteraction = k.vtp_nonInteraction);
                var D = Gn(Dn(xn(C), k.vtp_gtmOnSuccess), k.vtp_gtmOnFailure);
                D.isGtmEvent = !0;
                wq(x, y, Date.now(), D);
                var F = Wm(k.vtp_functionName);
                if (Ca(F)) {
                    var R = function(ba) {
                        var U = [].slice.call(arguments, 0);
                        U[0] = w + U[0];
                        F.apply(window, U)
                    };
                    if ("TRACK_TRANSACTION" == k.vtp_trackType) {} else if ("DECORATE_LINK" == k.vtp_trackType) {} else if ("DECORATE_FORM" == k.vtp_trackType) {} else if ("TRACK_DATA" == k.vtp_trackType) {}
                    e(k, v)
                } else K(k.vtp_gtmOnFailure)
            })
        }();
    Y.h.get_url = ["google"],
        function() {
            function a(b, c, d) {
                return {
                    component: c,
                    queryKey: d
                }
            }(function(b) {
                Y.__get_url = b;
                Y.__get_url.m = "get_url";
                Y.__get_url.isVendorTemplate = !0;
                Y.__get_url.priorityOverride = 0
            })(function(b) {
                var c = "any" === b.vtp_urlParts ? null : [];
                c && (b.vtp_protocol && c.push("protocol"), b.vtp_host && c.push("host"), b.vtp_port && c.push("port"), b.vtp_path && c.push("path"), b.vtp_extension && c.push("extension"), b.vtp_query && c.push("query"), b.vtp_fragment && c.push("fragment"));
                var d = c && "any" !== b.vtp_queriesAllowed ?
                    b.vtp_queryKeys || [] : null,
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f, g, h) {
                        if (g) {
                            if (!m(g)) throw e(f, {}, "URL component must be a string.");
                            if (c && 0 > c.indexOf(g)) throw e(f, {}, "Prohibited URL component: " + g);
                            if ("query" === g && d) {
                                if (!h) throw e(f, {}, "Prohibited from getting entire URL query when query keys are specified.");
                                if (!m(h)) throw e(f, {}, "Query key must be a string.");
                                if (0 > d.indexOf(h)) throw e(f, {}, "Prohibited query key: " + h);
                            }
                        } else if (c) throw e(f, {}, "Prohibited from getting entire URL when components are specified.");
                    },
                    W: a
                }
            })
        }();
    Y.h.jel = ["google"],
        function() {
            (function(a) {
                Y.__jel = a;
                Y.__jel.m = "jel";
                Y.__jel.isVendorTemplate = !0;
                Y.__jel.priorityOverride = 0
            })(function(a) {
                if (!ku("jel")) {
                    var b = W("self"),
                        c = b.onerror;
                    b.onerror = function(d, e, f, g, h) {
                        c && c(d, e, f, g, h);
                        fu({
                            event: "gtm.pageError",
                            "gtm.errorMessage": d,
                            "gtm.errorUrl": e,
                            "gtm.errorLineNumber": f
                        });
                        return !1
                    };
                    lu("jel")
                }
                K(a.vtp_gtmOnSuccess)
            })
        }();
    Y.h.get_referrer = ["google"],
        function() {
            function a(b, c, d) {
                return {
                    component: c,
                    queryKey: d
                }
            }(function(b) {
                Y.__get_referrer = b;
                Y.__get_referrer.m = "get_referrer";
                Y.__get_referrer.isVendorTemplate = !0;
                Y.__get_referrer.priorityOverride = 0
            })(function(b) {
                var c = "any" === b.vtp_urlParts ? null : [];
                c && (b.vtp_protocol && c.push("protocol"), b.vtp_host && c.push("host"), b.vtp_port && c.push("port"), b.vtp_path && c.push("path"), b.vtp_extension && c.push("extension"), b.vtp_query && c.push("query"));
                var d = c && "any" !== b.vtp_queriesAllowed ?
                    b.vtp_queryKeys || [] : null,
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f, g, h) {
                        if (g) {
                            if (!m(g)) throw e(f, {}, "URL component must be a string.");
                            if (c && 0 > c.indexOf(g)) throw e(f, {}, "Prohibited URL component: " + g);
                            if ("query" === g && d) {
                                if (!h) throw e(f, {}, "Prohibited from getting entire URL query when query keys are specified.");
                                if (!m(h)) throw e(f, {}, "Query key must be a string.");
                                if (0 > d.indexOf(h)) throw e(f, {}, "Prohibited query key: " + h);
                            }
                        } else if (c) throw e(f, {}, "Prohibited from getting entire URL when components are specified.");
                    },
                    W: a
                }
            })
        }();
    Y.h.inject_script = ["google"],
        function() {
            function a(b, c) {
                return {
                    url: c
                }
            }(function(b) {
                Y.__inject_script = b;
                Y.__inject_script.m = "inject_script";
                Y.__inject_script.isVendorTemplate = !0;
                Y.__inject_script.priorityOverride = 0
            })(function(b) {
                var c = b.vtp_urls || [],
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e, f) {
                        if (!m(f)) throw d(e, {}, "Script URL must be a string.");
                        try {
                            if (nf(li(f), c)) return
                        } catch (g) {
                            throw d(e, {}, "Invalid script URL filter.");
                        }
                        throw d(e, {}, "Prohibited script URL: " + f);
                    },
                    W: a
                }
            })
        }();

    Y.h.cid = ["google"],
        function() {
            (function(a) {
                Y.__cid = a;
                Y.__cid.m = "cid";
                Y.__cid.isVendorTemplate = !0;
                Y.__cid.priorityOverride = 0
            })(function() {
                return Ie.J
            })
        }();

    Y.h.gclidw = ["google"],
        function() {
            var a = ["aw", "dc", "gf", "ha", "gb"];
            (function(b) {
                Y.__gclidw = b;
                Y.__gclidw.m = "gclidw";
                Y.__gclidw.isVendorTemplate = !0;
                Y.__gclidw.priorityOverride = 100
            })(function(b) {
                K(b.vtp_gtmOnSuccess);
                var c, d, e, f;
                b.vtp_enableCookieOverrides && (e = b.vtp_cookiePrefix, c = b.vtp_path, d = b.vtp_domain, b.vtp_enableCookieFlagsFeature && (f = b.vtp_cookieFlags));
                var g = {
                    prefix: e,
                    path: c,
                    domain: d,
                    flags: f
                };
                b.vtp_enableCrossDomainFeature && (b.vtp_enableCrossDomain && !1 === b.vtp_acceptIncoming || (b.vtp_enableCrossDomain ||
                    Vj()) && pk(a, g));
                mk(g);
                sk(["aw", "dc"], g);
                Hk(g);
                var h = e;
                if (b.vtp_enableCrossDomainFeature && b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
                    var k = b.vtp_linkerDomains.toString().replace(/\s+/g, "").split(",");
                    rk(a, k, b.vtp_urlPosition, !!b.vtp_formDecoration, h)
                }
                var n = eu(S.ka);
                ro({
                    eventId: b.vtp_gtmEventId,
                    priorityId: b.vtp_gtmPriorityId,
                    wf: !1,
                    Za: void 0 != n && !1 !== n,
                    Nb: g,
                    se: !0
                });
                b.vtp_enableUrlPassthrough && uk(["aw", "dc", "gb"])
            })
        }();
    Y.h.read_title = ["google"],
        function() {
            (function(a) {
                Y.__read_title = a;
                Y.__read_title.m = "read_title";
                Y.__read_title.isVendorTemplate = !0;
                Y.__read_title.priorityOverride = 0
            })(function() {
                return {
                    assert: function() {},
                    W: function() {
                        return {}
                    }
                }
            })
        }();
    Y.h.process_dom_events = ["google"],
        function() {
            function a(b, c, d) {
                return {
                    targetType: c,
                    eventName: d
                }
            }(function(b) {
                Y.__process_dom_events = b;
                Y.__process_dom_events.m = "process_dom_events";
                Y.__process_dom_events.isVendorTemplate = !0;
                Y.__process_dom_events.priorityOverride = 0
            })(function(b) {
                for (var c = b.vtp_targets || [], d = b.vtp_createPermissionError, e = {}, f = 0; f < c.length; f++) {
                    var g = c[f];
                    e[g.targetType] = e[g.targetType] || [];
                    e[g.targetType].push(g.eventName)
                }
                return {
                    assert: function(h, k, n) {
                        if (!e[k]) throw d(h, {}, "Prohibited event target " +
                            k + ".");
                        if (-1 === e[k].indexOf(n)) throw d(h, {}, "Prohibited listener registration for DOM event " + n + ".");
                    },
                    W: a
                }
            })
        }();

    Y.h.aev = ["google"],
        function() {
            function a(r, u, t, v, x) {
                x || (x = "element");
                var y = u + "." + t,
                    w;
                if (n.hasOwnProperty(y)) w = n[y];
                else {
                    var A = r[x];
                    if (A && (w = v(A), n[y] = w, p.push(y), 35 < p.length)) {
                        var B = p.shift();
                        delete n[B]
                    }
                }
                return w
            }

            function b(r, u, t) {
                var v = r[q[u]];
                return void 0 !== v ? v : t
            }

            function c(r, u) {
                if (!r) return !1;
                var t = d(bu());
                Ea(u) || (u = String(u || "").replace(/\s+/g, "").split(","));
                for (var v = [t], x = 0; x < u.length; x++) {
                    var y = u[x];
                    if (y.hasOwnProperty("is_regex"))
                        if (y.is_regex) try {
                            y = new RegExp(y.domain)
                        } catch (B) {
                            continue
                        } else y =
                            y.domain;
                    var w = d(r);
                    if (y instanceof RegExp) {
                        if (y.test(w)) return !1
                    } else {
                        var A = y;
                        if (0 != A.length) {
                            if (0 <= w.indexOf(A)) return !1;
                            v.push(d(A))
                        }
                    }
                }
                return !yy(r, v)
            }

            function d(r) {
                k.test(r) || (r = "http://" + r);
                return ji(li(r), "HOST", !0)
            }

            function e(r, u, t, v) {
                switch (r) {
                    case "SUBMIT_TEXT":
                        return a(u, t, "FORM." + r, f, "formSubmitElement") || v;
                    case "LENGTH":
                        var x = a(u, t, "FORM." + r, g);
                        return void 0 === x ? v : x;
                    case "INTERACTED_FIELD_ID":
                        return h(u, "id", v);
                    case "INTERACTED_FIELD_NAME":
                        return h(u, "name", v);
                    case "INTERACTED_FIELD_TYPE":
                        return h(u,
                            "type", v);
                    case "INTERACTED_FIELD_POSITION":
                        var y = u.interactedFormFieldPosition;
                        return void 0 === y ? v : y;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var w = u.interactSequenceNumber;
                        return void 0 === w ? v : w;
                    default:
                        return v
                }
            }

            function f(r) {
                switch (r.tagName.toLowerCase()) {
                    case "input":
                        return Sb(r, "value");
                    case "button":
                        return Tb(r);
                    default:
                        return null
                }
            }

            function g(r) {
                if ("form" === r.tagName.toLowerCase() && r.elements) {
                    for (var u = 0, t = 0; t < r.elements.length; t++) It(r.elements[t]) && u++;
                    return u
                }
            }

            function h(r, u, t) {
                var v = r.interactedFormField;
                return v && Sb(v, u) || t
            }
            var k = /^https?:\/\//i,
                n = {},
                p = [],
                q = {
                    ATTRIBUTE: "elementAttribute",
                    CLASSES: "elementClasses",
                    ELEMENT: "element",
                    ID: "elementId",
                    HISTORY_CHANGE_SOURCE: "historyChangeSource",
                    HISTORY_NEW_STATE: "newHistoryState",
                    HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                    HISTORY_OLD_STATE: "oldHistoryState",
                    HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                    TARGET: "elementTarget"
                };
            (function(r) {
                Y.__aev = r;
                Y.__aev.m = "aev";
                Y.__aev.isVendorTemplate = !0;
                Y.__aev.priorityOverride = 0
            })(function(r) {
                var u = r.vtp_gtmEventId,
                    t = r.vtp_defaultValue,
                    v = r.vtp_varType,
                    x = r.vtp_gtmCachedValues.gtm;
                switch (v) {
                    case "TAG_NAME":
                        var y = x.element;
                        return y && y.tagName || t;
                    case "TEXT":
                        return a(x, u, v, Tb) || t;
                    case "URL":
                        var w;
                        a: {
                            var A = String(x.elementUrl || t || ""),
                                B = li(A),
                                E = String(r.vtp_component || "URL");
                            switch (E) {
                                case "URL":
                                    w = A;
                                    break a;
                                case "IS_OUTBOUND":
                                    w = c(A, r.vtp_affiliatedDomains);
                                    break a;
                                default:
                                    w = ji(B, E, r.vtp_stripWww, r.vtp_defaultPages, r.vtp_queryKey)
                            }
                        }
                        return w;
                    case "ATTRIBUTE":
                        var C;
                        if (void 0 === r.vtp_attribute) C = b(x, v, t);
                        else {
                            var D = x.element;
                            C = D && Sb(D, r.vtp_attribute) ||
                                t || ""
                        }
                        return C;
                    case "MD":
                        var F = r.vtp_mdValue,
                            R = a(x, u, "MD", Ut);
                        return F && R ? Xt(R, F) || t : R || t;
                    case "FORM":
                        return e(String(r.vtp_component || "SUBMIT_TEXT"), x, u, t);
                    default:
                        var J = b(x, v, t);
                        mu(J, "aev", r.vtp_gtmEventId);
                        return J
                }
            })
        }();
    Y.h.gas = ["google"],
        function() {
            (function(a) {
                Y.__gas = a;
                Y.__gas.m = "gas";
                Y.__gas.isVendorTemplate = !0;
                Y.__gas.priorityOverride = 0
            })(function(a) {
                var b = oc(a),
                    c = b;
                c[Kd.Jb] = null;
                c[Kd.hf] = null;
                var d = b = c;
                d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
                var e = d.vtp_cookieDomain;
                void 0 !== e && (d.vtp_fieldsToSet.push({
                    fieldName: "cookieDomain",
                    value: e
                }), delete d.vtp_cookieDomain);
                return b
            })
        }();

    Y.h.read_data_layer = ["google"],
        function() {
            function a(b, c) {
                return {
                    key: c
                }
            }(function(b) {
                Y.__read_data_layer = b;
                Y.__read_data_layer.m = "read_data_layer";
                Y.__read_data_layer.isVendorTemplate = !0;
                Y.__read_data_layer.priorityOverride = 0
            })(function(b) {
                var c = b.vtp_keyPatterns || [],
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e, f) {
                        if (!m(f)) throw d(e, {}, "Keys must be strings.");
                        try {
                            if (gf(f, c)) return
                        } catch (g) {
                            throw d(e, {}, "Invalid key filter.");
                        }
                        throw d(e, {}, "Prohibited read from data layer variable: " + f +
                            ".");
                    },
                    W: a
                }
            })
        }();
    Y.h.awct = ["google"],
        function() {
            function a(b, c, d) {
                return function(e, f, g) {
                    c[e] = "DATA_LAYER" === d ? eu(g) : b[f]
                }
            }(function(b) {
                Y.__awct = b;
                Y.__awct.m = "awct";
                Y.__awct.isVendorTemplate = !0;
                Y.__awct.priorityOverride = 0
            })(function(b) {
                var c = !b.hasOwnProperty("vtp_enableConversionLinker") || !!b.vtp_enableConversionLinker,
                    d = !!b.vtp_enableEnhancedConversions || !!b.vtp_enableEnhancedConversion,
                    e = zy(b.vtp_customVariables, "varName", "value") || {},
                    f = {},
                    g = (f[S.oa] = b.vtp_conversionValue || 0, f[S.ma] = b.vtp_currencyCode, f[S.ub] =
                        b.vtp_orderId, f[S.Ta] = b.vtp_conversionCookiePrefix, f[S.Da] = c, f[S.Gd] = d, f[S.ka] = eu(S.ka), f);
                b.vtp_rdp && (g[S.Xc] = !0);
                if (b.vtp_enableCustomParams)
                    for (var h in e) S.ag.hasOwnProperty(h) || (g[h] = e[h]);
                if (b.vtp_enableProductReporting) {
                    var k = a(b, g, b.vtp_productReportingDataSource);
                    k(S.Oe, "vtp_awMerchantId", "aw_merchant_id");
                    k(S.Me, "vtp_awFeedCountry", "aw_feed_country");
                    k(S.Ne, "vtp_awFeedLanguage", "aw_feed_language");
                    k(S.Le, "vtp_discount", "discount");
                    k(S.fa, "vtp_items", "items")
                }
                g[S.aa] = eu("developer_id");
                b.vtp_enableShippingData && (g[S.Qd] = b.vtp_deliveryPostalCode, g[S.Ue] = b.vtp_estimatedDeliveryDate, g[S.Hd] = b.vtp_deliveryCountry, g[S.Se] = b.vtp_shippingFee);
                b.vtp_transportUrl && (g[S.ba] = b.vtp_transportUrl);
                if (b.vtp_enableNewCustomerReporting) {
                    var n = a(b, g, b.vtp_newCustomerReportingDataSource);
                    n(S.Ye, "vtp_awNewCustomer", "new_customer");
                    n(S.Pe, "vtp_awCustomerLTV", "customer_lifetime_value")
                }
                var p;
                a: {
                    if (b.vtp_enableEnhancedConversion) {
                        var q = b.vtp_cssProvidedEnhancedConversionValue || b.vtp_enhancedConversionObject;
                        if (q) {
                            p = {
                                enhanced_conversions_mode: "manual",
                                enhanced_conversions_manual_var: q
                            };
                            break a
                        }
                    }
                    p = void 0
                }
                var r = p;
                if (r) {
                    var u = {};
                    g[S.Te] = (u[b.vtp_conversionLabel] = r, u)
                }
                var t = Gn(Dn(xn(g), b.vtp_gtmOnSuccess), b.vtp_gtmOnFailure);
                t.isGtmEvent = !0;
                vp("AW-" + b.vtp_conversionId + "/" + b.vtp_conversionLabel,
                    S.Aa, Date.now(), t)
            })
        }();
    Y.h.remm = ["google"],
        function() {
            (function(a) {
                Y.__remm = a;
                Y.__remm.m = "remm";
                Y.__remm.isVendorTemplate = !0;
                Y.__remm.priorityOverride = 0
            })(function(a) {
                for (var b = a.vtp_input, c = a.vtp_map || [], d = a.vtp_fullMatch, e = a.vtp_ignoreCase ? "gi" : "g", f = a.vtp_defaultValue, g = 0; g < c.length; g++) {
                    var h = c[g].key || "";
                    d && (h = "^" + h + "$");
                    var k = new RegExp(h, e);
                    if (k.test(b)) {
                        var n = c[g].value;
                        a.vtp_replaceAfterMatch && (n = String(b).replace(k, n));
                        f = n;
                        break
                    }
                }
                mu(f, "remm", a.vtp_gtmEventId);
                return f
            })
        }();

    Y.h.logging = ["google"],
        function() {
            function a() {
                return {}
            }(function(b) {
                Y.__logging = b;
                Y.__logging.m = "logging";
                Y.__logging.isVendorTemplate = !0;
                Y.__logging.priorityOverride = 0
            })(function(b) {
                var c = b.vtp_environments || "debug",
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e) {
                        var f;
                        if (f = "all" !== c && !0) {
                            var g = !1;
                            f = !g
                        }
                        if (f) throw d(e, {}, "Logging is not enabled in all environments");
                    },
                    W: a
                }
            })
        }();

    Y.h.smm = ["google"],
        function() {
            (function(a) {
                Y.__smm = a;
                Y.__smm.m = "smm";
                Y.__smm.isVendorTemplate = !0;
                Y.__smm.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_input,
                    c = zy(a.vtp_map, "key", "value") || {},
                    d = c.hasOwnProperty(b) ? c[b] : a.vtp_defaultValue;
                mu(d, "smm", a.vtp_gtmEventId);
                return d
            })
        }();

    Y.h.paused = [],
        function() {
            (function(a) {
                Y.__paused = a;
                Y.__paused.m = "paused";
                Y.__paused.isVendorTemplate = !0;
                Y.__paused.priorityOverride = 0
            })(function(a) {
                K(a.vtp_gtmOnFailure)
            })
        }();

    Y.h.html = ["customScripts"],
        function() {
            function a(d, e, f, g) {
                return function() {
                    try {
                        if (0 < e.length) {
                            var h = e.shift(),
                                k = a(d, e, f, g);
                            if ("SCRIPT" == String(h.nodeName).toUpperCase() && "text/gtmscript" == h.type) {
                                var n = I.createElement("script");
                                n.async = !1;
                                n.type = "text/javascript";
                                n.id = h.id;
                                n.text = h.text || h.textContent || h.innerHTML || "";
                                h.charset && (n.charset = h.charset);
                                var p = h.getAttribute("data-gtmsrc");
                                p && (n.src = p, Ib(n, k));
                                d.insertBefore(n, null);
                                p || k()
                            } else if (h.innerHTML && 0 <= h.innerHTML.toLowerCase().indexOf("<script")) {
                                for (var q = []; h.firstChild;) q.push(h.removeChild(h.firstChild));
                                d.insertBefore(h, null);
                                a(h, q, k, g)()
                            } else d.insertBefore(h, null), k()
                        } else f()
                    } catch (r) {
                        K(g)
                    }
                }
            }

            function b(d) {
                if (I.body) {
                    var e = d.vtp_gtmOnFailure,
                        f = nu(d.vtp_html, d.vtp_gtmOnSuccess, e),
                        g = f.Jj,
                        h = f.onSuccess;
                    if (d.vtp_useIframe) {} else d.vtp_supportDocumentWrite ? c(g, h, e) : a(I.body, Ub(g), h, e)()
                } else $t(function() {
                    b(d)
                }, 200)
            }
            var c = function(d, e, f) {
                Fm(function() {
                    var g = google_tag_manager_external.postscribe.getPostscribe(),
                        h = {
                            done: e
                        },
                        k = I.createElement("div");
                    k.style.display = "none";
                    k.style.visibility = "hidden";
                    I.body.appendChild(k);
                    try {
                        g(k, d, h)
                    } catch (n) {
                        K(f)
                    }
                })
            };
            Y.__html = b;
            Y.__html.m =
                "html";
            Y.__html.isVendorTemplate = !0;
            Y.__html.priorityOverride = 0
        }();




    Y.h.img = ["customPixels"],
        function() {
            (function(a) {
                Y.__img = a;
                Y.__img.m = "img";
                Y.__img.isVendorTemplate = !0;
                Y.__img.priorityOverride = 0
            })(function(a) {
                var b = Ub('<a href="' + a.vtp_url + '"></a>')[0].href,
                    c = a.vtp_cacheBusterQueryParam;
                if (a.vtp_useCacheBuster) {
                    c || (c = "gtmcb");
                    var d = b.charAt(b.length - 1),
                        e = 0 <= b.indexOf("?") ? "?" == d || "&" == d ? "" : "&" : "?";
                    b += e + c + "=" + a.vtp_randomNumber
                }
                xy(b, a.vtp_gtmOnSuccess, a.vtp_gtmOnFailure)
            })
        }();



    Y.h.lcl = [],
        function() {
            function a() {
                var c = W("document"),
                    d = 0,
                    e = function(f) {
                        var g = f.target;
                        if (g && 3 !== f.which && !(f.Jf || f.timeStamp && f.timeStamp === d)) {
                            d = f.timeStamp;
                            g = Vb(g, ["a", "area"], 100);
                            if (!g) return f.returnValue;
                            var h = f.defaultPrevented || !1 === f.returnValue,
                                k = lt("lcl", h ? "nv.mwt" : "mwt", 0),
                                n;
                            n = h ? lt("lcl", "nv.ids", []) : lt("lcl", "ids", []);
                            if (n.length) {
                                var p = ht(g, "gtm.linkClick", n);
                                if (b(f, g, c) && !h && k && g.href) {
                                    var q = !!Ga(String(Yb(g, "rel") || "").split(" "), function(v) {
                                        return "noreferrer" === v.toLowerCase()
                                    });
                                    q && kg(36);
                                    var r = W((Yb(g, "target") || "_self").substring(1)),
                                        u = !0,
                                        t = Ws(function() {
                                            var v;
                                            if (v = u && r) {
                                                var x;
                                                a: if (q) {
                                                    var y;
                                                    try {
                                                        y = new MouseEvent(f.type, {
                                                            bubbles: !0
                                                        })
                                                    } catch (w) {
                                                        if (!c.createEvent) {
                                                            x = !1;
                                                            break a
                                                        }
                                                        y = c.createEvent("MouseEvents");
                                                        y.initEvent(f.type, !0, !0)
                                                    }
                                                    y.Jf = !0;
                                                    f.target.dispatchEvent(y);
                                                    x = !0
                                                } else x = !1;
                                                v = !x
                                            }
                                            v && (r.location.href = Yb(g, "href"))
                                        }, k);
                                    if (fu(p, t, k)) u = !1;
                                    else return f.preventDefault && f.preventDefault(), f.returnValue = !1
                                } else fu(p, function() {}, k || 2E3);
                                return !0
                            }
                        }
                    };
                Qb(c, "click", e, !1);
                Qb(c, "auxclick",
                    e, !1)
            }

            function b(c, d, e) {
                if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey) return !1;
                var f = Yb(d, "href"),
                    g = f.indexOf("#"),
                    h = Yb(d, "target");
                if (h && "_self" !== h && "_parent" !== h && "_top" !== h || 0 === g) return !1;
                if (0 < g) {
                    var k = du(f),
                        n = du(e.location);
                    return k !== n
                }
                return !0
            }(function(c) {
                Y.__lcl = c;
                Y.__lcl.m = "lcl";
                Y.__lcl.isVendorTemplate = !0;
                Y.__lcl.priorityOverride = 0
            })(function(c) {
                var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
                    e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation,
                    f = Number(c.vtp_waitForTagsTimeout);
                if (!f || 0 >= f) f = 2E3;
                var g = c.vtp_uniqueTriggerId || "0";
                if (d) {
                    var h = function(n) {
                        return Math.max(f, n)
                    };
                    kt("lcl", "mwt", h, 0);
                    e || kt("lcl", "nv.mwt", h, 0)
                }
                var k = function(n) {
                    n.push(g);
                    return n
                };
                kt("lcl", "ids", k, []);
                e || kt("lcl", "nv.ids", k, []);
                ku("lcl") || (a(), lu("lcl"));
                K(c.vtp_gtmOnSuccess)
            })
        }();


    Y.h.get_cookies = ["google"],
        function() {
            function a(b, c) {
                return {
                    name: c
                }
            }(function(b) {
                Y.__get_cookies = b;
                Y.__get_cookies.m = "get_cookies";
                Y.__get_cookies.isVendorTemplate = !0;
                Y.__get_cookies.priorityOverride = 0
            })(function(b) {
                var c = b.vtp_cookieAccess || "specific",
                    d = b.vtp_cookieNames || [],
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f, g) {
                        if (!m(g)) throw e(f, {}, "Cookie name must be a string.");
                        if ("any" !== c && !("specific" === c && 0 <= d.indexOf(g))) throw e(f, {}, 'Access to cookie "' + g + '" is prohibited.');
                    },
                    W: a
                }
            })
        }();
    Y.h.read_character_set = ["google"],
        function() {
            (function(a) {
                Y.__read_character_set = a;
                Y.__read_character_set.m = "read_character_set";
                Y.__read_character_set.isVendorTemplate = !0;
                Y.__read_character_set.priorityOverride = 0
            })(function() {
                return {
                    assert: function() {},
                    W: function() {
                        return {}
                    }
                }
            })
        }();
    var YB = {};
    YB.macro = function(a) {
        if (et.pf.hasOwnProperty(a)) return et.pf[a]
    }, YB.onHtmlSuccess = et.kh(!0), YB.onHtmlFailure = et.kh(!1);
    YB.dataLayer = Oh;
    YB.callback = function(a) {
        yh.hasOwnProperty(a) && Ca(yh[a]) && yh[a]();
        delete yh[a]
    };
    YB.bootstrap = 0;
    YB._spx = !1;
    (function(a) {
        if (!z["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (I.referrer) {
                var c = li(I.referrer);
                b = "cct.google" === ii(c, "host")
            }
            if (!b) {
                var d = Pi("googTaggyReferrer");
                b = d.length && d[0].length
            }
            b && (z["__TAGGY_INSTALLED"] = !0, Mb("https://cct.google/taggy/agent.js"))
        }
        var f = function(q) {
                var r = "GTM",
                    u = "GTM";
                var t = z["google.tagmanager.debugui2.queue"];
                t || (t = [], z["google.tagmanager.debugui2.queue"] = t, Mb("https://" + oh.Hc + "/debug/bootstrap?id=" + Ie.J + "&src=" + u + "&cond=" + q + "&gtm=" + Mn()));
                var v = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: Gb,
                        containerProduct: r,
                        debug: !1,
                        id: Ie.J
                    }
                };
                v.data.resume = function() {
                    a()
                };
                oh.bi && (v.data.initialPublish = !0);
                t.push(v)
            },
            g = void 0,
            h = ji(z.location, "query", !1, void 0, "gtm_debug");
        dt(h) && (g = 2);
        if (!g && I.referrer) {
            var k = li(I.referrer);
            "tagassistant.google.com" === ii(k, "host") && (g = 3)
        }
        if (!g) {
            var n = Pi("__TAG_ASSISTANT");
            n.length && n[0].length && (g = 4)
        }
        if (!g) {
            var p = I.documentElement.getAttribute("data-tag-assistant-present");
            dt(p) && (g = 5)
        }
        g && Gb ? f(g) : a()
    })(function() {
        var a = !1;
        a = !0;
        a && Qm("INIT");
        ng().o();
        jo();
        Xj.enable_gbraid_cookie_write = !0;
        var b = !!T[Ie.J];
        if (b) {
            var c = T.zones;
            c && c.unregisterChild(Yk());
        } else {
            for (var d = Zk(), e = 0; e < d.length; e++) Dr(d[e], Ie.J);
            for (var f = data.resource || {}, g = f.macros || [], h = 0; h < g.length; h++) ge.push(g[h]);
            for (var k = f.tags || [], n = 0; n < k.length; n++) je.push(k[n]);
            for (var p = f.predicates || [], q = 0; q < p.length; q++) ie.push(p[q]);
            for (var r = f.rules || [], u = 0; u < r.length; u++) {
                for (var t = r[u], v = {}, x = 0; x < t.length; x++) v[t[x][0]] = Array.prototype.slice.call(t[x], 1);
                he.push(v)
            }
            le = Y;
            me = Pu;
            Me = new Le;
            var y = data.sandboxed_scripts,
                w = data.security_groups,
                A = data.runtime || [],
                B = data.runtime_lines;
            ry = new Hd;
            uy();
            fe = sy();
            var E = ry,
                C = oy();
            kb(E.g, "require", C);
            for (var D = 0; D < A.length; D++) {
                var F = A[D];
                if (!Ea(F) || 3 > F.length) {
                    if (0 === F.length) continue;
                    break
                }
                B && B[D] && B[D].length && xe(F, B[D]);
                ry.execute(F)
            }
            if (void 0 !== y)
                for (var R = ["sandboxedScripts"], J = 0; J < y.length; J++) {
                    var Q = y[J].replace(/^_*/, "");
                    Gh[Q] = R
                }
            vy(w);
            T[Ie.J] = YB;
            for (var O = al(), P = Yk(), L = 0; L < P.length; L++) O.container[P[L]] = !0;
            for (var Z = Zk(), ba = 0; ba < Z.length; ba++) O.destination[Z[ba]] = !0;
            O.canonical[Ie.Gc] = !0;
            Wa(Gh, Y.h);
            ne = ne || et;
            qe = Ee;
            ct();
            Am = !1;
            Bm = 0;
            if ("interactive" == I.readyState && !I.createEventObject || "complete" == I.readyState) Dm();
            else {
                Qb(I, "DOMContentLoaded", Dm);
                Qb(I, "readystatechange", Dm);
                if (I.createEventObject && I.documentElement.doScroll) {
                    var U = !0;
                    try {
                        U = !z.frameElement
                    } catch (Qa) {}
                    U &&
                        Em()
                }
                Qb(z, "load", Dm)
            }
            vs = !1;
            "complete" === I.readyState ? xs() : Qb(z, "load", xs);
            cm && z.setInterval(Wl, 864E5);

            google_tag_manager_external.postscribe.installPostscribe();
            xh = Ta();
            if (a) {
                var Ia = Rm("INIT");
                nm("S", Ia);
            }
        }
    });

})()