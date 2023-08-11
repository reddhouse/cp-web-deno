import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Cooperative Party | About</title>
        <link rel="stylesheet" href="stylesheet-about.css" />
      </Head>
      <div class="about">
        <h1>About</h1>

        <Counter start={3} />

        <div class="about__image-container">
          <img
            class="about__lemon-svg"
            src="/logo.svg"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
        </div>
      </div>
    </>
  );
}
