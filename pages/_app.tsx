import "@/styles/globals.css";
import { Howl } from "howler";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    new Howl({
      src: ["/music.ogg"],
      autoplay: true,
      loop: true,
    })
  }, []);

  return <Component {...pageProps} />;
}
