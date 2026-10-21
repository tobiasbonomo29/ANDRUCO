import { copy } from "../texts";
import { Link } from "react-router-dom";
import {
  Bell,
  Radio,
  MessageSquare,
  Flame,
  CheckCircle,
  Trophy,
  BookOpen,
} from "lucide-react";
import { PageTitle } from "../components/UI";
import { notifications } from "../data";
import { useApp } from "../state/AppContext";
export default function Notifications() {
  const s = useApp();
  return (
    <>
      <PageTitle eyebrow={copy.t117} title={copy.t118} />
      <button
        className="text-button"
        onClick={() => {
          s.setRead(true);
          s.notify(copy.t119);
        }}
      >
        {copy.t120}
      </button>
      {notifications.map((n, i) => {
        const Icon = [
          Radio,
          MessageSquare,
          Flame,
          CheckCircle,
          BookOpen,
          Trophy,
        ][i];
        return (
          <Link
            to={
              [
                "/training/0",
                "/squad",
                "/vote",
                "/community",
                "/training",
                "/profile",
              ][i]
            }
            className={`notification ${s.read ? "" : "unread"}`}
            key={n}
          >
            <span
              className={`quick-icon ${["purple", "blue", "orange", "green"][i % 4]}`}
            >
              <Icon size={20} />
            </span>
            <div>
              <h3>{n}</h3>
              <p>
                {
                  [
                    copy.t121,
                    copy.t122,
                    copy.t123,
                    copy.t124,
                    copy.t125,
                    copy.t126,
                  ][i]
                }
              </p>
              <small>
                {copy.t127}
                {i * 12 + 2} {copy.t128}
              </small>
            </div>
            {!s.read && <i />}
          </Link>
        );
      })}
      <div className="footer-note">
        <Bell size={14} /> {copy.t129}
      </div>
    </>
  );
}
