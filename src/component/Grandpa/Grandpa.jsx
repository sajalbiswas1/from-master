import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000)


const Grandpa = () => {
    const [money, setMoney] = useState(1000)
    const asset = 'ring'
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <p>Money: {money}</p>
            <div className="grandpa flex">
                <MoneyContext.Provider value={[money, setMoney]}>
                    <AssetContext.Provider value="gold">
                        <Dad asset={asset}></Dad>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </AssetContext.Provider>
                </MoneyContext.Provider>
            </div>
        </div>
    );
};

export default Grandpa;