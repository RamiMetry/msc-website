import Head from "next/head";
import React from "react";

const AppHead = ({
  title = "M.S.C.",
  description = "Maintenance Services.",
  image = "/images/msc-logo.svg",
  url = "",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`http://localhost:3000/${url}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="800" />
    </Head>
  );
};

export default AppHead;
