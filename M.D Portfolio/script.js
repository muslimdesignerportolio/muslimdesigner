document.addEventListener('DOMContentLoaded', function () {
    // Update current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Smooth scroll to top
    document.getElementById('toTop').addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Service Modal
    $('#serviceModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var imgSrc = button.data('img');
        var modal = $(this);
        modal.find('.modal-body img').attr('src', imgSrc);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const footer = document.querySelector('footer');
    const originalFooterHTML = footer.innerHTML;

    // Function to check if footer content has been modified
    function checkFooterIntegrity() {
        if (footer.innerHTML !== originalFooterHTML) {
            window.location.href = 'https://www.google.com';
        }
    }

    // Use MutationObserver to monitor changes in the footer
    const observer = new MutationObserver(checkFooterIntegrity);
    observer.observe(footer, { childList: true, subtree: true, characterData: true });
});
