import { copy } from "../texts";
import { Link } from "react-router-dom";
import { Copy, Play } from "lucide-react";
import { PageTitle } from "../components/UI";
import { tactics, positions } from "../data";
import { useApp } from "../state/AppContext";
export default function Tactics() {
  const s = useApp();
  return (
    <>
      <PageTitle
        eyebrow={copy.t177}
        title={copy.t178}
        description={copy.t179}
      />
      {tactics.map((t, i) => (
        <article className="card tactic-card" key={t.code}>
          <div>
            <span className="eyebrow gold">{t.style}</span>
            <h2>{t.formation}</h2>
            <p>{t.title}</p>
          </div>
          <div className="mini-pitch">
            <div className="pitch-lines" />
            {[
              { x: 50, y: 92 },
              ...t.formation
                .split("-")
                .reverse()
                .flatMap((count, row, rows) =>
                  Array.from({ length: Number(count) }, (_, col) => ({
                    x: ((col + 1) * 100) / (Number(count) + 1),
                    y: 15 + (row * 62) / Math.max(1, rows.length - 1),
                  })),
                ),
            ].map((p, j) => (
              <i key={j} style={{ left: `${p.x}%`, top: `${p.y}%` }} />
            ))}
          </div>
          <button
            className="copy-code"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(t.code);
                s.notify(copy.t180);
              } catch {
                s.notify(`Copia este código: ${t.code}`);
              }
            }}
          >
            <span>
              <small>{copy.t181}</small>
              <b>{t.code}</b>
            </span>
            <Copy size={18} />
          </button>
          <Link className="button secondary" to={`/training/${i}`}>
            <Play size={15} />
            {copy.t182}
          </Link>
        </article>
      ))}
    </>
  );
}
