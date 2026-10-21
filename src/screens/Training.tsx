import { copy } from "../texts";
import { useState } from "react";
import { Search } from "lucide-react";
import { PageTitle, VideoCard, Progress } from "../components/UI";
import { tutorials } from "../data";
import { texts } from "../texts";
import { useApp } from "../state/AppContext";
export default function Training() {
  const [category, setCategory] = useState("Controles");
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("Todos");
  const s = useApp();
  const list = tutorials.filter((v) => v.category === category);
  return (
    <>
      <PageTitle
        eyebrow={copy.t183}
        title={copy.t184}
        description={copy.t185}
      />
      <div className="segments">
        {texts.categories.map((c) => (
          <button
            key={c}
            className={category === c ? "active" : ""}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="training-progress">
        <span>
          {copy.t186}
          {category.toLowerCase()}
        </span>
        <b>
          {list.filter((v) => s.watched.includes(v.id)).length}
          {copy.t187}
        </b>
        <Progress
          value={
            (list.filter((v) => s.watched.includes(v.id)).length / 3) * 100
          }
        />
      </div>
      <label className="search">
        <Search size={18} />
        <input
          placeholder={texts.ui.search}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      <div className="chips">
        {texts.tags.map((t) => (
          <button
            key={t}
            className={tag === t ? "active" : ""}
            onClick={() => setTag(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="section-head">
        <h2>{copy.t188}</h2>
        <small>{copy.t189}</small>
      </div>
      {list
        .filter(
          (v) =>
            v.title.toLowerCase().includes(query.toLowerCase()) &&
            (tag === "Todos" || v.tag === tag),
        )
        .map((v) => (
          <VideoCard key={v.id} video={v} />
        ))}
      <div className="tip">
        <span>{copy.t116}</span>
        <p>{copy.t190}</p>
      </div>
    </>
  );
}
