export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12 bg-gray-50">
      <div className="max-w-xl mx-auto space-y-4 text-gray-800">
        <h1 className="text-2xl font-bold">yash mandi.</h1>
        <p>
          23, grew up in pune, maharashtra, but originally from a small town in karnataka.
          studied cs ('24 batch) at a tier-2 college and have been working since 2019 - switching between multiple roles before settling into what excites me most: <span className="italic">building things</span>.
        </p>
        <p>
          currently, i serve as the CTO at <a href="https://www.oneclarity.ai" target="_blank" className="text-blue-800 underline">OneClarity</a>, an AI platform, and also run  an <a href="https://x.com/yashmandi" target="_blank" className="text-blue-800 underline">ai agency</a> (freelance).
        </p>

        <section>
          <h2 className="text-lg text-black mb-2">some things about me</h2>
          <ul className="list-disc list-inside">
            <li>i like to build stuff, and i want to build more.</li>
            <li>i write blogs, mostly about tech, and life sometimes (which i don't publish).</li>
            <li>i like to read & mostly listen to podcasts.</li>
            {/* <li>fitness & consistency are important to me because i believe in taking care of myself.</li> */}
            <li>i listen to a lot of music, almost every genre.</li>
            <li>i'm bit skeptical about social media and currently only use <a href="https://x.com/yashmandi" target="_blank" className="text-blue-800 underline">twitter</a> (sometimes).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg text-black mb-2">some things i believe</h2>
          <ul className="list-disc list-inside">
            <li>be a generalist, not a specialist. being average at 3 things &gt; being good at 1 thing.</li>
            <li>take on more challenges, in life particularly. there's no point in competing if you don't want to be the best.</li>
            <li>the cure to loneliness is being extremely ambitious.</li>
            <li>hire fast, fire faster.</li>
            <li>anyone can pick any skill and be top 1% in 4 months.</li>
            <li>smaller teams are better. faster decisions, fewer meetings, more fun.</li>
            <li>regrets are for pussies. shit happens, deal with it.</li>
            <li>the work that hurts you less than it hurts others, is the work you're born to do.</li>
            <li>health, wealth & good relationships, pursue them in that order.</li>
            <li>be rich and anonymous, not poor and famous.</li>
            <li>nothing happens, and nothing happens, and then everything happens at once (power of compounding).</li>
            <li>keep building things. 99% of the stuff you build, will fail, but eventually it will compound to a greater level.</li>
          </ul>
        </section>

        <p>
          i will probably add more to this soon- meanwhile feel free to say hi on my{" "}
          <a href="mailto:yash.mandi@oneclarity.ai" className="text-blue-800 underline">e-mail</a>
        </p>
      </div>
    </main>
  );
}