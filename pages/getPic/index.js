export const getStaticProps = async () => {

    const res = await fetch('https://api.unsplash.com/photos/?client_id=rL_5c3JZU0epYcJVGrn1HHWpmFd_Uor1zirS2ZfHG9c');
    const data = await res.json();

    return {
        props: { data: data  }
    }
}

const Image = ({ data }) => {
   console.log(data)
   return null
}

export default Image;