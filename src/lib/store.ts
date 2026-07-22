export type Project={id:string;name:string;clientId:string;client:string;status:string;ball:string;due:string};
export type Client={id:string;name:string;contact:string};
export type Task={id:string;title:string;projectId:string;project:string;due:string;priority:string;done:boolean};
export type CrakarteData={projects:Project[];clients:Client[];tasks:Task[]};
export const seedData:CrakarteData={projects:[{id:"web-renewal",name:"Webサイトリニューアル",clientId:"abc-beauty",client:"ABC美容室",status:"制作中",ball:"自分",due:"2026-07-28"},{id:"youtube",name:"YouTube動画制作",clientId:"studio-k",client:"Studio K",status:"確認待ち",ball:"クライアント",due:"2026-07-30"}],clients:[{id:"abc-beauty",name:"ABC美容室",contact:"山田 花子"},{id:"studio-k",name:"Studio K",contact:"佐藤 健"}],tasks:[{id:"t1",title:"LP初稿を提出する",projectId:"web-renewal",project:"Webサイトリニューアル",due:"今日",priority:"高",done:false},{id:"t2",title:"動画の修正版を書き出す",projectId:"youtube",project:"YouTube動画制作",due:"今日",priority:"高",done:false}]};
const KEY="crakarte-beta-data-v2";
export function loadData():CrakarteData{if(typeof window==="undefined")return seedData;try{const raw=localStorage.getItem(KEY);return raw?JSON.parse(raw):seedData}catch{return seedData}}
export function saveData(data:CrakarteData){if(typeof window!=="undefined")localStorage.setItem(KEY,JSON.stringify(data))}
export function makeId(prefix:string){return `${prefix}-${Date.now().toString(36)}`}
export function clientProjects(data:CrakarteData,clientId:string){return data.projects.filter(p=>p.clientId===clientId)}
export function projectTasks(data:CrakarteData,projectId:string){return data.tasks.filter(t=>t.projectId===projectId)}
