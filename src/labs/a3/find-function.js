function FindFunction() {
    let numberArray1 = [1, 2, 4, 5, 6];
    let stringArray1 = ['string1', 'string3'];
    const four = numberArray1.find(a => a === 4);
    const string3 = stringArray1.find(a => a === 'string3');
    console.log('Find function');
    console.log('four = ', four);
    console.log('string3 = ', string3);

    return(
        <div>
            <h3>Find function</h3>
            four = {four}<br/>
            string3 = {string3}<br/>
        </div>
    );
}

export default FindFunction;