 - use firebase https://firebase.google.com/products/realtime-database

 - need Region level 
   -  (like MMR - Mumbai Metropolitian Region, NCR - National Capital Region)
   - can shard at this level
   - can be a district (or prefecture for some countries)

 - for every pincode in a region we will have a record
  {
    pincode: 400001,
    status: 'Well stocked', // this is at an aggregate level for all essentials
    estimated2DayStatus: '',
    estimated7DayStatus: '',
    estimated30DayStatus: '',
    essentials : [
      milk: {
        status: 'Well stocked',
        estimated2DayStatus: 'Well stocked',
        estimated7DayStatus: 'Well stocked',
        estimated30DayStatus: 'Low Stock',
      }
      wheatFlour: {
        status: 'Well stocked',
        estimated2DayStatus: '',
        estimated7DayStatus: '',
        estimated30DayStatus: '',
      }
      ....
    ]
    medicines: [
      ....
    ]
  }

