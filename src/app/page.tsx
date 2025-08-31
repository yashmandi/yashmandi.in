// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto space-y-4 text-gray-800">
        <h1 className="text-xl font-bold">hi. i'm yash.</h1>
        <p className="mb-1">
          i'm from pune, working as a business analyst at a startup. i also run a (small) digital marketing agency as a content strategist (freelance). i'm interested in tech, ai, startups, web3 and more.
        </p>
        <p>
          this site is WIP, i used to write a lot, but these days i spend most of my time working, you can find me on{" "}
          <a href="https://x.com/yashmandi" target="_blank" className="text-blue-600 underline">twitter</a>, i often post there something.
        </p>

        <section>
          <h2 className="text-xl font-semibold mb-2">some things about me</h2>
          <ul className="list-disc list-inside">
            <li>i like to build stuff, and i want to build more.</li>
            <li>i write blogs, mostly about tech, and life sometimes (which i don't publish)</li>
            <li>i like to read.</li>
            <li>i believe in taking on more challenges (in life particularly). there's no point in competing if you don't want to be the best.</li>
            <li>fitness & consistency are important to me because i believe in taking care of myself.</li>
            <li>the ONLY way to reach me is via <a href="mailto:yashmandi18@gmail.com" className="text-blue-600 underline">e-mail</a> or whatsapp (if you have my number).</li>
            <li>i listen to a lot of music, almost every genre. feel free to reach out and we can share playlists.</li>
            <li>i'm skeptical about social media and only use <a href="https://x.com/yashmandi" target="_blank" className="text-blue-600 underline">twitter</a>.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">some things i believe</h2>
          <ul className="list-disc list-inside">
            <li>the work that hurts you less than it hurts others, is the work you're born to do.</li>
            <li>health, wealth & good relationships, pursue them in that order.</li>
            <li>be rich and anonymous, not poor and famous.</li>
            <li>stay humble, be arrogant.</li>
            <li>nothing happens, and nothing happens, and then everything happens at once (power of compounding).</li>
            <li>keep building things. 99% of the stuff you build, will fail, but eventually it will compound to a greater level.</li>
            <li>“I swear to you that to think too much is a disease, a real, actual disease.” - Dostoyevsky</li>
            <li>be direct, real and transparent. life is short.</li>
            <li>start quick. fail quick. win quick. velocity matters.</li>
          </ul>
        </section>

        <p>
          i will probably add more to this soon- meanwhile feel free to say hi on my{" "}
          <a href="mailto:yashmandi18@gmail.com" className="text-blue-600 underline">e-mail</a>
        </p>
      </div>
    </main>
  );
}