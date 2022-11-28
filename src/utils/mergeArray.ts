export const mergeArrays = (arrays: any[]) => {
    const tempArray: Array<any> = [];
    arrays.forEach((frame) => {
        tempArray.push(frame.events);
    });
    return tempArray.flat();
}