(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{338:function(t,e,i){},368:function(t,e,i){"use strict";i(338)},607:function(t,e,i){"use strict";i(99),i(29),i(70);var n=i(337),a=i.n(n),s=i(320),o={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=a()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,i=e.repo,n=e.docsDir,s=void 0===n?"":n,o=e.docsBranch,r=void 0===o?"master":o,d=e.docsRepo,c=void 0===d?i:d;if(t){if("string"==typeof this.$page.frontmatter.editLink)return this.$page.frontmatter.editLink;if(c&&this.$page.relativePath)return this.createEditLink(i,c,s,r,this.$page.relativePath)}return null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"},notSatisfiedLink:function(){var t=a()(this.$page.frontmatter.notSatisfiedLink)?this.$site.themeConfig.notSatisfiedLinks:this.$page.frontmatter.notSatisfiedLink,e=this.$site.themeConfig,i=e.repo,n=e.docsDir,s=void 0===n?"":n,o=e.docsBranch,r=void 0===o?"master":o,d=e.docsRepo,c=void 0===d?i:d;return t&&c&&this.$page.relativePath?this.createNotSatisfiedLink(i,c,s,r,this.$page.relativePath):null},notSatisfiedLinkText:function(){return this.$themeLocaleConfig.notSatisfiedLinkText||this.$site.themeConfig.notSatisfiedLinkText||"Didn't find an answer?"}},methods:{createEditLink:function(t,e,i,n,a){return(s.i.test(e)?e:"https://github.com/".concat(e)).replace(s.a,"")+"/edit"+"/".concat(n,"/")+(i?i.replace(s.a,"")+"/":"")+a},createNotSatisfiedLink:function(t,e,i,n,a){var o=encodeURIComponent("Improve ".concat(this.$page.title)),r=encodeURIComponent('I could not find the information I was looking for on the "'.concat(this.$page.title,'" page (`').concat(this.$page.path,"`).\n\n[PLEASE DESCRIBE HOW THE PAGE CAN BE IMPROVED]"));return(s.i.test(e)?e:"https://github.com/".concat(e)).replace(s.a,"")+"/issues/new?title=".concat(o,"&body=").concat(r,"&labels=question")}}},r=(i(368),i(25)),d=Object(r.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"page-edit"},[t.editLink?i("div",{staticClass:"edit-link"},[i("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),i("OutboundLink")],1):t._e(),t._v(" "),t.notSatisfiedLink?i("div",{staticClass:"edit-link"},[i("a",{attrs:{href:t.notSatisfiedLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.notSatisfiedLinkText))]),t._v(" "),i("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?i("div",{staticClass:"last-updated"},[i("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),i("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null);e.a=d.exports}}]);