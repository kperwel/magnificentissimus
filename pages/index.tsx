import { Dancing_Script } from "@next/font/google";
import Head from "next/head";
import Link from "next/link";

import style from "../styles/Index.module.css";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>The Magnificentissimus</title>
        <meta name="description" content="The Magnici" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <main className={`${dancingScript.className} ${style.main}`}>
        <p>
          Greetings, Scribe! You are most welcome to our kingdom. Your skills as
          a writer and recorder of history are greatly valued, and we look
          forward to your contributions to our chronicles.
        </p>
        <p>Your majesty is asking you to fulfill his family tree!</p>

        <Link className={style.startButton} href="/play">
          START
        </Link>
      </main>
    </>
  );
}
