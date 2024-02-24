"use client"
import { useEffect, useMemo, useState } from "react";
import { Scraper, Tweet } from "@the-convocation/twitter-scraper";

export default function Home() {
  const scraper = useMemo(
    () =>
      new Scraper({
        transform: {
          request(input, init) {
            if (input instanceof URL) {
              const proxy =
                "https://crossorigin.me/?" +
                encodeURIComponent(input.toString());
              return [proxy, init];
            } else if (typeof input === "string") {
              const proxy =
                "https://crossorigin.me/?" + encodeURIComponent(input);
              return [proxy, init];
            } else {
              throw new Error("Unexpected request input type");
            }
          },
        },
      }),
    []
  );
  const [tweet, setTweet] = useState(null);

  useEffect(() => {
    async function getTweet() {
      const latestTweet = await scraper.getLatestTweet("twitter");
      if (latestTweet) {
        setTweet(latestTweet);
      }
    }

    getTweet();
  }, [scraper]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {tweet?.text}
    </main>
  );
}
