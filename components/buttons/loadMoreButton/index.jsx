import Button from '..'
import { useQuery } from 'react-query'

export default function LoadMore({ onClick }) {
    return (
        <Button
            height='50px'
            className='w-[300px] rounded-[30px] font-bold my-[20px] text-white'
            onClick={onClick}
        >
            Load More ...
        </Button>
    )
}
