class Auth {
  auth: boolean;
  constructor() {
    this.auth = false;
  }

  login(cb: () => void) {
    this.auth = true;
    cb();
  }

  logout() {
    this.auth = false;
  }

  isAuth() {
    return this.auth;
  }
}

export default new Auth();
