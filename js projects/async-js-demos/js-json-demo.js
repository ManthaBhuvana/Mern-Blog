let jsObj={
    a:10,
    b:20
}

console.log( jsObj)


//convert JSobj to JSON
let json=JSON.stringify(jsObj)
console.log(json)


//convert JSON to JS obj
let jsonData='{"a":10,"b":20}';
let jsObjFromJSON=JSON.parse(jsonData)
console.log(jsObjFromJSON)
