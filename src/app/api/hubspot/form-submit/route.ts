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

const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;
const HUBSPOT_BASE_URL = "https://api.hubapi.com";

export async function POST(req: NextRequest) {
    const {email, firstname, lastname, company, company_size} = await req.json();

    try {
        // Step 1: Check if the contact already exists
        const findRes = await fetch(
            `${HUBSPOT_BASE_URL}/crm/v3/objects/contacts/${encodeURIComponent(email)}?idProperty=email`,
            {
                headers: {
                    Authorization: `Bearer ${HUBSPOT_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );

        if (findRes.ok) {
            // Contact exists — update it
            const existingContact = await findRes.json();
            const contactId = existingContact.id;

            const updateRes = await fetch(`${HUBSPOT_BASE_URL}/crm/v3/objects/contacts/${contactId}`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${HUBSPOT_API_KEY}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    properties: {
                        firstname,
                        lastname,
                        company,
                        company_size,
                    },
                }),
            });

            const updateData = await updateRes.json();
            return NextResponse.json(updateData, {status: updateRes.status});
        } else if (findRes.status === 404) {
            // Contact doesn't exist — create it
            const createRes = await fetch(`${HUBSPOT_BASE_URL}/crm/v3/objects/contacts`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${HUBSPOT_API_KEY}`,
                    "Content-Type": "application/json",
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

            const createData = await createRes.json();
            return NextResponse.json(createData, {status: createRes.status});
        } else {
            const error = await findRes.json();
            return NextResponse.json(error, {status: findRes.status});
        }
    } catch (error) {
        console.error("HubSpot API error:", error);
        return NextResponse.json({error: "HubSpot API error"}, {status: 500});
    }
}
