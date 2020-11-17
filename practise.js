let btnGnrt = document.querySelector("button");
btnGnrt.addEventListener("click", () => {
  let info = faker.helpers.createCard();
  console.log(info);

  let {
    name: { firstName, lastName },
    email,
    phone,
    address: { country, timeZone },
  } = info;

  let firstN = faker.name.firstName();
  let secondN = faker.name.lastName();
  let cmpny = "@contentstack.com";

  document.querySelector("#Name").value = `${firstN}  ${secondN}`;
  document.querySelector("#email").value =
    firstN.toLowerCase() + "_" + secondN.toLowerCase() + cmpny;
  document.querySelector("#phoneNumber").value = phone;
  document.querySelector("#countrycd").value = faker.address.countryCode();
  document.querySelector("#address").value = country;
});
