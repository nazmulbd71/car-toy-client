import { useEffect, useState } from "react";
import Toy from "./Toy";

const AllToy = () => {

    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch('toys.json')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <div>
            <h1 className='text-center text-violet-600 text-4xl font-bold my-10'>Our Grand Collections</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-10 mx-20">
                {
                    toys.map(toy => <Toy
                        key={toy._id}
                        toy={toy}
                    ></Toy>)
                }
            </div>
        </div>
    );
};

export default AllToy;