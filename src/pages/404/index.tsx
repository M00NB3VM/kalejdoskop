import React from "react";
import Head from "next/head";

function Error() {
  return (
    <div id="error-page">
      <Head>
        <title>Sidan hittades inte!</title>
      </Head>
      <h1>Oops!</h1>
      <p>Ett fel uppstod. Försök igen.</p>
    </div>
  );
}

export default Error;
