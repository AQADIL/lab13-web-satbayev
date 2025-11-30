function showToast(message) {
    document.getElementById('toastMessage').textContent = message;
    const toast = new bootstrap.Toast(document.getElementById('successToast'));
    toast.show();
}

function showEnrollModal() {
    const modal = new bootstrap.Modal(document.getElementById('enrollModal'));
    modal.show();
}

function showCourseDetails(course) {
    const courses = {
        frontend: {
            title: 'Frontend әзірлеу',
            content: `
                <h6>Курс сипаттамасы</h6>
                <p>Бұл курс сізге modern веб-интерфейстерді әзірлеуді үйреді.</p>
                <h6>Бағдарлама:</h6>
                <ul>
                    <li>HTML5 & CSS3 негіздері</li>
                    <li>JavaScript ES6+</li>
                    <li>React & Redux</li>
                    <li>Webpack & Build Tools</li>
                </ul>
                <h6>Ұзақтығы: 4 ай</h6>
                <h6>Бағасы: 150,000 ₸</h6>
            `
        },
        backend: {
            title: 'Backend әзірлеу',
            content: `
                <h6>Курс сипаттамасы</h6>
                <p>Server-side бағдарламалау және API әзірлеу.</p>
                <h6>Бағдарлама:</h6>
                <ul>
                    <li>Node.js & Express</li>
                    <li>Database Design</li>
                    <li>REST & GraphQL API</li>
                    <li>Authentication & Security</li>
                </ul>
                <h6>Ұзақтығы: 3 ай</h6>
                <h6>Бағасы: 120,000 ₸</h6>
            `
        },
        mobile: {
            title: 'Мобильді әзірлеу',
            content: `
                <h6>Курс сипаттамасы</h6>
                <p>iOS және Android қос платформалы әзірлеу.</p>
                <h6>Бағдарлама:</h6>
                <ul>
                    <li>React Native</li>
                    <li>Flutter</li>
                    <li>Mobile UI/UX</li>
                    <li>App Deployment</li>
                </ul>
                <h6>Ұзақтығы: 5 ай</h6>
                <h6>Бағасы: 180,000 ₸</h6>
            `
        },
        design: {
            title: 'UI/UX Дизайн',
            content: `
                <h6>Курс сипаттамасы</h6>
                <p>Қолданбалы интерфейс дизайн және пайдаланушы тәжірибесі.</p>
                <h6>Бағдарлама:</h6>
                <ul>
                    <li>Design Principles</li>
                    <li>Figma & Adobe XD</li>
                    <li>Prototyping</li>
                    <li>User Research</li>
                </ul>
                <h6>Ұзақтығы: 3 ай</h6>
                <h6>Бағасы: 100,000 ₸</h6>
            `
        },
        security: {
            title: 'Киберқауіпсіздік',
            content: `
                <h6>Курс сипаттамасы</h6>
                <p>Ethical hacking және киберқауіпсіздік негіздері.</p>
                <h6>Бағдарлама:</h6>
                <ul>
                    <li>Network Security</li>
                    <li>Penetration Testing</li>
                    <li>Cryptography</li>
                    <li>Security Tools</li>
                </ul>
                <h6>Ұзақтығы: 4 ай</h6>
                <h6>Бағасы: 160,000 ₸</h6>
            `
        },
        ai: {
            title: 'Жасанды интеллект',
            content: `
                <h6>Курс сипаттамасы</h6>
                <p>Machine Learning және Deep Learning.</p>
                <h6>Бағдарлама:</h6>
                <ul>
                    <li>Python for ML</li>
                    <li>TensorFlow & PyTorch</li>
                    <li>Neural Networks</li>
                    <li>Computer Vision</li>
                </ul>
                <h6>Ұзақтығы: 6 ай</h6>
                <h6>Бағасы: 200,000 ₸</h6>
            `
        }
    };

    const courseData = courses[course];
    document.getElementById('courseModalTitle').textContent = courseData.title;
    document.getElementById('courseModalBody').innerHTML = courseData.content;
    
    const modal = new bootstrap.Modal(document.getElementById('courseModal'));
    modal.show();
}

function submitEnroll() {
    const form = document.getElementById('enrollForm');
    if (form.checkValidity()) {
        showToast('Сіз сәтті тіркелдіңіз! Жақын арада хабарласамыз.');
        bootstrap.Modal.getInstance(document.getElementById('enrollModal')).hide();
        form.reset();
    } else {
        showToast('Барлық өрістерді толтырыңыз!');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const carousel = new bootstrap.Carousel(document.getElementById('heroCarousel'), {
        interval: 5000,
        ride: 'carousel'
    });
});
