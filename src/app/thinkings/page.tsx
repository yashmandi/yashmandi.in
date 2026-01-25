import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";

const ThinkingsPage = () => {
  return (
      <main className="min-h-screen px-6 py-12 bg-gray-50">
                <div className="max-w-3xl mx-auto space-y-4  text-slate-800">
                    <a href="/" className="underline  text-blue-800 hover:no-underline flex">
                        <IoMdArrowRoundBack className="mt-1 mr-1" />
                        back to home
                    </a>
                    <h1 className="text-3xl font-bold"><span className="text-slate-700 text-2xl ">/thinkings</span></h1>
          <div className="flex items-center justify-between mb-8">
              <h2 className="text-sm text-slate-700">
                  this page is work in progress, i'll soon post my unpublished thoughts here.
              </h2>
          </div>
                </div>
      </main>
  )
}

export default ThinkingsPage
