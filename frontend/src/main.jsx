import React from "react";
import ReactDOM from "react-dom/client";

import "./App.css";
import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = React.useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
