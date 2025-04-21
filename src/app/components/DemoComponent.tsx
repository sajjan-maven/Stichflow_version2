// import { ArrowRightIcon } from "lucide-react";
// import React from "react";

// const DemoComponent = () => {
//     return <div>  <section className="flex flex-col items-center gap-2 py-20 px-6 md:px-12 lg:px-24 relative z-[1] bg-[#363338] rounded-[32px_32px_0px_0px] w-full">
//     <Card className="relative w-full h-[400px] bg-[#565258] rounded-[32px] overflow-hidden border-none">
//       <div className="relative w-full h-full">
//         <div className="absolute top-[233px] left-6 md:left-10 flex flex-col gap-6 max-w-[830px]">
//           <div className="flex flex-col items-start gap-1 w-full">
//             <h2 className="font-['Geist',Helvetica] font-semibold text-white text-2xl leading-8">
//               Join Our Free Pilot
//             </h2>
//             <p className="font-['Geist',Helvetica] font-normal text-white text-base leading-6">
//               Schedule the demo that convinced IT leaders in just one sitting.
//             </p>
//           </div>

//           <div className="flex items-center gap-2">
//             <button
//             //   variant="outline"
//               className="px-6 py-4 h-auto rounded-xl border-[#54505833] shadow-[0px_1px_1px_#5450581a,0px_4px_8px_#54505805,inset_0px_-2px_4px_#0000001f] [background:linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(249,248,250,1)_100%)] text-[#363338] font-medium"
//             >
//               Book Demo
//             </button>

//             <button className="px-6 py-4 h-auto rounded-xl shadow-[0px_2px_12px_#54505840,0px_2px_3px_#54505845,inset_0px_-2px_4px_#00000099] [background:linear-gradient(180deg,rgba(84,80,88,1)_0%,rgba(54,51,56,1)_100%)] text-white font-medium">
//               Start Trial
//               <ArrowRightIcon className="ml-2 h-4 w-4" />
//             </button>
//           </div>
//         </div>

//         <div className="absolute top-0 right-0 h-full">
//           <img
//             className="absolute w-[725px] h-[400px] top-[101px] right-[33px] object-cover"
//             alt="Dashboard preview"
//             src="/frame-2-2.png"
//           />
//         </div>
//       </div>
//     </Card>
//   </section></div>;
// };

// export default DemoComponent;
import {ArrowRightIcon} from "lucide-react";
import Image from "next/image";
import React from "react";

// If you're using a Card component from a library, import it here
// Otherwise, here's a simple Card component definition
// const Card = ({children, className = ""}: {children: React.ReactNode; className?: string}) => {
//     return <div className={`${className}`}>{children}</div>;
// };

const DemoComponent = () => {
    return (
        <section className="w-full bg-[#363338] rounded-t-[32px] py-20 px-6 md:px-12 lg:px-24 relative z-[1]">
            <div className="relative w-full h-[400px] bg-[#565258] rounded-[32px] overflow-hidden border-none">
                <div className="relative w-full h-full">
                    {/* Content Section */}
                    {/* <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex flex-col gap-6 max-w-[830px] z-10"> */}
                    <div className="absolute left-6 md:left-10 bottom-16 flex flex-col gap-6 max-w-[830px] z-10">
                        <div className="flex flex-col items-start gap-1 w-full">
                            <h2 className="font-semibold text-white text-2xl leading-8">Join Our Free Pilot</h2>
                            <p className="font-normal text-white text-base leading-6">
                                Schedule the demo that convinced IT leaders in just one sitting.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                            <button className="px-6 py-4 h-auto rounded-xl border border-[#54505833] shadow-[0px_1px_1px_#5450581a,0px_4px_8px_#54505805,inset_0px_-2px_4px_#0000001f] bg-gradient-to-b from-white to-[#f9f8fa] text-[#363338] font-medium hover:opacity-90 transition-opacity">
                                Book Demo
                            </button>

                            <button className="px-6 py-4 h-auto rounded-xl shadow-[0px_2px_12px_#54505840,0px_2px_3px_#54505845,inset_0px_-2px_4px_#00000099] bg-gradient-to-b from-[#545058] to-[#363338] text-white font-medium hover:opacity-90 transition-opacity flex items-center">
                                Start Trial
                                <ArrowRightIcon className="ml-2 h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="absolute inset-0 overflow-hidden">
                        <Image
                            className="absolute w-[725px] h-[400px] top-[101px] right-[33px]
                            object-cover"
                            alt="Dashboard preview"
                            src="/images/Frame 2 2.svg"
                            width={725}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoComponent;
