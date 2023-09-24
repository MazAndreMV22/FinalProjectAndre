import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'



export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
axios
  .get( "https://dev-example.sanbercloud.com/api/job-vacancy" )
  .then( (res) => {
    setData([...res.data.data]);
    console.log(res.data);
  } )
  .catch((error) => {
    console.log(error);
  });

  },[]);

  console.log(data);
  return (
   

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <img
          src="https://images.unsplash.com/photo-1570126646281-5ec88111777f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVldGluZyUyMHJvb218ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          alt=""
          className="absolute inset-0 -z-10    w-full object-cover object-right md:object-top"
        />
        <div
          className="absolute inset-x-0 -top-10 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-40"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-4 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Apa sih Visi Misi Kita ? yuk cari tau.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Cari Tahu Disini <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Ayo Cari Kerja !
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Yuk Mulai Cari Yang Sesuai...</h2>
          <p className=" text-lg leading-8 text-gray-600">
            Pastikan Lowongan yang anda pilih sesuai dengan keahlian kamu ya . . .
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-25 sm:mt-20 sm:pt-25 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        { data !== null &&
                    data.map ((res, index) => {
                      return (                       
                        
                       <article key={res.id} className="flex max-w-xl flex-col items-start justify-between">
                       <div className="flex items-center gap-x-4 text-xs">
                         <div className="text-gray-500">
                         {res.job_type}
                         </div>
                         <a
                           href={res.job_tenure}
                           className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                         >
                           {res.title}
                         </a>
                       </div>
                       <div className="group relative">
                         <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                           <a href={res.job_tenure}>
                             <span className="absolute inset-0" />
                           </a>
                         </h3>
                         <p className="mt-5 line-clamp-3 text-sm leading-10 text-gray-600"></p>
                       </div>
                       <div className="relative  flex items-center gap-x-4">
                         <img src={res.company_image_url} className="h-10 w-10 rounded-full bg-gray-50" />
                         <div className="text-sm leading-6">
                           <p className="font-semibold text-gray-900">
                               <span className="absolute inset-0" />
                               {res.company_name}
                             
                           </p>
                           <p className="text-gray-600">{res.company_city}</p>
                           <p className="text-gray-600">{res.salary_min} - {res.salary_max}</p>
                           <button type="button" class="focus:outline-none text-white bg-indigo-600 hover:bg-indigo-600 mt-2 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mr-20 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-600 dark:focus:ring-red-900">Lamar Sekarang !</button>
                         </div>
                       </div>
                     </article>
          );
        })}
        </div>

        
      </div>
      
    </div>

    <section className="relative isolate overflow-hidden bg-white px-2 py-24 sm:py-25 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-10" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-10 w-[300%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-2">
        <div className="text-gray-600 text-center mb-2">  Apa Sih Pendapat Mereka ? </div>
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “Keren banget, pengisian formulirnya mudah banget, cepat dipanggil untuk interview. Dan bebas biaya apapun
              Sampai dengan Kontrak Kerja. Terima kasih Ayo Kerja !”
            </p>
          </blockquote>
          <figcaption className="mt-5">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">ANDRE RUKMANA</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
      </div>

      
      
  )
}
