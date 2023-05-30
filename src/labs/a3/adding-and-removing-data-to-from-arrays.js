function AddingAndRemovingDataToFromArrays() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
    // adding new items
    numberArray1.push(6);
    stringArray1.push('string3');

    // remove 1 item starting on 3rd spot
    numberArray1.splice(2, 1);
    stringArray1.splice(1, 1);
    console.log('Add and remove data to arrays');
    console.log('numberArray1 = ', numberArray1.join(''));
    console.log('stringArray1 = ', stringArray1.join(''));
    return(
      <div>
          <h3>Add and remove data to arrays</h3>
          numberArray1 = {numberArray1.join('')}<br/>
          stringArray1 = {stringArray1.join('')}
      </div>
    );
}

export default AddingAndRemovingDataToFromArrays