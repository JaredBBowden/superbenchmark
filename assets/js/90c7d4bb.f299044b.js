"use strict";(self.webpackChunksuperbench_website=self.webpackChunksuperbench_website||[]).push([[1624],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),h=a,b=s["".concat(c,".").concat(h)]||s[h]||m[h]||o;return t?r.createElement(b,i(i({ref:n},p),{},{components:t})):r.createElement(b,i({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},2257:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={slug:"release-sb-v0.8",title:"Releasing SuperBench v0.8",author:"Peng Cheng",author_title:"SuperBench Team",author_url:"https://github.com/cp5555",author_image_url:"https://github.com/cp5555.png",tags:["superbench","announcement","release"]},c=void 0,u={permalink:"/superbenchmark/blog/release-sb-v0.8",editUrl:"https://github.com/microsoft/superbenchmark/edit/main/website/blog/2023-04-14-release-0-8.md",source:"@site/blog/2023-04-14-release-0-8.md",title:"Releasing SuperBench v0.8",description:"We are very happy to announce that SuperBench 0.8.0 version is officially released today!",date:"2023-04-14T00:00:00.000Z",formattedDate:"April 14, 2023",tags:[{label:"superbench",permalink:"/superbenchmark/blog/tags/superbench"},{label:"announcement",permalink:"/superbenchmark/blog/tags/announcement"},{label:"release",permalink:"/superbenchmark/blog/tags/release"}],readingTime:1.095,truncated:!1,prevItem:{title:"Releasing SuperBench v0.9",permalink:"/superbenchmark/blog/release-sb-v0.9"},nextItem:{title:"Releasing SuperBench v0.7",permalink:"/superbenchmark/blog/release-sb-v0.7"}},p=[{value:"SuperBench 0.8.0 Release Notes",id:"superbench-080-release-notes",children:[{value:"SuperBench Improvements",id:"superbench-improvements",children:[]},{value:"Micro-benchmark Improvements",id:"micro-benchmark-improvements",children:[]},{value:"Model Benchmark Improvements",id:"model-benchmark-improvements",children:[]}]}],m={toc:p};function s(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are very happy to announce that ",(0,o.kt)("strong",{parentName:"p"},"SuperBench 0.8.0 version")," is officially released today!"),(0,o.kt)("p",null,"You can install and try superbench by following ",(0,o.kt)("a",{parentName:"p",href:"https://microsoft.github.io/superbenchmark/docs/getting-started/installation"},"Getting Started Tutorial"),"."),(0,o.kt)("h2",{id:"superbench-080-release-notes"},"SuperBench 0.8.0 Release Notes"),(0,o.kt)("h3",{id:"superbench-improvements"},"SuperBench Improvements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support SuperBench Executor running on Windows."),(0,o.kt)("li",{parentName:"ul"},"Remove fixed rccl version in rocm5.1.x docker file."),(0,o.kt)("li",{parentName:"ul"},"Upgrade networkx version to fix installation compatibility issue."),(0,o.kt)("li",{parentName:"ul"},"Pin setuptools version to v65.7.0."),(0,o.kt)("li",{parentName:"ul"},"Limit ansible_runner version for Python 3.6."),(0,o.kt)("li",{parentName:"ul"},"Support cgroup V2 when read system metrics in monitor."),(0,o.kt)("li",{parentName:"ul"},"Fix analyzer bug in Python 3.8 due to pandas api change."),(0,o.kt)("li",{parentName:"ul"},"Collect real-time GPU power in monitor."),(0,o.kt)("li",{parentName:"ul"},"Remove unreachable condition when write host list in mpi mode."),(0,o.kt)("li",{parentName:"ul"},"Upgrade Docker image with cuda12.1, nccl 2.17.1-1, hpcx v2.14, and mlc 3.10."),(0,o.kt)("li",{parentName:"ul"},"Fix wrong unit of cpu-memory-bw-latency in document.")),(0,o.kt)("h3",{id:"micro-benchmark-improvements"},"Micro-benchmark Improvements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add STREAM benchmark for sustainable memory bandwidth and the corresponding computation rate."),(0,o.kt)("li",{parentName:"ul"},"Add HPL Benchmark for HPC Linpack Benchmark."),(0,o.kt)("li",{parentName:"ul"},"Support flexible warmup and non-random data initialization in cublas-benchmark."),(0,o.kt)("li",{parentName:"ul"},"Support error tolerance in micro-benchmark for CuDNN function."),(0,o.kt)("li",{parentName:"ul"},"Add distributed inference benchmark."),(0,o.kt)("li",{parentName:"ul"},"Support tensor core precisions (e.g., FP8) and batch/shape range in cublaslt gemm.")),(0,o.kt)("h3",{id:"model-benchmark-improvements"},"Model Benchmark Improvements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fix torch.dist init issue with multiple models."),(0,o.kt)("li",{parentName:"ul"},"Support TE FP8 in BERT/GPT2 model."),(0,o.kt)("li",{parentName:"ul"},"Add num_workers configurations in model benchmark.")))}s.isMDXComponent=!0}}]);