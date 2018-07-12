// ==UserScript==
// @name         Devrant Black Theme
// @namespace    http://devrant.com/
// @version      0.2
// @description  Add the black devrant++ member theme
// @author       7twin
// @match        *devrant.com/*
// @match        *devrant.io/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    var grayscale_images = false;


    var style = `
        :root {
            --colorDarkBlue: black !important;
            --colorDarkerBlue: black !important;
            --colorMidBlue: gray !important;
            --colorNewsText: gray !important;
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
        .menu-notif.notif-badge.notif-2digits,
        .vote-state-upvoted > .vote-scroll > .plusone.btn-vote-circle:nth-child(1),
        .btn-vote-circle:hover,
        .addrant-btn,
        .modal-x:hover,
        .post-rant-bottom,
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
    `;

    if(grayscale_images !== false){
       style = style + `
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
       `;
    }

    GM_addStyle(style);
})();
