import { copy } from "../texts";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Pin,
  Heart,
  MessageCircle,
  ArrowUpRight,
  CheckCircle,
  Trophy,
} from "lucide-react";
import { PageTitle, Badge } from "../components/UI";
import { useApp } from "../state/AppContext";
export default function Community() {
  const [tab, setTab] = useState("Feed");
  const [likes, setLikes] = useState<number[]>([]);
  const s = useApp();
  return (
    <>
      <PageTitle
        eyebrow={copy.t064}
        title={copy.t065}
        description={copy.t066}
      />
      <Link className="chat-banner" to="/chat">
        <MessageCircle size={20} />
        <div>
          <h3>{copy.t067}</h3>
          <small>{copy.t068}</small>
        </div>
        <ArrowUpRight size={18} />
      </Link>
      <div className="segments">
        {["Feed", "Preguntas", "Ranking"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={tab === t ? "active" : ""}
          >
            {t}
          </button>
        ))}
      </div>
      {tab === "Feed" ? (
        s.posts.map((p, i) => (
          <article
            className={`card post ${i === 0 ? "pinned" : ""}`}
            key={p.id}
          >
            {i === 0 && (
              <span className="eyebrow gold">
                <Pin size={12} />
                {copy.t069}
              </span>
            )}
            <div className="post-user">
              <div className={`avatar color-${i % 4}`}>
                {p.name.slice(0, 2)}
              </div>
              <div>
                <h3>
                  {p.name}
                  {i === 0 && copy.t070}
                </h3>
                <small>{p.action}</small>
              </div>
              <span className="post-time">
                {i + 1} {copy.t071}
              </span>
            </div>
            <p>{p.body}</p>
            {i % 2 === 1 && (
              <div className="post-record">
                <Trophy size={20} />
                <b>{copy.t072}</b>
                <span>{copy.t073}</span>
              </div>
            )}
            <div className="post-actions">
              <button
                onClick={() =>
                  setLikes(
                    likes.includes(p.id)
                      ? likes.filter((x) => x !== p.id)
                      : [...likes, p.id],
                  )
                }
                className={likes.includes(p.id) ? "gold" : ""}
              >
                <Heart
                  size={17}
                  fill={likes.includes(p.id) ? "currentColor" : "none"}
                />
                {p.likes + (likes.includes(p.id) ? 1 : 0)}
              </button>
              <Link to="/chat">
                <MessageCircle size={17} /> {copy.t074}
              </Link>
            </div>
          </article>
        ))
      ) : tab === "Preguntas" ? (
        [copy.t075, copy.t076, copy.t077].map((q, i) => (
          <Link to="/chat" className="card question" key={q}>
            {i === 0 && (
              <Badge>
                <CheckCircle size={13} />
                {copy.t078}
              </Badge>
            )}
            <h3>{q}</h3>
            <p>
              {i + 3} {copy.t079}
              {i + 1} {copy.t071}
            </p>
          </Link>
        ))
      ) : (
        <>
          <h2 className="mt">{copy.t080}</h2>
          {["SergioUT", "mariafut", "ElChicuelo", "DaniFC", "Chicuelo_10"].map(
            (n, i) => (
              <div className="ranking card" key={n}>
                <b className="gold">{String(i + 1).padStart(2, "0")}</b>
                <div className={`avatar color-${i % 4}`}>{n.slice(0, 2)}</div>
                <h3>{n}</h3>
                <span>
                  {1240 - i * 170} {copy.t081}
                </span>
              </div>
            ),
          )}
        </>
      )}
    </>
  );
}
