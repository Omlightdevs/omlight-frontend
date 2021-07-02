import axios from "axios";
import Config from "../config";
import { ICategoryProps, INewCategoryProps, IResponseProps } from "../types";

class CategoryServices {
     public async getAllCategories() {
          try {
               const category = await axios.get<IResponseProps>(
                    `${Config.SERVER_URL}/categories`
               );
               return category.data.data;
          } catch (err: any) {
               console.log(err.message);
               return err.message;
          }
     }
     public async getCategoryById(id: string) {
          try {
               const category = await axios.get<IResponseProps>(
                    `${Config.SERVER_URL}/category/${id}`
               );
               return category.data.data;
          } catch (err: any) {
               return err.message;
          }
     }

     public async CreateNewCategory(data: INewCategoryProps) {
          try {
               const NewLight = await axios.post(
                    `${Config.SERVER_URL}/create-category`
               );
               return NewLight.data.data;
          } catch (err) {
               return err;
          }
     }

     public async updatingCategoryById(id: string, data: ICategoryProps) {
          try {
               const UpdateCategory = await axios.put(
                    `${Config.SERVER_URL}/update-category/${id}`,
                    data
               );
               return UpdateCategory.data.data;
          } catch (err) {
               return err;
          }
     }

     public async deleteCategoryById(id: string) {
          try {
               const deletedCategory = await axios.delete(
                    `${Config.SERVER_URL}/delete-category/${id}`
               );
               return deletedCategory.data.data;
          } catch (err) {
               return err;
          }
     }
}

export default new CategoryServices();
