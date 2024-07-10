import InstagramImage from '@/components/ui/custom/InstagramPhoto'
import axios from 'axios'
import Hero from '../../public/Hero Placeholder.jpg' 

export default async function AlbumPage() {
    // const response = await axios.get(`https://graph.instagram.com/me?fields=id,username&access_token=${process.env.INSTAGRAM_TOKEN}`);
    return <div className="h-screen w-full px-6 md:px-20 py-6 font-karantina">
        {/* <div>{JSON.stringify(response.data)}</div> */}
        אלבום קעקועים
    </div>
}