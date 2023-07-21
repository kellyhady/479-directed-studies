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

// const Crumbs = ({ children }) => (
//   <span className="text-mid md:col-start-1 font-serif font-bold">
//     <a href="" className="m-2">
//       {children}
//     </a>
//   </span>
// );

// const Gallery = ({ children }) => (
//   <div className="gallery-wrap md:col-start-3"></div>
// );

function ProfileAhmadinejad() {
  return (
    <>
      <nav className="border-b-1 border-b-black">
        <h1 className="text-center text-4xl font-display">Boris Johnson</h1>

        <h3 className="text-center text-sm font-serif">
          <Link href="/">Back Home</Link>
        </h3>
      </nav>
      <main className="grid md:grid-cols-4 min-h-screen px-4 md:divide-x-1 divide-black">
        <section className="md:col-span-3 grid md:grid-cols-3">
          <ProfileCaption>
            Former Prime Minister of the United Kingdom
          </ProfileCaption>

          <ProfileCaption>Blog Content by Keita</ProfileCaption>

          {/* <ProfileCaption className="items-start">2005-2013</ProfileCaption> */}
          <ProfileTitle>Background</ProfileTitle>
          <ProfileParagraph className="items-start">
            Alexander Boris de Pfeffel Johnson (Boris Johnson) was born on June
            19, 1964. He is a British politician and is best known for being the
            former UK Prime Minister from 2019-2022. He attended Eton College
            and Balliol College, Oxford, one of the constituent colleges of the
            University of Oxford in England. He was baptized as an infant, but
            later on during college, he denounced his Catholic faith and became
            an Anglican, joining the Church of England.
          </ProfileParagraph>
          <ProfileTitle id="political-environment">
            <span className="block -mb-1">Political Environment</span>
            <span className="uppercase block font-bold">During His Reign</span>
          </ProfileTitle>

          <ProfileParagraph className="">
            Prior to his involvement with politics, Boris Johnson worked as a
            journalist. In 1997, Johnson was selected as the Conservative
            candidate for Clwyd South in the House of Commons, but lost to the
            Labour Party candidate Martyn Jones. He was re-elected into the
            Parliament in 2005. In 2008, he was elected as the mayor of London
            and served until 2012. During his terms, he was involved in personal
            controversies and scandals. The United Kingdom parliamentary
            expenses scandal in 2009 showed excessive expenses and allowances
            allocated to members of the Parliament which were condemned by the
            public. Boris Johnson was accused of excessive taxi rides. From
            2016-2018, he served as the Foreign secretary under Theresa May. In
            2019, he was automatically appointed Prime Minister of the UK after
            becoming leader of the Conservative Party. One major political issue
            was Brexit, with Johnson being an avid supporter and campaigning. In
            January 2020, the UK officially left the EU. During the peak of the
            COVID-19 pandemic, Johnson was praised for his active response in
            dealing with restrictions and lockdown. In 2022, he resigned from
            being Prime Minister due to the Partygate scandal involving members
            of the Parliament breaking lockdown restrictions. He remained a
            Member of Parliament until June 2023, where he officially resigned
            from all political positions and duties.
          </ProfileParagraph>

          <ProfileTitle>Opposition</ProfileTitle>
          <ProfileParagraph>
            <ul>
              <li className="mb-1">
                <h3 className="font-bold">European Union (EU): </h3>
                Johnson advocated for Brexit, which was a move to have the
                United Kingdom leave the EU. Scottish Independence: Johnson has
                voiced opposition to Scottish independence, advocating to keep
                the UK and Scotland intact.
              </li>
              <li className="mb-1">
                <h3 className="font-bold">Jeremy Corbyn: </h3>A direct political
                rival candidate of Johnson as he was the leader of the Labour
                Party. They had differing viewpoints on certain issues such as
                Brexit.{" "}
              </li>
              <li className="mb-1">
                <h3 className="font-bold">Extinction Rebellion: </h3>
                Johnson has expressed his criticism towards environmental
                activist group Extinction Rebellion due to their disruptive
                actions surrounding climate action.
              </li>
              <li className="mb-1">
                <h3 className="font-bold">Sadiq Khan: </h3>
                Khan is the Mayor of London and from the Labour Party. Johnson
                and Khan had differences involving governance and policies in
                the city.
              </li>
            </ul>
          </ProfileParagraph>

          <ProfileTitle>
            <span className="block -mb-1 mt-1">Arcetype</span>
            {/* <span className="uppercase block font-bold">NATIONAL DEFENDER</span> */}
          </ProfileTitle>
          <ProfileParagraph>
            <span className="block uppercase mb-4 font-bold">
              Boris Johnson can be categorized as a National Defender.
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
          <ProfileTitle>Rise in Power</ProfileTitle>
          <ProfileParagraph>
            Boris Johnson is often praised for his charisma and ability to
            persuade the public, that being said, there are several factors that
            contributed to his rise to power. One factor is his early political
            career as he initially worked as a journalist where he gained
            attention for his writing style. His time as the Mayor of London
            also increased his popularity and created more visibility through
            his initiatives, such as the Boris Bike sharing program. During the
            Brexit Campaign, Johnson was a leading figure in the movement and
            the win paved the way for him to increase his profile. While serving
            his terms as Prime Minister, he was praised in dealing with the
            COVID-19 lockdowns and through his leadership, he established
            himself as a populist leader.
          </ProfileParagraph>
          <ProfileTitle className="mt-1">Implementing his Power</ProfileTitle>
          <ProfileParagraph>
            During his time as Prime Minister of the United Kingdom, Boris
            Johnson held various positions on different issues throughout his
            political career. It is worth noting that politicians' positions can
            evolve and change over time, but here are some key stances that
            Boris Johnson has been associated with. The European Union played a
            significant role in John’s Leave campaign during the Brexit
            referendum in 2016. His criticisms were that he saw excessive
            bureaucracy and lack of democratic accountability within the EU, and
            argued for the United Kingdom to leave the European Union.
            Additionally, Johnson pushed for stricter immigration policies.He
            advocated for implementing a points-based system to control
            immigration and prioritize highly skilled workers. Johnson has
            expressed support for lowering taxes, especially for businesses, in
            order to encourage economic growth and investment. He has also
            pushed for large-scale infrastructure projects, such as the
            construction of a high-speed rail link known as HS2, and expanding
            airport capacity in the UK. Johnson has advocated for tougher
            measures against crime, including increasing police presence and
            sentencing reforms. He has also expressed support for expanding
            stop-and-search powers for the police. Lastly, Johnson’s education
            platform emphasized the importance of educational reforms and has
            supported initiatives such as expanding academies and free schools,
            which have more independence from local authorities.
          </ProfileParagraph>
          <ProfileTitle>Target Audience</ProfileTitle>
          <ProfileParagraph>
            Conservatives are among Boris Johnson's target demographic,
            particularly those who find him approachable and relatable.
            Working-class people typically identify with his manner, seeing him
            as a regular human being. Potential voters like the fact that he
            doesn't pretend to know what is happening at all times and that he
            sometimes doesn't have answers, appearing spontaneous and genuine.
            Johnson has accumulated strong support among Brexit supporters in
            the United Kingdom's removal from the European Union. His
            determination with Brexit appeals to people who value independence,
            and control over immigration and trade policy.
          </ProfileParagraph>
          <ProfileTitle>Popular Themes in Campaign</ProfileTitle>
          <ProfileParagraph>
            "Get Brexit Done" was Johnson's key campaign message during the 2019
            general election. It resonated with many who were frustrated with
            the prolonged Brexit process, and he promised to deliver Brexit and
            bring an end to the uncertainty surrounding the UK's departure from
            the European Union. Another popular slogan was “Take Back Control,”
            which was associated with the Brexit campaign during the 2016 EU
            referendum. It tapped into the desire for sovereignty and the idea
            that leaving the EU would allow the UK to regain control over its
            laws, borders, and trade policies.Following the COVID-19 pandemic,
            Johnson coined “Build Back Better” to emphasize the need to rebuild
            and recover the country. This slogan was used to convey the message
            that the government's focus would be on creating a stronger and more
            resilient economy and society in the aftermath of the crisis. As the
            Mayor of London from 2008 to 2016, Johnson played a prominent role
            in promoting the city's hosting of the 2012 Olympic Games. He
            successfully used the Olympics as a platform to showcase London's
            vibrancy, diversity, and cultural heritage, contributing to the
            overall success of the event. Another initiative as Mayor of London
            was his public bicycle-sharing scheme known as "Boris Bikes." The
            initiative aimed to improve transportation options, reduce
            congestion, and promote cycling as an environmentally friendly mode
            of transport. The term "Boris Bikes" became widely used to refer to
            the scheme, which remains popular in the city.
          </ProfileParagraph>
          <ProfileTitle>Appeal to the Audience</ProfileTitle>
          <ProfileParagraph>
            Boris Johnson is well known for his engaging and enthusiastic media
            presence. To connect with his audience, he frequently employs humor
            which creates a connection with his audience. Johnson uses simple
            forms of communication to showcase relatively. His eagerness to
            communicate with the public through media interviews, speeches, and
            social media platforms may create a personal bond with his potential
            supporters. Johnson also likes to showcase to the people all the
            potential changes he intends on making. For example, During the
            Brexit campaign, Johnson and other government officials were accused
            of making misconceptions about the potential benefits and drawbacks
            of leaving the European Union. The response to these misconceptions
            prompted allegations of disinformation and harmed the credibility of
            what the Brexit movement may have had to offer the people of
            Britain.
          </ProfileParagraph>
          <ProfileTitle>Lasting Impact</ProfileTitle>
          <ProfileParagraph>
            Boris Johnson had a significant influence on Britain by guiding the
            country through the Brexit process. Brexit is unlikely to have
            occurred without him. His personality and style of politics as a
            populist leader left an indelible effect on people. During his
            tenure as Prime Minister, Johnson was involved in various
            controversies, which sparked widespread outrage and called into
            question his behavior. These actions altered how some people
            perceive him as a leader and created issues about political honesty
            and accountability. The consequences of Johnson's leadership and the
            scandals in which he was involved will be studied and argued for a
            long time since various individuals have different perspectives on
            them.
          </ProfileParagraph>
          <ProfileTitle>Controversy</ProfileTitle>
          <ProfileParagraph>
            In the Party Gate Scandal, It was found that Boris Johnson's
            government officials and advisors had social parties and gatherings
            during COVID-19 lockdowns, although the public was not permitted to
            do so. This provoked controversy and questioning since it
            demonstrated disregard and hypocrisy for the laws put in place by
            the government itself, which made the public distrustful. The Chris
            Pincher Scandal raised claims against Johnson about his treatment of
            misconduct allegations against Pincher and his subsequent
            reappointment to the cabinet while being aware of these allegations
            in 2019. The government first claimed that Johnson was ignorant of
            the misbehavior. However, it was found that the Prime Minister was
            aware of the accusations, which were either settled or did not move
            to a formal complaint. This discovery has fuelled the uproar
            surrounding the Chris Pincher Scandal by raising concerns about the
            prime minister's decision-making. Dominic Cummings, a senior advisor
            to Boris Johnson faced criticism for visiting Durham during the
            pandemic even though he had COVID-19 symptoms. Concerns were
            expressed regarding hypocrisy and disregard for the regulations and
            guidelines in place to safeguard public health. The link between the
            Dominic Cummings controversy and the Partygate incident is the
            notion that government members were not adhering to the same norms
            that they advocated for the broader public. Both cases included
            people close to Boris Johnson's leadership appearing to defy their
            own recommendations about travel, isolation, and gatherings at a
            time when the public was warned to follow rules regarding the spread
            of the disease. The government formed by Boris Johnson faced a
            serious collapse as a result of the scandals. As a result of these
            events, several government officials resigned from their jobs,
            creating an atmosphere of insecurity inside the administration. Over
            50 government officials had resigned resulting in Boris Johnson
            resigning as Prime Minister of the United Kingdom. The scandals and
            resignations had a significant influence on the political
            environment, altering the government's trajectory and prompting a
            leadership transition.
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
