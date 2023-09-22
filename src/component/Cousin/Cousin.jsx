import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";
import Friend from "../Friend/Friend";

const Cousin = ({name}) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h4>{name}</h4>
            {
                name === 'Rubyat' && <p>has: {gift}</p>
            }
            {
                name ==='Sohana' && <Friend></Friend>
            }
        </div>
    );
};

export default Cousin;