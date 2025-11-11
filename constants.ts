
import { Product, Order, OrderStatus, Employee, BusinessInfo } from './types.ts';

export const PRODUCTS: Product[] = [
  {
    id: 'prod_1',
    name: 'Cococrunch Lumer',
    description: 'Sereal cokelat renyah dengan lelehan cokelat premium yang melimpah. Cocok untuk sarapan atau cemilan kapan saja.',
    imageUrl: 'https://picsum.photos/seed/cococrunch/400/400',
    variants: [
      { id: 'var_1_1', name: 'Original Cokelat', price: 25000, stock: 50 },
      { id: 'var_1_2', name: 'Cokelat Keju', price: 28000, stock: 35 },
      { id: 'var_1_3', name: 'Greentea', price: 28000, stock: 20 },
    ],
  },
  {
    id: 'prod_2',
    name: 'Basreng Pedas Daun Jeruk',
    description: 'Bakso goreng renyah dengan bumbu pedas nampol dan aroma khas daun jeruk yang bikin ketagihan.',
    imageUrl: 'https://picsum.photos/seed/basreng/400/400',
    variants: [
      { id: 'var_2_1', name: 'Pedas Level 1', price: 15000, stock: 100 },
      { id: 'var_2_2', name: 'Pedas Level 2', price: 15000, stock: 80 },
      { id: 'var_2_3', name: 'Pedas Level 3 (Naga)', price: 16000, stock: 40 },
      { id: 'var_2_4', name: 'Original Asin Gurih', price: 14000, stock: 60 },
    ],
  },
];

export const INITIAL_ORDERS: Order[] = [
  {
    id: 'ORD-001',
    customerName: 'Budi Santoso',
    customerEmail: 'budi.s@example.com',
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    items: [
      { productId: 'prod_1', variantId: 'var_1_1', quantity: 2 },
      { productId: 'prod_2', variantId: 'var_2_2', quantity: 1 },
    ],
    total: 65000,
    status: OrderStatus.Completed,
    shippingNumber: 'JN0012345678',
  },
  {
    id: 'ORD-002',
    customerName: 'Citra Lestari',
    customerEmail: 'citra.l@example.com',
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    items: [{ productId: 'prod_2', variantId: 'var_2_3', quantity: 3 }],
    total: 48000,
    status: OrderStatus.Shipped,
    shippingNumber: 'SPX987654321',
  },
  {
    id: 'ORD-003',
    customerName: 'Dewi Anggraini',
    customerEmail: 'dewi.a@example.com',
    date: new Date().toISOString(),
    items: [{ productId: 'prod_1', variantId: 'var_1_2', quantity: 1 }],
    total: 28000,
    status: OrderStatus.Processing,
  },
  {
    id: 'ORD-004',
    customerName: 'Eko Prasetyo',
    customerEmail: 'eko.p@example.com',
    date: new Date().toISOString(),
    items: [{ productId: 'prod_2', variantId: 'var_2_1', quantity: 2 }],
    total: 30000,
    status: OrderStatus.Pending,
  },
];

export const INITIAL_EMPLOYEES: Employee[] = [
    {
        id: 'emp_1',
        name: 'Andi Wijaya',
        position: 'Manajer',
        email: 'andi.w@example.com',
        phone: '081234567890',
        joinDate: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
        id: 'emp_2',
        name: 'Siti Aminah',
        position: 'Kasir',
        email: 'siti.a@example.com',
        phone: '081234567891',
        joinDate: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
        id: 'emp_3',
        name: 'Rian Hidayat',
        position: 'Staf Gudang',
        email: 'rian.h@example.com',
        phone: '081234567892',
        joinDate: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString(),
    }
];

export const BUSINESS_INFO: BusinessInfo = {
    ownerName: 'Admin Usaha',
    businessName: 'Toko Snack Renyah',
    address: 'Jl. Jend. Sudirman No. 123, Jakarta Pusat, DKI Jakarta',
    phone: '021-555-1234',
    email: 'info@tokosnackrenyah.com',
};