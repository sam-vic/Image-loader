
import clsx from 'clsx'

export default function Button({ children, className, onClick, ...props }) {
    return (
        <button
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}
