import { copy } from "../texts";
import { useEffect, useState } from "react";
import { Clock, Flame, ThumbsUp, ThumbsDown } from "lucide-react";
import { PageTitle, PlayerCard, Progress } from "../components/UI";
import { players, polls } from "../data";
import { useApp } from "../state/AppContext";
export default function Vote() {
  const [mode, setMode] = useState(0);
  const [seconds, setSeconds] = useState(15642);
  const s = useApp();
  const poll = polls[mode];
  useEffect(() => {
    const t = setInterval(() => setSeconds((v) => Math.max(0, v - 1)), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <>
      <PageTitle
        eyebrow={copy.t210}
        title={copy.t211}
        description={copy.t212}
      />
      <div className="segments">
        <button
          className={mode === 0 ? "active" : ""}
          onClick={() => setMode(0)}
        >
          {copy.t213}
        </button>
        <button
          className={mode === 1 ? "active" : ""}
          onClick={() => setMode(1)}
        >
          {copy.t214}
        </button>
      </div>
      <div className="poll-card">
        <span className="badge">
          <Flame size={13} />
          {copy.t215}
        </span>
        <h2>{poll.title}</h2>
        <div className={`card-spotlight ${mode ? "versus" : ""}`}>
          <PlayerCard player={players[0]} />
          {mode === 1 && (
            <>
              <b className="gold">{copy.t216}</b>
              <PlayerCard player={players[1]} />
            </>
          )}
        </div>
        <p>{mode ? copy.t217 : copy.t218}</p>
        <span className="countdown">
          <Clock size={14} />
          {copy.t219}
          {Math.floor(seconds / 3600)} {copy.t220}
          {Math.floor((seconds % 3600) / 60)} {copy.t221}
          {seconds % 60} {copy.t222}
        </span>
      </div>
      {s.votes[poll.id] ? (
        <div className="card result">
          <h3>{copy.t223}</h3>
          <p>
            {mode ? "Valente" : copy.t224}{" "}
            <b>
              {poll.yes}
              {copy.t225}
            </b>
          </p>
          <Progress value={poll.yes} />
          <p>
            {mode ? "Santoro" : copy.t226}{" "}
            <b>
              {poll.no}
              {copy.t225}
            </b>
          </p>
          <Progress value={poll.no} />
          <small>{copy.t227}</small>
        </div>
      ) : (
        <div className="two-buttons">
          <button
            className="button positive"
            onClick={() => s.setVotes({ ...s.votes, [poll.id]: "yes" })}
          >
            <ThumbsUp size={18} />
            {mode ? "Valente" : copy.t228}
          </button>
          <button
            className="button negative"
            onClick={() => s.setVotes({ ...s.votes, [poll.id]: "no" })}
          >
            <ThumbsDown size={18} />
            {mode ? "Santoro" : copy.t229}
          </button>
        </div>
      )}
      <h2 className="mt">{copy.t230}</h2>
      {["SergioUT", "mariafut"].map((name, i) => (
        <div className="comment card" key={name}>
          <div className={`avatar color-${i}`}>{name[0]}</div>
          <div>
            <h3>{name}</h3>
            <p>{i ? copy.t231 : copy.t232}</p>
            <small>
              {copy.t127}
              {i + 1} {copy.t071}
            </small>
          </div>
        </div>
      ))}
    </>
  );
}
