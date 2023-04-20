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
        <div class="home__tagline">
          <span>Take control of</span>
          <br />
          <span class="home__tagline--emphasized">Your Government</span>
          <br />
          <br />
          <span>Decide the future</span>
          <span class="home__of-top"> of </span>
          <br />
          <span class="home__of-bottom"> of </span>
          <span class="home__tagline--emphasized">Our Nation</span>
        </div>
        <div class="home__sub-tagline">
          Join the refreshingly modern, member-owned political cooperative that
          challenges everything you’ve come to expect from a political party.
        </div>

        <div class="home__flex-row-generic">
          <div class="home__flex-col-image">
            <img
              class="home__lemon-svg"
              src="/logo.svg"
              alt="the fresh logo: a sliced lemon dripping with juice"
            />
          </div>
          <div class="home__flex-col-blurb">
            <div class="home__blurb-heading">
              <span>The Republi-cratic monopoly.</span>
            </div>
            <div class="home__blurb-details">
              Pretending to compete over values and visions for the country,
              America's two dominant political parties work in remarkable unison
              to solicit money from those who can afford to buy favorable
              legislation. Meanwhile, laws and reforms that would deliver the
              greatest benefits for average Americans, rarely see the light of
              day.
            </div>
          </div>
        </div>

        <div class="home__blurb-heading">
          <span>Corruption-proof by default.</span>
        </div>
        <div class="home__blurb-details">
          The Cooperative Party eliminates the influence of money in politics by
          sending a different type of representative to congress. Our
          representatives don’t have personal agendas, or careers to build in
          politics. The simply follow a pre-determined script, written by
          Cooperative Party members. No campaigning, no "deal making", no
          bullshit.
        </div>

        <div class="home__flex-row-generic">
          <div class="home__flex-col-image">
            <img
              class="home__lemon-svg"
              src="/logo.svg"
              alt="the fresh logo: a sliced lemon dripping with juice"
            />
          </div>
          <div class="home__flex-col-blurb">
            <div class="home__blurb-heading">
              <span>Cooperative by design.</span>
            </div>
            <div class="home__blurb-details">
              Rather than recruiting like-minded people to rally behind various
              causes, we start with members from different walks of life,
              identify the problems they share, and the solutions they find
              agreeable.
              <br />
              <br />
              The Cooperative Party is also cooperatively managed. Members
              define the party's priorities, control the party's finances, and
              choose the representatives we send to congress.
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
