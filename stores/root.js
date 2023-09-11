import MeStore from "./me";
import UIStore from "./ui";

class RootStore {
  meStore = MeStore;
  uiStore = UIStore;
}

const rootStore = new RootStore();
export default rootStore;
