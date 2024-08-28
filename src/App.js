
import { useState, useRef, useEffect } from 'react';
import './App.css';
function App() {

  const animals = [
    {name:'Cat', imgS: './Images/cat.png'},
    {name:'Dog', imgS: './Images/dog.png'},
    {name:'Parrot', imgS: './Images/parrot.png' },
    {name:'Lion', imgS: './Images/lion.png' },
    {name:'Zebra', imgS: './Images/zebra.png'},
    {name:'Bear', imgS: './Images/bear.png'},
    {name:'Polar Bear', imgS: './Images/polar-bear.png'},
    {name:'Panda', imgS: './Images/panda.png'},
    {name:'Cheetah', imgS: './Images/cheetah.png'},
    {name:'Elephant', imgS: './Images/elephant.png'},
    {name:'Crocodile', imgS: './Images/crocodile.png'},
    {name:'Fox', imgS: './Images/fox.png'},
    {name:'Wolf', imgS: './Images/wolf.png'},
    {name:'Koala', imgS: './Images/koala.png'},
    {name:'Donkey', imgS: './Images/donkey.png'},
    {name:'Horse', imgS: './Images/horse.png'},
    {name:'Giraffe', imgS: './Images/giraffe.png'},
    {name:'Ostrich', imgS: './Images/ostrich.png'},
    {name:'Eagle', imgS: './Images/eagle.png'},
    {name:'Owl', imgS: './Images/owl.png'},
    {name:'Frog', imgS: './Images/frog.png'},
    {name:'Iguana', imgS: './Images/iguana.png'},
    {name:'Snake', imgS: './Images/snake.png'},
    {name:'Dolphin', imgS: './Images/dolphin.png'},
    {name:'Shark', imgS: './Images/shark.png'},
    {name:'Octopus', imgS: './Images/octopus.png'},
    {name:'Jellyfish', imgS: './Images/jellyfish.png'},
    {name:'Turtle', imgS: './Images/turtle.png'},
    {name:'Seal', imgS: './Images/seal.png'},
    {name:'Penguin', imgS: './Images/penguin.png'},
    {name:'Crab', imgS: './Images/crab.png'},
  ]


  let [animalName, setAnimalName] = useState();
  let [animalImage, setAnimalImage] = useState();
  let [animalFact, setAnimalFact] = useState();
  const animalsRef = useRef([]);
  const anClick = (el) => {
    if(el.target.className == 'an') {
      setAnimalName(el.target.children[0].innerHTML)
      setAnimalImage(el.target.children[1].src)
    } else {
      let anEle = el.target.parentElement;
      setAnimalName(anEle.children[0].innerHTML);
      setAnimalImage(anEle.children[1].src);
    }
  }

  useEffect(() => {
    switch(animalName) {
      case 'Cat':
        setAnimalFact('Cats have a special "purr" frequency that can heal bones and tissues. It’s like they have built-in massage therapy!');
        break;
      case 'Dog':
        setAnimalFact('Dogs have about 1,700 taste buds, compared to humans who have about 9,000. This explains why dogs can eat almost anything without a second thought!');
        break;
      case 'Parrot':
        setAnimalFact('Parrots can learn to mimic human speech and sometimes even swear, but they don’t know what they’re saying—they’re just really good at repeating! (so dont teach them bad words please)');
        break;
      case 'Lion':
        setAnimalFact('Male lions have a distinctive roar that can be heard up to 5 miles away. Its their way of making sure everyone in the neighborhood knows they’re "king."');
        break;
      case 'Zebra':
        setAnimalFact('No two zebras have the same stripe pattern, just like human fingerprints. So, every zebra is uniquely striped, like nature`s barcode!');
        break;
      case 'Bear':
        setAnimalFact('Bears can run up to 30 miles per hour. ');
        break;
      case 'Poral Bear':
        setAnimalFact('Polar bears have black skin underneath their white fur. It helps them absorb sunlight and stay warm, making them like the ultimate solar-powered bear');
        break;
      case 'Panda':
        setAnimalFact('Pandas eat bamboo all day, but they have the digestive system of a carnivore, meaning they process bamboo less efficiently. Its like eating a salad with a steak digestion system. (Strang right?)');
        break;
      case 'Cheetah':
        setAnimalFact('Cheetahs are the fastest land animals, reaching speeds of up to 70 miles per hour. They can accelerate faster than a sports car from 0 to 60 mph! (if you see one , say bye to the life...)');
        break;
      case 'Elephant':
        setAnimalFact('Elephants can “hear” with their feet. They pick up vibrations from the ground through their feet, allowing them to communicate with other elephants miles away!');
        break;
      case 'Crocodile':
        setAnimalFact('Crocodiles cannot stick their tongue out because its attached to the roof of their mouth. So, no matter how annoyed they get, they cant give you the silent treatment!');
        break;
      case 'Fox':
        setAnimalFact('Foxes use their tails to communicate. They can signal with different tail movements, kind of like having their own fluffy flag system.');
        break;
      case 'Wolf':
        setAnimalFact('Wolves can howl in harmony with each other. Their howls can help them coordinate with their pack, almost like theyre singing a group song.');
        break;
      case 'Koala':
        setAnimalFact('Koalas have fingerprints almost identical to human ones. In fact, they are so similar that they have been confused at crime scenes!');
        break;
      case 'Donkey':
        setAnimalFact('Donkeys have a unique ability to recognize and remember other donkeys and people for many years, which makes them quite the social networkers!');
        break;
      case 'Horse':
        setAnimalFact('Horses can sleep both standing up and lying down. They have a special locking mechanism in their legs to keep them upright while they snooze.');
        break;
      case 'Giraffe':
        setAnimalFact('Giraffes have no vocal cords, so they don’t make sounds like most animals. Instead, they communicate using body language and occasionally by making low-frequency sounds.');
        break;
      case 'Ostrich':
        setAnimalFact('Ostriches have the largest eyes of any land animal, which helps them spot predators from far away. Their eyes are even bigger than their brains!');
        break;
      case 'Eagle':
        setAnimalFact('Eagles have incredible eyesight, with a vision that’s up to 8 times better than humans. They can spot a rabbit from 2 miles away!');
        break;
      case 'Owl':
        setAnimalFact('Owls can turn their heads almost completely around—up to 270 degrees—thanks to extra neck vertebrae. They can see behind them without moving their bodies!');
        break;
      case 'Frog':
        setAnimalFact('Frogs use their eyeballs to help them swallow. They push their eyes down onto their mouths to help push food down their throats!');
        break;
      case 'Iguana':
        setAnimalFact('Iguanas have a "third eye" on the top of their heads called a parietal eye. It’s not used for vision but helps detect light and movement from above. ');
        break;
      case 'Snake':
        setAnimalFact('Snakes dont have eyelids. Instead, they have a transparent scale called a spectacle that covers and protects their eyes.');
        break;
      case 'Dolphin':
        setAnimalFact('Dolphins sleep with one half of their brain at a time. This allows them to keep swimming and be alert for predators while still getting their rest!');
        break;
      case 'Shark':
        setAnimalFact('Sharks have been around for over 400 million years, which means they’ve survived multiple mass extinctions. They’re like the ultimate survivors!');
        break;
      case 'Octopus':
        setAnimalFact('Octopuses have three hearts and blue blood. Their unique blood color is due to a copper-based molecule called hemocyanin, which helps them breathe underwater.');
        break;
      case 'Jellyfish':
        setAnimalFact('Some species of jellyfish are immortal. They can revert to their juvenile form after reaching maturity, potentially living forever if they avoid predators!');
        break;
      case 'Turtle':
        setAnimalFact('Turtles can breathe through their butts. Some species can extract oxygen from water through their cloaca, allowing them to stay underwater longer.');
        break;
      case 'Seal':
        setAnimalFact('Seals have a special adaptation in their eyes that allows them to see clearly both underwater and on land, almost like having built-in swimming goggles.');
        break;
      case 'Penguin':
        setAnimalFact('Penguins propose to their mates with a pebble. They find the smoothest, most perfect pebble they can and offer it as a gift to their partner!');
        break;
      case 'Crab':
        setAnimalFact('Some crabs use their claws to "wave" and communicate with other crabs. It’s like they have their own crabby hand signals!');
        break;
    }
  }, [animalName]);


  return (
    <div className="App">
      <div className='title'>
        <h1>Animals Fun Fact</h1>
        <p>Click on the animal to read fun fact about him</p>
      </div>

      <div className='content'>
        <div className='animals'>
          {animals.map((animal, index) => (
            <div key={index} className='an' onClick={anClick} ref={el => (animalsRef.current[index] = el)}>
              <h3>{animal.name}</h3>
              <img src={require(`${animal.imgS}`)} />
            </div>
          ))}
        </div>

        <div className='result'>
          <img src={animalImage} />
          
          <div className='fact'>
            {animalFact}
          </div>
        </div>
      </div>

    </div>
  );
}
export default App;