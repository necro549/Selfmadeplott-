document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('text-input');
    const fontSelect = document.getElementById('font-select');
    const livePreview = document.getElementById('live-preview');

    const fonts = [
        'Schriftart1',
        'Schriftart2',
        'Schriftart3',
        'Schriftart4',
        'Schriftart5',
        'Schriftart6',
        'Schriftart7',
        'Schriftart8',
        'Schriftart9',
        'Schriftart10',
        'Schriftart11',
        'Schriftart12',
        'Schriftart13',
        'Schriftart14'
    ];

    const fontUrls = [
        'https://github.com/necro549/Selfmadeplott-/raw/d61cf98eec3d94ea4ed7977b0601599337fca467/Schriftnr%201.woff2',
        'https://github.com/necro549/Selfmadeplott-/raw/d61cf98eec3d94ea4ed7977b0601599337fca467/Schriftnr%202.woff2',
        'https://github.com/necro549/Selfmadeplott-/raw/d61cf98eec3d94ea4ed7977b0601599337fca467/Schriftnr%203.woff2',
        'https://github.com/necro549/Selfmadeplott-/raw/d61cf98eec3d94ea4ed7977b0601599337fca467/Schriftnr%204.woff2',
        'https://github.com/necro549/Selfmadeplott-/raw/d61cf98eec3d94ea4ed7977b0601599337fca467/Schriftnr%205.woff2',
        'https://github.com/necro549/Selfmadeplott-/raw/d61cf98eec3d94ea4ed7977b0601599337fca467/Schriftnr%206.woff2',
        'https://github.com/necro549/Selfmadeplott-/raw/d61cf98eec3d94ea4ed7977b0601599337fca467/Schriftnr%207.woff2',
        'https://github.com/necro549/Selfmadeplott-/raw/d61cf98eec3d94ea4ed7977b0601599337fca467/Schriftnr%208.woff2',
        'https://github.com/necro549/Selfmadeplott-/raw/d61cf98eec3d94ea4ed7977b0601599337fca467/Schriftnr%209.woff2',
        'https://github.com/necro549/Selfmadeplott-/raw/d61cf98eec3d94ea4ed7977b0601599337fca467/Schriftnr%2010.woff2',
        'https://github.com/necro549/Selfmadeplott-/raw/d61cf98eec3d94ea4ed7977b0601599337fca467/Schriftnr%2011.woff2',
        'https://github.com/necro549/Selfmadeplott-/raw/d61cf98eec3d94ea4ed7977b0601599337fca467/Schriftnr%2012.woff2',
        'https://github.com/necro549/Selfmadeplott-/raw/d61cf98eec3d94ea4ed7977b0601599337fca467/Schriftnr%2013.woff2',
        'https://github.com/necro549/Selfmadeplott-/raw/d61cf98eec3d94ea4ed7977b0601599337fca467/Schriftnr%2014.woff2'
    ];

    // Load fonts dynamically
    fonts.forEach((font, index) => {
        const fontFace = new FontFace(font, `url('${fontUrls[index]}')`);
        fontFace.load().then(function(loadedFontFace) {
            document.fonts.add(loadedFontFace);
        });
    });

    textInput.addEventListener('input', updateLivePreview);
    fontSelect.addEventListener('change', updateLivePreview);

    function updateLivePreview() {
        livePreview.textContent = textInput.value;
        livePreview.style.fontFamily = fontSelect.value;
    }
});
