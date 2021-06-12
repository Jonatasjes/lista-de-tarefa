export class UserError {
  public readonly message: string;
  public readonly statusCode: number;
  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

class CreateUserError {
  public readonly err: any;
  public readonly statusCode: number;
  constructor(err: string, statusCode = 400) {
    this.err = err;
    this.statusCode = statusCode;
  }

  public signError(): UserError {
    const err = this.err;
    const statusCode = this.statusCode;

    if (err.errors.name) {
      const errorMessage = err.errors.name.message;
      return {
        message: errorMessage,
        statusCode: statusCode,
      };
    }

    if (err.errors.email) {
      const errorMessage = err.errors.email.message;
      return {
        message: errorMessage,
        statusCode: statusCode,
      };
    }

    if (err.errors.password) {
      const errorMessage = err.errors.password.message;
      return {
        message: errorMessage,
        statusCode: statusCode,
      };
    }

    if (err.errors.passwordConfirm) {
      const errorMessage = err.errors.passwordConfirm.message;
      return {
        message: errorMessage,
        statusCode: statusCode,
      };
    }

    return {
      message: err.message,
      statusCode: 500,
    };
  }
}

export default CreateUserError;
