import { useEffect, useState } from "react";

const API = "https://api.ui.dev/hash-history-basketball-league";

export default function useFetch<T>(
  path: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  body = ""
) {
  const [response, setResponse] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    setResponse(null);

    const abortController = new AbortController();
    const signal = abortController.signal;

    fetch(`${API}${path}`, {
      method,
      ...(body ? { body } : {}),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(({ body }) => (body ? JSON.parse(body) : null))
      .then((data) => {
        if (!signal.aborted) {
          setResponse(data);
          setLoading(false);
        }
      })
      .catch((error) => console.warn("Uh-oh.", error));

    return () => abortController.abort();
  }, [path, method, body]);

  return { response, loading };
}
