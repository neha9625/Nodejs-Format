import ViewUserListService from "../../services/ViewUserListService/ViewUserListService.js"

const ViewUserListController = {
    ViewUserList: async (request, response, next) => {
    try {
      const result = await ViewUserListService.ViewUserList();
      response.json(result);
    } catch (e) {
      next(e);
    }
  },
}

export default ViewUserListController;
