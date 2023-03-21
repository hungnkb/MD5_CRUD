let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function a (arr){
 
    let newArr =[];
    for (let i = 0; i < arr.length; i += 3) {
        if ((i + 2) <= arr.length) {
            newArr = [...newArr, [arr[i], arr[i+1], arr[i+2]]]
        } else {
            let arr2 = arr.slice(i, arr.length);
            newArr = [...newArr, arr2]
            break;
        }
    }
    return newArr
}

console.log(a(arr));


