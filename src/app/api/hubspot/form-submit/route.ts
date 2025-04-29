// import {NextRequest, NextResponse} from "next/server";

// export async function POST(req: NextRequest) {
//     const {email, firstname, lastname, company, company_size} = await req.json();

//     try {
//         const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
//             },
//             body: JSON.stringify({
//                 properties: {
//                     email,
//                     firstname,
//                     lastname,
//                     company,
//                     company_size,
//                 },
//             }),
//         });

//         const data = await response.json();
//         return NextResponse.json(data, {status: response.status});
//     } catch (error) {
//         console.error("HubSpot API error:", error);
//         return NextResponse.json({error: "HubSpot API error"}, {status: 500});
//     }
// }

import {NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest) {
    const {email, firstname, lastname, company, company_size} = await req.json();

    try {
        // First check if contact exists
        const searchResponse = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/search`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
            },
            body: JSON.stringify({
                filterGroups: [
                    {
                        filters: [
                            {
                                propertyName: "email",
                                operator: "EQ",
                                value: email,
                            },
                        ],
                    },
                ],
            }),
        });

        const searchData = await searchResponse.json();
        const contactId = searchData.results?.[0]?.id;

        // Update existing contact or create new one
        const url = contactId
            ? `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`
            : "https://api.hubapi.com/crm/v3/objects/contacts";

        const response = await fetch(url, {
            method: contactId ? "PATCH" : "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
            },
            body: JSON.stringify({
                properties: {
                    email,
                    firstname,
                    lastname,
                    company,
                    company_size,
                },
            }),
        });

        const data = await response.json();
        return NextResponse.json(data, {status: response.status});
    } catch (error) {
        console.error("HubSpot API error:", error);
        return NextResponse.json({error: "HubSpot API error"}, {status: 500});
    }
}
