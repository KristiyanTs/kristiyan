// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { rootMargin: '0px', threshold: 0.1 });

// Observe all sections with fade-in class
document.querySelectorAll('.section-fade-in').forEach(section => {
    observer.observe(section);
});

// CV Download functionality
document.addEventListener('DOMContentLoaded', function() {
    const cvDownloadBtn = document.querySelector('a[href="./kristiyan-tsvetanov-cv.pdf"]');
    
    if (cvDownloadBtn) {
        cvDownloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            downloadCV();
        });
    }
});

async function downloadCV() {
    try {
        // Show loading state
        const btn = document.querySelector('a[href="./kristiyan-tsvetanov-cv.pdf"]');
        const originalText = btn.textContent;
        btn.textContent = 'Generating PDF...';
        btn.style.pointerEvents = 'none';
        
        // Load the CV HTML content
        const response = await fetch('./cv.html');
        const cvHtml = await response.text();
        
        // Create a temporary container for the CV
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = cvHtml;
        const cvContent = tempContainer.querySelector('.cv-container');
        
        // Configure PDF options
        const opt = {
            margin: [15, 15, 15, 15],
            filename: 'kristiyan-tsvetanov-cv.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { 
                scale: 2,
                useCORS: true,
                letterRendering: true,
                allowTaint: true,
                foreignObjectRendering: true
            },
            jsPDF: { 
                unit: 'mm', 
                format: 'a4', 
                orientation: 'portrait' 
            }
        };
        
        // Generate and download PDF
        const pdf = await html2pdf().set(opt).from(cvContent).save();
        
        // Reset button state
        btn.textContent = originalText;
        btn.style.pointerEvents = 'auto';
        
    } catch (error) {
        console.error('Error generating PDF:', error);
        
        // Reset button state
        const btn = document.querySelector('a[href="./kristiyan-tsvetanov-cv.pdf"]');
        btn.textContent = 'Download CV';
        btn.style.pointerEvents = 'auto';
        
        // Fallback: open CV in new tab
        window.open('./cv.html', '_blank');
    }
}
