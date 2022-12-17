import React from "react"

const Rank = ({ name, entries}) => {
    return (
        <div>
            <div className="black f3 fw6">
            {`${name}, your current entry count is...`}
            </div>
            <div className="black f1 fw6">
                {entries}
            </div>
        </div>
    );
}

export default Rank;