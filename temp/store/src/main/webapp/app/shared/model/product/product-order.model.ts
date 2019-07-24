import { Moment } from 'moment';
import { IOrderItem } from 'app/shared/model/product/order-item.model';

export const enum OrderStatus {
  COMPLETED = 'COMPLETED',
  PENDING = 'PENDING',
  CANCELLED = 'CANCELLED'
}

export interface IProductOrder {
  id?: number;
  placedDate?: Moment;
  status?: OrderStatus;
  code?: string;
  invoiceId?: number;
  customer?: string;
  orderItems?: IOrderItem[];
}

export const defaultValue: Readonly<IProductOrder> = {};
