import { copy } from "../texts";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { PageTitle, PlayerCard } from "../components/UI";
import { players } from "../data";
import { texts } from "../texts";
export default function Cards() {
  const [pos, setPos] = useState("Todas");
  const [q, setQ] = useState("");
  return (
    <>
      <PageTitle
        eyebrow={copy.t012}
        title={copy.t013}
        description={copy.t014}
      />
      <label className="search">
        <Search size={18} />
        <input
          placeholder={copy.t015}
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </label>
      <div className="chips">
        {texts.positions.map((p) => (
          <button
            key={p}
            onClick={() => setPos(p)}
            className={pos === p ? "active" : ""}
          >
            {p}
          </button>
        ))}
      </div>
      <div className="tier-legend">
        <span>{copy.t016}</span>
        <small>{copy.t017}</small>
      </div>
      {(["S", "A", "B", "C", "D"] as const).map((tier, i) => (
        <div className="tier-row" key={tier}>
          <div className={`tier tier-${tier}`}>
            <b>{tier}</b>
            <small>{[copy.t018, "TOP", copy.t019, "CUMPLEN", "MEH"][i]}</small>
          </div>
          <div className="tier-cards">
            {players
              .filter(
                (p) =>
                  p.tier === tier &&
                  (pos === "Todas" || p.pos === pos) &&
                  p.name.toLowerCase().includes(q.toLowerCase()),
              )
              .map((p) => (
                <Link
                  key={p.id}
                  to={`/cards/${p.id}`}
                  aria-label={`Ver carta de ${p.name}`}
                >
                  <PlayerCard player={p} small />
                </Link>
              ))}
          </div>
        </div>
      ))}
    </>
  );
}
