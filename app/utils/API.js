import axios from "axios";
const APIKEY = "c425069ec4bb4003a89896ad04c958de";

// Helper functions
const API = {

  getNYTArticles: function(searchTerm, startYear, endYear){
    const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var params = "?api-key="+APIKEY;
    params+="&q="+searchTerm;
    if(parseInt(startYear))
      params+="&begin_date="+startYear+"0101";
    if(parseInt(endYear))
      params+="&end_date="+endYear+"1231";

    return axios.get(BASEURL+params);
  },
  saveArticle: function(article) {
    var newArticle = {
      title: article.headline.main,
      section: article.section_name,
      date: article.pub_date,
      url: article.web_url
    };
    newArticle.by = article.byline ? article.byline.original : "No Author";
    
    return axios.post("/api/saved", newArticle);
  },
  getSavedArticles: function() {
    return axios.get("/api/saved");
  },

  removeArticle: function(id){
    return axios.delete("/api/saved", {params: {id: id}});
  },
  
};

export default API;