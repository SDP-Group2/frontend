import React from 'react'
import "../styles/MarketMap.css";

function MarketMap() {
    return (
        <div className="marketMap">
            <div class="zone">
                <h3>FOOD ZONE</h3>
            </div>
            <div className="market">
                {[...new Array(20)].map((col, colIndex) => {
                    return (
                        <div className="colMarket">
                            {[...new Array(20)].map((row, rowIndex) => {
                                return (
                                    <div className="rowMarket">
                                        
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default MarketMap