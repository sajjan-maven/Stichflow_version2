import React from "react";

const NoScript = () => {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: `<noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K8ZP8PLV"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>`,
            }}
        />
    );
};

export default NoScript;
