import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApartmentsService {

   messageSource = new BehaviorSubject<string>('default message');
   currentMessage = this.messageSource.asObservable();

  constructor() { }

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
      price: '£1,355'
  },
  {
    id: 2,
    "nameApartment": 'Covent Garden',
    image: 'https://images.squarespace-cdn.com/content/v1/5de66dfc5511bf790e4476bd/1575475426115-SDW4UR6BZNHFMWU6IEY8/ke17ZwdGBToddI8pDm48kCpX2mwG9slVUzQCwhOMrQF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVDXM9yQ8sG6x3COIEUaadqpk9XPubC0H4MH9Az_c7nPqIjSxZ2rgD2_Fw9U6DWfsg/image_010.jpg?format=500w',
    street: 'Floral Street',
    bed: 2,
    price: '£1,185'
},
{
  id: 3,
  "nameApartment": 'Covent Garden',
  image: 'https://images.squarespace-cdn.com/content/v1/5de66dfc5511bf790e4476bd/1575475507030-1P9Q7WMZYT5OX9LZV2UD/ke17ZwdGBToddI8pDm48kCpX2mwG9slVUzQCwhOMrQF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVDXM9yQ8sG6x3COIEUaadqpk9XPubC0H4MH9Az_c7nPqIjSxZ2rgD2_Fw9U6DWfsg/image_002.jpg?format=500w',
  street: 'Drury Lane',
  bed: 1,
  price: '£1,015'
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




}
