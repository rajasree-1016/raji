import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <section id="home">
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-8 mt-5'>
                        <h1 className='display-4 fw-bolder text-white mb-4 text-center'>
                            World's Biggest Ecomerce site 
                        </h1>
                        <p className='lead text-white text-center fs-4 mb-5'>See The Reviews given by the Successful persons ,
                        who had satisfied from our products.</p>
                         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2qSkKSINNYi1O2jYog6yOTUdvuhvEQLhBGux6L7BkjxX3WSRKoTl7rero7DF4lkUffVY&usqp=CAU
' alt='' />
                         <br/> 
                         <br/> 
                          <div className='buttons d-flex justify-content-center'>
                           
                          <button className='btn btn-light rounded-pill me-4 text-black-50 px-4 py-2'><Link to="/login">Login</Link></button>
                          </div> 
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Home