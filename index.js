const customers = ['Tommy', 'Tess', 'James', 'Anna', 'Travis', 'Stefano', 'Gabe', 'Tuna', 'Queen'];

const customerList = document.querySelector('.customerList');
const ticket = document.querySelector('.ticket');
const noTicket = document.querySelector('.noTicket');
const checkBtn = document.querySelector('#checkBtn');

// Sanitize customer array for display
const sanCustomers = customers.map((customer) => {
  return ` ${customer}`;
});

customerList.textContent = `${sanCustomers}`;

// Ticket check button checks to see who has tickets
checkBtn.addEventListener('click', handleCheckTickets);

function handleCheckTickets() {
  for (i = 0; i < customers.length; i++) {
    if (customers[i] === 'Tess' || customers[i] === 'Stefano') {
      noTicket.textcontent += `${customers[i]}, `;
    } else {
      ticket.textContent += `${customers[i]}, `;
    }
  }
}