(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[831],{6156:function(e,t,n){Promise.resolve().then(n.bind(n,3013))},3013:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(7437),a=n(2265),l=n(3145),s=n(5420),c=n(6595),o=n(9397),i=n(5184);function d(e){let{product:t}=e,{addToCart:n}=(0,i.j)();return(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row gap-8",children:[(0,r.jsx)("div",{className:"relative w-full lg:w-1/2 h-[500px]",children:(0,r.jsx)(l.default,{src:t.image,alt:t.name,fill:!0,className:"object-cover rounded-lg"})}),(0,r.jsxs)("div",{className:"w-full lg:w-1/2 flex flex-col",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold mb-4",children:t.name}),(0,r.jsxs)("div",{className:"flex items-center mb-4",children:[(0,r.jsx)(c.Z,{className:"w-5 h-5 text-yellow-400"}),(0,r.jsx)("span",{className:"ml-2 text-gray-600",children:t.rating?t.rating.toFixed(1):"No rating"})]}),(0,r.jsx)("p",{className:"text-gray-700 mb-6",children:t.description}),(0,r.jsx)("p",{className:"text-2xl font-semibold mb-6",children:(0,s.x)(parseFloat(t.price))}),(0,r.jsxs)("button",{onClick:()=>{n(t)},className:"bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition flex items-center",children:[(0,r.jsx)(o.Z,{className:"w-5 h-5 mr-2"}),"Add to Cart"]})]})]})}var u=n(5591),f=n(0);function m(e){let{params:t}=e,{product:n,loading:l,error:s}=f.j.fetchProduct(t.productHandle);return l?(0,r.jsx)("p",{children:"Loading product details..."}):s?(0,r.jsx)("p",{children:"Error loading product details."}):n?(0,r.jsx)("main",{className:"py-10",children:(0,r.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,r.jsx)(u.Z,{paths:[{name:"Home",href:"/"},{name:"Shop",href:"/shop"},{name:n.name,href:"/shop/".concat(t.productHandle)}]}),(0,r.jsx)(a.Suspense,{fallback:(0,r.jsx)("p",{children:"Loading..."}),children:(0,r.jsx)(d,{product:{...n,handle:t.productHandle}})})]})}):(0,r.jsx)("p",{children:"Product not found."})}},5591:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7437);n(2265);var a=n(7648);function l(e){let{paths:t}=e;return(0,r.jsx)("nav",{className:"flex mb-6","aria-label":"Breadcrumb",children:(0,r.jsx)("ol",{className:"inline-flex items-center space-x-1 md:space-x-3",children:t.map((e,n)=>(0,r.jsx)("li",{children:(0,r.jsxs)("div",{className:"flex items-center",children:[0!==n&&(0,r.jsx)("svg",{className:"w-6 h-6 text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})}),(0,r.jsx)(a.default,{href:e.href,className:"ml-1 text-sm font-medium ".concat(n===t.length-1?"text-gray-500":"text-emerald-600 hover:text-emerald-800"),children:e.name})]})},e.href))})})}},5184:function(e,t,n){"use strict";n.d(t,{j:function(){return a}});var r=n(2265);let a=()=>{let[e,t]=(0,r.useState)([]),[n,a]=(0,r.useState)(0);return(0,r.useEffect)(()=>{let e=localStorage.getItem("cart");if(e)try{let n=JSON.parse(e);t(n)}catch(e){console.error("Error parsing cart from localStorage:",e)}},[]),(0,r.useEffect)(()=>{try{localStorage.setItem("cart",JSON.stringify(e));let t=e.reduce((e,t)=>e+parseFloat(t.price)*t.quantity,0);a(t)}catch(e){console.error("Error saving cart to localStorage:",e)}},[e]),{cartItems:e,totalPrice:n,addToCart:e=>{t(t=>t.find(t=>t.id===e.id)?t.map(t=>t.id===e.id?{...t,quantity:t.quantity+1}:t):[...t,{...e,quantity:1}])},removeFromCart:e=>{t(t=>t.filter(t=>t.id!==e))},updateQuantity:(e,n)=>{n<1||t(t=>t.map(t=>t.id===e?{...t,quantity:n}:t))},clearCart:()=>{t([])}}}},0:function(e,t,n){"use strict";n.d(t,{j:function(){return o}});var r=n(2265),a=n(257);let l="https://".concat(a.env.SHOPIFY_STORE_DOMAIN,"/api/2023-04/graphql.json"),s=a.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,c={getProducts:async()=>{try{let e=await fetch(l,{method:"POST",headers:{"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":s||""},body:JSON.stringify({query:"\n      {\n        products(first: 50) {\n          edges {\n            node {\n              id\n              title\n              handle\n              description\n              images(first: 1) {\n                edges {\n                  node {\n                    url\n                  }\n                }\n              }\n              variants(first: 1) {\n                edges {\n                  node {\n                    price {\n                      amount\n                      currencyCode\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    "})});return(await e.json()).data.products.edges.map(e=>{var t,n;return{id:e.node.id,name:e.node.title,handle:e.node.handle,description:e.node.description||"No description available",price:(null===(t=e.node.variants.edges[0])||void 0===t?void 0:t.node.price.amount)||"0.00",image:(null===(n=e.node.images.edges[0])||void 0===n?void 0:n.node.url)||"/placeholder-image.png"}})}catch(e){return console.error("Error fetching products:",e),[]}}},o={fetchProducts:()=>{let[e,t]=(0,r.useState)([]),[n,a]=(0,r.useState)(!0),[l,s]=(0,r.useState)(null);return(0,r.useEffect)(()=>{(async()=>{try{let e=await c.getProducts();t(e.map(e=>({...e,rating:1*Math.random()+4}))),a(!1)}catch(e){s(e instanceof Error?e:Error("Failed to fetch products")),a(!1)}})()},[]),{products:e,loading:n,error:l}},fetchProduct:e=>{let[t,n]=(0,r.useState)(null),[a,l]=(0,r.useState)(!0),[s,o]=(0,r.useState)(null);return(0,r.useEffect)(()=>{let t=async()=>{try{let t=(await c.getProducts()).find(t=>t.handle===e);t?n({...t,rating:1*Math.random()+4}):o(Error("Product not found")),l(!1)}catch(e){o(e instanceof Error?e:Error("Failed to fetch product")),l(!1)}};e&&t()},[e]),{product:t,loading:a,error:s}}}},5420:function(e,t,n){"use strict";function r(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"USD";return new Intl.NumberFormat("en-US",{style:"currency",currency:t}).format(e)}n.d(t,{x:function(){return r}})}},function(e){e.O(0,[648,39,971,117,744],function(){return e(e.s=6156)}),_N_E=e.O()}]);