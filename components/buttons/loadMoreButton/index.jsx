import Button from '..'
import { useQuery } from 'react-query'

export default function LoadMore({ onClick }) {
    const { data: info = [] } = useQuery('CARDS', async () => await (await fetch('https://api.unsplash.com/photos/?client_id=rL_5c3JZU0epYcJVGrn1HHWpmFd_Uor1zirS2ZfHG9c&per_page=20&page=4')).json())

    return (
        <Button
            height='50px'
            className='w-[300px] rounded-[30px] font-bold my-[20px] text-white'
            
        >
            Load More ...
        </Button>
    )
}
