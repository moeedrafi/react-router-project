import { useEffect, useState } from "react";

function Delayed({
  children,
  wait = 500,
}: {
  children: React.ReactNode;
  wait?: number;
}) {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setShow(true);
    }, wait);

    return () => window.clearTimeout(timeout);
  });

  return show ? children : null;
}

export const Loading = () => {
  return (
    <Delayed>
      <div className="loading center" />
    </Delayed>
  );
};
