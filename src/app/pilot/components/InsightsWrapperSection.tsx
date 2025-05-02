import Image from "next/image";

export const InsightsWrapperSection = () => {

  const insightCards = [
    {
      id: 1,
      image: {
            alt:"Group",
            src:"/free-pilot/Vector.png"
      },
      text: "Deactivate 13 accounts of users who are deactivated in Okta.",
    },
    {
      id: 2,
      image: {
            alt:"figma",
            src:"/free-pilot/figma.png"
      },
      text: "Downgrade 7 full-access Figma accounts; the last edit was over 90 days ago.",
    },
    {
      id: 3,
      image: {
            alt:"logo-slack",
            src:"/free-pilot/slack.png"
      },
      text: "75 admin accounts found for Slack; review accounts for downgrading roles.",
    },
    {
      id: 4,
      image: {
            alt:"logo-google",
            src:"/free-pilot/google.png"
      },
      text: "Archive / Delete 57 suspended Google accounts with suspended status > 6 mo and not in HR-Legal hold Org unit.",
    },
    {
      id: 5,
      image: {
            alt:"logo-miro",
            src:"/free-pilot/miro.png"
      },
      text: "19 Miro users were directly assigned app; recommend assigning app via Okta push groups for all SCIM apps.",
    },
    {
      id: 6,
      image: {
            alt:"logo-clickup",
            src:"/free-pilot/clickup.png"
      },
      text: "Review accounts for 8 users outside of application assignment policy by department.",
    },
  ];

  return (
    <section className="flex flex-col items-center py-10 md:py-20 px-6 w-full gap-20">
      <div className="flex flex-col items-center gap-10 max-w-[1256px] w-full">
        <h2 className="text-3xl md:text-[40px] font-semibold text-[#363338] leading-8 md:leading-[48px] w-full">
          Sample insights and recommendations from the pilot
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 w-full">
          {insightCards.map((card) => (
            <div
              key={card.id}
              className="flex items-center justify-start gap-4 p-6 rounded-[32px] border border-[#545058] overflow-hidden bg-white"
            >
              <Image
                width={40}
                height={40}
                alt={card.image.alt}
                src={card.image.src}
              />
              <p className="font-regular text-[#363338] text-start">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
