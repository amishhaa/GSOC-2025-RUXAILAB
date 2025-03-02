(function() {
    document.addEventListener('click', function(event) {
        const eventData = {
            type: 'click',
            target: event.target.tagName,
            timestamp: new Date().toISOString(),
            page: window.location.href
        };
        fetch('http://localhost:5001/your-project-id/your-region/trackEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(eventData),
        }).catch(error => console.error('Error tracking event:', error));
    });
})();