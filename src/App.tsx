import { useState } from "react";
import DateTimePretty from "./DateTime";
import "./App.css";

function Video({ url, date }: { url: string; date: string }) {
  return (
    <div className="video">
      <iframe
        src={url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <DateTimePretty date={date} />
    </div>
  );
}

function VideoList({ list }: { list: { url: string; date: string }[] }) {
  return (
    <>
      {list.map((item, index) => (
        <Video key={index} url={item.url} date={item.date} />
      ))}
    </>
  );
}

export default function App() {
  const [list] = useState([
    {
      url: "https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2025-02-20 09:24:00",
    },
    {
      url: "https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2025-02-19 09:24:00",
    },
    {
      url: "https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2025-01-20 09:24:00",
    },
    {
      url: "https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2023-01-03 12:10:00",
    },
    {
      url: "https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2020-01-01 16:17:00",
    },
    {
      url: "https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2025-02-13 05:24:00",
    },
  ]);

  return <VideoList list={list} />;
}