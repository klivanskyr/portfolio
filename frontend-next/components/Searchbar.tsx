export default function SearchBar({ classNames={ wrapper: '', input: ''}, search, setSearch }: { classNames?: { wrapper?: string, input?: string }, search: string, setSearch: (search: string) => void }) {
    return (
        <div className={classNames.wrapper}>
            <input 
                className={classNames.input}
                type='text'
                placeholder='Search...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}