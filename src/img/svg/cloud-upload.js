const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('viewBox', '0 0 24 24');

svg.innerHTML = `
  <path fill-rule="evenodd" d="M17,19 L17,17 L18,17 C19.6568542,17 21,15.6568542 21,14 C21,12.3431458 19.6568542,11 18,11 C17.9686786,11.0001061 17.9686786,11.0001061 17.9374883,11.0006341 L17.0737589,11.0181765 L16.9309417,10.1661557 C16.5303438,7.77626335 14.4511274,6 12,6 C10.1923998,6 8.55429829,6.96642863 7.6664163,8.50398349 L7.39066076,8.98151234 L6.83965518,9.0031404 C4.69934052,9.08715198 3,10.8504451 3,13 C3,15.209139 4.790861,17 7,17 L7,19 C3.6862915,19 1,16.3137085 1,13 C1,9.95876977 3.26703071,7.43346119 6.21989093,7.05027488 C7.50901474,5.16507238 9.65343535,4 12,4 C15.1586186,4 17.8750012,6.1056212 18.7254431,9.0522437 C21.1430685,9.40362782 23,11.4849591 23,14 C23,16.7614237 20.7614237,19 18,19 L17,19 Z M13,14.4142136 L13,21 L11,21 L11,14.4142136 L8.70710678,16.7071068 L7.29289322,15.2928932 L12,10.5857864 L16.7071068,15.2928932 L15.2928932,16.7071068 L13,14.4142136 Z"/>
`;

export { svg };
