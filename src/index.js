import { Provider } from "react-redux";
import createStore from "../src/WebApp/CreateJobWizard/Store";

import LabTabs from "./WebApp/App";

export default function Apps() {
  const store = createStore();
  return (
    <Provider store={store}>
      <LabTabs />
    </Provider>
  );
}
