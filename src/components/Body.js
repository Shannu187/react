import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map((restaraunt) => (
                        <RestaurantCard key={restaraunt.info.id} resData={restaraunt}/>
                ))}
            </div>
        </div>
    )
};

export default Body;