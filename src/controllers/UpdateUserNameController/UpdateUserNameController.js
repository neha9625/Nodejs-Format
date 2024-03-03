import UpdateUserNameService from "../../services/UpdateUserNameService/UpdateUserNameService.js"

const UpdateUserNameController = {
    UpdateUserName: async (request, response, next) => {
    try {
      const result = await UpdateUserNameService.UpdateUserName(request.params.name , request.body.previousName);
      response.json(result);
    } catch (e) {
      next(e);
    }
  },
}

export default UpdateUserNameController;
