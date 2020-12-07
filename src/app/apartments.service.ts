import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApartmentsService {

  private messageSource = new BehaviorSubject<string>('default message');
  public currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  apartments: Object[] = [
    {
      id: 1,
      "nameApartment": 'Soho',
      image: 'https://images.squarespace-cdn.com/content/v1/5de66dfc5511bf790e4476bd/1575475366644-826KSCK2UK0CEA8TCN51/ke17ZwdGBToddI8pDm48kCpX2mwG9slVUzQCwhOMrQF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVDXM9yQ8sG6x3COIEUaadqpk9XPubC0H4MH9Az_c7nPqIjSxZ2rgD2_Fw9U6DWfsg/image_005.jpg?format=500w',
      street: 'Wardour St',
      bed: 2,
      price: '£1,355',
      slides: [
        {src: 'https://images.squarespace-cdn.com/content/v1/5de66dfc5511bf790e4476bd/1578482261675-E2BJJFI51W1FSDU9G5A7/ke17ZwdGBToddI8pDm48kCpX2mwG9slVUzQCwhOMrQF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVDXM9yQ8sG6x3COIEUaadqpk9XPubC0H4MH9Az_c7nPqIjSxZ2rgD2_Fw9U6DWfsg/image_004.jpg?format=1500w'},
        {src: 'https://images.squarespace-cdn.com/content/v1/5de66dfc5511bf790e4476bd/1592386864950-2N782J2CI0K7VAIKSOJM/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Soho+005.jpg?format=1500w'},
        {src: 'https://images.squarespace-cdn.com/content/v1/5de66dfc5511bf790e4476bd/1592386864946-FWX44M6CG8Z79ULY8DCU/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Soho+001.jpg?format=1500w'}
      ],
      shortDescriptionAfterStreet: 'Luxury 2 bed penthouse with outdoor terrace',
      areaAndRooms: "2 bedroom, 2 bathroom | 109 square metres",
      areaDescription: "Welcome to Soho. This Colourful neighbourhood is a churning amalgamation of buzzing nightlife, old-school pubs and cosy restaurants. Its streets and winding alleyways have had characters like Mozart, Karl Marx and the Sex Pistols call it home over the years.These days you’ll find Soho’s pavements busy with people going to West End shows, media professionals marching to work, hungry patrons sampling some of London’s best restaurants and people looking to have a legendary night out at one of the area’s great bars and pubs.",
      kitchen: "The kitchen comes with everything you need to cook for yourself, including pots, pans, cutlery, glasses, etc. Its well-lit, modern, and houses a fridge freezer, plenty of cupboard storage space and a Nespresso machine (with new capsules each week!).",
      livingArea: "A large place to relax and unwind that includes 2 sets of tables and chairs, and a sofa bed - so friends and family can visit. There is also a smart TV, high-speed internet and various laptop areas for studying.",
      bedroomX2: "Designed for a perfect night's sleep, both bedrooms have double-beds that come with sheets, duvets, pillows. Enjoy 5 star hotel-standard cleanliness, weekly cleans, toiletries, fresh linen. There is also wardrobe space and a standing mirror in both.",
      bathroomX2: "The modern bathrooms come with a sink, shower, toilet, heated towel rail, and multiple mirrors.",
      outdoorTerrace: "Winding stairs in the hall lead up to 33.5 square metre room terrace, with outdoor furniture including tables and chairs.",
      totalPeaceOfMind: "With our 24 hour assistance and centrally located reception, students can concentrate on their studies with no distractions. Should any issues rise, our friendly staff are just a short walk, phone call, Whatsapp or email away."
  },
  {
    id: 2,
    "nameApartment": 'Covent Garden',
    image: 'https://images.squarespace-cdn.com/content/v1/5de66dfc5511bf790e4476bd/1575475426115-SDW4UR6BZNHFMWU6IEY8/ke17ZwdGBToddI8pDm48kCpX2mwG9slVUzQCwhOMrQF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVDXM9yQ8sG6x3COIEUaadqpk9XPubC0H4MH9Az_c7nPqIjSxZ2rgD2_Fw9U6DWfsg/image_010.jpg?format=500w',
    street: 'Floral Street',
    bed: 2,
    price: '£1,185',
    slides: [
      {src: 'https://images.squarespace-cdn.com/content/v1/5de66dfc5511bf790e4476bd/1578482289495-OSNZONGR5Z547V911MU7/ke17ZwdGBToddI8pDm48kCpX2mwG9slVUzQCwhOMrQF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVDXM9yQ8sG6x3COIEUaadqpk9XPubC0H4MH9Az_c7nPqIjSxZ2rgD2_Fw9U6DWfsg/image_016.jpg?format=1500w'},
      {src: 'https://images.squarespace-cdn.com/content/v1/5de66dfc5511bf790e4476bd/1578482284285-DDMN2M77SPJN1CGNAGBW/ke17ZwdGBToddI8pDm48kCpX2mwG9slVUzQCwhOMrQF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVDXM9yQ8sG6x3COIEUaadqpk9XPubC0H4MH9Az_c7nPqIjSxZ2rgD2_Fw9U6DWfsg/image_011.jpg?format=1500w'},
      {src: 'https://images.squarespace-cdn.com/content/v1/5de66dfc5511bf790e4476bd/1578482305218-6YH7PTFQKYN9UPEWXG0W/ke17ZwdGBToddI8pDm48kCpX2mwG9slVUzQCwhOMrQF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVDXM9yQ8sG6x3COIEUaadqpk9XPubC0H4MH9Az_c7nPqIjSxZ2rgD2_Fw9U6DWfsg/image_023.jpg?format=1500w'}
    ],
    shortDescriptionAfterStreet: "Beautiful chic 2-bed in the heart of Covent Garden",
      areaAndRooms: "2 bedroom, 1 bathroom | 80 square metres",
      areaDescription: "Welcome to Covent Garden - one of London’s trendiest neighbourhoods that attracts hordes of visitors year-round. Flanked by Leicester Square and Holborn, the area is home to top class restaurants, bars, museums, theatres and cultural experiences. With all the above (and much more) on offer in such a prime location in London, it’s no surprise that living in Covent Garden is highly sought after. It’s an exciting atmosphere to get in amongst, and is much calmer than neighbouring Soho or Leicester Square, which makes it ideal for studying, and brainstorming new ideas. ",
      kitchen: "The kitchen comes with everything you need to cook for yourself, including pots, pans, cutlery, glasses, etc. It's well-lit, modern, and houses a fridge freezer, plenty of cupboard storage space and a Nespresso machine (with new capsules each week!).",
      livingArea: "A place to relax that includes 2 tables, 7 chairs, a sofa bed - so friends and family can visit. There is also a smart TV, high-speed internet and various laptop areas for studying.",
      bedroomX2: "Designed for a perfect night's sleep, both double-beds come with sheets, duvets, pillows, etc. Guests can enjoy 5 star hotel-standard cleanliness, weekly cleans, toiletries, fresh linen. There is also plenty of wardrobe space and a couple of standing mirrors.",
      bathroomX2: "The modern bathroom comes with a sink, shower, toilet, heated towel rail, and multiple mirrors.",
      outdoorTerrace: "Winding stairs in the hall lead up to 33.5 square metre room terrace, with outdoor furniture including tables and chairs.",
      totalPeaceOfMind: "With our 24 hour assistance and centrally located reception, students can concentrate on their studies with no distractions. Should any issues rise, our friendly staff are just a short walk, phone call, Whatsapp or email away."
},
{
  id: 3,
  "nameApartment": 'Covent Garden',
  image: 'https://images.squarespace-cdn.com/content/v1/5de66dfc5511bf790e4476bd/1575475507030-1P9Q7WMZYT5OX9LZV2UD/ke17ZwdGBToddI8pDm48kCpX2mwG9slVUzQCwhOMrQF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVDXM9yQ8sG6x3COIEUaadqpk9XPubC0H4MH9Az_c7nPqIjSxZ2rgD2_Fw9U6DWfsg/image_002.jpg?format=500w',
  street: 'Drury Lane',
  bed: 1,
  price: '£1,015',
  slides: [
    {src: 'https://images.squarespace-cdn.com/content/v1/5de66dfc5511bf790e4476bd/1578482303941-EG2TB9X9BDPP4P8ABO35/ke17ZwdGBToddI8pDm48kCpX2mwG9slVUzQCwhOMrQF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVDXM9yQ8sG6x3COIEUaadqpk9XPubC0H4MH9Az_c7nPqIjSxZ2rgD2_Fw9U6DWfsg/image_019.jpg?format=1500w'},
    {src: 'https://images.squarespace-cdn.com/content/v1/5de66dfc5511bf790e4476bd/1578482259354-6Y8UR7RU9NY8FAA4RVXD/ke17ZwdGBToddI8pDm48kCpX2mwG9slVUzQCwhOMrQF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVDXM9yQ8sG6x3COIEUaadqpk9XPubC0H4MH9Az_c7nPqIjSxZ2rgD2_Fw9U6DWfsg/image_008.jpg?format=1500w'},
    {src: 'https://images.squarespace-cdn.com/content/v1/5de66dfc5511bf790e4476bd/1578482250893-H7YDSKJU450A9LBPK0A5/ke17ZwdGBToddI8pDm48kCpX2mwG9slVUzQCwhOMrQF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVDXM9yQ8sG6x3COIEUaadqpk9XPubC0H4MH9Az_c7nPqIjSxZ2rgD2_Fw9U6DWfsg/image_009.jpg?format=1500w'}
  ],
  shortDescriptionAfterStreet: "Stunning, luxury one-bed in Covent Garden with outdoor terrace",
      areaAndRooms: "1 bedroom, 1 bathroom | 46 square metres.",
      areaDescription: "Welcome to Covent Garden - one of London’s trendiest neighbourhoods that attracts hordes of visitors year-round. Flanked by Leicester Square and Holborn, the area is home to top class restaurants, bars, museums, theatres and cultural experiences. With all the above (and much more) on offer in such a prime location in London, it’s no surprise that living in Covent Garden is highly sought after. It’s an exciting atmosphere to get in amongst, and is much calmer than neighbouring Soho or Leicester Square, which makes it ideal for studying, and brainstorming new ideas. ",
      kitchen: "The kitchen comes with everything you need to cook for yourself, including pots, pans, cutlery, glasses, etc. It's well-lit, modern, and houses a fridge freezer, plenty of cupboard storage space and a Nespresso machine (with new capsules each week!).",
      livingArea: "Homely furnishings that includes 2 tables, 5 chairs, a stand alone lamp and sofa bed - the perfect environment for relaxing, and big enough to have friends and family come visit. There is also a smart TV, high-speed internet and various laptop areas for studying.",
      bedroomX2: "Designed for a perfect night's sleep, the double-bed comes with sheets, duvets, pillows. Enjoy 5 star hotel-standard cleanliness, weekly cleans, toiletries, fresh linen. A further door here leads to the outdoor terrace area, perfect for morning and evening dining. Back inside, there is also wardrobe space and a mirror in the adjacent hall.",
      bathroomX2: "The spotless modern bathroom comes with a sink, shower, toilet, heated towel rail, and multiple mirrors.",
      outdoorTerrace: "Winding stairs in the hall lead up to 33.5 square metre room terrace, with outdoor furniture including tables and chairs.",
      totalPeaceOfMind: "With our 24 hour assistance and centrally located reception, students can concentrate on their studies with no distractions. Should any issues rise, our friendly staff are just a short walk, phone call, Whatsapp or email away."
},
{
  id: 4,
  "nameApartment": 'Soho',
  image: 'https://images.squarespace-cdn.com/content/v1/5de66dfc5511bf790e4476bd/1576164256663-F8AFZTCYC21XGTINT6WP/ke17ZwdGBToddI8pDm48kL8y8F9L1w7wniDrpyEG4QB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Uac9WeukoqCuXVRqS_km6cRKT-uvSR3uMb50m68vfmrWirjcSQbdINryqaTbdKsomw/HSHCN_Flat+2_47+Rupert+Street_W1D_001.jpg?format=500w',
  street: 'Rupert Street',
  bed: 1,
  price: '£845'
},
{
  id: 5,
  "nameApartment": 'Covent Garden',
  image: 'https://images.squarespace-cdn.com/content/v1/5de66dfc5511bf790e4476bd/1603185977092-CJL2EHXUW2UCE2AJ20R5/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/001.jpg?format=500w',
  street: 'King Street',
  bed: 1,
  price: '£795'
},
{
  id: 6,
  "nameApartment": 'Covent Garden',
  image: 'https://images.squarespace-cdn.com/content/v1/5de66dfc5511bf790e4476bd/1592384003996-XOTAX6VUU46NN93OL99X/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Covent+Garden+007.jpg?format=500w',
  street: 'Short Gardens',
  bed: 2,
  price: '£1,270'
},
{
  id: 7,
  "nameApartment": 'Holborn',
  image: 'https://images.squarespace-cdn.com/content/v1/5de66dfc5511bf790e4476bd/1597138849914-SYLGFM6PQWJG7J61NC05/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/nprt3drrypqrhxdx548f2dt3ajwzenue95k84v35-1.jpg?format=500w',
  street: 'Kings Mews',
  bed: 2,
  price: '£950'
},
{
  id: 8,
  "nameApartment": 'Holborn',
  image: 'https://images.squarespace-cdn.com/content/v1/5de66dfc5511bf790e4476bd/1597138812934-QEIA2XAZYFK5JMIVXOX5/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/gv0zmcyo82w3gpzk8asanf6yfi6rq0z8hj1k8gzz-1.jpg?format=500w',
  street: 'Kings Mews',
  bed: 2,
  price: '£750'
},
{
  id: 9,
  "nameApartment": 'Holborn',
  image: 'https://images.squarespace-cdn.com/content/v1/5de66dfc5511bf790e4476bd/1603107143049-1VZIPNAWHCYUEVJX14LC/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/004.jpg?format=500w',
  street: 'Kings Mews',
  bed: 2,
  price: '£850'
},
{
  id: 10,
  "nameApartment": 'Shoreditch',
  image: 'https://images.squarespace-cdn.com/content/v1/5de66dfc5511bf790e4476bd/1603385739379-PN2E2TNR11VRXMKVSQ0P/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Apartment52_Rosewood_Building_Shoreditch_%5B39.jpg?format=500w',
  street: 'Cremer St',
  bed: 3,
  price: '£1,130'
},
{
  id: 11,
  "nameApartment": 'Shoreditch',
  image: 'https://images.squarespace-cdn.com/content/v1/5de66dfc5511bf790e4476bd/1603385672876-6MWNP5GRCZCXFCSR2WCQ/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Apartment52_Rosewood_Building_Shoreditch_%5B16.jpg?format=500w',
  street: 'Cremer St',
  bed: 3,
  price: '£1,130'
},
{
  id: 12,
  "nameApartment": 'Covent Garden',
  image: 'https://images.squarespace-cdn.com/content/v1/5de66dfc5511bf790e4476bd/1603385848192-8I804M2WCUATIYHS7FF9/ke17ZwdGBToddI8pDm48kGPVK--wGoWXJsqwlxbZlQN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5enfxu_O4VeONvneR-F6W8oeFhFqSrYyNrfPB9Y70_gvQ/Wilde+Studio+_+Kitchen.jpg?format=500w',
  street: 'Adams Street',
  bed: 'Studio',
  price: '£500'
},
  ]

  getApartments(): object[] {
    return this.apartments;
  }

  getApartmentById(id:string){
    return this.apartments.find(apartment => apartment['id'] === id);
  }  

  getFlafAndPhones():Observable<Object>{
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }
}
