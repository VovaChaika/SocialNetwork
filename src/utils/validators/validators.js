export const requieredField = value =>{
    if (!value){return 'Field is required'}
    return undefined
}

export const maxLengthCreator = (maxLength) => value =>{
    if (!value||value.length>maxLength){return `maxLength is ${maxLength} symbols`}
    return undefined
}