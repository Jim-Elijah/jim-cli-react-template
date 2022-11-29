import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Layout from "./layout";
import bus from "./utils/bus";

let history;

export default function App() {
  history = useHistory();
  useEffect(() => {
    bus.emit("interceptorFn", history);
  });
  return <Layout></Layout>;
}
