import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>werds</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <main>
        <div className="container">
          <p>this is a test?</p>
          <button className="btn btn-primary">click me</button>
        </div>
      </main>
    </>
  );
}
