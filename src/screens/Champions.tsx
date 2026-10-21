import { copy } from "../texts";
import { useState } from "react";
import { Trophy, Plus, Share2 } from "lucide-react";
import { PageTitle, Progress, StatBlock } from "../components/UI";
import { useApp } from "../state/AppContext";
import { history } from "../data";
export default function Champions() {
  const s = useApp();
  const [open, setOpen] = useState(false);
  const wins = s.matches.filter((m) => m.result === "Victoria").length;
  return (
    <>
      <PageTitle eyebrow={copy.t020} title={copy.t021} />
      <div className="champions-hero">
        <Trophy size={40} />
        <span className="eyebrow">{copy.t022}</span>
        <div className="record">
          {wins}
          <span> {copy.t023}</span>
          {s.matches.length - wins}
        </div>
        <p>
          {copy.t024}
          {s.matches.length}
          {copy.t025}
          {wins >= 13 ? "I" : wins >= 11 ? "II" : "III"}
        </p>
        <Progress value={(s.matches.length / 15) * 100} />
        <small>
          {wins >= 11 ? copy.t026 : copy.t027.replace("2", String(11 - wins))}{" "}
          {copy.t028}
        </small>
      </div>
      <button
        className="button primary"
        disabled={s.matches.length >= 15}
        onClick={() => setOpen(!open)}
      >
        <Plus size={18} />
        {s.matches.length >= 15 ? copy.t029 : copy.t030}
      </button>
      {open && s.matches.length < 15 && (
        <form
          className="card form"
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            const gf = Number(f.get("gf")),
              ga = Number(f.get("ga"));
            const result =
              gf > ga
                ? "Victoria"
                : gf < ga
                  ? "Derrota"
                  : String(f.get("result"));
            s.setMatches([
              ...s.matches,
              {
                id: Date.now(),
                gf,
                ga,
                result,
                extra: String(f.get("extra")),
                scorer: String(f.get("scorer")),
              },
            ]);
            setOpen(false);
            s.notify(copy.t031);
          }}
        >
          <div className="two-buttons">
            <label>
              {copy.t032}
              <input
                type="number"
                name="gf"
                min="0"
                max="30"
                defaultValue="3"
                required
              />
            </label>
            <label>
              {copy.t033}
              <input
                type="number"
                name="ga"
                min="0"
                max="30"
                defaultValue="1"
                required
              />
            </label>
          </div>
          <label>
            {copy.t034}
            <select name="result">
              <option>{copy.t035}</option>
              <option>{copy.t036}</option>
              <option>{copy.t037}</option>
            </select>
          </label>
          <label>
            {copy.t038}
            <select name="extra">
              <option>{copy.t039}</option>
              <option>{copy.t040}</option>
              <option>{copy.t041}</option>
            </select>
          </label>
          <label>
            {copy.t042}
            <input name="scorer" defaultValue="Valente" required />
          </label>
          <button className="button primary">{copy.t043}</button>
        </form>
      )}
      <h2 className="mt">{copy.t044}</h2>
      <div className="match-list">
        {s.matches
          .slice(-4)
          .reverse()
          .map((m) => (
            <div className="match" key={m.id}>
              <span className={m.result === "Victoria" ? "win" : "loss"}>
                {m.result[0]}
              </span>
              <div>
                <h3>{m.scorer}</h3>
                <small>{m.extra}</small>
              </div>
              <b>
                {m.gf} {copy.t045}
                {m.ga}
              </b>
            </div>
          ))}
      </div>
      <h2 className="mt">{copy.t046}</h2>
      <div className="stats-grid">
        <StatBlock value={copy.t047} label={copy.t048} />
        <StatBlock
          value={`${history.reduce((a, h) => a + h.wins, 0)}–18`}
          label={copy.t049}
        />
        <StatBlock value={copy.t050} label={copy.t051} />
        <StatBlock value={copy.t052} label={copy.t053} />
      </div>
      <button
        className="button secondary"
        onClick={() => {
          s.setPosts([
            {
              id: Date.now(),
              name: s.user.name,
              action: copy.t054,
              body: `Mi jornada: ${wins}-${s.matches.length - wins}. ¡A seguir mejorando, chicuelos!`,
              likes: 0,
            },
            ...s.posts,
          ]);
          s.notify(copy.t055);
        }}
      >
        <Share2 size={17} />
        {copy.t056}
      </button>
    </>
  );
}
