const customers = ['Tommy', 'Tess', 'James', 'Anna', 'Travis', 'Stefano', 'Gabe', 'Tuna', 'Queen'];

const customerList = document.querySelector('.customerList');
const ticket = document.querySelector('.ticket');
const noTicket = document.querySelector('.noTicket');

// Sanitize customer array for display
const sanCustomers = customers.map((customer) => {
  return ` ${customer}`;
});

customerList.textContent = `${sanCustomers}`;