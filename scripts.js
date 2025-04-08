document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('text-input');
    const fontSelect = document.getElementById('font-select');
    const livePreview = document.getElementById('live-preview');

    const fonts = [
        'https://drive.google.com/uc?export=view&id=12itQA30oq7Pdk217ma-WmCpwfNGFlGb2',
        'https://drive.google.com/uc?export=view&id=1AC-LqdJmyW-fN6bUwNL2poE_2kp4vMXA',
        'https://drive.google.com/uc?export=view&id=1AIWhpyfZUyWJ8dQRhxM7r_jvVbq_R93y',
        'https://drive.google.com/uc?export=view&id=1Uo5hQFpkoODoPYKqoWuo8dVzCJKpcGCJ',
        'https://drive.google.com/uc?export=view&id=1VFLe-kNg2_MVlnNX56s9sSiF44xVMhvP',
        'https://drive.google.com/uc?export=view&id=1X8NiGuoicSduxEroVfMPiTkIsSPkVQAy',
        'https://drive.google.com/uc?export=view&id=1Xk2q8D0K9G6i7Om7wGsVKrSqtkPREq4d',
        'https://drive.google.com/uc?export=view&id=1aHlWaEqQRI3Ap05YXhiqkbbBk6oEE9Gv',
        'https://drive.google.com/uc?export=view&id=1aZeHAIjkYrRYnKCZPYB8b3OdUcZllqRD',
        'https://drive.google.com/uc?export=view&id=1ep904OgXNv_sGulqRhYkBT56OhyPqc1N',
        'https://drive.google.com/uc?export=view&id=1mukkNjWoOkzCaTkrIJTgKHoxtispe0H-',
        'https://drive.google.com/uc?export=view&id=1nTCwrafhELh7a9XhTDYqU_QoKGdtklaV',
        'https://drive.google.com/uc?export=view&id=1rGSqxvOQYt89cUDTujC-qhDY3BnjWCIm',
        'https://drive.google.com/uc?export=view&id=1tZ8njTyN4ZYEZETwiYKYsv5pXHOPBLgR'
    ];

    // Load fonts dynamically
    fonts.forEach((font, index) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = font;
        link.id = `font${index + 1}`;
        document.head.appendChild(link);
    });

    textInput.addEventListener('input', updateLivePreview);
    fontSelect.addEventListener('change', updateLivePreview);

    function updateLivePreview() {
        livePreview.textContent = textInput.value;
        livePreview.style.fontFamily = fontSelect.value;
    }
});
