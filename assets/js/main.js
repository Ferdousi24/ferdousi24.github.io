document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".skill-btn");
    let projects = document.querySelectorAll(".col-4.col-12-mobile"); // Target all sections

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let category = this.getAttribute("data-category");

            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove("active"));

            // Add active class to clicked button
            this.classList.add("active");

            // Show/hide projects (exclude 'exclude-category' sections)
            projects.forEach(project => {
                if (!project.classList.contains("exclude-category")) {
                    if (category === "all" || project.getAttribute("data-category") === category) {
                        project.style.display = "block";  // Show relevant projects
                    } else {
                        project.style.display = "none";   // Hide non-matching projects
                    }
                }
            });
        });
    });
});
