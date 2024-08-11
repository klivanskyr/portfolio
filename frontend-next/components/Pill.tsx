interface PillProps {
    className?: string,
    text: string,
}

export default function Pill({ className='', text }: PillProps) {
    return (
        <div className={`${className} rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-xs px-2 py-1 m-1`}>
            {text}
        </div>
    )
}