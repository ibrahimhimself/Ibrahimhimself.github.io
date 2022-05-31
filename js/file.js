let allbtn = document.getElementById("allbtn");
let logobtn = document.getElementById("logobtn");
let socialMediabtn = document.getElementById("socialMediabtn");
let vectorbtn = document.getElementById("vectorbtn");
let webbtn = document.getElementById("webbtn");


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
    <div class="col-xl-2 col-12 mb-5 rounded-5">
                <img src="${imageArr[i].img}" class="smallImage" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            </div>
        `

        document.getElementById("mainDiv").innerHTML = str;
    }
    bigDisplayall()
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
    <div class="col-xl-2 col-12 mb-5 rounded-5">
                <img src="${socialMediaImagesArr[i].img}" class="smallImage" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            </div>
        `

        document.getElementById("mainDiv").innerHTML = str2;
    }
    bigDisplayall()
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
    <div class="col-xl-2 col-12 mb-5 rounded-5">
                <img src="${vectorArtImagesArr[i].img}" class="smallImage" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            </div>
        `

        document.getElementById("mainDiv").innerHTML = str3;
    }
    bigDisplayall()
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
    <div class="col-xl-2 col-12 mb-5 rounded-5">
                <img src="${cardsImagesArr[i].img}" class="smallImage" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            </div>
        `

        document.getElementById("mainDiv").innerHTML = str4;
    }

    bigDisplayall();
}



// ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ


let all = new XMLHttpRequest();

all.open("GET","/js/All.json");

all.send();

all.addEventListener("readystatechange",function(){

    if( all.readyState == 4 && all.status == 200 ){

        allImagesArr = JSON.parse(all.response).all;

        console.log(allImagesArr);

        displayallImages();
        
        
    }
});

let str5 = "";

function displayallImages(){

    for(i = 0 ; i < allImagesArr.length ; i++){

        str5+=
        `
    <div class="col-xl-2 col-12 mb-5 rounded-5">
                <img src="${allImagesArr[i].img}" class="smallImage" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            </div>
        `

        document.getElementById("mainDiv").innerHTML = str5;
    }
    bigDisplayall()
    
}

function returnImages(){

    var smallImges = document.querySelectorAll(".smallImage");
    var smallImageArr = [...smallImges]
    return smallImageArr;
}

function bigDisplayall(){

    let strr5 = "";
    for(i = 0 ; i < returnImages().length ; i++){

        let c = returnImages()[i].src;
        returnImages()[i].addEventListener("click",function(){

        strr5 =
            `
                <div class="modal-body" id="modalBody">
                    <img src="${c}" class="w-100 lazyload">
                </div>
            `
            
        document.getElementById("modal-body").innerHTML = strr5;
        }) 
    }
}