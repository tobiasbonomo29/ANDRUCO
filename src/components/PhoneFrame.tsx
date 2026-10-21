import { copy } from "../texts";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, type ReactNode, useRef } from "react";
import {
  House,
  Dumbbell,
  Layers,
  Users,
  UserRound,
  Bell,
  MessageCircle,
  ArrowLeft,
  ArrowUpRight,
  Signal,
  Wifi,
  BatteryFull,
  ChevronRight,
} from "lucide-react";
import { Logo } from "./UI";
import { texts } from "../texts";
import { useApp } from "../state/AppContext";
export function PhoneFrame({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const s = useApp();
  const scroll = useRef<HTMLDivElement>(null);
  const clean = ["/welcome", "/verify", "/exclusive"].includes(
    location.pathname,
  );
  useEffect(() => {
    scroll.current?.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="demo-stage">
      <div className="ambient" />
      <aside className="demo-panel">
        <span className="edition">{copy.t245}</span>
        <Logo />
        <h2>
          {copy.t246}
          <br />
          {copy.t247}
          <br />
          <span>{copy.t248}</span>
        </h2>
        <p>{texts.tagline}</p>
        <div className="demo-label">
          <span /> {copy.t249}
          <b>{copy.t250}</b>
        </div>
        <div className="screen-index">
          {texts.screens.map(([to, label], i) => (
            <NavLink key={to} to={to} end>
              <span>{String(i + 1).padStart(2, "0")}</span>
              {label}
              <ArrowUpRight size={13} />
            </NavLink>
          ))}
        </div>
        <div className="panel-footer">
          <span>{copy.t251}</span>
          <span>{copy.t252}</span>
        </div>
      </aside>
      <div className="phone-wrap">
        <div className="phone">
          <div className="status-bar">
            <span>{copy.t253}</span>
            <div className="island" />
            <div>
              <Signal size={13} />
              <Wifi size={14} />
              <BatteryFull size={18} />
            </div>
          </div>
          {!clean && (
            <header>
              {location.pathname === "/" ? (
                <Link to="/">
                  <Logo />
                </Link>
              ) : (
                <>
                  <button
                    className="icon-button"
                    onClick={() => {
                      if (window.history.length > 1) navigate(-1);
                      else navigate("/");
                    }}
                    aria-label={copy.t254}
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <Link to="/" className="header-wordmark">
                    {copy.t255}
                    <span className="gold"> {copy.t256}</span>
                  </Link>
                </>
              )}
              <div className="header-actions">
                <Link
                  to="/notifications"
                  className="icon-button notification-bell"
                  aria-label={copy.t118}
                >
                  <Bell size={20} />
                  {!s.read && <i />}
                </Link>
                <Link to="/chat" className="icon-button" aria-label={copy.t257}>
                  <MessageCircle size={20} />
                </Link>
                <Link
                  to="/profile"
                  className="avatar tiny"
                  aria-label={copy.t131}
                >
                  {copy.t132}
                </Link>
              </div>
            </header>
          )}
          <main className={clean ? "clean" : ""} ref={scroll}>
            <div className="screen-content" key={location.pathname}>
              {children}
            </div>
          </main>
          {!clean && (
            <nav className="tab-bar">
              {[
                ["/", House, "Inicio"],
                ["/training", Dumbbell, "Entreno"],
                ["/cards", Layers, "Cartas"],
                ["/community", Users, "Comunidad"],
                ["/profile", UserRound, "Perfil"],
              ].map(([path, Icon, label]) => {
                const I = Icon as typeof House;
                return (
                  <NavLink
                    end={path === "/"}
                    key={path as string}
                    to={path as string}
                  >
                    <I size={21} />
                    <span>{label as string}</span>
                  </NavLink>
                );
              })}
            </nav>
          )}
          <div className="home-indicator" />
          {s.toast && (
            <div className="toast" role="status">
              {copy.t258}
              {s.toast}
            </div>
          )}
        </div>
        <div className="device-caption">
          <span /> {copy.t259}
          <ChevronRight size={12} />
          <span className="muted">{copy.t260}</span>
        </div>
      </div>
      <span className="stage-corner">{copy.t261}</span>
    </div>
  );
}
