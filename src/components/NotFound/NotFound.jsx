import { Link } from 'react-router-dom';
import pageNotFound from '../../assets/images/404_page.png'

const NotFound = () => {
    return (
        <div>
            <h1 className='text-center text-red-600 text-5xl font-bold my-7'>Page Not Found</h1>
            <div>
                <img src={pageNotFound} className='h-[500px] mx-auto w-[500px] flex justify-center items-center' alt="" />
            </div>
            <p className='text-center my-7 font-bold text-2xl w-[300px] mx-auto'>Redirect On <Link to="/" className='underline  text-blue-600'>Home Page</Link></p>
        </div >
    );
};

export default NotFound;