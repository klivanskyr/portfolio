interface CardProps {
    header?: JSX.Element,
    body?: JSX.Element,
    footer?: JSX.Element,
    classNames?: { wrapper?: string, header?: string, body?: string, footer?: string },
}

export default function Card({ classNames, header, body, footer }: CardProps) {
    return (
        <div className={`${classNames?.wrapper || ''} max-w-fit rounded-lg overflow-clip shadow-extralarge p-1 dark:border dark:border-white`}>
            {header && <div className={`${classNames?.header || ''} rounded-t-md rounded-r-sm rounded-l-sm`}>
                {header}
            </div>}
            {body && <div className={classNames?.body || ''}>
                {body}
            </div>}
            {footer && <div className={`${classNames?.footer || ''} rounded-b-md rounded-r-sm rounded-l-sm border-t-[1px]`}>
                {footer}
            </div>}
        </div>
    )
}