import AuthRegistrationService from "../../services/AuthRegistrationService/AuthRegistrationService.js"

const AuthController = {
  SignUp: async (request, response, next) => {
    try {
      const { fullName, email, password } = request.body;
      const result = await AuthRegistrationService.SignUp(fullName, email, password);
      response.json(result);
    } catch (e) {
      next(e);
    }
  },
}

export default AuthController;
