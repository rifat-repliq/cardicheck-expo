import { action, observable, makeObservable } from "mobx";

class UIStore {
  isLoading = false;

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      setIsLoading: action,
      showLoader: action,
      hideLoader: action,
    });
  }

  setIsLoading = (val) => {
    this.isLoading = val;
  };

  showLoader = () => {
    this.isLoading = true;
  };

  hideLoader = () => {
    this.isLoading = false;
  };
}

export default new UIStore();
