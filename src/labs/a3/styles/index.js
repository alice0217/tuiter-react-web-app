const Styles = () => {
    const colorBlack = {
        color: "black"
    }
    const padding10px = {
        padding: "10px"
    }
    const bgBlue = {
        "backgroundColor": "lightblue",
        "color": "black",
        ...padding10px
    };
    const bgRed = {
        "backgroundColor": "lightcoral",
        ...colorBlack,
        ...padding10px
    };
    return (
        <div>
            <h2>Styles</h2>
            {/*React.js accepts a JSON object where the properties are CSS properties and values
             are CSS values */}
            <div style={{
                "backgroundColor": "lightyellow",
                "color": "black", padding: "10px"
            }}>
                Yellow background
            </div>
            <div style={bgRed}>
                Red background
            </div>
            <div style={bgBlue}>
                Blue background
            </div>
        </div>
    );
};
export default Styles;