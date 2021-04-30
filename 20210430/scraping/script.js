var cartes = Array.from(temp0.getElementsByClassName("col-sm-4 col-lg-4 col-md-4"))

cartes.map(el => el.getElementsByClassName("title")[0].getAttribute('title'));
cartes.map(el => el.getElementsByClassName("price")[0].textContent);