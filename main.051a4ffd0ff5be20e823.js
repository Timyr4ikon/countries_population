(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(n,t,a){},QfWi:function(n,t,a){"use strict";a.r(t);a("x3Br"),a("D/wG"),a("SgDD"),a("L1EO"),a("yCCK"),a("JBxO"),a("FdtR");var e=function(n){return fetch("https://restcountries.eu/rest/v2/name/"+n).then((function(n){return n.json()}))},o=(a("UOjr"),a("dIfx")),i=(a("mNaS"),a("jffb"));o.a.defaults.width="100%",o.a.defaults.delay=1500;var l=document.querySelector('input[data-action="search"]'),s=document.querySelector(".root");l.addEventListener("input",i((function(){0!==l.value.trim().length&&e(l.value.trim()).then((function(n){if(console.log(n),404!==n.status){if(n.length>10)o.a.error({text:"Too many matches found.\n         Please enter a more specific query!"});else if(n.length>1&&n.length<11)s.innerHTML=function(n){return"<ul>"+n.reduce((function(n,t){return n+function(n){return"\n    <li >\n        "+n.name+"\n    </li>\n    "}(t)}),"")+"</ul>"}(n);else if(1===n.length){var t=n[0];console.log(t.languages),s.innerHTML="     <h2>"+t.name+'</h2>\n                <div class="flex">\n                    <div class="content">\n                      <p>Capital: <span>'+t.capital+"</span></p>\n                      <p>Population: <span>"+t.population+"</span></p>\n                      <div>\n                        <p>Languages:</p>\n                        <ul>\n                            "+t.languages.reduce((function(n,t){return n+"<li>"+t.nativeName+"</li>"}),"")+"\n                        </ul>\n                      </div>\n                   </div>\n          \n                   <img src="+t.flag+' alt="">\n              </div>'}}else o.a.error({text:"Make sure to write the name of the country properly"})}))}),500))},yCCK:function(n,t){var a=function(){$(".rain").empty();for(var n=0,t="",a="";n<100;){var e=Math.floor(98*Math.random()+1),o=Math.floor(4*Math.random()+2);t+='<div class="drop" style="left: '+(n+=o)+"%; bottom: "+(o+o-1+100)+"%; animation-delay: 0."+e+"s; animation-duration: 0.5"+e+'s;"><div class="stem" style="animation-delay: 0.'+e+"s; animation-duration: 0.5"+e+'s;"></div><div class="splat" style="animation-delay: 0.'+e+"s; animation-duration: 0.5"+e+'s;"></div></div>',a+='<div class="drop" style="right: '+n+"%; bottom: "+(o+o-1+100)+"%; animation-delay: 0."+e+"s; animation-duration: 0.5"+e+'s;"><div class="stem" style="animation-delay: 0.'+e+"s; animation-duration: 0.5"+e+'s;"></div><div class="splat" style="animation-delay: 0.'+e+"s; animation-duration: 0.5"+e+'s;"></div></div>'}$(".rain.front-row").append(t),$(".rain.back-row").append(a)};$(".splat-toggle.toggle").on("click",(function(){$("body").toggleClass("splat-toggle"),$(".splat-toggle.toggle").toggleClass("active"),a()})),$(".back-row-toggle.toggle").on("click",(function(){$("body").toggleClass("back-row-toggle"),$(".back-row-toggle.toggle").toggleClass("active"),a()})),$(".single-toggle.toggle").on("click",(function(){$("body").toggleClass("single-toggle"),$(".single-toggle.toggle").toggleClass("active"),a()})),a()}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.051a4ffd0ff5be20e823.js.map