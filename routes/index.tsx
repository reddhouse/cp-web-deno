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
              Join the member-owned, member-managed political cooperative that
              challenges everything you've come to expect from your political
              party.
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

        <div class="home__flex-row-challenge">
          <div class="home__flex-col-image">
            <img
              class="home__lemon-svg"
              src="/logo.svg"
              alt="the fresh logo: a sliced lemon dripping with juice"
            />
          </div>
          <div class="home__flex-col-challenge">
            <div class="home__challenge">
              <span>Two sides of the same coin</span>
            </div>
            <div class="home__sub-challenge">
              Based on values, and visions for the future, traditional political
              parties may appear as different as night and day. In reality,
              these parties are united in their efforts to auction lawmaking to
              the highest bidders. As wealthy companies and individuals are the
              only entities that can afford access, policies and reforms that
              would deliver the largest benefits for average Americans, rarely
              see the light of day.
            </div>
          </div>
        </div>

        <div class="home__flex-row-tagline">
          <div class="home__flex-col-tagline">
            <div class="home__tagline">
              <span>Corruption-proof by default</span>
            </div>
            <div class="home__sub-tagline">
              The Cooperative Party eliminates the influence of money in
              politics by cutting out the largest expenses for political
              parties; the campaign. No campaigns = No advertising = No
              fundraising = No favors owed. Cooperative Party candidates for
              office are pre-selected by party members, and do not need to
              compete with one another to win primaries or prove their
              fundraising prowess.
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

        <div class="home__flex-row-challenge">
          <div class="home__flex-col-image">
            <img
              class="home__lemon-svg"
              src="/logo.svg"
              alt="the fresh logo: a sliced lemon dripping with juice"
            />
          </div>
          <div class="home__flex-col-challenge">
            <div class="home__challenge">
              <span>Cooperative by design</span>
            </div>
            <div class="home__sub-challenge">
              While traditional political parties seek to find like-minded
              people to rally behind various causes, the Cooperative Party takes
              the opposite approach. We start with members from different
              ideological backgrounds, and identify the problems they
              collectively agree are worth solving.
              <br />
              <br />
              Cooperative describes the process we use to find common ground,
              but also the structure of the organization. Members define the
              party's priorities, members control the party's finances, and
              members choose the representatives we send to congress. Even
              elements of this website are edited and approved through
              democratic consensus.
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
