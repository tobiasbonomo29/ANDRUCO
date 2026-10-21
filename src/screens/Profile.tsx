import { copy } from "../texts";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Trophy,
  Target,
  Flame,
  Heart,
  LogOut,
  Shield,
  Monitor,
  Check,
} from "lucide-react";
import { PageTitle, Badge, Progress } from "../components/UI";
import { colors } from "../data";
import { useApp } from "../state/AppContext";
export default function Profile() {
  const s = useApp();
  return (
    <>
      <PageTitle eyebrow={copy.t130} title={copy.t131} />
      <div className="profile-card card">
        <div className="avatar large" style={{ borderColor: s.user.color }}>
          {copy.t132}
          <span>{copy.t116}</span>
        </div>
        <h2>{s.user.name}</h2>
        <Badge>{copy.t133}</Badge>
        <p>{copy.t134}</p>
      </div>
      <div className="card form">
        <h3>
          <Monitor size={16} /> {copy.t135}
        </h3>
        <div className="segments">
          {["PS5", "Xbox", "PC"].map((p) => (
            <button
              className={s.user.platform === p ? "active" : ""}
              key={p}
              onClick={() => s.setUser({ ...s.user, platform: p })}
            >
              {p}
            </button>
          ))}
        </div>
        <h3>{copy.t136}</h3>
        <div className="color-options">
          {colors.map((c) => (
            <button
              style={{ background: c }}
              key={c}
              onClick={() => s.setUser({ ...s.user, color: c })}
              aria-label={`Color ${c}`}
              aria-pressed={s.user.color === c}
            >
              {s.user.color === c && <Check size={20} />}
            </button>
          ))}
        </div>
        <small>{copy.t137}</small>
      </div>
      <div className="card">
        <div className="section-head">
          <h3>{copy.t138}</h3>
          <Trophy className="gold" size={20} />
        </div>
        <div className="profile-record">
          {copy.t139}
          <span>{copy.t140}</span> {copy.t141}
        </div>
        <label className="toggle-row">
          {copy.t142}
          <input
            type="checkbox"
            role="switch"
            checked={s.user.publicRecord}
            onChange={(e) =>
              s.setUser({ ...s.user, publicRecord: e.target.checked })
            }
          />
        </label>
      </div>
      <h2 className="mt">{copy.t143}</h2>
      <div className="achievement-grid">
        {[
          [Target, copy.t144],
          [Trophy, copy.t145],
          [Heart, copy.t146],
          [Flame, copy.t147],
        ].map(([Icon, t], i) => {
          const I = Icon as typeof Target;
          return (
            <div
              className={`card achievement ${i === 3 ? "locked" : ""}`}
              key={t as string}
            >
              <I size={26} />
              <h3>{t as string}</h3>
              <small>{i === 3 ? "3/5 jornadas" : "Desbloqueado"}</small>
            </div>
          );
        })}
      </div>
      <div className="card">
        <div className="section-head">
          <h3>{copy.t148}</h3>
          <Shield size={18} />
        </div>
        <Progress value={68} />
        <small>{copy.t149}</small>
      </div>
      <Link className="button secondary" to="/welcome">
        <LogOut size={17} />
        {copy.t150}
      </Link>
      <div className="footer-note">{copy.t151}</div>
    </>
  );
}
