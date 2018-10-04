import axios from 'axios'
import config from './../Components/config'
export default class Articles {

    async getCategories () {
   const response = await axios.get(`${config.apiUrl}/categories`);

   return response.data.categories

    }

 createArticle = async (data) => {
 await this.uploadToCloudinary(data.image)
}


    async uploadToCloudinary(image) {

    const form = new FormData();
    form.append('file', image);
    form.append('upload_preset', 'filehvt6');

    const response = await axios.post('https://api.cloudinary.com/v1_1/dwekl5m9s/image/upload', form);
    console.log(response);

    return response.data


    }

}