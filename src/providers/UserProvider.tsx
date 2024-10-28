import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
  useMemo,
} from "react";
import { user } from "mockData";

interface IUserBalanceContext {
  balance: number;
}

interface IUserBalanceActionsContext {
  changeBalance: (T: number) => void;
}

const UserBalanceContext = createContext<IUserBalanceContext | null>(null);
const UserBalanceActionsContext =
  createContext<IUserBalanceActionsContext | null>(null);

const UserBalanceProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [balance, setBalance] = useState(user.balance);

  const actions: IUserBalanceActionsContext = useMemo(
    () => ({
      changeBalance: (amount) => setBalance((prev) => prev - amount),
    }),
    [],
  );

  const values = useMemo(() => ({ balance }), [balance]);

  return (
    <UserBalanceContext.Provider value={values}>
      <UserBalanceActionsContext.Provider value={actions}>
        {children}
      </UserBalanceActionsContext.Provider>
    </UserBalanceContext.Provider>
  );
};

export default UserBalanceProvider;

export const useUserBalance = (): IUserBalanceContext => {
  const context = useContext(UserBalanceContext);
  if (!context)
    throw new Error("useUserBalance must be used within a UserBalanceProvider");
  return context;
};

export const useUserBalanceActions = (): IUserBalanceActionsContext => {
  const context = useContext(UserBalanceActionsContext);
  if (!context)
    throw new Error(
      "useUserBalanceActions must be used within a UserBalanceActionsProvider",
    );
  return context;
};
