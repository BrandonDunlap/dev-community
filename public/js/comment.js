document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
      commentForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const content = document.getElementById('comment-content').value;
        const blogId = document.getElementById('blog-id').value;
  
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({ content, blogId }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          document.location.replace(`/blog/${blogId}`);
        } else {
          alert('Failed to add comment');
        }
      });
    }
  });
  