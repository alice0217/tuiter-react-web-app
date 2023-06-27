import ArrayIndexAndLength from "./array-index-and-length";
import AddingAndRemovingDataToFromArrays from "./adding-and-removing-data-to-from-arrays";
import ForLoops from "./for-loops";
import MapFunction from "./map-function";
import JSONStringify from "./json-stringify";
import FindFunction from "./find-function";
import FindIndex from "./find-index";
import FilterFunction from "./filter-function";

function WorkingWithArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
    let variableArray1 = [
        functionScoped,
        blockScoped,
        constant1,
        numberArray1,
        stringArray1
    ];
    console.log('Working with Arrays');
    console.log('numberArray1 =', numberArray1.join(''));
    console.log('stringArray1 =', stringArray1.join(''));
    console.log('variableArray1 =',
                [functionScoped, blockScoped, constant1, ...numberArray1, ...stringArray1].join(
                    ''));

    return (
        <div>
            <h2>Working with Arrays</h2>
            numberArray1 = {numberArray1.join('')}<br/>
            stringArray1 = {stringArray1.join('')}<br/>
            variableArray1 = {[functionScoped, blockScoped, constant1, ...numberArray1,
                               ...stringArray1].join('')}<br/>
            <ArrayIndexAndLength/>
            <AddingAndRemovingDataToFromArrays/>
            <ForLoops/>
            <MapFunction/>
            <JSONStringify/>
            <FindFunction/>
            <FindIndex/>
            <FilterFunction/>
        </div>
    )
}

export default WorkingWithArrays;