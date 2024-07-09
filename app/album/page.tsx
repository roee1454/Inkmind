import InstagramImage from '@/components/ui/custom/InstagramPhoto'
import axios from 'axios'
import Hero from '../../public/Hero Placeholder.jpg' 

export default function AlbumPage() {
    // const response = await axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_TOKEN}`);
    // console.log
    return <div className="h-screen w-full px-6 md:px-20 py-6">
        <InstagramImage media_url={Hero} />
    </div>
}