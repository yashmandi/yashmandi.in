import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12 bg-gray-50">
      <div className="max-w-xl mx-auto space-y-4 text-slate-800">
        <h1 className="text-3xl font-bold">yash mandi.</h1>
        <div className="space-x-3 flex mb-7">
          <a href="https://x.com/yashmandi" target="_blank" className="underline text-blue-800 hover:no-underline">x (twitter)</a>
          <a href="https://github.com/yashmandi" target="_blank" className="underline text-blue-800 hover:no-underline">github</a>
          <a href="https://linkedin.com/in/yashmandi" target="_blank" className="underline text-blue-800 hover:no-underline">linkedin</a>
          {/* <a href="mailto:yash.mandi@oneclarity.ai" className="underline hover:no-underline">e-mail</a> */}
          {/* <a href="mailto:yash.mandi@oneclarity.ai" className="underline hover:no-underline">30 mins meeting</a> */}
        </div>
        <p>
          i'm 24, grew up in pune, maharashtra, but originally from a small town in karnataka.
          studied cs at a tier-2 college and have been working since 2019. I moved between sales, customer support, programming, marketing, and freelancing before settling on what excites me most: <span className="italic">building things</span>.
        </p>
        <p>
          currently, i serve as the CTO & founding engineer at <a href="https://www.oneclarity.ai" target="_blank" className="underline text-blue-800 hover:no-underline">OneClarity</a>, an AI-based B2B productivity platform for enterprises.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-black mb-2">some things about me</h2>
          <ul className="list-disc list-inside">
            <li>i like to build stuff, and i want to build more.</li>
            <li>i write blogs, mostly about tech, and life sometimes (which i don't publish).</li>
            <li>i like to read & i mostly listen to podcasts.</li>
            {/* <li>fitness & consistency are important to me because i believe in taking care of myself.</li> */}
            <li>i listen to a lot of music.</li>
            <li>i'm a reluctant user of social media and currently only use <a href="https://x.com/yashmandi" target="_blank" className="underline text-blue-800 hover:no-underline">twitter</a> (sometimes).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-black mb-2">some things i believe</h2>
          <ul className="list-disc list-inside">
            <li>be a generalist, not a specialist. being average at 3 things &gt; being good at 1 thing.</li>
            <li>take on more challenges, in life particularly. there's no point in competing if you don't want to be the best.</li>
            <li>the cure to loneliness is being extremely ambitious.</li>
            <li>you need to be delusional enough that people start calling you crazy.</li>
            <li>anyone can pick any skill and be top 1% in 3 months.</li>
            <li>smaller teams are better. faster decisions, fewer meetings, more fun.</li>
            <li>the work that hurts you less than it hurts others, is the work you're born to do.</li>
            <li>health, wealth & good relationships, pursue them in that order.</li>
            <li>be rich and anonymous, not poor and famous.</li>
            <li>nothing happens, and nothing happens, and then everything happens at once (power of compounding).</li>
            <li>regrets are for pussies. shit happens, deal with it.</li>
            <li>keep building things. 99% of the stuff you build, will fail, but eventually it will compound to a greater level.</li>
          </ul>
        </section>

        <p>
          i will probably add more to this soon- meanwhile feel free to say hi on my{" "}
          <a href="mailto:yash.mandi@oneclarity.ai" className="underline text-blue-800 hover:no-underline">e-mail</a>
        </p>
      </div>
    </main>
  );
}