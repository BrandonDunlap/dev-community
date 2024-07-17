document.querySelector('.new-post-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document.querySelector('textarea[name="post-content"]').value.trim();
  
    console.log('Submitting new post:', { title, content });
  
    if (title && content) {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log('New post created successfully');
        document.location.replace('/dashboard');
      } else {
        console.error('Failed to create new post:', response.statusText);
        alert('Failed to create post');
      }
    } else {
      alert('Please fill out both the title and content fields.');
    }
  });
  