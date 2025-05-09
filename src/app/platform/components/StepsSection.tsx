import Image from "next/image";

export default function StepsSection() {
    const steps = [
        {
            number: 1,
            title: "Connect your user source of truth",
            description:
                "Stitchflow infers your unique business sprawl, users and roles and policies from your specific IDPs and HR systems.",
            image: "/product-page/step-1.png",
        },
        {
            number: 2,
            title: "Connect to every SaaS tool in your IT environment",
            description: "Stitchflow connects to even the most siloed non SAML/non SCIM apps in your IT environment.",
            image: "/product-page/step-2.png",
        },
        {
            number: 3,
            title: "Instantly reconcile SaaS data",
            description:
                "Stitchflow visualizes and instantly reconciles SaaS user data against your user sources of truth and helps you filter the data to represent your unique policies and exceptions.",
            image: "/product-page/step-3.png",
        },
        {
          number: 4,
          title: "Filter to represent your unique policies and exceptions",
          description:
            "Stitchflow helps you filter reconciled data to represent your company's unique policies and exceptions.",
          image: "/product-page/step-4.png",
          imageWidth: 600,
          imageHeight: 400,
        },
        {
          number: 5,
          title: "Set up automatic alerts for critical issues",
          description:
            "Stitchflow's automated insights help uncover gaps, prevent risks and identify vulnerabilities.",
          image: "/product-page/step-5.png",
          imageWidth: 600,
          imageHeight: 400
        },
        {
            number: 6,
            title: "Remediate gaps from where you are",
            description: "Stitchflow helps you get on top through bulk remediation or tickets created in your ITSM.",
            image: "/product-page/step-6.png",
        },
    ];

    return (
        <section className="flex flex-col items-center py-14 md:py-40 w-full z-[2] px-6">
            <div className="w-full max-w-[1256px] mx-auto">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="flex relative items-start justify-center lg:gap-8 w-full lg:border-l border-[#E4DFDC]"
                    >
                        <div className="hidden lg:flex justify-center items-center bg-[#F8F5F3] w-[40px] h-[40px] absolute -left-[20px]">
                            <div className="w-2 h-2 bg-[#e4dfdc] rounded" />
                        </div>

                        <div
                            className={`${
                                index !== steps.length - 1 ? "pt-0 pb-14 md:pb-20" : ""
                            } px-0 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6  flex-1 lg:ml-8`}
                        >
                            <div className="gap-2  flex-1 grow flex flex-col items-start">
                                <div className="inline-flex items-start gap-2 px-3 py-1 md:px-4 md:py-2  bg-[#f1acc0] rounded-[100px]">
                                    <span className=" w-fit text-[#363338] whitespace-nowrap">Step {step.number}</span>
                                </div>

                                <h2 className="font-medium text-[#363338] md:text-2xl text-xl">{step.title}</h2>

                                <p className="  font-normal text-[#7b7481] text-base leading-6">
                                    {step.description}
                                </p>
                            </div>

                            <div
                                className={`flex-1 flex justify-center items-center grow rounded-[32px] overflow-hidden"
                                }`}
                            >
                                {step.image && (
                                    <Image
                                        width={600}
                                        height={400}
                                        alt={`Step ${step.number} illustration`}
                                        src={step.image}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
