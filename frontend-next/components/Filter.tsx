export interface Item {
    [key: string]: any;
}

export default function Filter({ children, search, items, filterFields }: { children: (filteredItems: Item[]) => React.ReactNode, search: string, items: Item[], filterFields: string[] }) {
    const filteredItems = items.filter((item: Item) => {
        return filterFields.some((field) => {
            return item[field]?.toString().toLowerCase().includes(search.toLowerCase());
        });
    });

    return children(filteredItems);
}