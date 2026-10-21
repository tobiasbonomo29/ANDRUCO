import { createContext, useContext, useState, type ReactNode } from "react";
import {
  messages as initialMessages,
  type Message,
  initialUser,
  initialMatches,
  posts as seedPosts,
  type Match,
  type Post,
} from "../data";
function useStore() {
  const [user, setUser] = useState(initialUser);
  const [chatMessages, setChatMessages] = useState<Message[]>(initialMessages);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [watched, setWatched] = useState<number[]>([0, 3]);
  const [votes, setVotes] = useState<Record<string, string>>({});
  const [matches, setMatches] = useState<Match[]>(initialMatches);
  const [posts, setPosts] = useState<Post[]>(seedPosts);
  const [toast, setToast] = useState("");
  const [submitted, setSubmitted] = useState<number | null>(null);
  const [read, setRead] = useState(false);
  return {
    chatMessages,
    setChatMessages,
    user,
    setUser,
    favorites,
    setFavorites,
    watched,
    setWatched,
    votes,
    setVotes,
    matches,
    setMatches,
    posts,
    setPosts,
    toast,
    setToast,
    submitted,
    setSubmitted,
    read,
    setRead,
    notify: (s: string) => {
      setToast(s);
      window.setTimeout(() => setToast(""), 2600);
    },
  };
}
type Store = ReturnType<typeof useStore>;
const Context = createContext<Store | null>(null);
export function Provider({ children }: { children: ReactNode }) {
  return <Context.Provider value={useStore()}>{children}</Context.Provider>;
}
export function useApp() {
  return useContext(Context)!;
}
