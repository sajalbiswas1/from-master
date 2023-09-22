import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Brother = () => {
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <h4>Brother</h4>
            <p>Money:{money}</p>
        </div>
    );
};

export default Brother;