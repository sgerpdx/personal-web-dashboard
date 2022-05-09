export const findById = (id: number, arr: Array<string>) => {
  let name: string = "";
  for (let i = 0; i < arr.length; i++) {
    if (i == id) name = arr[i];
  }
  return name;
};
