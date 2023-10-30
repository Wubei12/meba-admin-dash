import classNames from 'classnames';
import Link from 'next/link';
import React from 'react'

interface Props {
    isSelected?: boolean;
    isMobile?: boolean;
    isBanner?: boolean;
    href?: string;
    children: React.ReactNode;
    [rest: string]: any;
}

function NavLink({
    isSelected,
    isMobile,
    isBanner,
    href,
    children,
    ...rest
}: Props) {
    const className = classNames(
        rest.className, "text-white rounded-md px-3 py-2 font-medium",
        {
            "bg-gray-900": isSelected,
            "text-gray-300 hover:bg-gray-700 hover:text-white": !isSelected && !isBanner,
            "block text-base": isMobile,
            "text-sm": !isMobile,
            "text-gray-300": isBanner,
        }
    )

    if (!href) {
        return (
            <span className={className} role='button' onClick={rest.onClick}>
                {children}
            </span>
        )
    }
    return (
        <Link className='' href={href}>
            {children}
        </Link>
    )
}

export default NavLink