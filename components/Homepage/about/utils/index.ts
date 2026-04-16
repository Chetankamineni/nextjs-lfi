import { content } from '../telkomabout'; 

export const getTelkomAboutApi = () => {
  return {
    status: "success",
    timestamp: new Date().toISOString(),
    data: {
      content: {
        title: content.title,
        description: content.description,
        image_url: content.image,
      },
    }
  };
};

export default getTelkomAboutApi();