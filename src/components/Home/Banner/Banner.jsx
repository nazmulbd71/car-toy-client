import banner from '../../../assets/images/banner.png'

const Banner = () => {
    return (

        <div className='w-full banner h-[550px] md:flex md:items-center md:justify-evenly pt-5'>
            <div className='w-full md:w-1/2'>
                <h1 className='text-5xl text-[#606c38]'>Get behind the wheel, <br /> start the engine, and let's go!</h1>
                <p className='my-6 tracking-wider'>Unleash Your Inner Speedster: Explore Our Epic Car Toy Collection! Ignite Adventure and Revolutionize Playtime with Premium Car Toys!</p>
                <button className='px-5 py-3 rounded-lg text-white bg-[#606c38]'>Get Your Toys</button>
            </div>
            <div className='hidden md:block'>
                <img className='img-banner max-w-screen-sm' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;