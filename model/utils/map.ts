const createKey = <T extends string>(keys: Array<T>) => keys.sort().join("+");
export const createMapper = <T extends string>(
  ...mappings: Array<[Array<T>, T]>
) => {
  const map: Record<string, [Array<T>, T]> = {};

  const set = (...mapping: [Array<T>, T]) => {
    map[createKey(mapping[0])] = [mapping[0], mapping[1]];
  };
  const get = (keys: Array<T>) => map[createKey(keys)]?.[1];

  const prettyPrint = () => {
    if (process.env.NEXT_PUBLIC_SHOW_DEBUG !== "true") {
      console.error("DEBUG MESSAGES NOT APPROVED");
      return;
    }
    console.log("%c# Tags definitions:", "color: blue; font-weight: bold");
    Object.entries(map).forEach(([_key, [keys, value]]) => {
      console.log(`* ${keys.map(k => k.padEnd(8)).join("+   ")}=  %c${value}`, 'color: green; font-weight: bold');
    });
    console.log("%c# End of tags definition", "color: blue; font-weight: bold");
  };

  mappings.forEach((mapping) => set(...mapping));

  return {
    get,
    set,
    prettyPrint,
  };
};
