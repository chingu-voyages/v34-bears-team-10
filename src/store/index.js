import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";

import appSlice from "./appSlice";
import { zemnogaApi } from "@/services/zemnoga/index";

export const store = configureStore({
  reducer: {
    app: appSlice,
    [zemnogaApi.reducerPath]: zemnogaApi.reducer,
  },
  middleware: (gDM) => gDM().concat(zemnogaApi.middleware),
});

setupListeners(store);
