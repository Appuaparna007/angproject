import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product=[ 
    {
    id:1,
    Title:"Aerospace & Defence",
    Image:"https://novussolution.com/wp-content/uploads/2022/01/Novus-Aerospace-Defense-Trends-That-Will-Shape-the-Future.jpg",
    description:"Aerospace and defense involves applying science and engineering to develop and manufacture aircraft and weapon systems, such as commercial planes, military jets, space shuttles, missiles, drones, etc. The A&D sector is divided into commercial and military segments."
  },
  {
    id:2,
    Title:"Banking & Finance Service(BFS)",
    Image:"https://tscfm.org/wp-content/uploads/2021/10/Banking-Course-in-Mumbai-With-placements.webp",
    description:"Banking industry is one of the key drivers of most economies because it channels funds to borrowers with productive investments."
  },
  {
    id:3,
  Title:"Healthcare",
  Image:"https://www.financialexpress.com/wp-content/uploads/2022/05/Screenshot-2.png?w=350",
  description:"The healthcare industry encompasses a wide range of sectors that provide goods and services to treat patients. This includes things such as treating people, preventing illness, and providing rehabilitative medicine and palliative care."
  },
  {
    id:4,
  Title:"Insurance",
  Image:"https://cdn-res.keymedia.com/cdn-cgi/image/w=840,h=504,f=auto/https://cdn-res.keymedia.com/cms/images/us/026/0343_638449143930798247.jpg",
  description:"The insurance sector is made up of companies that offer risk management in the form of insurance contracts. The basic concept of insurance is that one party, the insurer, will guarantee payment for an uncertain future event."
  },
  {
    id:5,
  Title:"Locomotive",
  Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTML9gWVz9MZS9YUawgl1MqZn-idx5TsdcDVQ&s",
  description:"Locomotives are powered rail transport vehicles that provide motive power to trains with no payload capacity, and their only use is to pull the trains along tracks."
  },
  {
    id:6,
  Title:"Industrial",
  Image:"https://www.colliers.com/-/media/images/colliers/asia/singapore/research-images/2023-q4-industrialreport-1536x1040.ashx?bid=22a500fd716f432dbfc1be53437a6311",
  description:"It is where power meets production,redefining manufacturing and energy"
  },
  {
    id:7,
  Title:"Mobility",
  Image:"https://etimg.etb2bimg.com/photo/79743934.cms",
  description:"Mobility is defined as the ability to move freely or to be easily moved. The mobility industry refers not only to automotive but also to all the other industries that provide the vehicles and infrastructure for transportation."
  },
  {
    id:8,
  Title:"Learning Academy",
  Image:"https://e9e380d2.rocketcdn.me/wp-content/uploads/2021/07/PHOTO-2021-07-25-23-31-51.jpg",
  description:"The Digital Academy is a user-friendly Learning Management System and Student Information System that leverages AI technology to optimize student performance."
  },

  ]

}
