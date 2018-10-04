import axios from 'axios'
import config from './../Components/config'
export default class Articles {

    async getCategories () {
   const response = await axios.get(`${config.apiUrl}/categories`);

   return response.data.categories

    }

 createArticle = async (data, token) => {

 const image= await this.uploadToCloudinary(data.image)

 const response = await axios.post(`${config.apiUrl}/articles`, {
     title:data.title,
    content:data.content,
    category_id:data.category,
    imageUrl: image.secure_url

 }, {
  headers:{
Authorization:`Bearer ${token}`,
  }
 })
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