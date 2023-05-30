function MapFunction() {
    let numberArray1 = [1, 2, 4, 5, 6];

    const square = a => a * a;
    const squares = numberArray1.map(square);
    const cubes = numberArray1.map(a => a * a * a);

    console.log('Map');
    console.log('squares = ', squares.join(''));
    console.log('cubes = ', cubes.join(''));

    return(
        <div>
            <h3>Map</h3>
            squares = {squares.join('')};<br/>
            cubes = {cubes.join('')};
        </div>
    );
}

export default MapFunction;