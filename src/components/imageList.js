import React from 'react';
import './ImageList.css'
import ImageCard from './ImageCard'



//function Image ( props )  {
    
 //   return (
 //       <div key={props.imageid}>
 //           <img width="30%" height="30%" src={props.imageurl} alt="ok" />
 //       </div>
  //  );
 //   }

const ImageList = props => {


    //image is an object with props id, urls below code can be also written via destructuring image variable
    const images = props.images.map((image) => {
        return (
            <ImageCard key={image.id} image={image} />
              
         
    
    /*new code with object destructuring

    //const images = props.images.map(({id, urls}) => {
  //  return (
       
   //     <div key={id}>
        
   //     < img width = "30%" height = "30%" src = { urls.regular } alt = "ok" />
  //      </div> */
)});

                    return <div className="image-list">{images}</div>

  

};


export default ImageList;
