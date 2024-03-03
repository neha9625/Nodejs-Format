import { execute } from '../../config/queryWrapper.js';

//Fetach all the data of user details
const ViewUserListService = {
    ViewUserList: async () => {
    let SelectQuery = `Select * from user_info;`
    try {
      let Data = await execute(SelectQuery, []);
      if (Data?.length) {
        return {
          data: Data,
          message: "Data Found successfully",
          success: true
        };
      } else {
        return {
          message: "Data Not Found",
          success: false
        };
      }
    } catch (error) {
      throw error;
    }
  }
};

export default ViewUserListService;
