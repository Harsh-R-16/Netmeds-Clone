let options = [
  "Netmeds Swasthya",
  "Fever Profile",
  "Netmeds Cough-Fever Cold Package",
  "Anaemia Profile",
  "Thyroid Tests",
  "Basic Allergy Heart",
  "Netmeds Healthy Heart",
  "Advanced Heart Care",
  "Netmeds Diabetes Checkup",
  "Vitamin Tests",
  "Netmeds Advanced Care",
  "Covid Antibody Gt Profile",
  "Covid Antibody IGG",
  "Covid Antibody Total",
  "Covid Antibody Panel",
  "Aarogyam A",
  "Aarogyam B",
  "Aarogyam C",
  "Aarogyam 1.3",
  "Netmeds A",
  "Netmeds B",
  "Netmeds C",
  "Netmeds Basic Care",
  "Netmeds Health Pack",
  "Netmeds Healthy",
  "Netmeds Body Care",
  "Aarogyam XL",
  "Aarogyam 1.7",
  "Aarogyam 1.8",
  "Netmeds Shield Pack",
  "Netmeds Female Pack",
  "Netmeds Pre-Screening",
  "Netmeds Male Pack",
  "Comprehensive Antenatal Care",
  "Other",
];
let select = document.querySelector("select");
for (let i = 0; i < options.length; i++) {
  select.innerHTML += `
    <option value="${options[i]}">${options[i]}</option>
    `;
}
