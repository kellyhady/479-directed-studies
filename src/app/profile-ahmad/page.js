"use client";
import Image from "next/image";
import Link from "next/link";
import { animateScroll as scroll } from "react-scroll";
import ScrollToTop from "/components/scrollTopButton.jsx";
import Gallery, { GalleryItem } from "/components/gallery.jsx";

const ProfileTitle = ({ children, id }) => (
  <span
    className="text-mid md:col-start-2 font-serif font-bold scroll-smooth"
    id={id}
  >
    <h2 className="m-2">{children}</h2>
  </span>
);
const ProfileParagraph = ({ children }) => (
  <span className="text-mid md:col-start-3 mb-auto font-serif">
    <h3 className="m-2">{children}</h3>
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

function ProfileAhmadinejad() {
  return (
    <>
      <ScrollToTop />
      <nav className="border-b-1 border-b-black">
        <h1 className="text-center text-4xl font-display">
          Mahmoud Ahmadinejad
        </h1>
        <h3 className="uppercase text-center text-sm font-serif">
          Sixth President of Iran
        </h3>
        <h3 className="mt-3 mb-3 text-center text-mid font-normal">
          <Link href="/">Back to Profiles</Link>
        </h3>
      </nav>
      <main className="grid md:grid-cols-4 min-h-screen px-4 md:divide-x-1 divide-black">
        <section className="md:col-span-3 grid md:grid-cols-3">
          <div>
            <ProfileCaption>
              <a
                href="#religious-bg"
                className="hover:text-blue-500 smooth-scroll"
              >
                Background
              </a>
            </ProfileCaption>
            <ProfileCaption>
              <a href="#pol-env" className="hover:text-blue-500">
                Political Environment
              </a>
            </ProfileCaption>
            <ProfileCaption>
              <a
                href="#opposition"
                className="hover:text-blue-500 smooth-scroll"
              >
                Opposition
              </a>
            </ProfileCaption>
            <ProfileCaption>
              <a href="#archetype" className="hover:text-blue-500">
                Archetype
              </a>
            </ProfileCaption>
            <ProfileCaption>
              <a href="#rise-in-power" className="hover:text-blue-500">
                Rise in Power
              </a>
            </ProfileCaption>
            <ProfileCaption>
              <a href="#implement-power" className="hover:text-blue-500">
                Implement Power
              </a>
            </ProfileCaption>
            <ProfileCaption>
              <a href="#target-aud" className="hover:text-blue-500">
                Target Audience
              </a>
            </ProfileCaption>
            <ProfileCaption>
              <a href="#popular-themes" className="hover:text-blue-500">
                Popular Themes
              </a>
            </ProfileCaption>
            <ProfileCaption>
              <a href="#appeal-aud" className="hover:text-blue-500">
                Appeal to Audience
              </a>
            </ProfileCaption>
            <ProfileCaption>
              <a href="#impact" className="hover:text-blue-500">
                Impact
              </a>
            </ProfileCaption>
            <ProfileCaption>
              <a
                href="#controversy"
                className="hover:text-blue-500"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Controversy
              </a>
            </ProfileCaption>
            <BlogAuthor>Author: Kelly & Jessica</BlogAuthor>
          </div>

          {/* <ProfileCaption className="items-start">2005-2013</ProfileCaption> */}
          <ProfileTitle id="religious-bg">Religious Background</ProfileTitle>
          <ProfileParagraph className="items-start">
            Ahmadinejad is a devout Muslim. He has emphasized his commitment to
            Islamic values and principles throughout his political career.
            Ahmadinejad holds a bachelor's degree in civil engineering, a
            master's degree and a Ph.D. in transportation engineering from the
            same university.
          </ProfileParagraph>
          <ProfileTitle id="pol-envt">
            <span className="block -mb-1">Political Environment</span>
            <span className="uppercase block font-bold">During His Reign</span>
          </ProfileTitle>

          <ProfileParagraph className="">
            One of the central issues during Ahmadinejad's presidency was Iran's
            nuclear program. The international community, particularly Western
            countries, suspected the development of nuclear weapons and showed
            concern. This led to strained relations between Iran and the United
            States, European Union, and the United Nations Security Council. 
            Moreover, Ahmadinejad's presidency was criticized for its handling
            of human rights issues. There were reports of increased restrictions
            on freedom of speech, press, and assembly, as well as suppression of
            political dissent. At his time, the governemnt mismanaged the
            economy and led to high inflation and unemployment which declined
            the value of Iranian Rial (National Currency).
          </ProfileParagraph>

          <ProfileTitle id="opposition">Opposition</ProfileTitle>
          <ProfileParagraph>
            The Green Movement emerged due to the dispute of presidential
            elections of 2009 in the form of civil disobedience e.g protests,
            street demonstrations and use of social media. The movement
            represented diverse coalition of Iranians and challenged
            Ahmadinejad’s legitimacy as president. Ahmadinejad’s political
            ideology and policies were oddly different from the Green
            Movements’s reformist goals and aspirations. He subsidised basic
            goods and services to lower-income segments of society, while the
            Green Movement criticized that this impacted on inflation throughout
            the country.
          </ProfileParagraph>
          <ProfileTitle id="archetype">
            <span className="block -mb-1 mt-1">Archetype</span>
            <span className="uppercase block font-bold">NATIONAL DEFENDER</span>
          </ProfileTitle>
          <ProfileParagraph>
            <span className="block uppercase mb-4">
              <ul>
                <li>Defend Iran's Sovereignty</li>
                <li>Champion of the People</li>
                <li>Resist external + western influences</li>
              </ul>
            </span>
            <span className="block">
              Ahmadinejad consistently portrayed himself as a staunch defender
              of Iran's national sovereignty, opposing perceived foreign
              interference and advocating for self-reliance. He openly
              criticized Western powers, e.g the United States, and presented
              himself as a challenger to Western hegemony. Ahmadinejad's
              populist appeals to the marginalized segments of society, his
              defiance of international pressure, and his anti-Israel stance
              further solidified his image as a nationalistic leader committed
              to safeguarding Iran's interests.
            </span>
          </ProfileParagraph>
          <ProfileTitle id="rise-in-power" className="scroll-smooth">
            Rise in Power
          </ProfileTitle>
          <ProfileParagraph>
            Ahmadinejad’s rise in power was led by his involvement in the 1979
            Iranian Revolution and subsequent positions in the government, i.e
            as a mayor, that allowed him to establish a political foundation. He
            also capitalized on the frustrations of lower-income Iranians.
            Ahmadinejad also garnered support from conservative factions within
            Iran, which secured him the presidency in 2005.
          </ProfileParagraph>

          <ProfileTitle id="implement-power" className="mt-1">
            Implementing Power
          </ProfileTitle>
          <ProfileParagraph>
            As president, Ahmadinejad challenged political elites and advocated
            for a more inclusive and participatory government. However, his
            power was limited within the complex Iranian political system.
            Ahmadinejad frequently invoked religious references in his speeches
            and policies. He enjoyed support from conservative factions within
            the religious establishment, who saw him as a defender of Islamic
            values and principles.
          </ProfileParagraph>

          <ProfileTitle id="target-aud">Target Audience</ProfileTitle>
          <ProfileParagraph>
            <span className="block">
              <ul>
                <li>Working-class Iranians</li>
                <li>Conservatives and traditionalists</li>
                <li>Anti-Western, patriotic Iranians</li>
              </ul>
            </span>
          </ProfileParagraph>
          <ProfileTitle id="popular-themes">
            Popular Themes in Campaign
          </ProfileTitle>
          <ProfileParagraph>
            His campaign had promises of equal wealth distribution, a better
            economy, and anti-Western sentiments. Moreover, he spoke through
            nationalistic messaging that appealed to Iranian nationalism. A part
            of why Ahmadinejad’s campaigns were successful was because of the
            networks of volunteers that helped spread his message and gain
            momentum, thereby mobilizing grassroots support.
          </ProfileParagraph>

          <ProfileTitle id="appeal-aud">Appeal to the Audience</ProfileTitle>
          <ProfileParagraph>
            He appeals to the target audience by fabricating stories about his
            opponents rigging the election, to encourage the people to ‘vote for
            the better man’. He promised to address economic inequalities and
            improve living standards of ordinary Iranians. He held a strong
            stance against corruption and vowed to equally distribute wealth. 
          </ProfileParagraph>
          <ProfileTitle id="impact">Lasting Impact</ProfileTitle>
          <ProfileParagraph>
            Ahmadinejad’s presidency highlighted the grievances of working class
            and lower-income Iranians and implemented social welfare programs.
            His actions increased political participation + engagement, leaving
            a lasting impact on Iranian politics. His anti-Western sentiments
            and strong stance on Iran’s nuclear program held significant
            influence on Iran’s international relations. His presidency led to a
            much conservative influence in subsequent elections in Iran. 
          </ProfileParagraph>
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
              src="../images/poster-ahmadinejad.png"
              alt="A poster of Mahmoud Ahmadinejad"
            />
          </GalleryItem>
          <GalleryItem>
            <img src="../images/gallery-ahmadinejad-1.png"></img>
          </GalleryItem>
          {/* <GalleryItem>
            <img
              src="https://media.cnn.com/api/v1/images/stellar/prod/121003011517-iran-ahmadinejad-sanctions.jpg?q=w_3249,h_2084,x_0,y_0,c_fill"
              className="object-fit"
            />
          </GalleryItem> */}
        </Gallery>
      </main>
    </>
  );
}

export default ProfileAhmadinejad;
