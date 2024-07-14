import axios from 'axios';

export interface MediaItem {
  id: string;
  media_type: string;
  media_url: string;
  caption?: string;
  permalink?: string,
  children?: {
    data: MediaItem[];
  };
}

export const fetchInstagramData = async (accessToken: string, limit: number, after?: string) => {
  const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,children,permalink{media_url,media_type}&access_token=${accessToken}&limit=${limit}${after ? `&after=${after}` : ''}`;
  const response = await axios.get(url);
  return response.data;
};
