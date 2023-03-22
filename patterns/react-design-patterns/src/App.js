import { SplitScreen } from "./DesignPatterns/Layout/SplitScreens/SplitScreens";
import { RegularList } from "./DesignPatterns/Layout/ListAndItems/RegularList"
import { NumberedList } from "./DesignPatterns/Layout/ListAndItems/NumberedList"
import { SmallPersonListItem } from "./DesignPatterns/Layout/ListAndItems/people/SmallPersonListItem"
import { LargePersonListItem } from "./DesignPatterns/Layout/ListAndItems/people/LargePersonListItem"
import { SmallProductListItem } from "./DesignPatterns/Layout/ListAndItems/products/SmallProductListItem"
import { Modal } from "./DesignPatterns/Layout/Modal/Modal";

/*
const LeftHandComponent = () => {
  return <h1>Left</h1>;
}

const RightHandComponent = () => {
  return <h1>Right</h1>;
}

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent />
      <RightHandComponent />
    </SplitScreen>
  );
}
*/

/*
function App() {
  return (
    <>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
      <NumberedList 
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      />
    </>
  );
}
*/

function App() {
  return (
    <Modal>
      <NumberedList 
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      />
    </Modal>
  )
}

export default App;





const people = [
  {
    name: "John Doe",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "bicycling", "video games"]
  },
  {
    name: "Brenda Smith",
    age: 33,
    hairColor: "black",
    hobbies: ["golf", "mathematics"]
  },
  {
    name: "Jane Garcia",
    age: 27,
    hairColor: "blonde",
    hobbies: ["biology", "medicine", "gymnastics"]
  }
]

const products = [
  {
    name: "Flat-Screen TV",
    price: "$300",
    description: "Huge LCD screen, a great deal",
    rating: 4.5
  },
  {
    name: "Basketball",
    price: "$10",
    description: "Just like the pros use",
    rating: 3.8
  },
  {
    name: "Running Shoes",
    price: "$120",
    description: "State-of-the-art technology for optimum running",
    rating: 4.2
  }
]

