(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"1Oj2":function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return p}));var i=s("q1tI"),a=s.n(i),o=s("MX0m"),c=s.n(o),r=s("fdfZ"),n=a.a.createElement;function l(){var e=Object(i.useState)(""),t=e[0],s=e[1],a=Object(i.useState)("rowlist"),o=a[0],l=a[1];return n("div",{className:"jsx-1564824899 container"},n("div",{className:"jsx-1564824899 row"},n("div",{className:"jsx-1564824899 categoryList"},n("span",{onClick:function(){s("")},className:"jsx-1564824899 "+"categoryList__item ".concat(""==t&&"selected")},"ALL"),n("span",{onClick:function(){s("publishing")},className:"jsx-1564824899 "+"categoryList__item ".concat("publishing"==t&&"selected")},"FRONT-END"),n("span",{onClick:function(){s("software")},className:"jsx-1564824899 "+"categoryList__item ".concat("software"==t&&"selected")},"BACK-END")),n("div",{className:"jsx-1564824899 viewmodes"},n("i",{onClick:function(){l("rowlist")},className:"jsx-1564824899 "+"viewmode ".concat("rowlist"==o&&"selected")},n("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"#333",xmlns:"http://www.w3.org/2000/svg",className:"jsx-1564824899"},n("path",{d:"M4.33331 15.1665H8.41174V10.8332H4.33331V15.1665ZM4.33331 20.5832H8.41174V16.2498H4.33331V20.5832ZM4.33331 9.74984H8.41174V5.4165H4.33331V9.74984ZM9.43135 15.1665H21.6666V10.8332H9.43135V15.1665ZM9.43135 20.5832H21.6666V16.2498H9.43135V20.5832ZM9.43135 5.4165V9.74984H21.6666V5.4165H9.43135Z",className:"jsx-1564824899"})),n("span",{className:"jsx-1564824899 screen_out"},"Show articles in Row List")),n("i",{onClick:function(){l("tile")},className:"jsx-1564824899 "+"viewmode ".concat("tile"==o&&"selected")},n("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"#333",xmlns:"http://www.w3.org/2000/svg",className:"jsx-1564824899"},n("path",{d:"M4.33337 13.8424H12.0371V5.4165H4.33337V13.8424ZM4.33337 20.5832H12.0371V15.5276H4.33337V20.5832ZM13.963 20.5832H21.6667V12.1572H13.963V20.5832ZM13.963 5.4165V10.4721H21.6667V5.4165H13.963Z",className:"jsx-1564824899"})),n("span",{className:"jsx-1564824899 screen_out"},"Show articles in Tile Grid")))),n("section",{className:"jsx-1564824899 "+"card-container ".concat(o)},r.workList.filter((function(e){return e.category.includes(t)})).map((function(e,t){return n("article",{key:t,className:"jsx-1564824899 card"},n("a",{href:e.href,title:"Link to ".concat(e.title),className:"jsx-1564824899 card__link"},n("figure",{className:"jsx-1564824899 fig_img"},n("img",{src:e.src,alt:"".concat(e.title," thumnail"),className:"jsx-1564824899"})),n("figure",{className:"jsx-1564824899 fig_txt"},n("span",{className:"jsx-1564824899 workList__item__type"},e.type),n("span",{className:"jsx-1564824899 workList__item__title"},e.title),n("span",{className:"jsx-1564824899 workList__item__desc"},e.desc),n("span",{className:"jsx-1564824899 workList__item__spec"},e.spec.map((function(e,t){return n("span",{key:t,className:"jsx-1564824899 spec__item"},"".concat(e))}))))))}))),n(c.a,{id:"1564824899"},[".workList__item__type.jsx-1564824899{font-size:1em;color:#1d58ff;}",".workList__item__title.jsx-1564824899{font-size:1.875em;}",".workList__item__desc.jsx-1564824899{font-size:1.05em;}",".workList__item__spec.jsx-1564824899{font-size:0.9em;}",".spec__item.jsx-1564824899{margin-right:1.5em;}",".row.jsx-1564824899{margin:20px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}",".categoryList__item.jsx-1564824899,.viewmodes__item.jsx-1564824899{cursor:pointer;font-weight:500;}",".categoryList__item.jsx-1564824899{margin-right:20px;}",".viewmode.jsx-1564824899{margin-left:20px;}",".categoryList__item.jsx-1564824899:hover,.categoryList__item.selected.jsx-1564824899{border-bottom:1px solid #1d58ff;color:#1d58ff;}",".viewmode.jsx-1564824899:hover>svg.jsx-1564824899,.viewmode.selected.jsx-1564824899>svg.jsx-1564824899{cursor:pointer;fill:#1d58ff;}",".container.jsx-1564824899{width:1024px;margin:0 auto;}",".card-container.jsx-1564824899{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".card-container.rowlist.jsx-1564824899{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}",".card-container.tile.jsx-1564824899{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}",".card-container.tile.jsx-1564824899 .card.jsx-1564824899{width:24%;margin-right:1%;}",".card-container.tile.jsx-1564824899 .fig_img.jsx-1564824899{max-width:initial;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".card.jsx-1564824899{background:#fff;box-shadow:0 0 0 1px #ccc;border-radius:10px;margin-bottom:10px;}",".card.jsx-1564824899>.card__link.jsx-1564824899{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px;}",".card-container.tile.jsx-1564824899 .card__link.jsx-1564824899{display:block;}",".card__link.jsx-1564824899>figure.jsx-1564824899{-webkit-flex:1;-ms-flex:1;flex:1;}",".fig_img.jsx-1564824899{max-width:150px;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;height:100%;}",".fig_txt.jsx-1564824899{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}"]))}var m=a.a.createElement;function p(){return m("div",{className:"container"},m(l,null))}},cDxr:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/work",function(){return s("1Oj2")}])},fdfZ:function(e){e.exports=JSON.parse('{"title":"MOONILJOO","author":"il-joo,moon","sitename":"MOONILJOO WEBSITE","type":"website","locale":"ko_KR","image":"https://cdn.dribbble.com/users/332943/screenshots/3461038/recruitment-company-website-design.jpg","description":"MOONILJOO WEBSITE","url":"","navList":[{"title":"work"},{"title":"extras"},{"title":"about"}],"snsList":[{"show":true,"title":"github","src":"/images/icons/github.svg","href":"https://github.com/mooniljoo"},{"show":false,"title":"instagram","src":"/images/icons/instagram.svg","href":"https://www.instagram.com/oneweek.m"},{"show":false,"title":"soundcloud","src":"/images/icons/soundcloud.svg","href":"https://soundcloud.com/oneweek123"},{"show":false,"title":"behance","src":"/images/icons/behance.svg","href":"https://www.behance.net/moonezekiel"},{"show":true,"title":"linkedin","src":"/images/icons/linkedin.svg","href":"https://www.linkedin.com/in/oneweek/"},{"show":false,"title":"tumblr","src":"/images/icons/tumblr.svg","href":"https://lovejoylove.tumblr.com/"},{"show":true,"title":"email","src":"/images/icons/email.svg","href":"mailto://ezekielmoon@naver.com"}],"workList":[{"category":"software","type":"software","title":"Update Tester","desc":"\uc790\ub3d9\uc5c5\ub370\uc774\ud2b8 \uccb4\ud06c \ubc0f \uc124\uce58 \ub85c\uc9c1 \ud504\ub85c\ud1a0\ud0c0\uc785","href":"https://github.com/mooniljoo/update_tester","src":"/images/terminal.svg","date":"20.02.11 ~ 20.01.19","term":"","spec":["Python","Flask","Tkinter"]},{"category":"software","type":"software","title":"QR Scanner","desc":"OpenCV \ud65c\uc6a9 QR\uc2a4\uce94 \ud504\ub85c\uadf8\ub7a8","href":"https://github.com/mooniljoo/qr_scanner","src":"/images/terminal.svg","date":"20.02.01 ~ 20.02.07","term":"","spec":["Python","OpenCV","PyQt5"]},{"category":"front-end","type":"pwa","title":"\uc6e8\uc774\ud2b8\ud2b8\ub808\uc774\ub2dd \ub8e8\ud2f4 \uae30\ub85d, \uc800\uc7a5","desc":"\uc6e8\uc774\ud2b8\ud2b8\ub808\uc774\ub2dd \ub8e8\ud2f4 \uae30\ub85d, \uc800\uc7a5","href":"https://mooniljoo.github.io/web_my_workout_report/","src":"/images/browser.svg","date":"20.02.19 ~","term":"","spec":["React.js","Redux"]},{"category":"publishing","type":"website","title":"anifan","desc":"\ubc18\uc751\ud615, \ud06c\ub85c\uc2a4\ube0c\ub77c\uc6b0\uc9d5","href":"https://www.anifan.io/","src":"/images/browser.svg","date":"18.09.17 ~ 18.10.12","term":"1 month","spec":["HTML5","CSS3","jQuery"]},{"category":"publishing","type":"website","title":"doftech","desc":"\ubc18\uc751\ud615, \ud06c\ub85c\uc2a4\ube0c\ub77c\uc6b0\uc9d5","href":"https://www.doftech.com/","src":"/images/browser.svg","date":"19.03.18 ~ 19.04.08","term":"3 weeks","spec":["HTML5","CSS3","jQuery"]},{"category":"publishing","type":"webapp","title":"alphaypay","desc":"\ubc18\uc751\ud615, \ud06c\ub85c\uc2a4\ube0c\ub77c\uc6b0\uc9d5","href":"https://sm.smnet.io/","src":"/images/browser.svg","date":"19.01.03 ~ 19.05.10","term":"4 months","spec":["HTML5","CSS3","javascript"]},{"category":"publishing","type":"webapp","title":"\ud48b\ubcfc\uad6c\uc7a5 \uc608\uc57d\uad00\ub9ac \uc571 \ud504\ub85c\ud1a0\ud0c0\uc785","desc":"\ubc18\uc751\ud615, \ud06c\ub85c\uc2a4\ube0c\ub77c\uc6b0\uc9d5","href":"http://futsal.anifan.io","src":"/images/browser.svg","date":"19.04.08 ~ 19.05.22","term":"2 months","spec":["HTML5","CSS3","javascript"]},{"category":"publishing","type":"website","title":"MINI USA RENEWAL","desc":"\uadf8\ub9b0\ucef4\ud4e8\ud130 \ud559\uc6d0 \ud504\ub860\ud2b8\uc5d4\ub4dc \uacfc\uc815 \uc218\ub8cc\uc791","href":"https://www.anifan.io/miniusa","src":"/images/browser.svg","date":"18.06.18 ~ 18.07.18","term":"1 month","spec":["HTML5","CSS3","jQuery","PHP"]}]}')}},[["cDxr",0,1,2]]]);