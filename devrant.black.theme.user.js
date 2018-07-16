// ==UserScript==
// @name         Devrant Black Theme
// @namespace    http://devrant.com/
// @version      0.7
// @description  Add the black devrant++ member theme to web-devrant, with optional full no color theme
// @author       7twin
// @match        *devrant.com/*
// @match        *devrant.io/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // start - settings
        var grayscale_images = false;
        var slim_style = false;
    // end

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;secure";
    }

    function check_theme_cookie(){
        var current_theme = getCookie("dr_theme");
        if (current_theme != 2) {
            setCookie("dr_theme", "2", 365);
            location.reload();
        }
    }

    var style = `
        :root {
            --colorDarkBlue: black !important;
            --colorDarkerBlue: black !important;
            --colorMidBlue: gray !important;
            --colorNewsText: gray !important;
            --colorBg: black !important;
            --colorSlim: #007ACC !important;
        }

        .rant-avatar-scroll {
            margin-top:40px !important;
        }

        .minusone.btn-vote-circle,
        .plusone.btn-vote-circle,
        .user-score {
            background-color: rgba(255,255,255,0.2) !important;
        }

        .modal-x,
        .signup-details-btn.btn.modal-btn.btn-post-rant,
        .signup-details-btn.btn.modal-btn.btn-post-comment,
        .addcomment-btn,
        .twitter-share,
        .fb-share-button {
            background: rgba(255,255,255,0.6) !important;
        }

        textarea:focus, input:focus{
            outline: none;
        }

        .rantlist-tags a:hover{
            color: white !important;
            border-color: white !important;
        }

        .body-col2 .rantlist li .rantlist-vote-col.vote-state-unvoted .btn-vote-circle:hover,
        .body-col2 .rantlist-vote-col.vote-state-upvoted .plusone,
        .menu-notif.notif-badge,
        .menu-notif.notif-badge.notif-2digits,
        .vote-state-upvoted > .vote-scroll > .plusone.btn-vote-circle:nth-child(1),
        .btn-vote-circle:hover,
        .addrant-btn,
        .modal-x:hover,
        .post-rant-bottom,
        .rant-attached,
        .signup-details-btn.btn.modal-btn.btn-post-rant:hover,
        .banner-btn:hover,
        .signup-details-btn.btn.modal-btn.btn-post-comment:hover,
        .addcomment-btn:hover,
        .twitter-share:hover,
        .fb-share-button:hover {
            color: black !important;
            background-color:white !important;
            border-color: white !important;
        }

        .modal-overlay{
            background-color: rgba(0,0,0,0.7) !important;
        }

        .addrant-btn:hover{
            background-color: rgba(255,255,255,0.8) !important;
        }

        .icon.icon-rantsemoticon2 {
             opacity: 1 !important;
        }

        .icon.icon-rantsemoticon-emoji1,
        .icon.icon-rantsemoticon-base1 {
             display: none !important;
        }

        .nav.scroll,
        .rant-banner {
            background: black !important;
            background-color: black !important;
        }

        .notif-link:hover .notif-body-text,
        .notif-link:hover .notif-body-text,
        .notif-link:hover .notif-time,
        .notif-link:hover a.notif-username {
            color:rgba(255,255,255,0.9) !important;
        }

        .notif-body {
            color:rgba(255,255,255,0.6) !important;
        }

        div.rant-avatar-scroll > img{
            width: 90%;
            border-radius: 1000%;
        }

        .notif-new > .notif-link > .notif-body > .notif-body-text {
            color: #fff;
        }
    `;

    if(grayscale_images !== false){
       style = style + `
            .signup-fields > .modal-btn,
            div.rant-avatar-scroll > img,
            .profile-avatar-bg > img,
            .profile-banner,
            .user-circle > img,
            .notif-avatar > img,
            .user-circle,
            .icon-container,
            .nav-avatar-circle,
            img, .notif-avatar {
                -webkit-filter: grayscale(100%);
                filter: grayscale(100%);
	        }

            .notif-avatar,
            .notif-avatar-link > .icon-container {
                -webkit-filter: grayscale(100%) brightness(0.4);
                filter: grayscale(100%) brightness(0.4);
            }

            .notif-new > .notif-avatar-link > .notif-avatar,
            .notif-new > .notif-avatar-link > .icon-container {
                -webkit-filter: grayscale(100%) brightness(1);
                filter: grayscale(100%) brightness(1);
            }
       `;
    } else if (slim_style !== false) {
        style = style + `

            /* Vote style */
            .body-col2 .rantlist-vote-col.vote-state-unvoted > .plusone,
            .body-col2 .rantlist-vote-col.vote-state-unvoted > .minusone,
            .body-col2 .rantlist-vote-col.vote-state-upvoted > .plusone,
            .body-col2 .rantlist-vote-col.vote-state-upvoted > .minusone {
                color: #666666 !important;
                background-color: transparent !important;
                border: 2px solid #666666 !important;
                transition: 0.2s ease-in-out;
            }


            .body-col2 .rantlist li .rantlist-vote-col.vote-state-unvoted .plusone.btn-vote-circle:hover,
            .body-col2 .rantlist-vote-col.vote-state-unvoted > .plusone:hover,
            .body-col2 .rantlist-vote-col.vote-state-upvoted > .plusone {
                background-color: transparent !important;
                color: #007ACC !important;
                border: 2px solid var(--colorSlim) !important;
            }

            .body-col2 .rantlist li .rantlist-vote-col.vote-state-unvoted .minusone.btn-vote-circle:hover,
            .body-col2 .rantlist-vote-col.vote-state-upvoted > .minusone:hover,
            .body-col2 .rantlist-vote-col.vote-state-unvoted > .minusone:hover {
                background-color: transparent !important;
                color: #D55161 !important;
                border: 2px solid #D55161 !important;
            }
            /* Vote style */

            /* Tag lists colour */
            .rantlist-tags > a[href="/search?term=rant"] {
                color: #D55161;
                border: 1px solid #D55161 !important;
            }

            .rantlist-tags > a[href="/search?term=joke%2Fmeme"] {
                color: #2A8B9D;
                border: 1px solid #2A8B9D !important;
            }

            .rantlist-tags > a[href="/search?term=question"] {
                color: #A973A2;
                border: 1px solid #A973A2 !important;
            }

            .rantlist-tags > a[href="/search?term=devrant"] {
                color: #F99A66;
                border: 1px solid #F99A66 !important;
            }

            .rantlist-tags > a[href="/search?term=random"] {
                color: #7BC8A4;
                border: 1px solid #7BC8A4 !important;
            }
            /* Tag lists colour */

            /* Notif style */
            .notif-avatar,
            .notif-avatar-link > .icon-container {
                -webkit-filter: brightness(0.5);
                filter: brightness(0.5);
            }

            .notif-new > .notif-avatar-link > .notif-avatar,
            .notif-new > .notif-avatar-link > .icon-container {
                -webkit-filter: brightness(1);
                filter: brightness(1);
            }
            /* Notif style */
        `;
    }

    GM_addStyle(style);
    check_theme_cookie();
})();
