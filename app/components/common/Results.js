import React, { Component } from "react";

const Results = (props) => {
  const saveArticle = (event) =>{
    var index = event.target.name;
    props.saveArticle(index);
  }

    return (

      <div className="row">
      <div className="col-sm-12">
        <br />
        
        <div className="panel panel-primary">
            <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa fa-table" aria-hidden="true" /> Top Articles</strong></h3>
          </div> 

          <div id="our-results" className="panel-body">
        
            {props.passedResults.map((article, i) => (
                <div key={i} id={"result_"+(i+1)} className="well">
                  <h4>{article.headline.main}</h4>
                  <p>{article.byline ? article.byline.original : "No Author"}</p>
                  <p><strong>Date Published: </strong> {article.pub_date}</p>
                  <a href={article.web_url} target="_blank" >{article.web_url}</a>
                  <br/>
                  <button name={i} className="btn btn-primary" onClick={saveArticle}><i className="fa fa-floppy-o" aria-hidden="true" /> Save Article</button>
                </div>
              ))
            }
              
          </div>

        </div>
      </div>
    </div>
    
    );
  
}

export default Results;