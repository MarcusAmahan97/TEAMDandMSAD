# TEAM D&M - Systems Analysis and Design
**Kuya Weng's Digital Kitchen Order Monitoring and Coordination System**  
by Dwayne Matthew Francisco & Josh Marcus Amahan

## Digital Kitchen Order Monitoring and Coordination System  
**Kuya Weng's Restaurant**

## 1. Introduction

The Digital Kitchen Order Monitoring and Coordination System is designed to improve communication and coordination between cashiers and kitchen personnel through real-time order monitoring and status updates.

The system consists of three major interfaces:

- **Home Page** (Customer Order Status Display)
- **Admin/Cashier Dashboard**
- **Kitchen Dashboard**

All pages synchronize in real time, allowing orders and status updates to be reflected instantly across the system.

## 2. Accessing the System

### 2.1 Home Page
The Home Page serves as the public display screen where customers can monitor the status of their orders.

**Functions:**
- Displays active orders currently being prepared
- Displays ticket numbers that are ready for pickup
- Updates automatically in real time

### 2.2 Admin/Cashier Dashboard
The Admin/Cashier Dashboard is used for creating and dispatching customer orders.

**Access Requirements:**
To access the dashboard:
- Enter the designated URL route key
- Enter the required password
- Upon successful authentication, the Admin/Cashier Dashboard will be displayed

### 2.3 Kitchen Dashboard
The Kitchen Dashboard is used by kitchen personnel to monitor and manage incoming orders.

**Access Requirements:**
To access the dashboard:
- Enter the designated kitchen URL route key
- Enter the required password
- Upon successful authentication, the Kitchen Dashboard will be displayed

## 3. Creating and Dispatching Orders

### Step 1: Add Menu Items
The cashier may add menu items through the menu management section.

**Required Information:**
- Food Name
- Price
- Image URL (Optional)

After entering the information, click **Add Item**.  
The item will appear in the menu list.

### Step 2: Create a Customer Order
To create an order:
- Select the desired menu items
- Click **Add to Order**
- Verify the order summary in the Calculation Panel
- Confirm the total bill

The selected items will be added to the current transaction.

### Step 3: Dispatch the Order
After completing the order:
- Click **Proceed with Order**
- The Assign Ticket Number window will appear
- Enter the customer's ticket or standee number
- Review the order preview
- Click **Dispatch Ticket**

The order is immediately transmitted to the Kitchen Dashboard.

## 4. Monitoring Orders on the Home Page
After an order is dispatched:
- The ticket number automatically appears under the **Orders** section
- The ticket indicates that the order is currently being prepared
- Customers may monitor their ticket number while waiting

All updates occur in real time without requiring page refreshes.

## 5. Kitchen Operations

### Viewing Incoming Orders
When an order is dispatched:
- The order automatically appears on the Kitchen Dashboard
- Kitchen personnel can immediately view:
  - Ticket Number
  - Ordered Items
  - Current Status

The system updates in real time.

### Viewing Order Details
To view more information about an order:
- Click the order card
- The detailed order window will appear

The detail view displays:
- Ticket Number
- Order Contents
- Current Status
- System Tracking Information

### Marking Orders as Ready
Once food preparation has been completed:
- Open the order details window
- Click **Mark Ready & Alert**

The system automatically:
- Updates the order status
- Notifies the cashier interface
- Moves the order to the pickup queue
- Updates the Home Page display

## 6. Customer Pickup Monitoring
When an order is marked as ready:
- The ticket number is removed from the **Orders** section
- The ticket number appears under **Now Serving**
- Customers can proceed to claim their order

All status updates are synchronized instantly across the system.

## 7. Real-Time Synchronization
The system uses real-time synchronization to ensure that all interfaces remain updated simultaneously.

**Examples:**
- Order Dispatched → Cashier Dashboard → Kitchen Dashboard → Home Page
- Order Marked Ready → Kitchen Dashboard → Cashier Dashboard → Home Page

This eliminates delays associated with printed order slips and manual communication.

## 8. Benefits of the System
The Digital Kitchen Order Monitoring and Coordination System provides the following benefits:

- Real-time order monitoring
- Faster communication between cashier and kitchen staff
- Reduced risk of missed orders
- Improved order visibility
- Faster customer service
- Better coordination during peak operating hours
- Reduced reliance on printed order slips and verbal communication

## 9. Troubleshooting

| Issue                              | Possible Solution                          |
|------------------------------------|--------------------------------------------|
| Unable to access Admin Dashboard   | Verify the route key and password          |
| Unable to access Kitchen Dashboard | Verify the route key and password          |
| Order not appearing on Kitchen Dashboard | Confirm that the order was successfully dispatched |
| Ticket not showing on Home Page    | Refresh the page and verify synchronization |
| Status not updating                | Verify internet connectivity and real-time synchronization service |

## 10. Conclusion
The Digital Kitchen Order Monitoring and Coordination System provides an efficient platform for managing restaurant orders through real-time monitoring and coordination. By connecting the cashier, kitchen staff, and customer display interfaces, the system improves operational efficiency, reduces communication delays, and enhances the overall customer experience.
