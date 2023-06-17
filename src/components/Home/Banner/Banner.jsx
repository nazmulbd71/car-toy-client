import banner from '../../../assets/images/banner.png'

const Banner = () => {
    return (
        <div className='w-full h-[550px] flex items-center justify-evenly pt-5'>
            <div className='w-1/2'>
                <h1 className='text-5xl text-[#606c38]'>Get behind the wheel, <br /> start the engine, and let's go!</h1>
                <p className='my-6 tracking-wider'>Unleash Your Inner Speedster: Explore Our Epic Car Toy Collection! Ignite Adventure and Revolutionize Playtime with Premium Car Toys!</p>
            </div>
            <div>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;