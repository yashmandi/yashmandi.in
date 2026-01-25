import { IoMdArrowRoundBack } from "react-icons/io";

export default function ReadsPage() {
    const books = [
        // Original List
        { title: "Deep Work", author: "Cal Newport", cover: "https://imgs.search.brave.com/AU4M8exG8lLDEPf7EDZmNGGs8ELZTEzpDdg-_VmwKvE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZGF0b2Ntcy1hc3Nl/dHMuY29tLzQ3NzQ5/LzE2NjE1NTA0MjUt/ZGVlcC13b3JrLWJv/b2stY292ZXIuanBn" },
        { title: "The Metamorphosis", author: "Franz Kafka", cover: "https://imgs.search.brave.com/PtfYHRe6Nhqdn7apy7PXIOUR1516BRsx44XbXoNitoA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxUU9rZjhSU0lM/LmpwZw" },
        { title: "The Idiot", author: "Fyodor Dostoevsky", cover: "https://imgs.search.brave.com/wOTEVFUHXmpccJaDQyVIEYCEJPhZbECT3rgp_x_JbSU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxMmZWN0RodjdM/LmpwZw" },
        { title: "48 Laws of Power", author: "Robert Greene", cover: "https://imgs.search.brave.com/lPBBo5wKeqe468IGUpD5coAyOOLU_VQWT5kW5GfeYJk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFlcmhYUWNiTUwu/anBn" },
        { title: "Almanack of Naval Ravikant", author: "Eric Jorgenson", cover: "https://imgs.search.brave.com/YHYfN-YO6OK8RVKTBzBlQUGoYCAI_Rx411ian52YBms/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzEwVEVUaEh5Tkwu/anBn" },
        { title: "Ego is the Enemy", author: "Ryan Holiday", cover: "https://imgs.search.brave.com/SWLhEw0iwhh12kXzJWnNtzW8At8DtTz9UlBnDJuWjcs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL0ZURUFB/ZVN3Rml0b3FzSXkv/cy1sNTAwLmpwZw" },
        { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", cover: "https://imgs.search.brave.com/GqwqBPHOxbd5Du3e7U4jq-qUDnP4-M38sSms_UyBNUA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzkxSkhIcUViWDRM/LmpwZw" },
        { title: "Steve Jobs", author: "Walter Isaacson", cover: "https://imgs.search.brave.com/f34spjI0lVJHFa_4L6OiMwpni6-AmyHCDr0SAJ1MpLE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFTMmlKTjNEWUwu/anBn" },
        { title: "White Nights", author: "Fyodor Dostoevsky", cover: "https://imgs.search.brave.com/uGpAKHwizT30cH3fIJDKRYGJulPy8wNm6Ve8lHibfPE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTF3YkQrVzNDYkwu/anBn" },
        { title: "Man's Search for Meaning", author: "Viktor Frankl", cover: "https://imgs.search.brave.com/49sapoL23h15qDOK0ld9iBPjV--S1k9UhYJuXb2bL6c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXM0LnBlbmd1aW5y/YW5kb21ob3VzZS5j/b20vY292ZXIvOTc4/MDgwNzAxNDI4OA" },
        { title: "Fight Club", author: "Chuck Palahniuk", cover: "https://imgs.search.brave.com/VwfmcFtZbC6YmSDIYxlV6122XvesH4RN3kjWfCmNosc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFHVElxcTZ5ekwu/anBn" },
        { title: "How to Win Friends and Influence People", author: "Dale Carnegie", cover: "https://imgs.search.brave.com/PpzsFoq3aJKIYVInh7L07DgDWIOPKR6sw8sSKuEcf3Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Ym9va3RvcGlhLmNv/bS5hdS9jb3ZlcnMv/YmlnLzk3ODE0NjA3/NTI2NjEvNDA1My9o/b3ctdG8td2luLWZy/aWVuZHMtYW5kLWlu/Zmx1ZW5jZS1wZW9w/bGUuanBn" },
        { title: "The Leader In You", author: "Dale Carnegie", cover: "https://imgs.search.brave.com/ITnr76ttBoBCm8PQmhSbFOYj1cbIv2ATMdfQZ5ToikQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxSGk5dXNWY0VM/LmpwZw" },
        { title: "12 Rules for Life", author: "Jordan Peterson", cover: "https://imgs.search.brave.com/_fykmI_dCIMRCGZkAJAa1nnrtFaKwCeiYQf_KfDs0lQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vdHlsZXJk/ZXZyaWVzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/Ni8xMi1ydWxlcy1m/b3ItbGlmZS5qcGVn/P3Jlc2l6ZT0zMDAs/NDYwJnNzbD0x" },
        { title: "Don't Sweat the Small Stuff", author: "Richard Carlson", cover: "https://imgs.search.brave.com/SVOE5O7VgNkv49WK9i1xU8vFxtqQmK6IQiP-TYR0anw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTE2bkkrV2FsSkwu/anBn" },
        { title: "The Adventures of Sherlock Holmes", author: "Arthur Conan Doyle", cover: "https://imgs.search.brave.com/5S-dEd1b5X6xFTwDgGHjbn8fNX6RQs0WBOd9MUNOlqQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cmVhZGFuZGNvYm9v/a3MuY28udWsvd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDQv/YWR2ZW50dXJlcy1v/Zi1zaGVybG9jay1o/b2xtZXMtZG95bGUt/OTc4MTQ0NDY5MDcw/NS1jb3Zlci5qcGc" },
        { title: "Rumi", author: "Farrukh Dhondy", cover: "https://imgs.search.brave.com/8H-cIe_4UGDUPhBgTFVafXxbsTEUfiLHnWlk6B3PbGU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9iaW5k/YXNzYm9va3MuY29t/L2Nkbi9zaG9wL2Zp/bGVzLzgxTi1kMERC/bDVMLl9TTDE1MDAu/anBnP2Nyb3A9Y2Vu/dGVyJmhlaWdodD0y/NDAmdj0xNzUwNzUz/NzMyJndpZHRoPTI0/MA" },
        { title: "I Fell in Love with Hope", author: "Lancali", cover: "https://imgs.search.brave.com/ipYl4tt1CtqgYz9IYR08dDNDccqE7lLqYnvfIqkKdcs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5lYm9va3MuY29t/L2NvdmVyLzIxMDgy/MzM1OC5qcGc_d2lk/dGg9MjEwJmhlaWdo/dD0zMTUmcXVhbGl0/eT04NQ" },
        { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", cover: "https://imgs.search.brave.com/ewQp-mgbAerWReVds53YG0ER5QwSEsnTRJEgyorVYbY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFBTGZzYXdaREwu/anBn" },
        { title: "Murder at the Book Store", author: "Sue Minix", cover: "https://imgs.search.brave.com/6ZwVNfbywJ6SJOHqd8qbzfgvYptbue7Uk0-vo-ZM01A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFkVUtuTDN0eUwu/anBn" }
    ];
    return (
        <main className="min-h-screen px-6 py-12 bg-gray-50">
            <div className="max-w-3xl mx-auto space-y-4  text-slate-800">
                <a href="/" className="underline  text-blue-800 hover:no-underline flex">
                    <IoMdArrowRoundBack className="mt-1 mr-1" />
                    back to home
                </a>
                <h1 className="text-3xl font-bold"><span className="text-slate-700 text-2xl ">/bookshelf</span></h1>
                <div className="mt-6">
                    {/* header */}
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-sm text-slate-700">
                            here are some of my the books i've read / currently reading.
                        </h2>
                    </div>

                    {/* grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
                        {books.map((book, index) => (
                            <div key={index} className="flex gap-2.5 px-3 py-3 transition-all hover:bg-gray-200 rounded-xl">
                                <img
                                    src={book.cover}
                                    alt={book.title}
                                    className="w-20 h-28 object-cover bg-slate-200 shadow-sm"
                                // onError={(e) => { e.target.src = "/book-placeholder.png"; }}
                                />
                                <div>
                                    <p className="font-medium text-sm leading-snug">
                                        {book.title}
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        {book.author}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
