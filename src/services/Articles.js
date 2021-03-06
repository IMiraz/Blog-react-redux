import axios from 'axios'
import config from './../Components/config'
import {validateAll} from 'indicative'
export default class Articles {

    async getArticles(url = `${config.apiUrl}/articles`) {
        const response = await axios.get(url);
        return response.data.data

         }


         async getAritcle(slug) {

          const response = await axios.get(`${config.apiUrl}/article/${slug}`)

          return response.data.data

         }


    async getCategories () {
   const response = await axios.get(`${config.apiUrl}/categories`);

   return response.data.categories

    }

    createArticle = async (data, token) => {

        try {
            if (!data.image) {
                return Promise.reject([{
                  message: 'The image is required.',
                }]);
              }
          const rules = {
            title: 'required',
            content: 'required',
            category: 'required',
          };

          const messages = {
            required: 'The {{ field }} is required.',
          };

          await validateAll(data, rules, messages);

          const image = await this.uploadToCloudinary(data.image);
          const response = await axios.post(`${config.apiUrl}/articles`, {
            title: data.title,
            content: data.content,
            category_id: data.category,
            imageUrl: image.secure_url,
          }, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });


          return response.data;


        } catch (errors) {
          if (errors.response) {
            return Promise.reject(errors.response.data);
          }

          return Promise.reject(errors);
        }
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