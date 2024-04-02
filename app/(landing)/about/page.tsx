import Logo from "@/app/components/Logo";
import Title from "@/app/components/Title";
import "./../team/style.css"
import Image from "next/image"
import Poster from "./images/poster.png"
import Events from "./images/events.png"
import Wait from "./images/waitfor.png"

export default function AboutPage() {
  return (
    <>
      <title>About - Envisage 23</title>
      <div className="all overflow-x-hidden">
        <Title title="About" />
        <section className="mx-auto max-w-5xl px-4 py-20 sm:pt-10">
          <div className="mx-auto mb-10 flex flex-col items-center gap-y-4 rounded-3xl bg-gray-900 p-10 text-white transition-all duration-200 ease-in-out hover:scale-95 hover:shadow-2xl hover:ring-4 hover:ring-blue-900 hover:ring-offset-8 sm:flex-row">
            <div className="inline-flex h-72 w-72 flex-shrink-0 items-center justify-center sm:h-96 sm:w-96">
            <div style={{width: "250px"}}>
                <img src="https://i.ibb.co/znBVWTb/ENVISAGE-LOGO.png" alt="logo" />
              </div>
            </div>
            <div className="mt-6 flex-grow text-center sm:mt-0 sm:text-left">
              <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                What is Envisage?
              </h2>
              <p className="mx-auto mt-6 text-lg leading-8 text-zinc-400 sm:text-left sm:text-xl">
                Envisage is the official E-Summit of Techno Main Salt Lake. It is born out
                of the dreams and aspirations of the youth who have the zest and the zeal
                to take their future into their own hands. Supporting the growing startup
                culture in the country, we are promised to inculcate and identify the best
                ideas and b-plans. Envisage is the platform for budding entrepreneurs to
                showcase the power of their ideas and to be appreciated and mentored by
                the best in the fields. So come along be a part of this wonderful and
                exciting journey.
              </p>
            </div>
          </div>
          <div className="mx-auto flex flex-col items-center sm:flex-row">
            <div className="mt-6 flex-grow text-center sm:mt-0 sm:text-left">
              <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Our Goal
              </h2>
              <p className="mx-auto mt-6 text-lg leading-8 text-white sm:text-left sm:text-xl">
                Our goal is to provide a platform for budding entrepreneurs to showcase
                the power of their ideas and to be appreciated and mentored by the best in
                the fields.
              </p>
            </div>
            <div className="order-first inline-flex h-72 w-72 flex-shrink-0 items-center justify-center sm:order-none sm:ml-10 sm:h-96 sm:w-96">
              {/* <Image className="rounded-lg" src={Poster} alt="" /> */}
              <div style={{borderRadius:10}}>
              <img src="https://i.ibb.co/gjvD1VX/evn.jpg" alt="poster"/>
              </div>
            </div>
            <div>
              
            </div>
          </div>


          <div className="flex mt-14 justify-center items-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Events Timeline
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="mt-10 w-6/12">

Kumar Aditya, [02-04-2024 14:42]
<ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                  </span>
                  <h3 className="flex items-center mb-1 text-2xl font-bold text-white">13th APRIL</h3>
                  <time className="block mb-2 text-lg font-bold leading-none text-blue-950">SATURDAY</time>
                  <p className="mb-4 text-base font-normal text-white">
                    STOCKIFY &nbsp;&#40;Starts&#41;<br />HACK UR WAY  &nbsp;&#40;Starts&#41;<br />PRELIMS  &nbsp;&#40;Starts&#41;
                  </p>
                </li>


                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                  </span>
                  <h3 className="flex items-center mb-1 text-2xl font-bold text-white">14th APRIL</h3>
                  <time className="block mb-2 text-lg font-bold leading-none text-blue-950">SUNDAY</time>
                  <p className="mb-4 text-base font-normal text-white">
                    HACK UR WAY  &nbsp;&#40;Starts&#41;
                  </p>

                </li>


                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                  </span>
                  <h3 className="flex items-center mb-1 text-2xl font-bold text-white">15th APRIL</h3>
                  <time className="block mb-2 text-lg font-bold leading-none text-blue-950">MONDAY</time>
                  <p className="mb-4 text-base font-normal text-white">
                  HACK UR WAY  &nbsp;&#40;Starts&#41;
                  </p>

                </li>

Kumar Aditya, [02-04-2024 14:42]
<li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                  </span>
                  <h3 className="flex items-center mb-1 text-2xl font-bold text-white">16th APRIL</h3>
                  <time className="block mb-2 text-lg font-bold leading-none text-blue-950">TUESDAY</time>
                  <p className="mb-4 text-base font-normal text-white">
                    INAUGURATION &nbsp;&#40;Starts&#41;<br />QUIZ BIZZ<br />TWEETER BUSINESS DEBATE &nbsp;&#40;Starts&#41;
                  </p>

                </li>
              </ol>
            </div>


            <div className="mt-10 w-6/12">

              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                  </span>
                  <h3 className="flex items-center mb-1 text-2xl font-bold text-white">17th APRIL</h3>
                  <time className="block mb-2 text-lg font-bold leading-none text-blue-950">WEDNESDAY</time>
                  <p className="mb-4 text-base font-normal text-white">
                    MOCK IPL &nbsp;&#40;Finals&#41;
                  </p>

                </li>


                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                  </span>
                  <h3 className="flex items-center mb-1 text-2xl font-bold text-white">18th APRIL</h3>
                  <time className="block mb-2 text-lg font-bold leading-none text-blue-950">THURSDAY</time>
                  <p className="mb-4 text-base font-normal text-white">
                    11:00 AM&nbsp;&nbsp;&nbsp;MOCK IPL &nbsp;&#40;Prelims&#41;<br />06:00 PM&nbsp;&nbsp;&nbsp;STOCKIFY &nbsp;&#40;Ends&#41;<br />07:00 PM&nbsp;&nbsp;&nbsp;PROTOTYPE GROOMING
                  </p>

                </li>

Kumar Aditya, [02-04-2024 14:42]
<li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                  </span>
                  <h3 className="flex items-center mb-1 text-2xl font-bold text-white">19th APRIL</h3>
                  <time className="block mb-2 text-lg font-bold leading-none text-blue-950">FRIDAY</time>
                  <p className="mb-4 text-base font-normal text-white">
                    B-PLAN &nbsp;&#40;Ends&#41;<br />CLOSING CEREMONY
                  </p>

                </li>

                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                  </span>
                  <h3 className="flex items-center mb-1 text-2xl font-bold text-white">ENDS HERE !</h3>
                  <time className="block mb-2 text-lg font-bold leading-none text-blue-950">Have Fun </time>
                  <p className="mb-4 text-base font-normal text-white">
                    ALL THE BEST TO THE PARTICIPANTS. Let&#39;s<br/>
                    ENRAGE<br/>ENGAGE<br/>ENTHRAL
                  </p>

                </li>
              </ol>

            </div>


          </div>
          <div className="mt-14 mx-auto mb-10 flex justify-center items-center gap-y-4 rounded-3xl bg-gray-900 p-10 text-white transition-all duration-200 ease-in-out hover:scale-95 hover:shadow-2xl hover:ring-4 hover:ring-blue-900 hover:ring-offset-8 sm:flex-row">
            <img src="https://i.ibb.co/dktjQKv/Envisage-All-events-poster-Smooth-Plastic-Sign-12-x-18-in-20240401-225012-0000.png" alt ="all_poster"/>
          </div>
          <Title title="What's the wait for !!" />
        </section>
      </div>
    </>
  );
}