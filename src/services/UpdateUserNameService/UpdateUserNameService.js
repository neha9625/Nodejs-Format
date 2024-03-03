import { execute } from '../../config/queryWrapper.js';

// update the username using to find out the user id
const UpdateUserNameService = {
  UpdateUserName: async (name, previousName) => {
    try {
      let SelectQuery = `Select * from user_info where user_name = ? ;`
      let SelectData = await execute(SelectQuery, [previousName]);
      let UpdateQuery = `UPDATE user_info
                         SET user_name = ?, update_count = ?
                         WHERE id = ?;`
      let UpdateData = await execute(UpdateQuery, [name, SelectData[0]?.update_count + 1, SelectData[0]?.id]);
      if (UpdateData?.affectedRows) {
        return {
          data: UpdateData,
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

export default UpdateUserNameService;
