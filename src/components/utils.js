export function loadScript(src, callback) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.onload = callback;
  
    // Attach the script to the document's head
    document.head.appendChild(script);
  }
  