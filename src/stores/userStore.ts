import { RegSchemaType } from "@/validation/registration.schema";
import { createStore } from "zustand";

export type UserState = Pick<
  RegSchemaType,
  "firstName" | "lastName" 
> & {
  id: string;
  gender: 'female' | 'male' | undefined;
  photo?: Array<File>;
  description?: string;
};

export type UserActions = {
  setUser: (data: UserState) => void;
  clearUser: () => void;
};

export type UserStore = UserState & UserActions;

export const defaultInitState: UserState = {
  firstName: "",
  lastName: "",
  gender: undefined,
  id: "",
};

export const initUserStore = (): UserState => {
  return {
    ...defaultInitState
  }
 }
export const createUserStore = (initState: UserState = defaultInitState) => {
  return createStore<UserStore>()((set) => ({
    ...initState,
    setUser: (data) =>
      set(() => ({
        firstName: data.firstName,
        lastName: data.lastName,
        gender: data.gender,
        id: data.id,
        photo: data?.photo,
        description: data.description,
      })),
    clearUser: () =>
      set(() => ({
        ...initState,
      })),
  }));
};
