export function Quote({ children, cite }) {
  return (
    <blockquote className="quote">
      {children}
      {cite ? <cite>{cite}</cite> : null}
    </blockquote>
  );
}

export function Verified({ children }) {
  return (
    <div className="callout verified">
      <span className="label">Verified</span>
      {children}
    </div>
  );
}

export function StatRow({ children }) {
  return <div className="stat-row">{children}</div>;
}

export function Stat({ v, k }) {
  return (
    <div className="stat">
      <span className="v">{v}</span>
      <span className="k">{k}</span>
    </div>
  );
}

export function Q({ num, title, id, children }) {
  return (
    <article className="question" id={id}>
      <div className="qnum">Question {num}</div>
      <h2>{title}</h2>
      {children}
    </article>
  );
}

export function Band({ children }) {
  return <div className="section-band">{children}</div>;
}
