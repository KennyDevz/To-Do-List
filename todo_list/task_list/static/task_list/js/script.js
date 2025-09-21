document.addEventListener("DOMContentLoaded", () => {
    const deleteLinks = document.querySelectorAll(".delete");

    // Confirm before deleting
    deleteLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            if (!confirm("Are you sure you want to delete this task?")) {
                e.preventDefault();
            }
        });
    });

    // Instant strike-through effect when clicking "✔"
    const completeLinks = document.querySelectorAll(".complete");
    completeLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const li = e.target.closest("li");
            li.classList.toggle("done");
            // Django will still handle updating in the DB
        });
    });
});
