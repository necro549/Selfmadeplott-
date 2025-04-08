document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('text-input');
    const fontSelect = document.getElementById('font-select');
    const livePreview = document.getElementById('live-preview');

    // Event listener to update the live preview
    textInput.addEventListener('input', updateLivePreview);
    fontSelect.addEventListener('change', updateLivePreview);

    function updateLivePreview() {
        livePreview.textContent = textInput.value;
        livePreview.style.fontFamily = fontSelect.value;
    }

    // Manually trigger the update to set initial state
    updateLivePreview();
});
