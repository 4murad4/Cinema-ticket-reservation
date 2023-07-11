let buttons = document.querySelectorAll('button');
let ticketNumber = 0;
let totalMoney;

buttons.forEach( (i) => {
    if (i.id != 'white' && i.id != 'yellow' && i.id != 'grey') {
        let movieType = document.getElementById('movie');

        i.addEventListener('click', function click() {
            i.style.backgroundColor = 'gold'; 
            ticketNumber++;    
            
            i.removeEventListener('click', click);

            totalMoney = ticketNumber * Number(movieType.value);

            document.getElementById('p').innerHTML = `For <span style='color: gold'>${ticketNumber}</span> ticket, total payment: <span style='color: gold'>${totalMoney}</span> $`;
        })
        
        movieType.addEventListener('click', (e) => {
            totalMoney = ticketNumber * Number(e.target.value);

            document.getElementById('p').innerHTML = `For <span style='color: gold'>${ticketNumber}</span> ticket, total payment: <span style='color: gold'>${totalMoney}</span> $`;
        })
    }
});










