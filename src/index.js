import './styles.scss';

document.addEventListener('DOMContentLoaded', function() {

    // Function to toggle favorite status
    function toggleFavorite(event) {
      const listItem = event.target.closest('li');
      const button = event.target;
      
      // Toggle favorite class for the list item
      listItem.classList.toggle('favorite');
      
      // Update button color
      if (listItem.classList.contains('favorite')) {
        button.style.backgroundColor = 'green';
        button.innerHTML = 'Unfavorite';
        // Show notification
        alert('Server has been marked as favorite.');
      } else {
        button.style.backgroundColor = 'gray';
        button.innerHTML = 'Favorite';
        // Show notification
        alert('Server has been removed from favorites.');
      }
    }
  
    // Adding event listeners to Favorite buttons
    const buttons = document.querySelectorAll('.favorite-button');
    
    buttons.forEach(function(button) {
      button.addEventListener('click', toggleFavorite);
    });
  });
  