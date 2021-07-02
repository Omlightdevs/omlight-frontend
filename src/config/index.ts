const Config = {
     get PUBLIC_URL() {
          return process.env.PUBLIC_URL;
     },
     get SERVER_URL() {
          return `http://localhost:8080/api/1.0`;
     },
};
export default Config;
