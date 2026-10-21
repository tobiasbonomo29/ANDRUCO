import { copy } from "../texts";
import { useState } from "react";
import { X, Zap } from "lucide-react";
import { PageTitle, Progress } from "../components/UI";
import { positions, roleData, positionRoles } from "../data";
export default function Roles() {
  const [selected, setSelected] = useState("");
  return (
    <>
      <PageTitle
        eyebrow={copy.t152}
        title={copy.t098}
        description={copy.t153}
      />
      <div className="pitch">
        <div className="pitch-lines" />
        {positions.map((p, i) => (
          <button
            key={i}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            onClick={() => setSelected(p.pos)}
          >
            {p.pos}
          </button>
        ))}
      </div>
      <div className="tip">
        <Zap size={22} />
        <p>{copy.t154}</p>
      </div>
      {selected && (
        <div className="sheet-backdrop" onClick={() => setSelected("")}>
          <section
            className="bottom-sheet"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`Roles para ${selected}`}
          >
            <div className="sheet-handle" />
            <button
              className="sheet-close icon-button"
              onClick={() => setSelected("")}
              aria-label={copy.t155}
            >
              <X />
            </button>
            <PageTitle
              eyebrow={copy.t156}
              title={`${selected} · Tu pieza clave`}
            />
            {(positionRoles[selected] || roleData).roles.map(([name, score]) => (
              <div className="role-row" key={name}>
                <span>{name}</span>
                <b>
                  {score}
                  {copy.t157}
                </b>
                <Progress value={score * 10} />
              </div>
            ))}
            <h3>{copy.t158}</h3>
            <div className="chips">
              {(positionRoles[selected] || roleData).playstyles.map((p) => (
                <span className="badge" key={p}>
                  <Zap size={12} />
                  {p}
                </span>
              ))}
            </div>
            <h3>{copy.t159}</h3>
            <div className="heatmap">
              <div className="pitch-lines" />
            </div>
          </section>
        </div>
      )}
    </>
  );
}
