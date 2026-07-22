"use client";

import { usePathname } from "next/navigation";

const items=[
  {href:"/",label:"ホーム",icon:"⌂",match:(p:string)=>p==="/"},
  {href:"/projects",label:"案件",icon:"▣",match:(p:string)=>p.startsWith("/projects")},
  {href:"/clients",label:"顧客",icon:"♙",match:(p:string)=>p.startsWith("/clients")},
  {href:"/tasks",label:"タスク",icon:"✓",match:(p:string)=>p.startsWith("/tasks")},
  {href:"/settings/plan",label:"その他",icon:"•••",match:(p:string)=>["/billing","/prompts","/portfolio","/templates","/settings"].some(x=>p.startsWith(x))}
];

export default function AppNav(){
  const pathname=usePathname();
  return <>
    <aside className="global-nav"><a className="global-brand" href="/"><span className="brand-mark">C</span><strong>Crakarte</strong></a><nav><a className={pathname==="/"?"active":""} href="/">ダッシュボード</a><a className={pathname.startsWith("/projects")?"active":""} href="/projects">案件</a><a className={pathname.startsWith("/clients")?"active":""} href="/clients">顧客</a><a className={pathname.startsWith("/tasks")?"active":""} href="/tasks">タスク</a><hr/><a className={pathname.startsWith("/billing")?"active":""} href="/billing">請求・入金</a><a className={pathname.startsWith("/prompts")?"active":""} href="/prompts">プロンプト</a><a className={pathname.startsWith("/portfolio")?"active":""} href="/portfolio">ポートフォリオ</a><a className={pathname.startsWith("/templates")?"active":""} href="/templates">テンプレート</a><hr/><a className={pathname.startsWith("/settings")?"active":""} href="/settings/plan">プラン</a></nav></aside>
    <nav className="mobile-nav" aria-label="メインナビゲーション">{items.map(item=><a key={item.href} className={item.match(pathname)?"active":""} href={item.href}><span>{item.icon}</span>{item.label}</a>)}</nav>
  </>;
}
