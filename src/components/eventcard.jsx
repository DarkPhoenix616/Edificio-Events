import React from "react";

export default function EventCard({ imgPath, heading, Prize,content, linkurl }){              
    return(                     
    
        <div id="event">
			

<link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400&display=swap" rel="stylesheet"></link>
        

<div class="blog-wrapper">
	<div class="blog-card">
		<div class="card-img">
			<img src={imgPath}></img>
			<h1>{heading}</h1>
		</div>
		<div class="card-details"><span><i class="fa fa-calendar"></i>{Prize}</span></div>
		<div class="card-text"><p>{content}</p></div>
		<a href={linkurl}><div class="read-more">Read More</div></a>
	</div>
  
  </div></div>
    
       );
       
    }
