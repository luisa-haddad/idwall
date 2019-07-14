import React from "react";
import { ApiContext } from "./context";

export const api = (url, fetchConfig) => {
  const context = React.useContext(ApiContext);
  const cacheKey = JSON.stringify({ url, fetchConfig });

  const [currentState, setLocalState] = React.useState(null);

  const fetcher = () => {
    if (context.state.response) {
      return setLocalState(currentState);
    }

    fetch(url, fetchConfig).then(async res => {
      const response = await res.json();
      setLocalState(response);
      context.setState({ ...context.state, response });
    });
  };

  return [currentState, fetcher, context];
};