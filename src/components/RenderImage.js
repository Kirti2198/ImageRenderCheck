import React, { Component,useState} from 'react';


const RenderImage=()=>{
  const image1=<img src="https://cdn.quicksell.co/-KpFi1XEDgH1mY5k1fSo/products_100/-M7q3olCZCehB9AGbn2y.jpg"/> ;

  const image2=<img src="https://cdn.quicksell.co/-KpFi1XEDgH1mY5k1fSo/products_200/-M7q3olCZCehB9AGbn2y.jpg"/>;
  const image3=<img src="https://cdn.quicksell.co/-KpFi1XEDgH1mY5k1fSo/products_400/-M7q3olCZCehB9AGbn2y.jpg"/>;
  const image4=<img src="https://cdn.quicksell.co/-KpFi1XEDgH1mY5k1fSo/products_100/-M7q3olCZCehB9AGbn2y.jpg"/>;
  
  function testImage(URL) {
    var tester=new Image();
    tester.onload=imageFound;
    tester.onerror=imageNotFound;
    tester.src=URL;
  }

    function imageFound() {
        alert('That image is found and loaded');
    }

    function imageNotFound() {
        alert('That image was not found.');
        testImage("https://cdn.quicksell.co/-KpFi1XEDgH1mY5k1fSo/products_200/-M7q3olCZCehB9AGbn2y.jpg");
        testImage("https://cdn.quicksell.co/-KpFi1XEDgH1mY5k1fSo/products_200/-M7q3olCZCehB9AGbn2y.jpg");
        testImage("https://cdn.quicksell.co/-KpFi1XEDgH1mY5k1fSo/products_200/-M7q3olCZCehB9AGbn2y.jpg");
    }

    testImage("https://cdn.quicksell.co/-KpFi1XEDgH1mY5k1fSo/products_100/-M7q3olCZCehB9AGbn2y.jpg");
      return(
        <div>
          <img src="https://cdn.quicksell.co/-KpFi1XEDgH1mY5k1fSo/products_100/-M7q3olCZCehB9AGbn2y.jpg"/>       
          </div>
      )
  }

export default RenderImage;