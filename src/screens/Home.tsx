import { copy } from "../texts";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Radio,
  Target,
  Waypoints,
  ClipboardList,
  Trophy,
  ChevronRight,
  Flame,
  Play,
} from "lucide-react";
import { PageTitle, Section, PlayerCard, Progress } from "../components/UI";
import { players } from "../data";
import { useApp } from "../state/AppContext";
export default function Home() {
  const s = useApp();
  const wins = s.matches.filter((m) => m.result === "Victoria").length;
  return (
    <>
      <div className="home-greeting">
        <div>
          <span className="eyebrow">{copy.t082}</span>
          <h1>
            {copy.t083}
            <span className="gold">{copy.t084}</span>{" "}
            <span className="wave">{copy.t085}</span>
          </h1>
          <p>
            <span className="gold">{s.user.name}</span> · {copy.t086}
          </p>
        </div>
      </div>
      <Link className="live-card" to="/training/0">
        <div className="live-top">
          <span className="live-badge">
            <i /> {copy.t087}
          </span>
          <span className="viewers">{copy.t088}</span>
        </div>
        <div className="live-art">
          <div className="large-a">{copy.t089}</div>
          <div className="field-perspective" />
          <span className="live-play">
            <Play size={24} fill="currentColor" />
          </span>
          <span className="art-caption">
            {copy.t090}
            <br />
            <b>{copy.t091}</b>
          </span>
        </div>
        <div className="live-bottom">
          <div className="avatar andy">{copy.t092}</div>
          <div>
            <h3>
              {copy.t093}
              <Radio size={14} />
            </h3>
            <p>{copy.t094}</p>
          </div>
          <ArrowUpRight size={20} />
        </div>
      </Link>
      <Section title={copy.t095}>
        <div className="quick-grid">
          {[
            ["/tactics", copy.t096, copy.t097, Target, "orange"],
            ["/roles", copy.t098, copy.t099, Waypoints, "purple"],
            ["/squad", copy.t100, copy.t101, ClipboardList, "blue"],
            ["/champions", copy.t021, copy.t102, Trophy, "green"],
          ].map(([to, title, sub, Icon, color]) => {
            const I = Icon as typeof Target;
            return (
              <Link to={to as string} className="quick-card" key={to as string}>
                <span className={`quick-icon ${color}`}>
                  <I size={21} />
                </span>
                <ArrowUpRight size={14} className="quick-arrow" />
                <h3>{title as string}</h3>
                <p>{sub as string}</p>
              </Link>
            );
          })}
        </div>
      </Section>
      <Section title={copy.t103} to="/vote">
        <Link to="/vote" className="vote-preview">
          <div>
            <span className="eyebrow gold">
              <Flame size={12} /> {copy.t104}
            </span>
            <h3>
              {copy.t105}
              <br />
              {copy.t106}
            </h3>
            <p>{copy.t107}</p>
            <span className="mini-link">
              {copy.t108}
              <ArrowUpRight size={13} />
            </span>
          </div>
          <PlayerCard player={players[0]} small />
        </Link>
      </Section>
      <Section title={copy.t109} to="/champions">
        <Link to="/champions" className="journey-card">
          <div className="journey-head">
            <span className="trophy-icon">
              <Trophy size={24} />
            </span>
            <div>
              <h3>{copy.t021}</h3>
              <p>
                {copy.t110}
                {s.matches.length}
                {copy.t111}
              </p>
            </div>
            <b>
              {wins}
              <span>
                {" "}
                {copy.t112}
                {s.matches.length - wins}
              </span>
            </b>
            <ChevronRight size={16} />
          </div>
          <Progress value={(s.matches.length / 15) * 100} />
          <small>
            {copy.t113}
            {15 - s.matches.length} {copy.t114}
          </small>
        </Link>
      </Section>
      <div className="footer-note">
        {copy.t115}
        <span>{copy.t116}</span>
      </div>
    </>
  );
}
