import { Quote, Verified, StatRow, Stat, Q, Band } from "./components";

export default function Home() {
  return (
    <main className="wrap">
      <header className="masthead">
        <div className="kicker">Gateway X Fall 2026 Fellowship — Pitch Package</div>
        <h1>HAULa</h1>
        <p className="sub">
          An on-demand hauling and towing marketplace, based in St. Louis, Missouri.
          Prepared by Chris Roberts. Pre-launch, targeting mid-September 2026.
        </p>
        <nav className="toc">
          <a href="#q1"><span className="num">01</span>What is it?</a>
          <a href="#q2"><span className="num">02</span>Who&rsquo;s the customer?</a>
          <a href="#q3"><span className="num">03</span>What&rsquo;s the white space?</a>
          <a href="#q4"><span className="num">04</span>Why now, and how big?</a>
          <a href="#q5"><span className="num">05</span>Show, don&rsquo;t tell</a>
          <a href="#q6"><span className="num">06</span>Desired future state</a>
          <a href="#q7"><span className="num">07</span>Where&rsquo;s the demand?</a>
          <a href="#q8"><span className="num">08</span>What are the economics?</a>
          <a href="#q9"><span className="num">09</span>How does revenue compound?</a>
          <a href="#q10"><span className="num">10</span>What&rsquo;s the wedge?</a>
          <a href="#q11"><span className="num">11</span>Meant to build this?</a>
          <a href="#q12"><span className="num">12</span>Why Gateway X?</a>
        </nav>
      </header>

      <Band>Insight</Band>

      <Q num="1" title="What is it?" id="q1">
        <p>
          HAULa is an on-demand hauling and towing marketplace &mdash; conceptually
          &ldquo;Uber for hauling.&rdquo; Customers who need to move a bulky, oversized, or
          heavy item are matched with vetted local drivers who own trucks and trailers.
        </p>
        <p>
          The platform has three surfaces: a <strong>consumer app</strong> (request, track,
          pay, tip, rate), a <strong>driver app</strong> (same binary, unlocked by role
          selection &mdash; accept jobs, navigate, upload photo evidence, get paid), and a{" "}
          <strong>web admin portal</strong> (customer/driver management, pricing, disputes,
          refunds). Core service is bank-feed-simple: request a pickup and dropoff, HAULa
          matches a driver whose vehicle and trailer fit the job, the driver hauls it,
          the customer is charged on completion.
        </p>
        <p>
          Primary use case: an individual buying or selling a large item on Facebook
          Marketplace who has no truck or trailer. Secondary, already-engaged segments:
          contractors, landscapers, estate-sale operators, furniture retailers, equipment
          rental operators, and property managers moving materials or equipment that
          won&rsquo;t fit in a passenger vehicle and don&rsquo;t justify a full moving company.
        </p>
      </Q>

      <Q
        num="2"
        title="Who's your customer — and what do you know that others don't?"
        id="q2"
      >
        <p>
          The core customer is an individual buyer or seller on Facebook Marketplace who
          doesn&rsquo;t own a vehicle and equipment capable of transporting a large item
          they just bought or sold. Adjacent, engaged segments &mdash; contractors,
          landscapers, estate-sale operators, furniture retailers, equipment rental
          operators, property managers &mdash; face the same capability gap on a recurring
          basis.
        </p>
        <p>
          <strong>The knowledge edge:</strong> every prior strategy document built for
          HAULa (AI-drafted, from an earlier application process) diagnosed the customer
          problem as <em>emotional</em> &mdash; marketplace &ldquo;flake anxiety,&rdquo; trust
          deficit, fear of being stood up by a stranger. Talking to real customers across
          every industry HAULa serves surfaced something different: a{" "}
          <strong>rational tradeoff</strong>. Existing options don&rsquo;t exist, or don&rsquo;t
          balance convenience against cost. Customers want a right-sized option they can
          adjust their own plans around &mdash; not reassurance against getting flaked on.
        </p>
        <p>
          That reframes the wedge: lead with <strong>convenience at comparable cost</strong>,
          not trust-and-vetting messaging. The buying moment is a capability gap (neither
          party has the truck), not a trauma response to a prior bad experience.
        </p>
        <Quote cite="Andrew Wrenn">
          &ldquo;Totally makes sense. There should be a service that fits between rentals
          and movers. I could have used this in undergrad.&rdquo;
        </Quote>
        <p>
          Wrenn arrived at HAULa&rsquo;s exact positioning &mdash; the space between DIY
          rental and full-service movers &mdash; without being fed that framing. That&rsquo;s
          outside corroboration of the core insight, not founder narration.
        </p>
      </Q>

      <Q num="3" title="What's the white space?" id="q3">
        <p>
          The real question an investor asks isn&rsquo;t &ldquo;who are your
          competitors,&rdquo; it&rsquo;s &ldquo;if this is real, why hasn&rsquo;t Uber built
          it.&rdquo; Five structural reasons:
        </p>
        <ol className="plain">
          <li>
            <strong>Vehicle heterogeneity breaks the rideshare model.</strong> Uber works
            because any sedan substitutes for any other. Hauling is a capability-matching
            problem &mdash; item size and weight against bed size, towing capacity, trailer
            type, hitch class. Every job is a different unit.
          </li>
          <li>
            <strong>The frequency profile is wrong for the big platforms.</strong>{" "}
            Rideshare and delivery optimize for high-frequency, low-value, standardized
            trips. Hauling is low-frequency, higher-value, non-standardized &mdash;
            structurally unattractive to a platform built for density.
          </li>
          <li>
            <strong>
              Operating authority is a per-state regulatory wall &mdash; and it&rsquo;s why
              the incumbents sit where they sit.
            </strong>{" "}
            TaskRabbit and Dolly sell labor, not transport. Roadie moves small parcels in
            personal vehicles. Selling commercial transport requires intrastate carrier
            authority, filed state by state &mdash; a compliance burden that doesn&rsquo;t
            scale like software. HAULa already holds Missouri intrastate operating
            authority through MoDOT and issues decals to drivers under it.
          </li>
          <li>
            <strong>Insurance is a genuine underwriting problem.</strong> Commercial auto
            and cargo coverage for owner-operated trailers hauling third-party goods is
            hard to place.
          </li>
          <li>
            <strong>The unit economics only work with local density,</strong> which locks
            out both ends: too small in absolute dollars for a national platform to
            bother with, too technically demanding for the informal, personal-truck
            operator to serve at scale.
          </li>
        </ol>
        <Verified>
          Dolly (the most consumer-recognized independent competitor) was acquired and
          absorbed into TaskRabbit under IKEA&rsquo;s Ingka Group. GoShare remains
          independent, $12.2M raised, 80+ metros. The category has already started
          consolidating, which both validates the space and signals an exit path.
        </Verified>
      </Q>

      <Q num="4" title="Why now — and how big?" id="q4">
        <ol className="plain">
          <li>
            <strong>The demand channel changed shape and no logistics layer followed it.</strong>{" "}
            Facebook Marketplace displaced Craigslist at a scale Craigslist never reached
            &mdash; moving an enormous volume of large-item, peer-to-peer transactions into
            a channel with payments, messaging, and discovery, but no transport layer.
          </li>
          <li>
            <strong>The build cost collapsed.</strong> Stripe Connect, Checkr with
            continuous MVR monitoring, Google Maps Platform, and Firebase turn what used
            to be an eight-figure engineering program into configuration &mdash; why a
            small, self-funded team can credibly attack this category pre-raise.
          </li>
          <li>
            <strong>The supply exists and is underemployed.</strong> Truck and trailer
            owners are already in the gig economy; HAULa&rsquo;s 80% payout beats standard
            gig-work yields. The 600-driver pre-launch pipeline is evidence the
            redirection works.
          </li>
          <li>
            <strong>Trust in vetted-stranger transport is a solved cultural problem.</strong>{" "}
            No customer education tax to pay &mdash; that behavior shift already happened
            via rideshare and food delivery.
          </li>
          <li>
            <strong>The category just consolidated,</strong> which opens a lane (see
            Question 3).
          </li>
        </ol>
        <p>Market size, bottom-up:</p>
        <StatRow>
          <Stat v="$18.5B" k="TAM — US furniture &amp; used-goods hauling" />
          <Stat v="$185M" k="SAM — St. Louis metro" />
          <Stat v="~$43K" k="SOM / FY26 GMV (3.5-mo launch stub)" />
        </StatRow>
      </Q>

      <Band>Vision</Band>

      <Q num="5" title="Show, don't tell" id="q5">
        <p>
          The delivery lifecycle is fully specified end to end: request &rarr; pricing
          confirmation &rarr; driver match &rarr; <strong>Confirmed &rarr; To Pickup &rarr; To
          Dropoff &rarr; Arrived &rarr; Completed</strong>, with photo evidence captured at
          pickup and dropoff, in-app masked calling and chat, tipping, and a two-sided
          rating flow. Driver onboarding includes vehicle and trailer verification,
          Stripe identity verification, and Checkr background screening.
        </p>
        <p>
          The platform is being rebuilt on React (web) and React Native (mobile),
          migrating off an original no-code (Bubble/BDK) build from agency Naked
          Development. That legacy build is functional and was stress-tested through the
          driver onboarding pipeline, and remains the documented launch fallback if the
          React cutover slips.
        </p>
        <p>HAULa was a 2026 Arch Grants Finalist; the pitch was delivered August 5, 2026 at Saint Louis University.</p>
        <div className="screens">
          <figure>
            <img src="/screenshots/matching-screen.jpg" alt="HAULa app screen: finding your driver, matching in progress" width="400" height="970" />
            <figcaption>Requesting a haul &mdash; searching, checking availability, matching you with a nearby driver.</figcaption>
          </figure>
          <figure>
            <img src="/screenshots/tracking-screen.jpg" alt="HAULa app screen: live tracking with driver info and cost comparison" width="760" height="940" />
            <figcaption>Live tracking with driver and vehicle detail, plus HAULa&rsquo;s cost position against DIY rental, on-demand labor, and 3PL freight.</figcaption>
          </figure>
        </div>
        <p className="figure-note">From the HAULa Arch Grants Finalist 2026 pitch deck.</p>
      </Q>

      <Q num="6" title="Desired future state" id="q6">
        <p>
          Two scenarios, carried side by side rather than picking one &mdash; the fork
          between them is whether a Series A lands on schedule (late 2027 / early 2028).
        </p>
        <table className="figures">
          <thead>
            <tr>
              <th></th>
              <th>2 years (FY2028)</th>
              <th>5 years (FY2030)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Base case &mdash; no Series A on schedule</td>
              <td>4 metros, $1.66M GMV</td>
              <td>20 metros, $14.3M GMV, still EBITDA-negative</td>
            </tr>
            <tr>
              <td>Funded upside &mdash; Series A lands on time</td>
              <td>9 metros, $7.1M GMV</td>
              <td>35 metros, $49.1M GMV, +$1.3M EBITDA</td>
            </tr>
          </tbody>
        </table>
        <p>
          Beyond the base model, three revenue lines are named but deliberately not led
          with: a driver subscription tier (~$29&ndash;49/month for a reduced commission),
          negotiated B2B/commercial volume accounts, and surge pricing once driver supply
          supports it.
        </p>
      </Q>

      <Band>Demand</Band>

      <Q num="7" title="Where's the demand?" id="q7">
        <p>
          Chris held informal conversations across every industry HAULa serves &mdash;
          contractors, landscapers, estate-sale operators, furniture retailers, equipment
          rental operators, property managers, and individual marketplace buyers. Count
          and dates weren&rsquo;t recorded, so this is presented as directional founder
          synthesis, not a research study: nobody pushed back on pricing set at or
          slightly above the all-in cost of DIY truck and trailer rental, and the named
          comparison set customers gave, unprompted, was exactly two options &mdash; DIY
          rental and moving companies.
        </p>
        <p>Four named quotes are on record:</p>
        <Quote cite="Andrew Wrenn — prospective customer">
          &ldquo;Totally makes sense. There should be a service that fits between rentals
          and movers. I could have used this in undergrad.&rdquo;
        </Quote>
        <Quote cite="Matt Brown — prospective commercial user">
          &ldquo;We could use this to get supplies to our worksites instead of us doing or
          losing productivity by having a worker or contractor do the run.&rdquo;
        </Quote>
        <Quote cite="George Frazer — prospective customer">
          &ldquo;This service will make online marketplace transactions more successful,
          especially with simplified logistics.&rdquo;
        </Quote>
        <Quote cite="John Wright — transportation and logistics expert">
          &ldquo;This opens up so many doors in the logistics space and creates an
          underserved tier.&rdquo;
        </Quote>
        <p>
          On the supply side: <strong>~600 drivers</strong> are in the pre-launch
          onboarding pipeline with documents submitted. None have completed a Checkr
          background check yet &mdash; screening was deliberately deferred to avoid
          per-check fees before launch, and runs immediately ahead of it.
        </p>
      </Q>

      <Band>Business</Band>

      <Q num="8" title="What are the economics?" id="q8">
        <p>
          Average haul value of <strong>$95</strong>, sitting inside the DIY-rental-parity
          band customers didn&rsquo;t push back on. Take rate starts at{" "}
          <strong>15% at launch</strong>, stepping to 18% and then 20% as liquidity
          allows &mdash; gated on validating acceptance latency and repeat rate in market
          one, not scheduled by calendar. Drivers keep 80% of gross haul value.
        </p>
        <table className="figures">
          <thead>
            <tr>
              <th>Per haul, at launch (15% take)</th>
              <th className="num">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Gross haul value</td><td className="num">$95.00</td></tr>
            <tr><td>Driver payout (80%, pass-through)</td><td className="num">&minus;$76.00</td></tr>
            <tr><td><strong>HAULa net revenue</strong></td><td className="num"><strong>$14.25</strong></td></tr>
            <tr><td>Stripe fee (2.9% of full gross + $0.30)</td><td className="num">&minus;$3.06</td></tr>
            <tr><td>Payout transfer (ACH)</td><td className="num">&minus;$0.25</td></tr>
            <tr><td>Contingent cargo insurance</td><td className="num">&minus;$2.00</td></tr>
            <tr><td>Vetting amortization</td><td className="num">&minus;$0.75</td></tr>
            <tr><td><strong>Contribution margin</strong></td><td className="num"><strong>$8.19 (57.5%)</strong></td></tr>
          </tbody>
        </table>
        <p>
          Stripe is the largest structural variable cost &mdash; ~21% of recognized
          revenue, because it&rsquo;s charged on the full $95 gross while HAULa only
          recognizes $14.25 of it. That cost doesn&rsquo;t improve with scale on its own.
        </p>
        <p>
          Path to a healthier margin runs through two levers, and AHV moves it more than
          take rate does: at $95 AHV / 20% take, contribution is $12.94/haul; at $130 AHV
          (leaning into published oversized/trailer tiers and B2B mix) / 15% take, it&rsquo;s
          $12.43/haul &mdash; nearly the same lift, from a lever that doesn&rsquo;t require
          asking customers for more.
        </p>
      </Q>

      <Q num="9" title="How does revenue compound?" id="q9">
        <ol className="plain">
          <li>
            <strong>The seller-side flywheel &mdash; HAULa&rsquo;s most distinctive and
            currently most underused argument.</strong> On a Marketplace transaction,
            neither side has the vehicle, so a single haul touches a buyer and a seller.
            The buyer who just collected a sectional becomes, eventually, the seller of
            that sectional &mdash; and needs transport again. One booking seeds two future
            users at zero acquisition cost.
          </li>
          <li>
            <strong>Supply density loop.</strong> More drivers &rarr; faster acceptance
            &rarr; better experience &rarr; more bookings &rarr; higher driver earnings &rarr;
            more drivers.
          </li>
          <li>
            <strong>Referral</strong> &mdash; credit for referrer and referred.
          </li>
          <li>
            <strong>Data.</strong> After several thousand bookings: which neighborhoods
            repeat, which driver profiles complete without incident, which pricing tiers
            clear without resistance &mdash; improving matching and pricing over time.
          </li>
          <li>
            <strong>Attach revenue, later:</strong> driver subscription tier, B2B
            accounts, surge pricing. Named for completeness, not the thing to lead with.
          </li>
        </ol>
      </Q>

      <Q num="10" title="What's the wedge — and how does the model resolve?" id="q10">
        <p>
          Proposed wedge: Marketplace buyers, concentrated in a small number of
          high-density St. Louis zip codes, acquired organically before any paid spend.
          Spreading limited early driver supply across the whole metro would make
          acceptance latency fail everywhere at once instead of working well somewhere.
        </p>
        <p>
          Proposed pre-commitment before opening a second market: acceptance latency,
          repeat rate, first-booking conversion, day-30 driver retention, and dispute
          rate all have to hold in market one first. B2B is the pressure valve on the
          profitability timeline, not the wedge &mdash; gated behind real discovery rather
          than assumed.
        </p>
        <p>
          <strong>Resolution:</strong> the base case (no timely Series A) does not reach
          profitability by FY2030 &mdash; it tops out around 20 metros and &minus;$1.14M
          EBITDA. The funded upside (Series A landing late 2027/early 2028) reaches 35
          metros and <strong>+$1.3M EBITDA</strong> by FY2030 on $49.1M GMV. The capital is
          tied to a specific, named mechanism &mdash; not to ambition.
        </p>
        <StatRow>
          <Stat v="$400K" k="Recommended seed" />
          <Stat v="$3.5–4M" k="Series A, late 2027 / early 2028" />
        </StatRow>
      </Q>

      <Band>Team</Band>

      <Q
        num="11"
        title="Is this the business you were meant to build?"
        id="q11"
      >
        <p>Three strands, one recurring problem, from Chris&rsquo;s own life:</p>
        <ul className="plain">
          <li>
            College move-in and move-out every August and May &mdash; begging friends with
            trucks, renting vans that cost more than expected.
          </li>
          <li>
            DIY home renovation, the hardware-store-parking-lot moment: standing next to
            a pallet of tile realizing the car won&rsquo;t do it. The problem was never
            that no option existed &mdash; it was that none were built for a single
            specific haul, for an hour, with one driver.
          </li>
          <li>
            Facebook Marketplace, where the deal dies at the couch: &ldquo;do you have a
            truck&rdquo; kills more transactions than any price negotiation.
          </li>
        </ul>
        <Verified>
          <strong>The piano.</strong> Already in print via St. Louis Magazine: a free
          piano listed on Marketplace drew roughly fifty messages a day &mdash; then people
          learned they had to arrange their own transport. Half ghosted. The other half
          said the same thing: looks great, no way to move it.
        </Verified>
        <p>
          Career arc: JD from Pepperdine, BBA from George Washington. In-house technology
          counsel in southern California, then nine years in the St. Louis County
          Prosecuting Attorney&rsquo;s office. Family redevelopment work in North City.
          Mound City Fund &mdash; a nonprofit providing home-rehabilitation grants in
          underserved St. Louis neighborhoods. Self-taught app developer with prior
          builds (AlertAssist, MANIFOLD, PRISEC). HAULa has been entirely self-funded to
          date, with substantial personal capital committed before any outside money was
          sought.
        </p>
        <p>Team:</p>
        <table className="figures">
          <tbody>
            <tr><td>Chris Roberts</td><td>Founder, CEO (100% owner)</td></tr>
            <tr><td>Mike Reese</td><td>Growth</td></tr>
            <tr><td>Aaron Park</td><td>Marketing &amp; Communications</td></tr>
            <tr><td>Joni Burke</td><td>Operations</td></tr>
            <tr><td>Casey Barrale</td><td>Design</td></tr>
            <tr><td>Mehak Sharma</td><td>Product / Software Development (first full-time hire)</td></tr>
            <tr><td>Aman Verma</td><td>Product / Software Development</td></tr>
            <tr><td>Dave</td><td>QA (contractor)</td></tr>
          </tbody>
        </table>
      </Q>

      <Q num="12" title="Why build this with Gateway X?" id="q12">
        <Quote cite="Chris Roberts, Founder &amp; CEO">
          <p>
            I&rsquo;m a solo founder, and until recently that was truer than it should
            have been. Aman Verma just joined the team to lead product and mobile
            development, closing the one real technical gap in the build. What&rsquo;s
            still missing isn&rsquo;t code. It&rsquo;s everything a second and third and
            fourth hire would normally cover on the operating side, and I don&rsquo;t have
            the bandwidth to be founder, ops lead, and fundraiser at once while also
            running a market launch.
          </p>
          <p>
            That&rsquo;s the specific reason I&rsquo;m applying to a studio instead of
            raising a normal seed round from angels. A check solves the funding problem.
            It doesn&rsquo;t solve the problem of a founder trying to do five jobs in the
            same twelve months he&rsquo;s supposed to be proving out a new market. Gateway
            X&rsquo;s model is built around exactly that gap, operating support alongside
            capital, and that&rsquo;s what I actually need more than the money itself.
          </p>
          <p>
            The next twelve months have one real test: HAULa live and working in three
            more cities beyond St. Louis, expanding only as fast as the data says
            we&rsquo;re ready to. That&rsquo;s an aggressive pace for a company my size to
            run solo. It&rsquo;s a realistic one with a studio&rsquo;s operating muscle
            behind it, someone who&rsquo;s done multi-market launches before, has
            go-to-market experience I don&rsquo;t have, and can be a second set of hands
            on the parts of this that aren&rsquo;t product.
          </p>
          <p>
            And this is a St. Louis company built by someone with deep roots here. I
            didn&rsquo;t launch this somewhere convenient. I launched it at home, and
            there&rsquo;s real value in building with a studio that&rsquo;s doing the same
            thing.
          </p>
        </Quote>
      </Q>

      <footer className="page-footer">
        HAULa &mdash; Gateway X Fall 2026 Fellowship pitch package. Last drafted August 25,
        2026. Sourced from context/haula-context-dossier.md, context/haula-evidence-reconciliation.md,
        models/HAULa_Financial_Model.xlsx, and the HAULa Arch Grants Finalist 2026 pitch deck.
      </footer>
    </main>
  );
}
