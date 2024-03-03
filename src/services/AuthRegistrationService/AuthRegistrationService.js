import { execute } from '../../config/queryWrapper.js';

//use insert query to insert the user detils and added already exist same data valiadtion in query
const AuthRegistrationService = {
  SignUp: async (fullName, email, password) => {
    let InsertQuery = `INSERT INTO user_info 
                      (user_name, user_email, user_password)  
                      SELECT ?,?,?
                      WHERE NOT EXISTS (SELECT 1 FROM user_info WHERE user_name = ?);`;
    try {
      let Data = await execute(InsertQuery, [fullName, email, password, fullName]);
      if (Data?.affectedRows) {
        return {
          data: Data,
          message: "Records Inserted successfully",
          success: true
        };
      } else {
        return {
          message: "Duplicate Data Found",
          success: false
        };
      }
    } catch (error) {
      throw error;
    }
  }
};

export default AuthRegistrationService;
