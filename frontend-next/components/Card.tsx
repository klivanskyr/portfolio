interface CardProps {
    header?: JSX.Element,
    body?: JSX.Element,
    footer?: JSX.Element,
    classNames?: { wrapper?: string, header?: string, body?: string, footer?: string },
}

export default function Card({ classNames, header, body, footer }: CardProps) {
    return (
        <div className={`${classNames?.wrapper || ''} max-w-fit rounded-lg shadow-2xl drop-shadow-2xl overflow-hidden`}>
            {header && <div className={`${classNames?.header || ''} rounded-t-md rounded-r-sm rounded-l-sm border-b-[1px]`}>
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