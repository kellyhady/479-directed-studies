"use client";

import Link from "next/link";
import ScrollToTop from "/components/scrollTopButton.jsx";
import Gallery, { GalleryItem } from "/components/gallery.jsx";

const ProfileTitle = ({ children, id }) => (
  <span className="text-mid md:col-start-2 font-serif font-bold" id={id}>
    <h2 className="m-2">{children}</h2>
  </span>
);
const ProfileParagraph = ({ children }) => (
  <span className="text-mid md:col-start-3 mb-auto font-serif">
    <h3 className="m-2">{children}</h3>
  </span>
);

const ProfileList = ({ children }) => (
  <span className="text-mid md:col-start-3 mb-auto font-serif">
    <ul className="list-outside">
      <li>
        <h3 className="m-2">{children}</h3>
      </li>
    </ul>
  </span>
);

const ProfileCaption = ({ children }) => (
  <span className="text-mid md:col-start-1 font-serif font-bold">
    <h2 className="m-2">{children}</h2>
  </span>
);

const BlogAuthor = ({ children }) => (
  <span className="text-sm md:col-start-1 font-serif uppercase">
    <h2 className="m-2 mt-7">{children}</h2>
  </span>
);

function ProfileRahman() {
  return (
    <>
      <ScrollToTop />
      <nav className="border-b-1 border-b-black">
        <h1 className="text-center text-4xl font-display">
          Sheikh Mujibur Rahman
        </h1>
        <h3 className="uppercase text-center text-sm font-serif">
          The Founder of Bangladesh
        </h3>

        <h3 className="mt-5 mb-5 text-center text-sm font-normal">
          <Link href="/">Back Home</Link>
        </h3>
      </nav>
      <main className="grid md:grid-cols-4 min-h-screen px-4 md:divide-x-1 divide-black">
        <section className="md:col-span-3 grid md:grid-cols-3">
          <div>
            <ProfileCaption>
              <a href="#background" className="hover:text-blue-500">
                Background
              </a>
            </ProfileCaption>
            <ProfileCaption>
              <a href="#philosophy" className="hover:text-blue-500">
                Political Philosophy
              </a>
            </ProfileCaption>
            <ProfileCaption>
              <a href="#achievements" className="hover:text-blue-500">
                Key Achievements
              </a>
            </ProfileCaption>
            <ProfileCaption>
              <a href="#legacy" className="hover:text-blue-500">
                Legacy
              </a>
            </ProfileCaption>

            <ProfileCaption>
              <a href="#controversy" className="hover:text-blue-500">
                Controversy
              </a>
            </ProfileCaption>
            <BlogAuthor>Author: Sangwoong, Sophie, and Bulla</BlogAuthor>
          </div>
          {/* Main copy start */}
          <ProfileTitle id="background">Background</ProfileTitle>
          <ProfileParagraph>
            Sheikh Mujibur Rahman, the founder of Bangladesh, was pivotal in the
            nation's liberation from Pakistan. His steadfast pursuit of justice,
            powerful support for Bengali rights, and influential leadership
            solidified his revered status. His commitment to a democratic,
            secular, and prosperous Bangladesh still informs the nation's
            socio-political direction.
          </ProfileParagraph>

          <ProfileTitle id="philosophy">Political Philosophy</ProfileTitle>
          <ProfileList>
            <ul className="list-disc">
              <li>
                Advocate for democracy, nationalism, socialism, and secularism
                Guided by "equality for all" principle
              </li>
              <li>Guided by "equality for all" principle</li>
            </ul>
          </ProfileList>
          <ProfileTitle id="achievements">Key Achievements</ProfileTitle>
          <ProfileList>
            <ul className="list-disc">
              <li>
                Created the Six-Point Movement for greater autonomy for East
                Pakistan
              </li>
              <li>Led the Awami League to win in the 1970 general elections</li>

              <li>Declared Bangladesh's independence in 1971</li>
              <li>
                Served as Bangladesh's first Prime Minister post-independence
              </li>
            </ul>
          </ProfileList>
          <ProfileTitle id="legacy">Impact and Legacy</ProfileTitle>
          <ProfileList>
            <ul className="list-disc">
              <li>Revered as "Bangabandhu", "Friend of Bengal"</li>
              <li>Considered the founding father of Bangladesh</li>
              <li>
                His vision for a democratic, inclusive, andequitable nation left
                a lasting imprint onBangladesh
              </li>
            </ul>
          </ProfileList>
          <ProfileTitle id="controversy">Controversy</ProfileTitle>
          <ProfileList>
            <ul className="list-disc">
              <li>
                Faced criticism for handling of the 1972 famine and allegations
                of autocratic rule
              </li>
              <li>Economic challenges during his leadership</li>
            </ul>
          </ProfileList>

          <ProfileTitle id="timeline">Timeline</ProfileTitle>
          <ProfileParagraph>
            <div className="pb-5">
              <h1 className="text-mid font-bold text-red-500">1920</h1>
              <h1 className="text-sm">Born in Tungipara , on March 17.</h1>
            </div>
            <div className="pb-5">
              <h1 className="text-mid font-bold text-red-500">1940</h1>
              <h1 className="text-sm">
                Begins involvement in politics, joining the AllIndia Muslim
                Students Federation andstudied law at the University of
                Calcutta.
              </h1>
            </div>
            <div className="pb-5">
              <h1 className="text-mid font-bold text-red-500">1946-47</h1>
              <h1 className="text-sm">
                Joins the Awami Muslim League , steppinginto the political
                sphere.
              </h1>
            </div>
            <div className="pb-5">
              <h1 className="text-mid font-bold text-red-500">1949-51</h1>
              <h1 className="text-sm">
                Demonstrations, when the governmentannounced that Urdu was the
                officiallanguage of Pakistan , and "Bangla act"
              </h1>
            </div>
            <div className="pb-5">
              <h1 className="text-mid font-bold text-red-500">1956-58</h1>
              <h1 className="text-sm">
                Serves as Minister of Commerce andIndustries , contributing to
                Pakistan'spolitical landscape.
              </h1>
            </div>
            <div className="pb-5">
              <h1 className="text-mid font-bold text-red-500">1966</h1>
              <h3 className="text-sm">
                Unveils the Six-Point Movement ,advocating for East Pakistan's
                autonomy.
              </h3>
            </div>
            <div className="pb-5">
              <h1 className="text-mid font-bold text-red-500">1970</h1>
              <h1 className="text-sm">
                Leads the Awami League to win thegeneral elections, amplifying
                the call forindependence
              </h1>
            </div>
          </ProfileParagraph>
        </section>

        {/* Main section end */}

        <Gallery>
          <GalleryItem>
            <img
              src="../images/poster-rahman.png"
              alt="A poster of Mahmoud Ahmadinejad"
            />
          </GalleryItem>
          <GalleryItem>
            <img
              src="../images/gallery-rahman-1.jpeg"
              width="400px"
              height="400px"
            ></img>
          </GalleryItem>
        </Gallery>
      </main>
      <footer className="border-t-1 border-t-black py-3">
        <h3 className="uppercase text-center text-sm font-serif">
          Developed by Kelly Hady
        </h3>
        <h3 className="uppercase text-center text-sm font-serif mb-3">
          Under the supervision of Dr. Daniel Ahadi
        </h3>
      </footer>
    </>
  );
}

export default ProfileRahman;
