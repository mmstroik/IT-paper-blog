document.addEventListener("DOMContentLoaded", function () {
  // Load the blog post content
  fetch("_posts/main-post.md")
    .then((response) => response.text())
    .then((text) => {
      const converter = new showdown.Converter();
      const html = converter.makeHtml(text);
      document.getElementById("post-container").innerHTML = html;

      // Add syntax highlighting if code blocks exist
      document.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightBlock(block);
      });

      // Generate table of contents after content is loaded
      generateTableOfContents();

      // Initialize the intersection observer for headings
      initHeadingObserver();

      // Handle TOC toggle
      initTocToggle();
    })
    .catch((error) => {
      console.error("Error loading post:", error);
      document.getElementById("post-container").innerHTML =
        "<p>Error loading content. Please try again later.</p>";
    });
});

// Generate the table of contents
function generateTableOfContents() {
  const headings = document.querySelectorAll(
    "#post-container h1, #post-container h2, #post-container h3, #post-container h4"
  );
  const tocContent = document.getElementById("toc-content");

  if (headings.length === 0) return;

  const tocList = document.createElement("ul");

  // Process each heading
  headings.forEach((heading, index) => {
    // Add IDs to headings for linking
    if (!heading.id) {
      heading.id = "heading-" + index;
    }

    const listItem = document.createElement("li");
    listItem.className = "toc-" + heading.tagName.toLowerCase();

    const link = document.createElement("a");
    link.href = "#" + heading.id;
    link.textContent = heading.textContent;
    link.setAttribute("data-target", heading.id);

    listItem.appendChild(link);
    tocList.appendChild(listItem);
  });

  tocContent.appendChild(tocList);
}

// Initialize intersection observer to watch headings
function initHeadingObserver() {
  // Get all headings that have corresponding TOC entries
  const headings = Array.from(
    document.querySelectorAll(
      "#post-container h1[id], #post-container h2[id], #post-container h3[id], #post-container h4[id]"
    )
  );

  // Skip the first two h4 headings (author and date)
  const contentHeadings = headings.filter(
    (heading, index) => !(heading.tagName === "H4" && index < 2)
  );

  if (contentHeadings.length === 0) return;

  // Create an intersection observer
  const headingObserver = new IntersectionObserver(
    (entries) => {
      // Find all entries that are currently visible
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);

      if (visibleEntries.length === 0) return;

      // Get the first visible heading
      let firstVisibleHeading = visibleEntries[0].target;

      // If multiple headings are visible, find the one closest to the top
      if (visibleEntries.length > 1) {
        firstVisibleHeading = visibleEntries.reduce((closest, entry) => {
          const closestPosition = closest.boundingClientRect.top;
          const currentPosition = entry.boundingClientRect.top;
          return Math.abs(currentPosition) < Math.abs(closestPosition)
            ? entry
            : closest;
        }).target;
      }

      // Update the active TOC item
      updateActiveTocItem(firstVisibleHeading.id);
    },
    {
      rootMargin: "-80px 0px -80% 0px", // Adjust as needed
    }
  );

  // Observe each heading
  contentHeadings.forEach((heading) => {
    headingObserver.observe(heading);
  });
}

// Update active TOC item
function updateActiveTocItem(headingId) {
  // Remove active class from all TOC links
  document.querySelectorAll("#toc-content a").forEach((link) => {
    link.classList.remove("active");
  });

  // Add active class to the current heading's TOC link
  const activeLink = document.querySelector(
    `#toc-content a[data-target="${headingId}"]`
  );
  if (activeLink) {
    activeLink.classList.add("active");
  }
}

// Initialize TOC toggle functionality
function initTocToggle() {
  const toggleButton = document.getElementById("toggle-toc");
  const toc = document.getElementById("table-of-contents");

  if (!toggleButton || !toc) return;

  toggleButton.addEventListener("click", () => {
    toc.classList.toggle("toc-collapsed");
    toggleButton.classList.toggle("collapsed");
  });
}
