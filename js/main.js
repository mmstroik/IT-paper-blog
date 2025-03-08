document.addEventListener('DOMContentLoaded', function() {
    // Load the blog post content
    fetch('_posts/main-post.md')
        .then(response => response.text())
        .then(text => {
            const converter = new showdown.Converter();
            const html = converter.makeHtml(text);
            document.getElementById('post-container').innerHTML = html;
            
            // Add syntax highlighting if code blocks exist
            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightBlock(block);
            });
        })
        .catch(error => {
            console.error('Error loading post:', error);
            document.getElementById('post-container').innerHTML = '<p>Error loading content. Please try again later.</p>';
        });
});