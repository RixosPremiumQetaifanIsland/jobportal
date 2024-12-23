const data = [
  { id: "A14446697", name: "Md Raju Ahamed" },
  { id: "A05017591", name: "Asif Hosen" },
  { id: "A03647061", name: "Iqbal Hossain" },
  { id: "A13926396", name: "Md Abdullah Al Maruf" },
  { id: "A11320899", name: "Md Emon Hossain" },
  { id: "A11180542", name: "Md Hasan Sarder" },
  { id: "A03686645", name: "Md Juel" },
  { id: "A04758596", name: "Md Shahidul Islam" },
  { id: "A15543930", name: "Md Jakir Hossain Mithu" },
  { id: "A07413604", name: "Md Shahin" },
  { id: "A04139564", name: "Md Sagor Mia" },
  
];

function checkPassport(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input value
  const input = document.getElementById("passport_number").value;

  // Search for a matching ID in the data array
  const result = data.find((item) => item.id === input);

  // Display a popup if a match is found
  if (result) {
    alert(`Ready for Visa\nID: ${result.id}\nName: ${result.name}`);
  } else {
    alert("No match found. Please check the passport number.");
  }
}
