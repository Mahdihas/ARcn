import React, { useEffect, useState } from 'react'
import BigSprin from '../component/spiner/BigSprin'
import { Link } from 'react-router-dom'
import SearchForm from '../component/form/SearchForm';
import HomeCard from '../component/card/HomeCard';
import Expcard from '../component/card/Expcard';


const Home = () => {

  const [loading, setLoading] = useState(false);
  const [allExp, setAllExp] = useState([]);
  useEffect(() => {
    fetch('expdata.json')
      .then(res => res.json())
    .then(data=>setAllExp(data))


  },[])


  return (
    <>
     <div className='md:flex justify-center gap-10 px-6 md:px-10 lg:px-20'>
      <div className='mt-4'>
        <SearchForm />
      </div>

      <div className='flex-1'>
        <div>
          <div className='flex justify-between px-4 mt-10'>
            <p className='text-xl font-bold'>Homes</p>
            <Link to='/coming-soon'>
              <p>See All</p>
            </Link>
          </div>
          <div className='container pb-8 pt-2 mx-auto'>
            <div className='flex flex-wrap'>
              {[...Array(3)].map((_, i) => (
                <HomeCard key={i} />
              ))}
            </div>
          </div>
        </div>
        {loading ? (
          <BigSprin />
        ) : (
          <div>
            <div className='flex justify-between px-4'>
              <p className='text-xl font-bold'>Experiences</p>
              <Link to='/coming-soon'>
                <p>See All</p>
              </Link>
            </div>
            <div className='container pb-8 pt-2 mx-auto'>
              <div className='flex flex-wrap'>
                {allExp.slice(0, 4).map((exp, i) => (
                  <Expcard key={i} exp={exp} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default Home