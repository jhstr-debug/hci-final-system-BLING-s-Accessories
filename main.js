// Toggle hamburger menu
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Mobile dropdown handling
        if (window.innerWidth <= 768) {
            const dropdowns = document.querySelectorAll('.dropdown');
            
            dropdowns.forEach(dropdown => {
                const dropdownLink = dropdown.querySelector('a');
                
                dropdownLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                    
                    // Close other dropdowns
                    dropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown) {
                            otherDropdown.classList.remove('active');
                        }
                    });
                });
            });
        }
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (
                !e.target.closest('.nav-links') && 
                !e.target.closest('.hamburger') && 
                navLinks.classList.contains('active')
            ) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                
                // Close all dropdowns
                document.querySelectorAll('.dropdown').forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });
        
        // Close menu on resize to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                
                // Close all dropdowns
                document.querySelectorAll('.dropdown').forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });
// main.js

// Store cart items and update count
let cartCount = 0;
let totalPrice = 0;

const cartCountElement = document.getElementById('count');
const cartTotalElement = document.getElementById('total');

// Function to handle add to cart
function addToCart(productName, price) {
  cartCount++;
  totalPrice += price;

  // Update cart UI
  cartCountElement.innerText = cartCount;
  cartTotalElement.innerText = `$ ${totalPrice.toFixed(2)}`;
  
  // You can also add more details to the cart (like product names, images, etc.)
}

// Add event listeners to buttons
const addToCartButtons = document.querySelectorAll('button');
addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const productElement = e.target.closest('.panel-necklace, .panel-necklace2, panel-necklace3 .panel-necklace4,.panel-necklaceS, .panel-necklaceA, .panel-necklaceD, .panel-necklaceW'); // Adjust as necessary
    const productName = productElement.querySelector('p').textContent.split('\n')[0];
    const price = parseFloat(productElement.querySelector('p').textContent.split('$')[1].trim().replace('k', '000')); // Adjust if needed

    addToCart(productName, price);
  });
});
  // Form submission handling
        document.getElementById('consultForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to your server
            // For this example, we'll just show the success message
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('consultForm').reset();
            
            // Scroll to the success message
            document.getElementById('successMessage').scrollIntoView({
                behavior: 'smooth'
            });
        });