'use strict';

const customStyle = {
    cssFileName : "style/website.css",
    cssCode : `
 /*
 * By @pwedu
 * Author: https://www.kancloud.cn/@xiak
 * Note: 这些样式可能不能完全满足你的需求，请自行删改。
 */
/* Start------------Thanks @xiak from KanCload ------------*/
/* 美化引用段落样式 */
blockquote {
    padding: 15px;
    margin-bottom: 20px;
    position: relative;
}

/* 下方阴影部分 */
/* 暂时保留，不推荐使用图片——加载速度、IP（域名）白名单等因素 */
blockquote:after {
    content: '';
    height: 20px;
    background-image: url(http://oxisev8qm.bkt.clouddn.com/18-4-12/47765313.jpg);
    background-size: 50% 100%;
    background-repeat: no-repeat;
    position: absolute;
    width: 100%;
    bottom: -20px;
    left: -4px;
}

/* 改变默认的引用段落样式 */
blockquote.default {
    border-left: 4px solid #2ebd88;
    background: #f5f5f5;
    color: #555;
}

/* 不仅能改变样式，还能新增样式class：增加一个引用样式，使用方法： >[nice] XXX */
blockquote.nice {
    border-left-color: #2ac152;
    color: #22c34b;
    background-color: #e2ffea;
}

/* 改变文档标题样式 */
.m-manual .manual-title .text {
    font-size:24px;
    font-weight:400;
}

/* 代码块换行 */
pre, code { 
    white-space: pre-wrap!important; 
    word-wrap: break-word!important; 
}
/* 美化代码小块 */
pre code {
    border: none;
    padding: 0px;
    margin: 0px;
    background: none;
}
code {
    background: #f9fafa;
    border: 1px solid #ded9d9;
    margin: 0px 5px;
    padding: 2px 6px;
}
/* 使得更显眼一点 */
b, strong {
    text-shadow: 0 1px white;
}
/* 图片描述 */
.img-desc {
    color: #b9b9b9; text-align: center; font-size: 12px;
}

/* 更好看的分割线样式 */
hr {
    border: 0;
    border-bottom: 1px solid #ddd;
    margin-bottom: 25px;
    margin-top: 25px;
    box-shadow: 0 2px 0 rgba(229, 229, 229, 0.4);
}

li {
    margin: 10px 0;
}

a {
    /* 腾讯的产品用户体验最好，腾讯系产品爱用的链接颜色 */
    color: #3481cf;
}

a:hover {
    color: #00a4ff;
}
/* ------------Thanks @xiak from KanCload ------------ End*/
 `
}

const bookConf = {
    confFileName : "book.json",
    confJSON : `
{
    "plugins":["navigation","highlight"],
    "pluginsConfig":{
        "navigation":{
            "logo":{
                "image":"https://",
                "url":"https://www.kancloud.cn/@pwedu"
            },
            "nav":[
                {
                    "title":"导航1 请自行修改",
                    "url":"https://www.npmjs.com/package/kc-cli"
                },
                {
                    "title":"导航2 请自行修改",
                    "url":"https://github.com/YYago/kc-cli"
                },
                {
                    "title":"导航3 请自行修改",
                    "url":"https://github.com/YYago/kc-cli/issues"
                }                
                ]
            }
        }
    }
}        
      
`
}
const kcOutDir = {
    html : './KCout/HTML/',
    docx : './KCout/Docx/',
    pdf : './KCout/PDF/',
    epub : './KCout/EPUB/'
}
const kcReadme = {
    name:'README.md',
    content:`
# 文档概要

`
}
module.exports = {
    customStyle,
    bookConf,
    kcOutDir,
}