import { Customer } from "../customer/Customer";

export type Event = {
  createdAt: Date;
  customer?: Customer | null;
  date: Date | null;
  descr: string | null;
  id: string;
  updatedAt: Date;
};
