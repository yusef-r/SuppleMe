(()=>{var e={};e.id=831,e.ids=[831],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6176:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>h,tree:()=>d}),a(2187),a(5582),a(5866);var r=a(3191),s=a(8716),l=a(7922),n=a.n(l),i=a(5231),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);a.d(t,o);let d=["",{children:["shop",{children:["[productHandle]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,2187)),"/Users/yusef/code/SuppleMe/src/app/shop/[productHandle]/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,5582)),"/Users/yusef/code/SuppleMe/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,5866,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/yusef/code/SuppleMe/src/app/shop/[productHandle]/page.tsx"],u="/shop/[productHandle]/page",p={require:a,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/shop/[productHandle]/page",pathname:"/shop/[productHandle]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9188:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,2994,23)),Promise.resolve().then(a.t.bind(a,6114,23)),Promise.resolve().then(a.t.bind(a,9727,23)),Promise.resolve().then(a.t.bind(a,9671,23)),Promise.resolve().then(a.t.bind(a,1868,23)),Promise.resolve().then(a.t.bind(a,4759,23))},5826:(e,t,a)=>{Promise.resolve().then(a.bind(a,8015))},225:(e,t,a)=>{Promise.resolve().then(a.bind(a,9031))},3734:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});let r=(0,a(6557).Z)("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]])},9031:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>h});var r=a(326),s=a(7577),l=a(6226),n=a(2786),i=a(3734),o=a(3855),d=a(3249);function c({product:e}){let{addToCart:t}=(0,d.j)();return(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row gap-8",children:[r.jsx("div",{className:"relative w-full lg:w-1/2 h-[500px]",children:r.jsx(l.default,{src:e.image,alt:e.name,fill:!0,className:"object-cover rounded-lg"})}),(0,r.jsxs)("div",{className:"w-full lg:w-1/2 flex flex-col",children:[r.jsx("h2",{className:"text-3xl font-bold mb-4",children:e.name}),(0,r.jsxs)("div",{className:"flex items-center mb-4",children:[r.jsx(i.Z,{className:"w-5 h-5 text-yellow-400"}),r.jsx("span",{className:"ml-2 text-gray-600",children:e.rating?e.rating.toFixed(1):"No rating"})]}),r.jsx("p",{className:"text-gray-700 mb-6",children:e.description}),r.jsx("p",{className:"text-2xl font-semibold mb-6",children:(0,n.x)(parseFloat(e.price))}),(0,r.jsxs)("button",{onClick:()=>{t(e)},className:"bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition flex items-center",children:[r.jsx(o.Z,{className:"w-5 h-5 mr-2"}),"Add to Cart"]})]})]})}var u=a(7386),p=a(1025);function h({params:e}){let{product:t,loading:a,error:l}=p.j.fetchProduct(e.productHandle);return a?r.jsx("p",{children:"Loading product details..."}):l?r.jsx("p",{children:"Error loading product details."}):t?r.jsx("main",{className:"py-10",children:(0,r.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[r.jsx(u.default,{paths:[{name:"Home",href:"/"},{name:"Shop",href:"/shop"},{name:t.name,href:`/shop/${t.handle}`}]}),r.jsx(s.Suspense,{fallback:r.jsx("p",{children:"Loading..."}),children:r.jsx(c,{product:t})})]})}):r.jsx("p",{children:"Product not found."})}},7386:(e,t,a)=>{"use strict";a.d(t,{default:()=>l});var r=a(326);a(7577);var s=a(434);function l({paths:e}){return r.jsx("nav",{className:"flex mb-6","aria-label":"Breadcrumb",children:r.jsx("ol",{className:"inline-flex items-center space-x-1 md:space-x-3",children:e.map((t,a)=>r.jsx("li",{children:(0,r.jsxs)("div",{className:"flex items-center",children:[0!==a&&r.jsx("svg",{className:"w-6 h-6 text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})}),r.jsx(s.default,{href:t.href,className:`ml-1 text-sm font-medium ${a===e.length-1?"text-gray-500":"text-emerald-600 hover:text-emerald-800"}`,children:t.name})]})},t.href))})})}},8015:(e,t,a)=>{"use strict";a.d(t,{default:()=>u});var r=a(326),s=a(7577),l=a(434),n=a(5047),i=a(3080),o=a(8307),d=a(7671),c=a(748);function u(){let[e,t]=(0,s.useState)(!1),[a,u]=(0,s.useState)(!1),[p,h]=(0,s.useState)(null),[m,x]=(0,s.useState)([]),[f,g]=(0,s.useState)(0);return(0,n.usePathname)(),r.jsx("nav",{className:`fixed w-full z-50 transition-all duration-500 ${e?"bg-white/95 shadow-lg backdrop-blur-sm py-2":"bg-transparent py-4"}`,children:r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6",children:(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsxs)(l.default,{href:"/",className:"flex items-center space-x-2 group",children:[(0,r.jsxs)("div",{className:"relative",children:[r.jsx(i.Z,{className:`w-7 h-7 transition-all duration-300 ${e?"text-emerald-600":"text-emerald-400"} group-hover:scale-110 transform`}),r.jsx("div",{className:`absolute inset-0 animate-ping rounded-full ${e?"bg-emerald-600":"bg-emerald-400"} opacity-20`})]}),r.jsx("span",{className:`text-xl font-bold transition-all duration-300 ${e?"text-gray-900":"text-white"}`,children:"SuppleMe"})]}),r.jsx("div",{className:"hidden md:flex items-center space-x-1",children:m.map(t=>r.jsx(l.default,{href:`/collections/${t.handle}`,className:`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${e?"text-gray-600 hover:text-emerald-600":"text-gray-200 hover:text-white"}`,children:t.title},t.handle))}),(0,r.jsxs)("div",{className:"flex items-center space-x-4",children:[r.jsx("button",{className:`hidden md:flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${e?"text-gray-600 hover:text-emerald-600 hover:bg-emerald-50":"text-gray-200 hover:text-white hover:bg-white/10"}`,children:r.jsx(o.Z,{className:"w-5 h-5"})}),r.jsx(l.default,{href:"/cart",className:"relative group",children:(0,r.jsxs)("div",{className:`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${e?"text-gray-600 hover:text-emerald-600 hover:bg-emerald-50":"text-gray-200 hover:text-white hover:bg-white/10"}`,children:[r.jsx(d.Z,{className:"w-5 h-5"}),r.jsx("span",{className:`absolute -top-1 -right-1 w-5 h-5 text-xs flex items-center justify-center rounded-full transition-all duration-300 ${e?"bg-emerald-600":"bg-emerald-400"} text-white`,children:f})]})}),r.jsx("button",{onClick:()=>u(!a),className:`md:hidden flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${e?"text-gray-600 hover:text-emerald-600 hover:bg-emerald-50":"text-gray-200 hover:text-white hover:bg-white/10"}`,children:r.jsx(c.Z,{className:"w-5 h-5"})})]})]})})})}},3249:(e,t,a)=>{"use strict";a.d(t,{j:()=>s});var r=a(7577);let s=()=>{let[e,t]=(0,r.useState)([]),[a,s]=(0,r.useState)(0);return(0,r.useEffect)(()=>{let e=localStorage.getItem("cart");if(e)try{let a=JSON.parse(e);t(a)}catch(e){console.error("Error parsing cart from localStorage:",e)}},[]),(0,r.useEffect)(()=>{try{localStorage.setItem("cart",JSON.stringify(e));let t=e.reduce((e,t)=>e+parseFloat(t.price)*t.quantity,0);s(t)}catch(e){console.error("Error saving cart to localStorage:",e)}},[e]),{cartItems:e,totalPrice:a,addToCart:e=>{t(t=>t.find(t=>t.id===e.id)?t.map(t=>t.id===e.id?{...t,quantity:t.quantity+1}:t):[...t,{...e,quantity:1}])},removeFromCart:e=>{t(t=>t.filter(t=>t.id!==e))},updateQuantity:(e,a)=>{a<1||t(t=>t.map(t=>t.id===e?{...t,quantity:a}:t))},clearCart:()=>{t([])}}}},1025:(e,t,a)=>{"use strict";a.d(t,{j:()=>n});var r=a(7577);let s=`https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2023-04/graphql.json`,l=process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,n={fetchCollections:()=>{let[e,t]=(0,r.useState)([]),[a,n]=(0,r.useState)(!0),[i,o]=(0,r.useState)(null);return(0,r.useEffect)(()=>{(async()=>{try{let e=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":l||""},body:JSON.stringify({query:`{
                collections(first: 10) {
                  edges {
                    node {
                      id
                      title
                      handle
                    }
                  }
                }
              }`})}),a=(await e.json()).data.collections.edges.map(e=>({id:e.node.id,title:e.node.title,handle:e.node.handle}));t(a)}catch(e){o("Failed to load collections")}finally{n(!1)}})()},[]),{collections:e,loading:a,error:i}},fetchProducts:()=>{let[e,t]=(0,r.useState)([]),[a,n]=(0,r.useState)(!0),[i,o]=(0,r.useState)(null);return(0,r.useEffect)(()=>{(async()=>{try{let e=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":l||""},body:JSON.stringify({query:`{
                products(first: 50) {
                  edges {
                    node {
                      id
                      title
                      handle
                      description
                      images(first: 1) {
                        edges {
                          node {
                            url
                          }
                        }
                      }
                      variants(first: 1) {
                        edges {
                          node {
                            price {
                              amount
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }`})}),a=(await e.json()).data.products.edges.map(e=>({id:e.node.id,name:e.node.title,handle:e.node.handle,description:e.node.description||"No description available",price:e.node.variants.edges[0]?.node.price.amount||"0.00",image:e.node.images.edges[0]?.node.url||"/placeholder-image.png",rating:1*Math.random()+4}));t(a)}catch(e){o("Failed to load products")}finally{n(!1)}})()},[]),{products:e,loading:a,error:i}},fetchProduct:e=>{let[t,a]=(0,r.useState)(null),[n,i]=(0,r.useState)(!0),[o,d]=(0,r.useState)(null);return(0,r.useEffect)(()=>{let t=async()=>{try{let t=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":l||""},body:JSON.stringify({query:`
                query($handle: String!) {
                  productByHandle(handle: $handle) {
                    id
                    title
                    handle
                    description
                    images(first: 5) {
                      edges {
                        node {
                          url
                        }
                      }
                    }
                    variants(first: 1) {
                      edges {
                        node {
                          price {
                            amount
                            currencyCode
                          }
                        }
                      }
                    }
                  }
                }
              `,variables:{handle:e}})}),r=(await t.json()).data.productByHandle;if(r){let e={id:r.id,name:r.title,handle:r.handle,description:r.description||"No description available",price:r.variants.edges[0]?.node.price.amount||"0.00",image:r.images.edges[0]?.node.url||"/placeholder-image.png",rating:1*Math.random()+4};a(e)}else d("Product not found")}catch(e){d("Failed to load product")}finally{i(!1)}};e&&t()},[e]),{product:t,loading:n,error:o}}}},2786:(e,t,a)=>{"use strict";function r(e,t="USD"){return new Intl.NumberFormat("en-US",{style:"currency",currency:t}).format(e)}a.d(t,{x:()=>r})},5582:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o,metadata:()=>i});var r=a(9510),s=a(5317),l=a.n(s);let n=(0,a(8570).createProxy)(String.raw`/Users/yusef/code/SuppleMe/src/components/Navbar.tsx#default`);a(4315);let i={title:"SuppleMe - Evolving Wellness. Empowering You.",description:"Discover science-backed supplements designed to enhance your physical and mental well-being at SuppleMe."};function o({children:e}){return(0,r.jsxs)("html",{lang:"en",className:"scroll-smooth",children:[r.jsx("head",{children:r.jsx("link",{rel:"icon",href:"/favicon.ico"})}),(0,r.jsxs)("body",{className:l().className,children:[r.jsx(n,{}),e]})]})}},2187:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});let r=(0,a(8570).createProxy)(String.raw`/Users/yusef/code/SuppleMe/src/app/shop/[productHandle]/page.tsx#default`)},4315:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[996,221],()=>a(6176));module.exports=r})();