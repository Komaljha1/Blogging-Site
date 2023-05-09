import { useEffect, useState } from "react";

export default function Banner() {
  const photo = "https://picsum.photos/200";
  const [timestamp, setTimestamp] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(Date.now());
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="App">
      <img src={`${photo}?_=${timestamp}`} alt="random" />
    </div>
  );
}