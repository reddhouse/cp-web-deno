import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
        <link rel="stylesheet" href="stylesheet.css" />
      </Head>
      <div class="home">
        <div class="home__flex-row-tagline">
          <div class="home__flex-col-tagline">
            <div class="home__tagline">
              <span>Take control of</span>
              <br />
              <span class="home__tagline--emphasized">your government.</span>
              <br />
              <br />
              <span>Decide the future</span>
              <span class="home__of-top"> of </span>
              <br />
              <span class="home__of-bottom"> of </span>
              <span class="home__tagline--emphasized">our nation.</span>
            </div>
            <div class="home__sub-tagline">
              Join the first cooperatively owned & managed political party,
              built from the ground-up for member participation and complete
              transparency.
            </div>
          </div>
          <div class="home__flex-col-image">
            <img
              class="home__lemon-svg"
              src="/logo.svg"
              alt="the fresh logo: a sliced lemon dripping with juice"
            />
          </div>
        </div>

        <div class="home__flex-row-details">
          <div class="home__flex-col-image">
            <img
              class="home__lemon-svg"
              src="/logo.svg"
              alt="the fresh logo: a sliced lemon dripping with juice"
            />
          </div>
          <div class="home__flex-col-details">
            <div class="home__details">
              <span>Another blurb goes here.</span>
            </div>
            <div class="home__sub-details">
              Join the first cooperatively owned & managed political party,
              built from the ground-up for member participation and complete
              transparency.
            </div>
          </div>
        </div>

        <p class="home__welcome-text">
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <Counter start={3} />
      </div>
    </>
  );
}
