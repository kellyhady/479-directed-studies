"use client";

import Link from "next/link";
import Gallery, { GalleryItem } from "/components/gallery.jsx";

const ProfileTitle = ({ children }) => (
  <span className="text-mid md:col-start-2 font-serif font-bold">
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

// const Gallery = ({ children }) => (
//   <div className="gallery-wrap md:col-start-3"></div>
// );

function ProfileAhmadinejad() {
  return (
    <>
      <nav className="border-b-1 border-b-black">
        <h1 className="text-center text-4xl font-display">Mao Ze Dong</h1>

        <h3 className="text-center text-sm font-serif">
          <Link href="/">Back Home</Link>
        </h3>
      </nav>
      <main className="grid md:grid-cols-4 min-h-screen px-4 md:divide-x-1 divide-black">
        <section className="md:col-span-3 grid md:grid-cols-3">
          <ProfileCaption>Sixth President of Iran</ProfileCaption>
          {/* <ProfileCaption className="items-start">2005-2013</ProfileCaption> */}
          <ProfileTitle>Background</ProfileTitle>
          <ProfileParagraph className="items-start">
            <li>
              <ul> Raised by a rich peasant farmer </ul>
              <ul>
                Enjoyed classical chinese novels over texts that preached
                confucian morals
              </ul>
              <ul>
                Critqued and refused to accept his own arranged marriage Left
                home at 16 to complete his elementary school training
              </ul>
            </li>
          </ProfileParagraph>
          <ProfileTitle>
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
          <ProfileTitle>Legacy</ProfileTitle>
          <ProfileParagraph>
            <li>
              <ul>
                Contributions: Mao united China, promoted industrialization, and
                made advancements in education and healthcare.{" "}
              </ul>
              <ul>
                Historical Significance: Mao's legacy continues to shape China's
                identity and its path as a global power.
              </ul>
              <ul>
                Status of Women Education His ideology has help china become a
                world power
              </ul>
            </li>
          </ProfileParagraph>
          <ProfileTitle>
            <span className="block -mb-1 mt-1">Arcetype</span>
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
          <ProfileTitle>Rise to Power</ProfileTitle>
          <ProfileParagraph>
            <li>
              <ul>
                {" "}
                Had a post at the Beijing University Library in 1918 where he
                met two fellow founders of the Chinese communist party. At this
                time described himself as "a Marxist in theory and to some
                extent in action," Founded Communist party of China in 1921 and
                joined the communist party in 1922.
              </ul>
              <ul>
                The Long March: In 1934, Mao led the Red Army on a grueling
                retreat, covering over 6,000 miles, which solidified his
                leadership within the Communist Party
              </ul>
              <ul>
                Assumed Role of Party Chariman in 1945 Helped establish People's
                Republic of China in 1949
              </ul>
            </li>
          </ProfileParagraph>
          <ProfileTitle className="mt-1">Implementing his Power</ProfileTitle>
          <ProfileParagraph>
            As president, Ahmadinejad challenged political elites and advocated
            for a more inclusive and participatory government. However, his
            power was limited within the complex Iranian political system.
            Ahmadinejad frequently invoked religious references in his speeches
            and policies. He enjoyed support from conservative factions within
            the religious establishment, who saw him as a defender of Islamic
            values and principles.
          </ProfileParagraph>
          <ProfileTitle>Target Audience</ProfileTitle>
          <ProfileParagraph>
            <span className="block">
              <ul>
                <li>Working-class Iranians</li>
                <li>Conservatives and traditionalists</li>
                <li>Anti-Western, patriotic Iranians</li>
              </ul>
            </span>
          </ProfileParagraph>
          <ProfileTitle>Popular Themes in Campaign</ProfileTitle>
          <ProfileParagraph>
            His campaign had promises of equal wealth distribution, a better
            economy, and anti-Western sentiments. Moreover, he spoke through
            nationalistic messaging that appealed to Iranian nationalism. A part
            of why Ahmadinejad’s campaigns were successful was because of the
            networks of volunteers that helped spread his message and gain
            momentum, thereby mobilizing grassroots support.
          </ProfileParagraph>
          <ProfileTitle>Appeal to the Audience</ProfileTitle>
          <ProfileParagraph>
            He appeals to the target audience by fabricating stories about his
            opponents rigging the election, to encourage the people to ‘vote for
            the better man’. He promised to address economic inequalities and
            improve living standards of ordinary Iranians. He held a strong
            stance against corruption and vowed to equally distribute wealth. 
          </ProfileParagraph>
          <ProfileTitle>Lasting Impact</ProfileTitle>
          <ProfileParagraph>
            Ahmadinejad’s presidency highlighted the grievances of working class
            and lower-income Iranians and implemented social welfare programs.
            His actions increased political participation + engagement, leaving
            a lasting impact on Iranian politics. His anti-Western sentiments
            and strong stance on Iran’s nuclear program held significant
            influence on Iran’s international relations. His presidency led to a
            much conservative influence in subsequent elections in Iran. 
          </ProfileParagraph>
          <ProfileTitle>Controversy</ProfileTitle>
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
            <div>Mahmoud Ahmadinejad</div>
          </GalleryItem>
        </Gallery>
      </main>
    </>
  );
}

export default ProfileAhmadinejad;
