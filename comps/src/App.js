import { DiAndroid, DiAtom, DiJavascript1 } from "react-icons/di";
import Button from "./Button";

function App() {
  return (
  <div>
    <div>
      <Button success rounded>
        <DiJavascript1 />
        Click Me!
        </Button>
    </div>
    <div>
      <Button danger>
        <DiAndroid />
        Buy Now
      </Button>
    </div>
    <div>
      <Button warning>See Deals</Button>
    </div>
    <div>
      <Button secondary>Hide Adds</Button>
    </div>
    <div>
      <Button primary rounded outline>
        <DiAtom />
        Something
      </Button>
    </div>
  </div>
)}

export default App;
