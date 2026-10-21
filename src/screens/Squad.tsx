import { copy } from "../texts";
import { useEffect, useState } from "react";
import { CheckCircle, Send, Clock } from "lucide-react";
import { PageTitle, Badge } from "../components/UI";
import { useApp } from "../state/AppContext";
import { texts } from "../texts";
import { previousSquad } from "../data";
export default function Squad() {
  const s = useApp();
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const remaining = s.submitted
    ? Math.min(
        86400,
        Math.max(0, 86400 - Math.floor((now - s.submitted) / 1000)),
      )
    : 0;
  return (
    <>
      <PageTitle
        eyebrow={copy.t160}
        title={copy.t161}
        description={copy.t162}
      />
      {remaining > 0 ? (
        <div className="card success-card">
          <CheckCircle size={34} />
          <h2>{copy.t163}</h2>
          <p>{texts.thanks}</p>
          <span className="badge">
            <Clock size={13} />
            {copy.t164}
            {Math.floor(remaining / 3600)}
            {copy.t165}
            {String(Math.floor((remaining % 3600) / 60)).padStart(2, "0")}
            {copy.t165}
            {String(remaining % 60).padStart(2, "0")}
          </span>
        </div>
      ) : (
        <form
          className="card form"
          onSubmit={(e) => {
            e.preventDefault();
            s.setSubmitted(Date.now());
            s.notify(copy.t166);
          }}
        >
          <label>
            {copy.t167}
            <input
              required
              type="url"
              placeholder="https://www.fut.gg/squad/..."
              pattern="https://(www\.)?fut\.gg/.*"
            />
          </label>
          <small>{copy.t168}</small>
          <label>
            {copy.t169}
            <select>
              {texts.options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
          <label>
            {copy.t170}
            <textarea required rows={4} placeholder={copy.t171} />
          </label>
          <button className="button primary">
            <Send size={17} />
            {texts.ui.review}
          </button>
        </form>
      )}
      <h2 className="mt">{copy.t172}</h2>
      <div className="card">
        <div className="section-head">
          <span className="eyebrow">{previousSquad.date}</span>
          <Badge>{copy.t173}</Badge>
        </div>
        <h3>{copy.t174}</h3>
        <p>{copy.t175}</p>
        <blockquote>{previousSquad.reply}</blockquote>
        <span className="gold">{copy.t176}</span>
      </div>
    </>
  );
}
