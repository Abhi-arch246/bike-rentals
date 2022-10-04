import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { useSelector, useDispatch } from 'react-redux'
import { getAllBikes } from '../redux/actions/bikesAction'
import { Link } from 'react-router-dom'


function Home() {
    const { bikes } = useSelector(state => state.bikesReducer)
    const { loading, error } = useSelector(state => state.alertReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllBikes())
    }, [])

    return (
        <Layout>

            <h1 style={{ marginTop: "90px" }} className='text-center py-3'>Best Bikes available for you!</h1>
            {/* <h1>{bikes.length}</h1> */}
            <div className='row mt-5 justify-content-center'>
                {
                    loading ?
                        (
                            <img src="https://www.atlatl.com/hubfs/NBM/arrow-motorcycle-v1/Arrow_Motorcycle_Loader.gif" width="100px" height="600px" alt="" />

                        ) : error ? (
                            <img src="https://www.atlatl.com/hubfs/NBM/arrow-motorcycle-v1/Arrow_Motorcycle_Loader.gif" width="100px" height="600px" alt="" />
                        ) : (



                            bikes.map(bike => {
                                return (

                                    <div className='highlight col-md-4 col-lg-3 col-sm-5 p-3 card m-3 rounded justify-content-center'>


                                        <img src={bike.image} className="high img-fluid" alt="" />
                                        <div className="row pt-2">

                                            <div className="col-md-8">

                                                <h4 className='text-left mb-2'>{bike.name}</h4>


                                                <h5 className='mt-3'>Price: {bike.rentPerHour} /-</h5>
                                            </div>
                                            <div className="col-md-4">
                                                <button style={{ backgroundColor: '#D61C4E' }} className='btn mt-4 text-white'>Book now</button>
                                            </div>
                                        </div>

                                    </div>


                                )


                            })




                        )

                }

            </div>

        </Layout >
    )
}

export default Home