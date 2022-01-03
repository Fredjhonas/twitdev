import { createSelector } from "reselect";
import { IRootState } from "../store/types";

const selectAuth = (state: IRootState) => state.auth;

export const makeSelectAuth = createSelector(selectAuth, (auth) => auth.user);
