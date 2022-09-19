/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (!string || size === 0) { 
    return '';
  } else if (size === undefined) {
    return string; 
  } else {
    const symbols = string.split('');
    const tempArray = [[]];
    const result = [];
    let indexArray = 0;
    symbols.forEach((currentItem, index) => {
      let nextItem = symbols.at(index + 1);
      if (currentItem === nextItem) {
        tempArray[indexArray].push(currentItem);        
      } else {
        tempArray[indexArray].push(currentItem);
        if (nextItem !== undefined) {
          tempArray.push([]);
          indexArray += 1;
        }
      }
    });
    tempArray.forEach(item=>{
      let currSize = item.length > size ? size : item.length;
      result.push(...Array(Number(currSize)).fill(item[0]));
    });
    return result.join('');
  }
  
}