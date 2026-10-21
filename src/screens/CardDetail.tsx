import { copy } from "../texts";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Star, ThumbsUp, ThumbsDown } from "lucide-react";
import { PageTitle, PlayerCard, StatBlock } from "../components/UI";
import { players } from "../data";
import { useApp } from "../state/AppContext";
export default function CardDetail() {
  const { id } = useParams();
  const p = players.find((p) => p.id === Number(id)) || players[0];
  const s = useApp();
  const [stars, setStars] = useState(0);
  const key = `card-${p.id}`;
  return (
    <>
      <PageTitle eyebrow={`TIER ${p.tier} · REVIEW DE CARTA`} title={p.name} />
      <div className="card-spotlight">
        <PlayerCard player={p} />
      </div>
      <div className="stats-grid">
        <StatBlock value={`${p.score}`} label={copy.t001} />
        <StatBlock value={copy.t002} label={copy.t003} />
      </div>
      <div className="card">
        <h3>{copy.t004}</h3>
        <p>{copy.t005}</p>
        <h3>{copy.t006}</h3>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              onClick={() => setStars(n)}
              aria-label={`Puntuar con ${n} estrellas`}
            >
              <Star fill={n <= (stars || 4) ? "currentColor" : "none"} />
            </button>
          ))}
        </div>
        <small>{stars ? copy.t007 : copy.t008}</small>
      </div>
      <div className="two-buttons">
        <button
          className="button positive"
          disabled={!!s.votes[key]}
          onClick={() => s.setVotes({ ...s.votes, [key]: "yes" })}
        >
          <ThumbsUp size={17} />
          {copy.t009}
        </button>
        <button
          className="button negative"
          disabled={!!s.votes[key]}
          onClick={() => s.setVotes({ ...s.votes, [key]: "no" })}
        >
          <ThumbsDown size={17} />
          {copy.t010}
        </button>
      </div>
      {s.votes[key] && <p className="gold">{copy.t011}</p>}
    </>
  );
}
