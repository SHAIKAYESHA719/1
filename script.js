function initMap() {
  const farm = { lat: 28.7041, lng: 77.1025 }; // Example: Delhi
  const customer = { lat: 28.5355, lng: 77.3910 }; // Example: Noida

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: farm,
  });

  // Add markers for farm and customer locations
  new google.maps.Marker({ position: farm, map, label: "Farm" });
  new google.maps.Marker({ position: customer, map, label: "You" });

  // Add route between farm and customer
  const route = new google.maps.Polyline({
    path: [farm, customer],
    geodesic: true,
    strokeColor: "#4285F4",
    strokeOpacity: 1.0,
    strokeWeight: 4,
  });
  route.setMap(map);
}
