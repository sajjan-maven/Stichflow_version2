// import { SearchIcon } from "lucide-react";
// import React from "react";

// const BlogHeroSection = () => {
//     const pageTitle = "Blog";
//     const searchPlaceholder = "SearchIcon posts";
//     return <div>
//         <header className="w-full py-16 px-4 md:px-8 lg:px-16 bg-[#e3dad0] z-[3]">
//       <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
//         <h1 className="font-semibold text-[40px] leading-[48px] text-[#363338] font-['Geist',Helvetica]">
//           {pageTitle}
//         </h1>

//         <div className="relative flex items-center w-full max-w-[280px]">
//           <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#aca8b2]">
//             <SearchIcon className="h-4 w-4" />
//           </div>
//           <Input
//             className="pl-9 py-3 bg-[#f8f5f3] border-[#e4dbd0] rounded-xl text-[#aca8b2] font-label-regular"
//             placeholder={searchPlaceholder}
//           />
//         </div>
//       </div>
//     </header>
//     </div>;
// };

// export default BlogHeroSection;

import {SearchIcon} from "lucide-react";
import React from "react";

const BlogHeroSection = () => {
    const pageTitle = "Blog";
    const searchPlaceholder = "Search posts";

    return (
        <div>
            <header className="w-full py-16 px-4 md:px-8 lg:px-16 bg-[#e3dad0] z-[3]">
                <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 flex-wrap">
                    <h1 className="font-semibold text-[40px] leading-[48px] text-[#363338] font-['Geist',Helvetica]">
                        {pageTitle}
                    </h1>

                    <div className="relative flex items-center w-full max-w-[280px]">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#aca8b2]">
                            <SearchIcon className="h-4 w-4" />
                        </div>
                        <input
                            type="text"
                            placeholder={searchPlaceholder}
                            className="pl-9 pr-4 py-3 w-full bg-[#f8f5f3] border border-[#e4dbd0] rounded-xl text-[#363338] placeholder-[#aca8b2] font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#d5c6b9]"
                        />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default BlogHeroSection;
