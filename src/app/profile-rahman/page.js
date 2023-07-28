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
              <a href="#legacy" className="hover:text-blue-500">
                Legacy
              </a>
            </ProfileCaption>
            <ProfileCaption>
              <a href="#rise-to-power" className="hover:text-blue-500">
                Rise to Power
              </a>
            </ProfileCaption>
            <ProfileCaption>
              <a href="#agenda" className="hover:text-blue-500">
                Agenda
              </a>
            </ProfileCaption>

            <ProfileCaption>
              <a href="#controversy" className="hover:text-blue-500">
                Controversy
              </a>
            </ProfileCaption>
            <BlogAuthor>Author: Mohammed & Team</BlogAuthor>
          </div>
          {/* Main copy start */}
          <ProfileTitle id="background">Background</ProfileTitle>
          <ProfileList>
            <ul>
              <li>Raised by a rich peasant farmer</li>
              <li>
                Enjoyed classical chinese novels over texts that preached
                confucian morals
              </li>
              <li>
                Critiqued and refused to accept his own arranged marriage Left
                home at 16 to complete his elementary school training
              </li>
            </ul>
          </ProfileList>

          <ProfileTitle id="legacy">Legacy</ProfileTitle>
          <ProfileList>
            <ul>
              <li>
                Contributions: Mao united China, promoted industrialization, and
                made advancements in education and healthcare.
              </li>
              <li>
                Historical Significance: Mao's legacy continues to shape China's
                identity and its path as a global power.
              </li>
              <li>
                Status of Women Education: His ideology has helped China to
                become a global power
              </li>
            </ul>
          </ProfileList>
          <ProfileTitle id="rise-to-power">Rise to Power</ProfileTitle>
          <ProfileList>
            <ul>
              <li>
                Had a post at the Beijing University Library in 1918 where he
                met two fellow founders of the Chinese communist party. At this
                time described himself as "a Marxist in theory and to some
                extent in action," Founded Communist party of China in 1921 and
                joined the communist party in 1922.
              </li>

              <li>
                The Long March: In 1934, Mao led the Red Army on a grueling
                retreat, covering over 6,000 miles, which solidified his
                leadership within the Communist Party
              </li>
              <li>
                Assumed Role of Party Chariman in 1945 Helped establish People's
                Republic of China in 1949
              </li>
            </ul>
          </ProfileList>
          <ProfileTitle id="agenda">Agenda</ProfileTitle>
          <ProfileList>
            <ul>
              <li className="pb-2">
                <h3 className="uppercase font-bold">Social Agenda</h3>
                Mao implemented land reforms and collectivization, aiming for a
                classless society and equitable distribution of resources
              </li>
              <li className="pb-2">
                <h3 className="uppercase font-bold">Political Agenda</h3>
                He established a one-party rule and centralized power. He
                initiated the Cultural Revolution, aiming to eradicate
                "counter-revolutionary" elements and promote his ideology.
              </li>
              <li className="pb-2">
                <h3 className="uppercase font-bold">Cultural Agenda</h3>
                Mao promoted revolutionary culture, fostering loyalty through
                the Red Guards and the distribution of the Little Red Book.
              </li>
            </ul>
          </ProfileList>
          <ProfileTitle id="controversy">Controversy</ProfileTitle>
          <ProfileParagraph>
            His denial of the Holocaust drew significant international
            condemnation and he repeatedly questioned the historical reality of
            the event, which caused outrage and sparked accusations of
            anti-Semitism. He was also boldly anti-Israel, and made comments
            that called for the destruction of Israel. It was also highly
            controversial how his second term in presidency responded to the
            Green Movement protests by use of force, arrests, and censorship.
          </ProfileParagraph>
          {/* Main section end */}
        </section>

        <Gallery>
          <GalleryItem>
            <img
              src="../images/poster-mzd.png"
              alt="A poster of Mahmoud Ahmadinejad"
            />
          </GalleryItem>
          <GalleryItem>
            <img src="../images/gallery-mzd-1.png"></img>
          </GalleryItem>
          <GalleryItem>
            <img src="../images/gallery-mzd-2.png"></img>
          </GalleryItem>
          {/* <GalleryItem>
            <img
              src="https://media.cnn.com/api/v1/images/stellar/prod/121003011517-iran-ahmadinejad-sanctions.jpg?q=w_3249,h_2084,x_0,y_0,c_fill"
              className="object-fit"
            />
          </GalleryItem> */}
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
