function split(){
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons');
    let billSplit = (amount.value / persons.value).toFixed(2)
    document.getElementById('bill').value = billSplit;
    console.log(bill);
}