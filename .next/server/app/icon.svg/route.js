"use strict";(()=>{var M={};M.id=33,M.ids=[33],M.modules={399:M=>{M.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:M=>{M.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},8997:(M,N,D)=>{D.r(N),D.d(N,{originalPathname:()=>y,patchFetch:()=>c,requestAsyncStorage:()=>O,routeModule:()=>i,serverHooks:()=>L,staticGenerationAsyncStorage:()=>x});var j={};D.r(j),D.d(j,{GET:()=>T,dynamic:()=>e});var g=D(9303),A=D(8716),z=D(3131),u=D(5661);let I=Buffer.from("PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiByeD0iOCIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTYuMzY2MDkgMTEuMDQ0QzYuNzAwNzYgMTAuODQ1MSA3LjAxMjAyIDEwLjYyMjggNy4yNzQxNCAxMC4zMzk2QzcuNTMzOTIgMTAuMDYxMSA3Ljc1MTU3IDkuNzQ3NDggNy45MDgzNyA5LjM4NDczQzcuOTUyODQgOS4zODIzOSA3Ljk5NzMgOS4zNzc3MSA4LjAzOTQzIDkuMzc1MzdDOC4zMzY2NSA5LjM3MDY5IDguNjM2MjEgOS4zODk0MSA4LjkzMTEgOS4zNTY2NUM5LjY5MTcgOS4yNzQ3NCAxMC4yMTU5IDguNTAyNDMgMTAuMDQ1MSA3LjczOTQ4QzkuOTE0MDQgNy4xNTkwNyA5LjM4OTggNi43MTQ0MSA4LjgwOTQgNi43MDAzN0M4LjUyMzg4IDYuNjkzMzUgOC4yNDA3IDYuNjk4MDMgNy45NDU4MSA2LjY5ODAzQzcuNjQxNTcgNS45OTEyNSA3LjE2MTggNS40NDU5NSA2LjQ5MDEzIDUuMDUyNzdDNi41Mjk5MSA1LjA0MzQxIDYuNTQ2MjkgNS4wMzYzOSA2LjU2MjY4IDUuMDM2MzlDNy4zNTYwNSA1LjAzNjM5IDguMTQ3MDggNS4wMTUzMyA4LjkzODEyIDUuMDQzNDFDOS43MzYxNyA1LjA3MTUgMTAuNDA1NSA1LjQyMjU1IDEwLjk0NjEgNi4wMjg2OUMxMS4wMzk3IDYuMTM0MDEgMTEuMTIxNiA2LjI1MTAyIDExLjIxMDYgNi4zNjEwMkMxMC45MjI3IDYuODg5OTQgMTAuNzY4MyA3LjQzNzU3IDEwLjc2ODMgOC4wMzQzNkMxMC43NjgzIDguNjMxMTQgMTAuOTE4IDkuMTc4NzggMTEuMjEyOSA5LjcxNzA2QzExLjEwMjkgOS44NTI4IDEwLjk5MjkgOS45OTU1NiAxMC44NzM2IDEwLjEyNjZDMTAuNTA2MSAxMC41MjkyIDEwLjA1MjEgMTAuNzk4MyA5LjUzNzI0IDEwLjkzODdDOS4yNzk4MSAxMS4wMDg5IDkuMDA1OTkgMTEuMDM3IDguNzM5MTkgMTEuMDQxN0M3Ljk3ODU4IDExLjA1NTcgNy4yMTc5NyAxMS4wNDY0IDYuNDU3MzYgMTEuMDQ2NEM2LjQyNjk0IDExLjA1MSA2LjM5NjUxIDExLjA0NjQgNi4zNjYwOSAxMS4wNDRaIiBmaWxsPSIjREQyNDI4Ii8+CjxwYXRoIGQ9Ik0xNC4wMDAxIDUuMDI5NzlWNi42OTg0NEMxMy41OTk5IDYuNzE5NTEgMTMuMjY1MiA2Ljg3ODY1IDEzLjAxMDEgNy4xODc1N0MxMi44MjA1IDcuNDE2OTMgMTIuNzI5MyA3LjY4NjA2IDEyLjcxMDUgNy45OTAzMUMxMi42NzMxIDguNTg0NzUgMTMuMTMxOCA5LjM0NTM2IDEzLjk5NzcgOS4zODc0OVYxMS4wMzUxQzEzLjI4NjMgMTEuMDc5NSAxMi4yNDI1IDEwLjY5ODEgMTEuNjEyOSA5Ljc3NTk4QzEwLjg5NDQgOC43Mjc1MSAxMC45MzQyIDcuMzc0OCAxMS41MzEgNi40MzYzM0MxMi4xMDY3IDUuNTI4MjggMTIuOTM1MiA1LjA3MTkxIDE0LjAwMDEgNS4wMjk3OVoiIGZpbGw9IiM0NDQ3NTAiLz4KPHBhdGggZD0iTTcuODI4NzkgNy42ODA1OUg2LjE5MjlDNi4wODI5IDcuMjY4NjkgNS44MzcxNyA2Ljk3MTQ3IDUuNDY1MDYgNi43ODg5MkM1LjE5NTkyIDYuNjU3ODcgNC45MTA0IDYuNjQxNDggNC42MjAyIDYuNzA0NjdDNC4wNzAyMiA2LjgyNDAzIDMuNjMyNTcgNy4zOTI3MyAzLjYyMzIxIDcuOTk2NTRDMy42MTM4NSA4LjU3OTI4IDQuMDIzNDEgOS4xMzYyOCA0LjU4OTc3IDkuMjkwNzRDNC45MjkxMiA5LjM4MjAxIDUuMjYzNzkgOS4zNDY5MSA1LjU3MDM3IDkuMTYyMDJDNS44Njk5MyA4Ljk4MTgyIDYuMDc1ODggOC43MTk3IDYuMTgxMiA4LjM3ODAxSDcuODE5NDNDNy43NzAyOSA5LjQwMzA4IDYuODY0NTggMTAuNzkzMiA1LjI4MDE3IDEwLjk4NzVDMy41ODgxMSAxMS4xOTU4IDIuMDgzMjcgOS44OTQ1NSAyLjAwMzcgOC4xNTFDMS45MTk0NSA2LjM4NjM5IDMuMjgzODYgNC45NTg3OCA1LjAxNTcxIDUuMDAwOTFDNi42NjU2NSA1LjA0MzAzIDcuNzU4NTggNi40NDAyMSA3LjgyODc5IDcuNjgwNTlaIiBmaWxsPSIjNDQ0NzUwIi8+Cjwvc3ZnPgo=","base64");function T(){return new u.NextResponse(I,{headers:{"Content-Type":"image/svg+xml","Cache-Control":"public, immutable, no-transform, max-age=31536000"}})}let e="force-static",i=new g.AppRouteRouteModule({definition:{kind:A.x.APP_ROUTE,page:"/icon.svg/route",pathname:"/icon.svg",filename:"icon",bundlePath:"app/icon.svg/route"},resolvedPagePath:"next-metadata-route-loader?page=%2Ficon.svg%2Froute&filePath=%2FUsers%2Fdixitapatel%2FDownloads%2Ftest%2Fmy-app%2Fapp%2Ficon.svg&isDynamic=0!?__next_metadata_route__",nextConfigOutput:"",userland:j}),{requestAsyncStorage:O,staticGenerationAsyncStorage:x,serverHooks:L}=i,y="/icon.svg/route";function c(){return(0,z.patchFetch)({serverHooks:L,staticGenerationAsyncStorage:x})}}};var N=require("../../webpack-runtime.js");N.C(M);var D=M=>N(N.s=M),j=N.X(0,[948,518],()=>D(8997));module.exports=j})();