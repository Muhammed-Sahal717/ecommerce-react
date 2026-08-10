import imgBaconBurger from '../assets/images/burgers/Bacon Burger.png';
import imgCheeseburger from '../assets/images/burgers/Cheeseburger.png';
import imgChickenCrispBurger from '../assets/images/burgers/Chicken Crisp Burger.png';
import imgClassicDoubleBurger from '../assets/images/burgers/Classic Double burger.png';
import imgVeggieBurger from '../assets/images/burgers/Veggie Burger.png';

import imgFettuccineAlfredo from '../assets/images/pasta/Fettuccine Alfredo.png';
import imgLasagna from '../assets/images/pasta/Lasagna.png';
import imgPenneArrabbiata from '../assets/images/pasta/Penne Arrabbiata.png';
import imgPestoCremosoPasta from '../assets/images/pasta/Pesto Cremoso Pasta.png';
import imgSpaghettiCarbonara from '../assets/images/pasta/Spaghetti Carbonara.png';

import imgBBQChickenPizza from '../assets/images/pizza/BBQ Chicken Pizza.png';
import imgHawaiianPizza from '../assets/images/pizza/Hawaiian Pizza.png';
import imgMargheritaPizza from '../assets/images/pizza/Margherita Pizza.png';
import imgPepperoniFeastPizza from '../assets/images/pizza/Pepperoni Feast Pizza.png';
import imgVeggieSupremePizza from '../assets/images/pizza/Veggie Supreme Pizza.png';

import imgCaliforniaRoll from '../assets/images/sushi/California Roll.png';
import imgDragonRoll from '../assets/images/sushi/Dragon Roll.png';
import imgRainbowRoll from '../assets/images/sushi/Rainbow Roll.png';
import imgSalmonNigiri from '../assets/images/sushi/Salmon Nigiri.png';
import imgSpicyTunaRoll from '../assets/images/sushi/Spicy Tuna Roll.png';

import imgBeefTaco from '../assets/images/tacos/Beef Taco.png';
import imgFishTaco from '../assets/images/tacos/Fish Taco.png';
import imgPorkCarnitasTaco from '../assets/images/tacos/Pork Carnitas Taco.png';
import imgSpicyChickenTaco from '../assets/images/tacos/Spicy Chicken Taco.png';
import imgVeggieTaco from '../assets/images/tacos/Veggie Taco.png';

const products = [
  // Burgers
  {
    id: 1,
    name: 'Bacon Burger',
    category: 'Burgers',
    price: 349,
    image: imgBaconBurger,
    description: 'A juicy beef patty topped with crispy bacon and melted cheddar cheese.',
    rating: 4.6,
  },
  {
    id: 2,
    name: 'Cheeseburger',
    category: 'Burgers',
    price: 299,
    image: imgCheeseburger,
    description: 'Classic cheeseburger with fresh lettuce, tomato, and our secret sauce.',
    rating: 4.4,
  },
  {
    id: 3,
    name: 'Chicken Crisp Burger',
    category: 'Burgers',
    price: 279,
    image: imgChickenCrispBurger,
    description: 'Crispy fried chicken breast with mayo and lettuce on a toasted bun.',
    rating: 4.5,
  },
  {
    id: 4,
    name: 'Classic Double burger',
    category: 'Burgers',
    price: 499,
    image: imgClassicDoubleBurger,
    description: 'Double the meat, double the cheese, for the ultimate burger craving.',
    rating: 4.8,
  },
  {
    id: 5,
    name: 'Veggie Burger',
    category: 'Burgers',
    price: 259,
    image: imgVeggieBurger,
    description: 'A wholesome plant-based patty served with fresh greens and vegan mayo.',
    rating: 4.3,
  },

  // Pasta
  {
    id: 6,
    name: 'Fettuccine Alfredo',
    category: 'Pasta',
    price: 399,
    image: imgFettuccineAlfredo,
    description: 'Creamy and rich parmesan sauce tossed with tender fettuccine pasta.',
    rating: 4.7,
  },
  {
    id: 7,
    name: 'Lasagna',
    category: 'Pasta',
    price: 449,
    image: imgLasagna,
    description: 'Layers of pasta baked with rich meat sauce, ricotta, and mozzarella.',
    rating: 4.8,
  },
  {
    id: 8,
    name: 'Penne Arrabbiata',
    category: 'Pasta',
    price: 349,
    image: imgPenneArrabbiata,
    description: 'Spicy tomato and garlic sauce tossed with penne and fresh parsley.',
    rating: 4.4,
  },
  {
    id: 9,
    name: 'Pesto Cremoso Pasta',
    category: 'Pasta',
    price: 429,
    image: imgPestoCremosoPasta,
    description: 'Creamy basil pesto sauce served over al dente pasta with cherry tomatoes.',
    rating: 4.6,
  },
  {
    id: 10,
    name: 'Spaghetti Carbonara',
    category: 'Pasta',
    price: 379,
    image: imgSpaghettiCarbonara,
    description: 'Traditional Italian pasta with pancetta, egg yolk, and pecorino romano.',
    rating: 4.9,
  },

  // Pizza
  {
    id: 11,
    name: 'BBQ Chicken Pizza',
    category: 'Pizza',
    price: 549,
    image: imgBBQChickenPizza,
    description: 'Tangy BBQ sauce topped with grilled chicken, red onions, and cilantro.',
    rating: 4.6,
  },
  {
    id: 12,
    name: 'Hawaiian Pizza',
    category: 'Pizza',
    price: 499,
    image: imgHawaiianPizza,
    description: 'The controversial classic: ham and sweet pineapple chunks on a cheesy base.',
    rating: 4.1,
  },
  {
    id: 13,
    name: 'Margherita Pizza',
    category: 'Pizza',
    price: 449,
    image: imgMargheritaPizza,
    description: 'Simple and elegant: fresh mozzarella, basil, and a rich tomato sauce.',
    rating: 4.8,
  },
  {
    id: 14,
    name: 'Pepperoni Feast Pizza',
    category: 'Pizza',
    price: 599,
    image: imgPepperoniFeastPizza,
    description: 'Loaded edge-to-edge with crispy pepperoni slices and extra cheese.',
    rating: 4.9,
  },
  {
    id: 15,
    name: 'Veggie Supreme Pizza',
    category: 'Pizza',
    price: 529,
    image: imgVeggieSupremePizza,
    description: 'A garden delight loaded with bell peppers, olives, onions, and mushrooms.',
    rating: 4.5,
  },

  // Sushi
  {
    id: 16,
    name: 'California Roll',
    category: 'Sushi',
    price: 399,
    image: imgCaliforniaRoll,
    description: 'Crab stick, avocado, and cucumber rolled inside out with sesame seeds.',
    rating: 4.5,
  },
  {
    id: 17,
    name: 'Dragon Roll',
    category: 'Sushi',
    price: 649,
    image: imgDragonRoll,
    description: 'Eel and cucumber inside, topped with thinly sliced avocado and unagi sauce.',
    rating: 4.8,
  },
  {
    id: 18,
    name: 'Rainbow Roll',
    category: 'Sushi',
    price: 699,
    image: imgRainbowRoll,
    description: 'California roll topped with assorted fresh sashimi and avocado.',
    rating: 4.9,
  },
  {
    id: 19,
    name: 'Salmon Nigiri',
    category: 'Sushi',
    price: 499,
    image: imgSalmonNigiri,
    description: 'Premium slices of raw salmon served over hand-pressed vinegared rice.',
    rating: 4.7,
  },
  {
    id: 20,
    name: 'Spicy Tuna Roll',
    category: 'Sushi',
    price: 449,
    image: imgSpicyTunaRoll,
    description: 'Fresh minced tuna mixed with spicy mayo and rolled with cucumber.',
    rating: 4.6,
  },

  // Tacos
  {
    id: 21,
    name: 'Beef Taco',
    category: 'Tacos',
    price: 199,
    image: imgBeefTaco,
    description: 'Seasoned ground beef served with lettuce, cheese, and fresh salsa.',
    rating: 4.4,
  },
  {
    id: 22,
    name: 'Fish Taco',
    category: 'Tacos',
    price: 249,
    image: imgFishTaco,
    description: 'Crispy battered fish topped with crunchy slaw and a tangy lime crema.',
    rating: 4.7,
  },
  {
    id: 23,
    name: 'Pork Carnitas Taco',
    category: 'Tacos',
    price: 229,
    image: imgPorkCarnitasTaco,
    description: 'Slow-cooked, tender pulled pork topped with fresh cilantro and onions.',
    rating: 4.8,
  },
  {
    id: 24,
    name: 'Spicy Chicken Taco',
    category: 'Tacos',
    price: 189,
    image: imgSpicyChickenTaco,
    description: 'Grilled spicy chicken topped with pico de gallo and a squeeze of lime.',
    rating: 4.5,
  },
  {
    id: 25,
    name: 'Veggie Taco',
    category: 'Tacos',
    price: 179,
    image: imgVeggieTaco,
    description: 'Sautéed fajita veggies, black beans, and guacamole in a soft corn tortilla.',
    rating: 4.3,
  },
];

export default products;
