document.addEventListener('DOMContentLoaded', () => {
    const newPostButton = document.getElementById('new-post');
    if (newPostButton) {
      newPostButton.addEventListener('click', async () => {
        const title = prompt('Enter the title of your post:');
        const content = prompt('Enter the content of your post:');
  
        const response = await fetch('/api/blogs', {
          method: 'POST',
          body: JSON.stringify({ title, content }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to create post');
        }
      });
    }
  });
  