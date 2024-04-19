const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];
const galleryArray = document.querySelector("ul.gallery");
const firstItem = document.createElement("li");
firstItem.classList.add("gallery-list-1");
const secondItem = document.createElement("li");
secondItem.classList.add("gallery-list-2");
const thirdItem = document.createElement("li");
thirdItem.classList.add("gallery-list-3");
document.body.append(firstItem, secondItem, thirdItem);

const imageE1 = document.createElement("img");
imageE1.src = "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260";
imageE1.alt = "White and Black Long Fur Cat";
imageE1.width = 360;
imageE1.height = 300;



const galleryList1 = document.querySelector(".gallery-list-1");
galleryList1.append(imageE1);

const imageE2 = document.createElement("img");
imageE2.src = "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260";
imageE2.alt = "Orange and White Koi Fish Near Yellow Koi Fish";
imageE2.width = 360;
imageE2.height = 300;



const galleryList2 = document.querySelector(".gallery-list-2");
galleryList2.append(imageE2);


const imageE3 = document.createElement("img");
imageE3.src = "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260";
imageE3.alt = "Group of Horses Running";
imageE3.width = 360;
imageE3.height = 300;

const galleryList3 = document.querySelector(".gallery-list-3");
galleryList3.append(imageE3);



//secondItem.src = `https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260`;

//console.log(firstItem)
// firstItem.append("img1, img2, img3")
//img1.src = `https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260`;
// img2.src = "<https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260>";
// img3.src = "<ttps://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260>";
//image.src = "<>";