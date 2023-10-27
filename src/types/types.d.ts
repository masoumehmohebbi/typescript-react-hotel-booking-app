import { Range } from 'react-date-range';

export type Options = {
  adult: number;
  children: number;
  room: number;
};

export type TypeItem = 'adult' | 'children' | 'room';

export type TypeOption = {
  id: number;
  type: TypeItem;
  limit: number;
}[];

export type DateItem = {
  key: Range | string;
  startDate: Date;
  endDate: Date;
};

export interface DateRangeSelection {
  selection: {
    key: Range | string;
    startDate: Date;
    endDate: Date;
  };
}

export type GuestOptionListProps = {
  options: {
    [key in TypeItem]: number;
  };
  handleOptions: (typeItem: TypeItem, operation: 'inc' | 'dec') => void;
  setIsOpenOptions: (boolean) => void;
};

export type OptionItemProps = {
  options: {
    [key in TypeItem]: number;
  };
  typeItem: TypeItem;
  minLimit: number;
  handleOptions: (type: TypeItem, operation: 'inc' | 'dec') => void;
};

// AuthProvider
export interface User {
  name: string;
  email: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export type AuthAction = { type: 'logIn'; payload: User } | { type: 'logOut' };

export type AuthContextProps = {
  user: User | null;
  isAuthenticated: boolean;
  logIn: (email: string, password: string) => void;
  logOut: () => void;
};
