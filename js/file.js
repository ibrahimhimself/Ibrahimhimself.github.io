// let loading = document.getElementById("loading");


// let loadingPage=setTimeout(() => {
    
//     loading.style.display="none";
    
//  }, 5000);

let logoImage = new XMLHttpRequest();

logoImage.open("GET","/js/logoImage.json");

logoImage.send();

logoImage.addEventListener("readystatechange",function(){

    if( logoImage.readyState == 4 && logoImage.status == 200 ){

        imageArr = JSON.parse(logoImage.response).Logos;

        console.log(imageArr);
        
    }
});

let str = "";

function displayLogoImages(){

    for(i = 0 ; i < imageArr.length ; i++){

        str+=
        `
    <div class="col-xl-4 col-12 mb-5 rounded-5">
                <img src="${imageArr[i].img}" alt="" srcset="">
            </div>
        `

        document.getElementById("mainDiv").innerHTML = str;
    }
}

// ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ


let socialMedia = new XMLHttpRequest();

socialMedia.open("GET","/js/socialMedia.json");

socialMedia.send();

socialMedia.addEventListener("readystatechange",function(){

    if( socialMedia.readyState == 4 && socialMedia.status == 200 ){

        socialMediaImagesArr = JSON.parse(socialMedia.response).socialMedia;

        console.log(socialMediaImagesArr);
        
    }
});

let str2 = "";

function displaySocialMediaImages(){

    for(i = 0 ; i < socialMediaImagesArr.length ; i++){

        str2+=
        `
    <div class="col-xl-4 col-12 mb-5 rounded-5">
                <img src="${socialMediaImagesArr[i].img}" alt="" srcset="">
            </div>
        `

        document.getElementById("mainDiv").innerHTML = str2;
    }
}

// ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ


let vectorArt = new XMLHttpRequest();

vectorArt.open("GET","/js/vectorArt.json");

vectorArt.send();

vectorArt.addEventListener("readystatechange",function(){

    if( vectorArt.readyState == 4 && vectorArt.status == 200 ){

        vectorArtImagesArr = JSON.parse(vectorArt.response).vectorArt;

        console.log(vectorArtImagesArr);
        
    }
});

let str3 = "";

function displayVectorArtImages(){

    for(i = 0 ; i < vectorArtImagesArr.length ; i++){

        str3+=
        `
    <div class="col-xl-4 col-12 mb-5 rounded-5">
                <img src="${vectorArtImagesArr[i].img}" alt="" srcset="">
            </div>
        `

        document.getElementById("mainDiv").innerHTML = str3;
    }
}  

// ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ


let cards = new XMLHttpRequest();

cards.open("GET","/js/cards.json");

cards.send();

cards.addEventListener("readystatechange",function(){

    if( cards.readyState == 4 && cards.status == 200 ){

        cardsImagesArr = JSON.parse(cards.response).cards;

        console.log(cardsImagesArr);
        
    }
});

let str4 = "";

function displayCardsImages(){

    for(i = 0 ; i < cardsImagesArr.length ; i++){

        str4+=
        `
    <div class="col-xl-4 col-12 mb-5 rounded-5">
                <img src="${cardsImagesArr[i].img}" alt="" srcset="">
            </div>
        `

        document.getElementById("mainDiv").innerHTML = str4;
    }
}