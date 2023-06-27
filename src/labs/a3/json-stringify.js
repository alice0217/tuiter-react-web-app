function JSONStringify() {
    let squares = [1, 4, 16, 25, 36];
    console.log('JSON Stringify');
    console.log('squares = ', JSON.stringify(squares));
    return (
        <div>
            <h3>JSON Stringify</h3>
            squares = {JSON.stringify(squares)} <br/>
        </div>
    );
}

export default JSONStringify;