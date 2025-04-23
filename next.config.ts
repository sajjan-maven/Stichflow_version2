// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.prod.website-files.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "healing-event-e815d1d155.media.strapiapp.com",
                port: "",
                pathname: "/**",
            },
        ],
        domains: [
            "localhost",
            "healing-event-e815d1d155.strapiapp.com",
            "stitchflow.io",
            "healing-event-e815d1d155.media.strapiapp.com",
            "cdn.prod.website-files.com",
            "job-board-seven-lilac.vercel.app",
            "renewaltracker.stitchflow.io",
        ],
        deviceSizes: [360, 640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    async headers() {
        return [
            // {
            //     source: "/_next/:path*",
            //     headers: [
            //         {
            //             key: "X-Robots-Tag",
            //             value: "noindex, nofollow",
            //         },
            //     ],
            // },
            // {
            //     source: "/images/link.svg",
            //     headers: [
            //         {key: "X-Robots-Tag", value: "noindex, nofollow"},
            //         {key: "Cache-Control", value: "no-store, no-cache, must-revalidate"},
            //     ],
            // },
            // {
            //     source: "/images/Reddit.svg",
            //     headers: [
            //         {key: "X-Robots-Tag", value: "noindex, nofollow"},
            //         {key: "Cache-Control", value: "no-store, no-cache, must-revalidate"},
            //     ],
            // },
            // {
            //     source: "/images/:path*",
            //     headers: [{key: "X-Robots-Tag", value: "noindex, nofollow"}],
            // },
            // {
            //     source: "/_next/static/:path*",
            //     headers: [{key: "X-Robots-Tag", value: "noindex, nofollow"}],
            // },
            // {
            //     source: "/_next/image/:path*",
            //     headers: [{key: "X-Robots-Tag", value: "noindex, nofollow"}],
            // },
            // {
            //     source: "/api/:path*",
            //     headers: [{key: "X-Robots-Tag", value: "noindex, nofollow"}],
            // },
            // {
            //     // Block all JavaScript and CSS files
            //     source: "/:path*\\.(js|css)$",
            //     headers: [{key: "X-Robots-Tag", value: "noindex, nofollow"}],
            // },
            // {
            //     source: "/:path*\\.(jpg|jpeg|png|gif|svg|webp)$",
            //     headers: [{key: "X-Robots-Tag", value: "noindex, nofollow"}],
            // },
            // {
            //     // Add cache control for static assets
            //     source: "/_next/static/:path*",
            //     headers: [{key: "Cache-Control", value: "public, max-age=31536000, immutable"}],
            // },
            // {
            //     // Add cache control for images
            //     source: "/_next/image/:path*",
            //     headers: [{key: "Cache-Control", value: "public, max-age=86400"}],
            // },
            {
                source: "/_next/:path*",
                headers: [{key: "Cache-Control", value: "public, max-age=31536000, immutable"}],
            },
            {
                source: "/api/:path*",
                headers: [{key: "Cache-Control", value: "public, max-age=86400"}],
            },
            {
                source: "/:path*\\.(jpg|jpeg|png|gif|svg|webp)$",
                headers: [{key: "Cache-Control", value: "public, max-age=86400"}],
            },
        ];
    },

    async rewrites() {
        return {
            // Rewrites that are checked before any pages/public files
            beforeFiles: [],
            // Rewrites that are checked after pages/public files, but before dynamic routes
            afterFiles: [],
            // These rewrites are checked after both pages/public files and dynamic routes
            fallback: [
                // Renewal Tracker / Offboard IT tool application
                {
                    source: "/tools/renewal-tracker",
                    destination: "https://contract-management-git-c166d7-thamim-the-tester-ttts-projects.vercel.app",
                },
                {
                    source: "/tools/renewal-tracker/:path*",
                    destination:
                        "https://contract-management-git-c166d7-thamim-the-tester-ttts-projects.vercel.app/:path*",
                },
                {
                    source: "/tools/renewal-tracker/public/:path*",
                    destination:
                        "https://contract-management-git-c166d7-thamim-the-tester-ttts-projects.vercel.app/public/:path*",
                },
                {
                    source: "/tools/renewal-tracker/images/:path*",
                    destination:
                        "https://contract-management-git-c166d7-thamim-the-tester-ttts-projects.vercel.app/images/:path*",
                },
                {
                    source: "/tools/renewal-tracker/_next/:path*",
                    destination:
                        "https://contract-management-git-c166d7-thamim-the-tester-ttts-projects.vercel.app/_next/:path*",
                },
                {
                    source: "/tools/renewal-tracker/favicon.ico",
                    destination:
                        "https://contract-management-git-c166d7-thamim-the-tester-ttts-projects.vercel.app/favicon.ico",
                },
                // offboard it tool application
                {
                    source: "/tools/offboard-it",
                    destination: "https://offboarding-checklist-git-main-thamim-the-tester-ttts-projects.vercel.app",
                },
                {
                    source: "/tools/offboard-it/:path*",
                    destination:
                        "https://offboarding-checklist-git-main-thamim-the-tester-ttts-projects.vercel.app/:path*",
                },
                {
                    source: "/tools/offboard-it/public/:path*",
                    destination:
                        "https://offboarding-checklist-git-main-thamim-the-tester-ttts-projects.vercel.app/public/:path*",
                },
                {
                    source: "/tools/offboard-it/images/:path*",
                    destination:
                        "https://offboarding-checklist-git-main-thamim-the-tester-ttts-projects.vercel.app/images/:path*",
                },
                {
                    source: "/tools/offboard-it/_next/:path*",
                    destination:
                        "https://offboarding-checklist-git-main-thamim-the-tester-ttts-projects.vercel.app/_next/:path*",
                },
                {
                    source: "/tools/offboard-it/favicon.ico",
                    destination:
                        "https://offboarding-checklist-git-main-thamim-the-tester-ttts-projects.vercel.app/favicon.ico",
                },
                //roi calculator tool application
                {
                    source: "/tools/roi-calculator",
                    destination: "https://roi-calculator-woad.vercel.app",
                },
                {
                    source: "/tools/roi-calculator/:path*",
                    destination: "https://roi-calculator-woad.vercel.app/:path*",
                },
                {
                    source: "/tools/roi-calculator/public/:path*",
                    destination: "https://roi-calculator-woad.vercel.app/public/:path*",
                },
                {
                    source: "/tools/roi-calculator/images/:path*",
                    destination: "https://roi-calculator-woad.vercel.app/images/:path*",
                },
                {
                    source: "/tools/roi-calculator/_next/:path*",
                    destination: "https://roi-calculator-woad.vercel.app/_next/:path*",
                },
                //access matrix tool application
                {
                    source: "/tools/access-matrix",
                    destination: "https://appaccessmatrix.vercel.app",
                },
                {
                    source: "/tools/access-matrix/:path*",
                    destination: "https://appaccessmatrix.vercel.app/:path*",
                },
                {
                    source: "/tools/access-matrix/public/:path*",
                    destination: "https://appaccessmatrix.vercel.app/public/:path*",
                },
                {
                    source: "/tools/access-matrix/images/:path*",
                    destination: "https://appaccessmatrix.vercel.app/images/:path*",
                },
                {
                    source: "/tools/access-matrix/_next/:path*",
                    destination: "https://appaccessmatrix.vercel.app/_next/:path*",
                },
                {
                    source: "/tools/access-matrix/api/:path*",
                    destination: "https://appaccessmatrix.vercel.app/api/:path*",
                },
                // Job board application with proper asset handling
                {
                    source: "/fwd-it/job-board",
                    destination: "https://job-board-seven-lilac.vercel.app",
                },
                {
                    source: "/fwd-it/job-board/:path*",
                    destination: "https://job-board-seven-lilac.vercel.app/:path*",
                },
                // Handle API routes specifically
                {
                    source: "/api/:path*",
                    destination: "https://job-board-seven-lilac.vercel.app/api/:path*",
                },
                // Handle static assets from the job board
                {
                    source: "/_next/:path*",
                    destination: "https://job-board-seven-lilac.vercel.app/_next/:path*",
                },
                // Handle images and other public assets
                {
                    source: "/images/:path*",
                    destination: "https://job-board-seven-lilac.vercel.app/images/:path*",
                },
                {
                    source: "/public/:path*",
                    destination: "https://job-board-seven-lilac.vercel.app/public/:path*",
                },
                // Handle specific files in the root like logo
                {
                    source: "/:file(favicon.ico|logo.png|Stitchflow.png|robots.txt|sitemap.xml)",
                    destination: "https://job-board-seven-lilac.vercel.app/:file",
                },
                // Add more rewrites for other zones as needed
            ],
        };
    },

    async redirects() {
        return [
            {
                source: "/support",
                has: [{type: "host", value: "www.stitchflow.com"}],
                destination: "https://docs.stitchflow.io/",
                permanent: true,
            },
            {
                source: "/support",
                has: [{type: "host", value: "www.stitchflow.io"}],
                destination: "https://docs.stitchflow.io/",
                permanent: true,
            },
            {
                source: "/:path*",
                has: [{type: "host", value: "www.stitchflow.io"}],
                destination: "https://www.stitchflow.com/:path*",
                permanent: true,
            },
            {
                source: "/:path*",
                has: [{type: "host", value: "stitchflow.io"}],
                destination: "https://www.stitchflow.com/:path*",
                permanent: true,
            },
            {
                source: "/changelog",
                destination: "https://www.stitchflow.com/",
                permanent: true,
            },
            {source: "/connectors", destination: "/integrations", permanent: true},
            {
                source: "/post/introducing-stitchflow-a-visibility-platform-for-corporate-it-teams",
                destination: "/blog/introducing-stitchflow-it-visibility-platform",
                permanent: true,
            },
            {
                source: "/post/4-hidden-gaps-in-it-the-cost-of-limited-visibility",
                destination: "/blog/it-visibility-gaps",
                permanent: true,
            },
            {
                source: "/post/tune-up-your-it-environment-for-2024",
                destination: "/blog/lack-of-visibility-in-it",
                permanent: true,
            },
            {
                source: "/post/why-dont-existing-it-tools-help-with-visibility",
                destination: "/blog/reasons-why-it-tools-fail-at-visibility",
                permanent: true,
            },
            {
                source: "/post/why-hasnt-workflow-automation-worked-for-corporate-it-teams",
                destination: "/blog/why-workflow-automation-fails-in-it",
                permanent: true,
            },
            {
                source: "/post/taking-a-data-first-approach-to-corporate-it",
                destination: "/blog/it-tool-sprawl-reduction",
                permanent: true,
            },
            {
                source: "/post/stitchflow-solution-overview",
                destination: "/blog/stitchflow-solution-overview",
                permanent: true,
            },
            {source: "/post/stitchflow-it-assessment", destination: "/blog/stitchflow-it-assessment", permanent: true},
            {
                source: "/post/why-is-this-single-pane-of-glass-for-it-teams-so-damn-hard-to-build",
                destination: "/blog/single-pane-of-glass-for-it",
                permanent: true,
            },
            {
                source: "/post/data-lake-for-modern-it-teams",
                destination: "/blog/data-lake-for-modern-it-teams",
                permanent: true,
            },
            {
                source: "/post/how-to-identify-automatable-areas-in-your-it-and-automate-them",
                destination: "/blog/how-to-identify-automatable-processes-in-it",
                permanent: true,
            },
            {
                source: "/post/why-are-it-teams-reactive",
                destination: "/blog/reactive-crisis-management-in-it-teams",
                permanent: true,
            },
            {
                source: "/post/7-signs-that-your-it-team-has-a-data-visibility-problem",
                destination: "/blog/data-visibility-challenges-in-it-teams",
                permanent: true,
            },
            {
                source: "/post/it-compliance-an-exhaustive-guide",
                destination: "/blog/it-compliance-audit",
                permanent: true,
            },
            {
                source: "/post/an-it-leaders-guide-to-iso-iec-27001-certification",
                destination: "/blog/guide-to-iso-27001-certification-for-it",
                permanent: true,
            },
            {source: "/post/about-soc-2", destination: "/blog/soc-2-compliance-it-leaders-guide", permanent: true},
            {
                source: "/post/the-hidden-risks-of-inactive-users",
                destination: "/blog/risks-of-inactive-user-accounts",
                permanent: true,
            },
            {
                source: "/post/how-to-manage-external-users",
                destination: "/blog/how-to-manage-external-users",
                permanent: true,
            },
            {
                source: "/post/user-access-reviews-10-common-mistakes-to-avoid",
                destination: "/blog/user-access-reviews-mistakes-to-avoid",
                permanent: true,
            },
            {
                source: "/post/vendor-offboarding-checklist",
                destination: "/blog/vendor-offboarding-checklist",
                permanent: true,
            },
            {
                source: "/post/how-to-transition-from-traditional-to-modern-it-service-management",
                destination: "/blog/traditional-itsm-vs-modern-service-management",
                permanent: true,
            },
            {
                source: "/post/cost-of-limited-visibility",
                destination: "/blog/it-visibility-gaps",
                permanent: true,
            },
            {
                source: "/resources-1/about-soc-2",
                destination: "/blog/soc-2-compliance-it-leaders-guide",
                permanent: true,
            },
            {
                source: "/resources-1/an-it-leaders-guide-to-iso-iec-27001-certification",
                destination: "/blog/guide-to-iso-27001-certification-for-it",
                permanent: true,
            },
            {
                source: "/resources-1/it-compliance-an-exhaustive-guide",
                destination: "/blog/it-compliance-audit",
                permanent: true,
            },
            {
                source: "/resources-1/7-signs-that-your-it-team-has-a-data-visibility-problem",
                destination: "/blog/data-visibility-challenges-in-it-teams",
                permanent: true,
            },
            {
                source: "/resources-1/why-are-it-teams-reactive",
                destination: "/blog/reactive-crisis-management-in-it-teams",
                permanent: true,
            },
            {
                source: "/resources-1/how-to-identify-automatable-areas-in-your-it-and-automate-them",
                destination: "/blog/how-to-identify-automatable-processes-in-it",
                permanent: true,
            },
            {
                source: "/resources-1/data-lake-for-modern-it-teams",
                destination: "/blog/data-lake-for-modern-it-teams",
                permanent: true,
            },
            {
                source: "/resources-1/why-is-this-single-pane-of-glass-for-it-teams-so-damn-hard-to-build",
                destination: "/blog/single-pane-of-glass-for-it",
                permanent: true,
            },
            {
                source: "/resources-1/stitchflow-it-assessment",
                destination: "/blog/stitchflow-it-assessment",
                permanent: true,
            },
            {
                source: "/resources-1/stitchflow-solution-overview",
                destination: "/blog/stitchflow-solution-overview",
                permanent: true,
            },
            {
                source: "/resources-1/taking-a-data-first-approach-to-corporate-it",
                destination: "/blog/it-tool-sprawl-reduction",
                permanent: true,
            },
            {
                source: "/resources-1/why-hasnt-workflow-automation-worked-for-corporate-it-teams",
                destination: "/blog/why-workflow-automation-fails-in-it",
                permanent: true,
            },
            {
                source: "/resources-1/why-dont-existing-it-tools-help-with-visibility",
                destination: "/blog/reasons-why-it-tools-fail-at-visibility",
                permanent: true,
            },
            {
                source: "/resources-1/tune-up-your-it-environment-for-2024",
                destination: "/blog/lack-of-visibility-in-it",
                permanent: true,
            },
            {
                source: "/resources-1/4-hidden-gaps-in-it-the-cost-of-limited-visibility",
                destination: "/blog/it-visibility-gaps",
                permanent: true,
            },
            {
                source: "/resources-1/introducing-stitchflow-a-visibility-platform-for-corporate-it-teams",
                destination: "/blog/introducing-stitchflow-it-visibility-platform",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
