export default class CatHelperService {
  name = null;
  catList = [];
  constructor() {
    this.name = "CatService"
    this.catList = [
      {
        name: 'Sheeba',
        breed: 'LaPerm',
        gender: 'Female',
        age: 7,
        color: 'black/white',
        weight: 34,
        image: '../assets/images/cats/LaPerm_body_6.jpg',
        notes: 'Pure-bred. Trained for competition'
      },
      {
        name: 'Bobby',
        breed: 'Manx',
        gender: 'Male',
        age: 8,
        color: 'black/white',
        weight: 25,
        image: '../assets/images/cats/ManxSH_body_6.jpg',
        notes: 'Pure-bred. Trained for competition',
      },
      {
        name: 'Roger',
        breed: 'Burmese',
        gender: 'Male',
        age: 9,
        color: 'Sable, champagne, blue, platinum',
        weight: 11,
        image: '../assets/images/cats/.jpg',
        notes: 'Pure-bred. Trained for competition',
      },
      {
        name: 'Fancy',
        breed: 'American Bobtail',
        gender: 'Female',
        age: 7,
        color: 'Yellow And Black',
        weight: 13,
        image: '../assets/images/cats/AmericanBobtail_body_6.jpg',
        notes: 'Pure-bred. Trained for competition',
      },
      {
        name: 'Frankie',
        breed: 'American Wirehair',
        gender: 'M',
        age: 4,
        color: 'Average, considered moderately talkative and an enthusiastic purrer',
        weight: 10,
        image: '../assets/images/cats/AmericanWirehair_body_6.jpg',
        notes: 'Pure-bred. Trained for competition',
      },
      {
        name: '',
        breed: 'Bengal',
        gender: 'Male',
        age: 5,
        color: 'Black and Orange',
        weight: 17,
        image: '../assets/images/cats/Bengal_body_6.jpg',
        notes: 'Pure-bred. Trained for competition',
      },
      {
        name: 'Betsy',
        breed: 'Burmese',
        gender: 'Female',
        age: 3,
        color: 'Sable, champagne, blue, platinum',
        weight: 4,
        image: '../assets/images/cats/Burmese_body_6.jpg',
        notes: 'Pure-bred. Trained for competition',
      },
      {
        name: "BillyBob",
        breed: "American Shorthair",
        gender: "Male",
        age: 12,
        color: "Grey/Black And White",
        weight: 9,
        image: "../assets/images/cats/AmericanShorthair_body_6.jpg",
        notes: "Pure-bred. Trained for competition",
      },
      {
        name: 'Sandy',
        breed: 'Russian Blue',
        gender: 'Female',
        age: 7,
        color: 'Blue with silver tips',
        weight: 8,
        image: '../assets/images/cats/RussianBlue_body_7.jpg',
        notes: 'Pure-bred. Trained for competition',
      },
      {
        name: 'Sammy',
        breed: 'Pixiebob',
        gender: 'Male',
        age: 2,
        color: 'Brown-spotted tabby',
        weight: 12,
        image: '../assets/images/cats/PixieBob_body.jpg',
        notes: 'Very active and playful',
      },
      {
        name: 'Hillary',
        breed: 'Ragamiffin',
        gender: 'female',
        age: 5,
        color: 'White, black, blue, red, cream, chocolate, lilac, cinnamon and fawn, plus various patterns and shadings',
        weight: 12,
        image: '../assets/images/cats/RagaMuffin_body_7.jpg',
        notes: 'Super friendly',
      }
    ];
  }
  getCatList() {
    return this.catList;
  }
  updateCatList(cat) {
    this.catList.push(cat);
  }
}