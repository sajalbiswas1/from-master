import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Friend = () => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h5>Frind</h5>
            <p>Has:{gift}</p>
        </div>
    );
};

export default Friend;