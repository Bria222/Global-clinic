import { configureStore, findNonSerializableValue } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";


const logger = createLogger();

const store = configureStore({
  reducer: {
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(findNonSerializableValue).concat(logger),
});

export default store;