const Config = {
  get PUBLIC_URL() {
    return process.env.PUBLIC_URL;
  },
  get SERVER_URL() {
    return `https://om-lite-admin.herokuapp.com/api/1.0`;
  },
  get PRODUCTION_URL() {
    return `https://om-lite-admin.herokuapp.com/`;
  },
};
export default Config;
