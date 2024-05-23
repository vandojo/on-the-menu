class Edamam {
  constructor(KEY, ID) {
    this.baseURL = "https://api.edamam.com/api/recipes/v2?type=public";
    this.key = KEY;
    this.id = ID;

    this.URL = "";
  }

  getURL = () => {
    return this.URL;
  };

  setURL = (url) => {
    this.URL = url;
  };

  getKey = () => {
    return this.key;
  };

  getID = () => {
    return this.id;
  };

  formatURL = (params) => {
    params["app_id"] = this.getID();
    params["app_key"] = this.getKey();

    let url = this.baseURL;
    Object.keys(params).forEach((key) => {
      url += "&" + key + "=" + params[key];
    });

    this.setURL(url);
  };

  makeRequest = async () => {
    let url = this.getURL();

    let data = fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      });

    return data;
  };
}

module.exports = {Edamam};
