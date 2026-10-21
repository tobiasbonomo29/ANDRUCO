import { copy } from "../texts";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Play, Star, Check, Shield, Zap } from "lucide-react";
import type { Player, Tutorial } from "../data";
import { useApp } from "../state/AppContext";
export function Logo() {
  return (
    <span className="logo">
      <span className="logo-mark">
        {copy.t089}
        <span>{copy.t262}</span>
      </span>
      <span>
        {copy.t255}
        <span className="gold"> {copy.t256}</span>
      </span>
    </span>
  );
}
export function TwitchLogo() {
  return (
    <svg
      width="22"
      height="22"
      viewBox={copy.t263}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={copy.t264} />
    </svg>
  );
}
export function PageTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="page-title">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
}
export function Section({
  title,
  to,
  children,
}: {
  title: string;
  to?: string;
  children: ReactNode;
}) {
  return (
    <section>
      <div className="section-head">
        <h2>{title}</h2>
        {to && (
          <Link to={to}>
            {copy.t265}
            <ArrowUpRight size={14} />
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}
export function PlayerCard({
  player,
  small = false,
}: {
  player: Player;
  small?: boolean;
}) {
  return (
    <div className={`player-card ${small ? "small" : ""}`}>
      <div className="player-top">
        <b>{player.rating}</b>
        <span>{player.pos}</span>
      </div>
      <div className="player-figure">
        <div className="head" />
        <div className="jersey">
          <span>{player.id + 7}</span>
        </div>
      </div>
      <strong>{player.name}</strong>
      <div className="player-stats">
        {player.stats.map((v, i) => (
          <span key={i}>
            <b>{v}</b> {["RIT", "TIR", "PAS", "REG", "DEF", "FIS"][i]}
          </span>
        ))}
      </div>
      <span className="card-spark">{copy.t116}</span>
    </div>
  );
}
export function VideoCard({ video }: { video: Tutorial }) {
  const s = useApp();
  return (
    <article className="video-card">
      <Link
        to={`/training/${video.id}`}
        className={`video-thumb tint-${video.id % 3}`}
      >
        <div className="pitch-lines" />
        <Play size={22} fill="currentColor" />
        <small>{video.duration}</small>
      </Link>
      <Link className="video-info" to={`/training/${video.id}`}>
        <span className="eyebrow">{video.category}</span>
        <h3>{video.title}</h3>
        <small>
          {s.watched.includes(video.id)
            ? copy.t266
            : `${video.tag} · Guía práctica`}
        </small>
      </Link>
      <button
        className="icon-button"
        aria-label={copy.t267}
        onClick={() =>
          s.setFavorites(
            s.favorites.includes(video.id)
              ? s.favorites.filter((x) => x !== video.id)
              : [...s.favorites, video.id],
          )
        }
      >
        <Star
          size={18}
          fill={s.favorites.includes(video.id) ? "currentColor" : "none"}
          className={s.favorites.includes(video.id) ? "gold" : ""}
        />
      </button>
    </article>
  );
}
export function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="stat">
      <b>{value}</b>
      <span>{label}</span>
    </div>
  );
}
export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="badge">
      <Shield size={12} />
      {children}
    </span>
  );
}
export function Progress({ value }: { value: number }) {
  return (
    <div className="progress">
      <span style={{ width: `${value}%` }} />
    </div>
  );
}
export function EmptyArt() {
  return (
    <div className="orb">
      <Zap size={54} />
      <span className="orbit one" />
      <span className="orbit two" />
    </div>
  );
}
export { Check };
