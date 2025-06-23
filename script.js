document.addEventListener("DOMContentLoaded", () => {
    const roles = ["UI/UX Designer", "Web Developer", "Mobile App Developer"];
    const typedText = document.getElementById("typed-text");
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;

    function type() {
        const currentRole = roles[roleIndex];
        if (isDeleting) {
            charIndex--;
            typedText.textContent = currentRole.substring(0, charIndex);
        } else {
            charIndex++;
            typedText.textContent = currentRole.substring(0, charIndex);
        }

        if (!isDeleting && charIndex === currentRole.length) {
            setTimeout(() => {
                isDeleting = true;
                type();
            }, 1500);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : typingSpeed);
        }
    }

    type();
});
