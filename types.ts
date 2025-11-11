export interface Variant {
  id: string;
  name: string;
  price: number;
  stock: number;
}

export interface Product {
  id:string;
  name: string;
  description: string;
  imageUrl: string;
  variants: Variant[];
}

export interface CartItem {
  productId: string;
  variantId: string;
  quantity: number;
}

export enum OrderStatus {
  Pending = 'Pending',
  Processing = 'Diproses',
  Shipped = 'Dikirim',
  Completed = 'Selesai',
  Canceled = 'Dibatalkan',
}

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  date: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  shippingNumber?: string;
}

export type EmployeePosition = 'Kasir' | 'Staf Gudang' | 'Manajer';

export interface Employee {
  id: string;
  name: string;
  position: EmployeePosition;
  email: string;
  phone: string;
  joinDate: string;
}

export interface BusinessInfo {
  ownerName: string;
  businessName: string;
  address: string;
  phone: string;
  email: string;
}

// --- Types for Advanced State Management ---

export interface AppState {
  products: Product[];
  orders: Order[];
  employees: Employee[];
  businessInfo: BusinessInfo | null;
  cart: CartItem[];
  isLoading: boolean;
  error: string | null;
}

export type Action =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_INITIAL_DATA'; payload: { products: Product[]; orders: Order[], employees: Employee[], businessInfo: BusinessInfo } }
  | { type: 'ADD_TO_CART'; payload: { productId: string; variantId: string; quantity: number } }
  | { type: 'UPDATE_CART_QUANTITY'; payload: { productId: string; variantId: string; quantity: number } }
  | { type: 'REMOVE_FROM_CART'; payload: { productId: string; variantId: string } }
  | { type: 'CLEAR_CART' }
  | { type: 'ADD_ORDER_SUCCESS'; payload: { order: Order, updatedProducts: Product[] } }
  | { type: 'UPDATE_ORDER_STATUS_SUCCESS'; payload: Order }
  | { type: 'ADD_PRODUCT_SUCCESS'; payload: Product }
  | { type: 'UPDATE_PRODUCT_SUCCESS'; payload: Product }
  | { type: 'DELETE_PRODUCT_SUCCESS'; payload: string }
  | { type: 'ADD_EMPLOYEE_SUCCESS'; payload: Employee }
  | { type: 'UPDATE_EMPLOYEE_SUCCESS'; payload: Employee }
  | { type: 'DELETE_EMPLOYEE_SUCCESS'; payload: string }
  | { type: 'UPDATE_BUSINESS_INFO_SUCCESS'; payload: BusinessInfo }
  // Fix: Add async action types to provide full type coverage for dispatch.
  | { type: 'FETCH_INITIAL_DATA' }
  | { type: 'ADD_ORDER'; payload: { customerName: string; customerEmail: string; } }
  | { type: 'UPDATE_ORDER_STATUS'; payload: { orderId: string; status: OrderStatus; shippingNumber?: string | null; } }
  | { type: 'ADD_PRODUCT'; payload: Product }
  | { type: 'UPDATE_PRODUCT'; payload: Product }
  | { type: 'DELETE_PRODUCT'; payload: string }
  | { type: 'ADD_EMPLOYEE'; payload: Employee }
  | { type: 'UPDATE_EMPLOYEE'; payload: Employee }
  | { type: 'DELETE_EMPLOYEE'; payload: string }
  | { type: 'UPDATE_BUSINESS_INFO'; payload: BusinessInfo };


// --- Types for UI Components ---

export type ToastMessage = {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
};