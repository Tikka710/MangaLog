import Head from "next/head";

function Layout( { children }) {
  return (
    <div className="container mx-auto p-0.6 my-14">
      <Head>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <header className="flex flex-col items-center">
        <img src="/images/ろこ icon.jpg" className="rounded-full" />
        <h1 className="text-4xl leading-5 font-bold tracking-tighter mt-3 mb-0">Comic log</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;