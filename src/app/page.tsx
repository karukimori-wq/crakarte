const projects = [
  { name: "Webサイトリニューアル", client: "ABC美容室", type: "HP / LP", status: "制作中", ball: "自分", due: "7/28" },
  { name: "YouTube動画制作", client: "Studio K", type: "動画 / サムネイル", status: "確認待ち", ball: "クライアント", due: "7/30" },
  { name: "キャンペーンLP", client: "NOVA STORE", type: "LP / バナー", status: "修正中", ball: "自分", due: "8/05" },
];

export default function Home() {
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark">C</span><span>Crakarte</span></div>
        <nav>
          <a className="active">ダッシュボード</a><a>案件</a><a>顧客</a><a>タスク</a>
          <div className="nav-divider" />
          <a>プロンプト</a><a>ポートフォリオ</a><a>テンプレート</a>
          <div className="nav-divider" /><a>設定</a>
        </nav>
        <div className="profile"><div className="avatar">JT</div><div><strong>Junichi</strong><small>Free plan</small></div></div>
      </aside>

      <section className="content">
        <header className="topbar"><div><p className="eyebrow">WEDNESDAY, JULY 22</p><h1>今日やるべきことを確認しましょう。</h1></div><button className="primary">＋ 新規案件</button></header>

        <section className="panel focus-panel">
          <div className="section-head"><div><span className="section-label">TODAY</span><h2>今日やること</h2></div><span className="count">3 tasks</span></div>
          <div className="task"><button className="check"/><div className="grow"><strong>LP初稿を提出する</strong><span>ABC美容室 · Webサイトリニューアル</span></div><span className="priority high">高</span><span>今日</span></div>
          <div className="task"><button className="check"/><div className="grow"><strong>動画の修正版を書き出す</strong><span>Studio K · YouTube動画制作</span></div><span className="priority high">高</span><span>今日</span></div>
          <div className="task"><button className="check"/><div className="grow"><strong>見積書を作成する</strong><span>NOVA STORE · キャンペーンLP</span></div><span className="priority">中</span><span>今日</span></div>
        </section>

        <section className="section-block">
          <div className="section-head"><div><span className="section-label">PROJECTS</span><h2>進行中案件</h2></div><button className="text-button">すべて見る →</button></div>
          <div className="project-list">
            {projects.map((p) => <article className="project" key={p.name}><div className="project-icon">{p.type.includes("動画") ? "▶" : "◇"}</div><div className="grow"><strong>{p.name}</strong><span>{p.client} · {p.type}</span></div><span className="status">{p.status}</span><span className={p.ball === "自分" ? "ball mine" : "ball"}>● {p.ball}</span><div className="due"><small>納期</small><strong>{p.due}</strong></div></article>)}
          </div>
        </section>

        <div className="grid-two">
          <section className="panel"><div className="section-head"><div><span className="section-label">WAITING</span><h2>クライアント回答待ち</h2></div></div><div className="waiting"><div><strong>Studio K</strong><span>初稿確認待ち</span></div><b>4日</b></div><div className="waiting"><div><strong>CAFE LUNE</strong><span>素材提出待ち</span></div><b>2日</b></div></section>
          <section className="panel"><div className="section-head"><div><span className="section-label">DELIVERY</span><h2>今週の納品</h2></div></div><div className="waiting"><div><strong>ABC美容室</strong><span>Webサイト / LP</span></div><b>7/28</b></div><div className="waiting"><div><strong>Studio K</strong><span>YouTube動画</span></div><b>7/30</b></div></section>
        </div>

        <div className="metrics"><div><span>見積提出中</span><strong>2</strong></div><div><span>修正対応中</span><strong>3</strong></div><div><span>未請求</span><strong>1</strong></div><div className="risk"><span>遅延リスク</span><strong>1</strong></div></div>
      </section>
    </main>
  );
}
