function FilterFunction() {
    let numberArray1 = [1, 2, 4, 5, 6];
    const numbersGreaterThan2 = numberArray1
        .filter(a => a > 2);
    const evenNumbers = numberArray1
        .filter(a => a % 2 === 0);
    const oddNumbers = numberArray1
        .filter(a => a % 2 !== 0);
    console.log('Filter function');
    console.log('numbersGreaterThan2 = ', numbersGreaterThan2.join(''));
    console.log('evenNumbers = ', evenNumbers.join(''));
    console.log('oddNumbers = ', oddNumbers.join(''));

    return(
        <div>
            <h3>Filter function</h3>
            numbersGreaterThan2 = {numbersGreaterThan2.join('')}<br/>
            evenNumbers = {evenNumbers.join('')}<br/>
            oddNumbers = {oddNumbers.join('')}
        </div>
    );
}

export default FilterFunction