
const Toy = ({ toy }) => {

    const { carToyName, carToyImg, carToyPrice, carToyManufacturer, carToyRatings } = toy

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={carToyImg} alt="Shoes" className="rounded-xl w-[300px] h-[300px]" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{carToyName}</h2>
                    <p>Manufacturer: {carToyManufacturer}</p>
                    <p>Price: ${carToyPrice}</p>
                    <p>Rating: {carToyRatings}</p>
                    <div className="">
                        <button className="w-full py-3 rounded-3xl bg-sky-700 font-bold text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toy;